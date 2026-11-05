// === Module 8404: ? ===

// Module 8404
import _mod8396 from "module_8396" /* 8396 */;
import _mod8397 from "module_8397" /* 8397 */;

require = arg1;
const dependencyMap = arg6;

export function isAVI(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avi");
}
export function isFLV(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flv") && _mod8396.isFlvStringIncluded(fileChunk);
}
export function isM4V(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4v") && _mod8396.isftypStringIncluded(fileChunk);
}
export function isMKV(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk, 64);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mkv") && "mkv" === _mod8396.findMatroskaDocTypeElements(fileChunk);
}
export function isMOV(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mov");
}
export function isMP4(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "mp4");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let tmp8 = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = _mod8396.getFileChunk(fileChunk);
      const FileTypes2 = _mod8397.FileTypes;
      tmp8 = FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod8396.isftypStringIncluded(fileChunk1);
      const tmp10 = FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod8396.isftypStringIncluded(fileChunk1);
    }
    checkByFileTypeResult = tmp8;
  }
  return checkByFileTypeResult;
}
export function isOGG(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ogg");
}
export function isSWF(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "swf");
}
export function isWEBM(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk, 64);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webm") && "webm" === _mod8396.findMatroskaDocTypeElements(fileChunk);
}