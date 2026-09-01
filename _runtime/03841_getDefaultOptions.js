// _runtime/03841_getDefaultOptions.js
import getDefaultOptions from "03577_getDefaultOptions.js";
import assign from "03822_assign.js";

if (!assign) {
  const obj = { default: null };
  obj[0] = assign;
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, getDefaultOptions.getDefaultOptions());
};
export default exports.default;