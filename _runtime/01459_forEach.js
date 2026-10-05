// _runtime/01459_forEach.js
import _mod1460 from "metro/01460__.js";

export default function forEach(str, call, arg2) {
  if (_mod1460(call)) {
    if ("[object Array]" === toString.call(str)) {
      let num4;
      for (let num4 = 0; num4 < str.length; num4 = num4 + 1) {
        let tmp13 = num4;
        if (hasOwnProperty.call(str, num4)) {
          if (null == tmp4) {
            let tmp15 = call(str[num4], num4, str);
          } else {
            let tmp14 = str[num4];
            let callResult = call.call(tmp4, tmp14, tmp13, str);
          }
        }
      }
    } else if (typeof str === "string") {
      let num2;
      for (let num2 = 0; num2 < str.length; num2 = num2 + 1) {
        if (null == tmp4) {
          let tmp11 = call(str.charAt(num2), num2, str);
        } else {
          call = call.call;
          let charAtResult = str.charAt(num2);
          let callResult1 = call(tmp4, charAtResult, tmp9, str);
        }
      }
    } else {
      for (const key10024 in str) {
        if (!hasOwnProperty.call(str, key10024)) {
          continue;
        } else {
          if (null == tmp4) {
            let tmp7 = call(str[key10024], key10024, str);
            continue;
          } else {
            let tmp6 = str[key10024];
            let callResult2 = call.call(tmp4, tmp6, key10024, str);
            continue;
            continue;
          }
          continue;
        }
        continue;
      }
    }
  } else {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("iterator must be a function");
    throw typeError;
  }
}
