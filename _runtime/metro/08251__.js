// === Module 8251: ? ===

// Module 8251
import _mod8243 from "module_8243" /* 8243 */;
import _mod8244 from "module_8244" /* 8244 */;

require = arg1;
const dependencyMap = arg6;

export function isAVI(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avi");
}
export function isFLV(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flv") && _mod8243.isFlvStringIncluded(fileChunk);
}
export function isM4V(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4v") && _mod8243.isftypStringIncluded(fileChunk);
}
export function isMKV(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk, 64);
  const FileTypes = _mod8244.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mkv") && "mkv" === _mod8243.findMatroskaDocTypeElements(fileChunk);
}
export function isMOV(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mov");
}
export function isMP4(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "mp4");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let tmp8 = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = _mod8243.getFileChunk(fileChunk);
      const FileTypes2 = _mod8244.FileTypes;
      tmp8 = FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod8243.isftypStringIncluded(fileChunk1);
      const tmp10 = FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod8243.isftypStringIncluded(fileChunk1);
    }
    checkByFileTypeResult = tmp8;
  }
  return checkByFileTypeResult;
}
export function isOGG(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ogg");
}
export function isSWF(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "swf");
}
export function isWEBM(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk, 64);
  const FileTypes = _mod8244.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webm") && "webm" === _mod8243.findMatroskaDocTypeElements(fileChunk);
}