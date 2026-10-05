// _runtime/00633_isKeyable.js

export default function isKeyable(str) {
  if (typeof str !== "string") {
    if (typeof str !== "number") {
      if (typeof str !== "symbol") {
        let tmp;
        if (typeof str !== "boolean") {
          tmp = null === str;
        }
        return tmp;
      }
    }
  }
  tmp = "__proto__" !== str;
}
