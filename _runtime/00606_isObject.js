// _runtime/00606_isObject.js

export default function isObject(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    let tmp2 = typeof arg0 === "ay";
    if (typeof arg0 !== "ay") {
      tmp2 = typeof arg0 === "fileFinishedImporting";
    }
    tmp = tmp2;
  }
  return tmp;
};