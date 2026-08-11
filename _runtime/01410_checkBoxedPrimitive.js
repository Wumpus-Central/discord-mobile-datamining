// _runtime/01410_checkBoxedPrimitive.js
import { isTypedArray } from "01416_isTypedArray.js";
import { 01417__ } from "metro/01417__.js";
function checkBoxedPrimitive(obj, closure_6) {
  if (typeof obj !== "object") {
    return false;
  } else {
    try {
      closure_6(obj);
      return true;
    } catch (err) {
      return false;
    }
  }
}
function isMapToString(arg0) {
  return "[object Map]" === bindResult(arg0);
}
function isSetToString(arg0) {
  return "[object Set]" === bindResult(arg0);
}
function isWeakMapToString(arg0) {
  return "[object WeakMap]" === bindResult(arg0);
}
function isArrayBufferToString(arg0) {
  return "[object ArrayBuffer]" === bindResult(arg0);
}
function isDataViewToString(arg0) {
  return "[object DataView]" === bindResult(arg0);
}
function isSharedArrayBufferToString(arg0) {
  return "[object SharedArrayBuffer]" === bindResult(arg0);
}
let closure_3 = typeof BigInt !== "undefined";
let closure_4 = typeof Symbol !== "undefined";
const call = toString.call;
const bindResult = call.bind(toString);
let c5 = bindResult;
const call2 = valueOf.call;
let closure_6 = call2.bind(valueOf);
valueOf = String.prototype.valueOf;
const call3 = valueOf.call;
let closure_7 = call3.bind(valueOf);
valueOf = Boolean.prototype.valueOf;
const call4 = valueOf.call;
let closure_8 = call4.bind(valueOf);
if (typeof BigInt !== "undefined") {
  const _BigInt = BigInt;
  const call5 = valueOf1.call;
  let closure_9 = call5.bind(valueOf1);
}
if (typeof Symbol !== "undefined") {
  const _Symbol = Symbol;
  const call6 = valueOf2.call;
  let closure_10 = call6.bind(valueOf2);
}
let tmp2 = typeof Map !== "undefined";
if (typeof Map !== "undefined") {
  let _Map = Map;
  const map = new Map();
  tmp2 = "[object Map]" === bindResult(map);
}
isMapToString.working = tmp2;
let tmp3 = typeof Set !== "undefined";
if (typeof Set !== "undefined") {
  let _Set = Set;
  const set = new Set();
  tmp3 = "[object Set]" === bindResult(set);
}
isSetToString.working = tmp3;
let tmp4 = typeof WeakMap !== "undefined";
if (typeof WeakMap !== "undefined") {
  let _WeakMap = WeakMap;
  const weakMap = new WeakMap();
  tmp4 = "[object WeakMap]" === bindResult(weakMap);
}
isWeakMapToString.working = tmp4;
let tmp5 = typeof WeakSet !== "undefined";
if (typeof WeakSet !== "undefined") {
  const _WeakSet = WeakSet;
  const weakSet = new WeakSet();
  tmp5 = "[object WeakSet]" === bindResult(weakSet);
}
function isWeakSetToString(arg0) {
  return "[object WeakSet]" === bindResult(arg0);
}.working = tmp5;
let tmp6 = typeof ArrayBuffer !== "undefined";
if (typeof ArrayBuffer !== "undefined") {
  let _ArrayBuffer2 = ArrayBuffer;
  let arrayBuffer = new ArrayBuffer();
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
  arrayBuffer = new ArrayBuffer(1);
  const dataView = new DataView(arrayBuffer, 0, 1);
  tmp7 = "[object DataView]" === bindResult(dataView);
}
isDataViewToString.working = tmp7;
let _SharedArrayBuffer;
if (typeof SharedArrayBuffer !== "undefined") {
  _SharedArrayBuffer = SharedArrayBuffer;
}
const items = ["isProxy", "isExternal", "isModuleNamespaceObject"];
const item = items.forEach((arg0) => {
  let closure_0 = arg0;
  Object.defineProperty(exports, arg0, {
    enumerable: false,
    value() {
      const error = new Error(closure_0 + " is not supported in userland");
      throw error;
    }
  });
});

