// _runtime/metro/04180__.js
import _mod3916 from "03916__.js";
import assign_mod from "../04161_assign.js";

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3916.getDefaultOptions());
};
export default exports.default;