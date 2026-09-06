// === Module 1459: ? ===

// Module 1459

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