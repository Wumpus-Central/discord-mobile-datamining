// === Module 4160: cloneObject ===

// Module 4160 (cloneObject)
import assign_mod from "assign" /* 4161 */;

let assign = assign_mod;
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