// === Module 8402: ? ===

// Module 8402
import _mod8396 from "module_8396" /* 8396 */;
import _mod8397 from "module_8397" /* 8397 */;

require = arg1;
const dependencyMap = arg6;

export function isAVIF(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avif") && _mod8396.isAvifStringIncluded(fileChunk);
}
export function isBMP(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bmp");
}
export function isBPG(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bpg");
}
export function isCR2(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "cr2");
}
export function isEXR(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exr");
}
export function isGIF(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "gif");
}
export function isHEIC(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avif") && _mod8396.isHeicSignatureIncluded(fileChunk);
}
export function isICO(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ico");
}
export function isJPEG(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "jpeg");
}
export function isPBM(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pbm");
}
export function isPGM(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pgm");
}
export function isPNG(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "png");
}
export function isPPM(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ppm");
}
export function isPSD(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "psd");
}
export function isWEBP(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webp");
}