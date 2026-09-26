// _runtime/07772_merged2.js
import "module_4663";
import emptyFunction_mod from "metro/04663__.js";

const obj = {
  transform: null,
  transformMatrix: null,
  decomposedMatrix: null,
  scaleX: null,
  scaleY: null,
  rotation: null,
  translateX: null,
  translateY: null,
};
let emptyFunction = emptyFunction_mod;
const items = [emptyFunction.shape({ perspective: emptyFunction.number }), , , , , , , , , , ,];
let emptyFunction = emptyFunction_mod;
const obj2 = { perspective: emptyFunction.number };
items[1] = emptyFunction.shape({ rotate: emptyFunction.string });
let emptyFunction = emptyFunction_mod;
const obj3 = { rotate: emptyFunction.string };
items[2] = emptyFunction.shape({ rotateX: emptyFunction.string });
let emptyFunction = emptyFunction_mod;
const obj4 = { rotateX: emptyFunction.string };
items[3] = emptyFunction.shape({ rotateY: emptyFunction.string });
let emptyFunction = emptyFunction_mod;
const obj5 = { rotateY: emptyFunction.string };
items[4] = emptyFunction.shape({ rotateZ: emptyFunction.string });
let emptyFunction = emptyFunction_mod;
const obj6 = { rotateZ: emptyFunction.string };
items[5] = emptyFunction.shape({ scale: emptyFunction.number });
let emptyFunction = emptyFunction_mod;
const obj7 = { scale: emptyFunction.number };
items[6] = emptyFunction.shape({ scaleX: emptyFunction.number });
let emptyFunction = emptyFunction_mod;
const obj8 = { scaleX: emptyFunction.number };
items[7] = emptyFunction.shape({ scaleY: emptyFunction.number });
let emptyFunction = emptyFunction_mod;
const obj9 = { scaleY: emptyFunction.number };
items[8] = emptyFunction.shape({ translateX: emptyFunction.number });
let emptyFunction = emptyFunction_mod;
const obj10 = { translateX: emptyFunction.number };
items[9] = emptyFunction.shape({ translateY: emptyFunction.number });
let emptyFunction = emptyFunction_mod;
const obj11 = { translateY: emptyFunction.number };
items[10] = emptyFunction.shape({ skewX: emptyFunction.string });
let emptyFunction = emptyFunction_mod;
const obj12 = { skewX: emptyFunction.string };
items[11] = emptyFunction.shape({ skewY: emptyFunction.string });
obj.transform = emptyFunction.arrayOf(emptyFunction.oneOfType(items));
obj.transformMatrix = function transformMatrix(arg0, arg1, arg2) {
  if (arg0[arg1]) {
    const _Error = Error;
    const error = new Error(
      "The transformMatrix style property is deprecated. Use `transform: [{ matrix: ... }]` instead.",
    );
    return error;
  }
};
obj.decomposedMatrix = function decomposedMatrix(arg0, arg1, arg2) {
  if (arg0[arg1]) {
    const _Error = Error;
    const error = new Error("The decomposedMatrix style property is deprecated. Use `transform: [...]` instead.");
    return error;
  }
};
const number = emptyFunction.number;
obj.scaleX = function validate(arg0, arg1, arg2) {
  const substr = [...arguments].slice();
  if (undefined !== arg0[arg1]) {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn("`" + arg1 + "` supplied to `" + arg2 + "` has been deprecated. " + "Use the transform prop instead.");
  }
  return number(arg1, arg2, ...substr);
};
const number2 = emptyFunction.number;
obj.scaleY = function validate(arg0, arg1, arg2) {
  const substr = [...arguments].slice();
  if (undefined !== arg0[arg1]) {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn("`" + arg1 + "` supplied to `" + arg2 + "` has been deprecated. " + "Use the transform prop instead.");
  }
  return number(arg1, arg2, ...substr);
};
const number3 = emptyFunction.number;
obj.rotation = function validate(arg0, arg1, arg2) {
  const substr = [...arguments].slice();
  if (undefined !== arg0[arg1]) {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn("`" + arg1 + "` supplied to `" + arg2 + "` has been deprecated. " + "Use the transform prop instead.");
  }
  return number(arg1, arg2, ...substr);
};
const number4 = emptyFunction.number;
obj.translateX = function validate(arg0, arg1, arg2) {
  const substr = [...arguments].slice();
  if (undefined !== arg0[arg1]) {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn("`" + arg1 + "` supplied to `" + arg2 + "` has been deprecated. " + "Use the transform prop instead.");
  }
  return number(arg1, arg2, ...substr);
};
const number5 = emptyFunction.number;
obj.translateY = function validate(arg0, arg1, arg2) {
  const substr = [...arguments].slice();
  if (undefined !== arg0[arg1]) {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn("`" + arg1 + "` supplied to `" + arg2 + "` has been deprecated. " + "Use the transform prop instead.");
  }
  return number(arg1, arg2, ...substr);
};

export default obj;
