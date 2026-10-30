// === Module 632: baseIsEqualDeep ===

// Module 632 (baseIsEqualDeep)
import _mod514 from "module_514" /* 514 */;
import _mod536 from "module_536" /* 536 */;
import _mod538 from "module_538" /* 538 */;
import _mod633 from "module_633" /* 633 */;
import Stack from "Stack" /* 638 */;
import equalArrays from "equalArrays" /* 644 */;
import valueOf from "valueOf" /* 650 */;
import equalObjects from "equalObjects" /* 654 */;


export default function baseIsEqualDeep(value, value2, length, height, fn, arg5) {
  const tmp3 = _mod514(value);
  let str = "[object Array]";
  let str2 = "[object Array]";
  if (!tmp3) {
    str2 = _mod633(value);
  }
  if (!tmp4) {
    str = _mod633(value2);
  }
  if (str2 == "[object Arguments]") {
    str2 = "[object Object]";
  }
  if (str == "[object Arguments]") {
    str = "[object Object]";
  }
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
      if (!tmp8) {
        tmp9 = new Stack();
      }
      if (!flag2) {
        if (!_mod538(value)) {
          let tmp19 = valueOf(value, value2, str2, length, height, fn, tmp9);
        }
        return tmp19;
      }
      tmp19 = equalArrays(value, value2, length, height, fn, tmp9);
    }
  }
  if (!(1 & length)) {
    if (!flag) {
      if (!tmp6) {
        let valueResult = value;
        if (flag) {
          valueResult = value.value();
        }
        let valueResult2 = value2;
        if (tmp6) {
          valueResult2 = value2.value();
        }
        let tmp34 = tmp8;
        if (!tmp8) {
          tmp34 = new Stack();
        }
        return fn(valueResult, valueResult2, length, height, tmp34);
      } else {
        const call2 = hasOwnProperty.call;
        if (typeof call2 === "unknown") {
          let call2Result = hasOwnProperty("__wrapped__");
        } else {
          call2Result = call2(value2, "__wrapped__");
        }
      }
    } else {
      const call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let callResult = hasOwnProperty("__wrapped__");
      } else {
        callResult = call(value, "__wrapped__");
      }
    }
  }
  let tmp42 = tmp7;
  if (tmp42) {
    if (!tmp8) {
      tmp8 = new Stack();
    }
    tmp42 = equalObjects(value, value2, length, height, fn, tmp8);
  }
  return tmp42;
};