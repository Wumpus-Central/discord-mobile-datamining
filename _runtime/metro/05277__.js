// _runtime/metro/05277__.js
import _mod5273 from "05273__.js";
import _mod5274 from "05274__.js";

require = arg1;
const dependencyMap = arg6;

export const isAAC = function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod5273.getFileChunk(fileChunk);
  const FileTypes = _mod5274.FileTypes;
  let checkByFileTypeResult1 = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult1) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let checkByFileTypeResult = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = _mod5273.getFileChunk(fileChunk);
      const FileTypes2 = _mod5274.FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
    checkByFileTypeResult1 = checkByFileTypeResult;
  }
  return checkByFileTypeResult1;
};
export const isAMR = function isAMR(fileChunk) {
  fileChunk = _mod5273.getFileChunk(fileChunk);
  const FileTypes = _mod5274.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
};
export const isFLAC = function isFLAC(fileChunk) {
  fileChunk = _mod5273.getFileChunk(fileChunk);
  const FileTypes = _mod5274.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
};
export const isM4A = function isM4A(fileChunk) {
  fileChunk = _mod5273.getFileChunk(fileChunk);
  const FileTypes = _mod5274.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
};
export const isMP3 = function isMP3(fileChunk) {
  fileChunk = _mod5273.getFileChunk(fileChunk);
  const FileTypes = _mod5274.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
};
export const isWAV = function isWAV(fileChunk) {
  fileChunk = _mod5273.getFileChunk(fileChunk);
  const FileTypes = _mod5274.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
};
