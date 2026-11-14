// === Module 8915: is7Z ===

// Module 8915 (is7Z)
import _mod8910 from "module_8910" /* 8910 */;
import _mod8911 from "module_8911" /* 8911 */;

require = arg1;
const dependencyMap = arg6;

export function is7Z(fileChunk) {
  fileChunk = _mod8910.getFileChunk(fileChunk);
  const FileTypes = _mod8911.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
}
export function isLZH(fileChunk) {
  fileChunk = _mod8910.getFileChunk(fileChunk);
  const FileTypes = _mod8911.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
}
export function isRAR(fileChunk) {
  fileChunk = _mod8910.getFileChunk(fileChunk);
  const FileTypes = _mod8911.FileTypes;
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
  fileChunk = _mod8910.getFileChunk(fileChunk, num);
  const FileTypes = _mod8911.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
}