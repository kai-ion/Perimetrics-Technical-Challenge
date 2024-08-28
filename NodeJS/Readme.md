# problem 1
   
Given a global constant `PeopleData` (string),
complete the code below so it yields the expected

`people` (Array<{ name: string, dob: string, zip: string }>).

## solution

Simply parse the `PeopleData` string into an array of objects with `name, dob, and zip properties`.

```javascript
const people = PeopleData.split("\n")
    .filter(line => line.trim()) // Filter out any empty lines and trim whitespace
    .map(line => {
        const [name, dob, zip] = line.split(",")
        return { name: name.trim(), dob: dob.trim(), zip: zip.trim() } // Trim spaces from name, dob, and zip
    })

```

# problem 2

Given a defined `ZipCodesData` (string),
complete the code below so it yields the expected `zipcodes` (Record<string, string>).

## solution

Transform the `ZipCodesData` string into an object that maps zip codes to states

```javascript
const zipcodes = ZipCodesData.split("\n")
    .filter(line => line.trim()) // Filter out any empty lines and trim whitespace
    .map(line => {
        const [zip, state] = line.split(",")
        return { zip: zip.trim(), state: state.trim() } // Trim spaces from zip and state
    })
    .reduce((acc, { zip, state }) => {
        acc[zip] = state
        return acc
    }, {})
```

# problem 3

If both `people` and `zipcodes` were pulled from a DB,
write an equivalent `SQL SELECT` statement yielding a similar result as the `console.log` output;

## solution

```sql
SELECT name, dob, zip, state
FROM people
JOIN zipcodes ON people.zip = zipcodes.zip
WHERE dob >= '1999-01-01';
```

# problem 4

After completing problems 1 and 2,
implement the recursive `groupByDobYearMonth` function below.
The `console.log` line at the bottom, upon calling your function

## solution
The `groupByDobYearMonth` function should group people by their year and month of birth, using a recursive approach.

```javascript
function groupByDobYearMonth(people) {
    /* finish this implementation -- NO LOOPS (for/while/do/etc) ALLOWED */
    return people.reduce((acc, person) => {
        const yearMonth = person.dob.slice(0, 7); // Extract "YYYY-MM" from the dob
        return {
            ...acc,
            [yearMonth]: [...(acc[yearMonth] || []), person]
        }
    }, {})

}
```
