// _runtime/05407_PromiseResolve.js
import GetIntrinsic from "01292_GetIntrinsic.js";
import _mod1314 from "metro/01314__.js";
import callBind from "01461_callBind.js";

const tmp = GetIntrinsic("%Promise.resolve%", true);
let closure_2 = tmp && callBind(tmp);
tmp && callBind(tmp);

export default function PromiseResolve(arg0, arg1) {
  if (closure_2) {
    return tmp(arg0, arg1);
  } else {
    const self = this;
    const self2 = this;
    const tmp4 = new _mod1314("This environment does not support Promises.");
    throw tmp4;
  }
}
