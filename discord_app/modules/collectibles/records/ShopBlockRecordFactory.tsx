// discord_app/modules/collectibles/records/ShopBlockRecordFactory.tsx
import ShopBlockType from "../../../../discord_common/js/shared/shared-constants/ShopBlockType.tsx";
import CountdownTimerBlockRecord2 from "CountdownTimerBlockRecord.tsx";
import FeaturedBlockRecord2 from "FeaturedBlockRecord.tsx";
import FeedBlockRecord2 from "FeedBlockRecord.tsx";
import GameServerHostingBannerBlockRecord from "GameServerHostingBannerBlockRecord.tsx";
import ImmersiveBannerBlockRecord from "ImmersiveBannerBlockRecord.tsx";
import ShelfBlockRecord2 from "ShelfBlockRecord.tsx";
import SocialLayerStorefrontPromotionalBannerBlockRecord from "SocialLayerStorefrontPromotionalBannerBlockRecord.tsx";
import WideBannerBlockRecord2 from "WideBannerBlockRecord.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const CountdownTimerBlockRecord = CountdownTimerBlockRecord2.CountdownTimerBlockRecord;
const FeaturedBlockRecord = FeaturedBlockRecord2.FeaturedBlockRecord;
const FeedBlockRecord = FeedBlockRecord2.FeedBlockRecord;
let closure_5 = GameServerHostingBannerBlockRecord.GameServerHostingBannerBlockRecord;
let closure_6 = ImmersiveBannerBlockRecord.ImmersiveBannerBlockRecord;
const ShelfBlockRecord = ShelfBlockRecord2.ShelfBlockRecord;
let closure_8 = SocialLayerStorefrontPromotionalBannerBlockRecord.SocialLayerStorefrontPromotionalBannerBlockRecord;
const WideBannerBlockRecord = WideBannerBlockRecord2.WideBannerBlockRecord;
const result = size.fileFinishedImporting("modules/collectibles/records/ShopBlockRecordFactory.tsx");

export function parseNonHeroShopBlock(foreground_block) {
  const type = foreground_block.type;
  if (ShopBlockType.ShopBlockType.FEATURED === type) {
    return FeaturedBlockRecord.fromServer(foreground_block);
  } else if (ShopBlockType.ShopBlockType.FEED === type) {
    return FeedBlockRecord.fromServer(foreground_block);
  } else if (ShopBlockType.ShopBlockType.WIDE_BANNER === type) {
    return WideBannerBlockRecord.fromServer(foreground_block);
  } else if (ShopBlockType.ShopBlockType.SHELF === type) {
    return ShelfBlockRecord.fromServer(foreground_block);
  } else if (ShopBlockType.ShopBlockType.COUNTDOWN_TIMER === type) {
    return CountdownTimerBlockRecord.fromServer(foreground_block);
  } else if (ShopBlockType.ShopBlockType.IMMERSIVE_BANNER === type) {
    return closure_6.fromServer(foreground_block);
  } else if (ShopBlockType.ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER === type) {
    return closure_8.fromServer(foreground_block);
  } else if (ShopBlockType.ShopBlockType.GAME_SERVER_HOSTING_BANNER === type) {
    return closure_5.fromServer(foreground_block);
  }
}
