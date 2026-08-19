// discord_app/modules/guild_role_subscriptions/native/purchase_page/ChangeSubscriptionCard.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import tDefault from "../../../../../_runtime/03975_t.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import _modDef5260 from "../../../../actions/ModalActionCreators.tsx";
import getRoleEmojisAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { SubscriptionStatusTypes } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function emphasisHook(children) {
  return callback2(Text.Text, { variant: "text-sm/medium", color: "text-default", children });
}
noopAll;
({ jsx: error, jsxs: closure_8, Fragment: c9 } = jsxProd);
const createCacheKey = { paddingVertical: 16, paddingHorizontal: 24, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
let closure_10 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/ChangeSubscriptionCard.tsx");

export default function ChangeSubscriptionCard(activeSubscription) {
  activeSubscription = activeSubscription.activeSubscription;
  ({ activeListingId, changeToListingId } = activeSubscription);
  let obj = getRoleEmojisAll;
  const first = callback(obj.useName(activeListingId), 1)[0];
  tDefault(activeSubscription.currentPeriodEnd);
  const tmp = callback4();
  const items = [tmp.container, ];
  obj = { paddingBottom: 16 + useSafeAreaInsetsDefault().bottom };
  items[1] = obj;
  obj1 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = activeSubscription(1236).intl;
  obj1[2] = intl.format(activeSubscription(1236).t.l3uCCX, { activeListingName: first });
  const items1 = [callback2(activeSubscription(4734).Text, obj1), callback2(activeSubscription(1297).Spacer, { size: 16 }), , ];
  const obj2 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = activeSubscription(1236).intl;
  const formatResult = obj2.format("MMMM Do");
  const items2 = [intl2.format(activeSubscription(1236).t.Zmtrs2, { activeListingName: first, changeToListingName: callback(obj1.useName(changeToListingId), 1)[0], billingEndDate: obj2.format("MMMM Do"), emphasisHook }), "\n\n", ];
  const intl3 = activeSubscription(1236).intl;
  items2[2] = intl3.format(activeSubscription(1236).t.KIiWca, { emphasisHook });
  obj2[2] = items2;
  items1[2] = callback3(activeSubscription(4734).Text, obj2);
  let tmp7Result = null;
  if (activeSubscription.status !== SubscriptionStatusTypes.CANCELED) {
    const obj5 = { children: null };
    const items3 = [callback2(tmp6(1297).Spacer, { size: 16 }), ];
    const obj6 = { text: null, onPress: null };
    const intl4 = tmp6(1236).intl;
    obj6[0] = intl4.string(tmp6(1236).t.UwHVxr);
    obj6[1] = function onPress() {
      const obj = { subscriptionId: activeSubscription.id };
      obj.pushLazy(activeSubscription(dependencyMap[17])(dependencyMap[16], dependencyMap.paths), obj);
      ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    };
    items3[1] = callback2(tmp6(15797).ArrowButton, obj6);
    obj5[0] = items3;
    tmp7Result = callback3(closure_9, obj5);
  }
  const obj3 = { activeListingName: first, changeToListingName: callback(obj1.useName(changeToListingId), 1)[0], billingEndDate: obj2.format("MMMM Do"), emphasisHook };
  items1[3] = tmp7Result;
  obj[1] = items1;
  return callback2(activeSubscription(6950).BottomSheet, { startExpanded: true, children: callback3(View, obj) });
};