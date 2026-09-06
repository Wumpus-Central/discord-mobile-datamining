// _runtime/00583_mapValues.js
import baseAssignValue from "00668_baseAssignValue.js";

export default function mapValues(arg0, arg1) {
  _require = arg1;
  const obj = {};
  _require = require("baseIteratee")(arg1, 3);
  require("metro/00528__.js")(arg0, (arg0, arg1, arg2) => {
    baseAssignValue(obj, arg1, closure_0(arg0, arg1, arg2));
  });
  return obj;
}
