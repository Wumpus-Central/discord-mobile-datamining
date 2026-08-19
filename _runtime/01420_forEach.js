// _runtime/01420_forEach.js
import apply from "01421_apply.js";


export default function forEach(str, call) {
  if (apply(call)) {
    call = toString.call;
    if ("[object Array]" === (typeof call === "unknown" ? toString() : call(str))) {
      let num4 = 0;
      if (0 < str.length) {
        do {
          let call4 = hasOwnProperty.call;
          let tmp20 = num4;
          if (typeof call4 === "unknown" ? hasOwnProperty(num4) : call4(str, num4)) {
            if (null == tmp6) {
              let tmp23 = call(str[num4], num4, str);
            } else {
              let call5 = call.call;
              let tmp21 = str[num4];
              if (typeof call5 === "unknown") {
                let tmp22 = call(tmp21, num4, str);
              } else {
                let call5Result = call5(tmp6, tmp21, tmp20, str);
              }
            }
          }
          num4 = num4 + 1;
        } while (num4 < length2);
      }
    } else if (typeof str === "string") {
      let num2 = 0;
      if (0 < str.length) {
        do {
          if (null == tmp6) {
            let tmp17 = call(str.charAt(num2), num2, str);
          } else {
            let call3 = call.call;
            let charAtResult = str.charAt(num2);
            if (typeof call3 === "unknown") {
              let tmp16 = call(charAtResult, num2, str);
            } else {
              let call3Result = call3(tmp6, charAtResult, tmp14, str);
            }
          }
          num2 = num2 + 1;
        } while (num2 < length);
      }
    } else {
      for (const key10024 in arg0) {
        let call6 = hasOwnProperty.call;
        if (typeof call6 === "unknown") {
          let call6Result = hasOwnProperty(key10024);
        } else {
          call6Result = call6(arg0, key10024);
        }
        if (!call6Result) {
          continue;
        } else {
          if (null == tmp6) {
            let tmp12 = arg1(arg0[key10024], key10024, arg0);
            continue;
          } else {
            let call2 = arg1.call;
            let tmp10 = arg0[key10024];
            if (typeof call2 === "unknown") {
              let tmp11 = arg1(tmp10, key10024, arg0);
              continue;
            } else {
              let call2Result = call2(tmp6, tmp10, key10024, arg0);
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
    }
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("iterator must be a function");
    throw typeError;
  }
};