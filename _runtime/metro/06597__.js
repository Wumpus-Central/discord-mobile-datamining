// _runtime/metro/06597__.js
import _mod1292 from "01292__.js";
import requirePromise from "../06595_requirePromise.js";
import PromiseResolve from "../06671_PromiseResolve.js";
import callBind_mod from "../01470_callBind.js";

requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(_mod1292("%Promise.all%"));
let callBind = callBind_mod;
let closure_3 = callBind(_mod1292("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(6598)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return closure_2(
      this,
      tmp(6604)(tmp(6601)(arg0), (arg0) => {
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
