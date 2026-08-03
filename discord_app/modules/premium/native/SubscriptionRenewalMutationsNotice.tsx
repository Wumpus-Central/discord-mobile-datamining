// === Module 7542: SubscriptionRenewalMutationsNotice ===

// Module 7542 (SubscriptionRenewalMutationsNotice)
import "noop";
import { View } from "get ActivityIndicator";
import { isNoneSubscription } from "createFromServer";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

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
  const items = [callback(require(1297) /* Button */.WarningCircle, obj), ];
  obj = { style: tmp.text, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  if (!subscription.hasExternalPlanChange) {
    if (!isNoneSubscription(renewalMutations.planId)) {
      let displayName = importDefault(3901).getDisplayName(renewalMutations.planId);
      const obj4 = importDefault(3901);
    }
    const obj1 = { planName: null, date: null };
    obj1[0] = displayName;
    obj1[1] = subscription.currentPeriodEnd;
    obj[1] = intl.format(tmp7, obj1);
    items[1] = callback(require(1297) /* Button */.LegacyText, obj);
    obj[1] = items;
    return closure_6(View, obj);
  }
  displayName = require(3901) /* getPremiumPlanItem */.getExternalPlanDisplayName(renewalMutations);
};