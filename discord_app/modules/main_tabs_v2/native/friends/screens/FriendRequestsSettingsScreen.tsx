// === Module 15995: FriendRequestsSettingsScreen ===

// Module 15995 (FriendRequestsSettingsScreen)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getMixedGradientColorDefault from "getMixedGradientColor" /* 9091 */;
import UserSettingsFriendRequestsDefault from "UserSettingsFriendRequests" /* 15996 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

noopAll;
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, flex: 1, paddingTop: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendRequestsSettingsScreen.tsx");

export default function FriendRequestsSettingsScreen() {
  const items = [callback(getMixedGradientColorDefault, { absolute: true }), ];
  const obj = { style: callback3().container, children: callback(UserSettingsFriendRequestsDefault, {}) };
  items[1] = callback(ScrollView, obj);
  obj[0] = items;
  return callback2(closure_4, obj);
};