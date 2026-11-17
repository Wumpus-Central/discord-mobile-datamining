// === Module 8925: ? ===

// Module 8925
import _mod8921 from "module_8921" /* 8921 */;
import _mod8922 from "module_8922" /* 8922 */;

require = arg1;
const dependencyMap = arg6;

export function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  let checkByFileTypeResult1 = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult1) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let checkByFileTypeResult = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = _mod8921.getFileChunk(fileChunk);
      const FileTypes2 = _mod8922.FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
    checkByFileTypeResult1 = checkByFileTypeResult;
  }
  return checkByFileTypeResult1;
}
export function isAMR(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
}
export function isFLAC(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
}
export function isM4A(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
}
export function isMP3(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
}
export function isWAV(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
}