// === Module 3840: getDefaultOptions ===

// Module 3840 (getDefaultOptions)
import getDefaultOptions from "getDefaultOptions" /* 3576 */;
import assign from "assign" /* 3821 */;

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