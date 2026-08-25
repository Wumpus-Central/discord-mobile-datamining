// === Module 4647: allSettled ===

// Module 4647 (allSettled)
import getEvalledConstructor from "getEvalledConstructor" /* 540 */;
import requirePromise from "requirePromise" /* 4645 */;
import callBind from "callBind" /* 1422 */;

requirePromise();
let closure_2 = callBind(getEvalledConstructor("%Promise.all%"));
let closure_3 = callBind(getEvalledConstructor("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(4648)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return callback(this, tmp(4654)(tmp(4651)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return closure_1_3(tmp, tmp3);
      }
    }));
  }
};