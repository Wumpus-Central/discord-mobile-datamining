// === Module 6940: fromServer ===

// Module 6940 (fromServer)
let prototype;
prototype = function WideBannerBlockRecord(arg0) {
  const obj = Object.create(new.target.prototype);
  obj.type = require(6929) /* ShopBlockType */.ShopBlockType.WIDE_BANNER;
  ({ title: tmp.title, body: tmp.body, category_store_listing_id: tmp.categoryStoreListingId, banner_text_color: tmp.bannerTextColor, banner_body_text_color: tmp.bannerBodyTextColor, disable_cta: tmp.disableCta, wide_banner_url: tmp.bannerURL, wide_banner_animated_url: tmp.bannerAnimatedURL, logo_url: tmp.logoURL, cta_text: tmp.ctaText, cta_route: tmp.ctaRoute, is_dismissible: tmp.isDismissible, dismissible_content_version: tmp.dismissibleContentVersion } = arg0);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  if (typeof prototype !== "error") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.type = require(6929) /* ShopBlockType */.ShopBlockType.WIDE_BANNER;
  ({ title: tmp2.title, body: tmp2.body, category_store_listing_id: tmp2.categoryStoreListingId, banner_text_color: tmp2.bannerTextColor, banner_body_text_color: tmp2.bannerBodyTextColor, disable_cta: tmp2.disableCta, wide_banner_url: tmp2.bannerURL, wide_banner_animated_url: tmp2.bannerAnimatedURL, logo_url: tmp2.logoURL, cta_text: tmp2.ctaText, cta_route: tmp2.ctaRoute, is_dismissible: tmp2.isDismissible, dismissible_content_version: tmp2.dismissibleContentVersion } = arg0);
  return obj;
};
const result = require("set").fileFinishedImporting("modules/collectibles/records/WideBannerBlockRecord.tsx");

export const WideBannerBlockRecord = prototype;