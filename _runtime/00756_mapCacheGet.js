// === Module 756: mapCacheGet ===

// Module 756 (mapCacheGet)
import getMapData from "getMapData" /* 754 */;


export default function mapCacheGet(arg0) {
  return getMapData(this, arg0).get(arg0);
};