// === Module 13486: ReferralProgramPerkCard ===

// Module 13486 (ReferralProgramPerkCard)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import Text_Text from "Text/Text" /* 4602 */;
import _modDef5989 from "module_5989" /* 5989 */;
import _modDef6401 from "module_6401" /* 6401 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7235 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7255 */;
import ReferralTrialActionCreators from "ReferralTrialActionCreators" /* 7526 */;
import useReferralProgramBannerDetails from "useReferralProgramBannerDetails" /* 13488 */;
import RewardGrantNoticeDefault from "RewardGrantNotice" /* 13501 */;
import noop from "module_19" /* 19 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7525 */;

require = fn;
function ReferredFriendAvatar(user) {
  user = user.user;
  let obj = { style: closure_12().referredFriendAvatar, children: null };
  obj = { source: user.getAvatarSource(undefined, false, 24), size: native.AvatarSizes.XSMALL };
  obj.children = closure_1_10(native.Avatar, obj);
  return closure_1_10(View, obj);
}
function AvailableReferralSlot(children) {
  return closure_1_10(View, { style: closure_12().availableReferralSlot, children: closure_1_10(Text_Text.Text, { variant: "text-xs/medium", color: "text-strong", children: children.slotIndex }) });
}
function ProgressIndicator(referralSentUsers) {
  referralSentUsers = referralSentUsers.referralSentUsers;
  const items = [];
  for (let num = 0; num < useReferralProgramBannerDetails.MAX_REFERRALS_SENT; num = num + 1) {
    if (null != referralSentUsers[num]) {
      let obj = { user: referralSentUsers[num] };
      let arr = items.push(closure_1_10(ReferredFriendAvatar, obj, referralSentUsers[num].id));
    } else {
      obj = { slotIndex: num + 1 };
      arr = items.push(closure_1_10(AvailableReferralSlot, obj, num));
    }
  }
  obj = { style: closure_12().progressIndicatorContainer, children: items };
  return closure_1_10(View, obj);
}
const View = fn(17).View;
let Constants = fn(13487);
({ REFERRAL_INCENTIVE_DISCOUNT_PERCENTAGE: metroRequire, REFERRAL_INCENTIVE_ORBS_PER_CONVERSION: closure_7 } = Constants);
Constants = fn(1074);
({ AnalyticEvents: closure_8, HelpdeskArticles: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4606);
let createStyles = { container: null, betaBadge: null, progressIndicatorContainer: null, availableReferralSlot: null, referredFriendAvatar: null, contentContainer: null, heading: null, bodyText: null, buttonContainer: null };
createStyles = { width: 320, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center" };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
createStyles.container = createStyles;
const rect = { position: "absolute", top: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16, zIndex: 1 };
createStyles.betaBadge = rect;
createStyles.progressIndicatorContainer = { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", gap: 8, marginTop: 16, marginLeft: 24 };
let size = { width: 24, height: 24, borderRadius: nativeDefault.radii.xxl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, justifyContent: "center", alignItems: "center" };
createStyles.availableReferralSlot = size;
createStyles.referredFriendAvatar = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round };
createStyles.contentContainer = { alignItems: "flex-start", paddingHorizontal: 24, gap: 8, marginTop: 12 };
createStyles.heading = { textAlign: "left" };
createStyles.bodyText = { textAlign: "left" };
let obj1 = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round };
createStyles.buttonContainer = { paddingHorizontal: nativeDefault.space.PX_16, width: "100%", marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramPerkCard.tsx");

export const ReferralProgramPerkCard = function ReferralProgramPerkCard() {
  const tmp = closure_12();
  const tmp2 = _require;
  let obj = require("useReferralProgramBannerDetails");
  let obj1 = require("initialize");
  const items = [ReferralTrialStore];
  const stateFromStores = obj1.useStateFromStores(items, () => ReferralTrialStore.getRecipientStatus());
  let obj2 = require("initialize");
  const items1 = [ReferralTrialStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ReferralTrialStore.getHasEligibleFriends());
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR).analyticsLocations;
  _require = analyticsLocations;
  let obj3 = require("useReferralIncentiveEligibility");
  const referralIncentiveEligibility = obj3.useReferralIncentiveEligibility({ location: "PremiumNitroHomeReferralProgramPerkCard" });
  let isEligibleForIncentive = referralIncentiveEligibility.isEligibleForIncentive;
  const items2 = [analyticsLocations];
  ({ referralRewardType, useAltReferralCardArt } = referralIncentiveEligibility);
  closure_129_0 = 0;
  closure_129_1 = 0;
  closure_129_2 = 0;
  const callback = noop.useCallback(() => {
    const obj = { location_stack };
    obj.track(constants.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, obj);
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13491, dependencyMap.paths), "referral-program-share-action-sheet");
  }, items2);
  const item = stateFromStores.forEach((item) => {
    if (item === ReferralTrialActionCreators.ReferralOfferStatus.REFERRER_REWARD_GRANTED) {
      closure_0 = closure_0 + 1;
      closure_1 = closure_1 + 1;
      closure_2 = closure_2 + 1;
    } else if (item === ReferralTrialActionCreators.ReferralOfferStatus.CONVERTED) {
      closure_1 = closure_1 + 1;
      closure_2 = closure_2 + 1;
    } else if (item === ReferralTrialActionCreators.ReferralOfferStatus.REDEEMED) {
      closure_2 = closure_2 + 1;
    }
  });
  const size = stateFromStores.size;
  let tmp12 = null;
  if (isEligibleForIncentive) {
    tmp12 = referralRewardType;
  }
  obj = { style: tmp.container, children: null };
  let tmp15 = isEligibleForIncentive;
  if (isEligibleForIncentive) {
    obj = { text: null, color: null, style: null };
    const intl = tmp2(1114).intl;
    obj.text = intl.string(tmp2(1114).t.oW0eUd);
    obj.color = tmp2(1178).BadgeColors.BRAND;
    obj.style = tmp.betaBadge;
    tmp15 = closure_10(tmp2(1178).TextBadge, obj);
  }
  const items3 = [tmp15, , , , ];
  obj1 = { nReferralsSent: size, altImage: null };
  if (!useAltReferralCardArt) {
    obj1.altImage = undefined;
    items3[1] = closure_10(tmp18, obj1);
    obj2 = { referralSentUsers: obj.useReferralProgramBannerDetails().referralSentUsers };
    items3[2] = closure_10(ProgressIndicator, obj2);
    obj3 = { style: tmp.contentContainer, children: null };
    let str = "heading-lg/semibold";
    if (isEligibleForIncentive) {
      str = "heading-lg/bold";
    }
    const obj4 = { variant: str, color: "text-strong", style: tmp.heading, children: null };
    if (tmp12 === tmp2(13489).ReferralRewardType.ORBS) {
      const intl4 = tmp2(1114).intl;
      let stringResult = intl4.string(tmp2(1114).t.tAlkl4);
    } else if (tmp12 === tmp2(13489).ReferralRewardType.DISCOUNT) {
      const intl3 = tmp2(1114).intl;
      const obj5 = { discountPercent };
      stringResult = intl3.formatToPlainString(tmp2(1114).t["/JJ9I5"], obj5);
    } else {
      const intl2 = tmp2(1114).intl;
      stringResult = intl2.string(tmp2(1114).t.USo4s7);
    }
    obj4.children = stringResult;
    const items4 = [closure_10(tmp2(4602).Text, obj4), , ];
    let str2 = "text-md/medium";
    if (isEligibleForIncentive) {
      str2 = "text-sm/medium";
    }
    const obj6 = { variant: str2, color: "text-subtle", style: tmp.bodyText, children: null };
    let tmp5Result = HelpdeskUtilsDefault;
    const articleURL = tmp5Result.getArticleURL(constants2.REFERRAL_PROGRAM);
    if (null != tmp12) {
      if (tmp10 !== tmp2(13488).MAX_REFERRALS_SENT) {
        if (size === tmp2(13488).MAX_REFERRALS_SENT) {
          if (tmp12 === tmp2(13489).ReferralRewardType.ORBS) {
            const intl13 = tmp2(1114).intl;
            const obj7 = { helpdeskArticle: articleURL };
            let formatResult = intl13.format(tmp2(1114).t["1aV1j9"], obj7);
          } else {
            const intl12 = tmp2(1114).intl;
            const obj8 = { helpdeskArticle: articleURL };
            formatResult = intl12.format(tmp2(1114).t.QNrPuS, obj8);
          }
        } else if (tmp24) {
          if (tmp12 === tmp2(13489).ReferralRewardType.ORBS) {
            const intl11 = tmp2(1114).intl;
            const obj9 = { numOrbs, helpdeskArticle: articleURL };
            let formatResult1 = intl11.format(tmp2(1114).t.cfE0uG, obj9);
          } else {
            const intl10 = tmp2(1114).intl;
            const obj10 = { helpdeskArticle: articleURL };
            formatResult1 = intl10.format(tmp2(1114).t["+fcvlI"], obj10);
          }
        } else {
          const intl9 = tmp2(1114).intl;
          const obj11 = { helpdeskArticle: articleURL };
          intl9.format(tmp2(1114).t["a0+Jwv"], obj11);
        }
      }
      if (tmp12 === tmp2(13489).ReferralRewardType.ORBS) {
        const intl15 = tmp2(1114).intl;
        const obj12 = { helpdeskArticle: articleURL };
        let formatResult3 = intl15.format(tmp2(1114).t.OluhLp, obj12);
      } else {
        const intl14 = tmp2(1114).intl;
        const obj13 = { helpdeskArticle: articleURL };
        formatResult3 = intl14.format(tmp2(1114).t["8BYihN"], obj13);
      }
    } else if (tmp24) {
      if (size !== tmp2(13488).MAX_REFERRALS_SENT) {
        const intl6 = tmp2(1114).intl;
        const obj14 = { helpdeskArticle: articleURL };
        intl6.format(tmp2(1114).t["omMr+V"], obj14);
      }
      if (tmp11 === tmp2(13488).MAX_REFERRALS_SENT) {
        const intl8 = tmp2(1114).intl;
        const obj15 = { helpdeskArticle: articleURL };
        let formatResult5 = intl8.format(tmp2(1114).t["1aEjsH"], obj15);
      } else {
        const intl7 = tmp2(1114).intl;
        const obj16 = { helpdeskArticle: articleURL };
        formatResult5 = intl7.format(tmp2(1114).t["+u3AOO"], obj16);
      }
    } else {
      const intl5 = tmp2(1114).intl;
      const obj17 = { helpdeskArticle: articleURL };
      obj6.children = intl5.format(tmp2(1114).t["zWhX/Q"], obj17);
      items4[1] = closure_10(tmp2(4602).Text, obj6);
      if (isEligibleForIncentive) {
        const obj18 = { nRewardsGranted: tmp10, referralRewardType: tmp12 };
        isEligibleForIncentive = closure_10(RewardGrantNoticeDefault, obj18);
      }
      items4[2] = isEligibleForIncentive;
      obj3.children = items4;
      items3[3] = closure_11(View, obj3);
      const obj19 = { style: tmp.buttonContainer, children: null };
      let tmp38 = !tmp24;
      if (tmp24) {
        tmp38 = size === tmp2(13488).MAX_REFERRALS_SENT;
      }
      const obj20 = { variant: "primary", size: "sm", disabled: tmp38, text: null, onPress: null };
      const intl16 = tmp2(1114).intl;
      obj20.text = intl16.string(tmp2(1114).t.Lm2nFc);
      obj20.onPress = callback;
      obj19.children = closure_10(tmp2(5026).Button, obj20);
      items3[4] = closure_10(View, obj19);
      obj.children = items3;
      return closure_11(View, obj);
    }
  } else if (tmp12 === tmp2(13489).ReferralRewardType.ORBS) {
    tmp5Result = _modDef6401;
  } else if (tmp12 === tmp2(13489).ReferralRewardType.DISCOUNT) {
    tmp5Result = _modDef5989;
  }
  tmp11 = closure_129_2;
};