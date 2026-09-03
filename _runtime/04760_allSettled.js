// _runtime/04760_allSettled.js
import getEvalledConstructor from "00537_getEvalledConstructor.js";
import requirePromise from "04758_requirePromise.js";
import callBind from "01417_callBind.js";

requirePromise();
let closure_2 = callBind(getEvalledConstructor("%Promise.all%"));
let closure_3 = callBind(getEvalledConstructor("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(4761)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return callback(
      this,
      tmp(4767)(tmp(4764)(arg0), (arg0) => {
        try {
          return promise.then(
            (value) => ({ status: "fulfilled", value }),
            (reason) => ({ status: "rejected", reason }),
          );
        } catch (tmp3) {
          return closure_1_3(tmp, tmp3);
        }
      }),
    );
  }
}
