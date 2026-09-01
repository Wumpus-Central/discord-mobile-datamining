// _runtime/00760_mapCacheHas.js
import getMapData from "00757_getMapData.js";

export default function mapCacheHas(arg0) {
  return getMapData(this, arg0).has(arg0);
}
