// === Module 5376: isPropertyKey ===

// Module 5376 (isPropertyKey)

export default function isPropertyKey(str) {
  return typeof str === "string" || typeof str === "symbol";
};