// === Module 7988: createReferralTrialEmbedRedeemable ===

// Module 7988 (createReferralTrialEmbedRedeemable)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "ensureGuildLoaded" /* 1386 */;
import closure_4 from "mergeGuildAvatar" /* 1921 */;
import closure_5 from "reset" /* 4145 */;
import closure_6 from "emitChanges" /* 7205 */;
import closure_7 from "updateProduct" /* 6093 */;
import { HelpdeskArticles } from "ME" /* 673 */;
import { PREMIUM_TIER_2_REFERRAL_TRIAL_ID as closure_9 } from "GuildFeatures" /* 1923 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbed.tsx");

export const createReferralTrialEmbedRedeemable = function createReferralTrialEmbedRedeemable(message, theme, id, relevantUserTrialOffer) {
  if (null != message.author) {
    let obj = { headerTextColor: null, titleColor: null, bodyTextColor: null, footerTextColor: null, subTextColor: null, backgroundColor: null, acceptLabelColor: null };
    obj[0] = ThemesDefault.colors.WHITE;
    obj[1] = ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
    obj[2] = ThemesDefault.colors.TEXT_DEFAULT;
    obj[3] = ThemesDefault.colors.TEXT_MUTED;
    obj[4] = ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT;
    obj[5] = ThemesDefault.colors.BACKGROUND_MOD_NORMAL;
    obj[6] = ThemesDefault.colors.WHITE;
    const tmp47 = _require(4478).createNativeStyleProperties(obj)(theme);
    ({ titleColor, bodyTextColor, backgroundColor } = tmp47);
    ({ headerTextColor, footerTextColor, subTextColor, acceptLabelColor } = tmp47);
    channel = channel.getChannel(message.getChannelId());
    if (null != channel) {
      if (channel.isDM()) {
        obj = { backgroundColor: null, borderColor: null, thumbnailCornerRadius: 3, headerLogoUrl: null, headerText: null, headerColor: null, thumbnailUrl: null };
        obj[0] = backgroundColor;
        obj[1] = backgroundColor;
        let tmp44Result = tmp44(7867);
        obj[3] = tmp44Result.getAssetUriForEmbed(tmp46(7989));
        const intl = tmp44(1233).intl;
        obj[4] = intl.string(tmp44(1233).t.gtNqJQ).toLocaleLowerCase();
        obj[5] = headerTextColor;
        tmp44Result = tmp44(7867);
        obj[6] = tmp44Result.getAssetUriForEmbed(tmp46(7990));
        let obj4 = user;
        let userId;
        if (relevantUserTrialOffer != null) {
          userId = relevantUserTrialOffer.userId;
        }
        user = user.getUser(userId);
        let referrerId;
        if (relevantUserTrialOffer != null) {
          referrerId = relevantUserTrialOffer.referrerId;
        }
        const user1 = obj4.getUser(referrerId);
        if (null != user) {
          if (null != user1) {
            let tmp46Result = tmp46(4322);
            const name = tmp46Result.getName(user1);
            tmp46Result = tmp46(4322);
            const name1 = tmp46Result.getName(user);
            const intl11 = tmp44(1233).intl;
            obj = { senderUserName: null, recipientUserName: null };
            obj[0] = name;
            obj[1] = name1;
            const formatToPlainStringResult = intl11.formatToPlainString(tmp44(1233).t.IiWKwg, obj);
            if (null == relevantUserTrialOffer) {
              obj1 = {};
              const merged = Object.assign(obj);
              obj1.titleText = formatToPlainStringResult;
              obj1.titleColor = titleColor;
              const intl9 = tmp44(1233).intl;
              obj1.bodyText = intl9.string(tmp44(1233).t.eEz1N5);
              obj1.bodyTextColor = bodyTextColor;
              obj1.canBeAccepted = false;
              return obj1;
            } else {
              userTrialOffer = userTrialOffer.getUserTrialOffer(closure_9);
              _require = undefined;
              _require = offerIds.getOfferIds();
              const _Object = Object;
              const values = Object.values(tmp44(6096).TrialIdToProductOfferId[closure_9]);
              id = undefined;
              if (userTrialOffer != null) {
                id = userTrialOffer.id;
              }
              const tmp7 = relevantUserTrialOffer.id === id && values.every((arg0) => set.has(arg0));
              const everyResult = values.every((arg0) => set.has(arg0));
              const isPremiumResult = tmp46(4139).isPremium(user);
              let tmp10 = isPremiumResult;
              if (!isPremiumResult) {
                tmp10 = isPremiumResult;
                if (user.id === id) {
                  tmp10 = null != premiumTypeSubscription.getPremiumTypeSubscription();
                }
              }
              const tmp46Result1 = tmp46(4139);
              const result = tmp44(7204).hasUserTrialOfferExpired(relevantUserTrialOffer);
              if (!tmp14) {
                const expiresAt = relevantUserTrialOffer.expiresAt;
                const referralTrialOfferExpirationCopy = tmp44(7976).getReferralTrialOfferExpirationCopy(expiresAt.getTime());
                const intl2 = tmp44(1233).intl;
                const tmp44Result2 = tmp44(7976);
                const subscriptionTrial = relevantUserTrialOffer.subscriptionTrial;
                let interval;
                if (subscriptionTrial != null) {
                  interval = subscriptionTrial.interval;
                }
                const obj2 = { intervalType: null, intervalCount: null };
                obj2[0] = interval;
                const subscriptionTrial2 = relevantUserTrialOffer.subscriptionTrial;
                let intervalCount;
                if (subscriptionTrial2 != null) {
                  intervalCount = subscriptionTrial2.intervalCount;
                }
                const obj3 = { duration: null };
                obj2[1] = intervalCount;
                obj3[0] = tmp44(4139).formatIntervalDuration(obj2);
                const tmp44Result3 = tmp44(4139);
                const replaced = intl2.formatToPlainString(tmp44(1233).t.uj94C5, obj3).replace(/\*/g, "");
                const str = intl2.formatToPlainString(tmp44(1233).t.uj94C5, obj3);
                const tmp16 = referralTrialOfferExpirationCopy;
              }
              if (tmp10) {
                if (!tmp20) {
                  if (!tmp13) {
                    const intl3 = tmp44(1233).intl;
                    obj4 = { helpdeskArticle: null };
                    const obj5 = { action: "bindOpenUrl", url: null };
                    obj5[1] = tmp46(1994).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
                    obj4[0] = obj5;
                    let formatToPartsResult = intl3.formatToParts(tmp44(1233).t.LwCwT9, obj4);
                    const tmp46Result2 = tmp46(1994);
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
                    const intl8 = tmp44(1233).intl;
                    obj7.acceptLabelText = intl8.string(tmp44(1233).t.bXTClc);
                    obj7.acceptLabelColor = acceptLabelColor;
                    obj7.acceptLabelIconUrl = tmp44(7867).getAssetUriForEmbed(tmp46(7972));
                    tmp33 = obj7;
                    const tmp44Result4 = tmp44(7867);
                  }
                  return tmp33;
                }
              }
              if (tmp10) {
                const intl7 = tmp44(1233).intl;
                const obj8 = { username: null };
                obj8[0] = name1;
                formatToPlainStringResult1 = intl7.formatToPlainString(tmp44(1233).t["Mptau/"], obj8);
              } else {
                if (result) {
                  if (!tmp13) {
                    const intl4 = tmp44(1233).intl;
                    formatToPlainStringResult1 = intl4.string(tmp44(1233).t["9SNdf4"]);
                  }
                }
                if (!tmp7) {
                  if (!tmp13) {
                    if (!tmp20) {
                      const intl5 = tmp44(1233).intl;
                      const tmp44Result5 = tmp44(1623);
                      const t = tmp44(1233).t;
                      const obj9 = { helpdeskArticle: null };
                      const obj10 = { action: "bindOpenUrl", url: null };
                      const isMetaQuestResult = tmp44(1623).isMetaQuest();
                      const tmp25 = tmp44(1623).isMetaQuest() ? t.yqX4Dr : t["7O7Zg3"];
                      obj10[1] = tmp46(1994).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
                      obj9[0] = obj10;
                      let formatToPartsResult1 = intl5.formatToParts(tmp25, obj9);
                      const tmp46Result3 = tmp46(1994);
                    }
                    formatToPartsResult = formatToPartsResult1;
                  }
                }
                const intl6 = tmp44(1233).intl;
                const obj11 = { helpdeskArticle: null, username: null };
                const obj12 = { action: "bindOpenUrl", url: null };
                obj12[1] = tmp46(1994).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
                obj11[0] = obj12;
                obj11[1] = name;
                formatToPartsResult1 = intl6.formatToParts(tmp44(1233).t.mVzEG8, obj11);
                const tmp46Result4 = tmp46(1994);
              }
              tmp14 = null == relevantUserTrialOffer.expiresAt || result || tmp10 || null != relevantUserTrialOffer.redeemedAt;
              const tmp44Result1 = tmp44(7204);
            }
          }
        }
        const obj13 = {};
        const merged3 = Object.assign(obj);
        const intl10 = tmp44(1233).intl;
        obj13.bodyText = intl10.string(tmp44(1233).t.eEz1N5);
        obj13.bodyTextColor = bodyTextColor;
        obj13.canBeAccepted = false;
        return obj13;
      }
    }
    const obj28 = _require(4478);
  }
};