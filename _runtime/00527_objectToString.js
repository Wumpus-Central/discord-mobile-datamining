// === Module 527: objectToString ===

// Module 527 (objectToString)

export default function objectToString(arg0) {
  const call = toString.call;
  return typeof call === "unknown" ? toString() : call(arg0);
};