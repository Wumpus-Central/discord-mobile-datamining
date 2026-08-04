// _runtime/04322_copySymbols.js

export default function copySymbols(arg0, arg1) {
  return require(4315) /* copyObject */(arg0, require(795) /* getOwnPropertySymbols */(arg0), arg1);
};