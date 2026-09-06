// _runtime/00633_baseIsEqualDeep.js
import _mod514 from "metro/00514__.js";
import _mod536 from "metro/00536__.js";
import _mod538 from "metro/00538__.js";
import _mod634 from "metro/00634__.js";
import Stack from "00639_Stack.js";
import equalArrays from "00645_equalArrays.js";
import valueOf from "00651_valueOf.js";
import equalObjects from "00655_equalObjects.js";

export default function baseIsEqualDeep(value, value2, arr, height, fn, arg5) {
  const tmp3 = _mod514(value);
  let str = "[object Array]";
  let str2 = "[object Array]";
  if (!tmp3) {
    str2 = _mod634(value);
  }
  if (!tmp4) {
    str = _mod634(value2);
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
          let tmp19 = valueOf(value, value2, str2, arr, height, fn, tmp9);
        }
        return tmp19;
      }
      tmp19 = equalArrays(value, value2, arr, height, fn, tmp9);
    }
  }
  if (!(1 & arr)) {
    if (!flag) {
      if (!tmp6) {
        let valueResult = value;
        if (flag) {
          valueResult = value.value();
        }
        valueResult = value2;
        if (tmp6) {
          valueResult = value2.value();
        }
        let tmp34 = tmp8;
        if (!tmp8) {
          tmp34 = new Stack();
        }
        return fn(valueResult, valueResult, arr, height, tmp34);
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
    tmp42 = equalObjects(value, value2, arr, height, fn, tmp8);
  }
  return tmp42;
}
