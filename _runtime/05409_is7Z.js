// === Module 5409: is7Z ===

// Module 5409 (is7Z)
import _mod5404 from "module_5404" /* 5404 */;
import _mod5405 from "module_5405" /* 5405 */;

require = arg1;
const dependencyMap = arg6;

export const is7Z = function is7Z(fileChunk) {
  fileChunk = _mod5404.getFileChunk(fileChunk);
  const FileTypes = _mod5405.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
export const isLZH = function isLZH(fileChunk) {
  fileChunk = _mod5404.getFileChunk(fileChunk);
  const FileTypes = _mod5405.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
export const isRAR = function isRAR(fileChunk) {
  fileChunk = _mod5404.getFileChunk(fileChunk);
  const FileTypes = _mod5405.FileTypes;
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
  fileChunk = _mod5404.getFileChunk(fileChunk, num);
  const FileTypes = _mod5405.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};