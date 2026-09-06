// === Module 644: stackSet ===

// Module 644 (stackSet)
import MapCache from "MapCache" /* 596 */;
import _mod611 from "module_611" /* 611 */;
import ListCache from "ListCache" /* 612 */;


export default function stackSet(arg0, arg1) {
  const self = this;
  let __data__ = this.__data__;
  let obj = __data__;
  if (__data__ instanceof ListCache) {
    __data__ = __data__.__data__;
    if (_mod611) {
      if (__data__.length >= 199) {
        const tmp6 = new MapCache(__data__);
        self.__data__ = tmp6;
        obj = tmp6;
      }
    }
    const items = [arg0, arg1];
    __data__.push(items);
    const sum = __data__.size + 1;
    __data__.size = sum;
    self.size = sum;
    return self;
  }
  const result = obj.set(arg0, arg1);
  self.size = obj.size;
  return self;
};