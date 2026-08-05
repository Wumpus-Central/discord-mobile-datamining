// _runtime/00759_mapCacheGet.js
import { getMapData } from "00757_getMapData.js";

export default function mapCacheGet(arg0) {
  return getMapData /* getMapData */(this, arg0).get(arg0);
};