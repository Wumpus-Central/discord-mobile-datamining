
export default function isObjectLike(obj) {
  return null != obj && typeof obj === "object";
};