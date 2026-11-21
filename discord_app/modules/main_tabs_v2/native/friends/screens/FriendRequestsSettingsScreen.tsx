// === Module 18881: FriendRequestsSettingsScreen ===

// Module 18881 (FriendRequestsSettingsScreen)
import nativeDefault from "native" /* 575 */;
import ThemedGradientDefault from "ThemedGradient" /* 9659 */;
import UserSettingsFriendRequestsDefault from "UserSettingsFriendRequests" /* 18882 */;
import noop from "module_19" /* 19 */;

const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4913);
const obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1, paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendRequestsSettingsScreen.tsx");

export default function FriendRequestsSettingsScreen() {
  const obj = { children: null };
  items = [React3(ThemedGradientDefault, { absolute: true }), ];
  const tmp = closure_6();
  items[1] = React3(ScrollView, { style: closure_6().container, children: React3(UserSettingsFriendRequestsDefault, {}) });
  obj.children = items;
  return hasOwnProperty(React4, obj);
};