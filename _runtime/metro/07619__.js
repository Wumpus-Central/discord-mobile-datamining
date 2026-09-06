// _runtime/metro/07619__.js
import getNative from "../00637_getNative.js";
import setToArray from "../00654_setToArray.js";
import noop from "../07620_noop.js";

if (getNative) {
  const _module = setToArray;
  const items = [, -0];
  const tmp5 = new getNative(items);
  if (1 / _module(tmp5)[1] === Infinity) {
    let noop = (arg0) => new getNative(arg0);
  }
  module.exports = noop;
}
