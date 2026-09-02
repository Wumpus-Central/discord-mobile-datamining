// _runtime/00756_mapCacheGet.js
import getMapData from "00754_getMapData.js";

export default function mapCacheGet(arg0) {
  return getMapData(this, arg0).get(arg0);
}
