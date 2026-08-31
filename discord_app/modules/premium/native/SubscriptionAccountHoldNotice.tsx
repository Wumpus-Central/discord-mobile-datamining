// discord_app/modules/premium/native/SubscriptionAccountHoldNotice.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import registerAssetDefault from "../../../../_runtime/12274_registerAsset.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { SubscriptionStatusTypes } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ Linking: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, textContainer: null, icon: null, text: null };
createCacheKey = { padding: 8, margin: 8, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row" };
createCacheKey[2] = { marginRight: 4 };
createCacheKey[3] = { marginBottom: 8, flex: 1 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/premium/native/SubscriptionAccountHoldNotice.tsx");

export default function SubscriptionAccountHoldNotice(subscription) {
  subscription = subscription.subscription;
  const tmp = callback3();
  let tmp2 = null;
  if (subscription.status === SubscriptionStatusTypes.ACCOUNT_HOLD) {
    let obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, children: null };
    obj[0] = tmp.textContainer;
    obj = { size: null, style: null, source: null };
    obj[0] = subscription(1297).IconSizes.MEDIUM;
    obj[1] = tmp.icon;
    obj[2] = registerAssetDefault;
    const items = [callback(subscription(1297).Icon, obj), ];
    obj1 = { style: null, variant: "text-sm/medium", children: null };
    obj1[0] = tmp.text;
    const intl = subscription(1236).intl;
    const obj2 = { endDate: null, planDescription: null };
    obj2[0] = subscription.currentPeriodEnd;
    obj2[1] = subscription(4109).getDisplayName(subscription.planId);
    obj1[2] = intl.format(subscription(1236).t["7I21Iz"], obj2);
    items[1] = callback(subscription(4444).Text, obj1);
    obj[1] = items;
    const items1 = [callback2(closure_4, obj), ];
    const obj3 = { size: "sm", text: null, onPress: null };
    const intl2 = subscription(1236).intl;
    obj3[1] = intl2.string(subscription(1236).t.VJmUNy);
    obj3[2] = function onPress() {
      return closure_1_3.openURL(subscription(closure_1_2[10]).getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
    };
    items1[1] = callback(subscription(4896).Button, obj3);
    obj[1] = items1;
    tmp2 = callback2(closure_4, obj);
    const obj6 = subscription(4109);
  }
  return tmp2;
};