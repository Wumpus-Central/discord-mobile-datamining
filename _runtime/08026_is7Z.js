// _runtime/08026_is7Z.js
import _mod8021 from "metro/08021__.js";
import _mod8022 from "metro/08022__.js";

require = arg1;
const dependencyMap = arg6;

export const is7Z = function is7Z(fileChunk) {
  fileChunk = _mod8021.getFileChunk(fileChunk);
  const FileTypes = _mod8022.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
export const isLZH = function isLZH(fileChunk) {
  fileChunk = _mod8021.getFileChunk(fileChunk);
  const FileTypes = _mod8022.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
export const isRAR = function isRAR(fileChunk) {
  fileChunk = _mod8021.getFileChunk(fileChunk);
  const FileTypes = _mod8022.FileTypes;
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
  fileChunk = _mod8021.getFileChunk(fileChunk, num);
  const FileTypes = _mod8022.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};
