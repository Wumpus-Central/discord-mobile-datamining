// === Module 8396: is7Z ===

// Module 8396 (is7Z)
import _mod8391 from "module_8391" /* 8391 */;
import _mod8392 from "module_8392" /* 8392 */;

require = arg1;
const dependencyMap = arg6;

export function is7Z(fileChunk) {
  fileChunk = _mod8391.getFileChunk(fileChunk);
  const FileTypes = _mod8392.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
}
export function isLZH(fileChunk) {
  fileChunk = _mod8391.getFileChunk(fileChunk);
  const FileTypes = _mod8392.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
}
export function isRAR(fileChunk) {
  fileChunk = _mod8391.getFileChunk(fileChunk);
  const FileTypes = _mod8392.FileTypes;
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
  fileChunk = _mod8391.getFileChunk(fileChunk, num);
  const FileTypes = _mod8392.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
}