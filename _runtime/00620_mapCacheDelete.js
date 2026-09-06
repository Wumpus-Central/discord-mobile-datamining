// _runtime/00620_mapCacheDelete.js
import _mod621 from "metro/00621__.js";

export default function mapCacheDelete(arg0) {
  const deleteResult = _mod621(this, arg0).delete(arg0);
  let num = 0;
  if (deleteResult) {
    num = 1;
  }
  this.size = this.size - num;
  return deleteResult;
}
