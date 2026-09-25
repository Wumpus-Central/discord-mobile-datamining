// _runtime/metro/04184__.js
import _mod3920 from "03920__.js";
import assign_mod from "../04165_assign.js";

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3920.getDefaultOptions());
};
export default exports.default;