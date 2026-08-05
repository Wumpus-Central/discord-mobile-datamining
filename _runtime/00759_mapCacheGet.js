// _runtime/00759_mapCacheGet.js

export default function mapCacheGet(arg0) {
  return require("00757_getMapData.js") /* getMapData */(this, arg0).get(arg0);
};