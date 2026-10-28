// _runtime/metro/04556__.js
import _mod4292 from "04292__.js";
import assign_mod from "../04537_assign.js";

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4292.getDefaultOptions());
};
export default exports.default;