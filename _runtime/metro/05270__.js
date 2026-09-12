// === Module 5270: ? ===

// Module 5270
import _mod5266 from "module_5266" /* 5266 */;
import _mod5267 from "module_5267" /* 5267 */;

require = arg1;
const dependencyMap = arg6;

export const isAAC = function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod5266.getFileChunk(fileChunk);
  const FileTypes = _mod5267.FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    checkByFileTypeResult = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = _mod5266.getFileChunk(fileChunk);
      const FileTypes2 = _mod5267.FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
  }
  return checkByFileTypeResult;
};
export const isAMR = function isAMR(fileChunk) {
  fileChunk = _mod5266.getFileChunk(fileChunk);
  const FileTypes = _mod5267.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
};
export const isFLAC = function isFLAC(fileChunk) {
  fileChunk = _mod5266.getFileChunk(fileChunk);
  const FileTypes = _mod5267.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
};
export const isM4A = function isM4A(fileChunk) {
  fileChunk = _mod5266.getFileChunk(fileChunk);
  const FileTypes = _mod5267.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
};
export const isMP3 = function isMP3(fileChunk) {
  fileChunk = _mod5266.getFileChunk(fileChunk);
  const FileTypes = _mod5267.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
};
export const isWAV = function isWAV(fileChunk) {
  fileChunk = _mod5266.getFileChunk(fileChunk);
  const FileTypes = _mod5267.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
};