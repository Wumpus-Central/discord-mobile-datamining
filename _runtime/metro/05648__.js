// _runtime/metro/05648__.js
import _mod1305 from "01305__.js";
import requirePromise from "../05646_requirePromise.js";
import PromiseResolve from "../05722_PromiseResolve.js";
import callBind_mod from "../01474_callBind.js";

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
    return closure_2(
      this,
      tmp(5655)(tmp(5652)(arg0), (arg0) => {
        try {
          return promise.then(
            (value) => ({ status: "fulfilled", value }),
            (reason) => ({ status: "rejected", reason }),
          );
        } catch (tmp3) {
          return closure_3(tmp, tmp3);
        }
        promise = PromiseResolve(self, arg0);
      }),
    );
  }
}
