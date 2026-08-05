import { getMapData } from "00757_getMapData.js";
// _runtime/00760_mapCacheHas.js

export default function mapCacheHas(arg0) {
  return getMapData /* getMapData */(this, arg0).has(arg0);
};