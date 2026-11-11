// === Module 8852: ? ===

// Module 8852
import _mod8844 from "module_8844" /* 8844 */;
import _mod8845 from "module_8845" /* 8845 */;

require = arg1;
const dependencyMap = arg6;

export function isAVI(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avi");
}
export function isFLV(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flv") && _mod8844.isFlvStringIncluded(fileChunk);
}
export function isM4V(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4v") && _mod8844.isftypStringIncluded(fileChunk);
}
export function isMKV(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk, 64);
  const FileTypes = _mod8845.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mkv") && "mkv" === _mod8844.findMatroskaDocTypeElements(fileChunk);
}
export function isMOV(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mov");
}
export function isMP4(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "mp4");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let tmp8 = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = _mod8844.getFileChunk(fileChunk);
      const FileTypes2 = _mod8845.FileTypes;
      tmp8 = FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod8844.isftypStringIncluded(fileChunk1);
      const tmp10 = FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod8844.isftypStringIncluded(fileChunk1);
    }
    checkByFileTypeResult = tmp8;
  }
  return checkByFileTypeResult;
}
export function isOGG(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ogg");
}
export function isSWF(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "swf");
}
export function isWEBM(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk, 64);
  const FileTypes = _mod8845.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webm") && "webm" === _mod8844.findMatroskaDocTypeElements(fileChunk);
}