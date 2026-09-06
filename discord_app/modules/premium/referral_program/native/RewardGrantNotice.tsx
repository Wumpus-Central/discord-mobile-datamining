// discord_app/modules/premium/referral_program/native/RewardGrantNotice.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import CheckmarkSmallIcon from "../../../../design/components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx";
import BalanceWidgetPill from "../../../virtual_currency/native/index.tsx";
import apexExperiment from "../../experiments/PremiumReferralIncentivesExperiment.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import REFERRAL_TRIAL_OFFER_EXPIRATION_DAYS from "../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function OrbsGrantNotice(nRewardsGranted) {
  const tmp = callback3();
  let obj = { style: tmp.orbsPillContainer, children: null };
  obj = {
    initialRenderedBalance: 0,
    balance: nRewardsGranted.nRewardsGranted * closure_5,
    style: tmp.balancePillOverride,
  };
  const items = [callback(BalanceWidgetPill.BalanceWidgetPill, obj)];
  obj = { variant: "text-sm/medium", color: "text-strong", children: null };
  const intl = getSystemLocale.intl;
  const items1 = [" ", intl.string(getSystemLocale.t.UhguER)];
  obj[2] = items1;
  items[1] = callback2(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
function DiscountGrantNotice(nRewardsGranted) {
  nRewardsGranted = nRewardsGranted.nRewardsGranted;
  let obj = { style: callback3().container, accessible: true, accessibilityLabel: null, children: null };
  const intl = getSystemLocale.intl;
  obj = { discountPercent: closure_4, duration: nRewardsGranted };
  obj[2] = intl.formatToPlainString(getSystemLocale.t["P//01n"], obj);
  obj = { color: ThemesDefault.colors.ICON_FEEDBACK_POSITIVE, size: "xs" };
  const items = [callback(CheckmarkSmallIcon.CheckmarkSmallIcon, obj)];
  obj1 = { variant: "text-sm/medium", color: "text-strong", children: null };
  const intl2 = getSystemLocale.intl;
  obj1[2] = intl2.format(getSystemLocale.t["P//01n"], { discountPercent: closure_4, duration: nRewardsGranted });
  items[1] = callback(Text.Text, obj1);
  obj[3] = items;
  return callback2(View, obj);
}
noopAll;
({ REFERRAL_INCENTIVE_DISCOUNT_PERCENTAGE: c4, REFERRAL_INCENTIVE_ORBS_PER_CONVERSION: c5 } =
  REFERRAL_TRIAL_OFFER_EXPIRATION_DAYS);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, orbsPillContainer: null, balancePillOverride: null };
createCacheKey = {
  flexDirection: "row",
  alignItems: "center",
  gap: ThemesDefault.space.PX_4,
  marginTop: ThemesDefault.space.PX_8,
  alignSelf: "flex-start",
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = {
  flexDirection: "row",
  alignItems: "center",
  marginTop: ThemesDefault.space.PX_8,
  alignSelf: "flex-start",
};
createCacheKey[2] = { backgroundColor: "transparent", top: 1, minHeight: 0, paddingHorizontal: 0 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj1 = { flexDirection: "row", alignItems: "center", marginTop: ThemesDefault.space.PX_8, alignSelf: "flex-start" };
const result = require("set").fileFinishedImporting("modules/premium/referral_program/native/RewardGrantNotice.tsx");

export default function RewardGrantNotice(arg0) {
  ({ nRewardsGranted, referralRewardType } = arg0);
  if (nRewardsGranted < 1) {
    return null;
  } else {
    if (referralRewardType === apexExperiment.ReferralRewardType.ORBS) {
      let obj = { nRewardsGranted: null };
      obj[0] = nRewardsGranted;
      let tmp3 = callback(OrbsGrantNotice, obj);
    } else {
      tmp3 = null;
      if (referralRewardType === tmp(13446).ReferralRewardType.DISCOUNT) {
        obj = { nRewardsGranted: null };
        obj[0] = nRewardsGranted;
        tmp3 = callback(DiscountGrantNotice, obj);
      }
    }
    tmp = require;
  }
}
