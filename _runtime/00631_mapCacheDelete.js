// === Module 631: mapCacheDelete ===

// Module 631 (mapCacheDelete)
import _mod632 from "module_632" /* 632 */;


export default function mapCacheDelete(arg0) {
  const deleteResult = _mod632(this, arg0).delete(arg0);
  let num = 0;
  if (deleteResult) {
    num = 1;
  }
  this.size = this.size - num;
  return deleteResult;
};