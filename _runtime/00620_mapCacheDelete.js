// === Module 620: mapCacheDelete ===

// Module 620 (mapCacheDelete)
import _mod621 from "module_621" /* 621 */;


export default function mapCacheDelete(arg0) {
  const deleteResult = _mod621(this, arg0).delete(arg0);
  let num = 0;
  if (deleteResult) {
    num = 1;
  }
  this.size = this.size - num;
  return deleteResult;
};