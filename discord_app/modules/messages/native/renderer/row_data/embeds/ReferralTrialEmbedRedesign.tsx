// discord_app/modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbedRedesign.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../../Constants.tsx";
import intl13 from "../../../../../../intl/index.native.tsx";
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
import _modDef7736 from "../../../../../../../discord_assets/assets/premium/referral_program/trialExchange.png.js";
import ReferralProgramUtils from "../../../../../premium/referral_program/ReferralProgramUtils.tsx";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import UserStore from "../../../../../../stores/UserStore.tsx";
import SubscriptionStore from "../../../../../../stores/billing/SubscriptionStore.tsx";
import UserOfferStore from "../../../../../../stores/billing/UserOfferStore.tsx";
import IAPStore from "../../../../../../stores/native/IAPStore.android.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const PremiumUtilsDefault = PremiumUtils;

const HelpdeskArticles = Constants.HelpdeskArticles;
let closure_9 = PremiumConstants.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
let result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbedRedesign.tsx",
);

export const createReferralTrialEmbedRedesign = function createReferralTrialEmbedRedesign(
  message,
  theme,
  id,
  relevantUserTrialOffer,
) {
  let acceptLabelColor;
  let backgroundColor;
  let bodyTextColor;
  let footerTextColor;
  let formatToParts4Result;
  let formatToPlainStringResult;
  let headerTextColor;
  let intervalCount;
  let intl12;
  let intl7;
  let intl8;
  let intl9;
  let linkTextColor;
  let obj10;
  let obj15;
  let obj17;
  let obj4;
  let subTextColor;
  let titleColor;
  let tmp41Result7;
  let tmp44Result12;
  let tmp44Result13;
  let tmp44Result14;
  let tmp44Result8;
  let tmp44Result9;
  if (null != message.author) {
    const obj = {
      titleColor: nativeDefault.colors.TEXT_DEFAULT,
      headerTextColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
      bodyTextColor: nativeDefault.colors.TEXT_SUBTLE,
      footerTextColor: nativeDefault.colors.TEXT_MUTED,
      subTextColor: nativeDefault.colors.TEXT_SUBTLE,
      backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
      acceptLabelColor: nativeDefault.colors.WHITE,
      linkTextColor: nativeDefault.colors.TEXT_LINK,
    };
    const createNativeStyleProperties = createStyles.createNativeStyleProperties;
    createStyles;
    const tmp45 = createNativeStyleProperties(obj)(theme);
    ({ titleColor, headerTextColor, bodyTextColor, backgroundColor } = tmp45);
    ({ footerTextColor, subTextColor, acceptLabelColor, linkTextColor } = tmp45);
    const channel = ChannelStore.getChannel(message.getChannelId());
    if (null != channel) {
      if (channel.isDM()) {
        let userId;
        const getUser = UserStore.getUser;
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
            const tmp44Result = UserUtilsDefault;
            const name = tmp44Result.getName(user2);
            id = user2.id;
            const intl10 = intl13.intl;
            const formatToPlainString2 = intl10.formatToPlainString;
            const obj2 = {
              sender: name,
              helpdeskArticle: tmp44Result8.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM),
            };
            const yisueA = intl13.t.yisueA;
            tmp44Result8 = HelpdeskUtilsDefault;
            const formatToPlainString2Result = formatToPlainString2(yisueA, obj2);
            const intl11 = intl13.intl;
            const formatToParts4 = intl11.formatToParts;
            const obj3 = { sender: name, helpdeskArticle: obj4 };
            obj4 = {
              action: "bindOpenUrl",
              url: tmp44Result9.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM),
              linkColor: linkTextColor,
            };
            const yisueA2 = intl13.t.yisueA;
            tmp44Result9 = HelpdeskUtilsDefault;
            const obj5 = {
              titleText: formatToPlainString2Result,
              titleColor,
              headerImageUrl: _modDef7736,
              headerText: intl12.string(intl13.t.HtTvXA),
              headerColor: headerTextColor,
              backgroundColor,
              borderColor: backgroundColor,
              learnMoreLink: formatToParts4Result,
            };
            formatToParts4Result = formatToParts4(yisueA2, obj3);
            intl12 = intl13.intl;
            if (null == relevantUserTrialOffer) {
              const obj6 = { bodyText: intl8.string(intl13.t.eEz1N5), bodyTextColor, canBeAccepted: false };
              const merged = Object.assign(obj5);
              intl8 = intl13.intl;
              return obj6;
            } else {
              let replaced;
              let tmp18;
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
              const tmp44Result10 = PremiumUtilsDefault;
              const isPremiumResult = tmp44Result10.isPremium(user);
              let tmp11 = isPremiumResult;
              if (!tmp11) {
                tmp11 = isPremiumResult;
                if (user.id === id) {
                  tmp11 = null != SubscriptionStore.getPremiumTypeSubscription();
                }
              }
              const tmp41Result = useTrialOffer;
              const result = tmp41Result.hasUserTrialOfferExpired(relevantUserTrialOffer);
              let tmp16 = null == relevantUserTrialOffer.expiresAt;
              const tmp44Result11 = UserUtilsDefault;
              const name1 = tmp44Result11.getName(user);
              if (!tmp16) {
                tmp16 = result;
              }
              if (!tmp16) {
                tmp16 = tmp11;
              }
              if (!tmp16) {
                tmp16 = tmp15;
              }
              if (!tmp16) {
                const expiresAt = relevantUserTrialOffer.expiresAt;
                const tmp41Result5 = ReferralProgramUtils;
                const referralTrialOfferExpirationCopy = tmp41Result5.getReferralTrialOfferExpirationCopy(
                  expiresAt.getTime(),
                );
                const intl = intl13.intl;
                const formatToPlainString = intl.formatToPlainString;
                const uj94C5 = intl13.t.uj94C5;
                const subscriptionTrial = relevantUserTrialOffer.subscriptionTrial;
                let interval;
                const formatIntervalDuration = PremiumUtils.formatIntervalDuration;
                PremiumUtils;
                if (subscriptionTrial != null) {
                  interval = subscriptionTrial.interval;
                }
                const subscriptionTrial2 = relevantUserTrialOffer.subscriptionTrial;
                const obj7 = { intervalType: interval, intervalCount };
                intervalCount = undefined;
                if (subscriptionTrial2 != null) {
                  intervalCount = subscriptionTrial2.intervalCount;
                }
                const obj8 = { duration: formatIntervalDuration(obj7) };
                const str = formatToPlainString(uj94C5, obj8);
                replaced = str.replace(/\*/g, "");
                tmp18 = referralTrialOfferExpirationCopy;
              }
              if (tmp11) {
                if (id !== id) {
                  if (null == relevantUserTrialOffer.redeemedAt) {
                    const intl2 = intl13.intl;
                    const formatToParts = intl2.formatToParts;
                    const obj9 = { helpdeskArticle: obj10 };
                    obj10 = {
                      action: "bindOpenUrl",
                      url: tmp44Result12.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM),
                    };
                    const LwCwT9 = intl13.t.LwCwT9;
                    tmp44Result12 = HelpdeskUtilsDefault;
                    formatToPartsResult = formatToParts(LwCwT9, obj9);
                  }
                  const obj11 = {
                    bodyText: formatToPlainStringResult,
                    structuredBodyText: formatToPartsResult,
                    bodyTextColor,
                    subText: tmp18,
                    subTextColor,
                    canBeAccepted: !result && !tmp11 && id2 === id1 && everyResult && id !== id,
                  };
                  const merged1 = Object.assign(obj5);
                  let tmp33 = obj11;
                  if (!result && !tmp11 && id2 === id1 && everyResult && id !== id) {
                    const obj12 = {
                      footerText: replaced,
                      footerTextColor,
                      canBeAccepted: !result && !tmp11 && id2 === id1 && everyResult && id !== id,
                      acceptLabelText: intl7.string(intl13.t.bXTClc),
                      acceptLabelColor,
                      acceptLabelIconUrl: tmp41Result7.getAssetUriForEmbed(AssetRegistryDefault),
                    };
                    const merged2 = Object.assign(obj11);
                    intl7 = intl13.intl;
                    tmp33 = obj12;
                    tmp41Result7 = renderer_EmbedUtils;
                  }
                  return tmp33;
                }
              }
              if (tmp11) {
                const intl6 = intl13.intl;
                const obj13 = { username: name1 };
                formatToPlainStringResult = intl6.formatToPlainString(intl13.t["Mptau/"], obj13);
              } else {
                if (result) {
                  if (null == relevantUserTrialOffer.redeemedAt) {
                    const intl3 = intl13.intl;
                    formatToPlainStringResult = intl3.string(intl13.t["9SNdf4"]);
                  }
                }
                if (!(id2 === id1 && everyResult)) {
                  if (null == relevantUserTrialOffer.redeemedAt) {
                    let formatToParts2Result;
                    if (id !== id) {
                      const intl4 = intl13.intl;
                      const formatToParts2 = intl4.formatToParts;
                      const tmp41Result8 = MetaQuestUtils;
                      const isMetaQuestResult = tmp41Result8.isMetaQuest();
                      const t = intl13.t;
                      const obj14 = { helpdeskArticle: obj15 };
                      obj15 = {
                        action: "bindOpenUrl",
                        url: tmp44Result13.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM),
                      };
                      const tmp27 = isMetaQuestResult ? t.yqX4Dr : t["7O7Zg3"];
                      tmp44Result13 = HelpdeskUtilsDefault;
                      formatToParts2Result = formatToParts2(tmp27, obj14);
                    }
                    formatToPartsResult = formatToParts2Result;
                  }
                }
                const intl5 = intl13.intl;
                const formatToParts3 = intl5.formatToParts;
                const obj16 = { helpdeskArticle: obj17, username: name };
                obj17 = { action: "bindOpenUrl", url: tmp44Result14.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM) };
                const mVzEG8 = intl13.t.mVzEG8;
                tmp44Result14 = HelpdeskUtilsDefault;
                formatToParts2Result = formatToParts3(mVzEG8, obj16);
              }
            }
          }
        }
        const obj18 = {
          titleText: "",
          titleColor,
          headerImageUrl: _modDef7736,
          headerText: "",
          headerColor: headerTextColor,
          backgroundColor,
          borderColor: backgroundColor,
          bodyText: intl9.string(intl13.t.eEz1N5),
          bodyTextColor,
          canBeAccepted: false,
        };
        intl9 = intl13.intl;
        return obj18;
      }
    }
  }
};
