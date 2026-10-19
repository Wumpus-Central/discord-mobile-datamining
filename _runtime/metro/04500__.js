// _runtime/metro/04500__.js
import _mod4236 from "04236__.js";
import assign_mod from "../04481_assign.js";

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4236.getDefaultOptions());
};
export default exports.default;