export const isArgumentsObject = require("isArguments");
export const isGeneratorFunction = require("isGeneratorFunction");
export const isTypedArray = require("isTypedArray");
export const isPromise = function isPromise(obj) {
  let tmp = typeof Promise !== "undefined";
  if (typeof Promise !== "undefined") {
    tmp = obj instanceof Promise;
  }
  if (!tmp) {
    tmp = null !== obj && typeof obj === "object" && typeof obj.then === "function" && typeof obj.catch === "function";
    const tmp3 = null !== obj && typeof obj === "object" && typeof obj.then === "function" && typeof obj.catch === "function";
  }
  return tmp;
};
export const isArrayBufferView = function isArrayBufferView(arg0) {
  if (typeof ArrayBuffer !== "undefined") {
    const _ArrayBuffer2 = ArrayBuffer;
    if (ArrayBuffer.isView) {
      const _ArrayBuffer = ArrayBuffer;
      let isViewResult = ArrayBuffer.isView(arg0);
    }
    return isViewResult;
  }
  isViewResult = isTypedArray(arg0);
  if (!isViewResult) {
    const _DataView = DataView;
    if (typeof DataView === "undefined") {
      isViewResult = typeof DataView !== "undefined";
    } else if (isDataViewToString.working) {
      let tmp2 = "[object DataView]" === bindResult(arg0);
    } else {
      const _DataView2 = DataView;
      tmp2 = arg0 instanceof DataView;
    }
  }
};
export const isUint8Array = function isUint8Array(arg0) {
  return "Uint8Array" === 01417__(arg0);
};
export const isUint8ClampedArray = function isUint8ClampedArray(arg0) {
  return "Uint8ClampedArray" === 01417__(arg0);
};
export const isUint16Array = function isUint16Array(arg0) {
  return "Uint16Array" === 01417__(arg0);
};
export const isUint32Array = function isUint32Array(arg0) {
  return "Uint32Array" === 01417__(arg0);
};
export const isInt8Array = function isInt8Array(arg0) {
  return "Int8Array" === 01417__(arg0);
};
export const isInt16Array = function isInt16Array(arg0) {
  return "Int16Array" === 01417__(arg0);
};
export const isInt32Array = function isInt32Array(arg0) {
  return "Int32Array" === 01417__(arg0);
};
export const isFloat32Array = function isFloat32Array(arg0) {
  return "Float32Array" === 01417__(arg0);
};
export const isFloat64Array = function isFloat64Array(arg0) {
  return "Float64Array" === 01417__(arg0);
};
export const isBigInt64Array = function isBigInt64Array(arg0) {
  return "BigInt64Array" === 01417__(arg0);
};
export const isBigUint64Array = function isBigUint64Array(arg0) {
  return "BigUint64Array" === 01417__(arg0);
};
export const isMap = function isMap(arg0) {
  if (typeof Map === "undefined") {
    return typeof Map !== "undefined";
  } else {
    let tmp3 = arg0;
    if (isMapToString.working) {
      tmp3 = bindResult(tmp3);
      let tmp = "[object Map]" === tmp3;
    } else {
      const _Map = Map;
      tmp = tmp3 instanceof Map;
    }
  }
};
export const isSet = function isSet(arg0) {
  if (typeof Set === "undefined") {
    return typeof Set !== "undefined";
  } else {
    let tmp3 = arg0;
    if (isSetToString.working) {
      tmp3 = bindResult(tmp3);
      let tmp = "[object Set]" === tmp3;
    } else {
      const _Set = Set;
      tmp = tmp3 instanceof Set;
    }
  }
};
export const isWeakMap = function isWeakMap(arg0) {
  if (typeof WeakMap === "undefined") {
    return typeof WeakMap !== "undefined";
  } else {
    let tmp3 = arg0;
    if (isWeakMapToString.working) {
      tmp3 = bindResult(tmp3);
      let tmp = "[object WeakMap]" === tmp3;
    } else {
      const _WeakMap = WeakMap;
      tmp = tmp3 instanceof WeakMap;
    }
  }
};
export const isWeakSet = function isWeakSet(arg0) {
  return "[object WeakSet]" === bindResult(arg0);
};
export const isArrayBuffer = function isArrayBuffer(arg0) {
  if (typeof ArrayBuffer === "undefined") {
    return typeof ArrayBuffer !== "undefined";
  } else {
    let tmp3 = arg0;
    if (isArrayBufferToString.working) {
      tmp3 = bindResult(tmp3);
      let tmp = "[object ArrayBuffer]" === tmp3;
    } else {
      const _ArrayBuffer = ArrayBuffer;
      tmp = tmp3 instanceof ArrayBuffer;
    }
  }
};
export const isDataView = function isDataView(arg0) {
  if (typeof DataView === "undefined") {
    return typeof DataView !== "undefined";
  } else {
    let tmp3 = arg0;
    if (isDataViewToString.working) {
      tmp3 = bindResult(tmp3);
      let tmp = "[object DataView]" === tmp3;
    } else {
      const _DataView = DataView;
      tmp = tmp3 instanceof DataView;
    }
  }
};
export const isSharedArrayBuffer = function isSharedArrayBuffer(arg0) {
  let tmp = _SharedArrayBuffer;
  if (undefined === _SharedArrayBuffer) {
    return tmp2;
  } else {
    if (undefined === isSharedArrayBufferToString.working) {
      tmp = new tmp();
      tmp3.working = "[object SharedArrayBuffer]" === bindResult(tmp);
    }
    let tmp9 = arg0;
    if (isSharedArrayBufferToString.working) {
      tmp9 = bindResult(tmp9);
      let tmp10 = "[object SharedArrayBuffer]" === tmp9;
    } else {
      tmp10 = tmp9 instanceof tmp;
    }
  }
};
export const isAsyncFunction = function isAsyncFunction(arg0) {
  return "[object AsyncFunction]" === bindResult(arg0);
};
export const isMapIterator = function isMapIterator(arg0) {
  return "[object Map Iterator]" === bindResult(arg0);
};
export const isSetIterator = function isSetIterator(arg0) {
  return "[object Set Iterator]" === bindResult(arg0);
};
export const isGeneratorObject = function isGeneratorObject(arg0) {
  return "[object Generator]" === bindResult(arg0);
};
export const isWebAssemblyCompiledModule = function isWebAssemblyCompiledModule(arg0) {
  return "[object WebAssembly.Module]" === bindResult(arg0);
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
  let tmp = closure_3;
  if (closure_3) {
    tmp = checkBoxedPrimitive(arg0, closure_9);
  }
  return tmp;
};
export const isSymbolObject = function isSymbolObject(arg0) {
  let tmp = closure_4;
  if (closure_4) {
    tmp = checkBoxedPrimitive(arg0, closure_10);
  }
  return tmp;
};
export const isBoxedPrimitive = function isBoxedPrimitive(arg0) {
  let tmpResult = checkBoxedPrimitive(arg0, closure_6);
  if (!tmpResult) {
    tmpResult = tmp(arg0, closure_7);
  }
  if (!tmpResult) {
    tmpResult = tmp(arg0, closure_8);
  }
  if (!tmpResult) {
    tmpResult = closure_3;
    if (closure_3) {
      tmpResult = tmp(arg0, closure_9);
    }
  }
  if (!tmpResult) {
    let tmpResult1 = closure_4;
    if (closure_4) {
      tmpResult1 = tmp(arg0, closure_10);
    }
    tmpResult = tmpResult1;
  }
  return tmpResult;
};
export const isAnyArrayBuffer = function isAnyArrayBuffer(arg0) {
  let tmp = typeof Uint8Array !== "undefined";
  if (typeof Uint8Array !== "undefined") {
    let tmp15 = arg0;
    const _ArrayBuffer2 = ArrayBuffer;
    let tmp17 = typeof ArrayBuffer !== "undefined";
    if (typeof ArrayBuffer === "undefined") {
      if (!tmp17) {
        let tmp5 = _SharedArrayBuffer;
        if (undefined === _SharedArrayBuffer) {
          tmp17 = tmp6;
        } else {
          if (undefined === isSharedArrayBufferToString.working) {
            tmp5 = new tmp5();
            tmp7.working = "[object SharedArrayBuffer]" === bindResult(tmp5);
          }
          if (isSharedArrayBufferToString.working) {
            tmp15 = bindResult(tmp15);
            let tmp13 = "[object SharedArrayBuffer]" === tmp15;
          } else {
            tmp13 = tmp15 instanceof tmp5;
          }
        }
      }
      tmp = tmp17;
    } else if (isArrayBufferToString.working) {
      let tmp2 = "[object ArrayBuffer]" === bindResult(tmp15);
    } else {
      const _ArrayBuffer = ArrayBuffer;
      tmp2 = tmp15 instanceof ArrayBuffer;
    }
  }
  return tmp;
};