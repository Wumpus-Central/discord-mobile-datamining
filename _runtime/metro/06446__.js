// _runtime/metro/06446__.js
import _mod1304 from "01304__.js";
import requirePromise from "../06444_requirePromise.js";
import PromiseResolve from "../06520_PromiseResolve.js";
import callBind_mod from "../01474_callBind.js";

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
    return closure_2(
      this,
      tmp(6453)(tmp(6450)(arg0), (arg0) => {
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
