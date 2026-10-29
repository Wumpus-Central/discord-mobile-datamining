// === Module 8245: is7Z ===

// Module 8245 (is7Z)
import _mod8240 from "module_8240" /* 8240 */;
import _mod8241 from "module_8241" /* 8241 */;

require = arg1;
const dependencyMap = arg6;

export function is7Z(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
}
export function isLZH(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
}
export function isRAR(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
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
  fileChunk = _mod8240.getFileChunk(fileChunk, num);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
}