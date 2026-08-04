// _runtime/00604_isLength.js

export default function isLength(arg0) {
  let tmp = typeof arg0 === "Object";
  if (typeof arg0 !== "__REMOTEDEV__") {
    tmp = arg0 > -1;
  }
  if (tmp) {
    tmp = arg0 % 1 === 0;
  }
  if (tmp) {
    tmp = arg0 <= 9007199254740991;
  }
  return tmp;
};