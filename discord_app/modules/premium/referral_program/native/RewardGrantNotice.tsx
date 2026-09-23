// discord_app/modules/premium/referral_program/native/RewardGrantNotice.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import CheckmarkSmallIcon from "../../../../design/components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx";
import BalanceWidgetPill from "../../../virtual_currency/native/index.tsx";
import PremiumReferralIncentivesExperiment from "../../experiments/PremiumReferralIncentivesExperiment.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function OrbsGrantNotice(nRewardsGranted) {
  const tmp = closure_8();
  const obj = { style: tmp.orbsPillContainer, children: null };
  const items = [
    timestampProducer(BalanceWidgetPill.BalanceWidgetPill, {
      initialRenderedBalance: 0,
      balance: nRewardsGranted.nRewardsGranted * hasOwnProperty,
      style: tmp.balancePillOverride,
    }),
  ];
  const obj3 = { variant: "text-sm/medium", color: "text-strong", children: null };
  const intl = util.intl;
  const items1 = [" ", intl.string(util.t.UhguER)];
  obj3.children = items1;
  items[1] = React5(Text_Text.Text, obj3);
  obj.children = items;
  return React5(View, obj);
}
function DiscountGrantNotice(nRewardsGranted) {
  nRewardsGranted = nRewardsGranted.nRewardsGranted;
  const obj = { style: closure_8().container, accessible: true, accessibilityLabel: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.formatToPlainString(util.t["P//01n"], { discountPercent, duration: nRewardsGranted });
  const items = [
    timestampProducer(CheckmarkSmallIcon.CheckmarkSmallIcon, {
      color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE,
      size: "xs",
    }),
  ];
  const obj4 = { variant: "text-sm/medium", color: "text-strong", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.format(util.t["P//01n"], { discountPercent, duration: nRewardsGranted });
  items[1] = timestampProducer(Text_Text.Text, obj4);
  obj.children = items;
  return React5(View, obj);
}
const View = fn(17).View;
const Constants = fn(13796);
({ REFERRAL_INCENTIVE_DISCOUNT_PERCENTAGE: closure_4, REFERRAL_INCENTIVE_ORBS_PER_CONVERSION: hasOwnProperty } =
  Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4827);
let obj2 = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_4,
    marginTop: nativeDefault.space.PX_8,
    alignSelf: "flex-start",
  },
  orbsPillContainer: null,
  balancePillOverride: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  marginTop: nativeDefault.space.PX_8,
  alignSelf: "flex-start",
};
obj2.orbsPillContainer = {
  flexDirection: "row",
  alignItems: "center",
  marginTop: nativeDefault.space.PX_8,
  alignSelf: "flex-start",
};
obj2.balancePillOverride = { backgroundColor: "transparent", top: 1, minHeight: 0, paddingHorizontal: 0 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/native/RewardGrantNotice.tsx");

export default function RewardGrantNotice(arg0) {
  ({ nRewardsGranted, referralRewardType } = arg0);
  if (nRewardsGranted < 1) {
    return null;
  } else if (referralRewardType === PremiumReferralIncentivesExperiment.ReferralRewardType.ORBS) {
    const obj2 = { nRewardsGranted };
    let tmp3 = timestampProducer(OrbsGrantNotice, obj2);
  } else if (referralRewardType === PremiumReferralIncentivesExperiment.ReferralRewardType.DISCOUNT) {
    const obj = { nRewardsGranted };
    tmp3 = timestampProducer(DiscountGrantNotice, obj);
  }
}
