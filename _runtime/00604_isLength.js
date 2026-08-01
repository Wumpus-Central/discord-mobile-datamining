// === Module 604: isLength ===

// Module 604 (isLength)

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