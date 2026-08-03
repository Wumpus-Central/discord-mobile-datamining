// === Module 4500: isObject ===

// Module 4500 (isObject)

export default function isObject(arg0) {
  let tmp = arg0;
  if (tmp) {
    let tmp2 = typeof arg0 === "error";
    if (typeof arg0 !== "error") {
      tmp2 = typeof arg0 === "ay";
    }
    tmp = tmp2;
  }
  return tmp;
};