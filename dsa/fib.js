// @ts-check
"use strict";

/**
 *
 * @param {number} n
 * @returns {number}
 */
const fib = function (n) {
  let dp = new Array(n+1).fill(0);
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

console.log(fib(1));
console.log(fib(4));
console.log(fib(3));
console.log(fib(25));
