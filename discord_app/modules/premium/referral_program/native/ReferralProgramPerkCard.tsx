// === Module 13240: ReferralProgramPerkCard ===

// Module 13240 (ReferralProgramPerkCard)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6657 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7052 */;
import useReferralProgramBannerDetails from "useReferralProgramBannerDetails" /* 13242 */;
import ProgressWheelDefault from "ProgressWheel" /* 13256 */;
import react from "react" /* 19 */;
import ReferralTrialStore from "ReferralTrialStore" /* 6961 */;
import Constants_mod from "Constants" /* 13241 */;
import Constants_mod2 from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let _require, closure_0, closure_1, dependencyMap, importDefault, slotIndex, user;

let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let rect;
let size;
let unpackModuleId;
const View = react_native.View;
let Constants = Constants_mod2;
({ REFERRAL_INCENTIVE_DISCOUNT_PERCENTAGE: metroRequire, REFERRAL_INCENTIVE_ORBS_PER_CONVERSION: metroImportDefault } = Constants);
Constants = Constants_mod2;
({ AnalyticEvents: metroImportAll, HelpdeskArticles: c9 } = Constants);
const CollectibleShopTab = CollectiblesShopConstants.CollectibleShopTab;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, betaBadge: rect, progressIndicatorContainer: { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", gap: 8, marginTop: 16, marginLeft: 24 }, availableReferralSlot: size, referredFriendAvatar: obj3, contentContainer: { alignItems: "flex-start", paddingHorizontal: 24, gap: 8, marginTop: 12 }, heading: { textAlign: "left" }, bodyText: { textAlign: "left" }, buttonContainer: obj4 };
obj2 = { width: 320, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center" };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
rect = { position: "absolute", top: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16, zIndex: 1 };
size = { width: 24, height: 24, borderRadius: nativeDefault.radii.xxl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, justifyContent: "center", alignItems: "center" };
obj3 = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round };
obj4 = { paddingHorizontal: nativeDefault.space.PX_16, width: "100%", marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16 };
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let tmp5;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(7);
  user = user.user;
  const tmp4 = closure_13();
  const referredFriendAvatar = tmp4.referredFriendAvatar;
  if (cResult[0] !== user) {
    const avatarSource = user.getAvatarSource(undefined, false, 24);
    cResult[0] = user;
    cResult[1] = avatarSource;
    tmp5 = avatarSource;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp5) {
    const obj2 = { source: tmp5, size: native.AvatarSizes.XSMALL };
    const Avatar = native.Avatar;
    const tmp9 = unpackModuleId(Avatar, obj2);
    cResult[2] = tmp5;
    cResult[3] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp4.referredFriendAvatar) {
    let tmp10;
    if (cResult[5] === tmp7) {
      tmp10 = cResult[6];
    }
    return tmp10;
  }
  const tmp11 = unpackModuleId(View, { style: referredFriendAvatar, children: tmp7 });
  cResult[4] = tmp4.referredFriendAvatar;
  cResult[5] = tmp7;
  cResult[6] = tmp11;
  tmp10 = tmp11;
}) : ((user) => {
  let Avatar;
  let obj2;
  user = user.user;
  const obj = { style: closure_13().referredFriendAvatar, children: unpackModuleId(Avatar, obj2) };
  obj2 = { source: user.getAvatarSource(undefined, false, 24), size: native.AvatarSizes.XSMALL };
  Avatar = native.Avatar;
  return unpackModuleId(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((slotIndex) => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  slotIndex = slotIndex.slotIndex;
  const tmp4 = closure_13();
  if (cResult[0] !== slotIndex) {
    const obj2 = { variant: "text-xs/medium", color: "text-strong", children: slotIndex };
    const tmp7 = unpackModuleId(Text_Text.Text, obj2);
    cResult[0] = slotIndex;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.availableReferralSlot) {
    let tmp8;
    if (cResult[3] === tmp5) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  const obj3 = { style: tmp4.availableReferralSlot, children: tmp5 };
  const tmp9 = unpackModuleId(View, obj3);
  cResult[2] = tmp4.availableReferralSlot;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((slotIndex) => {
  slotIndex = slotIndex.slotIndex;
  const obj = { style: closure_13().availableReferralSlot, children: unpackModuleId(Text_Text.Text, { variant: "text-xs/medium", color: "text-strong", children: slotIndex }) };
  return unpackModuleId(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((referralSentUsers) => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  referralSentUsers = referralSentUsers.referralSentUsers;
  const tmp4 = closure_13();
  if (cResult[0] !== referralSentUsers) {
    let num3;
    const items = [];
    for (let num3 = 0; num3 < useReferralProgramBannerDetails.MAX_REFERRALS_SENT; num3 = num3 + 1) {
      if (null != referralSentUsers[num3]) {
        let obj2 = { user: referralSentUsers[num3] };
        let arr = items.push(unpackModuleId(closure_14, obj2, referralSentUsers[num3].id));
      } else {
        let obj3 = { slotIndex: num3 + 1 };
        let arr3 = items.push(unpackModuleId(closure_15, obj3, num3));
      }
    }
    cResult[0] = referralSentUsers;
    cResult[1] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    let tmp16;
    if (cResult[3] === tmp4.progressIndicatorContainer) {
      tmp16 = cResult[4];
    }
    return tmp16;
  }
  const obj4 = { style: tmp4.progressIndicatorContainer, children: tmp5 };
  const tmp17 = unpackModuleId(View, obj4);
  cResult[2] = tmp5;
  cResult[3] = tmp4.progressIndicatorContainer;
  cResult[4] = tmp17;
  tmp16 = tmp17;
}) : ((referralSentUsers) => {
  referralSentUsers = referralSentUsers.referralSentUsers;
  const items = [];
  let num = 0;
  const tmp = closure_13();
  if (0 < useReferralProgramBannerDetails.MAX_REFERRALS_SENT) {
    do {
      if (null != referralSentUsers[num]) {
        let obj2 = { user: referralSentUsers[num] };
        let arr = items.push(unpackModuleId(closure_14, obj2, referralSentUsers[num].id));
      } else {
        let obj = { slotIndex: num + 1 };
        let arr3 = items.push(unpackModuleId(closure_15, obj, num));
      }
      num = num + 1;
    } while (num < useReferralProgramBannerDetails.MAX_REFERRALS_SENT);
  }
  const obj3 = { style: tmp.progressIndicatorContainer, children: items };
  return unpackModuleId(View, obj3);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramPerkCard.tsx");

export const ReferralProgramPerkCard = function ReferralProgramPerkCard() {
  let Button;
  let analyticsLocations;
  let formatResult6;
  let intl;
  let items4;
  let items5;
  let obj26;
  let referralRewardType;
  let stringResult;
  let stringResult1;
  let tmp19;
  let useAltReferralCardArt;
  const tmp = closure_13();
  const tmp2 = analyticsLocations;
  let obj = analyticsLocations(13242);
  const referralSentUsers = obj.useReferralProgramBannerDetails().referralSentUsers;
  let obj2 = analyticsLocations(504);
  const items = [ReferralTrialStore];
  const stateFromStores = obj2.useStateFromStores(items, () => ReferralTrialStore.getRecipientStatus());
  let obj3 = analyticsLocations(504);
  const items1 = [ReferralTrialStore];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => ReferralTrialStore.getHasEligibleFriends());
  const tmp6 = useAnalyticsLocationsDefault;
  analyticsLocations = tmp6(AnalyticsLocationDefault.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR).analyticsLocations;
  const obj4 = analyticsLocations(13245);
  const referralIncentiveEligibility = obj4.useReferralIncentiveEligibility({ location: "PremiumNitroHomeReferralProgramPerkCard" });
  let isEligibleForIncentive = referralIncentiveEligibility.isEligibleForIncentive;
  const items2 = [analyticsLocations];
  ({ referralRewardType, useAltReferralCardArt } = referralIncentiveEligibility);
  let callback = react.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { location_stack: analyticsLocations };
    obj.track(metroImportAll.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, obj2);
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.openLazy(asyncRequire(13246, dependencyMap.paths), "referral-program-share-action-sheet");
  }, items2);
  const items3 = [analyticsLocations];
  _require = 0;
  importDefault = 0;
  dependencyMap = 0;
  const callback1 = react.useCallback(() => {
    const obj = CollectiblesActionCreators;
    const obj2 = { tab: CollectibleShopTab.ORBS, analyticsLocations, analyticsSource: AnalyticsLocationDefault.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR };
    obj.openCollectiblesShop(obj2);
  }, items3);
  const item = stateFromStores.forEach((item) => {
    if (item === analyticsLocations(dependencyMap[19]).ReferralOfferStatus.REFERRER_REWARD_GRANTED) {
      closure_0 = closure_0 + 1;
      closure_1 = closure_1 + 1;
      dependencyMap = dependencyMap + 1;
    } else if (item === analyticsLocations(dependencyMap[19]).ReferralOfferStatus.CONVERTED) {
      closure_1 = closure_1 + 1;
      dependencyMap = dependencyMap + 1;
    } else if (item === analyticsLocations(dependencyMap[19]).ReferralOfferStatus.REDEEMED) {
      dependencyMap = dependencyMap + 1;
    }
  });
  const obj5 = { numRewardGranted: _require, numConverted: importDefault, numRedeemed: dependencyMap, numSent: stateFromStores.size };
  let tmp11 = null;
  if (isEligibleForIncentive) {
    tmp11 = referralRewardType;
  }
  const tmp2Result = tmp2(13255);
  const shouldShowSpendOrbsCta = tmp2Result.getShouldShowSpendOrbsCta(obj5, tmp11);
  let tmp15 = isEligibleForIncentive;
  const obj6 = { style: tmp.container, children: items4 };
  if (tmp15) {
    const obj7 = { text: intl.string(tmp2(1126).t.oW0eUd), color: tmp2(1188).BadgeColors.BRAND, style: tmp.betaBadge };
    const TextBadge = tmp2(1188).TextBadge;
    intl = tmp2(1126).intl;
    tmp15 = closure_11(TextBadge, obj7);
  }
  items4 = [tmp15, , , , ];
  const obj8 = { nReferralsSent: obj5.numSent, altImage: tmp19 };
  tmp19 = undefined;
  const tmp5Result = ProgressWheelDefault;
  if (useAltReferralCardArt) {
    let tmp5Result3;
    if (tmp11 === tmp2(13243).ReferralRewardType.ORBS) {
      tmp5Result3 = tmp5(13244);
    } else if (tmp11 === tmp2(13243).ReferralRewardType.DISCOUNT) {
      tmp5Result3 = tmp5(12983);
    }
    tmp19 = tmp5Result3;
  }
  items4[1] = closure_11(tmp5Result, obj8);
  items4[2] = closure_11(closure_16, { referralSentUsers });
  let str = "heading-lg/semibold";
  const obj9 = { style: tmp.contentContainer, children: items5 };
  const Text = tmp2(4886).Text;
  if (isEligibleForIncentive) {
    str = "heading-lg/bold";
  }
  const obj10 = { variant: str, color: "text-strong", style: tmp.heading, children: stringResult };
  if (tmp11 === tmp2(13243).ReferralRewardType.ORBS) {
    const intl4 = tmp2(1126).intl;
    stringResult = intl4.string(tmp2(1126).t.tAlkl4);
  } else if (tmp11 === tmp2(13243).ReferralRewardType.DISCOUNT) {
    const intl3 = tmp2(1126).intl;
    const obj11 = { discountPercent };
    stringResult = intl3.formatToPlainString(tmp2(1126).t["/JJ9I5"], obj11);
  } else {
    const intl2 = tmp2(1126).intl;
    stringResult = intl2.string(tmp2(1126).t.USo4s7);
  }
  items5 = [closure_11(Text, obj10), , ];
  let str2 = "text-md/medium";
  const Text2 = tmp2(4886).Text;
  if (isEligibleForIncentive) {
    str2 = "text-sm/medium";
  }
  let tmp23 = false !== stateFromStores1;
  const obj12 = { variant: str2, color: "text-subtle", style: tmp.bodyText, children: formatResult6 };
  const tmp5Result4 = HelpdeskUtilsDefault;
  const articleURL = tmp5Result4.getArticleURL(constants2.REFERRAL_PROGRAM);
  if (null != tmp11) {
    let formatResult3;
    if (obj5.numRewardGranted === tmp2(13242).MAX_REFERRALS_SENT) {
      let formatResult;
      if (tmp11 === tmp2(13243).ReferralRewardType.ORBS) {
        const intl15 = tmp2(1126).intl;
        const obj13 = { helpdeskArticle: articleURL };
        formatResult = intl15.format(tmp2(1126).t.OluhLp, obj13);
      } else {
        const intl14 = tmp2(1126).intl;
        const obj14 = { helpdeskArticle: articleURL };
        formatResult = intl14.format(tmp2(1126).t["8BYihN"], obj14);
      }
      formatResult3 = formatResult;
    } else if (obj5.numSent === tmp2(13242).MAX_REFERRALS_SENT) {
      let formatResult1;
      if (tmp11 === tmp2(13243).ReferralRewardType.ORBS) {
        const intl13 = tmp2(1126).intl;
        const obj15 = { helpdeskArticle: articleURL };
        formatResult1 = intl13.format(tmp2(1126).t["1aV1j9"], obj15);
      } else {
        const intl12 = tmp2(1126).intl;
        const obj16 = { helpdeskArticle: articleURL };
        formatResult1 = intl12.format(tmp2(1126).t.QNrPuS, obj16);
      }
      formatResult3 = formatResult1;
    } else if (tmp23) {
      let formatResult2;
      if (tmp11 === tmp2(13243).ReferralRewardType.ORBS) {
        const intl11 = tmp2(1126).intl;
        const obj17 = { numOrbs, helpdeskArticle: articleURL };
        formatResult2 = intl11.format(tmp2(1126).t.cfE0uG, obj17);
      } else {
        const intl10 = tmp2(1126).intl;
        const obj18 = { helpdeskArticle: articleURL };
        formatResult2 = intl10.format(tmp2(1126).t["+fcvlI"], obj18);
      }
      formatResult3 = formatResult2;
    } else {
      const intl9 = tmp2(1126).intl;
      const obj19 = { helpdeskArticle: articleURL };
      formatResult3 = intl9.format(tmp2(1126).t["a0+Jwv"], obj19);
    }
    formatResult6 = formatResult3;
  } else if (tmp23) {
    let formatResult5;
    if (obj5.numSent === tmp2(13242).MAX_REFERRALS_SENT) {
      let formatResult4;
      if (obj5.numRedeemed === tmp2(13242).MAX_REFERRALS_SENT) {
        const intl8 = tmp2(1126).intl;
        const obj20 = { helpdeskArticle: articleURL };
        formatResult4 = intl8.format(tmp2(1126).t["1aEjsH"], obj20);
      } else {
        const intl7 = tmp2(1126).intl;
        const obj21 = { helpdeskArticle: articleURL };
        formatResult4 = intl7.format(tmp2(1126).t["+u3AOO"], obj21);
      }
      formatResult5 = formatResult4;
    } else {
      const intl6 = tmp2(1126).intl;
      const obj22 = { helpdeskArticle: articleURL };
      formatResult5 = intl6.format(tmp2(1126).t["omMr+V"], obj22);
    }
    formatResult6 = formatResult5;
  } else {
    const intl5 = tmp2(1126).intl;
    const obj23 = { helpdeskArticle: articleURL };
    formatResult6 = intl5.format(tmp2(1126).t["zWhX/Q"], obj23);
  }
  items5[1] = closure_11(Text2, obj12);
  if (isEligibleForIncentive) {
    const obj24 = { nRewardsGranted: obj5.numRewardGranted, referralRewardType: tmp11 };
    isEligibleForIncentive = closure_11(tmp5(13259), obj24);
  }
  items5[2] = isEligibleForIncentive;
  items4[3] = closure_12(View, obj9);
  let tmp33 = shouldShowSpendOrbsCta;
  const obj25 = { style: tmp.buttonContainer, children: closure_11(Button, obj26) };
  Button = tmp2(5594).Button;
  if (!shouldShowSpendOrbsCta) {
    if (tmp23) {
      tmp23 = obj5.numSent !== tmp2(13242).MAX_REFERRALS_SENT;
    }
    tmp33 = tmp23;
  }
  obj26 = { variant: "primary", size: "sm", disabled: !tmp33, text: stringResult1, onPress: callback };
  const intl16 = tmp2(1126).intl;
  const string = intl16.string;
  const t = tmp2(1126).t;
  if (shouldShowSpendOrbsCta) {
    stringResult1 = string(t.iw5Ccc);
  } else {
    stringResult1 = string(t.Lm2nFc);
  }
  if (shouldShowSpendOrbsCta) {
    callback = callback1;
  }
  items4[4] = closure_11(View, obj25);
  return closure_12(View, obj6);
};