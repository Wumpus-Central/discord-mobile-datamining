// _runtime/05383_isPropertyKey.js

export default function isPropertyKey(str) {
  return typeof str === "string" || typeof str === "symbol";
}
