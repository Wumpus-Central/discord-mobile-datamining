// _runtime/04972_isAVIF.js
import { getFileChunk } from "04966_getFileChunk.js";
import { 04967__ } from "metro/04967__.js";
const require = arg1;
const dependencyMap = arg6;
arg5.isAVIF = undefined;
arg5.isBMP = undefined;
arg5.isBPG = undefined;
arg5.isCR2 = undefined;
arg5.isEXR = undefined;
arg5.isGIF = undefined;
arg5.isHEIC = undefined;
arg5.isICO = undefined;
arg5.isJPEG = undefined;
arg5.isPBM = undefined;
arg5.isPGM = undefined;
arg5.isPNG = undefined;
arg5.isPPM = undefined;
arg5.isPSD = undefined;
arg5.isWEBP = undefined;
arg5.isAVIF = function isAVIF(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04967__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avif") && getFileChunk.isAvifStringIncluded(fileChunk);
};
arg5.isBMP = function isBMP(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04967__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bmp");
};
arg5.isBPG = function isBPG(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04967__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bpg");
};
arg5.isCR2 = function isCR2(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04967__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "cr2");
};
arg5.isEXR = function isEXR(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04967__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exr");
};
arg5.isGIF = function isGIF(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04967__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "gif");
};
arg5.isHEIC = function isHEIC(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04967__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avif") && getFileChunk.isHeicSignatureIncluded(fileChunk);
};
arg5.isICO = function isICO(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04967__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ico");
};
arg5.isJPEG = function isJPEG(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04967__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "jpeg");
};
arg5.isPBM = function isPBM(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04967__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pbm");
};
arg5.isPGM = function isPGM(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04967__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pgm");
};
arg5.isPNG = function isPNG(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04967__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "png");
};
arg5.isPPM = function isPPM(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04967__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ppm");
};
arg5.isPSD = function isPSD(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04967__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "psd");
};
arg5.isWEBP = function isWEBP(fileChunk) {
  fileChunk = getFileChunk.getFileChunk(fileChunk);
  const FileTypes = 04967__.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webp");
};