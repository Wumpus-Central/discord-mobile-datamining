// === Module 8926: is7Z ===

// Module 8926 (is7Z)
import _mod8921 from "module_8921" /* 8921 */;
import _mod8922 from "module_8922" /* 8922 */;

require = arg1;
const dependencyMap = arg6;

export function is7Z(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
}
export function isLZH(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
}
export function isRAR(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
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
  fileChunk = _mod8921.getFileChunk(fileChunk, num);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
}