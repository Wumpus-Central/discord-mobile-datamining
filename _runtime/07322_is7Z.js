// === Module 7322: is7Z ===

// Module 7322 (is7Z)
import _mod7317 from "module_7317" /* 7317 */;
import _mod7318 from "module_7318" /* 7318 */;

require = arg1;
const dependencyMap = arg6;

export const is7Z = function is7Z(fileChunk) {
  fileChunk = _mod7317.getFileChunk(fileChunk);
  const FileTypes = _mod7318.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
export const isLZH = function isLZH(fileChunk) {
  fileChunk = _mod7317.getFileChunk(fileChunk);
  const FileTypes = _mod7318.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
export const isRAR = function isRAR(fileChunk) {
  fileChunk = _mod7317.getFileChunk(fileChunk);
  const FileTypes = _mod7318.FileTypes;
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
  fileChunk = _mod7317.getFileChunk(fileChunk, num);
  const FileTypes = _mod7318.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};