// === Module 7083: CollectiblesCategoriesRecord ===

// Module 7083 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7084 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7067 */;
import size from "module_2" /* 2 */;

const f94321 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f94322 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f94321);
    const collections = categories.collections;
    obj.collections = collections.map(f94322);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f94321);
      const collections = categories.collections;
      obj.collections = collections.map(f94322);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };