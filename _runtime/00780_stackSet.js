// === Module 780: stackSet ===

// Module 780 (stackSet)
import MapCache from "MapCache" /* 732 */;
import getNative from "getNative" /* 747 */;
import ListCache from "ListCache" /* 748 */;


export default function stackSet(arg0, arg1) {
  const self = this;
  let __data__ = this.__data__;
  let obj = __data__;
  if (__data__ instanceof ListCache) {
    __data__ = __data__.__data__;
    if (getNative) {
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