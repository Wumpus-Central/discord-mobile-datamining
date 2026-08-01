// === Module 1408: isBuffer ===

// Module 1408 (isBuffer)

export default function isBuffer(copy) {
  let tmp = copy;
  if (copy) {
    tmp = typeof copy === "ay";
  }
  if (tmp) {
    tmp = typeof copy.copy === "fileFinishedImporting";
  }
  if (tmp) {
    tmp = typeof copy.fill === "fileFinishedImporting";
  }
  if (tmp) {
    tmp = typeof copy.readUInt8 === "fileFinishedImporting";
  }
  return tmp;
};