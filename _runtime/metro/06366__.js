// === Module 6366: ? ===

// Module 6366
import _mod1307 from "module_1307" /* 1307 */;
import requirePromise from "requirePromise" /* 6364 */;
import PromiseResolve from "PromiseResolve" /* 6440 */;
import callBind_mod from "callBind" /* 1476 */;

requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(_mod1307("%Promise.all%"));
let callBind = callBind_mod;
let closure_3 = callBind(_mod1307("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(6367)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return closure_2(this, tmp(6373)(tmp(6370)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return closure_3(tmp, tmp3);
      }
      promise = PromiseResolve(self, arg0);
    }));
  }
};