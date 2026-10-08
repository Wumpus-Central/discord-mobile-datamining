// _runtime/metro/04425__.js
import _mod4161 from "04161__.js";
import assign_mod from "../04406_assign.js";

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4161.getDefaultOptions());
};
export default exports.default;