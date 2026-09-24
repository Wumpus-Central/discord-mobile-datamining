// discord_app/modules/premium/native/SubscriptionRenewalMutationsNotice.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const PremiumUtilsDefault = PremiumUtils;

require = fn;
const View = fn(17).View;
const isNoneSubscription = fn(4484).isNoneSubscription;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  container: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 15,
    borderRadius: nativeDefault.radii.xs,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: fn(5746).DARK_PRIMARY_630_LIGHT_PRIMARY_230,
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
  backgroundColor: fn(5746).DARK_PRIMARY_630_LIGHT_PRIMARY_230,
};
obj2.icon = { alignSelf: "center", marginLeft: 15, color: fn(5746).DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
let obj4 = { alignSelf: "center", marginLeft: 15, color: fn(5746).DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
obj2.text = { paddingLeft: 10, marginRight: 15, color: fn(5746).DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/SubscriptionRenewalMutationsNotice.tsx");

export default function SubscriptionRenewalMutationsNotice(arg0) {
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
}
