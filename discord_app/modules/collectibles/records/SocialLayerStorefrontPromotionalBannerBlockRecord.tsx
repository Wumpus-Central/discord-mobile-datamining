// === Module 7583: SocialLayerStorefrontPromotionalBannerBlockRecord ===

// Module 7583 (SocialLayerStorefrontPromotionalBannerBlockRecord)
import ShopBlockType from "ShopBlockType" /* 7573 */;
import size from "module_2" /* 2 */;

const prototype = function SocialLayerStorefrontPromotionalBannerBlockRecord(arg0) {
  const obj = Object.create(new.target.prototype);
  obj.type = ShopBlockType.ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER;
  ({ application_id: tmp.applicationId, header_text: tmp.headerText, gradient_colors: tmp.gradientColors, gradient_angle: tmp.gradientAngle, sku_ids: tmp.skuIds, end_time: tmp.endTime, cta_type: tmp.ctaType, logo_url: tmp.logoUrl } = arg0);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  if (typeof prototype === "function") {
    const obj = Object.create(tmp.prototype);
    obj.type = ShopBlockType.ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER;
    ({ application_id: tmp3.applicationId, header_text: tmp3.headerText, gradient_colors: tmp3.gradientColors, gradient_angle: tmp3.gradientAngle, sku_ids: tmp3.skuIds, end_time: tmp3.endTime, cta_type: tmp3.ctaType, logo_url: tmp3.logoUrl } = arg0);
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const result = size.fileFinishedImporting("modules/collectibles/records/SocialLayerStorefrontPromotionalBannerBlockRecord.tsx");

export const SocialLayerStorefrontPromotionalBannerBlockRecord = prototype;