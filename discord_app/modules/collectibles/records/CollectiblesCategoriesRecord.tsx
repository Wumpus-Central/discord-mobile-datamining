// === Module 7232: fromServer ===

// Module 7232 (fromServer)
import closure_0 from "fromServer" /* 7233 */;
import closure_1 from "fromServer" /* 7215 */;

let prototype;
prototype = function CollectiblesCategoriesRecord(categories) {
  const obj = Object.create(new.target.prototype);
  categories = categories.categories;
  obj.categories = categories.map((arg0) => closure_1.fromServer(arg0));
  const collections = categories.collections;
  obj.collections = collections.map((arg0) => closure_0.fromServer(arg0));
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(categories) {
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  categories = categories.categories;
  obj.categories = categories.map((arg0) => closure_1.fromServer(arg0));
  const collections = categories.collections;
  obj.collections = collections.map((arg0) => closure_0.fromServer(arg0));
  return obj;
};
const result = require("set").fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export const CollectiblesCategoriesRecord = prototype;