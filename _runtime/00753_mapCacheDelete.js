// _runtime/00753_mapCacheDelete.js
import getMapData from "00754_getMapData.js";

export default function mapCacheDelete(arg0) {
  const deleteResult = getMapData(this, arg0).delete(arg0);
  let num = 0;
  if (deleteResult) {
    num = 1;
  }
  this.size = this.size - num;
  return deleteResult;
}
