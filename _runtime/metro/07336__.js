// _runtime/metro/07336__.js
import _mod7328 from "07328__.js";
import _mod7329 from "07329__.js";

export const isAVI = function isAVI(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avi");
};
export const isFLV = function isFLV(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "flv") && _mod7328.isFlvStringIncluded(fileChunk);
  return tmp4;
};
export const isM4V = function isM4V(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "m4v") && _mod7328.isftypStringIncluded(fileChunk);
  return tmp4;
};
export const isMKV = function isMKV(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk, 64);
  const FileTypes = _mod7329.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "mkv") && "mkv" === _mod7328.findMatroskaDocTypeElements(fileChunk);
  return tmp4;
};
export const isMOV = function isMOV(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mov");
};
export const isMP4 = function isMP4(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "mp4");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let tmp8 = !excludeSimilarTypes;
    if (tmp8) {
      const fileChunk1 = _mod7328.getFileChunk(fileChunk);
      const FileTypes2 = _mod7329.FileTypes;
      tmp8 = FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod7328.isftypStringIncluded(fileChunk1);
      FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod7328.isftypStringIncluded(fileChunk1);
    }
    checkByFileTypeResult = tmp8;
  }
  return checkByFileTypeResult;
};
export const isOGG = function isOGG(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ogg");
};
export const isSWF = function isSWF(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "swf");
};
export const isWEBM = function isWEBM(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk, 64);
  const FileTypes = _mod7329.FileTypes;
  const tmp4 =
    FileTypes.checkByFileType(fileChunk, "webm") && "webm" === _mod7328.findMatroskaDocTypeElements(fileChunk);
  return tmp4;
};
