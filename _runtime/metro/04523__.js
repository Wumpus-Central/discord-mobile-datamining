// _runtime/metro/04523__.js
import _mod4259 from "04259__.js";
import assign_mod from "../04504_assign.js";

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4259.getDefaultOptions());
};
export default exports.default;