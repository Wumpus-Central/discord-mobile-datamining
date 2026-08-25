// === Module 7225: ? ===

// Module 7225
import getNative from "getNative" /* 773 */;
import setToArray from "setToArray" /* 790 */;
import noop from "noop" /* 7226 */;

if (getNative) {
  const _module = setToArray;
  const items = [, -0];
  const tmp5 = new getNative(items);
  if (1 / _module(tmp5)[1] === Infinity) {
    let noop = (arg0) => new getNative(arg0);
  }
  module.exports = noop;
}