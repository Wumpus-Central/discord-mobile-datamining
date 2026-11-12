// === Module 8848: is7Z ===

// Module 8848 (is7Z)
import _mod8843 from "module_8843" /* 8843 */;
import _mod8844 from "module_8844" /* 8844 */;

require = arg1;
const dependencyMap = arg6;

export function is7Z(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
}
export function isLZH(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
}
export function isRAR(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
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
  fileChunk = _mod8843.getFileChunk(fileChunk, num);
  const FileTypes = _mod8844.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
}