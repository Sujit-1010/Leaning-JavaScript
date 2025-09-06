/***************************************************
 * JavaScript Code Execution: Global Execution Context
 *
 * 1. Global Execution Context (GEC) is created when the JS engine starts executing.
 *    It goes through two phases:
 *    -------------------------------------------
 *    ➤ Memory Creation Phase (a.k.a. Creation Phase)
 *    ➤ Code Execution Phase
 ***************************************************/

// ✅ Simple Example:
var x = 10;
var y = 5;

function add(a, b) {
    return a + b;
}

var result = add(x, y);
console.log(result);

/***************************************************
 * 🔹 MEMORY CREATION PHASE (a.k.a. HOISTING PHASE):
 *
 * ➤ JS scans the code and sets up memory space for variables and functions.
 * ➤ Variables are initialized with `undefined`.
 * ➤ Function declarations are stored as-is (with their body).
 *
 * So in memory:
 * -------------------------------------------------
 * x       → undefined
 * y       → undefined
 * add     → function object (the whole function is hoisted)
 * result  → undefined
 *
 * Note: No code is executed in this phase.
 **************************************************/

/***************************************************
 * 🔹 CODE EXECUTION PHASE:
 *
 * ➤ JS starts executing the code line-by-line.
 * ➤ Variables are assigned actual values.
 * ➤ Function calls are executed.
 *
 * Step-by-step:
 * -------------------------------------------------
 * x = 10               → x is now 10
 * y = 5                → y is now 5
 * result = add(x, y)   → calls add(10, 5)
 *                          → returns 15
 *                          → result is now 15
 * console.log(result)  → outputs 15
 **************************************************/

/***************************************************
 * 🔸 Summary:
 * - JS code runs in two phases inside a Global Execution Context.
 * - During memory phase, variables & functions are hoisted.
 * - During execution phase, actual assignments & function calls happen.
 **************************************************/
