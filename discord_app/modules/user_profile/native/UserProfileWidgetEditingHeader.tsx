// discord_app/modules/user_profile/native/UserProfileWidgetEditingHeader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/02119_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import UserProfileAnalyticsUtils from "../UserProfileAnalyticsUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
const View = fn(17).View;
let closure_6 = fn(6106).TrackUserProfileEditActions;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5012);
let obj2 = {
  header: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 },
  heading: { flex: 1 },
};
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetEditingHeader.tsx");

export default function UserProfileWidgetEditingHeader() {
  const tmp = closure_9();
  items = [AuthenticationStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => id.getId());
  let obj = stateFromStores(504);
  const ref = noop.useRef(null);
  const obj3 = { style: tmp.header, children: null };
  const obj4 = { variant: "body-sm/semibold", color: "text-subtle", style: tmp.heading, children: null };
  const intl = stateFromStores(1112).intl;
  obj4.children = intl.string(stateFromStores(1112).t.OYlggR);
  const items1 = [closure_7(stateFromStores(5603).Heading, obj4), ,];
  const obj5 = { size: "sm", variant: "secondary", icon: null, text: null, onPress: null };
  let obj2 = stateFromStores(14624);
  obj5.icon = closure_7(stateFromStores(11222).PlusSmallIcon, { size: "xs", color: ref(575).colors.ICON_DEFAULT });
  const intl2 = stateFromStores(1112).intl;
  obj5.text = intl2.string(stateFromStores(1112).t["lBG2s/"]);
  obj5.onPress = function onPress() {
    const result = UserProfileAnalyticsUtils.trackUserProfileEditAction({
      userId: stateFromStores,
      action: constants.PRESS_ADD_WIDGET,
    });
    const obj2 = { userId: stateFromStores, action: constants.PRESS_ADD_WIDGET };
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(14966, dependencyMap.paths),
      "UserProfileWidgetAddActionSheet",
    );
  };
  items1[1] = closure_7(stateFromStores(5610).Button, obj5);
  const obj7 = {
    ref,
    size: "sm",
    variant: "secondary",
    icon: null,
    accessibilityLabel: null,
    disabled: null,
    onPress: null,
  };
  const obj6 = { size: "xs", color: ref(575).colors.ICON_DEFAULT };
  obj7.icon = closure_7(stateFromStores(13065).ArrowsUpDownIcon, { size: "sm", color: ref(575).colors.ICON_DEFAULT });
  const intl3 = stateFromStores(1112).intl;
  obj7.accessibilityLabel = intl3.string(stateFromStores(1112).t.tm1WHd);
  obj7.disabled = obj2.useBoardWidgets(stateFromStores).length < 2;
  obj7.onPress = function onPress() {
    return ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(16118, dependencyMap.paths),
      "UserProfileWidgetReorderActionSheet",
      { returnFocusRef: ref },
    );
  };
  items1[2] = closure_7(stateFromStores(7910).IconButton, obj7);
  obj3.children = items1;
  return closure_8(View, obj3);
}
