// discord_app/modules/guild_role_subscriptions/native/purchase_page/ChangeSubscriptionCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import _modDef4153 from "../../../../../_runtime/metro/04153__.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function emphasisHook(children) {
  return React5(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children });
}
const View = fn(17).View;
const SubscriptionStatusTypes = fn(1074).SubscriptionStatusTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: null };
createStyles = {
  paddingVertical: 16,
  paddingHorizontal: 24,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
createStyles.container = createStyles;
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/purchase_page/ChangeSubscriptionCard.tsx",
);

export default function ChangeSubscriptionCard(activeSubscription) {
  activeSubscription = activeSubscription.activeSubscription;
  ({ activeListingId, changeToListingId } = activeSubscription);
  let obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj.useName(activeListingId), 1)[0];
  _modDef4153(activeSubscription.currentPeriodEnd);
  const tmp = closure_10();
  obj = { style: null, children: null };
  const items = [tmp.container];
  obj = { paddingBottom: 16 + useSafeAreaInsetsDefault().bottom };
  items[1] = obj;
  obj.style = items;
  const obj1 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = activeSubscription(1114).intl;
  obj1.children = intl.format(activeSubscription(1114).t.l3uCCX, { activeListingName: first });
  const items1 = [
    closure_7(activeSubscription(4556).Text, obj1),
    closure_7(activeSubscription(1178).Spacer, { size: 16 }),
    ,
  ];
  const obj2 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = activeSubscription(1114).intl;
  const formatResult = obj2.format("MMMM Do");
  const items2 = [
    intl2.format(activeSubscription(1114).t.Zmtrs2, {
      activeListingName: first,
      changeToListingName: _slicedToArray(obj1.useName(changeToListingId), 1)[0],
      billingEndDate: obj2.format("MMMM Do"),
      emphasisHook,
    }),
    "\n\n",
  ];
  const intl3 = activeSubscription(1114).intl;
  items2[2] = intl3.format(activeSubscription(1114).t.KIiWca, { emphasisHook });
  obj2.children = items2;
  items1[2] = closure_8(activeSubscription(4556).Text, obj2);
  let tmp7Result = null;
  if (activeSubscription.status !== SubscriptionStatusTypes.CANCELED) {
    const obj5 = { children: null };
    const items3 = [closure_7(tmp6(1178).Spacer, { size: 16 })];
    const obj6 = { text: null, onPress: null };
    const intl4 = tmp6(1114).intl;
    obj6.text = intl4.string(tmp6(1114).t.UwHVxr);
    obj6.onPress = function onPress() {
      const obj = { subscriptionId: activeSubscription.id };
      obj.pushLazy(asyncRequireImpl(16549, dependencyMap.paths), obj);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    items3[1] = closure_7(tmp6(16541).ArrowButton, obj6);
    obj5.children = items3;
    tmp7Result = closure_8(closure_9, obj5);
  }
  const obj3 = {
    activeListingName: first,
    changeToListingName: _slicedToArray(obj1.useName(changeToListingId), 1)[0],
    billingEndDate: obj2.format("MMMM Do"),
    emphasisHook,
  };
  const obj4 = { emphasisHook };
  items1[3] = tmp7Result;
  obj.children = items1;
  return closure_7(activeSubscription(7150).BottomSheet, { startExpanded: true, children: closure_8(View, obj) });
}
