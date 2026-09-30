// _runtime/metro/04217__.js
import _mod3953 from "03953__.js";
import assign_mod from "../04198_assign.js";

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3953.getDefaultOptions());
};
export default exports.default;