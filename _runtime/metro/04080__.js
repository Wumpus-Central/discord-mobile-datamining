// _runtime/metro/04080__.js
import _mod3816 from "03816__.js";
import assign_mod from "../04061_assign.js";

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3816.getDefaultOptions());
};
export default exports.default;