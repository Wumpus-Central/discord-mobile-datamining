// _runtime/metro/01455__.js
import _mod1282 from "01282__.js";
import _mod1283 from "01283__.js";
import _mod1284 from "01284__.js";
import _mod1456 from "01456__.js";
import defineDataProperty from "../01457_defineDataProperty.js";

let closure_2 = _mod1456();
let closure_3 = _mod1282("%Math.floor%");

export default function setFunctionLength(fn, num) {
  if (typeof fn !== "function") {
    const tmp25 = new _mod1283("`fn` is not a function");
    throw tmp25;
  } else {
    if (typeof num === "number") {
      if (num >= 0) {
        if (num <= 4294967295) {
          if (closure_3(num) === num) {
            let flag = true;
            let flag2 = true;
            if ("length" in fn) {
              flag = true;
              flag2 = true;
              if (_mod1284) {
                const tmp4 = tmp2(1284)(fn, "length");
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
              const tmp10 = defineDataProperty;
              if (closure_2) {
                tmp10(fn, "length", num, true, true);
              } else {
                tmp10(fn, "length", num);
              }
            }
            return fn;
          }
        }
      }
    }
    const tmp19 = new _mod1283("`length` must be a positive 32-bit integer");
    throw tmp19;
  }
}
