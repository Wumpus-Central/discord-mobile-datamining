// _runtime/metro/08929__.js
import _mod8921 from "08921__.js";
import _mod8922 from "08922__.js";

require = arg1;
const dependencyMap = arg6;

export function isAVI(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avi");
}
export function isFLV(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flv") && _mod8921.isFlvStringIncluded(fileChunk);
}
export function isM4V(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4v") && _mod8921.isftypStringIncluded(fileChunk);
}
export function isMKV(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk, 64);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mkv") && "mkv" === _mod8921.findMatroskaDocTypeElements(fileChunk);
}
export function isMOV(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mov");
}
export function isMP4(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "mp4");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let tmp8 = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = _mod8921.getFileChunk(fileChunk);
      const FileTypes2 = _mod8922.FileTypes;
      tmp8 = FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod8921.isftypStringIncluded(fileChunk1);
      const tmp10 = FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod8921.isftypStringIncluded(fileChunk1);
    }
    checkByFileTypeResult = tmp8;
  }
  return checkByFileTypeResult;
}
export function isOGG(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ogg");
}
export function isSWF(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "swf");
}
export function isWEBM(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk, 64);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webm") && "webm" === _mod8921.findMatroskaDocTypeElements(fileChunk);
}
