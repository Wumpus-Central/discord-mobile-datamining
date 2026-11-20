// === Module 14191: createSocialLayerStorefrontMultiSkuEmbed ===

// Module 14191 (createSocialLayerStorefrontMultiSkuEmbed)
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8560 */;
import isSocialLayerApplicationDefault from "isSocialLayerApplication" /* 13372 */;
import getSocialLayerStorefrontSkuEmbedDetails from "getSocialLayerStorefrontSkuEmbedDetails" /* 14192 */;
import ApplicationStore from "ApplicationStore" /* 2163 */;
import SKUStore from "SKUStore" /* 6555 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 6730 */;

require = fn;
const ThemeTypes = fn(1071).ThemeTypes;
const InviteTypes = fn(8318).InviteTypes;
const CodedLinkExtendedType = fn(10293).CodedLinkExtendedType;
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/native/createSocialLayerStorefrontMultiSkuEmbed.tsx");

export function createSocialLayerStorefrontMultiSkuEmbed(arg0) {
  let application;
  ({ skuIds, guildOrApplication } = arg0);
  const isEligibleForSocialLayerStorefrontMobileEmbed = application(11846).getIsEligibleForSocialLayerStorefrontMobileEmbed({ location: "create_coded_link_embeds", autoTrackExposure: true });
  let obj = application(11846);
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
            const result = tmp(11845).normalizeStorefrontSkuIds(skuIds);
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
              obj3.backgroundColor = tmp(14193).getSocialLayerStorefrontEmbedColors(ThemeTypes.DARK).backgroundColor;
              obj3.extendedType = CodedLinkExtendedType.SOCIAL_LAYER_STOREFRONT_MULTI_SKU_EMBED;
              obj3.type = InviteTypes.GUILD;
              obj3.headerText = storefront.title;
              let assetURL;
              if (null != lightThemeLogoAssetId) {
                assetURL = tmp(6240).getAssetURL(application.id, lightThemeLogoAssetId, 128);
                const tmpResult5 = tmp(6240);
              }
              obj3.headerLogoUrl = assetURL;
              const tmpResult4 = tmp(14193);
              const socialLayerStorefrontBackgroundImageURL = tmp(6728).getSocialLayerStorefrontBackgroundImageURL(storefront);
              obj3.headerBackgroundImageUrl = socialLayerStorefrontBackgroundImageURL;
              const _HermesInternal = HermesInternal;
              obj3.headerAccessibilityLabel = "" + application.name + " " + storefront.title;
              obj3.firstItemFullWidth = flatMapResult.length % 2 === 1;
              obj3.items = flatMapResult;
              obj3.embedCanBeTapped = true;
              return obj3;
            }
            const tmpResult = tmp(11845);
          }
        }
        return null;
      }
    }
  }
  return null;
}