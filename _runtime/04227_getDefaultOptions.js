// _runtime/04227_getDefaultOptions.js
import _mod3963 from "metro/03963__.js";
import assign_mod from "04208_assign.js";

let tmp3;
let assign = assign_mod;
if (!assign) {
  tmp3 = { default: assign };
  const obj = { default: assign };
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3963.getDefaultOptions());
}
