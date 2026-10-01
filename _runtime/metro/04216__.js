// _runtime/metro/04216__.js
import _mod3952 from "03952__.js";
import assign_mod from "../04197_assign.js";

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3952.getDefaultOptions());
};
export default exports.default;