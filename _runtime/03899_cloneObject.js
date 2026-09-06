// === Module 3899: cloneObject ===

// Module 3899 (cloneObject)
import assign from "assign" /* 3900 */;

if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function cloneObject(arg0) {
  return assign.default({}, arg0);
};
export default exports.default;