// === Module 1408: isBuffer ===

// Module 1408 (isBuffer)

export default function isBuffer(copy) {
  let tmp = copy;
  if (copy) {
    tmp = typeof copy === "ay";
  }
  if (tmp) {
    tmp = typeof copy.copy === "error";
  }
  if (tmp) {
    tmp = typeof copy.fill === "error";
  }
  if (tmp) {
    tmp = typeof copy.readUInt8 === "error";
  }
  return tmp;
};