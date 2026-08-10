// discord_app/modules/guild_role_subscriptions/native/purchase_page/ChangeSubscriptionCard.tsx
import _slicedToArray from "_slicedToArray";
import "set";
import { View } from "asyncRequireImpl";
import { SubscriptionStatusTypes } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { t } from "../../../../../_runtime/03883_t.js";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { useSafeAreaInsets } from "../../../safe_area/useSafeAreaInsets.native.tsx";

let c9;
let error;
let metroImportAll;
const require = arg1;
function emphasisHook(children) {
  return callback2(Text.Text, { variant: "text-sm/medium", color: "text-default", children });
}
({ jsx: error, jsxs: metroImportAll, Fragment: c9 } = jsxProd);
createCacheKey = { container: null };
createCacheKey = { paddingVertical: 16, paddingHorizontal: 24, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/ChangeSubscriptionCard.tsx");

export default function ChangeSubscriptionCard(activeSubscription) {
  let activeListingId;
  let changeToListingId;
  activeSubscription = activeSubscription.activeSubscription;
  ({ activeListingId, changeToListingId } = activeSubscription);
  let obj = importAll(14463);
  const first = callback(obj.useName(activeListingId), 1)[0];
  let obj1 = importAll(14463);
  let obj2 = t(activeSubscription.currentPeriodEnd);
  const tmp = createCacheKey();
  obj = { style: items, children: null };
  items = [tmp.container, ];
  obj = { paddingBottom: 16 + useSafeAreaInsets().bottom };
  items[1] = obj;
  obj1 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = activeSubscription(1236).intl;
  obj1[2] = intl.format(activeSubscription(1236).t.l3uCCX, { activeListingName: first });
  const items1 = [callback2(activeSubscription(4299).Text, obj1), callback2(activeSubscription(1297).Spacer, { size: 16 }), , ];
  obj2 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = activeSubscription(1236).intl;
  const formatResult = obj2.format("MMMM Do");
  const tmp8 = View;
  const items2 = [intl2.format(activeSubscription(1236).t.Zmtrs2, { activeListingName: first, changeToListingName: callback(obj1.useName(changeToListingId), 1)[0], billingEndDate: obj2.format("MMMM Do"), emphasisHook }), "\n\n", ];
  const intl3 = activeSubscription(1236).intl;
  items2[2] = intl3.format(activeSubscription(1236).t.KIiWca, { emphasisHook });
  obj2[2] = items2;
  items1[2] = callback3(activeSubscription(4299).Text, obj2);
  let tmp7Result = null;
  if (activeSubscription.status !== SubscriptionStatusTypes.CANCELED) {
    const obj5 = { children: null };
    const items3 = [tmp5(tmp6(1297).Spacer, { size: 16 }), ];
    const obj6 = { text: null, onPress: null };
    const intl4 = tmp6(1236).intl;
    obj6[0] = intl4.string(tmp6(1236).t.UwHVxr);
    obj6[1] = function onPress() {
      let obj = outer1_1(outer1_3[15]);
      obj = { subscriptionId: activeSubscription.id };
      obj.pushLazy(activeSubscription(outer1_3[17])(outer1_3[16], outer1_3.paths), obj);
      outer1_1(outer1_3[18]).hideActionSheet();
    };
    items3[1] = tmp5(tmp6(15656).ArrowButton, obj6);
    obj5[0] = items3;
    tmp7Result = tmp7(closure_9, obj5);
  }
  const obj3 = { activeListingName: first, changeToListingName: callback(obj1.useName(changeToListingId), 1)[0], billingEndDate: obj2.format("MMMM Do"), emphasisHook };
  const obj4 = { emphasisHook };
  items1[3] = tmp7Result;
  obj[1] = items1;
  return callback2(activeSubscription(5397).BottomSheet, { startExpanded: true, children: callback3(tmp8, obj) });
};