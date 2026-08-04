// _runtime/00792_getAllKeys.js

export default function getAllKeys(arg0) {
  const tmp = require(793) /* baseGetAllKeys */;
  return tmp(arg0, require(616) /* keys */, require(795) /* getOwnPropertySymbols */);
};