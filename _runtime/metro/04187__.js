// _runtime/metro/04187__.js
import _mod3923 from "03923__.js";
import assign_mod from "../04168_assign.js";

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3923.getDefaultOptions());
};
export default exports.default;