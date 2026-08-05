// _runtime/00760_mapCacheHas.js

export default function mapCacheHas(arg0) {
  return require("00757_getMapData.js") /* getMapData */(this, arg0).has(arg0);
};