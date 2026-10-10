// _runtime/metro/04468__.js
import _mod4204 from "04204__.js";
import assign_mod from "../04449_assign.js";

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4204.getDefaultOptions());
};
export default exports.default;