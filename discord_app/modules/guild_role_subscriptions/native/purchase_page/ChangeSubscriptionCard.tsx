// discord_app/modules/guild_role_subscriptions/native/purchase_page/ChangeSubscriptionCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01897_asyncRequireImpl.js";
import _modDef4231 from "../../../../../_runtime/metro/04231__.js";
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
const createStyles = fn(4639);
let obj2 = {
  container: { paddingVertical: 16, paddingHorizontal: 24, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
};
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/purchase_page/ChangeSubscriptionCard.tsx",
);

export default function ChangeSubscriptionCard(activeSubscription) {
  activeSubscription = activeSubscription.activeSubscription;
  ({ activeListingId, changeToListingId } = activeSubscription);
  const tmp = closure_10();
  const first = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useName(activeListingId), 1)[0];
  let obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const obj3 = _modDef4231(activeSubscription.currentPeriodEnd);
  const obj4 = { style: null, children: null };
  const items = [tmp.container];
  const formatResult = _modDef4231(activeSubscription.currentPeriodEnd).format("MMMM Do");
  items[1] = { paddingBottom: 16 + useSafeAreaInsetsDefault().bottom };
  obj4.style = items;
  const obj6 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = activeSubscription(1115).intl;
  obj6.children = intl.format(activeSubscription(1115).t.l3uCCX, { activeListingName: first });
  const items1 = [
    closure_7(activeSubscription(4635).Text, obj6),
    closure_7(activeSubscription(1177).Spacer, { size: 16 }),
    ,
  ];
  const obj7 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = activeSubscription(1115).intl;
  const obj5 = { paddingBottom: 16 + useSafeAreaInsetsDefault().bottom };
  const items2 = [
    intl2.format(activeSubscription(1115).t.Zmtrs2, {
      activeListingName: first,
      changeToListingName: _slicedToArray(obj2.useName(changeToListingId), 1)[0],
      billingEndDate: formatResult,
      emphasisHook,
    }),
    "\n\n",
  ];
  const intl3 = activeSubscription(1115).intl;
  items2[2] = intl3.format(activeSubscription(1115).t.KIiWca, { emphasisHook });
  obj7.children = items2;
  items1[2] = closure_8(activeSubscription(4635).Text, obj7);
  let tmp7Result = null;
  if (activeSubscription.status !== SubscriptionStatusTypes.CANCELED) {
    const obj10 = { children: null };
    const items3 = [closure_7(tmp6(1177).Spacer, { size: 16 })];
    const obj11 = { text: null, onPress: null };
    const intl4 = tmp6(1115).intl;
    obj11.text = intl4.string(tmp6(1115).t.UwHVxr);
    obj11.onPress = function onPress() {
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16665, dependencyMap.paths), {
        subscriptionId: activeSubscription.id,
      });
      const obj2 = { subscriptionId: activeSubscription.id };
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    items3[1] = closure_7(tmp6(16657).ArrowButton, obj11);
    obj10.children = items3;
    tmp7Result = closure_8(closure_9, obj10);
  }
  const obj8 = {
    activeListingName: first,
    changeToListingName: _slicedToArray(obj2.useName(changeToListingId), 1)[0],
    billingEndDate: formatResult,
    emphasisHook,
  };
  const obj9 = { emphasisHook };
  items1[3] = tmp7Result;
  obj4.children = items1;
  return closure_7(activeSubscription(7257).BottomSheet, { startExpanded: true, children: closure_8(View, obj4) });
}
