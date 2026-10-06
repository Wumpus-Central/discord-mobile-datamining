// discord_app/modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbed.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../../Constants.tsx";
import intl12 from "../../../../../../intl/index.native.tsx";
import PremiumConstants from "../../../../../premium/PremiumConstants.tsx";
import MetaQuestUtils from "../../../../../device/MetaQuestUtils.android.tsx";
import HelpdeskUtilsDefault from "../../../../../../utils/HelpdeskUtils.tsx";
import PremiumUtils from "../../../../../../utils/PremiumUtils.tsx";
import UserUtilsDefault from "../../../../../../utils/UserUtils.tsx";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ProductIds from "../../../../../premium/native/ProductIds.android.tsx";
import useTrialOffer from "../../../../../premium/useTrialOffer.tsx";
import renderer_EmbedUtils from "../../EmbedUtils.tsx";
import AssetRegistryDefault from "../../../../../../../_runtime/07733_AssetRegistry.js";
import ReferralProgramUtils from "../../../../../premium/referral_program/ReferralProgramUtils.tsx";
import AssetRegistryDefault2 from "../../../../../../../_runtime/07749_AssetRegistry.js";
import AssetRegistryDefault3 from "../../../../../../../_runtime/07750_AssetRegistry.js";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import UserStore from "../../../../../../stores/UserStore.tsx";
import SubscriptionStore from "../../../../../../stores/billing/SubscriptionStore.tsx";
import UserOfferStore from "../../../../../../stores/billing/UserOfferStore.tsx";
import IAPStore from "../../../../../../stores/native/IAPStore.android.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const PremiumUtilsDefault = PremiumUtils;

const HelpdeskArticles = Constants.HelpdeskArticles;
let closure_9 = PremiumConstants.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbed.tsx");

