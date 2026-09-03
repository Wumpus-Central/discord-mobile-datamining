// === Module 13341: OrbsGrantNotice ===

// Module 13341 (OrbsGrantNotice)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Text from "Text" /* 4474 */;
import CheckmarkSmallIcon from "CheckmarkSmallIcon" /* 5597 */;
import BalanceWidgetPill from "BalanceWidgetPill" /* 11063 */;
import apexExperiment from "apexExperiment" /* 13340 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function OrbsGrantNotice(nRewardsGranted) {
  const tmp = callback3();
  let obj = { style: tmp.orbsPillContainer, children: null };
  obj = { initialRenderedBalance: 0, balance: 500 * nRewardsGranted.nRewardsGranted, style: tmp.balancePillOverride };
  const items = [callback(BalanceWidgetPill.BalanceWidgetPill, obj), ];
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
  obj[2] = intl.formatToPlainString(getSystemLocale.t["P//01n"], { discountPercent: 30, duration: nRewardsGranted });
  obj = { color: ThemesDefault.colors.ICON_FEEDBACK_POSITIVE, size: "xs" };
  const items = [callback(CheckmarkSmallIcon.CheckmarkSmallIcon, obj), ];
  obj = { variant: "text-sm/medium", color: "text-strong", children: null };
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.format(getSystemLocale.t["P//01n"], { discountPercent: 30, duration: nRewardsGranted });
  items[1] = callback(Text.Text, obj);
  obj[3] = items;
  return callback2(View, obj);
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, orbsPillContainer: null, balancePillOverride: null };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4, marginTop: ThemesDefault.space.PX_8, alignSelf: "flex-start" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", marginTop: ThemesDefault.space.PX_8, alignSelf: "flex-start" };
createCacheKey[2] = { backgroundColor: "transparent", top: 1, minHeight: 0, paddingHorizontal: 0 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const obj1 = { flexDirection: "row", alignItems: "center", marginTop: ThemesDefault.space.PX_8, alignSelf: "flex-start" };
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
      if (referralRewardType === tmp(13340).ReferralRewardType.DISCOUNT) {
        obj = { nRewardsGranted: null };
        obj[0] = nRewardsGranted;
        tmp3 = callback(DiscountGrantNotice, obj);
      }
    }
    tmp = require;
  }
};
export const REFERRAL_DISCOUNT_PERCENTAGE = 30;
export const REFERRAL_ORBS_PER_CONVERSION = 500;