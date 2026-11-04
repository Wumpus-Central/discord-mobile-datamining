// _runtime/metro/08397__.js
import _mod8391 from "08391__.js";
import _mod8392 from "08392__.js";

require = arg1;
const dependencyMap = arg6;

export function isAVIF(fileChunk) {
  fileChunk = _mod8391.getFileChunk(fileChunk);
  const FileTypes = _mod8392.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avif") && _mod8391.isAvifStringIncluded(fileChunk);
}
export function isBMP(fileChunk) {
  fileChunk = _mod8391.getFileChunk(fileChunk);
  const FileTypes = _mod8392.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bmp");
}
export function isBPG(fileChunk) {
  fileChunk = _mod8391.getFileChunk(fileChunk);
  const FileTypes = _mod8392.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bpg");
}
export function isCR2(fileChunk) {
  fileChunk = _mod8391.getFileChunk(fileChunk);
  const FileTypes = _mod8392.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "cr2");
}
export function isEXR(fileChunk) {
  fileChunk = _mod8391.getFileChunk(fileChunk);
  const FileTypes = _mod8392.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exr");
}
export function isGIF(fileChunk) {
  fileChunk = _mod8391.getFileChunk(fileChunk);
  const FileTypes = _mod8392.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "gif");
}
export function isHEIC(fileChunk) {
  fileChunk = _mod8391.getFileChunk(fileChunk);
  const FileTypes = _mod8392.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avif") && _mod8391.isHeicSignatureIncluded(fileChunk);
}
export function isICO(fileChunk) {
  fileChunk = _mod8391.getFileChunk(fileChunk);
  const FileTypes = _mod8392.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ico");
}
export function isJPEG(fileChunk) {
  fileChunk = _mod8391.getFileChunk(fileChunk);
  const FileTypes = _mod8392.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "jpeg");
}
export function isPBM(fileChunk) {
  fileChunk = _mod8391.getFileChunk(fileChunk);
  const FileTypes = _mod8392.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pbm");
}
export function isPGM(fileChunk) {
  fileChunk = _mod8391.getFileChunk(fileChunk);
  const FileTypes = _mod8392.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pgm");
}
export function isPNG(fileChunk) {
  fileChunk = _mod8391.getFileChunk(fileChunk);
  const FileTypes = _mod8392.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "png");
}
export function isPPM(fileChunk) {
  fileChunk = _mod8391.getFileChunk(fileChunk);
  const FileTypes = _mod8392.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ppm");
}
export function isPSD(fileChunk) {
  fileChunk = _mod8391.getFileChunk(fileChunk);
  const FileTypes = _mod8392.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "psd");
}
export function isWEBP(fileChunk) {
  fileChunk = _mod8391.getFileChunk(fileChunk);
  const FileTypes = _mod8392.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webp");
}
