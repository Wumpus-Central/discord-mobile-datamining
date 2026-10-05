// === Module 13259: RewardGrantNotice ===

// Module 13259 (RewardGrantNotice)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import CheckmarkSmallIcon from "CheckmarkSmallIcon" /* 6628 */;
import BalanceWidgetPill from "BalanceWidgetPill" /* 11000 */;
import PremiumReferralIncentivesExperiment from "PremiumReferralIncentivesExperiment" /* 13243 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(13241);
({ REFERRAL_INCENTIVE_DISCOUNT_PERCENTAGE: closure_4, REFERRAL_INCENTIVE_ORBS_PER_CONVERSION: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_8, alignSelf: "flex-start" }, orbsPillContainer: null, balancePillOverride: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_8, alignSelf: "flex-start" };
obj2.orbsPillContainer = { flexDirection: "row", alignItems: "center", marginTop: nativeDefault.space.PX_8, alignSelf: "flex-start" };
obj2.balancePillOverride = { backgroundColor: "transparent", top: 1, minHeight: 0, paddingHorizontal: 0 };
let closure_8 = createStyles.createStyles(obj2);
fn(558);
let obj4 = { flexDirection: "row", alignItems: "center", marginTop: nativeDefault.space.PX_8, alignSelf: "flex-start" };
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((nRewardsGranted) => {
  const cResult = c.c(7);
  const tmp4 = closure_8();
  const result = nRewardsGranted.nRewardsGranted * hasOwnProperty;
  if (cResult[0] === tmp4.balancePillOverride) {
    if (cResult[1] === result) {
      let tmp6 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { variant: "text-sm/medium", color: "text-strong", children: null };
      const intl = util.intl;
      const items = [" ", intl.string(util.t.UhguER)];
      obj2.children = items;
      const tmp11 = React5(Text_Text.Text, obj2);
      cResult[3] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] === tmp4.orbsPillContainer) {
      if (cResult[5] === tmp6) {
        let tmp12 = cResult[6];
      }
      return tmp12;
    }
    const obj3 = { style: tmp4.orbsPillContainer, children: null };
    const items1 = [tmp6, tmp9];
    obj3.children = items1;
    const tmp15 = React5(View, obj3);
    cResult[4] = tmp4.orbsPillContainer;
    cResult[5] = tmp6;
    cResult[6] = tmp15;
    tmp12 = tmp15;
  }
  const tmp7 = timestampProducer(BalanceWidgetPill.BalanceWidgetPill, { initialRenderedBalance: 0, balance: result, style: tmp4.balancePillOverride });
  cResult[0] = tmp4.balancePillOverride;
  cResult[1] = result;
  cResult[2] = tmp7;
  tmp6 = tmp7;
  const obj4 = { initialRenderedBalance: 0, balance: result, style: tmp4.balancePillOverride };
}) : ((nRewardsGranted) => {
  const tmp = closure_8();
  const obj = { style: tmp.orbsPillContainer, children: null };
  const items = [timestampProducer(BalanceWidgetPill.BalanceWidgetPill, { initialRenderedBalance: 0, balance: nRewardsGranted.nRewardsGranted * hasOwnProperty, style: tmp.balancePillOverride }), ];
  const obj3 = { variant: "text-sm/medium", color: "text-strong", children: null };
  const intl = util.intl;
  const items1 = [" ", intl.string(util.t.UhguER)];
  obj3.children = items1;
  items[1] = React5(Text_Text.Text, obj3);
  obj.children = items;
  return React5(View, obj);
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((nRewardsGranted) => {
  const cResult = c.c(11);
  nRewardsGranted = nRewardsGranted.nRewardsGranted;
  const tmp4 = closure_8();
  if (cResult[0] !== nRewardsGranted) {
    const intl = util.intl;
    const obj2 = { discountPercent, duration: nRewardsGranted };
    const formatToPlainStringResult = intl.formatToPlainString(util.t["P//01n"], obj2);
    cResult[0] = nRewardsGranted;
    cResult[1] = formatToPlainStringResult;
    let tmp5 = formatToPlainStringResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE, size: "xs" };
    const tmp11 = timestampProducer(CheckmarkSmallIcon.CheckmarkSmallIcon, obj3);
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== nRewardsGranted) {
    const intl2 = util.intl;
    const obj4 = { discountPercent, duration: nRewardsGranted };
    const formatResult = intl2.format(util.t["P//01n"], obj4);
    cResult[3] = nRewardsGranted;
    cResult[4] = formatResult;
    let tmp12 = formatResult;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== tmp12) {
    const obj5 = { variant: "text-sm/medium", color: "text-strong", children: tmp12 };
    const tmp17 = timestampProducer(Text_Text.Text, obj5);
    cResult[5] = tmp12;
    cResult[6] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] === tmp4.container) {
    if (cResult[8] === tmp5) {
      if (cResult[9] === tmp15) {
        let tmp18 = cResult[10];
      }
      return tmp18;
    }
  }
  const obj6 = { style: tmp4.container, accessible: true, accessibilityLabel: tmp5, children: null };
  const items = [tmp8, tmp15];
  obj6.children = items;
  const tmp19 = React5(View, obj6);
  cResult[7] = tmp4.container;
  cResult[8] = tmp5;
  cResult[9] = tmp15;
  cResult[10] = tmp19;
  tmp18 = tmp19;
}) : ((nRewardsGranted) => {
  nRewardsGranted = nRewardsGranted.nRewardsGranted;
  const obj = { style: closure_8().container, accessible: true, accessibilityLabel: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.formatToPlainString(util.t["P//01n"], { discountPercent, duration: nRewardsGranted });
  const items = [timestampProducer(CheckmarkSmallIcon.CheckmarkSmallIcon, { color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE, size: "xs" }), ];
  const obj4 = { variant: "text-sm/medium", color: "text-strong", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.format(util.t["P//01n"], { discountPercent, duration: nRewardsGranted });
  items[1] = timestampProducer(Text_Text.Text, obj4);
  obj.children = items;
  return React5(View, obj);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/referral_program/native/RewardGrantNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(4);
  ({ nRewardsGranted, referralRewardType } = arg0);
  if (nRewardsGranted < 1) {
    return null;
  } else {
    if (referralRewardType !== PremiumReferralIncentivesExperiment.ReferralRewardType.ORBS) {
      if (referralRewardType === PremiumReferralIncentivesExperiment.ReferralRewardType.DISCOUNT) {
        if (cResult[2] !== nRewardsGranted) {
          const obj2 = { nRewardsGranted };
          const tmp8 = timestampProducer(closure_10, obj2);
          cResult[2] = nRewardsGranted;
          cResult[3] = tmp8;
        }
      }
    }
    if (cResult[0] !== nRewardsGranted) {
      const obj3 = { nRewardsGranted };
      const tmp13 = timestampProducer(closure_9, obj3);
      cResult[0] = nRewardsGranted;
      cResult[1] = tmp13;
    }
  }
}) : ((arg0) => {
  ({ nRewardsGranted, referralRewardType } = arg0);
  if (nRewardsGranted < 1) {
    return null;
  } else if (referralRewardType === PremiumReferralIncentivesExperiment.ReferralRewardType.ORBS) {
    const obj2 = { nRewardsGranted };
    let tmp3 = timestampProducer(closure_9, obj2);
  } else if (referralRewardType === PremiumReferralIncentivesExperiment.ReferralRewardType.DISCOUNT) {
    const obj = { nRewardsGranted };
    tmp3 = timestampProducer(closure_10, obj);
  }
});