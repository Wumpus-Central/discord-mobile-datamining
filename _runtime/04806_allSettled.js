// === Module 4806: allSettled ===

// Module 4806 (allSettled)
import getEvalledConstructor from "getEvalledConstructor" /* 1282 */;
import requirePromise from "requirePromise" /* 4804 */;
import callBind from "callBind" /* 1454 */;

requirePromise();
let closure_2 = callBind(getEvalledConstructor("%Promise.all%"));
let closure_3 = callBind(getEvalledConstructor("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(4807)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return callback(this, tmp(4813)(tmp(4810)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return closure_1_3(tmp, tmp3);
      }
    }));
  }
};