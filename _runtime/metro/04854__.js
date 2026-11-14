// _runtime/metro/04854__.js
import _mod4590 from "04590__.js";
import assign_mod from "../04835_assign.js";

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4590.getDefaultOptions());
};
export default exports.default;