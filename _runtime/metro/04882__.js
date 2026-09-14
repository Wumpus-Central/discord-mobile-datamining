// _runtime/metro/04882__.js
import _mod1280 from "01280__.js";
import requirePromise from "../04880_requirePromise.js";
import PromiseResolve from "../04956_PromiseResolve.js";
import callBind_mod from "../01454_callBind.js";

requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(_mod1280("%Promise.all%"));
let callBind = callBind_mod;
let closure_3 = callBind(_mod1280("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(4883)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return closure_2(
      this,
      tmp(4889)(tmp(4886)(arg0), (arg0) => {
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
