// _runtime/00655_stackSet.js
import MapCache from "00607_MapCache.js";
import _mod622 from "metro/00622__.js";
import ListCache from "00623_ListCache.js";

export default function stackSet(arg0, arg1) {
  const self = this;
  const __data__ = this.__data__;
  let obj = __data__;
  if (__data__ instanceof ListCache) {
    const __data__1 = __data__.__data__;
    if (_mod622) {
      if (__data__1.length >= 199) {
        const tmp6 = new MapCache(__data__1);
        self.__data__ = tmp6;
        obj = tmp6;
      }
    }
    const items = [arg0, arg1];
    __data__1.push(items);
    const sum = __data__.size + 1;
    __data__.size = sum;
    self.size = sum;
    return self;
  }
  const result = obj.set(arg0, arg1);
  self.size = obj.size;
  return self;
}
