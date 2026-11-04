// === Module 6594: ? ===

// Module 6594
import _mod1292 from "module_1292" /* 1292 */;
import requirePromise from "requirePromise" /* 6592 */;
import PromiseResolve from "PromiseResolve" /* 6668 */;
import callBind_mod from "callBind" /* 1470 */;

requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(_mod1292("%Promise.all%"));
let callBind = callBind_mod;
let closure_3 = callBind(_mod1292("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(6595)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return closure_2(this, tmp(6601)(tmp(6598)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return closure_3(tmp, tmp3);
      }
      promise = PromiseResolve(self, arg0);
    }));
  }
};