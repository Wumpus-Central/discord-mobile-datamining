// _runtime/08926_is7Z.js
import _mod8921 from "metro/08921__.js";
import _mod8922 from "metro/08922__.js";

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
