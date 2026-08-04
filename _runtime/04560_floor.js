
export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = require(566)(arg0);
  }
  return tmp;
};