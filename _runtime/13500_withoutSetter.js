// _runtime/13500_withoutSetter.js
import prop from "prop";
import { Symbol as _Symbol } from "module_13486";
import { call } from "13509_call.js";

let closure_2 = require("__core-js_shared__")("wks");
if (prop) {
  let withoutSetter = _Symbol.for || require("module_13486").Symbol;
  const tmp2 = _Symbol.for || require("module_13486").Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = require("module_13486").Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = require("sum");
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (call(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(13505)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(13509);
    }
    _Symbol = tmp(13486).Symbol;
    tmp5 = _Symbol[arg0];
  }
};