// discord_app/modules/premium/native/SubscriptionRenewalMutationsNotice.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const PremiumUtilsDefault = PremiumUtils;

require = fn;
const View = fn(17).View;
const isNoneSubscription = fn(4529).isNoneSubscription;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  container: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 15,
    borderRadius: nativeDefault.radii.xs,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: fn(5620).DARK_PRIMARY_630_LIGHT_PRIMARY_230,
  },
  icon: null,
  text: null,
};
let obj3 = {
  padding: 10,
  marginVertical: 5,
  marginHorizontal: 15,
  borderRadius: nativeDefault.radii.xs,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: fn(5620).DARK_PRIMARY_630_LIGHT_PRIMARY_230,
};
obj2.icon = { alignSelf: "center", marginLeft: 15, color: fn(5620).DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
let obj4 = { alignSelf: "center", marginLeft: 15, color: fn(5620).DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
obj2.text = { paddingLeft: 10, marginRight: 15, color: fn(5620).DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { paddingLeft: 10, marginRight: 15, color: fn(5620).DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/SubscriptionRenewalMutationsNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(13);
      ({ subscription, renewalMutations } = arg0);
      const tmp4 = closure_7();
      if (cResult[0] !== tmp4.icon) {
        const obj2 = { style: tmp4.icon };
        const tmp7 = hasOwnProperty(native.WarningCircle, obj2);
        cResult[0] = tmp4.icon;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === renewalMutations) {
        if (cResult[3] === subscription.currentPeriodEnd) {
          if (cResult[4] === subscription.hasExternalPlanChange) {
            if (cResult[6] === tmp4.text) {
              if (cResult[7] === tmp9) {
                let tmp16 = cResult[8];
              }
              if (cResult[9] === tmp4.container) {
                if (cResult[10] === tmp5) {
                  if (cResult[11] === tmp16) {
                    let tmp19 = cResult[12];
                  }
                  return tmp19;
                }
              }
              const obj4 = { style: tmp4.container, children: null };
              const items = [tmp5, tmp16];
              obj4.children = items;
              const tmp22 = timestampProducer(View, obj4);
              cResult[9] = tmp4.container;
              cResult[10] = tmp5;
              cResult[11] = tmp16;
              cResult[12] = tmp22;
              tmp19 = tmp22;
            }
            const obj5 = { style: tmp8, children: cResult[5] };
            const tmp18 = hasOwnProperty(native.LegacyText, obj5);
            cResult[6] = tmp4.text;
            cResult[7] = cResult[5];
            cResult[8] = tmp18;
            tmp16 = tmp18;
          }
        }
      }
      const intl = util.intl;
      if (!subscription.hasExternalPlanChange) {
        if (!isNoneSubscription(renewalMutations.planId)) {
          let displayName = PremiumUtilsDefault.getDisplayName(renewalMutations.planId);
        }
        const obj6 = { planName: displayName, date: subscription.currentPeriodEnd };
        const formatResult = intl.format(tmp10, obj6);
        cResult[2] = renewalMutations;
        renewalMutations = subscription.currentPeriodEnd;
        cResult[3] = renewalMutations;
        subscription = subscription.hasExternalPlanChange;
        cResult[4] = subscription;
        cResult[5] = formatResult;
      }
      displayName = PremiumUtils.getExternalPlanDisplayName(renewalMutations);
      const tmpResult = PremiumUtils;
    }
  : (arg0) => {
      ({ subscription, renewalMutations } = arg0);
      const tmp = closure_7();
      const obj = { style: tmp.container, children: null };
      const items = [hasOwnProperty(native.WarningCircle, { style: tmp.icon })];
      const obj3 = { style: tmp.text, children: null };
      const intl = util.intl;
      if (!subscription.hasExternalPlanChange) {
        if (!isNoneSubscription(renewalMutations.planId)) {
          let displayName = PremiumUtilsDefault.getDisplayName(renewalMutations.planId);
        }
        const obj5 = { planName: displayName, date: subscription.currentPeriodEnd };
        obj3.children = intl.format(tmp7, obj5);
        items[1] = hasOwnProperty(native.LegacyText, obj3);
        obj.children = items;
        return timestampProducer(View, obj);
      }
      displayName = PremiumUtils.getExternalPlanDisplayName(renewalMutations);
      const obj2 = { style: tmp.icon };
      const tmp5Result = PremiumUtils;
    };
