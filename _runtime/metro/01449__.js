// _runtime/metro/01449__.js
import isArguments from "../01450_isArguments.js";
import isGeneratorFunction from "../01452_isGeneratorFunction.js";
import isTypedArray from "../01455_isTypedArray.js";
import _mod1456 from "01456__.js";

function checkBoxedPrimitive(obj, fn) {
  if (typeof obj !== "object") {
    return false;
  } else {
    try {
      fn(obj);
      return true;
    } catch (err) {
      return false;
    }
  }
}
function isMapToString(View) {
  return "[object Map]" === hasOwnProperty(View);
}
function isSetToString(View) {
  return "[object Set]" === hasOwnProperty(View);
}
function isWeakMapToString(View) {
  return "[object WeakMap]" === hasOwnProperty(View);
}
function isArrayBufferToString(View) {
  return "[object ArrayBuffer]" === hasOwnProperty(View);
}
function isDataViewToString(View) {
  return "[object DataView]" === hasOwnProperty(View);
}
function isSharedArrayBufferToString(View) {
  return "[object SharedArrayBuffer]" === hasOwnProperty(View);
}
let closure_3 = typeof BigInt !== "undefined";
let closure_4 = typeof Symbol !== "undefined";
const call = toString.call;
const _Symbol = Symbol;
const bindResult = call.bind(toString);
const hasOwnProperty = bindResult;
const call2 = valueOf.call;
let closure_6 = call2.bind(valueOf);
const valueOf2 = String.prototype.valueOf;
const call3 = valueOf2.call;
let closure_7 = call3.bind(valueOf2);
const valueOf3 = Boolean.prototype.valueOf;
const call4 = valueOf3.call;
let closure_8 = call4.bind(valueOf3);
if (typeof BigInt !== "undefined") {
  const _BigInt = BigInt;
  const valueOf4 = BigInt.prototype.valueOf;
  const call5 = valueOf4.call;
  let closure_9 = call5.bind(valueOf4);
}
if (typeof _Symbol !== "undefined") {
  const _Symbol2 = Symbol;
  const valueOf5 = Symbol.prototype.valueOf;
  const call6 = valueOf5.call;
  let closure_10 = call6.bind(valueOf5);
}
let tmp2 = typeof Map !== "undefined";
if (typeof Map !== "undefined") {
  let _Map = Map;
  const self5 = this;
  const self6 = this;
  const map = new Map();
  tmp2 = "[object Map]" === bindResult(map);
}
isMapToString.working = tmp2;
let tmp3 = typeof Set !== "undefined";
if (typeof Set !== "undefined") {
  let _Set = Set;
  const self7 = this;
  const self8 = this;
  const set = new Set();
  tmp3 = "[object Set]" === bindResult(set);
}
isSetToString.working = tmp3;
let tmp4 = typeof WeakMap !== "undefined";
if (typeof WeakMap !== "undefined") {
  let _WeakMap = WeakMap;
  const self9 = this;
  const self10 = this;
  const weakMap = new WeakMap();
  tmp4 = "[object WeakMap]" === bindResult(weakMap);
}
isWeakMapToString.working = tmp4;
let tmp5 = typeof WeakSet !== "undefined";
if (typeof WeakSet !== "undefined") {
  const _WeakSet = WeakSet;
  const self11 = this;
  const self12 = this;
  const weakSet = new WeakSet();
  tmp5 = "[object WeakSet]" === bindResult(weakSet);
}
(function isWeakSetToString(View) {
  return "[object WeakSet]" === hasOwnProperty(View);
}).working = tmp5;
let tmp6 = typeof ArrayBuffer !== "undefined";
if (typeof ArrayBuffer !== "undefined") {
  let _ArrayBuffer2 = ArrayBuffer;
  const self13 = this;
  const self14 = this;
  const arrayBuffer = new ArrayBuffer();
  tmp6 = "[object ArrayBuffer]" === bindResult(arrayBuffer);
}
isArrayBufferToString.working = tmp6;
let tmp7 = typeof ArrayBuffer !== "undefined";
if (typeof ArrayBuffer !== "undefined") {
  let _DataView2 = DataView;
  tmp7 = typeof DataView !== "undefined";
}
if (tmp7) {
  let _DataView = DataView;
  let _ArrayBuffer = ArrayBuffer;
  let self = this;
  let self2 = this;
  const arrayBuffer2 = new ArrayBuffer(1);
  const self3 = this;
  const self4 = this;
  const dataView = new DataView(arrayBuffer2, 0, 1);
  let tmp11 = dataView;
  tmp7 = "[object DataView]" === bindResult(dataView);
}
isDataViewToString.working = tmp7;
let _SharedArrayBuffer;
if (typeof SharedArrayBuffer !== "undefined") {
  _SharedArrayBuffer = SharedArrayBuffer;
}
const items = ["isProxy", "isExternal", "isModuleNamespaceObject"];
const item = items.forEach((item) => {
  let closure_0 = item;
  const obj = {
    enumerable: false,
    value() {
      const error = new Error(closure_0 + " is not supported in userland");
      throw error;
    },
  };
  Object.defineProperty(exports, item, obj);
});

