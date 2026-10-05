// discord_app/modules/premium/native/SubscriptionRenewalMutationsNotice.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import SubscriptionPlanRecord from "../../../records/SubscriptionPlanRecord.tsx";
import LegacyTokens from "../../../design/migrations/native/LegacyTokens.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const PremiumUtilsDefault = PremiumUtils;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const isNoneSubscription = SubscriptionPlanRecord.isNoneSubscription;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, icon: obj3, text: obj4 };
obj2 = {
  padding: 10,
  marginVertical: 5,
  marginHorizontal: 15,
  borderRadius: nativeDefault.radii.xs,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: LegacyTokens.DARK_PRIMARY_630_LIGHT_PRIMARY_230,
};
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "center", marginLeft: 15, color: LegacyTokens.DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
obj4 = { paddingLeft: 10, marginRight: 15, color: LegacyTokens.DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
let closure_7 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let renewalMutations;
      let subscription;
      let tmp5;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(13);
      ({ subscription, renewalMutations } = arg0);
      const tmp4 = closure_7();
      const container = tmp4.container;
      if (cResult[0] !== tmp4.icon) {
        const obj2 = { style: tmp4.icon };
        const tmp7 = hasOwnProperty(native.WarningCircle, obj2);
        cResult[0] = tmp4.icon;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === renewalMutations) {
        if (cResult[3] === subscription.currentPeriodEnd) {
          if (cResult[4] === subscription.hasExternalPlanChange) {
            tmp9 = cResult[5];
          }
          if (cResult[6] === tmp4.text) {
            let tmp15;
            if (cResult[7] === tmp9) {
              tmp15 = cResult[8];
            }
            if (cResult[9] === tmp4.container) {
              if (cResult[10] === tmp5) {
                let tmp18;
                if (cResult[11] === tmp15) {
                  tmp18 = cResult[12];
                }
                return tmp18;
              }
            }
            const obj4 = { style: container, children: items };
            items = [tmp5, tmp15];
            const tmp21 = metroRequire(View, obj4);
            cResult[9] = tmp4.container;
            cResult[10] = tmp5;
            cResult[11] = tmp15;
            cResult[12] = tmp21;
            tmp18 = tmp21;
          }
          const obj5 = { style: tmp8, children: tmp9 };
          const tmp17 = hasOwnProperty(native.LegacyText, obj5);
          cResult[6] = tmp4.text;
          cResult[7] = tmp9;
          cResult[8] = tmp17;
          tmp15 = tmp17;
        }
      }
      const intl = intl2.intl;
      const format = intl.format;
      if (!subscription.hasExternalPlanChange) {
        let displayName;
        if (!isNoneSubscription(renewalMutations.planId)) {
          const obj3 = PremiumUtilsDefault;
          displayName = obj3.getDisplayName(renewalMutations.planId);
        }
        const obj6 = { planName: displayName, date: subscription.currentPeriodEnd };
        const formatResult = format(tmp10, obj6);
        cResult[2] = renewalMutations;
        cResult[3] = subscription.currentPeriodEnd;
        cResult[4] = subscription.hasExternalPlanChange;
        cResult[5] = formatResult;
        tmp9 = formatResult;
      }
      const tmpResult = PremiumUtils;
      displayName = tmpResult.getExternalPlanDisplayName(renewalMutations);
    }
  : (arg0) => {
      let renewalMutations;
      let subscription;
      ({ subscription, renewalMutations } = arg0);
      const tmp = closure_7();
      const obj = { style: tmp.container, children: null };
      const items = [,];
      const obj2 = { style: tmp.icon };
      items[0] = hasOwnProperty(native.WarningCircle, obj2);
      const obj3 = { style: tmp.text, children: null };
      const LegacyText = native.LegacyText;
      const intl = intl2.intl;
      const format = intl.format;
      if (!subscription.hasExternalPlanChange) {
        let displayName;
        if (!isNoneSubscription(renewalMutations.planId)) {
          const obj4 = PremiumUtilsDefault;
          displayName = obj4.getDisplayName(renewalMutations.planId);
        }
        const obj5 = { planName: displayName, date: subscription.currentPeriodEnd };
        obj3.children = format(tmp7, obj5);
        items[1] = hasOwnProperty(LegacyText, obj3);
        obj.children = items;
        return metroRequire(View, obj);
      }
      const tmp5Result = PremiumUtils;
      displayName = tmp5Result.getExternalPlanDisplayName(renewalMutations);
    };
const result = size.fileFinishedImporting("modules/premium/native/SubscriptionRenewalMutationsNotice.tsx");

export default tmp5;
