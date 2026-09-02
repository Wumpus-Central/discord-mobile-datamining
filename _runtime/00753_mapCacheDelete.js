// === Module 753: mapCacheDelete ===

// Module 753 (mapCacheDelete)
import getMapData from "getMapData" /* 754 */;


export default function mapCacheDelete(arg0) {
  const deleteResult = getMapData(this, arg0).delete(arg0);
  let num = 0;
  if (deleteResult) {
    num = 1;
  }
  this.size = this.size - num;
  return deleteResult;
};