// _runtime/05376_isPropertyKey.js

export default function isPropertyKey(str) {
  return typeof str === "string" || typeof str === "symbol";
}
