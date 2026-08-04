// _runtime/04785_isBLEND.js
const require = arg1;
const dependencyMap = arg6;
arg5.isBLEND = undefined;
arg5.isELF = undefined;
arg5.isEXE = undefined;
arg5.isMACHO = undefined;
arg5.isINDD = undefined;
arg5.isORC = undefined;
arg5.isPARQUET = undefined;
arg5.isPDF = undefined;
arg5.isPS = undefined;
arg5.isRTF = undefined;
arg5.isSQLITE = undefined;
arg5.isSTL = undefined;
arg5.isTTF = undefined;
arg5.isDOC = undefined;
arg5.isPCAP = undefined;
arg5.isBLEND = function isBLEND(fileChunk) {
  fileChunk = require(4778) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4779).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "blend");
};
arg5.isELF = function isELF(fileChunk) {
  fileChunk = require(4778) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4779).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "elf");
};
arg5.isEXE = function isEXE(fileChunk) {
  fileChunk = require(4778) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4779).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exe");
};
arg5.isMACHO = function isMACHO(fileChunk) {
  fileChunk = require(4778) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4779).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "macho");
};
arg5.isINDD = function isINDD(fileChunk) {
  fileChunk = require(4778) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4779).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "indd");
};
arg5.isORC = function isORC(fileChunk) {
  fileChunk = require(4778) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4779).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "orc");
};
arg5.isPARQUET = function isPARQUET(fileChunk) {
  fileChunk = require(4778) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4779).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "parquet");
};
arg5.isPDF = function isPDF(fileChunk) {
  fileChunk = require(4778) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4779).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pdf");
};
arg5.isPS = function isPS(fileChunk) {
  fileChunk = require(4778) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4779).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ps");
};
arg5.isRTF = function isRTF(fileChunk) {
  fileChunk = require(4778) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4779).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rtf");
};
arg5.isSQLITE = function isSQLITE(fileChunk) {
  fileChunk = require(4778) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4779).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "sqlite");
};
arg5.isSTL = function isSTL(fileChunk) {
  fileChunk = require(4778) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4779).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "stl");
};
arg5.isTTF = function isTTF(fileChunk) {
  fileChunk = require(4778) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4779).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ttf");
};
arg5.isDOC = function isDOC(fileChunk) {
  fileChunk = require(4778) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4779).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "doc");
};
arg5.isPCAP = function isPCAP(fileChunk) {
  fileChunk = require(4778) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4779).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pcap");
};