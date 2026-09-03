// === Module 13338: ReferredFriendAvatar ===

// Module 13338 (ReferredFriendAvatar)
import ThemesDefault from "Themes" /* 709 */;
import Button from "Button" /* 1296 */;
import Text from "Text" /* 4474 */;
import contextDefault from "context" /* 5962 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 5982 */;
import MAX_REFERRALS_SENT from "MAX_REFERRALS_SENT" /* 13339 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "emitChanges" /* 7207 */;
import ME from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function ReferredFriendAvatar(user) {
  user = user.user;
  let obj = { style: callback2().referredFriendAvatar, children: null };
  obj = { source: user.getAvatarSource(undefined, false, 24), size: Button.AvatarSizes.XSMALL };
  obj[1] = callback(Button.Avatar, obj);
  return callback(View, obj);
}
function AvailableReferralSlot(children) {
  return callback(View, { style: callback2().availableReferralSlot, children: callback(Text.Text, { variant: "text-xs/medium", color: "text-strong", children: children.slotIndex }) });
}
function ProgressIndicator(referralSentUsers) {
  referralSentUsers = referralSentUsers.referralSentUsers;
  const items = [];
  let num = 0;
  if (0 < MAX_REFERRALS_SENT.MAX_REFERRALS_SENT) {
    do {
      let tmp2 = num;
      if (null != referralSentUsers[num]) {
        let tmp6 = callback;
        let tmp7 = ReferredFriendAvatar;
        let obj = { user: null };
        obj[0] = referralSentUsers[num];
        let arr = items.push(callback(ReferredFriendAvatar, obj, referralSentUsers[num].id));
      } else {
        let tmp3 = callback;
        let tmp4 = AvailableReferralSlot;
        obj = { slotIndex: null };
        obj[0] = num + 1;
        arr = items.push(callback(AvailableReferralSlot, obj, num));
      }
      num = num + 1;
      let tmp9 = require;
      let tmp10 = dependencyMap;
    } while (num < MAX_REFERRALS_SENT.MAX_REFERRALS_SENT);
  }
  obj = { style: callback2().progressIndicatorContainer, children: items };
  return callback(View, obj);
}
({ AnalyticEvents: closure_6, HelpdeskArticles: error } = ME);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, betaBadge: null, progressIndicatorContainer: null, availableReferralSlot: null, referredFriendAvatar: null, contentContainer: null, heading: null, bodyText: null, buttonContainer: null };
createCacheKey = { width: 320, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center" };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", top: ThemesDefault.space.PX_16, left: ThemesDefault.space.PX_16, zIndex: 1 };
createCacheKey[2] = { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", gap: 8, marginTop: 16, marginLeft: 24 };
let obj1 = { position: "absolute", top: ThemesDefault.space.PX_16, left: ThemesDefault.space.PX_16, zIndex: 1 };
createCacheKey[3] = { width: 24, height: 24, borderRadius: ThemesDefault.radii.xxl, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, justifyContent: "center", alignItems: "center" };
let obj2 = { width: 24, height: 24, borderRadius: ThemesDefault.radii.xxl, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, justifyContent: "center", alignItems: "center" };
createCacheKey[4] = { borderWidth: 2, borderColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.round };
createCacheKey[5] = { alignItems: "flex-start", paddingHorizontal: 24, gap: 8, marginTop: 12 };
createCacheKey[6] = { textAlign: "left" };
createCacheKey[7] = { textAlign: "left" };
let obj3 = { borderWidth: 2, borderColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.round };
createCacheKey[8] = { paddingHorizontal: ThemesDefault.space.PX_16, width: "100%", marginTop: ThemesDefault.space.PX_24, marginBottom: ThemesDefault.space.PX_16 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj4 = { paddingHorizontal: ThemesDefault.space.PX_16, width: "100%", marginTop: ThemesDefault.space.PX_24, marginBottom: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramPerkCard.tsx");

export const ReferralProgramPerkCard = function ReferralProgramPerkCard() {
  const tmp = callback2();
  let obj = _require(13339);
  obj1 = _require(586);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => store.getRecipientStatus());
  let obj2 = _require(586);
  const items1 = [closure_5];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => store.getHasEligibleFriends());
  const analyticsLocations = contextDefault(QUICK_SWITCHERDefault.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR).analyticsLocations;
  _require = analyticsLocations;
  let obj3 = _require(13342);
  const referralIncentiveEligibility = obj3.useReferralIncentiveEligibility({ location: "PremiumNitroHomeReferralProgramPerkCard" });
  let isEligibleForIncentive = referralIncentiveEligibility.isEligibleForIncentive;
  const items2 = [analyticsLocations];
  ({ referralRewardType, useAltReferralCardArt } = referralIncentiveEligibility);
  _require = 0;
  importDefault = 0;
  dependencyMap = 0;
  const callback = React.useCallback(() => {
    let obj = v02(paths[21]);
    obj = { location_stack: v0 };
    obj.track(closure_1_6.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, obj);
    v02(paths[22]).openLazy(v0(paths[24])(paths[23], paths.paths), "referral-program-share-action-sheet");
  }, items2);
  const item = stateFromStores.forEach((arg0) => {
    if (arg0 === v0(paths[16]).ReferralOfferStatus.REFERRER_REWARD_GRANTED) {
      closure_0 = closure_0 + 1;
      closure_1 = closure_1 + 1;
      closure_2 = closure_2 + 1;
    } else if (arg0 === tmp(tmp2[16]).ReferralOfferStatus.CONVERTED) {
      closure_1 = closure_1 + 1;
      closure_2 = closure_2 + 1;
    } else if (arg0 === tmp(tmp2[16]).ReferralOfferStatus.REDEEMED) {
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
    const intl = tmp2(1233).intl;
    obj[0] = intl.string(tmp2(1233).t.oW0eUd);
    obj[1] = tmp2(1296).BadgeColors.BRAND;
    obj[2] = tmp.betaBadge;
    tmp15 = callback(tmp2(1296).TextBadge, obj);
  }
  const items3 = [tmp15, , , , ];
  obj1 = { nReferralsSent: size, altImage: null };
  if (!useAltReferralCardArt) {
    obj1[1] = undefined;
    items3[1] = tmp17(tmp18, obj1);
    obj2 = { referralSentUsers: null };
    obj2[0] = obj.useReferralProgramBannerDetails().referralSentUsers;
    items3[2] = tmp17(ProgressIndicator, obj2);
    obj3 = { style: null, children: null };
    obj3[0] = tmp.contentContainer;
    let str = "heading-lg/semibold";
    if (isEligibleForIncentive) {
      str = "heading-lg/bold";
    }
    const obj4 = { variant: null, color: "text-strong", style: null, children: null };
    obj4[0] = str;
    obj4[2] = tmp.heading;
    if (tmp12 === tmp2(13340).ReferralRewardType.ORBS) {
      const intl4 = tmp2(1233).intl;
      let stringResult = intl4.string(tmp2(1233).t.kO23jV);
    } else if (tmp12 === tmp2(13340).ReferralRewardType.DISCOUNT) {
      const intl3 = tmp2(1233).intl;
      stringResult = intl3.string(tmp2(1233).t["/JJ9I5"]);
    } else {
      const intl2 = tmp2(1233).intl;
      stringResult = intl2.string(tmp2(1233).t.USo4s7);
    }
    obj4[3] = stringResult;
    const items4 = [tmp17(tmp2(4474).Text, obj4), , ];
    let str2 = "text-md/medium";
    if (isEligibleForIncentive) {
      str2 = "text-sm/medium";
    }
    const obj5 = { variant: null, color: "text-subtle", style: null, children: null };
    obj5[0] = str2;
    obj5[2] = tmp.bodyText;
    let tmp5Result = tmp5(1994);
    const articleURL = tmp5Result.getArticleURL(constants.REFERRAL_PROGRAM);
    if (null != tmp12) {
      if (!tmp23) {
        const intl9 = tmp2(1233).intl;
        const obj6 = { helpdeskArticle: null };
        obj6[0] = articleURL;
        intl9.format(tmp2(1233).t["zWhX/Q"], obj6);
      }
      if (size !== tmp2(13339).MAX_REFERRALS_SENT) {
        if (tmp12 === tmp2(13340).ReferralRewardType.ORBS) {
          const intl11 = tmp2(1233).intl;
          const obj7 = { numOrbs: null, helpdeskArticle: null };
          obj7[0] = tmp2(13341).REFERRAL_ORBS_PER_CONVERSION;
          obj7[1] = articleURL;
          let formatResult1 = intl11.format(tmp2(1233).t.Ka9J40, obj7);
        } else {
          const intl10 = tmp2(1233).intl;
          const obj8 = { helpdeskArticle: null };
          obj8[0] = articleURL;
          formatResult1 = intl10.format(tmp2(1233).t.kBsllF, obj8);
        }
      }
      if (tmp11 === tmp2(13339).MAX_REFERRALS_SENT) {
        const intl13 = tmp2(1233).intl;
        const obj9 = { helpdeskArticle: null };
        obj9[0] = articleURL;
        let formatResult2 = intl13.format(tmp2(1233).t.ZskKu1, obj9);
      } else {
        const intl12 = tmp2(1233).intl;
        const obj10 = { helpdeskArticle: null };
        obj10[0] = articleURL;
        formatResult2 = intl12.format(tmp2(1233).t.tSiyfF, obj10);
      }
    } else if (tmp23) {
      if (size !== tmp2(13339).MAX_REFERRALS_SENT) {
        const intl6 = tmp2(1233).intl;
        const obj11 = { helpdeskArticle: null };
        obj11[0] = articleURL;
        intl6.format(tmp2(1233).t["omMr+V"], obj11);
      }
      if (tmp11 === tmp2(13339).MAX_REFERRALS_SENT) {
        const intl8 = tmp2(1233).intl;
        const obj12 = { helpdeskArticle: null };
        obj12[0] = articleURL;
        let formatResult4 = intl8.format(tmp2(1233).t["1aEjsH"], obj12);
      } else {
        const intl7 = tmp2(1233).intl;
        const obj13 = { helpdeskArticle: null };
        obj13[0] = articleURL;
        formatResult4 = intl7.format(tmp2(1233).t["+u3AOO"], obj13);
      }
    } else {
      const intl5 = tmp2(1233).intl;
      const obj14 = { helpdeskArticle: null };
      obj14[0] = articleURL;
      obj5[3] = intl5.format(tmp2(1233).t["zWhX/Q"], obj14);
      items4[1] = tmp17(tmp2(4474).Text, obj5);
      if (isEligibleForIncentive) {
        const obj15 = { nRewardsGranted: null, referralRewardType: null };
        obj15[0] = _require;
        obj15[1] = tmp12;
        isEligibleForIncentive = tmp17(tmp5(13341), obj15);
      }
      items4[2] = isEligibleForIncentive;
      obj3[1] = items4;
      items3[3] = tmp13(tmp14, obj3);
      const obj16 = { style: null, children: null };
      obj16[0] = tmp.buttonContainer;
      let tmp34 = !tmp23;
      if (tmp23) {
        tmp34 = size === tmp2(13339).MAX_REFERRALS_SENT;
      }
      const obj17 = { variant: "primary", size: "sm", disabled: null, text: null, onPress: null };
      obj17[2] = tmp34;
      const intl14 = tmp2(1233).intl;
      obj17[3] = intl14.string(tmp2(1233).t.Lm2nFc);
      obj17[4] = callback;
      obj16[1] = tmp17(tmp2(4929).Button, obj17);
      items3[4] = tmp17(tmp14, obj16);
      obj[1] = items3;
      return tmp13(tmp14, obj);
    }
  } else if (tmp12 === tmp2(13340).ReferralRewardType.ORBS) {
    tmp5Result = tmp5(6894);
  } else if (tmp12 === tmp2(13340).ReferralRewardType.DISCOUNT) {
    tmp5Result = tmp5(6486);
  }
};