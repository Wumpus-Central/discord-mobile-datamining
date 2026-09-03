// _runtime/metro/07374__.js
import getNative from "../00770_getNative.js";
import setToArray from "../00787_setToArray.js";
import noop from "../07375_noop.js";

if (getNative) {
  const _module = setToArray;
  const items = [, -0];
  const tmp5 = new getNative(items);
  if (1 / _module(tmp5)[1] === Infinity) {
    let noop = (arg0) => new getNative(arg0);
  }
  module.exports = noop;
}
