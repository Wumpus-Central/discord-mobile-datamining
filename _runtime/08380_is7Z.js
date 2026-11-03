// === Module 8380: is7Z ===

// Module 8380 (is7Z)
import _mod8375 from "module_8375" /* 8375 */;
import _mod8376 from "module_8376" /* 8376 */;

require = arg1;
const dependencyMap = arg6;

export function is7Z(fileChunk) {
  fileChunk = _mod8375.getFileChunk(fileChunk);
  const FileTypes = _mod8376.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
}
export function isLZH(fileChunk) {
  fileChunk = _mod8375.getFileChunk(fileChunk);
  const FileTypes = _mod8376.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
}
export function isRAR(fileChunk) {
  fileChunk = _mod8375.getFileChunk(fileChunk);
  const FileTypes = _mod8376.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
}
export function isZIP(fileChunk, chunkSize) {
  let num;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = _mod8375.getFileChunk(fileChunk, num);
  const FileTypes = _mod8376.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
}