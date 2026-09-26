// _runtime/05503_is7Z.js
import _mod5498 from "metro/05498__.js";
import _mod5499 from "metro/05499__.js";

require = arg1;
const dependencyMap = arg6;

export const is7Z = function is7Z(fileChunk) {
  fileChunk = _mod5498.getFileChunk(fileChunk);
  const FileTypes = _mod5499.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
export const isLZH = function isLZH(fileChunk) {
  fileChunk = _mod5498.getFileChunk(fileChunk);
  const FileTypes = _mod5499.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
export const isRAR = function isRAR(fileChunk) {
  fileChunk = _mod5498.getFileChunk(fileChunk);
  const FileTypes = _mod5499.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
};
export const isZIP = function isZIP(fileChunk, chunkSize) {
  let num;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = _mod5498.getFileChunk(fileChunk, num);
  const FileTypes = _mod5499.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};
