// === Module 620: mapCacheDelete ===

// Module 620 (mapCacheDelete)
import getMapData from "getMapData" /* 621 */;


export default function mapCacheDelete(arg0) {
  const deleteResult = getMapData(this, arg0).delete(arg0);
  let num = 0;
  if (deleteResult) {
    num = 1;
  }
  this.size = this.size - num;
  return deleteResult;
};