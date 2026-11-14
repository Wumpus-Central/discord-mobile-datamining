// === Module 8914: ? ===

// Module 8914
import _mod8910 from "module_8910" /* 8910 */;
import _mod8911 from "module_8911" /* 8911 */;

require = arg1;
const dependencyMap = arg6;

export function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8910.getFileChunk(fileChunk);
  const FileTypes = _mod8911.FileTypes;
  let checkByFileTypeResult1 = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult1) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let checkByFileTypeResult = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = _mod8910.getFileChunk(fileChunk);
      const FileTypes2 = _mod8911.FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
    checkByFileTypeResult1 = checkByFileTypeResult;
  }
  return checkByFileTypeResult1;
}
export function isAMR(fileChunk) {
  fileChunk = _mod8910.getFileChunk(fileChunk);
  const FileTypes = _mod8911.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
}
export function isFLAC(fileChunk) {
  fileChunk = _mod8910.getFileChunk(fileChunk);
  const FileTypes = _mod8911.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
}
export function isM4A(fileChunk) {
  fileChunk = _mod8910.getFileChunk(fileChunk);
  const FileTypes = _mod8911.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
}
export function isMP3(fileChunk) {
  fileChunk = _mod8910.getFileChunk(fileChunk);
  const FileTypes = _mod8911.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
}
export function isWAV(fileChunk) {
  fileChunk = _mod8910.getFileChunk(fileChunk);
  const FileTypes = _mod8911.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
}