// === Module 8191: is7Z ===

// Module 8191 (is7Z)
import _mod8186 from "module_8186" /* 8186 */;
import _mod8187 from "module_8187" /* 8187 */;

require = arg1;
const dependencyMap = arg6;

export const is7Z = function is7Z(fileChunk) {
  fileChunk = _mod8186.getFileChunk(fileChunk);
  const FileTypes = _mod8187.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
export const isLZH = function isLZH(fileChunk) {
  fileChunk = _mod8186.getFileChunk(fileChunk);
  const FileTypes = _mod8187.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
export const isRAR = function isRAR(fileChunk) {
  fileChunk = _mod8186.getFileChunk(fileChunk);
  const FileTypes = _mod8187.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
};
export const isZIP = function isZIP(fileChunk, chunkSize) {
  let num;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = _mod8186.getFileChunk(fileChunk, num);
  const FileTypes = _mod8187.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};