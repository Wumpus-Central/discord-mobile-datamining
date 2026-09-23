// discord_app/modules/premium/referral_program/native/ReferralProgramPerkCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import _modDef6243 from "../../../../../discord_assets/assets/mana/asset-library/generated/DiscountsMegaphoneSpotIllustration-2x.png.js";
import _modDef6657 from "../../../../../discord_assets/assets/mana/asset-library/generated/Orb3dIllustration-2x.png.js";
import useAnalyticsLocationsDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import ReferralTrialActionCreators from "../../ReferralTrialActionCreators.tsx";
import CollectiblesActionCreators from "../../../collectibles/CollectiblesActionCreators.tsx";
import useReferralProgramBannerDetails from "../hooks/useReferralProgramBannerDetails.tsx";
import RewardGrantNoticeDefault from "RewardGrantNotice.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ReferralTrialStore from "../../ReferralTrialStore.tsx";

const require = globalThis.__r;

require = fn;
function ReferredFriendAvatar(user) {
  user = user.user;
  const obj = {
    style: closure_13().referredFriendAvatar,
    children: closure_1_11(native.Avatar, {
      source: user.getAvatarSource(undefined, false, 24),
      size: native.AvatarSizes.XSMALL,
    }),
  };
  return closure_1_11(View, obj);
}
function AvailableReferralSlot(children) {
  return closure_1_11(View, {
    style: closure_13().availableReferralSlot,
    children: closure_1_11(Text_Text.Text, {
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
      let arr = items.push(closure_1_11(ReferredFriendAvatar, obj2, referralSentUsers[num].id));
    } else {
      let obj = { slotIndex: num + 1 };
      let arr3 = items.push(closure_1_11(AvailableReferralSlot, obj, num));
    }
  }
  const tmp = closure_13();
  return closure_1_11(View, { style: closure_13().progressIndicatorContainer, children: items });
}
const View = fn(17).View;
let Constants = fn(13796);
({ REFERRAL_INCENTIVE_DISCOUNT_PERCENTAGE: metroRequire, REFERRAL_INCENTIVE_ORBS_PER_CONVERSION: closure_7 } =
  Constants);
Constants = fn(1074);
({ AnalyticEvents: closure_8, HelpdeskArticles: closure_9 } = Constants);
const CollectibleShopTab = fn(1076).CollectibleShopTab;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4827);
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
let closure_13 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramPerkCard.tsx");

export const ReferralProgramPerkCard = function ReferralProgramPerkCard() {
  const tmp = closure_13();
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
  let callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack });
    const obj2 = { location_stack };
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(13800, dependencyMap.paths),
      "referral-program-share-action-sheet",
    );
  }, items2);
  const items3 = [analyticsLocations];
  closure_129_0 = 0;
  closure_129_1 = 0;
  closure_129_2 = 0;
  const callback1 = noop.useCallback(() => {
    const obj = CollectiblesActionCreators;
    obj.openCollectiblesShop({
      tab: CollectibleShopTab.ORBS,
      analyticsLocations,
      analyticsSource: AnalyticsLocationDefault.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR,
    });
  }, items3);
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
  const obj5 = {
    numRewardGranted: closure_129_0,
    numConverted: closure_129_1,
    numRedeemed: closure_129_2,
    numSent: stateFromStores.size,
  };
  let tmp11 = null;
  if (isEligibleForIncentive) {
    tmp11 = referralRewardType;
  }
  const obj4 = require("useReferralIncentiveEligibility");
  const shouldShowSpendOrbsCta = tmp2(13807).getShouldShowSpendOrbsCta(obj5, tmp11);
  const obj6 = { style: tmp.container, children: null };
  let tmp15 = isEligibleForIncentive;
  if (isEligibleForIncentive) {
    const obj7 = { text: null, color: null, style: null };
    const intl = tmp2(1115).intl;
    obj7.text = intl.string(tmp2(1115).t.oW0eUd);
    obj7.color = tmp2(1177).BadgeColors.BRAND;
    obj7.style = tmp.betaBadge;
    tmp15 = closure_11(tmp2(1177).TextBadge, obj7);
  }
  const items4 = [tmp15, , , ,];
  const obj8 = { nReferralsSent: obj5.numSent, altImage: null };
  if (!useAltReferralCardArt) {
    obj8.altImage = undefined;
    items4[1] = closure_11(tmp18, obj8);
    const obj9 = { referralSentUsers: obj.useReferralProgramBannerDetails().referralSentUsers };
    items4[2] = closure_11(ProgressIndicator, obj9);
    const obj10 = { style: tmp.contentContainer, children: null };
    let str = "heading-lg/semibold";
    if (isEligibleForIncentive) {
      str = "heading-lg/bold";
    }
    const obj11 = { variant: str, color: "text-strong", style: tmp.heading, children: null };
    if (tmp11 === tmp2(13798).ReferralRewardType.ORBS) {
      const intl4 = tmp2(1115).intl;
      let stringResult = intl4.string(tmp2(1115).t.tAlkl4);
    } else if (tmp11 === tmp2(13798).ReferralRewardType.DISCOUNT) {
      const intl3 = tmp2(1115).intl;
      const obj12 = { discountPercent };
      stringResult = intl3.formatToPlainString(tmp2(1115).t["/JJ9I5"], obj12);
    } else {
      const intl2 = tmp2(1115).intl;
      stringResult = intl2.string(tmp2(1115).t.USo4s7);
    }
    obj11.children = stringResult;
    const items5 = [closure_11(tmp2(4823).Text, obj11), ,];
    let str2 = "text-md/medium";
    if (isEligibleForIncentive) {
      str2 = "text-sm/medium";
    }
    let tmp24 = false !== stateFromStores1;
    const obj13 = { variant: str2, color: "text-subtle", style: tmp.bodyText, children: null };
    const articleURL = HelpdeskUtilsDefault.getArticleURL(constants2.REFERRAL_PROGRAM);
    if (null != tmp11) {
      if (obj5.numRewardGranted !== tmp2(13797).MAX_REFERRALS_SENT) {
        if (obj5.numSent === tmp2(13797).MAX_REFERRALS_SENT) {
          if (tmp11 === tmp2(13798).ReferralRewardType.ORBS) {
            const intl13 = tmp2(1115).intl;
            const obj14 = { helpdeskArticle: articleURL };
            let formatResult = intl13.format(tmp2(1115).t["1aV1j9"], obj14);
          } else {
            const intl12 = tmp2(1115).intl;
            const obj15 = { helpdeskArticle: articleURL };
            formatResult = intl12.format(tmp2(1115).t.QNrPuS, obj15);
          }
        } else if (tmp24) {
          if (tmp11 === tmp2(13798).ReferralRewardType.ORBS) {
            const intl11 = tmp2(1115).intl;
            const obj16 = { numOrbs, helpdeskArticle: articleURL };
            let formatResult1 = intl11.format(tmp2(1115).t.cfE0uG, obj16);
          } else {
            const intl10 = tmp2(1115).intl;
            const obj17 = { helpdeskArticle: articleURL };
            formatResult1 = intl10.format(tmp2(1115).t["+fcvlI"], obj17);
          }
        } else {
          const intl9 = tmp2(1115).intl;
          const obj18 = { helpdeskArticle: articleURL };
          intl9.format(tmp2(1115).t["a0+Jwv"], obj18);
        }
      }
      if (tmp11 === tmp2(13798).ReferralRewardType.ORBS) {
        const intl15 = tmp2(1115).intl;
        const obj19 = { helpdeskArticle: articleURL };
        let formatResult3 = intl15.format(tmp2(1115).t.OluhLp, obj19);
      } else {
        const intl14 = tmp2(1115).intl;
        const obj20 = { helpdeskArticle: articleURL };
        formatResult3 = intl14.format(tmp2(1115).t["8BYihN"], obj20);
      }
    } else if (tmp24) {
      if (obj5.numSent !== tmp2(13797).MAX_REFERRALS_SENT) {
        const intl6 = tmp2(1115).intl;
        const obj21 = { helpdeskArticle: articleURL };
        intl6.format(tmp2(1115).t["omMr+V"], obj21);
      }
      if (obj5.numRedeemed === tmp2(13797).MAX_REFERRALS_SENT) {
        const intl8 = tmp2(1115).intl;
        const obj22 = { helpdeskArticle: articleURL };
        let formatResult5 = intl8.format(tmp2(1115).t["1aEjsH"], obj22);
      } else {
        const intl7 = tmp2(1115).intl;
        const obj23 = { helpdeskArticle: articleURL };
        formatResult5 = intl7.format(tmp2(1115).t["+u3AOO"], obj23);
      }
    } else {
      const intl5 = tmp2(1115).intl;
      const obj24 = { helpdeskArticle: articleURL };
      obj13.children = intl5.format(tmp2(1115).t["zWhX/Q"], obj24);
      items5[1] = closure_11(tmp2(4823).Text, obj13);
      if (isEligibleForIncentive) {
        const obj25 = { nRewardsGranted: obj5.numRewardGranted, referralRewardType: tmp11 };
        isEligibleForIncentive = closure_11(RewardGrantNoticeDefault, obj25);
      }
      items5[2] = isEligibleForIncentive;
      obj10.children = items5;
      items4[3] = closure_12(View, obj10);
      const obj26 = { style: tmp.buttonContainer, children: null };
      let tmp38 = shouldShowSpendOrbsCta;
      if (!shouldShowSpendOrbsCta) {
        if (tmp24) {
          tmp24 = obj5.numSent !== tmp2(13797).MAX_REFERRALS_SENT;
        }
        tmp38 = tmp24;
      }
      const obj27 = { variant: "primary", size: "sm", disabled: !tmp38, text: null, onPress: null };
      const intl16 = tmp2(1115).intl;
      const string = intl16.string;
      const t = tmp2(1115).t;
      if (shouldShowSpendOrbsCta) {
        let stringResult1 = string(t.iw5Ccc);
      } else {
        stringResult1 = string(t.Lm2nFc);
      }
      obj27.text = stringResult1;
      if (shouldShowSpendOrbsCta) {
        callback = callback1;
      }
      obj27.onPress = callback;
      obj26.children = closure_11(tmp2(5271).Button, obj27);
      items4[4] = closure_11(View, obj26);
      obj6.children = items4;
      return closure_12(View, obj6);
    }
    const tmp5Result = HelpdeskUtilsDefault;
  } else if (tmp11 === tmp2(13798).ReferralRewardType.ORBS) {
    let tmp5Result2 = _modDef6657;
  } else if (tmp11 === tmp2(13798).ReferralRewardType.DISCOUNT) {
    tmp5Result2 = _modDef6243;
  }
  const tmp2Result = tmp2(13807);
};
