// === Module 5864: ? ===

// Module 5864
import _mod1305 from "module_1305" /* 1305 */;
import requirePromise from "requirePromise" /* 5862 */;
import PromiseResolve from "PromiseResolve" /* 5938 */;
import callBind_mod from "callBind" /* 1474 */;

requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(_mod1305("%Promise.all%"));
let callBind = callBind_mod;
let closure_3 = callBind(_mod1305("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(5865)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return closure_2(this, tmp(5871)(tmp(5868)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return closure_3(tmp, tmp3);
      }
      promise = PromiseResolve(self, arg0);
    }));
  }
};