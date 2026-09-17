// === Module 8190: ReferralTrialEmbedRedesign ===

// Module 8190 (ReferralTrialEmbedRedesign)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1609 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2025 */;
import PremiumUtils from "PremiumUtils" /* 4297 */;
import UserUtilsDefault from "UserUtils" /* 4484 */;
import createStyles from "createStyles" /* 4640 */;
import ProductIds from "ProductIds" /* 7354 */;
import useTrialOffer from "useTrialOffer" /* 7563 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8082 */;
import _modDef8188 from "module_8188" /* 8188 */;
import _modDef8191 from "module_8191" /* 8191 */;
import ReferralProgramUtils from "ReferralProgramUtils" /* 8192 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import UserStore from "UserStore" /* 1372 */;
import SubscriptionStore from "SubscriptionStore" /* 4303 */;
import UserOfferStore from "UserOfferStore" /* 7564 */;
import IAPStore from "IAPStore" /* 7351 */;

const PremiumUtilsDefault = PremiumUtils;

require = fn;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
let closure_9 = fn(1374).PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbedRedesign.tsx");

export const createReferralTrialEmbedRedesign = function createReferralTrialEmbedRedesign(message, theme, id, relevantUserTrialOffer) {
  if (null != message.author) {
    const obj2 = { titleColor: nativeDefault.colors.TEXT_DEFAULT, headerTextColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, bodyTextColor: nativeDefault.colors.TEXT_SUBTLE, footerTextColor: nativeDefault.colors.TEXT_MUTED, subTextColor: nativeDefault.colors.TEXT_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, acceptLabelColor: nativeDefault.colors.WHITE, linkTextColor: nativeDefault.colors.TEXT_LINK };
    const tmp42 = createStyles.createNativeStyleProperties(obj2)(theme);
    ({ titleColor, headerTextColor, bodyTextColor, backgroundColor } = tmp42);
    ({ footerTextColor, subTextColor, acceptLabelColor, linkTextColor } = tmp42);
    const channel = ChannelStore.getChannel(message.getChannelId());
    if (null != channel) {
      if (channel.isDM()) {
        let userId;
        if (relevantUserTrialOffer != null) {
          userId = relevantUserTrialOffer.userId;
        }
        const user = UserStore.getUser(userId);
        let referrerId;
        if (relevantUserTrialOffer != null) {
          referrerId = relevantUserTrialOffer.referrerId;
        }
        const user1 = UserStore.getUser(referrerId);
        if (null != user) {
          if (null != user1) {
            const name = UserUtilsDefault.getName(user1);
            const intl10 = util.intl;
            const obj3 = { sender: name, helpdeskArticle: null };
            const tmp41Result = UserUtilsDefault;
            obj3.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
            const tmp41Result8 = HelpdeskUtilsDefault;
            const intl11 = util.intl;
            const obj4 = { sender: name, helpdeskArticle: null };
            const obj5 = { action: "bindOpenUrl", url: null, linkColor: null };
            const formatToPlainStringResult = intl10.formatToPlainString(util.t.yisueA, obj3);
            obj5.url = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
            obj5.linkColor = linkTextColor;
            obj4.helpdeskArticle = obj5;
            const obj6 = { titleText: formatToPlainStringResult, titleColor, headerImageUrl: null, headerText: null, headerColor: null, backgroundColor: null, borderColor: null, learnMoreLink: null };
            const tmp41Result9 = HelpdeskUtilsDefault;
            obj6.headerImageUrl = _modDef8191;
            const intl12 = util.intl;
            obj6.headerText = intl12.string(util.t.HtTvXA);
            obj6.headerColor = headerTextColor;
            obj6.backgroundColor = backgroundColor;
            obj6.borderColor = backgroundColor;
            obj6.learnMoreLink = intl11.formatToParts(util.t.yisueA, obj4);
            if (null == relevantUserTrialOffer) {
              const obj7 = {};
              const merged = Object.assign(obj6);
              const intl8 = util.intl;
              obj7.bodyText = intl8.string(util.t.eEz1N5);
              obj7.bodyTextColor = bodyTextColor;
              obj7.canBeAccepted = false;
              return obj7;
            } else {
              const userTrialOffer = UserOfferStore.getUserTrialOffer(closure_9);
              IAPStore.getOfferIds();
              const _Object = Object;
              const values = Object.values(ProductIds.TrialIdToProductOfferId[closure_9]);
              id = undefined;
              if (userTrialOffer != null) {
                id = userTrialOffer.id;
              }
              const tmp7 = relevantUserTrialOffer.id === id && values.every((item) => set.has(item));
              const everyResult = values.every((item) => set.has(item));
              const isPremiumResult = PremiumUtilsDefault.isPremium(user);
              let tmp10 = isPremiumResult;
              if (!isPremiumResult) {
                tmp10 = isPremiumResult;
                if (user.id === id) {
                  tmp10 = null != SubscriptionStore.getPremiumTypeSubscription();
                }
              }
              const tmp41Result10 = PremiumUtilsDefault;
              const result = useTrialOffer.hasUserTrialOfferExpired(relevantUserTrialOffer);
              const tmp39Result = useTrialOffer;
              let tmp15 = null == relevantUserTrialOffer.expiresAt;
              const name1 = UserUtilsDefault.getName(user);
              if (!tmp15) {
                tmp15 = result;
              }
              if (!tmp15) {
                tmp15 = tmp10;
              }
              if (!tmp15) {
                tmp15 = tmp14;
              }
              if (!tmp15) {
                const expiresAt = relevantUserTrialOffer.expiresAt;
                const referralTrialOfferExpirationCopy = ReferralProgramUtils.getReferralTrialOfferExpirationCopy(expiresAt.getTime());
                const intl = util.intl;
                const tmp39Result5 = ReferralProgramUtils;
                const subscriptionTrial = relevantUserTrialOffer.subscriptionTrial;
                let interval;
                if (subscriptionTrial != null) {
                  interval = subscriptionTrial.interval;
                }
                const obj8 = { intervalType: interval, intervalCount: null };
                const subscriptionTrial2 = relevantUserTrialOffer.subscriptionTrial;
                let intervalCount;
                if (subscriptionTrial2 != null) {
                  intervalCount = subscriptionTrial2.intervalCount;
                }
                const obj9 = { duration: null };
                obj8.intervalCount = intervalCount;
                obj9.duration = PremiumUtils.formatIntervalDuration(obj8);
                const tmp39Result6 = PremiumUtils;
                const replaced = intl.formatToPlainString(util.t.uj94C5, obj9).replace(/\*/g, "");
                const str = intl.formatToPlainString(util.t.uj94C5, obj9);
                const tmp17 = referralTrialOfferExpirationCopy;
              }
              if (tmp10) {
                if (!tmp21) {
                  if (!tmp14) {
                    const intl2 = util.intl;
                    const obj10 = { helpdeskArticle: null };
                    const obj11 = { action: "bindOpenUrl", url: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM) };
                    obj10.helpdeskArticle = obj11;
                    let formatToPartsResult1 = intl2.formatToParts(util.t.LwCwT9, obj10);
                    const tmp41Result12 = HelpdeskUtilsDefault;
                  }
                  let tmp27 = !result;
                  if (!result) {
                    tmp27 = !tmp10;
                  }
                  if (tmp27) {
                    tmp27 = tmp7;
                  }
                  if (tmp27) {
                    tmp27 = !tmp21;
                  }
                  const obj12 = {};
                  const merged1 = Object.assign(obj6);
                  obj12.bodyText = formatToPlainStringResult1;
                  obj12.structuredBodyText = formatToPartsResult1;
                  obj12.bodyTextColor = bodyTextColor;
                  obj12.subText = tmp17;
                  obj12.subTextColor = subTextColor;
                  obj12.canBeAccepted = tmp27;
                  let tmp31 = obj12;
                  if (tmp27) {
                    const obj13 = {};
                    const merged2 = Object.assign(obj12);
                    obj13.footerText = replaced;
                    obj13.footerTextColor = footerTextColor;
                    obj13.canBeAccepted = tmp27;
                    const intl7 = util.intl;
                    obj13.acceptLabelText = intl7.string(util.t.bXTClc);
                    obj13.acceptLabelColor = acceptLabelColor;
                    obj13.acceptLabelIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8188);
                    tmp31 = obj13;
                    const tmp39Result7 = renderer_EmbedUtils;
                  }
                  return tmp31;
                }
              }
              if (tmp10) {
                const intl6 = util.intl;
                const obj14 = { username: name1 };
                formatToPlainStringResult1 = intl6.formatToPlainString(util.t["Mptau/"], obj14);
              } else {
                if (result) {
                  if (!tmp14) {
                    const intl3 = util.intl;
                    formatToPlainStringResult1 = intl3.string(util.t["9SNdf4"]);
                  }
                }
                if (!tmp7) {
                  if (!tmp14) {
                    if (!tmp21) {
                      const intl4 = util.intl;
                      const tmp39Result8 = MetaQuestUtils;
                      const t = util.t;
                      const obj15 = { helpdeskArticle: null };
                      const obj16 = { action: "bindOpenUrl", url: null };
                      const isMetaQuestResult = MetaQuestUtils.isMetaQuest();
                      const tmp25 = MetaQuestUtils.isMetaQuest() ? t.yqX4Dr : t["7O7Zg3"];
                      obj16.url = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
                      obj15.helpdeskArticle = obj16;
                      let formatToPartsResult2 = intl4.formatToParts(tmp25, obj15);
                      const tmp41Result13 = HelpdeskUtilsDefault;
                    }
                    formatToPartsResult1 = formatToPartsResult2;
                  }
                }
                const intl5 = util.intl;
                const obj17 = { helpdeskArticle: null, username: null };
                const obj18 = { action: "bindOpenUrl", url: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM) };
                obj17.helpdeskArticle = obj18;
                obj17.username = name;
                formatToPartsResult2 = intl5.formatToParts(util.t.mVzEG8, obj17);
                const tmp41Result14 = HelpdeskUtilsDefault;
              }
              const tmp41Result11 = UserUtilsDefault;
            }
            const formatToPartsResult = intl11.formatToParts(util.t.yisueA, obj4);
          }
        }
        const obj19 = { titleText: "", titleColor, headerImageUrl: _modDef8191, headerText: "", headerColor: headerTextColor, backgroundColor, borderColor: backgroundColor, bodyText: null, bodyTextColor: null, canBeAccepted: false };
        const intl9 = util.intl;
        obj19.bodyText = intl9.string(util.t.eEz1N5);
        obj19.bodyTextColor = bodyTextColor;
        return obj19;
      }
    }
  }
};