// _runtime/00759_mapCacheGet.js
import getMapData from "getMapData" /* 757 */;


export default function mapCacheGet(arg0) {
  return getMapData(this, arg0).get(arg0);
};