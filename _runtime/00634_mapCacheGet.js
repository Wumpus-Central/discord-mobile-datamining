// _runtime/00634_mapCacheGet.js
import getMapData from "00632_getMapData.js";

export default function mapCacheGet(arg0) {
  const obj = getMapData(this, arg0);
  return obj.get(arg0);
}
