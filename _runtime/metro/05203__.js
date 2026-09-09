// _runtime/metro/05203__.js
import _mod5199 from "05199__.js";
import _mod5200 from "05200__.js";

require = arg1;
const dependencyMap = arg6;

export const isAAC = function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod5199.getFileChunk(fileChunk);
  const FileTypes = _mod5200.FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    checkByFileTypeResult = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = _mod5199.getFileChunk(fileChunk);
      const FileTypes2 = _mod5200.FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
  }
  return checkByFileTypeResult;
};
export const isAMR = function isAMR(fileChunk) {
  fileChunk = _mod5199.getFileChunk(fileChunk);
  const FileTypes = _mod5200.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
};
export const isFLAC = function isFLAC(fileChunk) {
  fileChunk = _mod5199.getFileChunk(fileChunk);
  const FileTypes = _mod5200.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
};
export const isM4A = function isM4A(fileChunk) {
  fileChunk = _mod5199.getFileChunk(fileChunk);
  const FileTypes = _mod5200.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
};
export const isMP3 = function isMP3(fileChunk) {
  fileChunk = _mod5199.getFileChunk(fileChunk);
  const FileTypes = _mod5200.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
};
export const isWAV = function isWAV(fileChunk) {
  fileChunk = _mod5199.getFileChunk(fileChunk);
  const FileTypes = _mod5200.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
};
