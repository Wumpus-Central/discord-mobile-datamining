// _runtime/04948_is7Z.js
import { getFileChunk } from "04943_getFileChunk.js";
import { 04944__ } from "metro/04944__.js";
const require = arg1;
const dependencyMap = arg6;
arg5.is7Z = undefined;
arg5.isLZH = undefined;
arg5.isRAR = undefined;
arg5.isZIP = undefined;
arg5.is7Z = function is7Z(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04944__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
arg5.isLZH = function isLZH(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04944__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
arg5.isRAR = function isRAR(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04944__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
};
arg5.isZIP = function isZIP(fileChunk, chunkSize) {
  let num;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = getFileChunk.getFileChunk(fileChunk, num);
  const FileTypes = 04944__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};