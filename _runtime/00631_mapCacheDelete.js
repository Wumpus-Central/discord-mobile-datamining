// _runtime/00631_mapCacheDelete.js
import _mod632 from "metro/00632__.js";

export default function mapCacheDelete(arg0) {
  const deleteResult = _mod632(this, arg0).delete(arg0);
  let num = 0;
  if (deleteResult) {
    num = 1;
  }
  this.size = this.size - num;
  return deleteResult;
}
