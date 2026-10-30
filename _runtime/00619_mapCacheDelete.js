// _runtime/00619_mapCacheDelete.js
import _mod620 from "metro/00620__.js";

export default function mapCacheDelete(arg0) {
  const deleteResult = _mod620(this, arg0).delete(arg0);
  let num = 0;
  if (deleteResult) {
    num = 1;
  }
  this.size = this.size - num;
  return deleteResult;
}
