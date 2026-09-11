// _runtime/metro/04852__.js
import _mod1282 from "01282__.js";
import requirePromise from "../04850_requirePromise.js";
import PromiseResolve from "../04926_PromiseResolve.js";
import callBind from "../01454_callBind.js";

requirePromise();
let closure_2 = callBind(_mod1282("%Promise.all%"));
let closure_3 = callBind(_mod1282("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(4853)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return closure_2(
      this,
      tmp(4859)(tmp(4856)(arg0), (arg0) => {
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
