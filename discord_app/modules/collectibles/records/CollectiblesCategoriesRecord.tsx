// === Module 5326: fromServer ===

// Module 5326 (fromServer)
import fromServer from "fromServer" /* 5327 */;
import fromServer2 from "fromServer" /* 5302 */;

const prototype = function CollectiblesCategoriesRecord(categories) {
  const obj = Object.create(new.target.prototype);
  categories = categories.categories;
  obj.categories = categories.map((item, index) => closure_1.fromServer(item));
  const collections = categories.collections;
  obj.collections = collections.map((item, index) => closure_0.fromServer(item));
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(categories) {
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  categories = categories.categories;
  obj.categories = categories.map((item, index) => closure_1.fromServer(item));
  const collections = categories.collections;
  obj.collections = collections.map((item, index) => closure_0.fromServer(item));
  return obj;
};
const result = require("obj132").fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export const CollectiblesCategoriesRecord = prototype;