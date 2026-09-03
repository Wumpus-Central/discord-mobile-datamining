// discord_app/modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbedRedesign.tsx
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../../stores/ChannelStore.tsx";
import closure_4 from "../../../../../../stores/UserStore.tsx";
import closure_5 from "../../../../../../stores/billing/SubscriptionStore.tsx";
import closure_6 from "../../../../../../stores/billing/UserOfferStore.tsx";
import closure_7 from "../../../../../../stores/native/IAPStore.android.tsx";
import { HelpdeskArticles } from "../../../../../../Constants.tsx";
import { PREMIUM_TIER_2_REFERRAL_TRIAL_ID as closure_9 } from "../../../../../premium/PremiumConstants.tsx";
import { createCacheKey } from "../../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbedRedesign.tsx",
);

export const createReferralTrialEmbedRedesign = function createReferralTrialEmbedRedesign(
  message,
  theme,
  id,
  relevantUserTrialOffer,
) {
  if (null != message.author) {
    let obj = {
      titleColor: null,
      headerTextColor: null,
      bodyTextColor: null,
      footerTextColor: null,
      subTextColor: null,
      backgroundColor: null,
      acceptLabelColor: null,
      linkTextColor: null,
    };
    obj[0] = ThemesDefault.colors.TEXT_DEFAULT;
    obj[1] = ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
    obj[2] = ThemesDefault.colors.TEXT_SUBTLE;
    obj[3] = ThemesDefault.colors.TEXT_MUTED;
    obj[4] = ThemesDefault.colors.TEXT_SUBTLE;
    obj[5] = ThemesDefault.colors.BACKGROUND_MOD_NORMAL;
    obj[6] = ThemesDefault.colors.WHITE;
    obj[7] = ThemesDefault.colors.TEXT_LINK;
    const tmp42 =
      require("../../../../../../design/components/Styles/native/createStyles.tsx").createNativeStyleProperties(obj)(
        theme,
      );
    ({ titleColor, headerTextColor, bodyTextColor, backgroundColor } = tmp42);
    ({ footerTextColor, subTextColor, acceptLabelColor, linkTextColor } = tmp42);
    channel = channel.getChannel(message.getChannelId());
    if (null != channel) {
      if (channel.isDM()) {
        obj = user;
        let userId;
        if (relevantUserTrialOffer != null) {
          userId = relevantUserTrialOffer.userId;
        }
        user = user.getUser(userId);
        let referrerId;
        if (relevantUserTrialOffer != null) {
          referrerId = relevantUserTrialOffer.referrerId;
        }
        const user1 = obj.getUser(referrerId);
        if (null != user) {
          if (null != user1) {
            let tmp41Result = tmp41(4322);
            const name = tmp41Result.getName(user1);
            const intl10 = tmp39(1233).intl;
            obj = { sender: null, helpdeskArticle: null };
            obj[0] = name;
            tmp41Result = tmp41(1994);
            obj[1] = tmp41Result.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
            const intl11 = tmp39(1233).intl;
            obj1 = { sender: null, helpdeskArticle: null };
            obj1[0] = name;
            const obj2 = { action: "bindOpenUrl", url: null, linkColor: null };
            const formatToPlainStringResult = intl10.formatToPlainString(tmp39(1233).t.yisueA, obj);
            obj2[1] = tmp41(1994).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
            obj2[2] = linkTextColor;
            obj1[1] = obj2;
            const obj3 = {
              titleText: null,
              titleColor: null,
              headerImageUrl: null,
              headerText: null,
              headerColor: null,
              backgroundColor: null,
              borderColor: null,
              learnMoreLink: null,
            };
            obj3[0] = formatToPlainStringResult;
            obj3[1] = titleColor;
            const tmp41Result1 = tmp41(1994);
            obj3[2] = tmp41(7975);
            const intl12 = tmp39(1233).intl;
            obj3[3] = intl12.string(tmp39(1233).t.HtTvXA);
            obj3[4] = headerTextColor;
            obj3[5] = backgroundColor;
            obj3[6] = backgroundColor;
            obj3[7] = intl11.formatToParts(tmp39(1233).t.yisueA, obj1);
            if (null == relevantUserTrialOffer) {
              const obj4 = {};
              const merged = Object.assign(obj3);
              const intl8 = tmp39(1233).intl;
              obj4.bodyText = intl8.string(tmp39(1233).t.eEz1N5);
              obj4.bodyTextColor = bodyTextColor;
              obj4.canBeAccepted = false;
              return obj4;
            } else {
              userTrialOffer = userTrialOffer.getUserTrialOffer(closure_9);
              _require = undefined;
              _require = offerIds.getOfferIds();
              const _Object = Object;
              const values = Object.values(tmp39(6096).TrialIdToProductOfferId[closure_9]);
              id = undefined;
              if (userTrialOffer != null) {
                id = userTrialOffer.id;
              }
              const tmp7 = relevantUserTrialOffer.id === id && values.every((arg0) => set.has(arg0));
              const everyResult = values.every((arg0) => set.has(arg0));
              const isPremiumResult = tmp41(4139).isPremium(user);
              let tmp10 = isPremiumResult;
              if (!isPremiumResult) {
                tmp10 = isPremiumResult;
                if (user.id === id) {
                  tmp10 = null != premiumTypeSubscription.getPremiumTypeSubscription();
                }
              }
              let tmp39Result = tmp39(7204);
              const result = tmp39Result.hasUserTrialOfferExpired(relevantUserTrialOffer);
              const tmp41Result2 = tmp41(4139);
              let tmp15 = null == relevantUserTrialOffer.expiresAt;
              const name1 = tmp41(4322).getName(user);
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
                tmp39Result = tmp39(7976);
                const expiresAt = relevantUserTrialOffer.expiresAt;
                const referralTrialOfferExpirationCopy = tmp39Result.getReferralTrialOfferExpirationCopy(
                  expiresAt.getTime(),
                );
                const intl = tmp39(1233).intl;
                const subscriptionTrial = relevantUserTrialOffer.subscriptionTrial;
                let interval;
                if (subscriptionTrial != null) {
                  interval = subscriptionTrial.interval;
                }
                const obj5 = { intervalType: null, intervalCount: null };
                obj5[0] = interval;
                const subscriptionTrial2 = relevantUserTrialOffer.subscriptionTrial;
                let intervalCount;
                if (subscriptionTrial2 != null) {
                  intervalCount = subscriptionTrial2.intervalCount;
                }
                const obj6 = { duration: null };
                obj5[1] = intervalCount;
                obj6[0] = tmp39(4139).formatIntervalDuration(obj5);
                const tmp39Result1 = tmp39(4139);
                const replaced = intl.formatToPlainString(tmp39(1233).t.uj94C5, obj6).replace(/\*/g, "");
                const str = intl.formatToPlainString(tmp39(1233).t.uj94C5, obj6);
                const tmp17 = referralTrialOfferExpirationCopy;
              }
              if (tmp10) {
                if (!tmp21) {
                  if (!tmp14) {
                    const intl2 = tmp39(1233).intl;
                    const obj7 = { helpdeskArticle: null };
                    const obj8 = { action: "bindOpenUrl", url: null };
                    obj8[1] = tmp41(1994).getArticleURL(tmp45.REFERRAL_PROGRAM);
                    obj7[0] = obj8;
                    let formatToPartsResult1 = intl2.formatToParts(tmp39(1233).t.LwCwT9, obj7);
                    const tmp41Result4 = tmp41(1994);
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
                    const intl7 = tmp39(1233).intl;
                    obj10.acceptLabelText = intl7.string(tmp39(1233).t.bXTClc);
                    obj10.acceptLabelColor = acceptLabelColor;
                    obj10.acceptLabelIconUrl = tmp39(7867).getAssetUriForEmbed(tmp41(7972));
                    tmp31 = obj10;
                    const tmp39Result2 = tmp39(7867);
                  }
                  return tmp31;
                }
              }
              if (tmp10) {
                const intl6 = tmp39(1233).intl;
                const obj11 = { username: null };
                obj11[0] = name1;
                formatToPlainStringResult1 = intl6.formatToPlainString(tmp39(1233).t["Mptau/"], obj11);
              } else {
                if (result) {
                  if (!tmp14) {
                    const intl3 = tmp39(1233).intl;
                    formatToPlainStringResult1 = intl3.string(tmp39(1233).t["9SNdf4"]);
                  }
                }
                if (!tmp7) {
                  if (!tmp14) {
                    if (!tmp21) {
                      const intl4 = tmp39(1233).intl;
                      const tmp39Result3 = tmp39(1623);
                      const t = tmp39(1233).t;
                      const obj12 = { helpdeskArticle: null };
                      const obj13 = { action: "bindOpenUrl", url: null };
                      const isMetaQuestResult = tmp39(1623).isMetaQuest();
                      const tmp25 = tmp39(1623).isMetaQuest() ? t.yqX4Dr : t["7O7Zg3"];
                      obj13[1] = tmp41(1994).getArticleURL(tmp45.REFERRAL_PROGRAM);
                      obj12[0] = obj13;
                      let formatToPartsResult2 = intl4.formatToParts(tmp25, obj12);
                      const tmp41Result5 = tmp41(1994);
                    }
                    formatToPartsResult1 = formatToPartsResult2;
                  }
                }
                const intl5 = tmp39(1233).intl;
                const obj14 = { helpdeskArticle: null, username: null };
                const obj15 = { action: "bindOpenUrl", url: null };
                obj15[1] = tmp41(1994).getArticleURL(tmp45.REFERRAL_PROGRAM);
                obj14[0] = obj15;
                obj14[1] = name;
                formatToPartsResult2 = intl5.formatToParts(tmp39(1233).t.mVzEG8, obj14);
                const tmp41Result6 = tmp41(1994);
              }
              const tmp41Result3 = tmp41(4322);
            }
            const formatToPartsResult = intl11.formatToParts(tmp39(1233).t.yisueA, obj1);
          }
        }
        const obj16 = {
          titleText: "",
          titleColor: null,
          headerImageUrl: null,
          headerText: "",
          headerColor: null,
          backgroundColor: null,
          borderColor: null,
          bodyText: null,
          bodyTextColor: null,
          canBeAccepted: false,
        };
        obj16[1] = titleColor;
        obj16[2] = tmp41(7975);
        obj16[4] = headerTextColor;
        obj16[5] = backgroundColor;
        obj16[6] = backgroundColor;
        const intl9 = tmp39(1233).intl;
        obj16[7] = intl9.string(tmp39(1233).t.eEz1N5);
        obj16[8] = bodyTextColor;
        return obj16;
      }
    }
    const obj25 = createCacheKey;
  }
};
