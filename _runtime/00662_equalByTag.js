// _runtime/00662_equalByTag.js
import _mod523 from "metro/00523__.js";
import eq from "00627_eq.js";
import equalArrays from "00656_equalArrays.js";
import _mod663 from "metro/00663__.js";
import mapToArray from "00664_mapToArray.js";
import setToArray from "00665_setToArray.js";

let prototype;
if (_mod523) {
  prototype = _mod523.prototype;
}
let valueOf;
if (prototype) {
  valueOf = prototype.valueOf;
}

export default function equalByTag(byteLength, byteLength2, arg2, arg3, arg4, fn, get) {
  let tmp24;
  let tmp28;
  let tmp28Result;
  let tmp29;
  let tmp30;
  let buffer = byteLength2;
  let buffer2 = byteLength;
  switch (arg2) {
    case "[object DataView]": {
      if (byteLength.byteLength == byteLength2.byteLength) {
        if (byteLength.byteOffset == byteLength2.byteOffset) {
          buffer2 = byteLength.buffer;
          buffer = byteLength2.buffer;
          let tmp32 = buffer2.byteLength != buffer.byteLength;
          if (!tmp32) {
            const self = this;
            const self2 = this;
            const self3 = this;
            const self4 = this;
            const tmp36 = new _mod663(buffer2);
            const tmp38 = new _mod663(buffer);
            tmp32 = !fn(tmp36, tmp38);
          }
          return !tmp32;
        }
      }
      return false;
    }
    case "[object ArrayBuffer]": {
      break;
    }
    case "[object Boolean]": {
      tmp28 = eq;
      tmp29 = +byteLength;
      tmp30 = +byteLength2;
      tmp28Result = tmp28(tmp29, tmp30);
      return tmp28Result;
    }
    case "[object Date]": {
      tmp28 = eq;
      tmp29 = +byteLength;
      tmp30 = +byteLength2;
      tmp28Result = tmp28(tmp29, tmp30);
      return tmp28Result;
    }
    case "[object Number]": {
      tmp28 = eq;
      tmp29 = +byteLength;
      tmp30 = +byteLength2;
      tmp28Result = tmp28(tmp29, tmp30);
      return tmp28Result;
    }
    case "[object Error]": {
      return byteLength.name == byteLength2.name && byteLength.message == byteLength2.message;
    }
    case "[object RegExp]": {
      let text = `${byteLength2}`;
      tmp24 = byteLength == `${byteLength2}`;
      return tmp24;
    }
    case "[object String]": {
      let text = `${byteLength2}`;
      tmp24 = byteLength == `${byteLength2}`;
      return tmp24;
    }
    case "[object Map]": {
      let tmp = mapToArray;
      const tmp6 = 1 & arg3;
      if (!tmp) {
        tmp = setToArray;
      }
      if (byteLength.size != byteLength2.size) {
        if (!tmp6) {
          return false;
        }
      }
      const value = get.get(byteLength);
      if (value) {
        return value == byteLength2;
      } else {
        const tmp12 = arg3 | 2;
        const result = get.set(byteLength, byteLength2);
        const tmp16 = equalArrays;
        const tmpResult = tmp(byteLength);
        const tmp16Result = tmp16(tmpResult, tmp(byteLength2), tmp12, arg4, fn, get);
        get.delete(byteLength);
        return tmp16Result;
      }
      break;
    }
    case "[object Set]": {
      break;
    }
    case "[object Symbol]": {
      if (!valueOf) {
        return false;
      } else {
        const callResult = valueOf.call(byteLength);
        return callResult == valueOf.call(byteLength2);
      }
      break;
    }
  }
}
