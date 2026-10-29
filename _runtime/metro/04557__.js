// _runtime/metro/04557__.js
import _mod4293 from "04293__.js";
import assign_mod from "../04538_assign.js";

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4293.getDefaultOptions());
};
export default exports.default;