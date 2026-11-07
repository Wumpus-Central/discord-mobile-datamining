// _runtime/metro/04689__.js
import _mod4425 from "04425__.js";
import assign_mod from "../04670_assign.js";

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4425.getDefaultOptions());
};
export default exports.default;