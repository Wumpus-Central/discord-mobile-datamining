// === Module 5832: fromServer ===

// Module 5832 (fromServer)
import fromServer from "fromServer";
import { CountdownTimerBlockRecord } from "fromServer";
import { FeaturedBlockRecord } from "fromServer";
import { FeedBlockRecord } from "fromServer";
import { GameServerHostingBannerBlockRecord as closure_6 } from "fromServer";
import { HeroBlockRecord } from "fromServer";
import { ImmersiveBannerBlockRecord as closure_8 } from "fromServer";
import { RewardHeroBlockRecord } from "fromServer";
import { ShelfBlockRecord } from "fromServer";
import { SocialLayerStorefrontPromotionalBannerBlockRecord as closure_11 } from "fromServer";
import { WideBannerBlockRecord } from "fromServer";

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
  obj.categories = categories.map((arg0) => fromServer.fromServer(arg0));
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(shop_blocks) {
  if (typeof prototype !== "fileFinishedImporting") {
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
  obj.categories = categories.map((arg0) => fromServer.fromServer(arg0));
  return obj;
};
const result = require("fromServer").fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export const CollectiblesShopHomeRecord = prototype;