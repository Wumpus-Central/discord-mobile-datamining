// _runtime/00754_listCacheHas.js

export default function listCacheHas(arg0) {
  return require("00751_assocIndexOf.js") /* assocIndexOf */(this.__data__, arg0) > -1;
};