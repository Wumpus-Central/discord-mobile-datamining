// _runtime/metro/04691__.js
import _mod4427 from "04427__.js";
import assign_mod from "../04672_assign.js";

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4427.getDefaultOptions());
};
export default exports.default;