export const isArgumentsObject = isArguments;
export { isGeneratorFunction };
export { isTypedArray };
export const isPromise = function isPromise(obj) {
  let tmp = typeof Promise !== "undefined";
  if (typeof Promise !== "undefined") {
    tmp = obj instanceof Promise;
  }
  if (!tmp) {
    tmp = null !== obj && typeof obj === "object" && typeof obj.then === "function" && typeof obj.catch === "function";
  }
  return tmp;
};
export const isArrayBufferView = function isArrayBufferView(View) {
  let isViewResult;
  if (typeof ArrayBuffer !== "undefined") {
    const _ArrayBuffer2 = ArrayBuffer;
    if (ArrayBuffer.isView) {
      const _ArrayBuffer = ArrayBuffer;
      isViewResult = ArrayBuffer.isView(View);
    }
    return isViewResult;
  }
  isViewResult = isTypedArray(View);
  if (!isViewResult) {
    const _DataView = DataView;
    let tmp2 = typeof DataView !== "undefined";
    if (typeof DataView !== "undefined") {
      let tmp3;
      if (isDataViewToString.working) {
        tmp3 = "[object DataView]" === hasOwnProperty(View);
      } else {
        const _DataView2 = DataView;
        tmp3 = View instanceof DataView;
      }
      tmp2 = tmp3;
    }
    isViewResult = tmp2;
  }
};
export const isUint8Array = function isUint8Array(arg0) {
  return "Uint8Array" === _mod1456(arg0);
};
export const isUint8ClampedArray = function isUint8ClampedArray(arg0) {
  return "Uint8ClampedArray" === _mod1456(arg0);
};
export const isUint16Array = function isUint16Array(arg0) {
  return "Uint16Array" === _mod1456(arg0);
};
export const isUint32Array = function isUint32Array(arg0) {
  return "Uint32Array" === _mod1456(arg0);
};
export const isInt8Array = function isInt8Array(arg0) {
  return "Int8Array" === _mod1456(arg0);
};
export const isInt16Array = function isInt16Array(arg0) {
  return "Int16Array" === _mod1456(arg0);
};
export const isInt32Array = function isInt32Array(arg0) {
  return "Int32Array" === _mod1456(arg0);
};
export const isFloat32Array = function isFloat32Array(arg0) {
  return "Float32Array" === _mod1456(arg0);
};
export const isFloat64Array = function isFloat64Array(arg0) {
  return "Float64Array" === _mod1456(arg0);
};
export const isBigInt64Array = function isBigInt64Array(arg0) {
  return "BigInt64Array" === _mod1456(arg0);
};
export const isBigUint64Array = function isBigUint64Array(arg0) {
  return "BigUint64Array" === _mod1456(arg0);
};
export const isMap = function isMap(View) {
  let tmp = typeof Map !== "undefined";
  if (typeof Map !== "undefined") {
    let tmp2;
    if (isMapToString.working) {
      tmp2 = "[object Map]" === hasOwnProperty(View);
    } else {
      const _Map = Map;
      tmp2 = View instanceof Map;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const isSet = function isSet(View) {
  let tmp = typeof Set !== "undefined";
  if (typeof Set !== "undefined") {
    let tmp2;
    if (isSetToString.working) {
      tmp2 = "[object Set]" === hasOwnProperty(View);
    } else {
      const _Set = Set;
      tmp2 = View instanceof Set;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const isWeakMap = function isWeakMap(View) {
  let tmp = typeof WeakMap !== "undefined";
  if (typeof WeakMap !== "undefined") {
    let tmp2;
    if (isWeakMapToString.working) {
      tmp2 = "[object WeakMap]" === hasOwnProperty(View);
    } else {
      const _WeakMap = WeakMap;
      tmp2 = View instanceof WeakMap;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const isWeakSet = function isWeakSet(View) {
  return "[object WeakSet]" === hasOwnProperty(View);
};
export const isArrayBuffer = function isArrayBuffer(View) {
  let tmp = typeof ArrayBuffer !== "undefined";
  if (typeof ArrayBuffer !== "undefined") {
    let tmp2;
    if (isArrayBufferToString.working) {
      tmp2 = "[object ArrayBuffer]" === hasOwnProperty(View);
    } else {
      const _ArrayBuffer = ArrayBuffer;
      tmp2 = View instanceof ArrayBuffer;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const isDataView = function isDataView(View) {
  let tmp = typeof DataView !== "undefined";
  if (typeof DataView !== "undefined") {
    let tmp2;
    if (isDataViewToString.working) {
      tmp2 = "[object DataView]" === hasOwnProperty(View);
    } else {
      const _DataView = DataView;
      tmp2 = View instanceof DataView;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const isSharedArrayBuffer = function isSharedArrayBuffer(View) {
  let tmp2 = undefined !== _SharedArrayBuffer;
  if (tmp2) {
    let tmp8;
    if (undefined === isSharedArrayBufferToString.working) {
      const self = this;
      const self2 = this;
      const tmp4 = new _SharedArrayBuffer();
      isSharedArrayBufferToString.working = "[object SharedArrayBuffer]" === hasOwnProperty(tmp4);
    }
    if (isSharedArrayBufferToString.working) {
      tmp8 = "[object SharedArrayBuffer]" === hasOwnProperty(View);
    } else {
      tmp8 = View instanceof _SharedArrayBuffer;
    }
    tmp2 = tmp8;
  }
  return tmp2;
};
export const isAsyncFunction = function isAsyncFunction(View) {
  return "[object AsyncFunction]" === hasOwnProperty(View);
};
export const isMapIterator = function isMapIterator(View) {
  return "[object Map Iterator]" === hasOwnProperty(View);
};
export const isSetIterator = function isSetIterator(View) {
  return "[object Set Iterator]" === hasOwnProperty(View);
};
export const isGeneratorObject = function isGeneratorObject(View) {
  return "[object Generator]" === hasOwnProperty(View);
};
export const isWebAssemblyCompiledModule = function isWebAssemblyCompiledModule(View) {
  return "[object WebAssembly.Module]" === hasOwnProperty(View);
};
export const isNumberObject = function isNumberObject(arg0) {
  return checkBoxedPrimitive(arg0, closure_6);
};
export const isStringObject = function isStringObject(arg0) {
  return checkBoxedPrimitive(arg0, closure_7);
};
export const isBooleanObject = function isBooleanObject(arg0) {
  return checkBoxedPrimitive(arg0, closure_8);
};
export const isBigIntObject = function isBigIntObject(arg0) {
  const tmp = closure_3 && checkBoxedPrimitive(arg0, closure_9);
  return tmp;
};
export const isSymbolObject = function isSymbolObject(arg0) {
  const tmp = closure_4 && checkBoxedPrimitive(arg0, closure_10);
  return tmp;
};
export const isBoxedPrimitive = function isBoxedPrimitive(arg0) {
  let tmpResult =
    checkBoxedPrimitive(arg0, closure_6) ||
    checkBoxedPrimitive(arg0, closure_7) ||
    checkBoxedPrimitive(arg0, closure_8);
  if (!tmpResult) {
    tmpResult = closure_3 && checkBoxedPrimitive(arg0, closure_9);
    const tmpResult3 = closure_3 && checkBoxedPrimitive(arg0, closure_9);
  }
  if (!tmpResult) {
    tmpResult = closure_4 && checkBoxedPrimitive(arg0, closure_10);
    const tmpResult4 = closure_4 && checkBoxedPrimitive(arg0, closure_10);
  }
  return tmpResult;
};
export const isAnyArrayBuffer = function isAnyArrayBuffer(View) {
  let tmp = typeof Uint8Array !== "undefined";
  if (typeof Uint8Array !== "undefined") {
    const _ArrayBuffer2 = ArrayBuffer;
    let tmp4 = typeof ArrayBuffer !== "undefined";
    if (typeof ArrayBuffer !== "undefined") {
      let tmp2;
      if (isArrayBufferToString.working) {
        tmp2 = "[object ArrayBuffer]" === hasOwnProperty(View);
      } else {
        const _ArrayBuffer = ArrayBuffer;
        tmp2 = View instanceof ArrayBuffer;
      }
      tmp4 = tmp2;
    }
    if (!tmp4) {
      let tmp6 = undefined !== _SharedArrayBuffer;
      if (tmp6) {
        let tmp11;
        if (undefined === isSharedArrayBufferToString.working) {
          const self = this;
          const self2 = this;
          const tmp52 = new _SharedArrayBuffer();
          isSharedArrayBufferToString.working = "[object SharedArrayBuffer]" === hasOwnProperty(tmp52);
        }
        if (isSharedArrayBufferToString.working) {
          tmp11 = "[object SharedArrayBuffer]" === hasOwnProperty(View);
        } else {
          tmp11 = View instanceof _SharedArrayBuffer;
        }
        tmp6 = tmp11;
      }
      tmp4 = tmp6;
    }
    tmp = tmp4;
  }
  return tmp;
};
