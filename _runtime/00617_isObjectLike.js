// _runtime/00617_isObjectLike.js

export default function isObjectLike(obj) {
  return null != obj && typeof obj === "object";
}
