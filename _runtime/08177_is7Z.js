// === Module 8177: is7Z ===

// Module 8177 (is7Z)
import _mod8172 from "module_8172" /* 8172 */;
import _mod8173 from "module_8173" /* 8173 */;

require = arg1;
const dependencyMap = arg6;

export const is7Z = function is7Z(fileChunk) {
  fileChunk = _mod8172.getFileChunk(fileChunk);
  const FileTypes = _mod8173.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
export const isLZH = function isLZH(fileChunk) {
  fileChunk = _mod8172.getFileChunk(fileChunk);
  const FileTypes = _mod8173.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
export const isRAR = function isRAR(fileChunk) {
  fileChunk = _mod8172.getFileChunk(fileChunk);
  const FileTypes = _mod8173.FileTypes;
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
  fileChunk = _mod8172.getFileChunk(fileChunk, num);
  const FileTypes = _mod8173.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};