// === Module 6446: ? ===

// Module 6446
import _mod1304 from "module_1304" /* 1304 */;
import requirePromise from "requirePromise" /* 6444 */;
import PromiseResolve from "PromiseResolve" /* 6520 */;
import callBind_mod from "callBind" /* 1474 */;

requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(_mod1304("%Promise.all%"));
let callBind = callBind_mod;
let closure_3 = callBind(_mod1304("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(6447)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return closure_2(this, tmp(6453)(tmp(6450)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return closure_3(tmp, tmp3);
      }
      promise = PromiseResolve(self, arg0);
    }));
  }
};