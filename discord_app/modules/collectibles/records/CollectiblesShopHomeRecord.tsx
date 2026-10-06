// discord_app/modules/collectibles/records/CollectiblesShopHomeRecord.tsx
import CountdownTimerBlockRecord2 from "CountdownTimerBlockRecord.tsx";
import ShopBlockType from "../../../../discord_common/js/shared/shared-constants/ShopBlockType.tsx";
import FeaturedBlockRecord2 from "FeaturedBlockRecord.tsx";
import FeedBlockRecord2 from "FeedBlockRecord.tsx";
import GameServerHostingBannerBlockRecord from "GameServerHostingBannerBlockRecord.tsx";
import HeroBlockRecord2 from "HeroBlockRecord.tsx";
import ImmersiveBannerBlockRecord from "ImmersiveBannerBlockRecord.tsx";
import ShelfBlockRecord2 from "ShelfBlockRecord.tsx";
import SocialLayerStorefrontPromotionalBannerBlockRecord from "SocialLayerStorefrontPromotionalBannerBlockRecord.tsx";
import WideBannerBlockRecord2 from "WideBannerBlockRecord.tsx";
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const f94330 = (type) => {
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
};
const f94331 = (item) => undefined !== item;
const f94332 = (item) => CollectiblesCategoryRecord.fromServer(item);
const CountdownTimerBlockRecord = CountdownTimerBlockRecord2.CountdownTimerBlockRecord;
const FeaturedBlockRecord = FeaturedBlockRecord2.FeaturedBlockRecord;
const FeedBlockRecord = FeedBlockRecord2.FeedBlockRecord;
let closure_6 = GameServerHostingBannerBlockRecord.GameServerHostingBannerBlockRecord;
const HeroBlockRecord = HeroBlockRecord2.HeroBlockRecord;
let closure_8 = ImmersiveBannerBlockRecord.ImmersiveBannerBlockRecord;
const ShelfBlockRecord = ShelfBlockRecord2.ShelfBlockRecord;
let closure_10 = SocialLayerStorefrontPromotionalBannerBlockRecord.SocialLayerStorefrontPromotionalBannerBlockRecord;
const WideBannerBlockRecord = WideBannerBlockRecord2.WideBannerBlockRecord;
class CollectiblesShopHomeRecord {
  constructor(shop_blocks) {
    const obj = Object.create(new.target.prototype);
    shop_blocks = shop_blocks.shop_blocks;
    const mapped = shop_blocks.map(f94330);
    obj.shopBlocks = mapped.filter(f94331);
    const categories = shop_blocks.categories;
    obj.categories = categories.map(f94332);
    return obj;
  }
  static fromServer(shop_blocks) {
    if (typeof CollectiblesShopHomeRecord === "function") {
      const obj = Object.create(tmp.prototype);
      shop_blocks = shop_blocks.shop_blocks;
      const mapped = shop_blocks.map(f94330);
      obj.shopBlocks = mapped.filter(f94331);
      const categories = shop_blocks.categories;
      obj.categories = categories.map(f94332);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export { CollectiblesShopHomeRecord };
