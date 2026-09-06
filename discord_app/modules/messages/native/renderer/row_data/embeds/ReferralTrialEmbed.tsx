// === Module 8067: ReferralTrialEmbed ===

// Module 8067 (ReferralTrialEmbed)
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
import ReferralProgramUtils from "ReferralProgramUtils" /* 8055 */;
import _modDef8068 from "module_8068" /* 8068 */;
import _modDef8069 from "module_8069" /* 8069 */;
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
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbed.tsx");

export const createReferralTrialEmbedRedeemable = function createReferralTrialEmbedRedeemable(message, theme, id, relevantUserTrialOffer) {
  if (null != message.author) {
    let obj = { headerTextColor: nativeDefault.colors.WHITE, titleColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, bodyTextColor: nativeDefault.colors.TEXT_DEFAULT, footerTextColor: nativeDefault.colors.TEXT_MUTED, subTextColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, acceptLabelColor: nativeDefault.colors.WHITE };
    const tmp47 = createStyles.createNativeStyleProperties(obj)(theme);
    ({ titleColor, bodyTextColor, backgroundColor } = tmp47);
    ({ headerTextColor, footerTextColor, subTextColor, acceptLabelColor } = tmp47);
    const channel = ChannelStore.getChannel(message.getChannelId());
    if (null != channel) {
      if (channel.isDM()) {
        obj = { backgroundColor, borderColor: backgroundColor, thumbnailCornerRadius: 3, headerLogoUrl: null, headerText: null, headerColor: null, thumbnailUrl: null };
        let tmp44Result = renderer_EmbedUtils;
        obj.headerLogoUrl = tmp44Result.getAssetUriForEmbed(_modDef8068);
        const intl = util.intl;
        obj.headerText = intl.string(util.t.gtNqJQ).toLocaleLowerCase();
        obj.headerColor = headerTextColor;
        tmp44Result = renderer_EmbedUtils;
        obj.thumbnailUrl = tmp44Result.getAssetUriForEmbed(_modDef8069);
        let obj4 = UserStore;
        let userId;
        if (relevantUserTrialOffer != null) {
          userId = relevantUserTrialOffer.userId;
        }
        const user = UserStore.getUser(userId);
        let referrerId;
        if (relevantUserTrialOffer != null) {
          referrerId = relevantUserTrialOffer.referrerId;
        }
        const user1 = obj4.getUser(referrerId);
        if (null != user) {
          if (null != user1) {
            let tmp46Result = UserUtilsDefault;
            const name = tmp46Result.getName(user1);
            tmp46Result = UserUtilsDefault;
            const name1 = tmp46Result.getName(user);
            const intl11 = util.intl;
            obj = { senderUserName: name, recipientUserName: name1 };
            const formatToPlainStringResult = intl11.formatToPlainString(util.t.IiWKwg, obj);
            if (null == relevantUserTrialOffer) {
              const obj1 = {};
              const merged = Object.assign(obj);
              obj1.titleText = formatToPlainStringResult;
              obj1.titleColor = titleColor;
              const intl9 = util.intl;
              obj1.bodyText = intl9.string(util.t.eEz1N5);
              obj1.bodyTextColor = bodyTextColor;
              obj1.canBeAccepted = false;
              return obj1;
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
              const tmp46Result1 = PremiumUtilsDefault;
              const result = useTrialOffer.hasUserTrialOfferExpired(relevantUserTrialOffer);
              if (!tmp14) {
                const expiresAt = relevantUserTrialOffer.expiresAt;
                const referralTrialOfferExpirationCopy = ReferralProgramUtils.getReferralTrialOfferExpirationCopy(expiresAt.getTime());
                const intl2 = util.intl;
                const tmp44Result2 = ReferralProgramUtils;
                const subscriptionTrial = relevantUserTrialOffer.subscriptionTrial;
                let interval;
                if (subscriptionTrial != null) {
                  interval = subscriptionTrial.interval;
                }
                const obj2 = { intervalType: interval, intervalCount: null };
                const subscriptionTrial2 = relevantUserTrialOffer.subscriptionTrial;
                let intervalCount;
                if (subscriptionTrial2 != null) {
                  intervalCount = subscriptionTrial2.intervalCount;
                }
                const obj3 = { duration: null };
                obj2.intervalCount = intervalCount;
                obj3.duration = PremiumUtils.formatIntervalDuration(obj2);
                const tmp44Result3 = PremiumUtils;
                const replaced = intl2.formatToPlainString(util.t.uj94C5, obj3).replace(/\*/g, "");
                const str = intl2.formatToPlainString(util.t.uj94C5, obj3);
                const tmp16 = referralTrialOfferExpirationCopy;
              }
              if (tmp10) {
                if (!tmp20) {
                  if (!tmp13) {
                    const intl3 = util.intl;
                    obj4 = { helpdeskArticle: null };
                    const obj5 = { action: "bindOpenUrl", url: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM) };
                    obj4.helpdeskArticle = obj5;
                    let formatToPartsResult = intl3.formatToParts(util.t.LwCwT9, obj4);
                    const tmp46Result2 = HelpdeskUtilsDefault;
                  }
                  let tmp29 = !result;
                  if (!result) {
                    tmp29 = !tmp10;
                  }
                  if (tmp29) {
                    tmp29 = tmp7;
                  }
                  if (tmp29) {
                    tmp29 = !tmp20;
                  }
                  const obj6 = {};
                  const merged1 = Object.assign(obj);
                  obj6.titleText = formatToPlainStringResult;
                  obj6.titleColor = titleColor;
                  obj6.bodyText = formatToPlainStringResult1;
                  obj6.structuredBodyText = formatToPartsResult;
                  obj6.bodyTextColor = bodyTextColor;
                  obj6.subText = tmp16;
                  obj6.subTextColor = subTextColor;
                  obj6.canBeAccepted = tmp29;
                  let tmp33 = obj6;
                  if (tmp29) {
                    const obj7 = {};
                    const merged2 = Object.assign(obj6);
                    obj7.footerText = replaced;
                    obj7.footerTextColor = footerTextColor;
                    obj7.canBeAccepted = tmp29;
                    const intl8 = util.intl;
                    obj7.acceptLabelText = intl8.string(util.t.bXTClc);
                    obj7.acceptLabelColor = acceptLabelColor;
                    obj7.acceptLabelIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8051);
                    tmp33 = obj7;
                    const tmp44Result4 = renderer_EmbedUtils;
                  }
                  return tmp33;
                }
              }
              if (tmp10) {
                const intl7 = util.intl;
                const obj8 = { username: name1 };
                formatToPlainStringResult1 = intl7.formatToPlainString(util.t["Mptau/"], obj8);
              } else {
                if (result) {
                  if (!tmp13) {
                    const intl4 = util.intl;
                    formatToPlainStringResult1 = intl4.string(util.t["9SNdf4"]);
                  }
                }
                if (!tmp7) {
                  if (!tmp13) {
                    if (!tmp20) {
                      const intl5 = util.intl;
                      const tmp44Result5 = MetaQuestUtils;
                      const t = util.t;
                      const obj9 = { helpdeskArticle: null };
                      const obj10 = { action: "bindOpenUrl", url: null };
                      const isMetaQuestResult = MetaQuestUtils.isMetaQuest();
                      const tmp25 = MetaQuestUtils.isMetaQuest() ? t.yqX4Dr : t["7O7Zg3"];
                      obj10.url = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
                      obj9.helpdeskArticle = obj10;
                      let formatToPartsResult1 = intl5.formatToParts(tmp25, obj9);
                      const tmp46Result3 = HelpdeskUtilsDefault;
                    }
                    formatToPartsResult = formatToPartsResult1;
                  }
                }
                const intl6 = util.intl;
                const obj11 = { helpdeskArticle: null, username: null };
                const obj12 = { action: "bindOpenUrl", url: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM) };
                obj11.helpdeskArticle = obj12;
                obj11.username = name;
                formatToPartsResult1 = intl6.formatToParts(util.t.mVzEG8, obj11);
                const tmp46Result4 = HelpdeskUtilsDefault;
              }
              tmp14 = null == relevantUserTrialOffer.expiresAt || result || tmp10 || null != relevantUserTrialOffer.redeemedAt;
              const tmp44Result1 = useTrialOffer;
            }
          }
        }
        const obj13 = {};
        const merged3 = Object.assign(obj);
        const intl10 = util.intl;
        obj13.bodyText = intl10.string(util.t.eEz1N5);
        obj13.bodyTextColor = bodyTextColor;
        obj13.canBeAccepted = false;
        return obj13;
      }
    }
  }
};