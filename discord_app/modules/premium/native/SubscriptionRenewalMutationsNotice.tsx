// === Module 13344: SubscriptionRenewalMutationsNotice ===

// Module 13344 (SubscriptionRenewalMutationsNotice)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import PremiumUtils from "PremiumUtils" /* 4218 */;
import noop from "module_19" /* 19 */;

const PremiumUtilsDefault = PremiumUtils;

require = fn;
const View = fn(17).View;
const isNoneSubscription = fn(4219).isNoneSubscription;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null, icon: null, text: null };
createStyles = { padding: 10, marginVertical: 5, marginHorizontal: 15, borderRadius: nativeDefault.radii.xs, display: "flex", flexDirection: "row", justifyContent: "center", backgroundColor: fn(5441).DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
createStyles.container = createStyles;
createStyles.icon = { alignSelf: "center", marginLeft: 15, color: fn(5441).DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
let obj1 = { alignSelf: "center", marginLeft: 15, color: fn(5441).DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
createStyles.text = { paddingLeft: 10, marginRight: 15, color: fn(5441).DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/SubscriptionRenewalMutationsNotice.tsx");

export default function SubscriptionRenewalMutationsNotice(arg0) {
  ({ subscription, renewalMutations } = arg0);
  const tmp = closure_7();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.icon };
  const items = [hasOwnProperty(native.WarningCircle, obj), ];
  obj = { style: tmp.text, children: null };
  const intl = util.intl;
  if (!subscription.hasExternalPlanChange) {
    if (!isNoneSubscription(renewalMutations.planId)) {
      let displayName = PremiumUtilsDefault.getDisplayName(renewalMutations.planId);
    }
    const obj1 = { planName: displayName, date: subscription.currentPeriodEnd };
    obj.children = intl.format(tmp7, obj1);
    items[1] = hasOwnProperty(native.LegacyText, obj);
    obj.children = items;
    return timestampProducer(View, obj);
  }
  displayName = PremiumUtils.getExternalPlanDisplayName(renewalMutations);
};