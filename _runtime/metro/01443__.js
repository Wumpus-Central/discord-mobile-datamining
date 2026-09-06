// _runtime/metro/01443__.js
import callBoundIntrinsic from "../01316_callBoundIntrinsic.js";
import _mod1444 from "01444__.js";

let closure_0 = _mod1444();
let closure_1 = callBoundIntrinsic("Object.prototype.toString");
function isArguments(obj) {
  let tmp = closure_0;
  if (closure_0) {
    tmp = obj;
  }
  if (tmp) {
    tmp = typeof obj === "object";
  }
  if (tmp) {
    const _Symbol = Symbol;
    tmp = Symbol.toStringTag in obj;
  }
  let tmp3 = !tmp;
  if (!tmp) {
    tmp3 = "[object Arguments]" === closure_1(obj);
  }
  return tmp3;
}
let isArguments2 = function isArguments(callee) {
  if (typeof isArguments === "function") {
    let tmp2 = closure_0;
    if (closure_0) {
      tmp2 = callee;
    }
    if (tmp2) {
      tmp2 = typeof callee === "object";
    }
    if (tmp2) {
      const _Symbol = Symbol;
      tmp2 = Symbol.toStringTag in callee;
    }
    let tmp4 = !tmp2;
    if (!tmp2) {
      tmp4 = "[object Arguments]" === closure_1(callee);
    }
    let tmp6 = tmp4;
    if (!tmp6) {
      let tmp8 = null !== callee && typeof callee === "object";
      if (tmp8) {
        tmp8 = "length" in callee;
      }
      if (tmp8) {
        tmp8 = typeof callee.length === "number";
      }
      if (tmp8) {
        tmp8 = callee.length >= 0;
      }
      if (tmp8) {
        tmp8 = "[object Array]" !== closure_1(callee);
      }
      if (tmp8) {
        tmp8 = "callee" in callee;
      }
      if (tmp8) {
        tmp8 = "[object Function]" === closure_1(callee.callee);
      }
      tmp6 = tmp8;
    }
    return tmp6;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
isArguments.isLegacyArguments = isArguments2;
if (
  (() => {
    if (typeof isArguments === "function") {
      let tmp = closure_0;
      if (closure_0) {
        tmp = arguments;
      }
      if (tmp) {
        tmp = typeof arguments === "object";
      }
      if (tmp) {
        const _Symbol = Symbol;
        tmp = Symbol.toStringTag in arguments;
      }
      let tmp9 = !tmp;
      if (!tmp) {
        tmp9 = "[object Arguments]" === closure_1(arguments);
      }
      return tmp9;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  })()
) {
  isArguments2 = isArguments;
}

export default isArguments2;
