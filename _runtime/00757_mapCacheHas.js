// === Module 757: mapCacheHas ===

// Module 757 (mapCacheHas)
import getMapData from "getMapData" /* 754 */;


export default function mapCacheHas(arg0) {
  return getMapData(this, arg0).has(arg0);
};