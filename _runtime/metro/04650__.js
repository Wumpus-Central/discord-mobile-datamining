// === Module 4650: ? ===

// Module 4650
import cloneArrayBuffer from "cloneArrayBuffer" /* 4651 */;
import cloneDataView from "cloneDataView" /* 4652 */;
import cloneTypedArray from "cloneTypedArray" /* 4653 */;
import cloneRegExp from "cloneRegExp" /* 4654 */;
import _mod4655 from "module_4655" /* 4655 */;


export default function initCloneByTag(arg0, arg1, arg2) {
  let constructor = arg0.constructor;
  switch (arg1) {
    case "[object ArrayBuffer]":
      return cloneArrayBuffer(arg0);
    case "[object Boolean]":
      let tmp20 = +arg0;
      constructor = new constructor(tmp20);
      return constructor;
    case "[object Date]":
      tmp20 = +arg0;
      constructor = new constructor(tmp20);
      return constructor;
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
      let constructor1 = new constructor();
      return constructor1;
    case "[object Set]":
      constructor1 = new constructor();
      return constructor1;
    case "[object Number]":
      let constructor2 = new constructor(arg0);
      return constructor2;
    case "[object String]":
      constructor2 = new constructor(arg0);
      return constructor2;
    case "[object RegExp]":
      return cloneRegExp(arg0);
    case "[object Symbol]":
      return _mod4655(arg0);
    default:
  }
};