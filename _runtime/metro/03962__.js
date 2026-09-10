// _runtime/metro/03962__.js
import _mod3698 from "03698__.js";
import assign from "../03943_assign.js";

if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3698.getDefaultOptions());
};
export default exports.default;