// _runtime/metro/04427__.js
import _mod4163 from "04163__.js";
import assign_mod from "../04408_assign.js";

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4163.getDefaultOptions());
};
export default exports.default;