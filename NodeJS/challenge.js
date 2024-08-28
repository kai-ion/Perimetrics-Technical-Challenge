const PeopleData = `
    mary,2001-01-02,27518
    john,1997-05-03,75001
    sam,1999-05-04,90210
    jim,1999-05-09,75043
`
 
const ZipCodesData = `
    90210,CA
    75001,TX
    27518,NC
`
/** 
 * You are given incomplete code below and your task is to complete it.
 * Read thru each problem carefully and follow the instructions.
 *
 * !!! DO NOT CHANGE ANYTHING ABOVE THIS LINE !!!
 * 
 * 
 * PROBLEM 1:
 *  Given a global constant `PeopleData` (string),
 *      complete the code below so it yields the expected
 *      `people` (Array<{ name: string, dob: string, zip: string }>).
 * 
 * EXPECTED:
 *  [
 *    {name: 'mary', dob: '2001-01-02', zip: '27518'},
 *    {name: 'john', dob: '1997-05-03', zip: '75001'},
 *    {name: 'sam',  dob: '1999-05-04', zip: '90210'},
 *    {name: 'jim',  dob: '1999-05-09', zip: '75043'}
 *  ]
 * 
 * NOTE:
 *  Follow instructions as stated in the in-line comments
 */

// ## Original statement 
// const people = PeopleData.split("\n")
//   .filter(/* replace with a one-liner `filter` handler -- NO SEMICOLONS */)
//   .map(/* replace with a one-liner `map` handler -- NO SEMICOLONS */)
//   .map(/* replace with a one-liner `map` handler -- NO SEMICOLONS */)

const people = PeopleData.split("\n")
    .filter(line => line.trim()) // Filter out any empty lines and trim whitespace
    .map(line => {
        const [name, dob, zip] = line.split(",")
        return { name: name.trim(), dob: dob.trim(), zip: zip.trim() } // Trim spaces from name, dob, and zip
    })

/**
 * PROBLEM 2:
 *  Given a defined `ZipCodesData` (string),
 *      complete the code below so it yields the expected `zipcodes` (Record<string, string>).
 * 
 * EXPECTED:
 *  { '75001': 'TX', '90210': 'CA', '27518': 'NC' }
 */

// original statement
// const zipcodes = ZipCodesData.split("\n")
//   .filter(/* replace with a one-liner `filter` handler -- NO SEMICOLON */)
//   .map(/* replace with a one-liner `map` handler -- NO SEMICOLON */)
//   .reduce(/* define a one-liner reducer -- NO SEMICOLON */)

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

// console.log('Zipcodes:', zipcodes); // Debugging line

/**
 * After completing the scripts above,
 *    execute your code to see the `console.log` output.
 */
// people.forEach(p => {
//     if (p.dob >= "1999-01-01") {
//         console.log(p.name, p.dob, p.zip, zipcodes[p.zip])
//     }
// })
/**
 * PROBLEM 3:
 *  If both `people` and `zipcodes` were pulled from a DB,
 *      write an equivalent `SQL SELECT` statement yielding a similar result as the `console.log` output;
 *      replace the space inside this comment below.
 * 
 * ANSWER:
SELECT name, dob, zip, state
FROM people
JOIN zipcodes ON people.zip = zipcodes.zip
WHERE dob >= '1999-01-01';
 */


/**
 * PROBLEM 4:
 *  After completing problems 1 and 2,
 *      implement the recursive `groupByDobYearMonth` function below.
*       The `console.log` line at the bottom, upon calling your function,
 *      must generate the following output:
 * 
 * EXPECTED:
 *  {
 *    "2001-01": [
 *      {
 *        "name": "mary",
 *        "dob": "2001-01-02",
 *        "zip": "27518"
 *      }
 *    ],
 *    "1997-05": [
 *      {
 *        "name": "john",
 *        "dob": "1997-05-03",
 *        "zip": "75001"
 *      }
 *    ],
 *    "1999-05": [
 *      {
 *        "name": "sam",
 *        "dob": "1999-05-04",
 *        "zip": "90210"
 *      },
 *      {
 *        "name": "jim",
 *        "dob": "1999-05-09",
 *        "zip": "75043"
 *      }
 *    ]
 *  }
 */

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

console.log(people.forEach(p => {
    if (p.dob >= "1999-01-01") {
        console.log(p.name, p.dob, p.zip, zipcodes[p.zip])
    }
}))

console.log(JSON.stringify(groupByDobYearMonth(people), null, 2))
