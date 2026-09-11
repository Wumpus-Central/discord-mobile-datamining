// _runtime/metro/03964__.js
import _mod3700 from "03700__.js";
import assign from "../03945_assign.js";

if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3700.getDefaultOptions());
};
export default exports.default;