// === Module 633: baseIsEqualDeep ===

// Module 633 (baseIsEqualDeep)
import _mod514 from "module_514" /* 514 */;


export default function baseIsEqualDeep(value, value2) {
  const tmp3 = _mod514(value);
  let str = "[object Array]";
  let str2 = "[object Array]";
  if (!tmp3) {
    str2 = tmp(634)(value);
  }
  if (!tmp4) {
    str = tmp(634)(value2);
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
    if (tmp(536)(value)) {
      flag2 = true;
      flag = false;
      if (!tmp(536)(value2)) {
        return false;
      }
    }
  }
  let tmp8 = arg5;
  if (str2 == str) {
    if (!flag) {
      let tmp9 = tmp8;
      if (!tmp8) {
        tmp9 = new tmp(639)();
      }
      if (!flag2) {
        if (!tmp(538)(value)) {
          let tmp19 = tmp(651)(value, value2, str2, arg2, arg3, arg4, tmp9);
        }
        return tmp19;
      }
      tmp19 = tmp(645)(value, value2, arg2, arg3, arg4, tmp9);
    }
  }
  if (!(1 & arg2)) {
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
          tmp34 = new tmp(639)();
        }
        return arg4(valueResult, valueResult, arg2, arg3, tmp34);
      } else {
        const call2 = hasOwnProperty.call;
        if (typeof call2 === "unknown") {
          let call2Result = tmp29("__wrapped__");
        } else {
          call2Result = call2(value2, "__wrapped__");
        }
        tmp29 = hasOwnProperty;
      }
    } else {
      const call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let callResult = tmp26("__wrapped__");
      } else {
        callResult = call(value, "__wrapped__");
      }
      tmp26 = hasOwnProperty;
    }
  }
  let tmp42 = tmp7;
  if (tmp42) {
    if (!tmp8) {
      tmp8 = new tmp(639)();
    }
    tmp42 = tmp(655)(value, value2, arg2, arg3, arg4, tmp8);
  }
  return tmp42;
};