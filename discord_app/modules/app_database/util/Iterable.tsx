// === Module 7004: Iterable ===

// Module 7004 (Iterable)
import size from "module_2" /* 2 */;

class Chained {
  constructor(items) {
    const obj = Object.create(new.target.prototype);
    obj.index = 0;
    obj.items = items;
    return obj;
  }
  next() {
    const self = this;
    if (this.index < this.items.length) {
      const iter = self.items[self.index];
      const iter2 = iter.next();
      while (iter2.done) {
        self.index = self.index + 1;
      }
      return iter2;
    }
    return { done: true, value: "a" };
  }
}
Chained.prototype[Symbol.iterator] = function() {
  return this;
};
const result = size.fileFinishedImporting("modules/app_database/util/Iterable.tsx");

export const chain = function chain() {
  if (typeof Chained === "function") {
    const obj = Object.create(Chained.prototype);
    obj.index = 0;
    obj.items = tmp;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};