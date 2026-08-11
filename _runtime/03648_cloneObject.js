// _runtime/03648_cloneObject.js
import assign from "assign";

if (!assign) {
  const obj = { default: null };
  obj[0] = assign;
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
let c0 = tmp3;

export default function cloneObject(arg0) {
  return tmp3.default({}, arg0);
};
export default exports.default;