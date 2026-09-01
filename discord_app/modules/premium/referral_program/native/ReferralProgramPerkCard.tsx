// discord_app/modules/premium/referral_program/native/ReferralProgramPerkCard.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import combinedDefault from "../../../../utils/HelpdeskUtils.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import contextDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import QUICK_SWITCHERDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import MAX_REFERRALS_SENT from "../hooks/useReferralProgramBannerDetails.tsx";
import ProgressWheelDefault from "ProgressWheel.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../ReferralTrialStore.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function ReferredFriendAvatar(user) {
  user = user.user;
  let obj = { style: callback2().referredFriendAvatar, children: null };
  obj = { source: user.getAvatarSource(undefined, false, 24), size: Button.AvatarSizes.XSMALL };
  obj[1] = callback(Button.Avatar, obj);
  return callback(View, obj);
}
function AvailableReferralSlot(children) {
  return callback(View, {
    style: callback2().availableReferralSlot,
    children: callback(Text.Text, { variant: "text-xs/medium", color: "text-strong", children: children.slotIndex }),
  });
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
createCacheKey = {
  container: null,
  progressIndicatorContainer: null,
  availableReferralSlot: null,
  referredFriendAvatar: null,
  contentContainer: null,
  heading: null,
  bodyText: null,
  buttonContainer: null,
};
createCacheKey = {
  width: 320,
  borderRadius: ThemesDefault.radii.sm,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  alignItems: "center",
};
const merged = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
createCacheKey[0] = createCacheKey;
createCacheKey[1] = {
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "flex-start",
  gap: 8,
  marginTop: 16,
  marginLeft: 24,
};
createCacheKey[2] = {
  width: 24,
  height: 24,
  borderRadius: ThemesDefault.radii.xxl,
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG,
  justifyContent: "center",
  alignItems: "center",
};
let obj1 = {
  width: 24,
  height: 24,
  borderRadius: ThemesDefault.radii.xxl,
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG,
  justifyContent: "center",
  alignItems: "center",
};
createCacheKey[3] = {
  borderWidth: 2,
  borderColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: ThemesDefault.radii.round,
};
createCacheKey[4] = { alignItems: "flex-start", paddingHorizontal: 24, gap: 8, marginTop: 12 };
createCacheKey[5] = { textAlign: "left" };
createCacheKey[6] = { textAlign: "left" };
let obj2 = {
  borderWidth: 2,
  borderColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: ThemesDefault.radii.round,
};
createCacheKey[7] = {
  paddingHorizontal: ThemesDefault.space.PX_16,
  width: "100%",
  marginTop: ThemesDefault.space.PX_24,
  marginBottom: ThemesDefault.space.PX_16,
};
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj3 = {
  paddingHorizontal: ThemesDefault.space.PX_16,
  width: "100%",
  marginTop: ThemesDefault.space.PX_24,
  marginBottom: ThemesDefault.space.PX_16,
};
const result = require("set").fileFinishedImporting(
  "modules/premium/referral_program/native/ReferralProgramPerkCard.tsx",
);

export const ReferralProgramPerkCard = function ReferralProgramPerkCard() {
  const tmp = callback2();
  let obj = analyticsLocations(13105);
  obj1 = analyticsLocations(589);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => store.getRecipientStatus());
  let obj3 = analyticsLocations(589);
  const items1 = [closure_5];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => store.getHasEligibleFriends());
  let obj4 = importDefault;
  analyticsLocations = contextDefault(
    QUICK_SWITCHERDefault.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR,
  ).analyticsLocations;
  let everyResult = stateFromStores.size === analyticsLocations(13105).MAX_REFERRALS_SENT;
  if (everyResult) {
    const items2 = [];
    HermesBuiltin.arraySpread(stateFromStores.values(), 0);
    everyResult = items2.every((arg0) => arg0 === analyticsLocations(table[15]).ReferralOfferStatus.REDEEMED);
  }
  const items3 = [analyticsLocations];
  obj = { style: tmp.container, children: null };
  const callback = React.useCallback(() => {
    let obj = closure_1_1(closure_1_2[16]);
    obj = { location_stack: analyticsLocations };
    obj.track(closure_1_6.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, obj);
    closure_1_1(closure_1_2[17]).openLazy(
      analyticsLocations(closure_1_2[19])(closure_1_2[18], closure_1_2.paths),
      "referral-program-share-action-sheet",
    );
  }, items3);
  obj = { nReferralsSent: stateFromStores.size };
  const items4 = [
    callback(ProgressWheelDefault, obj),
    callback(ProgressIndicator, { referralSentUsers: obj.useReferralProgramBannerDetails().referralSentUsers }),
    ,
  ];
  obj1 = { style: tmp.contentContainer, children: null };
  const obj2 = { variant: "heading-lg/semibold", color: "text-strong", style: tmp.heading, children: null };
  const intl = tmp2(1236).intl;
  obj2[3] = intl.string(analyticsLocations(1236).t.USo4s7);
  const items5 = [callback(analyticsLocations(4474).Text, obj2)];
  obj3 = { variant: "text-md/medium", color: "text-subtle", style: tmp.bodyText, children: null };
  if (false !== stateFromStores1) {
    if (tmp14 !== tmp2(13105).MAX_REFERRALS_SENT) {
      const intl3 = tmp2(1236).intl;
      obj4 = { helpdeskArticle: null };
      let obj5Result = combinedDefault;
      obj4[0] = obj5Result.getArticleURL(constants.REFERRAL_PROGRAM);
      intl3.format(tmp2(1236).t["omMr+V"], obj4);
    }
    const intl4 = tmp2(1236).intl;
    const format = intl4.format;
    let t = tmp2(1236).t;
    if (everyResult) {
      t = { helpdeskArticle: null };
      obj4 = combinedDefault;
      t[0] = obj4.getArticleURL(constants.REFERRAL_PROGRAM);
      let formatResult1 = format(t["1aEjsH"], t);
    } else {
      const obj5 = { helpdeskArticle: null };
      obj5Result = combinedDefault;
      obj5[0] = obj5Result.getArticleURL(constants.REFERRAL_PROGRAM);
      formatResult1 = format(t["+u3AOO"], obj5);
    }
  } else {
    const intl2 = tmp2(1236).intl;
    const obj6 = { helpdeskArticle: null };
    obj6[0] = combinedDefault.getArticleURL(constants.REFERRAL_PROGRAM);
    obj3[3] = intl2.format(tmp2(1236).t["zWhX/Q"], obj6);
    items5[1] = tmp12(tmp13, obj3);
    obj1[1] = items5;
    items4[2] = tmp10(tmp11, obj1);
    const obj7 = { style: null, children: null };
    obj7[0] = tmp.buttonContainer;
    let tmp22 = false === stateFromStores1;
    if (!tmp22) {
      tmp22 = stateFromStores.size === tmp2(13105).MAX_REFERRALS_SENT;
    }
    const obj8 = { variant: "primary", size: "sm", disabled: null, text: null, onPress: null };
    obj8[2] = tmp22;
    const intl5 = tmp2(1236).intl;
    obj8[3] = intl5.string(tmp2(1236).t.Lm2nFc);
    obj8[4] = callback;
    obj7[1] = tmp12(tmp2(4928).Button, obj8);
    items4[3] = tmp12(tmp11, obj7);
    obj[1] = items4;
    return tmp10(tmp11, obj);
  }
};
