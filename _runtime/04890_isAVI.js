// _runtime/04890_isAVI.js
import { getFileChunk } from "04882_getFileChunk.js";
import { 04883__ } from "metro/04883__.js";
const require = arg1;
const dependencyMap = arg6;
arg5.isAVI = undefined;
arg5.isFLV = undefined;
arg5.isM4V = undefined;
arg5.isMKV = undefined;
arg5.isMOV = undefined;
arg5.isMP4 = undefined;
arg5.isOGG = undefined;
arg5.isSWF = undefined;
arg5.isWEBM = undefined;
arg5.isAVI = function isAVI(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04883__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avi");
};
arg5.isFLV = function isFLV(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04883__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flv") && getFileChunk.isFlvStringIncluded(fileChunk);
};
arg5.isM4V = function isM4V(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04883__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4v") && getFileChunk.isftypStringIncluded(fileChunk);
};
arg5.isMKV = function isMKV(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk, 64);
  const FileTypes = 04883__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mkv") && "mkv" === getFileChunk.findMatroskaDocTypeElements(fileChunk);
};
arg5.isMOV = function isMOV(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04883__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mov");
};
arg5.isMP4 = function isMP4(fileChunk, excludeSimilarTypes) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04883__.FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "mp4");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let tmp8 = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = tmp(4882).getFileChunk(fileChunk);
      const FileTypes2 = tmp(4883).FileTypes;
      tmp8 = FileTypes2.checkByFileType(fileChunk1, "m4v") && tmp(4882).isftypStringIncluded(fileChunk1);
      const tmp10 = FileTypes2.checkByFileType(fileChunk1, "m4v") && tmp(4882).isftypStringIncluded(fileChunk1);
    }
    checkByFileTypeResult = tmp8;
  }
  return checkByFileTypeResult;
};
arg5.isOGG = function isOGG(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04883__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ogg");
};
arg5.isSWF = function isSWF(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04883__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "swf");
};
arg5.isWEBM = function isWEBM(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk, 64);
  const FileTypes = 04883__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webm") && "webm" === getFileChunk.findMatroskaDocTypeElements(fileChunk);
};