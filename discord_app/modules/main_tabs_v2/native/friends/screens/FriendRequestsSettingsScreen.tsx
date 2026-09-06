// === Module 16775: FriendRequestsSettingsScreen ===

// Module 16775 (FriendRequestsSettingsScreen)
import nativeDefault from "native" /* 576 */;
import ThemedGradientDefault from "ThemedGradient" /* 5125 */;
import UserSettingsFriendRequestsDefault from "UserSettingsFriendRequests" /* 16776 */;
import noop from "module_19" /* 19 */;

const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1, paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendRequestsSettingsScreen.tsx");

export default function FriendRequestsSettingsScreen() {
  let obj = { children: null };
  const items = [React3(ThemedGradientDefault, { absolute: true }), ];
  obj = { style: closure_6().container, children: React3(UserSettingsFriendRequestsDefault, {}) };
  items[1] = React3(ScrollView, obj);
  obj.children = items;
  return hasOwnProperty(React4, obj);
};