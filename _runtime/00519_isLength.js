// _runtime/00519_isLength.js

export default function isLength(num) {
  let tmp = typeof num === "number";
  if (typeof num === "number") {
    tmp = num > -1;
  }
  if (tmp) {
    tmp = num % 1 === 0;
  }
  if (tmp) {
    tmp = num <= 9007199254740991;
  }
  return tmp;
}
