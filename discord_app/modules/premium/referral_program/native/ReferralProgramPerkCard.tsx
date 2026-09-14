// discord_app/modules/premium/referral_program/native/ReferralProgramPerkCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import _modDef6019 from "../../../../../discord_assets/assets/mana/asset-library/generated/DiscountsMegaphoneSpotIllustration-2x.png.js";
import _modDef6431 from "../../../../../discord_assets/assets/mana/asset-library/generated/Orb3dIllustration-2x.png.js";
import useAnalyticsLocationsDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import ReferralTrialActionCreators from "../../ReferralTrialActionCreators.tsx";
import useReferralProgramBannerDetails from "../hooks/useReferralProgramBannerDetails.tsx";
import RewardGrantNoticeDefault from "RewardGrantNotice.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ReferralTrialStore from "../../ReferralTrialStore.tsx";

const require = globalThis.__r;

require = fn;
function ReferredFriendAvatar(user) {
  user = user.user;
  const obj = {
    style: closure_12().referredFriendAvatar,
    children: closure_1_10(native.Avatar, {
      source: user.getAvatarSource(undefined, false, 24),
      size: native.AvatarSizes.XSMALL,
    }),
  };
  return closure_1_10(View, obj);
}
function AvailableReferralSlot(children) {
  return closure_1_10(View, {
    style: closure_12().availableReferralSlot,
    children: closure_1_10(Text_Text.Text, {
      variant: "text-xs/medium",
      color: "text-strong",
      children: children.slotIndex,
    }),
  });
}
function ProgressIndicator(referralSentUsers) {
  referralSentUsers = referralSentUsers.referralSentUsers;
  const items = [];
  for (let num = 0; num < useReferralProgramBannerDetails.MAX_REFERRALS_SENT; num = num + 1) {
    if (null != referralSentUsers[num]) {
      let obj2 = { user: referralSentUsers[num] };
      let arr = items.push(closure_1_10(ReferredFriendAvatar, obj2, referralSentUsers[num].id));
    } else {
      let obj = { slotIndex: num + 1 };
      let arr3 = items.push(closure_1_10(AvailableReferralSlot, obj, num));
    }
  }
  const tmp = closure_12();
  return closure_1_10(View, { style: closure_12().progressIndicatorContainer, children: items });
}
const View = fn(17).View;
let Constants = fn(13521);
({ REFERRAL_INCENTIVE_DISCOUNT_PERCENTAGE: metroRequire, REFERRAL_INCENTIVE_ORBS_PER_CONVERSION: closure_7 } =
  Constants);
