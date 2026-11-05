// === Module 8401: is7Z ===

// Module 8401 (is7Z)
import _mod8396 from "module_8396" /* 8396 */;
import _mod8397 from "module_8397" /* 8397 */;

require = arg1;
const dependencyMap = arg6;

export function is7Z(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
}
export function isLZH(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
}
export function isRAR(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
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
  fileChunk = _mod8396.getFileChunk(fileChunk, num);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
}