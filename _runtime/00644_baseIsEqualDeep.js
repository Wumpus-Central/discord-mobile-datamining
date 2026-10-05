// _runtime/00644_baseIsEqualDeep.js
import _mod514 from "metro/00514__.js";
import _mod536 from "metro/00536__.js";
import _mod538 from "metro/00538__.js";
import _mod645 from "metro/00645__.js";
import Stack from "00650_Stack.js";
import equalArrays from "00656_equalArrays.js";
import equalByTag from "00662_equalByTag.js";
import equalObjects from "00666_equalObjects.js";

export default function baseIsEqualDeep(value, value2, arg2, arg3, fn, arg5) {
  const tmp3 = _mod514(value);
  let str = "[object Array]";
  let str2 = "[object Array]";
  const tmp4 = _mod514(value2);
  if (!tmp3) {
    str2 = _mod645(value);
  }
  if (!tmp4) {
    str = _mod645(value2);
  }
  if (str2 == "[object Arguments]") {
    str2 = "[object Object]";
  }
  if (str == "[object Arguments]") {
    str = "[object Object]";
  }
  let callResult = str == "[object Object]";
  let flag = tmp5;
  let flag2 = tmp3;
  if (str2 == str) {
    flag = tmp5;
    flag2 = tmp3;
    if (_mod536(value)) {
      flag2 = true;
      flag = false;
      if (!_mod536(value2)) {
        return false;
      }
    }
  }
  let tmp8 = arg5;
  if (str2 == str) {
    if (!flag) {
      let tmp9 = tmp8;
      if (!tmp9) {
        const self = this;
        const self2 = this;
        tmp9 = new Stack();
      }
      if (!flag2) {
        let tmp17;
        if (!_mod538(value)) {
          tmp17 = equalByTag(value, value2, str2, arg2, arg3, fn, tmp9);
        }
        return tmp17;
      }
      tmp17 = equalArrays(value, value2, arg2, arg3, fn, tmp9);
    }
  }
  if (!(1 & arg2)) {
    if (flag) {
      flag = hasOwnProperty.call(value, "__wrapped__");
    }
    if (callResult) {
      callResult = hasOwnProperty.call(value2, "__wrapped__");
    }
    let valueResult = value;
    if (flag) {
      valueResult = value.value();
    }
    let valueResult2 = value2;
    if (callResult) {
      valueResult2 = value2.value();
    }
    let tmp26 = tmp8;
    if (!tmp26) {
      const self3 = this;
      const self4 = this;
      tmp26 = new Stack();
    }
    return fn(valueResult, valueResult2, arg2, arg3, tmp26);
  }
  let tmp32 = tmp7;
  if (tmp32) {
    if (!tmp8) {
      const self5 = this;
      const self6 = this;
      tmp8 = new Stack();
    }
    tmp32 = equalObjects(value, value2, arg2, arg3, fn, tmp8);
  }
  return tmp32;
}
