// _runtime/metro/03995__.js
import _mod3731 from "03731__.js";
import assign_mod from "../03976_assign.js";

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3731.getDefaultOptions());
};
export default exports.default;