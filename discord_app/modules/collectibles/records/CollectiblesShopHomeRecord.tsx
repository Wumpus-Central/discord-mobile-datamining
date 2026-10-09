// === Module 7285: CollectiblesShopHomeRecord ===

// Module 7285 (CollectiblesShopHomeRecord)
import ShopBlockType from "ShopBlockType" /* 7287 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7258 */;

require = fn;
const CountdownTimerBlockRecord = fn(7286).CountdownTimerBlockRecord;
const FeaturedBlockRecord = fn(7288).FeaturedBlockRecord;
const FeedBlockRecord = fn(7291).FeedBlockRecord;
let closure_6 = fn(7292).GameServerHostingBannerBlockRecord;
const HeroBlockRecord = fn(7293).HeroBlockRecord;
let closure_8 = fn(7294).ImmersiveBannerBlockRecord;
const ShelfBlockRecord = fn(7295).ShelfBlockRecord;
let closure_10 = fn(7296).SocialLayerStorefrontPromotionalBannerBlockRecord;
const WideBannerBlockRecord = fn(7297).WideBannerBlockRecord;
const prototype = function CollectiblesShopHomeRecord(shop_blocks) {
  const obj = Object.create(new.target.prototype);
  shop_blocks = shop_blocks.shop_blocks;
  const mapped = shop_blocks.map((type) => {
    type = type.type;
    if (ShopBlockType.ShopBlockType.HERO === type) {
      return HeroBlockRecord.fromServer(type);
    } else if (ShopBlockType.ShopBlockType.FEATURED === type) {
      return FeaturedBlockRecord.fromServer(type);
    } else if (ShopBlockType.ShopBlockType.FEED === type) {
      return FeedBlockRecord.fromServer(type);
    } else if (ShopBlockType.ShopBlockType.WIDE_BANNER === type) {
      return WideBannerBlockRecord.fromServer(type);
    } else if (ShopBlockType.ShopBlockType.SHELF === type) {
      return ShelfBlockRecord.fromServer(type);
    } else if (ShopBlockType.ShopBlockType.COUNTDOWN_TIMER === type) {
      return CountdownTimerBlockRecord.fromServer(type);
    } else if (ShopBlockType.ShopBlockType.IMMERSIVE_BANNER === type) {
      return closure_1_8.fromServer(type);
    } else if (ShopBlockType.ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER === type) {
      return closure_1_10.fromServer(type);
    } else if (ShopBlockType.ShopBlockType.GAME_SERVER_HOSTING_BANNER === type) {
      return closure_1_6.fromServer(type);
    }
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
      type = type.type;
      if (ShopBlockType.ShopBlockType.HERO === type) {
        return HeroBlockRecord.fromServer(type);
      } else if (ShopBlockType.ShopBlockType.FEATURED === type) {
        return FeaturedBlockRecord.fromServer(type);
      } else if (ShopBlockType.ShopBlockType.FEED === type) {
        return FeedBlockRecord.fromServer(type);
      } else if (ShopBlockType.ShopBlockType.WIDE_BANNER === type) {
        return WideBannerBlockRecord.fromServer(type);
      } else if (ShopBlockType.ShopBlockType.SHELF === type) {
        return ShelfBlockRecord.fromServer(type);
      } else if (ShopBlockType.ShopBlockType.COUNTDOWN_TIMER === type) {
        return CountdownTimerBlockRecord.fromServer(type);
      } else if (ShopBlockType.ShopBlockType.IMMERSIVE_BANNER === type) {
        return closure_1_8.fromServer(type);
      } else if (ShopBlockType.ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER === type) {
        return closure_1_10.fromServer(type);
      } else if (ShopBlockType.ShopBlockType.GAME_SERVER_HOSTING_BANNER === type) {
        return closure_1_6.fromServer(type);
      }
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