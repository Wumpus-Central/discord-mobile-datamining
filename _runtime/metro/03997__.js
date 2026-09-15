// _runtime/metro/03997__.js
import _mod3733 from "03733__.js";
import assign_mod from "../03978_assign.js";

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3733.getDefaultOptions());
};
export default exports.default;