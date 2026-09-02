// === Module 13227: SubscriptionRenewalMutationsNotice ===

// Module 13227 (SubscriptionRenewalMutationsNotice)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Button from "Button" /* 1296 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4139 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4139 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { isNoneSubscription } from "createFromServer" /* 4140 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, icon: null, text: null };
createCacheKey = { padding: 10, marginVertical: 5, marginHorizontal: 15, borderRadius: ThemesDefault.radii.xs, display: "flex", flexDirection: "row", justifyContent: "center", backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "center", marginLeft: 15, color: require("result").DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
let obj1 = { alignSelf: "center", marginLeft: 15, color: require("result").DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
createCacheKey[2] = { paddingLeft: 10, marginRight: 15, color: require("result").DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const obj2 = { paddingLeft: 10, marginRight: 15, color: require("result").DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
const result = require("set").fileFinishedImporting("modules/premium/native/SubscriptionRenewalMutationsNotice.tsx");

export default function SubscriptionRenewalMutationsNotice(arg0) {
  ({ subscription, renewalMutations } = arg0);
  const tmp = callback2();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.icon };
  const items = [callback(Button.WarningCircle, obj), ];
  obj = { style: tmp.text, children: null };
  const intl = getSystemLocale.intl;
  if (!subscription.hasExternalPlanChange) {
    if (!isNoneSubscription(renewalMutations.planId)) {
      let displayName = getPremiumPlanItemDefault.getDisplayName(renewalMutations.planId);
      const obj4 = getPremiumPlanItemDefault;
    }
    obj1 = { planName: null, date: null };
    obj1[0] = displayName;
    obj1[1] = subscription.currentPeriodEnd;
    obj[1] = intl.format(tmp7, obj1);
    items[1] = callback(Button.LegacyText, obj);
    obj[1] = items;
    return closure_6(View, obj);
  }
  displayName = getPremiumPlanItem.getExternalPlanDisplayName(renewalMutations);
};