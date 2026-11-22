// === Module 15953: UserProfileWidgetEditingHeader ===

// Module 15953 (UserProfileWidgetEditingHeader)
import nativeDefault from "native" /* 575 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8136 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const View = fn(17).View;
let closure_6 = fn(8069).TrackUserProfileEditActions;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4913);
let obj2 = { header: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, heading: { flex: 1 } };
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
  const items1 = [closure_7(stateFromStores(5504).Heading, obj4), , ];
  const obj5 = { size: "sm", variant: "secondary", icon: null, text: null, onPress: null };
  let obj2 = stateFromStores(10349);
  obj5.icon = closure_7(stateFromStores(9578).PlusSmallIcon, { size: "xs", color: ref(575).colors.ICON_DEFAULT });
  const intl2 = stateFromStores(1112).intl;
  obj5.text = intl2.string(stateFromStores(1112).t["lBG2s/"]);
  obj5.onPress = function onPress() {
    const result = UserProfileAnalyticsUtils.trackUserProfileEditAction({ userId: stateFromStores, action: constants.PRESS_ADD_WIDGET });
    const obj2 = { userId: stateFromStores, action: constants.PRESS_ADD_WIDGET };
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14574, dependencyMap.paths), "UserProfileWidgetAddActionSheet");
  };
  items1[1] = closure_7(stateFromStores(5511).Button, obj5);
  const obj7 = { ref, size: "sm", variant: "secondary", icon: null, accessibilityLabel: null, disabled: null, onPress: null };
  const obj6 = { size: "xs", color: ref(575).colors.ICON_DEFAULT };
  obj7.icon = closure_7(stateFromStores(10228).ArrowsUpDownIcon, { size: "sm", color: ref(575).colors.ICON_DEFAULT });
  const intl3 = stateFromStores(1112).intl;
  obj7.accessibilityLabel = intl3.string(stateFromStores(1112).t.tm1WHd);
  obj7.disabled = obj2.useBoardWidgets(stateFromStores).length < 2;
  obj7.onPress = function onPress() {
    return ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15954, dependencyMap.paths), "UserProfileWidgetReorderActionSheet", { returnFocusRef: ref });
  };
  items1[2] = closure_7(stateFromStores(7591).IconButton, obj7);
  obj3.children = items1;
  return closure_8(View, obj3);
};