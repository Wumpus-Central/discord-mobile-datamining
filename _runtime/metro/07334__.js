// === Module 7334: ? ===

// Module 7334
import _mod7328 from "module_7328" /* 7328 */;
import _mod7329 from "module_7329" /* 7329 */;


export const isAVIF = function isAVIF(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "avif") && _mod7328.isAvifStringIncluded(fileChunk);
  return tmp4;
};
export const isBMP = function isBMP(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bmp");
};
export const isBPG = function isBPG(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bpg");
};
export const isCR2 = function isCR2(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "cr2");
};
export const isEXR = function isEXR(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exr");
};
export const isGIF = function isGIF(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "gif");
};
export const isHEIC = function isHEIC(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "avif") && _mod7328.isHeicSignatureIncluded(fileChunk);
  return tmp4;
};
export const isICO = function isICO(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ico");
};
export const isJPEG = function isJPEG(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "jpeg");
};
export const isPBM = function isPBM(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pbm");
};
export const isPGM = function isPGM(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pgm");
};
export const isPNG = function isPNG(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "png");
};
export const isPPM = function isPPM(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ppm");
};
export const isPSD = function isPSD(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "psd");
};
export const isWEBP = function isWEBP(fileChunk) {
  fileChunk = _mod7328.getFileChunk(fileChunk);
  const FileTypes = _mod7329.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webp");
};