// === Module 3745: getDefaultOptions ===

// Module 3745 (getDefaultOptions)
import getDefaultOptions from "getDefaultOptions" /* 3481 */;
import assign from "assign" /* 3726 */;

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