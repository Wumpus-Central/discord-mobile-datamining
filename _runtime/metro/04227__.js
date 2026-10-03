// _runtime/metro/04227__.js
import _mod3963 from "03963__.js";
import assign_mod from "../04208_assign.js";

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3963.getDefaultOptions());
};
export default exports.default;