export const createReferralTrialEmbedRedeemable = function createReferralTrialEmbedRedeemable(
  message,
  theme,
  id,
  relevantUserTrialOffer,
) {
  let acceptLabelColor;
  let backgroundColor;
  let bodyTextColor;
  let footerTextColor;
  let formatToPlainStringResult1;
  let headerTextColor;
  let intervalCount;
  let intl10;
  let intl8;
  let intl9;
  let obj13;
  let obj15;
  let obj8;
  let stringResult;
  let subTextColor;
  let titleColor;
  let tmp46Result;
  let tmp46Result11;
  let tmp46Result7;
  let tmp49Result10;
  let tmp49Result8;
  let tmp49Result9;
  if (null != message.author) {
    const obj2 = {
      headerTextColor: nativeDefault.colors.WHITE,
      titleColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
      bodyTextColor: nativeDefault.colors.TEXT_DEFAULT,
      footerTextColor: nativeDefault.colors.TEXT_MUTED,
      subTextColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
      backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
      acceptLabelColor: nativeDefault.colors.WHITE,
    };
    const createNativeStyleProperties = createStyles.createNativeStyleProperties;
    createStyles;
    const tmp50 = createNativeStyleProperties(obj2)(theme);
    ({ titleColor, bodyTextColor, backgroundColor } = tmp50);
    ({ headerTextColor, footerTextColor, subTextColor, acceptLabelColor } = tmp50);
    const channel = ChannelStore.getChannel(message.getChannelId());
    if (null != channel) {
      if (channel.isDM()) {
        const obj = {
          backgroundColor,
          borderColor: backgroundColor,
          thumbnailCornerRadius: 3,
          headerLogoUrl: tmp46Result.getAssetUriForEmbed(AssetRegistryDefault2),
          headerText: stringResult.toLocaleLowerCase(),
          headerColor: headerTextColor,
          thumbnailUrl: tmp46Result7.getAssetUriForEmbed(AssetRegistryDefault3),
        };
        tmp46Result = renderer_EmbedUtils;
        const intl = intl12.intl;
        stringResult = intl.string(intl12.t.gtNqJQ);
        let userId;
        const getUser = UserStore.getUser;
        tmp46Result7 = renderer_EmbedUtils;
        if (relevantUserTrialOffer != null) {
          userId = relevantUserTrialOffer.userId;
        }
        const user = getUser(userId);
        let referrerId;
        const getUser2 = UserStore.getUser;
        if (relevantUserTrialOffer != null) {
          referrerId = relevantUserTrialOffer.referrerId;
        }
        const user2 = getUser2(referrerId);
        if (null != user) {
          if (null != user2) {
            const tmp49Result = UserUtilsDefault;
            const name = tmp49Result.getName(user2);
            id = user2.id;
            const tmp49Result6 = UserUtilsDefault;
            const name1 = tmp49Result6.getName(user);
            const intl11 = intl12.intl;
            const obj3 = { senderUserName: name, recipientUserName: name1 };
            const formatToPlainStringResult = intl11.formatToPlainString(intl12.t.IiWKwg, obj3);
            if (null == relevantUserTrialOffer) {
              const obj4 = {
                titleText: formatToPlainStringResult,
                titleColor,
                bodyText: intl9.string(intl12.t.eEz1N5),
                bodyTextColor,
                canBeAccepted: false,
              };
              const merged = Object.assign(obj);
              intl9 = intl12.intl;
              return obj4;
            } else {
              let replaced;
              let tmp17;
              let formatToPartsResult;
              const userTrialOffer = UserOfferStore.getUserTrialOffer(closure_9);
              const offerIds = IAPStore.getOfferIds();
              const _Object = Object;
              const values = Object.values(ProductIds.TrialIdToProductOfferId[closure_9]);
              let id1;
              const id2 = relevantUserTrialOffer.id;
              const everyResult = values.every((item) => set.has(item));
              if (userTrialOffer != null) {
                id1 = userTrialOffer.id;
              }
              const tmp49Result7 = PremiumUtilsDefault;
              const isPremiumResult = tmp49Result7.isPremium(user);
              let tmp11 = isPremiumResult;
              if (!tmp11) {
                tmp11 = isPremiumResult;
                if (user.id === id) {
                  tmp11 = null != SubscriptionStore.getPremiumTypeSubscription();
                }
              }
              const tmp46Result8 = useTrialOffer;
              const result = tmp46Result8.hasUserTrialOfferExpired(relevantUserTrialOffer);
              const tmp15 =
                null == relevantUserTrialOffer.expiresAt ||
                result ||
                tmp11 ||
                null != relevantUserTrialOffer.redeemedAt;
              if (!tmp15) {
                const expiresAt = relevantUserTrialOffer.expiresAt;
                const tmp46Result9 = ReferralProgramUtils;
                const referralTrialOfferExpirationCopy = tmp46Result9.getReferralTrialOfferExpirationCopy(
                  expiresAt.getTime(),
                );
                const intl2 = intl12.intl;
                const formatToPlainString = intl2.formatToPlainString;
                const uj94C5 = intl12.t.uj94C5;
                const subscriptionTrial = relevantUserTrialOffer.subscriptionTrial;
                let interval;
                const formatIntervalDuration = PremiumUtils.formatIntervalDuration;
                PremiumUtils;
                if (subscriptionTrial != null) {
                  interval = subscriptionTrial.interval;
                }
                const subscriptionTrial2 = relevantUserTrialOffer.subscriptionTrial;
                const obj5 = { intervalType: interval, intervalCount };
                intervalCount = undefined;
                if (subscriptionTrial2 != null) {
                  intervalCount = subscriptionTrial2.intervalCount;
                }
                const obj6 = { duration: formatIntervalDuration(obj5) };
                const str = formatToPlainString(uj94C5, obj6);
                replaced = str.replace(/\*/g, "");
                tmp17 = referralTrialOfferExpirationCopy;
              }
              if (tmp11) {
                if (id !== id) {
                  if (null == relevantUserTrialOffer.redeemedAt) {
                    const intl3 = intl12.intl;
                    const formatToParts = intl3.formatToParts;
                    const obj7 = { helpdeskArticle: obj8 };
                    obj8 = {
                      action: "bindOpenUrl",
                      url: tmp49Result8.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM),
                    };
                    const LwCwT9 = intl12.t.LwCwT9;
                    tmp49Result8 = HelpdeskUtilsDefault;
                    formatToPartsResult = formatToParts(LwCwT9, obj7);
                  }
                  const obj9 = {
                    titleText: formatToPlainStringResult,
                    titleColor,
                    bodyText: formatToPlainStringResult1,
                    structuredBodyText: formatToPartsResult,
                    bodyTextColor,
                    subText: tmp17,
                    subTextColor,
                    canBeAccepted: !result && !tmp11 && id2 === id1 && everyResult && id !== id,
                  };
                  const merged1 = Object.assign(obj);
                  let tmp35 = obj9;
                  if (!result && !tmp11 && id2 === id1 && everyResult && id !== id) {
                    const obj10 = {
                      footerText: replaced,
                      footerTextColor,
                      canBeAccepted: !result && !tmp11 && id2 === id1 && everyResult && id !== id,
                      acceptLabelText: intl8.string(intl12.t.bXTClc),
                      acceptLabelColor,
                      acceptLabelIconUrl: tmp46Result11.getAssetUriForEmbed(AssetRegistryDefault),
                    };
                    const merged2 = Object.assign(obj9);
                    intl8 = intl12.intl;
                    tmp35 = obj10;
                    tmp46Result11 = renderer_EmbedUtils;
                  }
                  return tmp35;
                }
              }
              if (tmp11) {
                const intl7 = intl12.intl;
                const obj11 = { username: name1 };
                formatToPlainStringResult1 = intl7.formatToPlainString(intl12.t["Mptau/"], obj11);
              } else {
                if (result) {
                  if (null == relevantUserTrialOffer.redeemedAt) {
                    const intl4 = intl12.intl;
                    formatToPlainStringResult1 = intl4.string(intl12.t["9SNdf4"]);
                  }
                }
                if (!(id2 === id1 && everyResult)) {
                  if (null == relevantUserTrialOffer.redeemedAt) {
                    let formatToParts2Result;
                    if (id !== id) {
                      const intl5 = intl12.intl;
                      const formatToParts2 = intl5.formatToParts;
                      const tmp46Result12 = MetaQuestUtils;
                      const isMetaQuestResult = tmp46Result12.isMetaQuest();
                      const t = intl12.t;
                      const obj12 = { helpdeskArticle: obj13 };
                      obj13 = {
                        action: "bindOpenUrl",
                        url: tmp49Result9.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM),
                      };
                      const tmp27 = isMetaQuestResult ? t.yqX4Dr : t["7O7Zg3"];
                      tmp49Result9 = HelpdeskUtilsDefault;
                      formatToParts2Result = formatToParts2(tmp27, obj12);
                    }
                    formatToPartsResult = formatToParts2Result;
                  }
                }
                const intl6 = intl12.intl;
                const formatToParts3 = intl6.formatToParts;
                const obj14 = { helpdeskArticle: obj15, username: name };
                obj15 = { action: "bindOpenUrl", url: tmp49Result10.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM) };
                const mVzEG8 = intl12.t.mVzEG8;
                tmp49Result10 = HelpdeskUtilsDefault;
                formatToParts2Result = formatToParts3(mVzEG8, obj14);
              }
            }
          }
        }
        const obj16 = { bodyText: intl10.string(intl12.t.eEz1N5), bodyTextColor, canBeAccepted: false };
        const merged3 = Object.assign(obj);
        intl10 = intl12.intl;
        return obj16;
      }
    }
  }
};
