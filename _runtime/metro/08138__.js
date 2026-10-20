// === Module 8138: ? ===

// Module 8138
import _mod8134 from "module_8134" /* 8134 */;
import _mod8135 from "module_8135" /* 8135 */;

require = arg1;
const dependencyMap = arg6;

export const isAAC = function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8134.getFileChunk(fileChunk);
  const FileTypes = _mod8135.FileTypes;
  let checkByFileTypeResult1 = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult1) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let checkByFileTypeResult = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = _mod8134.getFileChunk(fileChunk);
      const FileTypes2 = _mod8135.FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
    checkByFileTypeResult1 = checkByFileTypeResult;
  }
  return checkByFileTypeResult1;
};
export const isAMR = function isAMR(fileChunk) {
  fileChunk = _mod8134.getFileChunk(fileChunk);
  const FileTypes = _mod8135.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
};
export const isFLAC = function isFLAC(fileChunk) {
  fileChunk = _mod8134.getFileChunk(fileChunk);
  const FileTypes = _mod8135.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
};
export const isM4A = function isM4A(fileChunk) {
  fileChunk = _mod8134.getFileChunk(fileChunk);
  const FileTypes = _mod8135.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
};
export const isMP3 = function isMP3(fileChunk) {
  fileChunk = _mod8134.getFileChunk(fileChunk);
  const FileTypes = _mod8135.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
};
export const isWAV = function isWAV(fileChunk) {
  fileChunk = _mod8134.getFileChunk(fileChunk);
  const FileTypes = _mod8135.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
};