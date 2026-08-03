// === Module 4384: copySymbols ===

// Module 4384 (copySymbols)

export default function copySymbols(arg0, arg1) {
  return require(4377) /* copyObject */(arg0, require(795) /* getOwnPropertySymbols */(arg0), arg1);
};