// === Module 8191: ? ===

// Module 8191
import _mod8184 from "module_8184" /* 8184 */;
import _mod8185 from "module_8185" /* 8185 */;

require = arg1;
const dependencyMap = arg6;

export const isBLEND = function isBLEND(fileChunk) {
  fileChunk = _mod8184.getFileChunk(fileChunk);
  const FileTypes = _mod8185.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "blend");
};
export const isELF = function isELF(fileChunk) {
  fileChunk = _mod8184.getFileChunk(fileChunk);
  const FileTypes = _mod8185.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "elf");
};
export const isEXE = function isEXE(fileChunk) {
  fileChunk = _mod8184.getFileChunk(fileChunk);
  const FileTypes = _mod8185.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exe");
};
export const isMACHO = function isMACHO(fileChunk) {
  fileChunk = _mod8184.getFileChunk(fileChunk);
  const FileTypes = _mod8185.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "macho");
};
export const isINDD = function isINDD(fileChunk) {
  fileChunk = _mod8184.getFileChunk(fileChunk);
  const FileTypes = _mod8185.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "indd");
};
export const isORC = function isORC(fileChunk) {
  fileChunk = _mod8184.getFileChunk(fileChunk);
  const FileTypes = _mod8185.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "orc");
};
export const isPARQUET = function isPARQUET(fileChunk) {
  fileChunk = _mod8184.getFileChunk(fileChunk);
  const FileTypes = _mod8185.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "parquet");
};
export const isPDF = function isPDF(fileChunk) {
  fileChunk = _mod8184.getFileChunk(fileChunk);
  const FileTypes = _mod8185.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pdf");
};
export const isPS = function isPS(fileChunk) {
  fileChunk = _mod8184.getFileChunk(fileChunk);
  const FileTypes = _mod8185.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ps");
};
export const isRTF = function isRTF(fileChunk) {
  fileChunk = _mod8184.getFileChunk(fileChunk);
  const FileTypes = _mod8185.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rtf");
};
export const isSQLITE = function isSQLITE(fileChunk) {
  fileChunk = _mod8184.getFileChunk(fileChunk);
  const FileTypes = _mod8185.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "sqlite");
};
export const isSTL = function isSTL(fileChunk) {
  fileChunk = _mod8184.getFileChunk(fileChunk);
  const FileTypes = _mod8185.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "stl");
};
export const isTTF = function isTTF(fileChunk) {
  fileChunk = _mod8184.getFileChunk(fileChunk);
  const FileTypes = _mod8185.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ttf");
};
export const isDOC = function isDOC(fileChunk) {
  fileChunk = _mod8184.getFileChunk(fileChunk);
  const FileTypes = _mod8185.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "doc");
};
export const isPCAP = function isPCAP(fileChunk) {
  fileChunk = _mod8184.getFileChunk(fileChunk);
  const FileTypes = _mod8185.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pcap");
};