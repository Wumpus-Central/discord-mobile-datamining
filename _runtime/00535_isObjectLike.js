// === Module 535: isObjectLike ===

// Module 535 (isObjectLike)

export default function isObjectLike(obj) {
  return null != obj && typeof obj === "object";
};