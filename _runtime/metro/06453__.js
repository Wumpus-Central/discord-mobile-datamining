// === Module 6453: ? ===

// Module 6453
import _mod1293 from "module_1293" /* 1293 */;
import requirePromise from "requirePromise" /* 6451 */;
import PromiseResolve from "PromiseResolve" /* 6527 */;
import callBind_mod from "callBind" /* 1469 */;

requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(_mod1293("%Promise.all%"));
let callBind = callBind_mod;
let closure_3 = callBind(_mod1293("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(6454)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return closure_2(this, tmp(6460)(tmp(6457)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return closure_3(tmp, tmp3);
      }
      promise = PromiseResolve(self, arg0);
    }));
  }
};