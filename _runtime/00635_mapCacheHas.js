// _runtime/00635_mapCacheHas.js
import getMapData from "00632_getMapData.js";

export default function mapCacheHas(arg0) {
  const obj = getMapData(this, arg0);
  return obj.has(arg0);
}
