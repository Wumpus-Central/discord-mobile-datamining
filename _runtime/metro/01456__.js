// === Module 1456: ? ===

// Module 1456
import _mod1294 from "module_1294" /* 1294 */;
import _mod1298 from "module_1298" /* 1298 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;
import _mod1451 from "module_1451" /* 1451 */;
import availableTypedArrays from "availableTypedArrays" /* 1457 */;
import _mod1459 from "module_1459" /* 1459 */;
import callBind from "callBind" /* 1461 */;

const require = globalThis.__r;

let closure_2 = callBoundIntrinsic("Object.prototype.toString");
let tmp = _mod1451();
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
  if (_mod1294) {
    if (_mod1298) {
      _mod1459(tmp2, (arg0) => {
        const tmp = new global[arg0]();
        if (Symbol.toStringTag in tmp) {
          if (_mod1298) {
            const tmp4 = _mod1298(tmp);
            const _Symbol = Symbol;
            const tmp5 = _mod1294(tmp4, Symbol.toStringTag);
            let tmp6 = tmp5;
            if (!tmp5) {
              tmp6 = tmp5;
              if (tmp4) {
                const _Symbol2 = Symbol;
                tmp6 = _mod1294(_mod1298(tmp4), Symbol.toStringTag);
                const tmp7 = _mod1298(tmp4);
              }
            }
            const text = `$${arg0}`;
            closure_8[`$${arg0}`] = callBind(tmp6.get);
          }
        }
      });
    }
    module.exports = function whichTypedArray(obj) {
      if (obj) {
        if (typeof obj === "object") {
          if (closure_3) {
            let tmp14 = null;
            if (require("module_1294")) {
              closure_129_0 = obj;
              closure_129_1 = false;
              require("module_1459")(closure_8, (fn, arg1) => {
                if (!closure_1) {
                  try {
                    if ("$" + fn(closure_0) === arg1) {
                      closure_1 = closure_6(arg1, 1);
                    }
                  } catch (err) {
                  }
                }
              });
              tmp14 = closure_129_1;
            }
            return tmp14;
          } else {
            const tmp3 = closure_6(closure_2(obj), 8, -1);
            let tmp6 = tmp3;
            if (closure_7(closure_5, tmp3) <= -1) {
              let tmp7 = "Object" === tmp3;
              if (tmp7) {
                _require = obj;
                dependencyMap = false;
                require("module_1459")(closure_8, (fn, arg1) => {
                  if (!closure_1) {
                    try {
                      fn(closure_0);
                      closure_1 = closure_6(arg1, 1);
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
_mod1459(tmp2, (arg0) => {
  const arr = new global[arg0]();
  if (arr.slice || arr.set) {
    const text = `$${arg0}`;
    closure_8[`$${arg0}`] = callBind(tmp);
  }
});
let tmp3 = callBoundIntrinsic("Array.prototype.indexOf", true) || (function indexOf(arg0, arg1) {
  let num = 0;
  if (0 < arg0.length) {
    while (arg0[num] !== arg1) {
      num = num + 1;
    }
    return num;
  }
  return -1;
});