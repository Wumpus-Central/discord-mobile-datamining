// === Module 3741: getDefaultOptions ===

// Module 3741 (getDefaultOptions)
import getDefaultOptions from "getDefaultOptions" /* 3477 */;
import assign from "assign" /* 3722 */;

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