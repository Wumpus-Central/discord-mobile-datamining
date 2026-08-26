// === Module 7255: fromServer ===

// Module 7255 (fromServer)
import set from "set" /* 2 */;
import ShopBlockType from "ShopBlockType" /* 7245 */;

let prototype;
prototype = function SocialLayerStorefrontPromotionalBannerBlockRecord(arg0) {
  const obj = Object.create(new.target.prototype);
  obj.type = ShopBlockType.ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER;
  ({ application_id: tmp.applicationId, header_text: tmp.headerText, gradient_colors: tmp.gradientColors, gradient_angle: tmp.gradientAngle, sku_ids: tmp.skuIds, end_time: tmp.endTime, cta_type: tmp.ctaType, logo_url: tmp.logoUrl } = arg0);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.type = ShopBlockType.ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER;
  ({ application_id: tmp2.applicationId, header_text: tmp2.headerText, gradient_colors: tmp2.gradientColors, gradient_angle: tmp2.gradientAngle, sku_ids: tmp2.skuIds, end_time: tmp2.endTime, cta_type: tmp2.ctaType, logo_url: tmp2.logoUrl } = arg0);
  return obj;
};
const result = set.fileFinishedImporting("modules/collectibles/records/SocialLayerStorefrontPromotionalBannerBlockRecord.tsx");

export const SocialLayerStorefrontPromotionalBannerBlockRecord = prototype;