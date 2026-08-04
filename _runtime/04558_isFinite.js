
export default function isFinite(num) {
  let tmp = typeof num === "number";
  if (typeof num !== "number") {
    tmp = typeof num === "bigint";
  }
  if (tmp) {
    tmp = !require(572) /* isNaN */(num);
  }
  if (tmp) {
    tmp = num !== Infinity;
  }
  if (tmp) {
    tmp = num !== -Infinity;
  }
  return tmp;
};