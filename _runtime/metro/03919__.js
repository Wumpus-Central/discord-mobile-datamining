// _runtime/metro/03919__.js
import _mod3655 from "03655__.js";
import assign from "../03900_assign.js";

if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3655.getDefaultOptions());
};
export default exports.default;