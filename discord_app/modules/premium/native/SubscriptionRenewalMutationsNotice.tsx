// discord_app/modules/premium/native/SubscriptionRenewalMutationsNotice.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { isNoneSubscription } from "createFromServer";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Button } from "../../../design/void/native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { getPremiumPlanItem } from "../../../utils/PremiumUtils.tsx";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, icon: null, text: null };
createCacheKey = { padding: 10, marginVertical: 5, marginHorizontal: 15, borderRadius: require("Themes").radii.xs, display: "flex", flexDirection: "row", justifyContent: "center", backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "center", marginLeft: 15, color: require("result").DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
let obj1 = { alignSelf: "center", marginLeft: 15, color: require("result").DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
createCacheKey[2] = { paddingLeft: 10, marginRight: 15, color: require("result").DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj2 = { paddingLeft: 10, marginRight: 15, color: require("result").DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
const result = require("createFromServer").fileFinishedImporting("modules/premium/native/SubscriptionRenewalMutationsNotice.tsx");

export default function SubscriptionRenewalMutationsNotice(arg0) {
  let renewalMutations;
  let subscription;
  ({ subscription, renewalMutations } = arg0);
  const tmp = createCacheKey();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.icon };
  const items = [callback(Button.WarningCircle, obj), ];
  obj = { style: tmp.text, children: null };
  const intl = getSystemLocale.intl;
  if (!subscription.hasExternalPlanChange) {
    if (!isNoneSubscription(renewalMutations.planId)) {
      let displayName = getPremiumPlanItem.getDisplayName(renewalMutations.planId);
      const obj4 = getPremiumPlanItem;
    }
    const obj1 = { planName: null, date: null };
    obj1[0] = displayName;
    obj1[1] = subscription.currentPeriodEnd;
    obj[1] = intl.format(tmp7, obj1);
    items[1] = callback(Button.LegacyText, obj);
    obj[1] = items;
    return closure_6(View, obj);
  }
  displayName = getPremiumPlanItem.getExternalPlanDisplayName(renewalMutations);
};