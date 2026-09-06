// === Module 8053: ReferralTrialEmbedRedesign ===

// Module 8053 (ReferralTrialEmbedRedesign)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import PremiumUtils from "PremiumUtils" /* 4218 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import createStyles from "createStyles" /* 4560 */;
import ProductIds from "ProductIds" /* 7240 */;
import useTrialOffer from "useTrialOffer" /* 7449 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7946 */;
import _modDef8051 from "module_8051" /* 8051 */;
import _modDef8054 from "module_8054" /* 8054 */;
import ReferralProgramUtils from "ReferralProgramUtils" /* 8055 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserStore from "UserStore" /* 1371 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;
import UserOfferStore from "UserOfferStore" /* 7450 */;
import IAPStore from "IAPStore" /* 7237 */;

const PremiumUtilsDefault = PremiumUtils;

require = fn;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
let closure_9 = fn(1373).PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbedRedesign.tsx");

export const createReferralTrialEmbedRedesign = function createReferralTrialEmbedRedesign(message, theme, id, relevantUserTrialOffer) {
  if (null != message.author) {
    let obj = { titleColor: nativeDefault.colors.TEXT_DEFAULT, headerTextColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, bodyTextColor: nativeDefault.colors.TEXT_SUBTLE, footerTextColor: nativeDefault.colors.TEXT_MUTED, subTextColor: nativeDefault.colors.TEXT_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, acceptLabelColor: nativeDefault.colors.WHITE, linkTextColor: nativeDefault.colors.TEXT_LINK };
    const tmp42 = createStyles.createNativeStyleProperties(obj)(theme);
    ({ titleColor, headerTextColor, bodyTextColor, backgroundColor } = tmp42);
    ({ footerTextColor, subTextColor, acceptLabelColor, linkTextColor } = tmp42);
    const channel = ChannelStore.getChannel(message.getChannelId());
    if (null != channel) {
      if (channel.isDM()) {
        obj = UserStore;
        let userId;
        if (relevantUserTrialOffer != null) {
          userId = relevantUserTrialOffer.userId;
        }
        const user = UserStore.getUser(userId);
        let referrerId;
        if (relevantUserTrialOffer != null) {
          referrerId = relevantUserTrialOffer.referrerId;
        }
        const user1 = obj.getUser(referrerId);
        if (null != user) {
          if (null != user1) {
            let tmp41Result = UserUtilsDefault;
            const name = tmp41Result.getName(user1);
            const intl10 = util.intl;
            obj = { sender: name, helpdeskArticle: null };
            tmp41Result = HelpdeskUtilsDefault;
            obj.helpdeskArticle = tmp41Result.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
            const intl11 = util.intl;
            const obj1 = { sender: name, helpdeskArticle: null };
            const obj2 = { action: "bindOpenUrl", url: null, linkColor: null };
            const formatToPlainStringResult = intl10.formatToPlainString(util.t.yisueA, obj);
            obj2.url = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
            obj2.linkColor = linkTextColor;
            obj1.helpdeskArticle = obj2;
            const obj3 = { titleText: formatToPlainStringResult, titleColor, headerImageUrl: null, headerText: null, headerColor: null, backgroundColor: null, borderColor: null, learnMoreLink: null };
            const tmp41Result1 = HelpdeskUtilsDefault;
            obj3.headerImageUrl = _modDef8054;
            const intl12 = util.intl;
            obj3.headerText = intl12.string(util.t.HtTvXA);
            obj3.headerColor = headerTextColor;
            obj3.backgroundColor = backgroundColor;
            obj3.borderColor = backgroundColor;
            obj3.learnMoreLink = intl11.formatToParts(util.t.yisueA, obj1);
            if (null == relevantUserTrialOffer) {
              const obj4 = {};
              const merged = Object.assign(obj3);
              const intl8 = util.intl;
              obj4.bodyText = intl8.string(util.t.eEz1N5);
              obj4.bodyTextColor = bodyTextColor;
              obj4.canBeAccepted = false;
              return obj4;
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
              let tmp39Result = useTrialOffer;
              const result = tmp39Result.hasUserTrialOfferExpired(relevantUserTrialOffer);
              const tmp41Result2 = PremiumUtilsDefault;
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
                tmp39Result = ReferralProgramUtils;
                const expiresAt = relevantUserTrialOffer.expiresAt;
                const referralTrialOfferExpirationCopy = tmp39Result.getReferralTrialOfferExpirationCopy(expiresAt.getTime());
                const intl = util.intl;
                const subscriptionTrial = relevantUserTrialOffer.subscriptionTrial;
                let interval;
                if (subscriptionTrial != null) {
                  interval = subscriptionTrial.interval;
                }
                const obj5 = { intervalType: interval, intervalCount: null };
                const subscriptionTrial2 = relevantUserTrialOffer.subscriptionTrial;
                let intervalCount;
                if (subscriptionTrial2 != null) {
                  intervalCount = subscriptionTrial2.intervalCount;
                }
                const obj6 = { duration: null };
                obj5.intervalCount = intervalCount;
                obj6.duration = PremiumUtils.formatIntervalDuration(obj5);
                const tmp39Result1 = PremiumUtils;
                const replaced = intl.formatToPlainString(util.t.uj94C5, obj6).replace(/\*/g, "");
                const str = intl.formatToPlainString(util.t.uj94C5, obj6);
                const tmp17 = referralTrialOfferExpirationCopy;
              }
              if (tmp10) {
                if (!tmp21) {
                  if (!tmp14) {
                    const intl2 = util.intl;
                    const obj7 = { helpdeskArticle: null };
                    const obj8 = { action: "bindOpenUrl", url: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM) };
                    obj7.helpdeskArticle = obj8;
                    let formatToPartsResult1 = intl2.formatToParts(util.t.LwCwT9, obj7);
                    const tmp41Result4 = HelpdeskUtilsDefault;
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
                  const obj9 = {};
                  const merged1 = Object.assign(obj3);
                  obj9.bodyText = formatToPlainStringResult1;
                  obj9.structuredBodyText = formatToPartsResult1;
                  obj9.bodyTextColor = bodyTextColor;
                  obj9.subText = tmp17;
                  obj9.subTextColor = subTextColor;
                  obj9.canBeAccepted = tmp27;
                  let tmp31 = obj9;
                  if (tmp27) {
                    const obj10 = {};
                    const merged2 = Object.assign(obj9);
                    obj10.footerText = replaced;
                    obj10.footerTextColor = footerTextColor;
                    obj10.canBeAccepted = tmp27;
                    const intl7 = util.intl;
                    obj10.acceptLabelText = intl7.string(util.t.bXTClc);
                    obj10.acceptLabelColor = acceptLabelColor;
                    obj10.acceptLabelIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8051);
                    tmp31 = obj10;
                    const tmp39Result2 = renderer_EmbedUtils;
                  }
                  return tmp31;
                }
              }
              if (tmp10) {
                const intl6 = util.intl;
                const obj11 = { username: name1 };
                formatToPlainStringResult1 = intl6.formatToPlainString(util.t["Mptau/"], obj11);
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
                      const tmp39Result3 = MetaQuestUtils;
                      const t = util.t;
                      const obj12 = { helpdeskArticle: null };
                      const obj13 = { action: "bindOpenUrl", url: null };
                      const isMetaQuestResult = MetaQuestUtils.isMetaQuest();
                      const tmp25 = MetaQuestUtils.isMetaQuest() ? t.yqX4Dr : t["7O7Zg3"];
                      obj13.url = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
                      obj12.helpdeskArticle = obj13;
                      let formatToPartsResult2 = intl4.formatToParts(tmp25, obj12);
                      const tmp41Result5 = HelpdeskUtilsDefault;
                    }
                    formatToPartsResult1 = formatToPartsResult2;
                  }
                }
                const intl5 = util.intl;
                const obj14 = { helpdeskArticle: null, username: null };
                const obj15 = { action: "bindOpenUrl", url: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM) };
                obj14.helpdeskArticle = obj15;
                obj14.username = name;
                formatToPartsResult2 = intl5.formatToParts(util.t.mVzEG8, obj14);
                const tmp41Result6 = HelpdeskUtilsDefault;
              }
              const tmp41Result3 = UserUtilsDefault;
            }
            const formatToPartsResult = intl11.formatToParts(util.t.yisueA, obj1);
          }
        }
        const obj16 = { titleText: "", titleColor, headerImageUrl: _modDef8054, headerText: "", headerColor: headerTextColor, backgroundColor, borderColor: backgroundColor, bodyText: null, bodyTextColor: null, canBeAccepted: false };
        const intl9 = util.intl;
        obj16.bodyText = intl9.string(util.t.eEz1N5);
        obj16.bodyTextColor = bodyTextColor;
        return obj16;
      }
    }
  }
};