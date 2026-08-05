// _runtime/00620_isObjectLike.js

export default function isObjectLike(obj) {
  return null != obj && typeof obj === "object";
};