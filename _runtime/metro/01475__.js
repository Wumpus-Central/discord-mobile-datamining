// === Module 1475: ? ===

// Module 1475

export default function isBuffer(copy) {
  let tmp = copy;
  if (copy) {
    tmp = typeof copy === "object";
  }
  if (tmp) {
    tmp = typeof copy.copy === "function";
  }
  if (tmp) {
    tmp = typeof copy.fill === "function";
  }
  if (tmp) {
    tmp = typeof copy.readUInt8 === "function";
  }
  return tmp;
};