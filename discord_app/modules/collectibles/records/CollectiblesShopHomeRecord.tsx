// === Module 7249: fromServer ===

// Module 7249 (fromServer)
import closure_2 from "fromServer" /* 7221 */;
import { CountdownTimerBlockRecord, FeaturedBlockRecord, FeedBlockRecord, GameServerHostingBannerBlockRecord as closure_6, HeroBlockRecord, ImmersiveBannerBlockRecord as closure_8, RewardHeroBlockRecord, ShelfBlockRecord, SocialLayerStorefrontPromotionalBannerBlockRecord as closure_11, WideBannerBlockRecord } from "fromServer" /* 7250 */;

const require = arg1;
let prototype;
prototype = function CollectiblesShopHomeRecord(shop_blocks) {
  const obj = Object.create(new.target.prototype);
  shop_blocks = shop_blocks.shop_blocks;
  const mapped = shop_blocks.map((type) => {
    type = type.type;
    if (callback(table[11]).ShopBlockType.HERO === type) {
      return closure_7.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.FEATURED === type) {
      return closure_4.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.FEED === type) {
      return closure_5.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.WIDE_BANNER === type) {
      return closure_12.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.SHELF === type) {
      return closure_10.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.COUNTDOWN_TIMER === type) {
      return closure_3.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.IMMERSIVE_BANNER === type) {
      return closure_8.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.REWARD_HERO === type) {
      return closure_9.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER === type) {
      return closure_11.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.GAME_SERVER_HOSTING_BANNER === type) {
      return closure_6.fromServer(type);
    }
  });
  obj.shopBlocks = mapped.filter((arg0) => undefined !== arg0);
  const categories = shop_blocks.categories;
  obj.categories = categories.map((arg0) => closure_2.fromServer(arg0));
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(shop_blocks) {
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  shop_blocks = shop_blocks.shop_blocks;
  const mapped = shop_blocks.map((type) => {
    type = type.type;
    if (callback(table[11]).ShopBlockType.HERO === type) {
      return closure_7.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.FEATURED === type) {
      return closure_4.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.FEED === type) {
      return closure_5.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.WIDE_BANNER === type) {
      return closure_12.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.SHELF === type) {
      return closure_10.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.COUNTDOWN_TIMER === type) {
      return closure_3.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.IMMERSIVE_BANNER === type) {
      return closure_8.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.REWARD_HERO === type) {
      return closure_9.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER === type) {
      return closure_11.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.GAME_SERVER_HOSTING_BANNER === type) {
      return closure_6.fromServer(type);
    }
  });
  obj.shopBlocks = mapped.filter((arg0) => undefined !== arg0);
  const categories = shop_blocks.categories;
  obj.categories = categories.map((arg0) => closure_2.fromServer(arg0));
  return obj;
};
const result = require("set").fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export const CollectiblesShopHomeRecord = prototype;