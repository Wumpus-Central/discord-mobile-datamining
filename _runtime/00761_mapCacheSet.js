// _runtime/00761_mapCacheSet.js
import getMapData from "00757_getMapData.js";

export default function mapCacheSet(arg0, arg1) {
  const self = this;
  const obj = getMapData(this, arg0);
  const result = obj.set(arg0, arg1);
  let num = 1;
  if (obj.size == obj.size) {
    num = 0;
  }
  self.size = this.size + num;
  return self;
}
