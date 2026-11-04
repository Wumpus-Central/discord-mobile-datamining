// === Module 13461: socialLayerStorefrontEmbedTap ===

// Module 13461 (socialLayerStorefrontEmbedTap)
import storefrontCodedLink from "storefrontCodedLink" /* 11752 */;
import SocialLayerStorefrontMobileEmbedExperiment from "SocialLayerStorefrontMobileEmbedExperiment" /* 11753 */;
import SocialLayerStorefrontMobileMultiSkuEmbedExperiment from "SocialLayerStorefrontMobileMultiSkuEmbedExperiment" /* 11754 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/native/socialLayerStorefrontEmbedTap.tsx");

export function getSocialLayerStorefrontEmbedTap(code, secondary, skuId) {
  if (null != skuId) {
    if (obj.getIsEligibleForSocialLayerStorefrontMobileEmbed({ location: "create_coded_link_embeds" })) {
      if (tmpResult.getIsEligibleForSocialLayerStorefrontMobileMultiSkuEmbed({ location: "create_coded_link_embeds" })) {
        const result = storefrontCodedLink.parseStorefrontCodedLink(code);
        if (null != result) {
          if (result.skuIds.length > 1) {
            const skuIds = result.skuIds;
            let tmp7 = null;
            if (skuIds.includes(skuId)) {
              const obj2 = { skuId, wishlist: false };
              tmp7 = obj2;
            }
            return tmp7;
          }
        }
        const tmpResult2 = storefrontCodedLink;
      }
      tmpResult = SocialLayerStorefrontMobileMultiSkuEmbedExperiment;
    }
    obj = SocialLayerStorefrontMobileEmbedExperiment;
  }
  const obj3 = { skuId: _slicedToArray(code.split("-"), 1)[0], wishlist: null };
  let isEligibleForSocialLayerStorefrontMobileEmbed = true === secondary;
  if (isEligibleForSocialLayerStorefrontMobileEmbed) {
    isEligibleForSocialLayerStorefrontMobileEmbed = SocialLayerStorefrontMobileEmbedExperiment.getIsEligibleForSocialLayerStorefrontMobileEmbed({ location: "create_coded_link_embeds" });
  }
  obj3.wishlist = isEligibleForSocialLayerStorefrontMobileEmbed;
  return obj3;
}