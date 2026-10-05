// discord_app/modules/guild_role_subscriptions/native/purchase_page/ChangeSubscriptionCard.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import _modDef4461 from "../../../../../_runtime/metro/04461__.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let BottomSheet;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
function emphasisHook(children) {
  const obj = { variant: "text-sm/medium", color: "text-default", children };
  return metroImportDefault(Text_Text.Text, obj);
}
const View = react_native.View;
const SubscriptionStatusTypes = Constants.SubscriptionStatusTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let obj = { container: obj2 };
obj2 = { paddingVertical: 16, paddingHorizontal: 24, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_10 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/purchase_page/ChangeSubscriptionCard.tsx",
);

export default function ChangeSubscriptionCard(activeSubscription) {
  let activeListingId;
  let changeToListingId;
  let intl;
  let intl4;
  let items;
  let items1;
  let items2;
  let items3;
  activeSubscription = activeSubscription.activeSubscription;
  ({ activeListingId, changeToListingId } = activeSubscription);
  const tmp = closure_10();
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj.useName(activeListingId), 1)[0];
  let obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj2.useName(changeToListingId), 1)[0];
  let obj3 = _modDef4461(activeSubscription.currentPeriodEnd);
  const status = activeSubscription.status;
  const CANCELED = SubscriptionStatusTypes.CANCELED;
  const obj4 = { style: items, children: items1 };
  items = [tmp.container];
  const obj5 = { paddingBottom: 16 + bottom };
  items[1] = obj5;
  const formatResult = obj3.format("MMMM Do");
  BottomSheet = activeSubscription(6645).BottomSheet;
  const obj6 = {
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    children: intl.format(activeSubscription(1126).t.l3uCCX, { activeListingName: first }),
  };
  const Text = activeSubscription(4886).Text;
  intl = activeSubscription(1126).intl;
  items1 = [closure_7(Text, obj6), closure_7(activeSubscription(1188).Spacer, { size: 16 }), ,];
  const obj7 = { variant: "text-sm/normal", color: "text-default", children: items2 };
  const Text2 = activeSubscription(4886).Text;
  const intl2 = activeSubscription(1126).intl;
  items2 = [, ,];
  const obj8 = { activeListingName: first, changeToListingName: first1, billingEndDate: formatResult, emphasisHook };
  items2[0] = intl2.format(activeSubscription(1126).t.Zmtrs2, obj8);
  items2[1] = "\n\n";
  const intl3 = activeSubscription(1126).intl;
  const obj9 = { emphasisHook };
  items2[2] = intl3.format(activeSubscription(1126).t.KIiWca, obj9);
  items1[2] = closure_8(Text2, obj7);
  let tmp8Result = null;
  if (status !== CANCELED) {
    const obj10 = { children: items3 };
    items3 = [closure_7(activeSubscription(1188).Spacer, { size: 16 })];
    const obj11 = {
      text: intl4.string(activeSubscription(1126).t.UwHVxr),
      onPress() {
        const obj = ModalActionCreatorsDefault;
        const obj2 = { subscriptionId: activeSubscription.id };
        obj.pushLazy(asyncRequire(16505, dependencyMap.paths), obj2);
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.hideActionSheet();
      },
    };
    const ArrowButton = tmp7(16497).ArrowButton;
    intl4 = tmp7(1126).intl;
    items3[1] = closure_7(ArrowButton, obj11);
    tmp8Result = closure_8(closure_9, obj10);
  }
  items1[3] = tmp8Result;
  const obj12 = { startExpanded: true, children: closure_8(View, obj4) };
  return closure_7(BottomSheet, obj12);
}
