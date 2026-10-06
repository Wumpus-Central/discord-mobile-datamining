// _runtime/05333_allSettled.js
import GetIntrinsic from "01292_GetIntrinsic.js";
import requirePromise from "05331_requirePromise.js";
import PromiseResolve from "05407_PromiseResolve.js";
import callBind_mod from "01461_callBind.js";

requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(GetIntrinsic("%Promise.all%"));
callBind = callBind_mod;
let closure_3 = callBind(GetIntrinsic("%Promise.reject%"));

export default function allSettled(arg0) {
  let self = this;
  if ("Object" !== self(5334)(this)) {
    const _TypeError = TypeError;
    self = this;
    const self2 = this;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    const tmp4 = self(5337)(arg0);
    return closure_2(
      this,
      self(5340)(tmp4, (arg0) => {
        const promise = PromiseResolve(self, arg0);
        try {
          return promise.then(
            (value) => ({ status: "fulfilled", value }),
            (reason) => ({ status: "rejected", reason }),
          );
        } catch (tmp2) {
          return closure_3(self, tmp2);
        }
      }),
    );
  }
}
