// === Module 7571: CollectiblesShopHomeRecord ===

// Module 7571 (CollectiblesShopHomeRecord)
import ShopBlockType from "ShopBlockType" /* 7573 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7543 */;

require = fn;
const CountdownTimerBlockRecord = fn(7572).CountdownTimerBlockRecord;
const FeaturedBlockRecord = fn(7574).FeaturedBlockRecord;
const FeedBlockRecord = fn(7577).FeedBlockRecord;
let closure_6 = fn(7578).GameServerHostingBannerBlockRecord;
const HeroBlockRecord = fn(7579).HeroBlockRecord;
let closure_8 = fn(7580).ImmersiveBannerBlockRecord;
const RewardHeroBlockRecord = fn(7581).RewardHeroBlockRecord;
const ShelfBlockRecord = fn(7582).ShelfBlockRecord;
let closure_11 = fn(7583).SocialLayerStorefrontPromotionalBannerBlockRecord;
const WideBannerBlockRecord = fn(7584).WideBannerBlockRecord;
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
    } else if (ShopBlockType.ShopBlockType.REWARD_HERO === type) {
      return RewardHeroBlockRecord.fromServer(type);
    } else if (ShopBlockType.ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER === type) {
      return closure_1_11.fromServer(type);
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
      } else if (ShopBlockType.ShopBlockType.REWARD_HERO === type) {
        return RewardHeroBlockRecord.fromServer(type);
      } else if (ShopBlockType.ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER === type) {
        return closure_1_11.fromServer(type);
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