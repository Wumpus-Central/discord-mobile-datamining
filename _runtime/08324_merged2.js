// _runtime/08324_merged2.js
import "module_4389";
import emptyFunction from "metro/04389__.js";

let obj = {
  transform: null,
  transformMatrix: null,
  decomposedMatrix: null,
  scaleX: null,
  scaleY: null,
  rotation: null,
  translateX: null,
  translateY: null,
};
obj = { perspective: emptyFunction.number };
const items = [emptyFunction.shape(obj), , , , , , , , , , ,];
obj = { rotate: emptyFunction.string };
items[1] = emptyFunction.shape(obj);
items[2] = emptyFunction.shape({ rotateX: emptyFunction.string });
const obj1 = { rotateX: emptyFunction.string };
items[3] = emptyFunction.shape({ rotateY: emptyFunction.string });
const obj2 = { rotateY: emptyFunction.string };
items[4] = emptyFunction.shape({ rotateZ: emptyFunction.string });
const obj3 = { rotateZ: emptyFunction.string };
items[5] = emptyFunction.shape({ scale: emptyFunction.number });
const obj4 = { scale: emptyFunction.number };
items[6] = emptyFunction.shape({ scaleX: emptyFunction.number });
const obj5 = { scaleX: emptyFunction.number };
items[7] = emptyFunction.shape({ scaleY: emptyFunction.number });
const obj6 = { scaleY: emptyFunction.number };
items[8] = emptyFunction.shape({ translateX: emptyFunction.number });
const obj7 = { translateX: emptyFunction.number };
items[9] = emptyFunction.shape({ translateY: emptyFunction.number });
const obj8 = { translateY: emptyFunction.number };
items[10] = emptyFunction.shape({ skewX: emptyFunction.string });
const obj9 = { skewX: emptyFunction.string };
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
