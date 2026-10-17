// === Module 5904: ? ===

// Module 5904
import _mod1307 from "module_1307" /* 1307 */;
import requirePromise from "requirePromise" /* 5902 */;
import PromiseResolve from "PromiseResolve" /* 5978 */;
import callBind_mod from "callBind" /* 1476 */;

requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(_mod1307("%Promise.all%"));
let callBind = callBind_mod;
let closure_3 = callBind(_mod1307("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(5905)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return closure_2(this, tmp(5911)(tmp(5908)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return closure_3(tmp, tmp3);
      }
      promise = PromiseResolve(self, arg0);
    }));
  }
};