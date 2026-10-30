// === Module 619: mapCacheDelete ===

// Module 619 (mapCacheDelete)
import _mod620 from "module_620" /* 620 */;


export default function mapCacheDelete(arg0) {
  const deleteResult = _mod620(this, arg0).delete(arg0);
  let num = 0;
  if (deleteResult) {
    num = 1;
  }
  this.size = this.size - num;
  return deleteResult;
};