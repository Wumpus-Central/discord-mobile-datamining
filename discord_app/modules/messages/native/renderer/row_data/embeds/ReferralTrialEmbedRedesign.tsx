// discord_app/modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbedRedesign.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";
import reset from "reset";
import emitChanges from "emitChanges";
import updateProduct from "updateProduct";
import { HelpdeskArticles } from "ME";
import { PREMIUM_TIER_2_REFERRAL_TRIAL_ID as closure_9 } from "GuildFeatures";
import { Themes } from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import { createCacheKey } from "../../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let result = require("reset").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbedRedesign.tsx");

export const createReferralTrialEmbedRedesign = function createReferralTrialEmbedRedesign(message, theme, id, relevantUserTrialOffer) {
  let acceptLabelColor;
  let backgroundColor;
  let bodyTextColor;
  let footerTextColor;
  let headerTextColor;
  let linkTextColor;
  let subTextColor;
  let titleColor;
  if (null != message.author) {
    let obj = { titleColor: null, headerTextColor: null, bodyTextColor: null, footerTextColor: null, subTextColor: null, backgroundColor: null, acceptLabelColor: null, linkTextColor: null };
    obj[0] = Themes.colors.TEXT_DEFAULT;
    obj[1] = Themes.colors.MOBILE_TEXT_HEADING_PRIMARY;
    obj[2] = Themes.colors.TEXT_SUBTLE;
    obj[3] = Themes.colors.TEXT_MUTED;
    obj[4] = Themes.colors.TEXT_SUBTLE;
    obj[5] = Themes.colors.BACKGROUND_MOD_NORMAL;
    obj[6] = Themes.colors.WHITE;
    obj[7] = Themes.colors.TEXT_LINK;
    const tmp42 = _createCacheKey.createNativeStyleProperties(obj)(theme);
    ({ titleColor, headerTextColor, bodyTextColor, backgroundColor } = tmp42);
    ({ footerTextColor, subTextColor, acceptLabelColor, linkTextColor } = tmp42);
    channel = channel.getChannel(message.getChannelId());
    if (null != channel) {
      if (channel.isDM()) {
        obj = user;
        let user_id;
        if (relevantUserTrialOffer != null) {
          user_id = relevantUserTrialOffer.user_id;
        }
        user = user.getUser(user_id);
        let referrer_id;
        if (relevantUserTrialOffer != null) {
          referrer_id = relevantUserTrialOffer.referrer_id;
        }
        const user1 = obj.getUser(referrer_id);
        if (null != user) {
          if (null != user1) {
            let tmp41Result = tmp41(4140);
            const name = tmp41Result.getName(user1);
            const intl10 = tmp39(1236).intl;
            obj = { sender: null, helpdeskArticle: null };
            obj[0] = name;
            tmp41Result = tmp41(1974);
            obj[1] = tmp41Result.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
            const intl11 = tmp39(1236).intl;
            const obj1 = { sender: null, helpdeskArticle: null };
            obj1[0] = name;
            const obj2 = { action: "bindOpenUrl", url: null, linkColor: null };
            const formatToPlainStringResult = intl10.formatToPlainString(tmp39(1236).t.yisueA, obj);
            obj2[1] = tmp41(1974).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
            obj2[2] = linkTextColor;
            obj1[1] = obj2;
            const obj3 = { titleText: null, titleColor: null, headerImageUrl: null, headerText: null, headerColor: null, backgroundColor: null, borderColor: null, learnMoreLink: null };
            obj3[0] = formatToPlainStringResult;
            obj3[1] = titleColor;
            const tmp41Result1 = tmp41(1974);
            obj3[2] = tmp41(8100);
            const intl12 = tmp39(1236).intl;
            obj3[3] = intl12.string(tmp39(1236).t.HtTvXA);
            obj3[4] = headerTextColor;
            obj3[5] = backgroundColor;
            obj3[6] = backgroundColor;
            obj3[7] = intl11.formatToParts(tmp39(1236).t.yisueA, obj1);
            if (null == relevantUserTrialOffer) {
              const obj4 = {};
              const merged = Object.assign(obj3);
              const intl8 = tmp39(1236).intl;
              obj4.bodyText = intl8.string(tmp39(1236).t.eEz1N5);
              obj4.bodyTextColor = bodyTextColor;
              obj4.canBeAccepted = false;
              return obj4;
            } else {
              userTrialOffer = userTrialOffer.getUserTrialOffer(closure_9);
              _require = undefined;
              _require = offerIds.getOfferIds();
              const _Object = Object;
              const values = Object.values(tmp39(5801).TrialIdToProductOfferId[closure_9]);
              id = undefined;
              if (userTrialOffer != null) {
                id = userTrialOffer.id;
              }
              const tmp7 = relevantUserTrialOffer.id === id && values.every((arg0) => set.has(arg0));
              const everyResult = values.every((arg0) => set.has(arg0));
              const isPremiumResult = tmp41(3947).isPremium(user);
              let tmp10 = isPremiumResult;
              if (!isPremiumResult) {
                tmp10 = isPremiumResult;
                if (user.id === id) {
                  tmp10 = null != premiumTypeSubscription.getPremiumTypeSubscription();
                }
              }
              let tmp39Result = tmp39(6853);
              const result = tmp39Result.hasUserTrialOfferExpired(relevantUserTrialOffer);
              const tmp41Result2 = tmp41(3947);
              let tmp15 = null == relevantUserTrialOffer.expires_at;
              const name1 = tmp41(4140).getName(user);
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
                tmp39Result = tmp39(8101);
                const _Date = Date;
                const referralTrialOfferExpirationCopy = tmp39Result.getReferralTrialOfferExpirationCopy(Date.parse(relevantUserTrialOffer.expires_at));
                const intl = tmp39(1236).intl;
                const subscription_trial = relevantUserTrialOffer.subscription_trial;
                let interval;
                if (subscription_trial != null) {
                  interval = subscription_trial.interval;
                }
                const obj5 = { intervalType: null, intervalCount: null };
                obj5[0] = interval;
                const subscription_trial2 = relevantUserTrialOffer.subscription_trial;
                let interval_count;
                if (subscription_trial2 != null) {
                  interval_count = subscription_trial2.interval_count;
                }
                const obj6 = { duration: null };
                obj5[1] = interval_count;
                obj6[0] = tmp39(3947).formatIntervalDuration(obj5);
                const tmp39Result1 = tmp39(3947);
                const replaced = intl.formatToPlainString(tmp39(1236).t.uj94C5, obj6).replace(/\*/g, "");
                const str = intl.formatToPlainString(tmp39(1236).t.uj94C5, obj6);
                const tmp17 = referralTrialOfferExpirationCopy;
              }
              if (tmp10) {
                if (!tmp21) {
                  if (!tmp14) {
                    const intl2 = tmp39(1236).intl;
                    const obj7 = { helpdeskArticle: null };
                    const obj8 = { action: "bindOpenUrl", url: null };
                    obj8[1] = tmp41(1974).getArticleURL(tmp45.REFERRAL_PROGRAM);
                    obj7[0] = obj8;
                    let formatToPartsResult1 = intl2.formatToParts(tmp39(1236).t.LwCwT9, obj7);
                    const tmp41Result4 = tmp41(1974);
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
                    const intl7 = tmp39(1236).intl;
                    obj10.acceptLabelText = intl7.string(tmp39(1236).t.bXTClc);
                    obj10.acceptLabelColor = acceptLabelColor;
                    obj10.acceptLabelIconUrl = tmp39(7995).getAssetUriForEmbed(tmp41(7645));
                    tmp31 = obj10;
                    const tmp39Result2 = tmp39(7995);
                  }
                  return tmp31;
                }
              }
              if (tmp10) {
                const intl6 = tmp39(1236).intl;
                const obj11 = { username: null };
                obj11[0] = name1;
                formatToPlainStringResult1 = intl6.formatToPlainString(tmp39(1236).t["Mptau/"], obj11);
              } else {
                if (result) {
                  if (!tmp14) {
                    const intl3 = tmp39(1236).intl;
                    formatToPlainStringResult1 = intl3.string(tmp39(1236).t["9SNdf4"]);
                  }
                }
                if (!tmp7) {
                  if (!tmp14) {
                    if (!tmp21) {
                      const intl4 = tmp39(1236).intl;
                      const tmp39Result3 = tmp39(1605);
                      const t = tmp39(1236).t;
                      const obj12 = { helpdeskArticle: null };
                      const obj13 = { action: "bindOpenUrl", url: null };
                      const isMetaQuestResult = tmp39(1605).isMetaQuest();
                      const tmp25 = tmp39(1605).isMetaQuest() ? t.yqX4Dr : t["7O7Zg3"];
                      obj13[1] = tmp41(1974).getArticleURL(tmp45.REFERRAL_PROGRAM);
                      obj12[0] = obj13;
                      let formatToPartsResult2 = intl4.formatToParts(tmp25, obj12);
                      const tmp41Result5 = tmp41(1974);
                    }
                    formatToPartsResult1 = formatToPartsResult2;
                  }
                }
                const intl5 = tmp39(1236).intl;
                const obj14 = { helpdeskArticle: null, username: null };
                const obj15 = { action: "bindOpenUrl", url: null };
                obj15[1] = tmp41(1974).getArticleURL(tmp45.REFERRAL_PROGRAM);
                obj14[0] = obj15;
                obj14[1] = name;
                formatToPartsResult2 = intl5.formatToParts(tmp39(1236).t.mVzEG8, obj14);
                const tmp41Result6 = tmp41(1974);
              }
              const tmp41Result3 = tmp41(4140);
            }
            const formatToPartsResult = intl11.formatToParts(tmp39(1236).t.yisueA, obj1);
          }
        }
        const obj16 = { titleText: "", titleColor: null, headerImageUrl: null, headerText: "", headerColor: null, backgroundColor: null, borderColor: null, bodyText: null, bodyTextColor: null, canBeAccepted: false };
        obj16[1] = titleColor;
        obj16[2] = tmp41(8100);
        obj16[4] = headerTextColor;
        obj16[5] = backgroundColor;
        obj16[6] = backgroundColor;
        const intl9 = tmp39(1236).intl;
        obj16[7] = intl9.string(tmp39(1236).t.eEz1N5);
        obj16[8] = bodyTextColor;
        return obj16;
      }
    }
    const obj25 = _createCacheKey;
  }
};