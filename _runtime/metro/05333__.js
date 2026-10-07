// === Module 5333: ? ===

// Module 5333
import _mod1292 from "module_1292" /* 1292 */;
import requirePromise from "requirePromise" /* 5331 */;
import PromiseResolve from "PromiseResolve" /* 5407 */;
import callBind_mod from "callBind" /* 1461 */;

requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(_mod1292("%Promise.all%"));
let callBind = callBind_mod;
let closure_3 = callBind(_mod1292("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(5334)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return closure_2(this, tmp(5340)(tmp(5337)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return closure_3(tmp, tmp3);
      }
      promise = PromiseResolve(self, arg0);
    }));
  }
};