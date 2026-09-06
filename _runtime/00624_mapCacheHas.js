// === Module 624: mapCacheHas ===

// Module 624 (mapCacheHas)
import getMapData from "getMapData" /* 621 */;


export default function mapCacheHas(arg0) {
  return getMapData(this, arg0).has(arg0);
};