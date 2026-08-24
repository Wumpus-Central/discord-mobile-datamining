// _runtime/metro/01417__.js
import _mod542 from "00542__.js";
import getProto from "../00546_getProto.js";
import callBoundIntrinsic from "../00574_callBoundIntrinsic.js";
import hasToStringTagShams from "../01412_hasToStringTagShams.js";
import availableTypedArrays from "../01418_availableTypedArrays.js";
import forEach from "../01420_forEach.js";
import callBind from "../01422_callBind.js";
import { forEach } from "../01420_forEach.js";
import { 00542__ } from "00542__.js";

let closure_2 = callBoundIntrinsic("Object.prototype.toString");
let tmp = hasToStringTagShams();
let closure_3 = tmp;
if (typeof globalThis !== "undefined") {
  const global = globalThis;
}
const tmp2 = availableTypedArrays();
let closure_5 = tmp2;
let closure_6 = callBoundIntrinsic("String.prototype.slice");
let closure_7 = callBoundIntrinsic("Array.prototype.indexOf", true) || (function indexOf(arg0, arg1) {
  let num = 0;
  if (0 < arg0.length) {
    while (arg0[num] !== arg1) {
      num = num + 1;
    }
    return num;
  }
  return -1;
});
let closure_8 = Object.create(null);
if (tmp) {
  if (_mod542) {
    if (getProto) {
      forEach(tmp2, (arg0) => {
        const tmp = new global[arg0]();
        if (Symbol.toStringTag in tmp) {
          if (getProto) {
            const tmp4 = tmp2(546)(tmp);
            const _Symbol = Symbol;
            const tmp5 = tmp2(542)(tmp4, Symbol.toStringTag);
            let tmp6 = tmp5;
            if (!tmp5) {
              tmp6 = tmp5;
              if (tmp4) {
                const _Symbol2 = Symbol;
                tmp6 = tmp2(542)(tmp2(546)(tmp4), Symbol.toStringTag);
                const tmp7 = tmp2(546)(tmp4);
              }
            }
            const text = `$${arg0}`;
            closure_8[`$${arg0}`] = tmp2(1422)(tmp6.get);
          }
        }
      });
    }
    module.exports = function whichTypedArray(obj) {
      if (obj) {
        if (typeof obj === "object") {
          if (closure_3) {
            let tmp14 = null;
            if (00542__) {
              _require = obj;
              dependencyMap = false;
              forEach(closure_8, (arg0, arg1) => {
                if (!closure_1) {
                  try {
                    if ("$" + arg0(closure_0) === arg1) {
                      closure_1 = closure_1_6(arg1, 1);
                    }
                  } catch (err) {
                  }
                }
              });
              tmp14 = dependencyMap;
            }
            return tmp14;
          } else {
            const tmp3 = callback2(callback(obj), 8, -1);
            let tmp6 = tmp3;
            if (callback3(closure_5, tmp3) <= -1) {
              let tmp7 = "Object" === tmp3;
              if (tmp7) {
                _require = obj;
                dependencyMap = false;
                forEach(closure_8, (arg0, arg1) => {
                  if (!closure_1) {
                    try {
                      arg0(closure_0);
                      closure_1 = closure_1_6(arg1, 1);
                    } catch (err) {
                    }
                  }
                });
                tmp7 = dependencyMap;
              }
              tmp6 = tmp7;
            }
            return tmp6;
          }
        }
      }
      return false;
    };
  }
}
forEach(tmp2, (arg0) => {
  const arr = new global[arg0]();
  if (arr.slice || arr.set) {
    const text = `$${arg0}`;
    closure_8[`$${arg0}`] = callBind(tmp);
  }
});