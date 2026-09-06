// discord_app/modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbed.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import UserStore from "../../../../../../stores/UserStore.tsx";
import SubscriptionStore from "../../../../../../stores/billing/SubscriptionStore.tsx";
import UserOfferStore from "../../../../../../stores/billing/UserOfferStore.tsx";
import IAPStore from "../../../../../../stores/native/IAPStore.android.tsx";

require = fn;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
let closure_9 = fn(1373).PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbed.tsx");

export const createReferralTrialEmbedRedeemable = function createReferralTrialEmbedRedeemable(
  message,
  theme,
  id,
  relevantUserTrialOffer,
) {
  if (null != message.author) {
    let obj = {
      headerTextColor: nativeDefault.colors.WHITE,
      titleColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
      bodyTextColor: nativeDefault.colors.TEXT_DEFAULT,
      footerTextColor: nativeDefault.colors.TEXT_MUTED,
      subTextColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
      backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
      acceptLabelColor: nativeDefault.colors.WHITE,
    };
    const tmp47 = createStyles.createNativeStyleProperties(obj)(theme);
    ({ titleColor, bodyTextColor, backgroundColor } = tmp47);
    ({ headerTextColor, footerTextColor, subTextColor, acceptLabelColor } = tmp47);
    const channel = ChannelStore.getChannel(message.getChannelId());
    if (null != channel) {
      if (channel.isDM()) {
        obj = {
          backgroundColor,
          borderColor: backgroundColor,
          thumbnailCornerRadius: 3,
          headerLogoUrl: null,
          headerText: null,
          headerColor: null,
          thumbnailUrl: null,
        };
        let tmp44Result = tmp44(7946);
        obj.headerLogoUrl = tmp44Result.getAssetUriForEmbed(tmp46(8068));
        const intl = tmp44(1114).intl;
        obj.headerText = intl.string(tmp44(1114).t.gtNqJQ).toLocaleLowerCase();
        obj.headerColor = headerTextColor;
        tmp44Result = tmp44(7946);
        obj.thumbnailUrl = tmp44Result.getAssetUriForEmbed(tmp46(8069));
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
            let tmp46Result = tmp46(4404);
            const name = tmp46Result.getName(user1);
            tmp46Result = tmp46(4404);
            const name1 = tmp46Result.getName(user);
            const intl11 = tmp44(1114).intl;
            obj = { senderUserName: name, recipientUserName: name1 };
            const formatToPlainStringResult = intl11.formatToPlainString(tmp44(1114).t.IiWKwg, obj);
            if (null == relevantUserTrialOffer) {
              const obj1 = {};
              const merged = Object.assign(obj);
              obj1.titleText = formatToPlainStringResult;
              obj1.titleColor = titleColor;
              const intl9 = tmp44(1114).intl;
              obj1.bodyText = intl9.string(tmp44(1114).t.eEz1N5);
              obj1.bodyTextColor = bodyTextColor;
              obj1.canBeAccepted = false;
              return obj1;
            } else {
              const userTrialOffer = UserOfferStore.getUserTrialOffer(closure_9);
              IAPStore.getOfferIds();
              const _Object = Object;
              const values = Object.values(tmp44(7240).TrialIdToProductOfferId[closure_9]);
              id = undefined;
              if (userTrialOffer != null) {
                id = userTrialOffer.id;
              }
              const tmp7 = relevantUserTrialOffer.id === id && values.every((item) => set.has(item));
              const everyResult = values.every((item) => set.has(item));
              const isPremiumResult = tmp46(4218).isPremium(user);
              let tmp10 = isPremiumResult;
              if (!isPremiumResult) {
                tmp10 = isPremiumResult;
                if (user.id === id) {
                  tmp10 = null != SubscriptionStore.getPremiumTypeSubscription();
                }
              }
              const tmp46Result1 = tmp46(4218);
              const result = tmp44(7449).hasUserTrialOfferExpired(relevantUserTrialOffer);
              if (!tmp14) {
                const expiresAt = relevantUserTrialOffer.expiresAt;
                const referralTrialOfferExpirationCopy = tmp44(8055).getReferralTrialOfferExpirationCopy(
                  expiresAt.getTime(),
                );
                const intl2 = tmp44(1114).intl;
                const tmp44Result2 = tmp44(8055);
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
                obj3.duration = tmp44(4218).formatIntervalDuration(obj2);
                const tmp44Result3 = tmp44(4218);
                const replaced = intl2.formatToPlainString(tmp44(1114).t.uj94C5, obj3).replace(/\*/g, "");
                const str = intl2.formatToPlainString(tmp44(1114).t.uj94C5, obj3);
                const tmp16 = referralTrialOfferExpirationCopy;
              }
              if (tmp10) {
                if (!tmp20) {
                  if (!tmp13) {
                    const intl3 = tmp44(1114).intl;
                    obj4 = { helpdeskArticle: null };
                    const obj5 = {
                      action: "bindOpenUrl",
                      url: tmp46(2024).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM),
                    };
                    obj4.helpdeskArticle = obj5;
                    let formatToPartsResult = intl3.formatToParts(tmp44(1114).t.LwCwT9, obj4);
                    const tmp46Result2 = tmp46(2024);
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
                    const intl8 = tmp44(1114).intl;
                    obj7.acceptLabelText = intl8.string(tmp44(1114).t.bXTClc);
                    obj7.acceptLabelColor = acceptLabelColor;
                    obj7.acceptLabelIconUrl = tmp44(7946).getAssetUriForEmbed(tmp46(8051));
                    tmp33 = obj7;
                    const tmp44Result4 = tmp44(7946);
                  }
                  return tmp33;
                }
              }
              if (tmp10) {
                const intl7 = tmp44(1114).intl;
                const obj8 = { username: name1 };
                formatToPlainStringResult1 = intl7.formatToPlainString(tmp44(1114).t["Mptau/"], obj8);
              } else {
                if (result) {
                  if (!tmp13) {
                    const intl4 = tmp44(1114).intl;
                    formatToPlainStringResult1 = intl4.string(tmp44(1114).t["9SNdf4"]);
                  }
                }
                if (!tmp7) {
                  if (!tmp13) {
                    if (!tmp20) {
                      const intl5 = tmp44(1114).intl;
                      const tmp44Result5 = tmp44(1608);
                      const t = tmp44(1114).t;
                      const obj9 = { helpdeskArticle: null };
                      const obj10 = { action: "bindOpenUrl", url: null };
                      const isMetaQuestResult = tmp44(1608).isMetaQuest();
                      const tmp25 = tmp44(1608).isMetaQuest() ? t.yqX4Dr : t["7O7Zg3"];
                      obj10.url = tmp46(2024).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
                      obj9.helpdeskArticle = obj10;
                      let formatToPartsResult1 = intl5.formatToParts(tmp25, obj9);
                      const tmp46Result3 = tmp46(2024);
                    }
                    formatToPartsResult = formatToPartsResult1;
                  }
                }
                const intl6 = tmp44(1114).intl;
                const obj11 = { helpdeskArticle: null, username: null };
                const obj12 = {
                  action: "bindOpenUrl",
                  url: tmp46(2024).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM),
                };
                obj11.helpdeskArticle = obj12;
                obj11.username = name;
                formatToPartsResult1 = intl6.formatToParts(tmp44(1114).t.mVzEG8, obj11);
                const tmp46Result4 = tmp46(2024);
              }
              tmp14 =
                null == relevantUserTrialOffer.expiresAt ||
                result ||
                tmp10 ||
                null != relevantUserTrialOffer.redeemedAt;
              const tmp44Result1 = tmp44(7449);
            }
          }
        }
        const obj13 = {};
        const merged3 = Object.assign(obj);
        const intl10 = tmp44(1114).intl;
        obj13.bodyText = intl10.string(tmp44(1114).t.eEz1N5);
        obj13.bodyTextColor = bodyTextColor;
        obj13.canBeAccepted = false;
        return obj13;
      }
    }
  }
};
