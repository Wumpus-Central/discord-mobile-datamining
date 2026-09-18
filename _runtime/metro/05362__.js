// _runtime/metro/05362__.js
import _mod5355 from "05355__.js";
import _mod5356 from "05356__.js";

require = arg1;
const dependencyMap = arg6;

export const isBLEND = function isBLEND(fileChunk) {
  fileChunk = _mod5355.getFileChunk(fileChunk);
  const FileTypes = _mod5356.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "blend");
};
export const isELF = function isELF(fileChunk) {
  fileChunk = _mod5355.getFileChunk(fileChunk);
  const FileTypes = _mod5356.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "elf");
};
export const isEXE = function isEXE(fileChunk) {
  fileChunk = _mod5355.getFileChunk(fileChunk);
  const FileTypes = _mod5356.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exe");
};
export const isMACHO = function isMACHO(fileChunk) {
  fileChunk = _mod5355.getFileChunk(fileChunk);
  const FileTypes = _mod5356.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "macho");
};
export const isINDD = function isINDD(fileChunk) {
  fileChunk = _mod5355.getFileChunk(fileChunk);
  const FileTypes = _mod5356.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "indd");
};
export const isORC = function isORC(fileChunk) {
  fileChunk = _mod5355.getFileChunk(fileChunk);
  const FileTypes = _mod5356.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "orc");
};
export const isPARQUET = function isPARQUET(fileChunk) {
  fileChunk = _mod5355.getFileChunk(fileChunk);
  const FileTypes = _mod5356.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "parquet");
};
export const isPDF = function isPDF(fileChunk) {
  fileChunk = _mod5355.getFileChunk(fileChunk);
  const FileTypes = _mod5356.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pdf");
};
export const isPS = function isPS(fileChunk) {
  fileChunk = _mod5355.getFileChunk(fileChunk);
  const FileTypes = _mod5356.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ps");
};
export const isRTF = function isRTF(fileChunk) {
  fileChunk = _mod5355.getFileChunk(fileChunk);
  const FileTypes = _mod5356.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rtf");
};
export const isSQLITE = function isSQLITE(fileChunk) {
  fileChunk = _mod5355.getFileChunk(fileChunk);
  const FileTypes = _mod5356.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "sqlite");
};
export const isSTL = function isSTL(fileChunk) {
  fileChunk = _mod5355.getFileChunk(fileChunk);
  const FileTypes = _mod5356.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "stl");
};
export const isTTF = function isTTF(fileChunk) {
  fileChunk = _mod5355.getFileChunk(fileChunk);
  const FileTypes = _mod5356.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ttf");
};
export const isDOC = function isDOC(fileChunk) {
  fileChunk = _mod5355.getFileChunk(fileChunk);
  const FileTypes = _mod5356.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "doc");
};
export const isPCAP = function isPCAP(fileChunk) {
  fileChunk = _mod5355.getFileChunk(fileChunk);
  const FileTypes = _mod5356.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pcap");
};
