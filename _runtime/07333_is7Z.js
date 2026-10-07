// _runtime/07333_is7Z.js
import _mod7328 from "metro/07328__.js";
import _mod7329 from "metro/07329__.js";

require = arg1;
const dependencyMap = arg6;

export const is7Z = function is7Z(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
export const isLZH = function isLZH(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
export const isRAR = function isRAR(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
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
  fileChunk = _mod7328.getFileChunk(fileChunk, num);
  const FileTypes = _mod7329.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};
