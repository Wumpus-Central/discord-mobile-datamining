import { getFileChunk } from "04869_getFileChunk.js";
import { 04870__ } from "metro/04870__.js";
// _runtime/04873_isAAC.js
const require = arg1;
const dependencyMap = arg6;
arg5.isAAC = undefined;
arg5.isAMR = undefined;
arg5.isFLAC = undefined;
arg5.isM4A = undefined;
arg5.isMP3 = undefined;
arg5.isWAV = undefined;
arg5.isAAC = function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = getFileChunk /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = 04870__.FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    checkByFileTypeResult = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = tmp(4869).getFileChunk(fileChunk);
      const FileTypes2 = tmp(4870).FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
  }
  return checkByFileTypeResult;
};
arg5.isAMR = function isAMR(fileChunk) {
  fileChunk = getFileChunk /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = 04870__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
};
arg5.isFLAC = function isFLAC(fileChunk) {
  fileChunk = getFileChunk /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = 04870__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
};
arg5.isM4A = function isM4A(fileChunk) {
  fileChunk = getFileChunk /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = 04870__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
};
arg5.isMP3 = function isMP3(fileChunk) {
  fileChunk = getFileChunk /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = 04870__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
};
arg5.isWAV = function isWAV(fileChunk) {
  fileChunk = getFileChunk /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = 04870__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
};