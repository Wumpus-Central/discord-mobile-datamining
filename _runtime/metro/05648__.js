// === Module 5648: ? ===

// Module 5648
import _mod1305 from "module_1305" /* 1305 */;
import requirePromise from "requirePromise" /* 5646 */;
import PromiseResolve from "PromiseResolve" /* 5722 */;
import callBind_mod from "callBind" /* 1474 */;

requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(_mod1305("%Promise.all%"));
let callBind = callBind_mod;
let closure_3 = callBind(_mod1305("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(5649)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return closure_2(this, tmp(5655)(tmp(5652)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return closure_3(tmp, tmp3);
      }
      promise = PromiseResolve(self, arg0);
    }));
  }
};