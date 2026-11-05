// === Module 15366: createSocialLayerStorefrontMultiSkuEmbed ===

// Module 15366 (createSocialLayerStorefrontMultiSkuEmbed)
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8540 */;
import isSocialLayerApplicationDefault from "isSocialLayerApplication" /* 14404 */;
import getSocialLayerStorefrontSkuEmbedDetails from "getSocialLayerStorefrontSkuEmbedDetails" /* 15367 */;
import ApplicationStore from "ApplicationStore" /* 2167 */;
import SKUStore from "SKUStore" /* 7034 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 7548 */;

require = fn;
const ThemeTypes = fn(1072).ThemeTypes;
const InviteTypes = fn(8024).InviteTypes;
const CodedLinkExtendedType = fn(10303).CodedLinkExtendedType;
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/native/createSocialLayerStorefrontMultiSkuEmbed.tsx");

export function createSocialLayerStorefrontMultiSkuEmbed(arg0) {
  let application;
  ({ skuIds, guildOrApplication } = arg0);
  const isEligibleForSocialLayerStorefrontMobileEmbed = application(11761).getIsEligibleForSocialLayerStorefrontMobileEmbed({ location: "create_coded_link_embeds", autoTrackExposure: true });
  let obj = application(11761);
  if (isEligibleForSocialLayerStorefrontMobileEmbed) {
    if (obj2.getIsEligibleForSocialLayerStorefrontMobileMultiSkuEmbed({ location: "create_coded_link_embeds", autoTrackExposure: true })) {
      const storefrontFetchState = SocialLayerStorefrontStore.getStorefrontFetchState(guildOrApplication);
      let storefront;
      if (storefrontFetchState != null) {
        storefront = storefrontFetchState.storefront;
      }
      if (null == storefront) {
        return null;
      } else {
        application = ApplicationStore.getApplication(storefront.applicationId);
        if (null != application) {
          if (isSocialLayerApplicationDefault(application)) {
            const result = tmp(11760).normalizeStorefrontSkuIds(skuIds);
            const flatMapResult = result.flatMap((skuId) => {
              value = SKUStore.get(skuId);
              if (null != value) {
                if (value.applicationId === application.id) {
                  const obj = { skuId };
                  const merged = Object.assign(getSocialLayerStorefrontSkuEmbedDetails.getSocialLayerStorefrontSkuEmbedDetails(value, tmp2));
                  items = [obj];
                }
                return items;
              }
              items = [];
            });
            if (0 === flatMapResult.length) {
              return null;
            } else {
              let lightThemeLogoAssetId = storefront.logoAssetId;
              if (lightThemeLogoAssetId == null) {
                lightThemeLogoAssetId = storefront.lightThemeLogoAssetId;
              }
              const obj3 = {};
              let merged = Object.assign(getEmbedThemeColorsDefault(ThemeTypes.DARK).baseColors);
              obj3.backgroundColor = tmp(15368).getSocialLayerStorefrontEmbedColors(ThemeTypes.DARK).backgroundColor;
              obj3.extendedType = CodedLinkExtendedType.SOCIAL_LAYER_STOREFRONT_MULTI_SKU_EMBED;
              obj3.type = InviteTypes.GUILD;
              obj3.headerText = storefront.title;
              let assetURL;
              if (null != lightThemeLogoAssetId) {
                assetURL = tmp(6593).getAssetURL(application.id, lightThemeLogoAssetId, 128);
                const tmpResult5 = tmp(6593);
              }
              obj3.headerLogoUrl = assetURL;
              const tmpResult4 = tmp(15368);
              const socialLayerStorefrontBackgroundImageURL = tmp(7546).getSocialLayerStorefrontBackgroundImageURL(storefront);
              obj3.headerBackgroundImageUrl = socialLayerStorefrontBackgroundImageURL;
              const _HermesInternal = HermesInternal;
              obj3.headerAccessibilityLabel = "" + application.name + " " + storefront.title;
              obj3.firstItemFullWidth = flatMapResult.length % 2 === 1;
              obj3.items = flatMapResult;
              obj3.embedCanBeTapped = true;
              return obj3;
            }
            const tmpResult = tmp(11760);
          }
        }
        return null;
      }
    }
  }
  return null;
}