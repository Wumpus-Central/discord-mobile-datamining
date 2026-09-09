// === Module 5205: ? ===

// Module 5205
import _mod5199 from "module_5199" /* 5199 */;
import _mod5200 from "module_5200" /* 5200 */;

require = arg1;
const dependencyMap = arg6;

export const isAVIF = function isAVIF(fileChunk) {
  fileChunk = _mod5199.getFileChunk(fileChunk);
  const FileTypes = _mod5200.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avif") && _mod5199.isAvifStringIncluded(fileChunk);
};
export const isBMP = function isBMP(fileChunk) {
  fileChunk = _mod5199.getFileChunk(fileChunk);
  const FileTypes = _mod5200.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bmp");
};
export const isBPG = function isBPG(fileChunk) {
  fileChunk = _mod5199.getFileChunk(fileChunk);
  const FileTypes = _mod5200.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bpg");
};
export const isCR2 = function isCR2(fileChunk) {
  fileChunk = _mod5199.getFileChunk(fileChunk);
  const FileTypes = _mod5200.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "cr2");
};
export const isEXR = function isEXR(fileChunk) {
  fileChunk = _mod5199.getFileChunk(fileChunk);
  const FileTypes = _mod5200.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exr");
};
export const isGIF = function isGIF(fileChunk) {
  fileChunk = _mod5199.getFileChunk(fileChunk);
  const FileTypes = _mod5200.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "gif");
};
export const isHEIC = function isHEIC(fileChunk) {
  fileChunk = _mod5199.getFileChunk(fileChunk);
  const FileTypes = _mod5200.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avif") && _mod5199.isHeicSignatureIncluded(fileChunk);
};
export const isICO = function isICO(fileChunk) {
  fileChunk = _mod5199.getFileChunk(fileChunk);
  const FileTypes = _mod5200.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ico");
};
export const isJPEG = function isJPEG(fileChunk) {
  fileChunk = _mod5199.getFileChunk(fileChunk);
  const FileTypes = _mod5200.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "jpeg");
};
export const isPBM = function isPBM(fileChunk) {
  fileChunk = _mod5199.getFileChunk(fileChunk);
  const FileTypes = _mod5200.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pbm");
};
export const isPGM = function isPGM(fileChunk) {
  fileChunk = _mod5199.getFileChunk(fileChunk);
  const FileTypes = _mod5200.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pgm");
};
export const isPNG = function isPNG(fileChunk) {
  fileChunk = _mod5199.getFileChunk(fileChunk);
  const FileTypes = _mod5200.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "png");
};
export const isPPM = function isPPM(fileChunk) {
  fileChunk = _mod5199.getFileChunk(fileChunk);
  const FileTypes = _mod5200.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ppm");
};
export const isPSD = function isPSD(fileChunk) {
  fileChunk = _mod5199.getFileChunk(fileChunk);
  const FileTypes = _mod5200.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "psd");
};
export const isWEBP = function isWEBP(fileChunk) {
  fileChunk = _mod5199.getFileChunk(fileChunk);
  const FileTypes = _mod5200.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webp");
};