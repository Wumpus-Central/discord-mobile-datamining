// === Module 1343: ? ===

// Module 1343
let hasOwnProperty;

function supported(arg0) {
  return "[object Arguments]" == toString.call(arg0);
}
function unsupported(obj) {
  let flag = obj && typeof obj === "object" && typeof obj.length === "number";
  if (flag) {
    const _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    flag = hasOwnProperty.call(obj, "callee");
  }
  if (flag) {
    const _Object2 = Object;
    flag = !propertyIsEnumerable.call(obj, "callee");
  }
  if (!flag) {
    flag = false;
  }
  return flag;
}
let tmp = unsupported;
if ("[object Arguments]" == (function() {
  return toString.call(arguments);
})()) {
  tmp = supported;
}
tmp.supported = supported;
tmp.unsupported = unsupported;

export default tmp;