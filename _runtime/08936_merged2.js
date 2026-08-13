// _runtime/08936_merged2.js
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import { number } from "emptyFunction";
import { number } from "emptyFunction";
import { number } from "emptyFunction";
import { number } from "emptyFunction";
import { number } from "emptyFunction";

let obj = { transform: null, transformMatrix: null, decomposedMatrix: null, scaleX: null, scaleY: null, rotation: null, translateX: null, translateY: null };
obj = { perspective: require("emptyFunction").number };
const items = [emptyFunction.shape(obj), , , , , , , , , , , ];
obj = { rotate: require("emptyFunction").string };
items[1] = emptyFunction.shape(obj);
items[2] = emptyFunction.shape({ rotateX: require("emptyFunction").string });
const obj1 = { rotateX: require("emptyFunction").string };
items[3] = emptyFunction.shape({ rotateY: require("emptyFunction").string });
const obj2 = { rotateY: require("emptyFunction").string };
items[4] = emptyFunction.shape({ rotateZ: require("emptyFunction").string });
const obj3 = { rotateZ: require("emptyFunction").string };
items[5] = emptyFunction.shape({ scale: require("emptyFunction").number });
const obj4 = { scale: require("emptyFunction").number };
items[6] = emptyFunction.shape({ scaleX: require("emptyFunction").number });
const obj5 = { scaleX: require("emptyFunction").number };
items[7] = emptyFunction.shape({ scaleY: require("emptyFunction").number });
const obj6 = { scaleY: require("emptyFunction").number };
items[8] = emptyFunction.shape({ translateX: require("emptyFunction").number });
const obj7 = { translateX: require("emptyFunction").number };
items[9] = emptyFunction.shape({ translateY: require("emptyFunction").number });
const obj8 = { translateY: require("emptyFunction").number };
items[10] = emptyFunction.shape({ skewX: require("emptyFunction").string });
const obj9 = { skewX: require("emptyFunction").string };
items[11] = emptyFunction.shape({ skewY: require("emptyFunction").string });
obj[0] = emptyFunction.arrayOf(emptyFunction.oneOfType(items));
obj[1] = function transformMatrix(arg0, arg1, arg2) {
  if (arg0[arg1]) {
    const _Error = Error;
    const error = new Error("The transformMatrix style property is deprecated. Use `transform: [{ matrix: ... }]` instead.");
    return error;
  }
};
obj[2] = function decomposedMatrix(arg0, arg1, arg2) {
  if (arg0[arg1]) {
    const _Error = Error;
    const error = new Error("The decomposedMatrix style property is deprecated. Use `transform: [...]` instead.");
    return error;
  }
};
obj[3] = function validate(arg0, arg1, arg2) {
  const substr = [...arguments].slice();
  if (undefined !== arg0[arg1]) {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn("`" + arg1 + "` supplied to `" + arg2 + "` has been deprecated. " + "Use the transform prop instead.");
  }
  return number(arg1, arg2, ...substr);
};
obj[4] = function validate(arg0, arg1, arg2) {
  const substr = [...arguments].slice();
  if (undefined !== arg0[arg1]) {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn("`" + arg1 + "` supplied to `" + arg2 + "` has been deprecated. " + "Use the transform prop instead.");
  }
  return number(arg1, arg2, ...substr);
};
obj[5] = function validate(arg0, arg1, arg2) {
  const substr = [...arguments].slice();
  if (undefined !== arg0[arg1]) {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn("`" + arg1 + "` supplied to `" + arg2 + "` has been deprecated. " + "Use the transform prop instead.");
  }
  return number(arg1, arg2, ...substr);
};
obj[6] = function validate(arg0, arg1, arg2) {
  const substr = [...arguments].slice();
  if (undefined !== arg0[arg1]) {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn("`" + arg1 + "` supplied to `" + arg2 + "` has been deprecated. " + "Use the transform prop instead.");
  }
  return number(arg1, arg2, ...substr);
};
obj[7] = function validate(arg0, arg1, arg2) {
  const substr = [...arguments].slice();
  if (undefined !== arg0[arg1]) {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn("`" + arg1 + "` supplied to `" + arg2 + "` has been deprecated. " + "Use the transform prop instead.");
  }
  return number(arg1, arg2, ...substr);
};

export default obj;