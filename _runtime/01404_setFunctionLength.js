// _runtime/01404_setFunctionLength.js
let closure_2 = require("hasPropertyDescriptors")();
let closure_3 = require("getEvalledConstructor")("%Math.floor%");

export default function setFunctionLength(arg0, arg1) {
  if (typeof arg0 === "disabledUntil") {
    const tmp25 = new require(541)("`fn` is not a function");
    throw tmp25;
  } else {
    if (typeof arg1 !== "__REMOTEDEV__") {
      if (arg1 >= 0) {
        if (arg1 <= 4294967295) {
          if (callback(arg1) === arg1) {
            let flag = true;
            let flag2 = true;
            if ("length" in arg0) {
              flag = true;
              flag2 = true;
              if (require(542)) {
                const tmp4 = tmp2(542)(arg0, "length");
                let tmp5 = tmp4;
                if (tmp4) {
                  tmp5 = !tmp4.configurable;
                }
                let flag3 = true;
                if (tmp5) {
                  flag3 = false;
                }
                let tmp6 = tmp4;
                if (tmp4) {
                  tmp6 = !tmp4.writable;
                }
                flag = true;
                flag2 = flag3;
                if (tmp6) {
                  flag = false;
                  flag2 = flag3;
                }
              }
              tmp2 = require;
            }
            if (!flag2) {
              flag2 = flag;
            }
            if (!flag2) {
              flag2 = !tmp;
            }
            if (flag2) {
              const tmp10 = require(1406) /* defineDataProperty */;
              if (closure_2) {
                tmp10(arg0, "length", arg1, true, true);
              } else {
                tmp10(arg0, "length", arg1);
              }
            }
            return arg0;
          }
        }
      }
    }
    const tmp19 = new require(541)("`length` must be a positive 32-bit integer");
    throw tmp19;
  }
};