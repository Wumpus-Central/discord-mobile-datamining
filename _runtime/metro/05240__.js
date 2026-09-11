// === Module 5240: ? ===

// Module 5240
import _mod5236 from "module_5236" /* 5236 */;
import _mod5237 from "module_5237" /* 5237 */;

require = arg1;
const dependencyMap = arg6;

export const isAAC = function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod5236.getFileChunk(fileChunk);
  const FileTypes = _mod5237.FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    checkByFileTypeResult = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = _mod5236.getFileChunk(fileChunk);
      const FileTypes2 = _mod5237.FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
  }
  return checkByFileTypeResult;
};
export const isAMR = function isAMR(fileChunk) {
  fileChunk = _mod5236.getFileChunk(fileChunk);
  const FileTypes = _mod5237.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
};
export const isFLAC = function isFLAC(fileChunk) {
  fileChunk = _mod5236.getFileChunk(fileChunk);
  const FileTypes = _mod5237.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
};
export const isM4A = function isM4A(fileChunk) {
  fileChunk = _mod5236.getFileChunk(fileChunk);
  const FileTypes = _mod5237.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
};
export const isMP3 = function isMP3(fileChunk) {
  fileChunk = _mod5236.getFileChunk(fileChunk);
  const FileTypes = _mod5237.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
};
export const isWAV = function isWAV(fileChunk) {
  fileChunk = _mod5236.getFileChunk(fileChunk);
  const FileTypes = _mod5237.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
};