// _runtime/00636_mapCacheSet.js
import _mod632 from "metro/00632__.js";

export default function mapCacheSet(arg0, arg1) {
  const self = this;
  const obj = _mod632(this, arg0);
  const result = obj.set(arg0, arg1);
  let num = 1;
  if (obj.size == obj.size) {
    num = 0;
  }
  self.size = this.size + num;
  return self;
}
