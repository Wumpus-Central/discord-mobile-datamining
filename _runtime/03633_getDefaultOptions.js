// _runtime/03633_getDefaultOptions.js
import assign from "assign";
import { getDefaultOptions } from "03369_getDefaultOptions.js";

if (!assign) {
  const obj = { default: null };
  obj[0] = assign;
  let tmp3 = obj;
} else {
  tmp3 = assign;
}

export default function getDefaultOptions() {
  return tmp3.default({}, getDefaultOptions /* getDefaultOptions */.getDefaultOptions());
};
export default exports.default;