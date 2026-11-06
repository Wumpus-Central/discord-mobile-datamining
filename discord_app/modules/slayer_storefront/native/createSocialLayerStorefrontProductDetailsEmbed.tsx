// discord_app/modules/slayer_storefront/native/createSocialLayerStorefrontProductDetailsEmbed.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import util from "../../../intl/index.native.tsx";
import PremiumConstants from "../../premium/PremiumConstants.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import _modDef3894 from "../intl/SlayerStorefront.messages.js";
import SlayerStorefrontUtils from "../SlayerStorefrontUtils.tsx";
import StorefrontUtils from "../../storefront/StorefrontUtils.tsx";
import OrbCheckoutUtils from "../../virtual_currency/checkout/OrbCheckoutUtils.tsx";
import Constants from "../../instant_invite/Constants.tsx";
import getEmbedThemeColorsDefault from "../../messages/native/renderer/row_data/embeds/getEmbedThemeColors.tsx";
import _modDef9635 from "../../../../_runtime/metro/09635__.js";
import CodedLinksConstants from "../../messages/native/renderer/row_data/embeds/coded_links/CodedLinksConstants.tsx";
import socialLayerStorefrontEmbedPrice2 from "socialLayerStorefrontEmbedPrice.android.tsx";
import SocialLayerStorefrontMobileEmbedExperiment from "../experiments/SocialLayerStorefrontMobileEmbedExperiment.tsx";
import isSocialLayerApplicationDefault from "../../applications/isSocialLayerApplication.tsx";
import getSocialLayerStorefrontSkuEmbedDetails from "getSocialLayerStorefrontSkuEmbedDetails.tsx";
import socialLayerStorefrontEmbedColors from "socialLayerStorefrontEmbedColors.tsx";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import UserProfileStore from "../../user_profile/UserProfileStore.tsx";
import WishlistStore from "../../wishlists/WishlistStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import SKUStore from "../../../stores/game_store/SKUStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const Image = _mod17.Image;
const InviteTypes = Constants.InviteTypes;
const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
const PremiumTypes = PremiumConstants.PremiumTypes;
let result = size.fileFinishedImporting(
  "modules/slayer_storefront/native/createSocialLayerStorefrontProductDetailsEmbed.tsx",
);

