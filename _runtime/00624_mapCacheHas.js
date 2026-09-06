// _runtime/00624_mapCacheHas.js
import getMapData from "00621_getMapData.js";

export default function mapCacheHas(arg0) {
  return getMapData(this, arg0).has(arg0);
}
