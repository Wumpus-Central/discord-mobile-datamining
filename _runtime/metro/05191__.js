// _runtime/metro/05191__.js
import _mod5185 from "05185__.js";
import _mod5186 from "05186__.js";

require = arg1;
const dependencyMap = arg6;

export const isAVIF = function isAVIF(fileChunk) {
  fileChunk = _mod5185.getFileChunk(fileChunk);
  const FileTypes = _mod5186.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avif") && _mod5185.isAvifStringIncluded(fileChunk);
};
export const isBMP = function isBMP(fileChunk) {
  fileChunk = _mod5185.getFileChunk(fileChunk);
  const FileTypes = _mod5186.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bmp");
};
export const isBPG = function isBPG(fileChunk) {
  fileChunk = _mod5185.getFileChunk(fileChunk);
  const FileTypes = _mod5186.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bpg");
};
export const isCR2 = function isCR2(fileChunk) {
  fileChunk = _mod5185.getFileChunk(fileChunk);
  const FileTypes = _mod5186.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "cr2");
};
export const isEXR = function isEXR(fileChunk) {
  fileChunk = _mod5185.getFileChunk(fileChunk);
  const FileTypes = _mod5186.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exr");
};
export const isGIF = function isGIF(fileChunk) {
  fileChunk = _mod5185.getFileChunk(fileChunk);
  const FileTypes = _mod5186.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "gif");
};
export const isHEIC = function isHEIC(fileChunk) {
  fileChunk = _mod5185.getFileChunk(fileChunk);
  const FileTypes = _mod5186.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avif") && _mod5185.isHeicSignatureIncluded(fileChunk);
};
export const isICO = function isICO(fileChunk) {
  fileChunk = _mod5185.getFileChunk(fileChunk);
  const FileTypes = _mod5186.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ico");
};
export const isJPEG = function isJPEG(fileChunk) {
  fileChunk = _mod5185.getFileChunk(fileChunk);
  const FileTypes = _mod5186.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "jpeg");
};
export const isPBM = function isPBM(fileChunk) {
  fileChunk = _mod5185.getFileChunk(fileChunk);
  const FileTypes = _mod5186.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pbm");
};
export const isPGM = function isPGM(fileChunk) {
  fileChunk = _mod5185.getFileChunk(fileChunk);
  const FileTypes = _mod5186.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pgm");
};
export const isPNG = function isPNG(fileChunk) {
  fileChunk = _mod5185.getFileChunk(fileChunk);
  const FileTypes = _mod5186.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "png");
};
export const isPPM = function isPPM(fileChunk) {
  fileChunk = _mod5185.getFileChunk(fileChunk);
  const FileTypes = _mod5186.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ppm");
};
export const isPSD = function isPSD(fileChunk) {
  fileChunk = _mod5185.getFileChunk(fileChunk);
  const FileTypes = _mod5186.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "psd");
};
export const isWEBP = function isWEBP(fileChunk) {
  fileChunk = _mod5185.getFileChunk(fileChunk);
  const FileTypes = _mod5186.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webp");
};
