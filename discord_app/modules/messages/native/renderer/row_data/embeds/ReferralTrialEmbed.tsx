import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";
import reset from "reset";
import emitChanges from "emitChanges";
import updateProduct from "updateProduct";
import { HelpdeskArticles } from "ME";
import { PREMIUM_TIER_2_REFERRAL_TRIAL_ID as closure_9 } from "GuildFeatures";

const require = arg1;
let result = require("reset").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbed.tsx");

export const createReferralTrialEmbedRedeemable = function createReferralTrialEmbedRedeemable(message, theme, id, relevantUserTrialOffer) {
  let acceptLabelColor;
  let backgroundColor;
  let bodyTextColor;
  let footerTextColor;
  let headerTextColor;
  let subTextColor;
  let titleColor;
  if (null != message.author) {
    let obj = { headerTextColor: null, titleColor: null, bodyTextColor: null, footerTextColor: null, subTextColor: null, backgroundColor: null, acceptLabelColor: null };
    obj[0] = importDefault(712).colors.WHITE;
    obj[1] = importDefault(712).colors.MOBILE_TEXT_HEADING_PRIMARY;
    obj[2] = importDefault(712).colors.TEXT_DEFAULT;
    obj[3] = importDefault(712).colors.TEXT_MUTED;
    obj[4] = importDefault(712).colors.INTERACTIVE_TEXT_DEFAULT;
    obj[5] = importDefault(712).colors.BACKGROUND_MOD_NORMAL;
    obj[6] = importDefault(712).colors.WHITE;
    const tmp47 = _require(4193).createNativeStyleProperties(obj)(theme);
    ({ titleColor, bodyTextColor, backgroundColor } = tmp47);
    ({ headerTextColor, footerTextColor, subTextColor, acceptLabelColor } = tmp47);
    channel = channel.getChannel(message.getChannelId());
    if (null != channel) {
      if (channel.isDM()) {
        obj = { backgroundColor: null, borderColor: null, thumbnailCornerRadius: 3, headerLogoUrl: null, headerText: null, headerColor: null, thumbnailUrl: null };
        obj[0] = backgroundColor;
        obj[1] = backgroundColor;
        let tmp44Result = tmp44(7734);
        obj[3] = tmp44Result.getAssetUriForEmbed(tmp46(6316));
        const intl = tmp44(1236).intl;
        obj[4] = intl.string(tmp44(1236).t.gtNqJQ).toLocaleLowerCase();
        obj[5] = headerTextColor;
        tmp44Result = tmp44(7734);
        obj[6] = tmp44Result.getAssetUriForEmbed(tmp46(7849));
        let obj4 = user;
        let user_id;
        if (relevantUserTrialOffer != null) {
          user_id = relevantUserTrialOffer.user_id;
        }
        user = user.getUser(user_id);
        let referrer_id;
        if (relevantUserTrialOffer != null) {
          referrer_id = relevantUserTrialOffer.referrer_id;
        }
        const user1 = obj4.getUser(referrer_id);
        if (null != user) {
          if (null != user1) {
            let tmp46Result = tmp46(4032);
            const name = tmp46Result.getName(user1);
            tmp46Result = tmp46(4032);
            const name1 = tmp46Result.getName(user);
            const intl11 = tmp44(1236).intl;
            obj = { senderUserName: null, recipientUserName: null };
            obj[0] = name;
            obj[1] = name1;
            const formatToPlainStringResult = intl11.formatToPlainString(tmp44(1236).t.IiWKwg, obj);
            if (null == relevantUserTrialOffer) {
              const obj1 = {};
              const merged = Object.assign(obj);
              obj1.titleText = formatToPlainStringResult;
              obj1.titleColor = titleColor;
              const intl9 = tmp44(1236).intl;
              obj1.bodyText = intl9.string(tmp44(1236).t.eEz1N5);
              obj1.bodyTextColor = bodyTextColor;
              obj1.canBeAccepted = false;
              return obj1;
            } else {
              userTrialOffer = userTrialOffer.getUserTrialOffer(closure_9);
              _require = undefined;
              _require = offerIds.getOfferIds();
              const _Object = Object;
              const values = Object.values(tmp44(5679).TrialIdToProductOfferId[closure_9]);
              id = undefined;
              if (userTrialOffer != null) {
                id = userTrialOffer.id;
              }
              const tmp7 = relevantUserTrialOffer.id === id && values.every((arg0) => set.has(arg0));
              const everyResult = values.every((arg0) => set.has(arg0));
              const isPremiumResult = tmp46(3839).isPremium(user);
              let tmp10 = isPremiumResult;
              if (!isPremiumResult) {
                tmp10 = isPremiumResult;
                if (user.id === id) {
                  tmp10 = null != premiumTypeSubscription.getPremiumTypeSubscription();
                }
              }
              const tmp46Result1 = tmp46(3839);
              const result = tmp44(6247).hasUserTrialOfferExpired(relevantUserTrialOffer);
              if (!tmp14) {
                const _Date = Date;
                const referralTrialOfferExpirationCopy = tmp44(7841).getReferralTrialOfferExpirationCopy(Date.parse(relevantUserTrialOffer.expires_at));
                const intl2 = tmp44(1236).intl;
                const tmp44Result2 = tmp44(7841);
                const subscription_trial = relevantUserTrialOffer.subscription_trial;
                let interval;
                if (subscription_trial != null) {
                  interval = subscription_trial.interval;
                }
                const obj2 = { intervalType: null, intervalCount: null };
                obj2[0] = interval;
                const subscription_trial2 = relevantUserTrialOffer.subscription_trial;
                let interval_count;
                if (subscription_trial2 != null) {
                  interval_count = subscription_trial2.interval_count;
                }
                const obj3 = { duration: null };
                obj2[1] = interval_count;
                obj3[0] = tmp44(3839).formatIntervalDuration(obj2);
                const tmp44Result3 = tmp44(3839);
                const replaced = intl2.formatToPlainString(tmp44(1236).t.uj94C5, obj3).replace(/\*/g, "");
                const str = intl2.formatToPlainString(tmp44(1236).t.uj94C5, obj3);
                const tmp16 = referralTrialOfferExpirationCopy;
              }
              if (tmp10) {
                if (!tmp20) {
                  if (!tmp13) {
                    const intl3 = tmp44(1236).intl;
                    obj4 = { helpdeskArticle: null };
                    const obj5 = { action: "bindOpenUrl", url: null };
                    obj5[1] = tmp46(1945).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
                    obj4[0] = obj5;
                    let formatToPartsResult = intl3.formatToParts(tmp44(1236).t.LwCwT9, obj4);
                    const tmp46Result2 = tmp46(1945);
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
                    const intl8 = tmp44(1236).intl;
                    obj7.acceptLabelText = intl8.string(tmp44(1236).t.bXTClc);
                    obj7.acceptLabelColor = acceptLabelColor;
                    obj7.acceptLabelIconUrl = tmp44(7734).getAssetUriForEmbed(tmp46(6631));
                    tmp33 = obj7;
                    const tmp44Result4 = tmp44(7734);
                  }
                  return tmp33;
                }
              }
              if (tmp10) {
                const intl7 = tmp44(1236).intl;
                const obj8 = { username: null };
                obj8[0] = name1;
                formatToPlainStringResult1 = intl7.formatToPlainString(tmp44(1236).t["Mptau/"], obj8);
              } else {
                if (result) {
                  if (!tmp13) {
                    const intl4 = tmp44(1236).intl;
                    formatToPlainStringResult1 = intl4.string(tmp44(1236).t["9SNdf4"]);
                  }
                }
                if (!tmp7) {
                  if (!tmp13) {
                    if (!tmp20) {
                      const intl5 = tmp44(1236).intl;
                      const tmp44Result5 = tmp44(1577);
                      const t = tmp44(1236).t;
                      const obj9 = { helpdeskArticle: null };
                      const obj10 = { action: "bindOpenUrl", url: null };
                      const isMetaQuestResult = tmp44(1577).isMetaQuest();
                      const tmp25 = tmp44(1577).isMetaQuest() ? t.yqX4Dr : t["7O7Zg3"];
                      obj10[1] = tmp46(1945).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
                      obj9[0] = obj10;
                      let formatToPartsResult1 = intl5.formatToParts(tmp25, obj9);
                      const tmp46Result3 = tmp46(1945);
                    }
                    formatToPartsResult = formatToPartsResult1;
                  }
                }
                const intl6 = tmp44(1236).intl;
                const obj11 = { helpdeskArticle: null, username: null };
                const obj12 = { action: "bindOpenUrl", url: null };
                obj12[1] = tmp46(1945).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
                obj11[0] = obj12;
                obj11[1] = name;
                formatToPartsResult1 = intl6.formatToParts(tmp44(1236).t.mVzEG8, obj11);
                const tmp46Result4 = tmp46(1945);
              }
              tmp14 = null == relevantUserTrialOffer.expires_at || result || tmp10 || null != relevantUserTrialOffer.redeemed_at;
              const tmp44Result1 = tmp44(6247);
            }
          }
        }
        const obj13 = {};
        const merged3 = Object.assign(obj);
        const intl10 = tmp44(1236).intl;
        obj13.bodyText = intl10.string(tmp44(1236).t.eEz1N5);
        obj13.bodyTextColor = bodyTextColor;
        obj13.canBeAccepted = false;
        return obj13;
      }
    }
    const obj28 = _require(4193);
  }
};