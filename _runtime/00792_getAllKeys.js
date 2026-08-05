// _runtime/00792_getAllKeys.js

export default function getAllKeys(arg0) {
  const tmp = require("00793_baseGetAllKeys.js") /* baseGetAllKeys */;
  return tmp(arg0, require("00616_keys.js") /* keys */, require("00795_getOwnPropertySymbols.js") /* getOwnPropertySymbols */);
};