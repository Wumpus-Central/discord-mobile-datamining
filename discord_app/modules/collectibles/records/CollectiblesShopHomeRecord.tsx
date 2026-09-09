// discord_app/modules/collectibles/records/CollectiblesShopHomeRecord.tsx
import ShopBlockType from "../../../../discord_common/js/shared/shared-constants/ShopBlockType.tsx";
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord.tsx";

require = fn;
const CountdownTimerBlockRecord = fn(7586).CountdownTimerBlockRecord;
const FeaturedBlockRecord = fn(7588).FeaturedBlockRecord;
const FeedBlockRecord = fn(7591).FeedBlockRecord;
let closure_6 = fn(7592).GameServerHostingBannerBlockRecord;
const HeroBlockRecord = fn(7593).HeroBlockRecord;
let closure_8 = fn(7594).ImmersiveBannerBlockRecord;
const RewardHeroBlockRecord = fn(7595).RewardHeroBlockRecord;
const ShelfBlockRecord = fn(7596).ShelfBlockRecord;
let closure_11 = fn(7597).SocialLayerStorefrontPromotionalBannerBlockRecord;
const WideBannerBlockRecord = fn(7598).WideBannerBlockRecord;
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
