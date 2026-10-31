// _runtime/08256_is7Z.js
import _mod8251 from "metro/08251__.js";
import _mod8252 from "metro/08252__.js";

require = arg1;
const dependencyMap = arg6;

export function is7Z(fileChunk) {
  fileChunk = _mod8251.getFileChunk(fileChunk);
  const FileTypes = _mod8252.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
}
export function isLZH(fileChunk) {
  fileChunk = _mod8251.getFileChunk(fileChunk);
  const FileTypes = _mod8252.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
}
export function isRAR(fileChunk) {
  fileChunk = _mod8251.getFileChunk(fileChunk);
  const FileTypes = _mod8252.FileTypes;
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
  fileChunk = _mod8251.getFileChunk(fileChunk, num);
  const FileTypes = _mod8252.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
}
