// === Module 16205: FriendRequestsSettingsScreen ===

// Module 16205 (FriendRequestsSettingsScreen)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getMixedGradientColorDefault from "getMixedGradientColor" /* 5017 */;
import UserSettingsFriendRequestsDefault from "UserSettingsFriendRequests" /* 16206 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

noopAll;
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, flex: 1, paddingTop: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendRequestsSettingsScreen.tsx");

export default function FriendRequestsSettingsScreen() {
  let obj = { children: null };
  const items = [callback(getMixedGradientColorDefault, { absolute: true }), ];
  obj = { style: callback3().container, children: callback(UserSettingsFriendRequestsDefault, {}) };
  items[1] = callback(ScrollView, obj);
  obj[0] = items;
  return callback2(closure_4, obj);
};