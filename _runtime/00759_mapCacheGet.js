// === Module 759: mapCacheGet ===

// Module 759 (mapCacheGet)
import getMapData from "getMapData" /* 757 */;


export default function mapCacheGet(arg0) {
  return getMapData(this, arg0).get(arg0);
};