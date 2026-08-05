import { registerAsset } from "../../../../_runtime/07556_registerAsset.js";
// discord_app/modules/premium/native/SubscriptionAccountHoldNotice.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { SubscriptionStatusTypes } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let closure_6;
let error;
const require = arg1;
({ Linking: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, textContainer: null, icon: null, text: null };
createCacheKey = { padding: 8, margin: 8, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row" };
createCacheKey[2] = { marginRight: 4 };
createCacheKey[3] = { marginBottom: 8, flex: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("modules/premium/native/SubscriptionAccountHoldNotice.tsx");

export default function SubscriptionAccountHoldNotice(subscription) {
  subscription = subscription.subscription;
  const tmp = createCacheKey();
  let tmp2 = null;
  if (subscription.status === SubscriptionStatusTypes.ACCOUNT_HOLD) {
    let obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, children: null };
    obj[0] = tmp.textContainer;
    obj = { size: null, style: null, source: null };
    obj[0] = subscription(1297).IconSizes.MEDIUM;
    obj[1] = tmp.icon;
    obj[2] = registerAsset;
    const items = [callback(subscription(1297).Icon, obj), ];
    const obj1 = { style: null, variant: "text-sm/medium", children: null };
    obj1[0] = tmp.text;
    const intl = subscription(1236).intl;
    const obj2 = { endDate: null, planDescription: null };
    obj2[0] = subscription.currentPeriodEnd;
    obj2[1] = subscription(3931).getDisplayName(subscription.planId);
    obj1[2] = intl.format(subscription(1236).t["7I21Iz"], obj2);
    items[1] = callback(subscription(4281).Text, obj1);
    obj[1] = items;
    const items1 = [callback2(closure_4, obj), ];
    const obj3 = { size: "sm", text: null, onPress: null };
    const intl2 = subscription(1236).intl;
    obj3[1] = intl2.string(subscription(1236).t.VJmUNy);
    obj3[2] = function onPress() {
      return outer1_3.openURL(subscription(outer1_2[10]).getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
    };
    items1[1] = callback(subscription(4695).Button, obj3);
    obj[1] = items1;
    tmp2 = callback2(closure_4, obj);
    const obj6 = subscription(3931);
  }
  return tmp2;
};