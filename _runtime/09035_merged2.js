// _runtime/09035_merged2.js
import "emptyFunction";
import emptyFunction from "04205_emptyFunction.js";

let obj = { perspective: emptyFunction.number };
const items = [emptyFunction.shape(obj), , , , , , , , , , , ];
obj = { rotate: emptyFunction.string };
items[1] = emptyFunction.shape(obj);
items[2] = emptyFunction.shape({ rotateX: emptyFunction.string });
items[3] = emptyFunction.shape({ rotateY: emptyFunction.string });
items[4] = emptyFunction.shape({ rotateZ: emptyFunction.string });
items[5] = emptyFunction.shape({ scale: emptyFunction.number });
items[6] = emptyFunction.shape({ scaleX: emptyFunction.number });
items[7] = emptyFunction.shape({ scaleY: emptyFunction.number });
items[8] = emptyFunction.shape({ translateX: emptyFunction.number });
items[9] = emptyFunction.shape({ translateY: emptyFunction.number });
items[10] = emptyFunction.shape({ skewX: emptyFunction.string });
items[11] = emptyFunction.shape({ skewY: emptyFunction.string });
obj[0] = emptyFunction.arrayOf(emptyFunction.oneOfType(items));
obj[1] = function transformMatrix(arg0, arg1, arg2) {
  if (arg0[arg1]) {
    const _Error = Error;
    error = new Error("The transformMatrix style property is deprecated. Use `transform: [{ matrix: ... }]` instead.");
    return error;
  }
};
obj[2] = function decomposedMatrix(arg0, arg1, arg2) {
  if (arg0[arg1]) {
    const _Error = Error;
    error = new Error("The decomposedMatrix style property is deprecated. Use `transform: [...]` instead.");
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
const number = emptyFunction.number;
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