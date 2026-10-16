// _runtime/metro/08028__.js
import _mod8020 from "08020__.js";
import _mod8021 from "08021__.js";

require = arg1;
const dependencyMap = arg6;

export const isAVI = function isAVI(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk);
  const FileTypes = _mod8021.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avi");
};
export const isFLV = function isFLV(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk);
  const FileTypes = _mod8021.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flv") && _mod8020.isFlvStringIncluded(fileChunk);
};
export const isM4V = function isM4V(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk);
  const FileTypes = _mod8021.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4v") && _mod8020.isftypStringIncluded(fileChunk);
};
export const isMKV = function isMKV(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk, 64);
  const FileTypes = _mod8021.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mkv") && "mkv" === _mod8020.findMatroskaDocTypeElements(fileChunk);
};
export const isMOV = function isMOV(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk);
  const FileTypes = _mod8021.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mov");
};
export const isMP4 = function isMP4(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8020.getFileChunk(fileChunk);
  const FileTypes = _mod8021.FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "mp4");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let tmp8 = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = _mod8020.getFileChunk(fileChunk);
      const FileTypes2 = _mod8021.FileTypes;
      tmp8 = FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod8020.isftypStringIncluded(fileChunk1);
      const tmp10 = FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod8020.isftypStringIncluded(fileChunk1);
    }
    checkByFileTypeResult = tmp8;
  }
  return checkByFileTypeResult;
};
export const isOGG = function isOGG(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk);
  const FileTypes = _mod8021.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ogg");
};
export const isSWF = function isSWF(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk);
  const FileTypes = _mod8021.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "swf");
};
export const isWEBM = function isWEBM(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk, 64);
  const FileTypes = _mod8021.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webm") && "webm" === _mod8020.findMatroskaDocTypeElements(fileChunk);
};
