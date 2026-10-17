// _runtime/metro/05904__.js
import _mod1307 from "01307__.js";
import requirePromise from "../05902_requirePromise.js";
import PromiseResolve from "../05978_PromiseResolve.js";
import callBind_mod from "../01476_callBind.js";

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
    return closure_2(
      this,
      tmp(5911)(tmp(5908)(arg0), (arg0) => {
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
