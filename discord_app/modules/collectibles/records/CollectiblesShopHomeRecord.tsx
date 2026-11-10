// === Module 7826: CollectiblesShopHomeRecord ===

// Module 7826 (CollectiblesShopHomeRecord)
import ShopBlockType from "ShopBlockType" /* 5815 */;
import ShopBlockRecordFactory from "ShopBlockRecordFactory" /* 7828 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7800 */;

require = fn;
const HeroBlockRecord = fn(7827).HeroBlockRecord;
const prototype = function CollectiblesShopHomeRecord(shop_blocks) {
  const obj = Object.create(new.target.prototype);
  shop_blocks = shop_blocks.shop_blocks;
  const mapped = shop_blocks.map((type) => {
    if (type.type === ShopBlockType.ShopBlockType.HERO) {
      let fromServerResult = HeroBlockRecord.fromServer(type);
    } else {
      fromServerResult = ShopBlockRecordFactory.parseNonHeroShopBlock(type);
      const tmpResult = ShopBlockRecordFactory;
    }
    return fromServerResult;
  });
  obj.shopBlocks = mapped.filter((item) => undefined !== item);
  const categories = shop_blocks.categories;
  obj.categories = categories.map((item) => CollectiblesCategoryRecord.fromServer(item));
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(shop_blocks) {
  if (typeof prototype === "function") {
    const obj = Object.create(tmp.prototype);
    shop_blocks = shop_blocks.shop_blocks;
    const mapped = shop_blocks.map((type) => {
      if (type.type === ShopBlockType.ShopBlockType.HERO) {
        let fromServerResult = HeroBlockRecord.fromServer(type);
      } else {
        fromServerResult = ShopBlockRecordFactory.parseNonHeroShopBlock(type);
        const tmpResult = ShopBlockRecordFactory;
      }
      return fromServerResult;
    });
    obj.shopBlocks = mapped.filter((item) => undefined !== item);
    const categories = shop_blocks.categories;
    obj.categories = categories.map((item) => CollectiblesCategoryRecord.fromServer(item));
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export const CollectiblesShopHomeRecord = prototype;