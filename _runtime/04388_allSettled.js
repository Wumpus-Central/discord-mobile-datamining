// === Module 4388: allSettled ===

// Module 4388 (allSettled)
import getEvalledConstructor from "getEvalledConstructor" /* 540 */;
import requirePromise from "requirePromise" /* 4386 */;
import callBind from "callBind" /* 1422 */;

requirePromise();
let closure_2 = callBind(getEvalledConstructor("%Promise.all%"));
let closure_3 = callBind(getEvalledConstructor("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(4389)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return callback(this, tmp(4395)(tmp(4392)(arg0), (arg0) => {
      try {
        return promise.then((result) => ({ status: "fulfilled", value: result }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return closure_1_3(tmp, tmp3);
      }
      promise = self(dependencyMap[6])(self, arg0);
    }));
  }
};