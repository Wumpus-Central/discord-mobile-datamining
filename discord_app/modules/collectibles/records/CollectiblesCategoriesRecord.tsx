// discord_app/modules/collectibles/records/CollectiblesCategoriesRecord.tsx
import StorefrontCollectionRecord from "../../storefront/records/StorefrontCollectionRecord.tsx";
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const f94181 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f94182 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f94181);
    const collections = categories.collections;
    obj.collections = collections.map(f94182);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f94181);
      const collections = categories.collections;
      obj.collections = collections.map(f94182);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
