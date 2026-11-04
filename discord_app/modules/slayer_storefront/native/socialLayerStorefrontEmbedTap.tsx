// discord_app/modules/slayer_storefront/native/socialLayerStorefrontEmbedTap.tsx
import storefrontCodedLink from "../storefrontCodedLink.tsx";
import SocialLayerStorefrontMobileEmbedExperiment from "../experiments/SocialLayerStorefrontMobileEmbedExperiment.tsx";
import SocialLayerStorefrontMobileMultiSkuEmbedExperiment from "../experiments/SocialLayerStorefrontMobileMultiSkuEmbedExperiment.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/native/socialLayerStorefrontEmbedTap.tsx");

export function getSocialLayerStorefrontEmbedTap(code, secondary, skuId) {
  if (null != skuId) {
    if (obj.getIsEligibleForSocialLayerStorefrontMobileEmbed({ location: "create_coded_link_embeds" })) {
      if (
        tmpResult.getIsEligibleForSocialLayerStorefrontMobileMultiSkuEmbed({ location: "create_coded_link_embeds" })
      ) {
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
    isEligibleForSocialLayerStorefrontMobileEmbed =
      SocialLayerStorefrontMobileEmbedExperiment.getIsEligibleForSocialLayerStorefrontMobileEmbed({
        location: "create_coded_link_embeds",
      });
  }
  obj3.wishlist = isEligibleForSocialLayerStorefrontMobileEmbed;
  return obj3;
}
