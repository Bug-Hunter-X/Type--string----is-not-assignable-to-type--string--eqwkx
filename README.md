# Type 'string[]' is not assignable to type 'string'
This bug demonstrates a common type error in TypeScript where an array of strings is passed to a function expecting a single string. The error message clearly indicates the problem: the function `greeter` expects a single string argument, but an array of strings is provided.

## How to reproduce the bug
1. Clone this repository.
2. Run `tsc bug.ts` to compile the code.
3. Run `node bug.js` to see the error message.

## How to solve the bug
The solution is to modify either the function signature or the array to match the expected type.  The solution provided in `bugSolution.ts` demonstrates how to iterate over the array and call the function for each element.