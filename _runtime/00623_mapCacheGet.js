// === Module 623: mapCacheGet ===

// Module 623 (mapCacheGet)
import getMapData from "getMapData" /* 621 */;


export default function mapCacheGet(arg0) {
  return getMapData(this, arg0).get(arg0);
};