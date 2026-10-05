// === Module 634: mapCacheGet ===

// Module 634 (mapCacheGet)
import getMapData from "getMapData" /* 632 */;


export default function mapCacheGet(arg0) {
  const obj = getMapData(this, arg0);
  return obj.get(arg0);
};