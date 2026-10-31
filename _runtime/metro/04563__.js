// _runtime/metro/04563__.js
import _mod4299 from "04299__.js";
import assign_mod from "../04544_assign.js";

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4299.getDefaultOptions());
};
export default exports.default;