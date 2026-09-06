// _runtime/00623_mapCacheGet.js
import getMapData from "00621_getMapData.js";

export default function mapCacheGet(arg0) {
  return getMapData(this, arg0).get(arg0);
}
