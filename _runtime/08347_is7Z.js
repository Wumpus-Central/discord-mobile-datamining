// === Module 8347: is7Z ===

// Module 8347 (is7Z)
import _mod8342 from "module_8342" /* 8342 */;
import _mod8343 from "module_8343" /* 8343 */;

require = arg1;
const dependencyMap = arg6;

export function is7Z(fileChunk) {
  fileChunk = _mod8342.getFileChunk(fileChunk);
  const FileTypes = _mod8343.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
}
export function isLZH(fileChunk) {
  fileChunk = _mod8342.getFileChunk(fileChunk);
  const FileTypes = _mod8343.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
}
export function isRAR(fileChunk) {
  fileChunk = _mod8342.getFileChunk(fileChunk);
  const FileTypes = _mod8343.FileTypes;
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
  fileChunk = _mod8342.getFileChunk(fileChunk, num);
  const FileTypes = _mod8343.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
}