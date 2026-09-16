// _runtime/metro/05279__.js
import _mod5271 from "05271__.js";
import _mod5272 from "05272__.js";

require = arg1;
const dependencyMap = arg6;

export const isAVI = function isAVI(fileChunk) {
  fileChunk = _mod5271.getFileChunk(fileChunk);
  const FileTypes = _mod5272.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avi");
};
export const isFLV = function isFLV(fileChunk) {
  fileChunk = _mod5271.getFileChunk(fileChunk);
  const FileTypes = _mod5272.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flv") && _mod5271.isFlvStringIncluded(fileChunk);
};
export const isM4V = function isM4V(fileChunk) {
  fileChunk = _mod5271.getFileChunk(fileChunk);
  const FileTypes = _mod5272.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4v") && _mod5271.isftypStringIncluded(fileChunk);
};
export const isMKV = function isMKV(fileChunk) {
  fileChunk = _mod5271.getFileChunk(fileChunk, 64);
  const FileTypes = _mod5272.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mkv") && "mkv" === _mod5271.findMatroskaDocTypeElements(fileChunk);
};
export const isMOV = function isMOV(fileChunk) {
  fileChunk = _mod5271.getFileChunk(fileChunk);
  const FileTypes = _mod5272.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mov");
};
export const isMP4 = function isMP4(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod5271.getFileChunk(fileChunk);
  const FileTypes = _mod5272.FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "mp4");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let tmp8 = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = _mod5271.getFileChunk(fileChunk);
      const FileTypes2 = _mod5272.FileTypes;
      tmp8 = FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod5271.isftypStringIncluded(fileChunk1);
      const tmp10 = FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod5271.isftypStringIncluded(fileChunk1);
    }
    checkByFileTypeResult = tmp8;
  }
  return checkByFileTypeResult;
};
export const isOGG = function isOGG(fileChunk) {
  fileChunk = _mod5271.getFileChunk(fileChunk);
  const FileTypes = _mod5272.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ogg");
};
export const isSWF = function isSWF(fileChunk) {
  fileChunk = _mod5271.getFileChunk(fileChunk);
  const FileTypes = _mod5272.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "swf");
};
export const isWEBM = function isWEBM(fileChunk) {
  fileChunk = _mod5271.getFileChunk(fileChunk, 64);
  const FileTypes = _mod5272.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webm") && "webm" === _mod5271.findMatroskaDocTypeElements(fileChunk);
};
