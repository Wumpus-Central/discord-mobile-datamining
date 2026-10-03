// === Module 5326: ? ===

// Module 5326
import _mod1292 from "module_1292" /* 1292 */;
import requirePromise from "requirePromise" /* 5324 */;
import PromiseResolve from "PromiseResolve" /* 5400 */;
import callBind_mod from "callBind" /* 1461 */;

requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(_mod1292("%Promise.all%"));
let callBind = callBind_mod;
let closure_3 = callBind(_mod1292("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(5327)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return closure_2(this, tmp(5333)(tmp(5330)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return closure_3(tmp, tmp3);
      }
      promise = PromiseResolve(self, arg0);
    }));
  }
};