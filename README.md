# Unexpected Behavior in Division with Zero

This repository demonstrates a subtle bug in JavaScript related to division by zero. The `foo` function attempts to handle the cases where either `a` or `b` is zero, but does not correctly handle the case where both are zero.

## Bug Description

The `foo` function divides `a` by `b`.  When `b` is zero, it correctly throws an error. However, when *both* `a` and `b` are zero, it unexpectedly returns 0 instead of throwing an error or returning `NaN`. This could lead to unexpected behavior in downstream calculations.

## Solution

The solution addresses this edge case by explicitly handling the case where both `a` and `b` are zero. This is done by using a conditional statement that checks if both values are zero. If they are, the function returns `NaN`, indicating an undefined result. If not, it proceeds with the division operation.

## How to reproduce

Clone this repository and run the `bug.js` file. Observe the unexpected 0 result in the case of foo(0, 0). Then, execute the `bugSolution.js` file to see the corrected handling of the edge case.
