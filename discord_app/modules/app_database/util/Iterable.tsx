// discord_app/modules/app_database/util/Iterable.tsx
class Chained {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.index = 0;
    obj.items = global;
    return obj;
  }
}
const prototype = Chained.prototype;
// ToPropertyKey (0xa4)
prototype[prototype] = function() {
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
const result = require("set").fileFinishedImporting("modules/app_database/util/Iterable.tsx");

export const chain = function chain() {
  const items = [...arguments];
  if (typeof Chained !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(Chained.prototype);
  obj.index = 0;
  obj.items = items;
  return obj;
};