Constants = fn(1074);
({ AnalyticEvents: closure_8, HelpdeskArticles: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4636);
let obj2 = {
  container: null,
  betaBadge: null,
  progressIndicatorContainer: null,
  availableReferralSlot: null,
  referredFriendAvatar: null,
  contentContainer: null,
  heading: null,
  bodyText: null,
  buttonContainer: null,
};
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.container = {
  width: 320,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  alignItems: "center",
};
const rect = { position: "absolute", top: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16, zIndex: 1 };
obj2.betaBadge = rect;
obj2.progressIndicatorContainer = {
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "flex-start",
  gap: 8,
  marginTop: 16,
  marginLeft: 24,
};
let size = {
  width: 24,
  height: 24,
  borderRadius: nativeDefault.radii.xxl,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  justifyContent: "center",
  alignItems: "center",
};
obj2.availableReferralSlot = size;
let obj3 = {
  width: 320,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  alignItems: "center",
};
obj2.referredFriendAvatar = {
  borderWidth: 2,
  borderColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.round,
};
obj2.contentContainer = { alignItems: "flex-start", paddingHorizontal: 24, gap: 8, marginTop: 12 };
obj2.heading = { textAlign: "left" };
obj2.bodyText = { textAlign: "left" };
let obj4 = {
  borderWidth: 2,
  borderColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.round,
};
obj2.buttonContainer = {
  paddingHorizontal: nativeDefault.space.PX_16,
  width: "100%",
  marginTop: nativeDefault.space.PX_24,
  marginBottom: nativeDefault.space.PX_16,
};
let closure_12 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramPerkCard.tsx");

export const ReferralProgramPerkCard = function ReferralProgramPerkCard() {
  const tmp = closure_12();
  const tmp2 = _require;
  let obj = require("useReferralProgramBannerDetails");
  const items = [ReferralTrialStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    ReferralTrialStore.getRecipientStatus(),
  );
  let obj2 = require("initialize");
  const items1 = [ReferralTrialStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () =>
    ReferralTrialStore.getHasEligibleFriends(),
  );
  const obj3 = require("initialize");
  const analyticsLocations = useAnalyticsLocationsDefault(
    AnalyticsLocationDefault.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR,
  ).analyticsLocations;
  _require = analyticsLocations;
  const referralIncentiveEligibility = require("useReferralIncentiveEligibility").useReferralIncentiveEligibility({
    location: "PremiumNitroHomeReferralProgramPerkCard",
  });
  let isEligibleForIncentive = referralIncentiveEligibility.isEligibleForIncentive;
  const items2 = [analyticsLocations];
  ({ referralRewardType, useAltReferralCardArt } = referralIncentiveEligibility);
  closure_129_0 = 0;
  closure_129_1 = 0;
  closure_129_2 = 0;
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack });
    const obj2 = { location_stack };
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(13525, dependencyMap.paths),
      "referral-program-share-action-sheet",
    );
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
  const obj5 = { style: tmp.container, children: null };
  let tmp15 = isEligibleForIncentive;
  if (isEligibleForIncentive) {
    const obj6 = { text: null, color: null, style: null };
    const intl = tmp2(1114).intl;
    obj6.text = intl.string(tmp2(1114).t.oW0eUd);
    obj6.color = tmp2(1176).BadgeColors.BRAND;
    obj6.style = tmp.betaBadge;
    tmp15 = closure_10(tmp2(1176).TextBadge, obj6);
  }
  const items3 = [tmp15, , , ,];
  const obj7 = { nReferralsSent: size, altImage: null };
  if (!useAltReferralCardArt) {
    obj7.altImage = undefined;
    items3[1] = closure_10(tmp18, obj7);
    const obj8 = { referralSentUsers: obj.useReferralProgramBannerDetails().referralSentUsers };
    items3[2] = closure_10(ProgressIndicator, obj8);
    const obj9 = { style: tmp.contentContainer, children: null };
    let str = "heading-lg/semibold";
    if (isEligibleForIncentive) {
      str = "heading-lg/bold";
    }
    const obj10 = { variant: str, color: "text-strong", style: tmp.heading, children: null };
    if (tmp12 === tmp2(13523).ReferralRewardType.ORBS) {
      const intl4 = tmp2(1114).intl;
      let stringResult = intl4.string(tmp2(1114).t.tAlkl4);
    } else if (tmp12 === tmp2(13523).ReferralRewardType.DISCOUNT) {
      const intl3 = tmp2(1114).intl;
      const obj11 = { discountPercent };
      stringResult = intl3.formatToPlainString(tmp2(1114).t["/JJ9I5"], obj11);
    } else {
      const intl2 = tmp2(1114).intl;
      stringResult = intl2.string(tmp2(1114).t.USo4s7);
    }
    obj10.children = stringResult;
    const items4 = [closure_10(tmp2(4632).Text, obj10), ,];
    let str2 = "text-md/medium";
    if (isEligibleForIncentive) {
      str2 = "text-sm/medium";
    }
    const obj12 = { variant: str2, color: "text-subtle", style: tmp.bodyText, children: null };
    const articleURL = HelpdeskUtilsDefault.getArticleURL(constants2.REFERRAL_PROGRAM);
    if (null != tmp12) {
      if (tmp10 !== tmp2(13522).MAX_REFERRALS_SENT) {
        if (size === tmp2(13522).MAX_REFERRALS_SENT) {
          if (tmp12 === tmp2(13523).ReferralRewardType.ORBS) {
            const intl13 = tmp2(1114).intl;
            const obj13 = { helpdeskArticle: articleURL };
            let formatResult = intl13.format(tmp2(1114).t["1aV1j9"], obj13);
          } else {
            const intl12 = tmp2(1114).intl;
            const obj14 = { helpdeskArticle: articleURL };
            formatResult = intl12.format(tmp2(1114).t.QNrPuS, obj14);
          }
        } else if (tmp24) {
          if (tmp12 === tmp2(13523).ReferralRewardType.ORBS) {
            const intl11 = tmp2(1114).intl;
            const obj15 = { numOrbs, helpdeskArticle: articleURL };
            let formatResult1 = intl11.format(tmp2(1114).t.cfE0uG, obj15);
          } else {
            const intl10 = tmp2(1114).intl;
            const obj16 = { helpdeskArticle: articleURL };
            formatResult1 = intl10.format(tmp2(1114).t["+fcvlI"], obj16);
          }
        } else {
          const intl9 = tmp2(1114).intl;
          const obj17 = { helpdeskArticle: articleURL };
          intl9.format(tmp2(1114).t["a0+Jwv"], obj17);
        }
      }
      if (tmp12 === tmp2(13523).ReferralRewardType.ORBS) {
        const intl15 = tmp2(1114).intl;
        const obj18 = { helpdeskArticle: articleURL };
        let formatResult3 = intl15.format(tmp2(1114).t.OluhLp, obj18);
      } else {
        const intl14 = tmp2(1114).intl;
        const obj19 = { helpdeskArticle: articleURL };
        formatResult3 = intl14.format(tmp2(1114).t["8BYihN"], obj19);
      }
    } else if (tmp24) {
      if (size !== tmp2(13522).MAX_REFERRALS_SENT) {
        const intl6 = tmp2(1114).intl;
        const obj20 = { helpdeskArticle: articleURL };
        intl6.format(tmp2(1114).t["omMr+V"], obj20);
      }
      if (tmp11 === tmp2(13522).MAX_REFERRALS_SENT) {
        const intl8 = tmp2(1114).intl;
        const obj21 = { helpdeskArticle: articleURL };
        let formatResult5 = intl8.format(tmp2(1114).t["1aEjsH"], obj21);
      } else {
        const intl7 = tmp2(1114).intl;
        const obj22 = { helpdeskArticle: articleURL };
        formatResult5 = intl7.format(tmp2(1114).t["+u3AOO"], obj22);
      }
    } else {
      const intl5 = tmp2(1114).intl;
      const obj23 = { helpdeskArticle: articleURL };
      obj12.children = intl5.format(tmp2(1114).t["zWhX/Q"], obj23);
      items4[1] = closure_10(tmp2(4632).Text, obj12);
      if (isEligibleForIncentive) {
        const obj24 = { nRewardsGranted: tmp10, referralRewardType: tmp12 };
        isEligibleForIncentive = closure_10(RewardGrantNoticeDefault, obj24);
      }
      items4[2] = isEligibleForIncentive;
      obj9.children = items4;
      items3[3] = closure_11(View, obj9);
      const obj25 = { style: tmp.buttonContainer, children: null };
      let tmp38 = !tmp24;
      if (tmp24) {
        tmp38 = size === tmp2(13522).MAX_REFERRALS_SENT;
      }
      const obj26 = { variant: "primary", size: "sm", disabled: tmp38, text: null, onPress: null };
      const intl16 = tmp2(1114).intl;
      obj26.text = intl16.string(tmp2(1114).t.Lm2nFc);
      obj26.onPress = callback;
      obj25.children = closure_10(tmp2(5056).Button, obj26);
      items3[4] = closure_10(View, obj25);
      obj5.children = items3;
      return closure_11(View, obj5);
    }
    const tmp5Result = HelpdeskUtilsDefault;
  } else if (tmp12 === tmp2(13523).ReferralRewardType.ORBS) {
    let tmp5Result2 = _modDef6431;
  } else if (tmp12 === tmp2(13523).ReferralRewardType.DISCOUNT) {
    tmp5Result2 = _modDef6019;
  }
  const obj4 = require("useReferralIncentiveEligibility");
  tmp11 = closure_129_2;
};
