// === Module 5240: is7Z ===

// Module 5240 (is7Z)
import _mod5235 from "module_5235" /* 5235 */;
import _mod5236 from "module_5236" /* 5236 */;

require = arg1;
const dependencyMap = arg6;

export const is7Z = function is7Z(fileChunk) {
  fileChunk = _mod5235.getFileChunk(fileChunk);
  const FileTypes = _mod5236.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
export const isLZH = function isLZH(fileChunk) {
  fileChunk = _mod5235.getFileChunk(fileChunk);
  const FileTypes = _mod5236.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
export const isRAR = function isRAR(fileChunk) {
  fileChunk = _mod5235.getFileChunk(fileChunk);
  const FileTypes = _mod5236.FileTypes;
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
  fileChunk = _mod5235.getFileChunk(fileChunk, num);
  const FileTypes = _mod5236.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};