// _runtime/metro/04114__.js
import _mod3850 from "03850__.js";
import assign_mod from "../04095_assign.js";

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3850.getDefaultOptions());
};
export default exports.default;