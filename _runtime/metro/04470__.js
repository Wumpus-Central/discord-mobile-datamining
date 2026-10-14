// _runtime/metro/04470__.js
import _mod4206 from "04206__.js";
import assign_mod from "../04451_assign.js";

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4206.getDefaultOptions());
};
export default exports.default;