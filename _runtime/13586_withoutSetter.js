// _runtime/13586_withoutSetter.js
import prop from "prop";
import { Symbol as _Symbol } from "module_13572";
import { call } from "13595_call.js";

let closure_2 = require("__core-js_shared__")("wks");
if (prop) {
  let withoutSetter = _Symbol.for || require("module_13572").Symbol;
  const tmp2 = _Symbol.for || require("module_13572").Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = require("module_13572").Symbol.withoutSetter;
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
    if (!tmp(13591)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(13595);
    }
    _Symbol = tmp(13572).Symbol;
    tmp5 = _Symbol[arg0];
  }
};