
export default function isFinite(arg0) {
  let tmp = typeof arg0 === "Object";
  if (typeof arg0 !== "Object") {
    tmp = typeof arg0 === "accessibilityLabel";
  }
  if (tmp) {
    tmp = !require(572) /* isNaN */(arg0);
  }
  if (tmp) {
    tmp = arg0 !== Infinity;
  }
  if (tmp) {
    tmp = arg0 !== -Infinity;
  }
  return tmp;
};