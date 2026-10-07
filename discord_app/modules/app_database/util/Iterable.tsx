// discord_app/modules/app_database/util/Iterable.tsx
import size from "../../../../_runtime/metro/00002__.js";

class Chained {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.index = 0;
    obj.items = global;
    return obj;
  }
}
const prototype = Chained.prototype;
prototype[Symbol.iterator] = function () {
  return this;
};
prototype["next"] = function next() {
  const self = this;
  if (this.index < this.items.length) {
    const iter2 = self.items[self.index].next();
    while (iter2.done) {
      self.index = self.index + 1;
    }
    return iter2;
  }
  return { done: true, value: "a" };
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
