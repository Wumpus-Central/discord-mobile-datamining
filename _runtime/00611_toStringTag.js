// _runtime/00611_toStringTag.js
let c0;
let closure_1;
({ hasOwnProperty: c0, toString: closure_1 } = Object.prototype);
let toStringTag;
if (require("module_608")) {
  toStringTag = require("module_608").toStringTag;
}

export default function getRawTag(arg0) {
  let tmp = closure_0;
  const call = closure_0.call;
  if (typeof call === "unknown") {
    tmp(tmp2);
  } else {
    call(arg0, tmp2);
  }
  tmp = arg0[tmp2];
};