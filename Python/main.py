import yaml
import csv
import os

def find_assignments(data, prefix='assignment'):
    assignments = {}

    def search(data):
        if isinstance(data, dict):
            for key, value in data.items():
                if key.startswith(prefix):
                    assignments[key] = value
                elif isinstance(value, (dict, list)):
                    search(value)
        elif isinstance(data, list):
            for item in data:
                if isinstance(item, (dict, list)):
                    search(item)

    search(data)
    return assignments

def get_highest_scorer(assignments):
    highest_scores = {}

    for assignment, records in assignments.items():
        for student, score in records.items():  # student is now the key, and score is the value
            if assignment not in highest_scores or score > highest_scores[assignment]['score']:
                highest_scores[assignment] = {'student': student, 'score': score}

    return highest_scores


def read_yaml(file_path):
    with open(file_path, 'r') as file:
        return yaml.safe_load(file)

def write_csv(data, output_file):
    with open(output_file, 'w', newline='') as csvfile:
        fieldnames = ['Assignment_Id', 'Student_Name', 'Highest_Grade']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        writer.writeheader()
        for assignment, details in data.items():
            writer.writerow({'Assignment_Id': assignment, 'Student_Name': details['student'], 'Highest_Grade': details['score']})

def main():
    yaml_file = 'Python/data1.yml'  # Replace with your YAML file path
    csv_file = 'Python/output.csv'  # Replace with your desired output CSV file path

    # Read YAML file
    data = read_yaml(yaml_file)

    # Find all assignment records
    assignments = find_assignments(data)

    # Get highest scores for each assignment
    highest_scorers = get_highest_scorer(assignments)

    # Write to CSV
    write_csv(highest_scorers, csv_file)

    print(f'CSV report generated: {csv_file}')

if __name__ == '__main__':
    main()
