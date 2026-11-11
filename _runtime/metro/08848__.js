// === Module 8848: ? ===

// Module 8848
import _mod8844 from "module_8844" /* 8844 */;
import _mod8845 from "module_8845" /* 8845 */;

require = arg1;
const dependencyMap = arg6;

export function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  let checkByFileTypeResult1 = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult1) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let checkByFileTypeResult = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = _mod8844.getFileChunk(fileChunk);
      const FileTypes2 = _mod8845.FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
    checkByFileTypeResult1 = checkByFileTypeResult;
  }
  return checkByFileTypeResult1;
}
export function isAMR(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
}
export function isFLAC(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
}
export function isM4A(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
}
export function isMP3(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
}
export function isWAV(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
}