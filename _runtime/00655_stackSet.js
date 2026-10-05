// _runtime/00655_stackSet.js
import MapCache from "00607_MapCache.js";
import getNative from "00622_getNative.js";
import ListCache from "00623_ListCache.js";

export default function stackSet(arg0, arg1) {
  const self = this;
  const __data__ = this.__data__;
  let obj = __data__;
  if (__data__ instanceof ListCache) {
    if (getNative) {
      if (__data__.__data__.length >= 199) {
        const self2 = this;
        const self3 = this;
        const tmp4 = new MapCache(__data__.__data__);
        self.__data__ = tmp4;
        obj = tmp4;
      }
    }
    const items = [arg0, arg1];
    __data__.__data__.push(items);
    const sum = __data__.size + 1;
    __data__.size = sum;
    self.size = sum;
    return self;
  }
  const result = obj.set(arg0, arg1);
  self.size = obj.size;
  return self;
}
