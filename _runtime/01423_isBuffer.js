// === Module 1423: isBuffer ===

// Module 1423 (isBuffer)

export default function isBuffer(obj) {
  let tmp = obj;
  if (obj) {
    tmp = typeof obj === "object";
  }
  if (tmp) {
    tmp = typeof obj.copy === "function";
  }
  if (tmp) {
    tmp = typeof obj.fill === "function";
  }
  if (tmp) {
    tmp = typeof obj.readUInt8 === "function";
  }
  return tmp;
};