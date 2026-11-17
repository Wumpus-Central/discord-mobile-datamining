// === Module 8927: ? ===

// Module 8927
import _mod8921 from "module_8921" /* 8921 */;
import _mod8922 from "module_8922" /* 8922 */;

require = arg1;
const dependencyMap = arg6;

export function isAVIF(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avif") && _mod8921.isAvifStringIncluded(fileChunk);
}
export function isBMP(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bmp");
}
export function isBPG(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bpg");
}
export function isCR2(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "cr2");
}
export function isEXR(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exr");
}
export function isGIF(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "gif");
}
export function isHEIC(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avif") && _mod8921.isHeicSignatureIncluded(fileChunk);
}
export function isICO(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ico");
}
export function isJPEG(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "jpeg");
}
export function isPBM(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pbm");
}
export function isPGM(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pgm");
}
export function isPNG(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "png");
}
export function isPPM(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ppm");
}
export function isPSD(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "psd");
}
export function isWEBP(fileChunk) {
  fileChunk = _mod8921.getFileChunk(fileChunk);
  const FileTypes = _mod8922.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webp");
}