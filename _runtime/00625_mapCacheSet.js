// _runtime/00625_mapCacheSet.js
import _mod621 from "metro/00621__.js";

export default function mapCacheSet(arg0, arg1) {
  const self = this;
  const obj = _mod621(this, arg0);
  const result = obj.set(arg0, arg1);
  let num = 1;
  if (obj.size == obj.size) {
    num = 0;
  }
  self.size = this.size + num;
  return self;
}
