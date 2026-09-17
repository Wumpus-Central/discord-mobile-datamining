// === Module 8204: ReferralTrialEmbed ===

// Module 8204 (ReferralTrialEmbed)
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
import ReferralProgramUtils from "ReferralProgramUtils" /* 8192 */;
import _modDef8205 from "module_8205" /* 8205 */;
import _modDef8206 from "module_8206" /* 8206 */;
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
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbed.tsx");

export const createReferralTrialEmbedRedeemable = function createReferralTrialEmbedRedeemable(message, theme, id, relevantUserTrialOffer) {
  if (null != message.author) {
    const obj2 = { headerTextColor: nativeDefault.colors.WHITE, titleColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, bodyTextColor: nativeDefault.colors.TEXT_DEFAULT, footerTextColor: nativeDefault.colors.TEXT_MUTED, subTextColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, acceptLabelColor: nativeDefault.colors.WHITE };
    const tmp47 = createStyles.createNativeStyleProperties(obj2)(theme);
    ({ titleColor, bodyTextColor, backgroundColor } = tmp47);
    ({ headerTextColor, footerTextColor, subTextColor, acceptLabelColor } = tmp47);
    const channel = ChannelStore.getChannel(message.getChannelId());
    if (null != channel) {
      if (channel.isDM()) {
        const obj = { backgroundColor, borderColor: backgroundColor, thumbnailCornerRadius: 3, headerLogoUrl: renderer_EmbedUtils.getAssetUriForEmbed(_modDef8205), headerText: null, headerColor: null, thumbnailUrl: null };
        const intl = util.intl;
        const tmp44Result = renderer_EmbedUtils;
        obj.headerText = intl.string(util.t.gtNqJQ).toLocaleLowerCase();
        obj.headerColor = headerTextColor;
        const stringResult = intl.string(util.t.gtNqJQ);
        obj.thumbnailUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8206);
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
            const tmp46Result = UserUtilsDefault;
            const name1 = UserUtilsDefault.getName(user);
            const intl11 = util.intl;
            const obj3 = { senderUserName: name, recipientUserName: name1 };
            const formatToPlainStringResult = intl11.formatToPlainString(util.t.IiWKwg, obj3);
            if (null == relevantUserTrialOffer) {
              const obj4 = {};
              const merged = Object.assign(obj);
              obj4.titleText = formatToPlainStringResult;
              obj4.titleColor = titleColor;
              const intl9 = util.intl;
              obj4.bodyText = intl9.string(util.t.eEz1N5);
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
              const tmp46Result7 = PremiumUtilsDefault;
              const result = useTrialOffer.hasUserTrialOfferExpired(relevantUserTrialOffer);
              if (!tmp14) {
                const expiresAt = relevantUserTrialOffer.expiresAt;
                const referralTrialOfferExpirationCopy = ReferralProgramUtils.getReferralTrialOfferExpirationCopy(expiresAt.getTime());
                const intl2 = util.intl;
                const tmp44Result9 = ReferralProgramUtils;
                const subscriptionTrial = relevantUserTrialOffer.subscriptionTrial;
                let interval;
                if (subscriptionTrial != null) {
                  interval = subscriptionTrial.interval;
                }
                const obj6 = { intervalType: interval, intervalCount: null };
                const subscriptionTrial2 = relevantUserTrialOffer.subscriptionTrial;
                let intervalCount;
                if (subscriptionTrial2 != null) {
                  intervalCount = subscriptionTrial2.intervalCount;
                }
                const obj7 = { duration: null };
                obj6.intervalCount = intervalCount;
                obj7.duration = PremiumUtils.formatIntervalDuration(obj6);
                const tmp44Result10 = PremiumUtils;
                const replaced = intl2.formatToPlainString(util.t.uj94C5, obj7).replace(/\*/g, "");
                const str = intl2.formatToPlainString(util.t.uj94C5, obj7);
                const tmp16 = referralTrialOfferExpirationCopy;
              }
              if (tmp10) {
                if (!tmp20) {
                  if (!tmp13) {
                    const intl3 = util.intl;
                    const obj8 = { helpdeskArticle: null };
                    const obj9 = { action: "bindOpenUrl", url: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM) };
                    obj8.helpdeskArticle = obj9;
                    let formatToPartsResult = intl3.formatToParts(util.t.LwCwT9, obj8);
                    const tmp46Result8 = HelpdeskUtilsDefault;
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
                  const obj10 = {};
                  const merged1 = Object.assign(obj);
                  obj10.titleText = formatToPlainStringResult;
                  obj10.titleColor = titleColor;
                  obj10.bodyText = formatToPlainStringResult1;
                  obj10.structuredBodyText = formatToPartsResult;
                  obj10.bodyTextColor = bodyTextColor;
                  obj10.subText = tmp16;
                  obj10.subTextColor = subTextColor;
                  obj10.canBeAccepted = tmp29;
                  let tmp33 = obj10;
                  if (tmp29) {
                    const obj11 = {};
                    const merged2 = Object.assign(obj10);
                    obj11.footerText = replaced;
                    obj11.footerTextColor = footerTextColor;
                    obj11.canBeAccepted = tmp29;
                    const intl8 = util.intl;
                    obj11.acceptLabelText = intl8.string(util.t.bXTClc);
                    obj11.acceptLabelColor = acceptLabelColor;
                    obj11.acceptLabelIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8188);
                    tmp33 = obj11;
                    const tmp44Result11 = renderer_EmbedUtils;
                  }
                  return tmp33;
                }
              }
              if (tmp10) {
                const intl7 = util.intl;
                const obj12 = { username: name1 };
                formatToPlainStringResult1 = intl7.formatToPlainString(util.t["Mptau/"], obj12);
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
                      const tmp44Result12 = MetaQuestUtils;
                      const t = util.t;
                      const obj13 = { helpdeskArticle: null };
                      const obj14 = { action: "bindOpenUrl", url: null };
                      const isMetaQuestResult = MetaQuestUtils.isMetaQuest();
                      const tmp25 = MetaQuestUtils.isMetaQuest() ? t.yqX4Dr : t["7O7Zg3"];
                      obj14.url = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
                      obj13.helpdeskArticle = obj14;
                      let formatToPartsResult1 = intl5.formatToParts(tmp25, obj13);
                      const tmp46Result9 = HelpdeskUtilsDefault;
                    }
                    formatToPartsResult = formatToPartsResult1;
                  }
                }
                const intl6 = util.intl;
                const obj15 = { helpdeskArticle: null, username: null };
                const obj16 = { action: "bindOpenUrl", url: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM) };
                obj15.helpdeskArticle = obj16;
                obj15.username = name;
                formatToPartsResult1 = intl6.formatToParts(util.t.mVzEG8, obj15);
                const tmp46Result10 = HelpdeskUtilsDefault;
              }
              tmp14 = null == relevantUserTrialOffer.expiresAt || result || tmp10 || null != relevantUserTrialOffer.redeemedAt;
              const tmp44Result8 = useTrialOffer;
            }
            const tmp46Result6 = UserUtilsDefault;
          }
        }
        const obj17 = {};
        const merged3 = Object.assign(obj);
        const intl10 = util.intl;
        obj17.bodyText = intl10.string(util.t.eEz1N5);
        obj17.bodyTextColor = bodyTextColor;
        obj17.canBeAccepted = false;
        return obj17;
      }
    }
  }
};