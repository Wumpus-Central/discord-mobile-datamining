// _runtime/metro/03994__.js
import _mod3730 from "03730__.js";
import assign from "../03975_assign.js";

if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3730.getDefaultOptions());
};
export default exports.default;