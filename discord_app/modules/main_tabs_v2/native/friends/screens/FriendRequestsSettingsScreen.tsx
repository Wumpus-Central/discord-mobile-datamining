// === Module 18846: FriendRequestsSettingsScreen ===

// Module 18846 (FriendRequestsSettingsScreen)
import nativeDefault from "native" /* 575 */;
import ThemedGradientDefault from "ThemedGradient" /* 10736 */;
import UserSettingsFriendRequestsDefault from "UserSettingsFriendRequests" /* 18847 */;
import noop from "module_19" /* 19 */;

const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5014);
const obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1, paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendRequestsSettingsScreen.tsx");

export default function FriendRequestsSettingsScreen() {
  const obj = { children: null };
  const items = [React3(ThemedGradientDefault, { absolute: true }), ];
  const tmp = closure_6();
  items[1] = React3(ScrollView, { style: closure_6().container, children: React3(UserSettingsFriendRequestsDefault, {}) });
  obj.children = items;
  return hasOwnProperty(React4, obj);
};