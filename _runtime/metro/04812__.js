// === Module 4812: ? ===

// Module 4812
import cloneArrayBuffer from "cloneArrayBuffer" /* 4813 */;
import cloneDataView from "cloneDataView" /* 4814 */;
import cloneTypedArray from "cloneTypedArray" /* 4815 */;
import cloneRegExp from "cloneRegExp" /* 4816 */;
import _mod4817 from "module_4817" /* 4817 */;


export default function initCloneByTag(arg0, arg1, arg2) {
  const constructor = arg0.constructor;
  switch (arg1) {
    case "[object ArrayBuffer]":
      return cloneArrayBuffer(arg0);
    case "[object Boolean]":
      let tmp20 = +arg0;
      let constructor1 = new constructor(tmp20);
      return constructor1;
    case "[object Date]":
      tmp20 = +arg0;
      constructor1 = new constructor(tmp20);
      return constructor1;
    case "[object DataView]":
      return cloneDataView(arg0, arg2);
    case "[object Float32Array]":
      let tmp16 = cloneTypedArray;
      let tmp16Result = tmp16(arg0, arg2);
      return tmp16Result;
    case "[object Float64Array]":
      tmp16 = cloneTypedArray;
      tmp16Result = tmp16(arg0, arg2);
      return tmp16Result;
    case "[object Int8Array]":
      tmp16 = cloneTypedArray;
      tmp16Result = tmp16(arg0, arg2);
      return tmp16Result;
    case "[object Int16Array]":
      tmp16 = cloneTypedArray;
      tmp16Result = tmp16(arg0, arg2);
      return tmp16Result;
    case "[object Int32Array]":
      tmp16 = cloneTypedArray;
      tmp16Result = tmp16(arg0, arg2);
      return tmp16Result;
    case "[object Uint8Array]":
      tmp16 = cloneTypedArray;
      tmp16Result = tmp16(arg0, arg2);
      return tmp16Result;
    case "[object Uint8ClampedArray]":
      tmp16 = cloneTypedArray;
      tmp16Result = tmp16(arg0, arg2);
      return tmp16Result;
    case "[object Uint16Array]":
      tmp16 = cloneTypedArray;
      tmp16Result = tmp16(arg0, arg2);
      return tmp16Result;
    case "[object Uint32Array]":
      tmp16 = cloneTypedArray;
      tmp16Result = tmp16(arg0, arg2);
      return tmp16Result;
    case "[object Map]":
      let constructor2 = new constructor();
      return constructor2;
    case "[object Set]":
      constructor2 = new constructor();
      return constructor2;
    case "[object Number]":
      let constructor3 = new constructor(arg0);
      return constructor3;
    case "[object String]":
      constructor3 = new constructor(arg0);
      return constructor3;
    case "[object RegExp]":
      return cloneRegExp(arg0);
    case "[object Symbol]":
      return _mod4817(arg0);
    default:
  }
};