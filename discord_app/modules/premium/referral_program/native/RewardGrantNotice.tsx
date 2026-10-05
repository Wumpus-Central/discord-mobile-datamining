// discord_app/modules/premium/referral_program/native/RewardGrantNotice.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import CheckmarkSmallIcon2 from "../../../../design/components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx";
import BalanceWidgetPill from "../../../virtual_currency/native/index.tsx";
import PremiumReferralIncentivesExperiment from "../../experiments/PremiumReferralIncentivesExperiment.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Constants from "../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ REFERRAL_INCENTIVE_DISCOUNT_PERCENTAGE: closure_4, REFERRAL_INCENTIVE_ORBS_PER_CONVERSION: hasOwnProperty } =
  Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  orbsPillContainer: obj3,
  balancePillOverride: { backgroundColor: "transparent", top: 1, minHeight: 0, paddingHorizontal: 0 },
};
obj2 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  marginTop: nativeDefault.space.PX_8,
  alignSelf: "flex-start",
};
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", marginTop: nativeDefault.space.PX_8, alignSelf: "flex-start" };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let nRewardsGranted;
      let referralRewardType;
      const obj = react2;
      const cResult = obj.c(4);
      ({ nRewardsGranted, referralRewardType } = arg0);
      let tmp4 = null;
      if (nRewardsGranted >= 1) {
        let tmp5;
        if (referralRewardType === PremiumReferralIncentivesExperiment.ReferralRewardType.ORBS) {
          let tmp10;
          if (cResult[0] !== nRewardsGranted) {
            const obj2 = { nRewardsGranted };
            const tmp13 = metroRequire(closure_9, obj2);
            cResult[0] = nRewardsGranted;
            cResult[1] = tmp13;
            tmp10 = tmp13;
          } else {
            tmp10 = cResult[1];
          }
          tmp5 = tmp10;
        } else {
          tmp5 = null;
          if (referralRewardType === PremiumReferralIncentivesExperiment.ReferralRewardType.DISCOUNT) {
            let tmp6;
            if (cResult[2] !== nRewardsGranted) {
              const obj3 = { nRewardsGranted };
              const tmp9 = metroRequire(closure_10, obj3);
              cResult[2] = nRewardsGranted;
              cResult[3] = tmp9;
              tmp6 = tmp9;
            } else {
              tmp6 = cResult[3];
            }
            tmp5 = tmp6;
          }
        }
        tmp4 = tmp5;
      }
      return tmp4;
    }
  : (arg0) => {
      let nRewardsGranted;
      let referralRewardType;
      ({ nRewardsGranted, referralRewardType } = arg0);
      let tmp = null;
      if (nRewardsGranted >= 1) {
        let tmp4;
        if (referralRewardType === PremiumReferralIncentivesExperiment.ReferralRewardType.ORBS) {
          const obj2 = { nRewardsGranted };
          tmp4 = metroRequire(closure_9, obj2);
        } else {
          tmp4 = null;
          if (referralRewardType === PremiumReferralIncentivesExperiment.ReferralRewardType.DISCOUNT) {
            const obj = { nRewardsGranted };
            tmp4 = metroRequire(closure_10, obj);
          }
        }
        tmp = tmp4;
      }
      return tmp;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (nRewardsGranted) => {
      let items;
      let items1;
      const obj = react2;
      const cResult = obj.c(7);
      nRewardsGranted = nRewardsGranted.nRewardsGranted;
      const tmp4 = closure_8();
      const result = nRewardsGranted * hasOwnProperty;
      if (cResult[0] === tmp4.balancePillOverride) {
        let tmp6;
        let tmp9;
        if (cResult[1] === result) {
          tmp6 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { variant: "text-sm/medium", color: "text-strong", children: items };
          const Text = Text_Text.Text;
          const intl = intl3.intl;
          items = [" ", intl.string(intl3.t.UhguER)];
          const tmp11 = metroImportDefault(Text, obj2);
          cResult[3] = tmp11;
          tmp9 = tmp11;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] === tmp4.orbsPillContainer) {
          let tmp12;
          if (cResult[5] === tmp6) {
            tmp12 = cResult[6];
          }
          return tmp12;
        }
        const obj3 = { style: tmp4.orbsPillContainer, children: items1 };
        items1 = [tmp6, tmp9];
        const tmp15 = metroImportDefault(View, obj3);
        cResult[4] = tmp4.orbsPillContainer;
        cResult[5] = tmp6;
        cResult[6] = tmp15;
        tmp12 = tmp15;
      }
      const obj4 = { initialRenderedBalance: 0, balance: result, style: tmp4.balancePillOverride };
      const tmp7 = metroRequire(BalanceWidgetPill.BalanceWidgetPill, obj4);
      cResult[0] = tmp4.balancePillOverride;
      cResult[1] = result;
      cResult[2] = tmp7;
      tmp6 = tmp7;
    }
  : (nRewardsGranted) => {
      let items;
      let items1;
      nRewardsGranted = nRewardsGranted.nRewardsGranted;
      const tmp = closure_8();
      const obj = { style: tmp.orbsPillContainer, children: items };
      items = [,];
      const obj2 = {
        initialRenderedBalance: 0,
        balance: nRewardsGranted * hasOwnProperty,
        style: tmp.balancePillOverride,
      };
      items[0] = metroRequire(BalanceWidgetPill.BalanceWidgetPill, obj2);
      const obj3 = { variant: "text-sm/medium", color: "text-strong", children: items1 };
      const Text = Text_Text.Text;
      const intl = intl3.intl;
      items1 = [" ", intl.string(intl3.t.UhguER)];
      items[1] = metroImportDefault(Text, obj3);
      return metroImportDefault(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (nRewardsGranted) => {
      let items;
      let tmp12;
      let tmp15;
      let tmp5;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(11);
      nRewardsGranted = nRewardsGranted.nRewardsGranted;
      const tmp4 = closure_8();
      const container = tmp4.container;
      if (cResult[0] !== nRewardsGranted) {
        const intl = intl3.intl;
        const obj2 = { discountPercent, duration: nRewardsGranted };
        const formatToPlainStringResult = intl.formatToPlainString(intl3.t["P//01n"], obj2);
        cResult[0] = nRewardsGranted;
        cResult[1] = formatToPlainStringResult;
        tmp5 = formatToPlainStringResult;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE, size: "xs" };
        const CheckmarkSmallIcon = CheckmarkSmallIcon2.CheckmarkSmallIcon;
        const tmp11 = metroRequire(CheckmarkSmallIcon, obj3);
        cResult[2] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== nRewardsGranted) {
        const intl2 = intl3.intl;
        const obj4 = { discountPercent, duration: nRewardsGranted };
        const formatResult = intl2.format(intl3.t["P//01n"], obj4);
        cResult[3] = nRewardsGranted;
        cResult[4] = formatResult;
        tmp12 = formatResult;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] !== tmp12) {
        const obj5 = { variant: "text-sm/medium", color: "text-strong", children: tmp12 };
        const tmp17 = metroRequire(Text_Text.Text, obj5);
        cResult[5] = tmp12;
        cResult[6] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[6];
      }
      if (cResult[7] === tmp4.container) {
        if (cResult[8] === tmp5) {
          let tmp18;
          if (cResult[9] === tmp15) {
            tmp18 = cResult[10];
          }
          return tmp18;
        }
      }
      const obj6 = { style: container, accessible: true, accessibilityLabel: tmp5, children: items };
      items = [tmp8, tmp15];
      const tmp19 = metroImportDefault(View, obj6);
      cResult[7] = tmp4.container;
      cResult[8] = tmp5;
      cResult[9] = tmp15;
      cResult[10] = tmp19;
      tmp18 = tmp19;
    }
  : (nRewardsGranted) => {
      let intl;
      let intl2;
      let items;
      let obj2;
      let obj5;
      nRewardsGranted = nRewardsGranted.nRewardsGranted;
      const obj = {
        style: closure_8().container,
        accessible: true,
        accessibilityLabel: intl.formatToPlainString(intl3.t["P//01n"], obj2),
        children: items,
      };
      intl = intl3.intl;
      obj2 = { discountPercent, duration: nRewardsGranted };
      const obj3 = { color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE, size: "xs" };
      const CheckmarkSmallIcon = CheckmarkSmallIcon2.CheckmarkSmallIcon;
      items = [metroRequire(CheckmarkSmallIcon, obj3)];
      const obj4 = { variant: "text-sm/medium", color: "text-strong", children: intl2.format(intl3.t["P//01n"], obj5) };
      const Text = Text_Text.Text;
      intl2 = intl3.intl;
      obj5 = { discountPercent, duration: nRewardsGranted };
      items[1] = metroRequire(Text, obj4);
      return metroImportDefault(View, obj);
    };
let result = size.fileFinishedImporting("modules/premium/referral_program/native/RewardGrantNotice.tsx");

export default tmp6;
