// _runtime/04413_copySymbols.js

export default function copySymbols(arg0, arg1) {
  return require("04406_copyObject.js") /* copyObject */(arg0, require("00795_getOwnPropertySymbols.js") /* getOwnPropertySymbols */(arg0), arg1);
};