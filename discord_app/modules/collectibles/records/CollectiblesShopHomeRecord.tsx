// discord_app/modules/collectibles/records/CollectiblesShopHomeRecord.tsx
import fromServer from "CollectiblesCategoryRecord.tsx";
import { CountdownTimerBlockRecord, FeaturedBlockRecord, FeedBlockRecord, GameServerHostingBannerBlockRecord as closure_6, HeroBlockRecord, ImmersiveBannerBlockRecord as closure_8, RewardHeroBlockRecord, ShelfBlockRecord, SocialLayerStorefrontPromotionalBannerBlockRecord as closure_11, WideBannerBlockRecord } from "CountdownTimerBlockRecord.tsx";

const require = fn;
const prototype = function CollectiblesShopHomeRecord(shop_blocks) {
  const obj = Object.create(new.target.prototype);
  shop_blocks = shop_blocks.shop_blocks;
  const mapped = shop_blocks.map((item, index) => {
    const type = item.type;
    if (callback(table[11]).ShopBlockType.HERO === type) {
      return closure_7.fromServer(item);
    } else if (callback(table[11]).ShopBlockType.FEATURED === type) {
      return closure_4.fromServer(item);
    } else if (callback(table[11]).ShopBlockType.FEED === type) {
      return closure_5.fromServer(item);
    } else if (callback(table[11]).ShopBlockType.WIDE_BANNER === type) {
      return closure_12.fromServer(item);
    } else if (callback(table[11]).ShopBlockType.SHELF === type) {
      return closure_10.fromServer(item);
    } else if (callback(table[11]).ShopBlockType.COUNTDOWN_TIMER === type) {
      return closure_3.fromServer(item);
    } else if (callback(table[11]).ShopBlockType.IMMERSIVE_BANNER === type) {
      return closure_8.fromServer(item);
    } else if (callback(table[11]).ShopBlockType.REWARD_HERO === type) {
      return closure_9.fromServer(item);
    } else if (callback(table[11]).ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER === type) {
      return closure_11.fromServer(item);
    } else if (callback(table[11]).ShopBlockType.GAME_SERVER_HOSTING_BANNER === type) {
      return closure_6.fromServer(item);
    }
  });
  obj.shopBlocks = mapped.filter((item, index) => undefined !== item);
  const categories = shop_blocks.categories;
  obj.categories = categories.map((item, index) => closure_2.fromServer(item));
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(shop_blocks) {
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  shop_blocks = shop_blocks.shop_blocks;
  const mapped = shop_blocks.map((item, index) => {
    const type = item.type;
    if (callback(table[11]).ShopBlockType.HERO === type) {
      return closure_7.fromServer(item);
    } else if (callback(table[11]).ShopBlockType.FEATURED === type) {
      return closure_4.fromServer(item);
    } else if (callback(table[11]).ShopBlockType.FEED === type) {
      return closure_5.fromServer(item);
    } else if (callback(table[11]).ShopBlockType.WIDE_BANNER === type) {
      return closure_12.fromServer(item);
    } else if (callback(table[11]).ShopBlockType.SHELF === type) {
      return closure_10.fromServer(item);
    } else if (callback(table[11]).ShopBlockType.COUNTDOWN_TIMER === type) {
      return closure_3.fromServer(item);
    } else if (callback(table[11]).ShopBlockType.IMMERSIVE_BANNER === type) {
      return closure_8.fromServer(item);
    } else if (callback(table[11]).ShopBlockType.REWARD_HERO === type) {
      return closure_9.fromServer(item);
    } else if (callback(table[11]).ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER === type) {
      return closure_11.fromServer(item);
    } else if (callback(table[11]).ShopBlockType.GAME_SERVER_HOSTING_BANNER === type) {
      return closure_6.fromServer(item);
    }
  });
  obj.shopBlocks = mapped.filter((item, index) => undefined !== item);
  const categories = shop_blocks.categories;
  obj.categories = categories.map((item, index) => closure_2.fromServer(item));
  return obj;
};
const result = require("obj132").fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export const CollectiblesShopHomeRecord = prototype;