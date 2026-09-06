// _runtime/00535_isObjectLike.js

export default function isObjectLike(obj) {
  return null != obj && typeof obj === "object";
}