export function createSocialLayerStorefrontProductDetailsEmbed(arg0) {
  ({ skuId, guildOrApplication, theme } = arg0);
  const isEligibleForSocialLayerStorefrontMobileEmbed =
    SocialLayerStorefrontMobileEmbedExperiment.getIsEligibleForSocialLayerStorefrontMobileEmbed({
      location: "create_coded_link_embeds",
      autoTrackExposure: true,
    });
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  value = SKUStore.get(skuId);
  if (isEligibleForSocialLayerStorefrontMobileEmbed) {
    let applicationId;
    if (!tmp7) {
      applicationId = value.applicationId;
    }
    const application = ApplicationStore.getApplication(applicationId);
    let result = null != applicationId;
    SKUStore.didFetchingSkuFail(skuId);
    if (result) {
      result = ApplicationStore.isFetchingApplication(applicationId);
    }
    null != applicationId && ApplicationStore.didFetchingApplicationFail(applicationId);
    let name;
    if (application != null) {
      name = application.name;
    }
    if (name == null) {
      const intl4 = util.intl;
      name = intl4.string(util.t.vyaWs7).toUpperCase();
      const str5 = intl4.string(util.t.vyaWs7);
    }
    if (!isFetchingResult) {
      if (!result) {
        if (null != applicationId) {
          if (null == application) {
            if (!result) {
              const obj4 = {};
              baseColors = Object.assign(baseColors);
              obj4.headerText = name;
              name = colors.resolvingGradientEnd;
              obj4.resolvingGradientEnd = name;
              obj4.resolvingGradientStart = colors.resolvingGradientStart;
              colors = InviteTypes.GUILD;
              obj4.type = colors;
              obj4.extendedType = CodedLinkExtendedType.SOCIAL_LAYER_STOREFRONT_EMBED;
              obj4.skuId = skuId;
            }
          }
        }
      }
      if (null != value) {
        if (null != application) {
          if (isSocialLayerApplicationDefault(application)) {
            if ("guild" !== guildOrApplication.type) {
              if ("application" !== guildOrApplication.type) {
                const socialLayerStorefrontSkuEmbedDetails =
                  getSocialLayerStorefrontSkuEmbedDetails.getSocialLayerStorefrontSkuEmbedDetails(value, application);
                const tmpResult = getSocialLayerStorefrontSkuEmbedDetails;
                const socialLayerStorefrontEmbedPrice =
                  socialLayerStorefrontEmbedPrice2.getSocialLayerStorefrontEmbedPrice(value);
                const currentUser = UserStore.getCurrentUser();
                const tmpResult7 = socialLayerStorefrontEmbedPrice2;
                const tmp4Result = PremiumUtilsDefault;
                const isPremiumResult = PremiumUtilsDefault.isPremium(currentUser, PremiumTypes.TIER_2);
                const orbPriceFromPrices = OrbCheckoutUtils.getOrbPriceFromPrices(value.prices, isPremiumResult);
                const id = AuthenticationStore.getId();
                let firstWishlistId = null;
                if (null != id) {
                  firstWishlistId = UserProfileStore.getFirstWishlistId(id);
                }
                let hasSkuIdResult = null != firstWishlistId;
                if (hasSkuIdResult) {
                  hasSkuIdResult = WishlistStore.hasSkuId(firstWishlistId, value.id);
                }
                const obj5 = {};
                const merged = Object.assign(baseColors);
                obj5.headerText = name;
                obj5.headerColor = colors.headerColor;
                obj5.titleText = socialLayerStorefrontSkuEmbedDetails.title;
                obj5.titleColor = colors.titleColor;
                ({ titleIconUrl: obj14.titleIconUrl, subtitle: obj14.subtitle } = socialLayerStorefrontSkuEmbedDetails);
                obj5.subtitleColor = colors.subtitleColor;
                ({
                  foregroundImageUrl: obj14.foregroundImageUrl,
                  backgroundImageUrl: obj14.backgroundImageUrl,
                  foregroundImageUrl: obj14.thumbnailUrl,
                } = socialLayerStorefrontSkuEmbedDetails);
                obj5.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
                obj5.normalPriceText = socialLayerStorefrontEmbedPrice;
                let StringResult;
                if (null != orbPriceFromPrices) {
                  const _String = String;
                  StringResult = String(orbPriceFromPrices.amount);
                }
                obj5.orbPriceText = StringResult;
                let uri;
                if (null != orbPriceFromPrices) {
                  uri = Image.resolveAssetSource(_modDef9635).uri;
                }
                obj5.orbIconUrl = uri;
                ({ badgeText: obj14.overlayBadgeText, badgeIconUrl: obj14.overlayBadgeIconUrl } =
                  socialLayerStorefrontSkuEmbedDetails);
                obj5.overlayBadgeBackgroundColor = colors.acceptBlurpleLabelBackgroundColor;
                const tmpResult8 = OrbCheckoutUtils;
                obj5.overlayBadgeTextColor =
                  socialLayerStorefrontEmbedColors.getSocialLayerStorefrontEmbedColors(theme).overlayTextColor;
                const tmpResult9 = socialLayerStorefrontEmbedColors;
                obj5.backgroundColor =
                  socialLayerStorefrontEmbedColors.getSocialLayerStorefrontEmbedColors(theme).backgroundColor;
                obj5.showWishlistButton = true;
                obj5.wishlistButtonIconUrl = Image.resolveAssetSource(importDefault(hasSkuIdResult ? 9571 : 9638)).uri;
                const intl5 = util.intl;
                const t = util.t;
                obj5.wishlistButtonAccessibilityLabel = intl5.string(hasSkuIdResult ? t["19b82d"] : t.Hcgz2S);
                obj5.embedCanBeTapped = true;
                obj5.canBeAccepted = false;
                obj5.type = InviteTypes.GUILD;
                obj5.extendedType = CodedLinkExtendedType.SOCIAL_LAYER_STOREFRONT_EMBED;
                obj5.skuId = skuId;
                const tmpResult10 = socialLayerStorefrontEmbedColors;
              }
            }
          }
        }
      }
    }
    isFetchingResult = SKUStore.isFetching(skuId);
  } else {
    let applicationId1;
    if (!tmp7) {
      applicationId1 = value.applicationId;
    }
    const application1 = ApplicationStore.getApplication(applicationId1);
    let result1 = null != applicationId1;
    SKUStore.didFetchingSkuFail(skuId);
    if (result1) {
      result1 = ApplicationStore.isFetchingApplication(applicationId1);
    }
    null != applicationId1 && ApplicationStore.didFetchingApplicationFail(applicationId1);
    let name1;
    if (application1 != null) {
      name1 = application1.name;
    }
    if (name1 == null) {
      const intl = util.intl;
      name1 = intl.string(util.t.vyaWs7).toUpperCase();
      const str = intl.string(util.t.vyaWs7);
    }
    if (!isFetchingResult1) {
      if (!result1) {
        if (null != applicationId1) {
          if (null == application1) {
            if (!result1) {
              return tmp15;
            }
          }
        }
      }
      tmp15 = null;
      if (null != value) {
        tmp15 = null;
        if (null != application1) {
          tmp15 = null;
          if (isSocialLayerApplicationDefault(application1)) {
            if ("guild" !== guildOrApplication.type) {
              if ("application" !== guildOrApplication.type) {
                const result2 = StorefrontUtils.isSlayerSkuAvailableOnThisPlatform(value);
                const tmpResult11 = StorefrontUtils;
                const str4 = SlayerStorefrontUtils.getCardImageURL(value);
                let str1;
                if (str4 != null) {
                  str1 = str4.toString();
                }
                if (str1 == null) {
                  str1 = application1.getIconURL(64);
                }
                const obj6 = {};
                const merged1 = Object.assign(baseColors);
                obj6.headerText = name1;
                obj6.headerColor = colors.headerColor;
                obj6.titleText = value.name;
                obj6.titleColor = colors.titleColor;
                const intl2 = util.intl;
                obj6.subtitle = intl2.string(util.t.V91tvy);
                obj6.subtitleColor = colors.subtitleColor;
                obj6.thumbnailUrl = str1;
                obj6.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
                const intl3 = util.intl;
                const string = intl3.string;
                if (result2) {
                  let stringResult = string(util.t.boqtTA);
                } else {
                  stringResult = string(_modDef3894.BKf0MM);
                }
                obj6.acceptLabelText = stringResult;
                let prop;
                if (result2) {
                  prop = colors.acceptLabelGreenColor;
                }
                obj6.acceptLabelColor = prop;
                obj6.acceptLabelBackgroundColor = result2
                  ? colors.acceptLabelGreenBackgroundColor
                  : colors.acceptBlurpleLabelBackgroundColor;
                obj6.embedCanBeTapped = true;
                obj6.canBeAccepted = true;
                obj6.type = InviteTypes.GUILD;
                tmp15 = obj6;
                const tmpResult12 = SlayerStorefrontUtils;
              } else {
                tmp15 = null;
              }
            } else {
              tmp15 = null;
            }
          }
        }
      }
    }
    const obj7 = {};
    const merged2 = Object.assign(baseColors);
    obj7.headerText = name1;
    ({ resolvingGradientEnd: obj8.resolvingGradientEnd, resolvingGradientStart: obj8.resolvingGradientStart } = colors);
    obj7.type = InviteTypes.GUILD;
    tmp15 = obj7;
    isFetchingResult1 = SKUStore.isFetching(skuId);
  }
  const tmp5 = getEmbedThemeColorsDefault(theme);
}
