// === Module 651: valueOf ===

// Module 651 (valueOf)
import _mod523 from "module_523" /* 523 */;
import eq from "eq" /* 616 */;
import equalArrays from "equalArrays" /* 645 */;
import _mod652 from "module_652" /* 652 */;
import mapToArray from "mapToArray" /* 653 */;
import _mod654 from "module_654" /* 654 */;

let prototype;
if (_mod523) {
  prototype = _mod523.prototype;
}
let valueOf;
if (prototype) {
  valueOf = prototype.valueOf;
}

export default function equalByTag(byteLength, byteLength2, arg2, arg3, arg4, fn, get) {
  let buffer = byteLength2;
  let buffer2 = byteLength;
  switch (arg2) {
    case "[object DataView]":
      if (byteLength.byteLength == byteLength2.byteLength) {
        if (byteLength.byteOffset == byteLength2.byteOffset) {
          buffer2 = byteLength.buffer;
          buffer = byteLength2.buffer;
          let tmp34 = buffer2.byteLength != buffer.byteLength;
          if (!tmp34) {
            const tmp40 = new _mod652(buffer2);
            const tmp44 = new _mod652(buffer);
            tmp34 = !fn(tmp40, tmp44);
          }
          return !tmp34;
        }
      }
      return false;
    case "[object ArrayBuffer]":
    break;
    case "[object Boolean]":
      let tmp30 = eq;
      let tmp31 = +byteLength;
      let tmp32 = +byteLength2;
      let tmp30Result = tmp30(tmp31, tmp32);
      return tmp30Result;
    case "[object Date]":
      tmp30 = eq;
      tmp31 = +byteLength;
      tmp32 = +byteLength2;
      tmp30Result = tmp30(tmp31, tmp32);
      return tmp30Result;
    case "[object Number]":
      tmp30 = eq;
      tmp31 = +byteLength;
      tmp32 = +byteLength2;
      tmp30Result = tmp30(tmp31, tmp32);
      return tmp30Result;
    case "[object Error]":
      let tmp27 = byteLength.name == byteLength2.name;
      if (tmp27) {
        tmp27 = byteLength.message == byteLength2.message;
      }
      return tmp27;
    case "[object RegExp]":
      let text = `${byteLength2}`;
      let tmp26 = byteLength == `${byteLength2}`;
      return tmp26;
    case "[object String]":
      text = `${byteLength2}`;
      tmp26 = byteLength == `${byteLength2}`;
      return tmp26;
    case "[object Map]":
      let tmp = mapToArray;
      if (!tmp) {
        tmp = _mod654;
      }
      if (byteLength.size != byteLength2.size) {
        if (!tmp8) {
          return false;
        }
      }
      value = get.get(byteLength);
      if (value) {
        return value == byteLength2;
      } else {
        const result = get.set(byteLength, byteLength2);
        const tmpResult = tmp(byteLength);
        const tmp14 = arg3 | 2;
        get.delete(byteLength);
        return equalArrays(tmpResult, tmp(byteLength2), arg3 | 2, arg4, fn, get);
      }
      tmp8 = 1 & arg3;
    break;
    case "[object Set]":
    break;
    case "[object Symbol]":
      if (!valueOf) {
        return false;
      } else {
        const call = tmp2.call;
        if (typeof call === "unknown") {
          let callResult = tmp2();
        } else {
          callResult = call(byteLength);
        }
        const call2 = tmp2.call;
        if (typeof call2 === "unknown") {
          let tmp2Result = tmp2();
        } else {
          tmp2Result = call2(byteLength2);
        }
        return callResult == tmp2Result;
      }
    break;
  }
};