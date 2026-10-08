// === Module 7780: ? ===

// Module 7780
import _mod7772 from "module_7772" /* 7772 */;
import _mod7773 from "module_7773" /* 7773 */;

require = arg1;
const dependencyMap = arg6;

export const isAVI = function isAVI(fileChunk) {
  fileChunk = _mod7772.getFileChunk(fileChunk);
  const FileTypes = _mod7773.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avi");
};
export const isFLV = function isFLV(fileChunk) {
  fileChunk = _mod7772.getFileChunk(fileChunk);
  const FileTypes = _mod7773.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flv") && _mod7772.isFlvStringIncluded(fileChunk);
};
export const isM4V = function isM4V(fileChunk) {
  fileChunk = _mod7772.getFileChunk(fileChunk);
  const FileTypes = _mod7773.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4v") && _mod7772.isftypStringIncluded(fileChunk);
};
export const isMKV = function isMKV(fileChunk) {
  fileChunk = _mod7772.getFileChunk(fileChunk, 64);
  const FileTypes = _mod7773.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mkv") && "mkv" === _mod7772.findMatroskaDocTypeElements(fileChunk);
};
export const isMOV = function isMOV(fileChunk) {
  fileChunk = _mod7772.getFileChunk(fileChunk);
  const FileTypes = _mod7773.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mov");
};
export const isMP4 = function isMP4(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod7772.getFileChunk(fileChunk);
  const FileTypes = _mod7773.FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "mp4");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let tmp8 = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = _mod7772.getFileChunk(fileChunk);
      const FileTypes2 = _mod7773.FileTypes;
      tmp8 = FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod7772.isftypStringIncluded(fileChunk1);
      const tmp10 = FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod7772.isftypStringIncluded(fileChunk1);
    }
    checkByFileTypeResult = tmp8;
  }
  return checkByFileTypeResult;
};
export const isOGG = function isOGG(fileChunk) {
  fileChunk = _mod7772.getFileChunk(fileChunk);
  const FileTypes = _mod7773.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ogg");
};
export const isSWF = function isSWF(fileChunk) {
  fileChunk = _mod7772.getFileChunk(fileChunk);
  const FileTypes = _mod7773.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "swf");
};
export const isWEBM = function isWEBM(fileChunk) {
  fileChunk = _mod7772.getFileChunk(fileChunk, 64);
  const FileTypes = _mod7773.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webm") && "webm" === _mod7772.findMatroskaDocTypeElements(fileChunk);
};