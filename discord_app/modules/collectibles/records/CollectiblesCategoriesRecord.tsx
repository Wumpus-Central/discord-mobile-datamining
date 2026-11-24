// === Module 6204: CollectiblesCategoriesRecord ===

// Module 6204 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 6205 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 6186 */;

const prototype = function CollectiblesCategoriesRecord(categories) {
  const obj = Object.create(new.target.prototype);
  categories = categories.categories;
  obj.categories = categories.map((item) => CollectiblesCategoryRecord.fromServer(item));
  const collections = categories.collections;
  obj.collections = collections.map((item) => StorefrontCollectionRecord.fromServer(item));
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(categories) {
  if (typeof prototype === "function") {
    const obj = Object.create(tmp.prototype);
    categories = categories.categories;
    obj.categories = categories.map((item) => CollectiblesCategoryRecord.fromServer(item));
    const collections = categories.collections;
    obj.collections = collections.map((item) => StorefrontCollectionRecord.fromServer(item));
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export const CollectiblesCategoriesRecord = prototype;