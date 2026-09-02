// _runtime/00757_mapCacheHas.js
import getMapData from "00754_getMapData.js";

export default function mapCacheHas(arg0) {
  return getMapData(this, arg0).has(arg0);
}
