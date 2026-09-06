// _runtime/metro/00521__.js

export default function isObject(obj) {
  let tmp = null != obj;
  if (tmp) {
    let tmp2 = typeof obj === "object";
    if (typeof obj !== "object") {
      tmp2 = typeof obj === "function";
    }
    tmp = tmp2;
  }
  return tmp;
}
