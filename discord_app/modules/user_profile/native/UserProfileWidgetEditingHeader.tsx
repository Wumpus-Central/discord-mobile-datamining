// === Module 17066: UserProfileWidgetEditingHeader ===

// Module 17066 (UserProfileWidgetEditingHeader)
import nativeDefault from "native" /* 575 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8480 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
let closure_5 = fn(8413).TrackUserProfileEditActions;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5243);
let obj2 = { header: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, heading: { flex: 1 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetEditingHeader.tsx");

export default function UserProfileWidgetEditingHeader() {
  const tmp = closure_8();
  items = [AuthenticationStore];
  _require = require("initialize").useStateFromStores(items, () => id.getId());
  let obj2 = { style: tmp.header, children: null };
  const obj3 = { variant: "body-sm/semibold", color: "text-subtle", style: tmp.heading, children: null };
  const intl = require("util").intl;
  obj3.children = intl.string(require("util").t.OYlggR);
  const items1 = [closure_6(require("Text/Text").Heading, obj3), , ];
  const obj4 = { size: "sm", variant: "secondary", icon: null, text: null, onPress: null };
  let obj = require("initialize");
  obj4.icon = closure_6(require("PlusSmallIcon").PlusSmallIcon, { size: "xs", color: nativeDefault.colors.ICON_DEFAULT });
  const intl2 = require("util").intl;
  obj4.text = intl2.string(require("util").t["lBG2s/"]);
  obj4.onPress = function onPress() {
    const result = UserProfileAnalyticsUtils.trackUserProfileEditAction({ userId, action: constants.PRESS_ADD_WIDGET });
    const obj2 = { userId, action: constants.PRESS_ADD_WIDGET };
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15712, dependencyMap.paths), "UserProfileWidgetAddActionSheet");
  };
  items1[1] = closure_6(require("components/Button/Button").Button, obj4);
  const obj6 = { size: "sm", variant: "secondary", icon: null, accessibilityLabel: null, onPress: null };
  const obj5 = { size: "xs", color: nativeDefault.colors.ICON_DEFAULT };
  obj6.icon = closure_6(require("ArrowsUpDownIcon").ArrowsUpDownIcon, { size: "sm", color: nativeDefault.colors.ICON_DEFAULT });
  const intl3 = require("util").intl;
  obj6.accessibilityLabel = intl3.string(require("util").t.tm1WHd);
  obj6.onPress = function onPress() {

  };
  items1[2] = closure_6(require("IconButton").IconButton, obj6);
  obj2.children = items1;
  return closure_7(View, obj2);
};