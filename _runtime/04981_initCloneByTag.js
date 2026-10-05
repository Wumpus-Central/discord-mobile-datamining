// _runtime/04981_initCloneByTag.js
import cloneArrayBuffer from "04982_cloneArrayBuffer.js";
import cloneDataView from "04983_cloneDataView.js";
import cloneTypedArray from "04984_cloneTypedArray.js";
import cloneRegExp from "04985_cloneRegExp.js";
import cloneSymbol from "04986_cloneSymbol.js";

export default function initCloneByTag(arg0, arg1, arg2) {
  let constructor1;
  let constructor2;
  let constructor3;
  let tmp12;
  let tmp12Result;
  let tmp16;
  const constructor = arg0.constructor;
  switch (arg1) {
    case "[object ArrayBuffer]": {
      return cloneArrayBuffer(arg0);
    }
    case "[object Boolean]": {
      tmp16 = +arg0;
      let self5 = this;
      let self6 = this;
      constructor1 = new constructor(tmp16);
      return constructor1;
    }
    case "[object Date]": {
      tmp16 = +arg0;
      let self5 = this;
      let self6 = this;
      constructor1 = new constructor(tmp16);
      return constructor1;
    }
    case "[object DataView]": {
      return cloneDataView(arg0, arg2);
    }
    case "[object Float32Array]": {
      tmp12 = cloneTypedArray;
      tmp12Result = tmp12(arg0, arg2);
      return tmp12Result;
    }
    case "[object Float64Array]": {
      tmp12 = cloneTypedArray;
      tmp12Result = tmp12(arg0, arg2);
      return tmp12Result;
    }
    case "[object Int8Array]": {
      tmp12 = cloneTypedArray;
      tmp12Result = tmp12(arg0, arg2);
      return tmp12Result;
    }
    case "[object Int16Array]": {
      tmp12 = cloneTypedArray;
      tmp12Result = tmp12(arg0, arg2);
      return tmp12Result;
    }
    case "[object Int32Array]": {
      tmp12 = cloneTypedArray;
      tmp12Result = tmp12(arg0, arg2);
      return tmp12Result;
    }
    case "[object Uint8Array]": {
      tmp12 = cloneTypedArray;
      tmp12Result = tmp12(arg0, arg2);
      return tmp12Result;
    }
    case "[object Uint8ClampedArray]": {
      tmp12 = cloneTypedArray;
      tmp12Result = tmp12(arg0, arg2);
      return tmp12Result;
    }
    case "[object Uint16Array]": {
      tmp12 = cloneTypedArray;
      tmp12Result = tmp12(arg0, arg2);
      return tmp12Result;
    }
    case "[object Uint32Array]": {
      tmp12 = cloneTypedArray;
      tmp12Result = tmp12(arg0, arg2);
      return tmp12Result;
    }
    case "[object Map]": {
      let self3 = this;
      let self4 = this;
      constructor2 = new constructor();
      return constructor2;
    }
    case "[object Set]": {
      let self3 = this;
      let self4 = this;
      constructor2 = new constructor();
      return constructor2;
    }
    case "[object Number]": {
      let self = this;
      let self2 = this;
      constructor3 = new constructor(arg0);
      return constructor3;
    }
    case "[object String]": {
      let self = this;
      let self2 = this;
      constructor3 = new constructor(arg0);
      return constructor3;
    }
    case "[object RegExp]": {
      return cloneRegExp(arg0);
    }
    case "[object Symbol]": {
      return cloneSymbol(arg0);
    }
    default: {
      break;
    }
  }
}
