// === Module 760: mapCacheHas ===

// Module 760 (mapCacheHas)
import getMapData from "getMapData" /* 757 */;


export default function mapCacheHas(arg0) {
  return getMapData(this, arg0).has(arg0);
};