// discord_app/modules/collectibles/records/WideBannerBlockRecord.tsx
import ShopBlockType from "../../../../discord_common/js/shared/shared-constants/ShopBlockType.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const prototype = function WideBannerBlockRecord(arg0) {
  const obj = Object.create(new.target.prototype);
  obj.type = ShopBlockType.ShopBlockType.WIDE_BANNER;
  ({
    title: tmp.title,
    body: tmp.body,
    category_store_listing_id: tmp.categoryStoreListingId,
    banner_text_color: tmp.bannerTextColor,
    banner_body_text_color: tmp.bannerBodyTextColor,
    disable_cta: tmp.disableCta,
    wide_banner_url: tmp.bannerURL,
    wide_banner_animated_url: tmp.bannerAnimatedURL,
    logo_url: tmp.logoURL,
    cta_text: tmp.ctaText,
    cta_route: tmp.ctaRoute,
    is_dismissible: tmp.isDismissible,
    dismissible_content_version: tmp.dismissibleContentVersion,
  } = arg0);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  if (typeof prototype === "function") {
    const obj = Object.create(tmp.prototype);
    obj.type = ShopBlockType.ShopBlockType.WIDE_BANNER;
    ({
      title: tmp3.title,
      body: tmp3.body,
      category_store_listing_id: tmp3.categoryStoreListingId,
      banner_text_color: tmp3.bannerTextColor,
      banner_body_text_color: tmp3.bannerBodyTextColor,
      disable_cta: tmp3.disableCta,
      wide_banner_url: tmp3.bannerURL,
      wide_banner_animated_url: tmp3.bannerAnimatedURL,
      logo_url: tmp3.logoURL,
      cta_text: tmp3.ctaText,
      cta_route: tmp3.ctaRoute,
      is_dismissible: tmp3.isDismissible,
      dismissible_content_version: tmp3.dismissibleContentVersion,
    } = arg0);
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const result = size.fileFinishedImporting("modules/collectibles/records/WideBannerBlockRecord.tsx");

export const WideBannerBlockRecord = prototype;
