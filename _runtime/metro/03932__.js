// _runtime/metro/03932__.js
import _mod3668 from "03668__.js";
import assign from "../03913_assign.js";

if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3668.getDefaultOptions());
};
export default exports.default;