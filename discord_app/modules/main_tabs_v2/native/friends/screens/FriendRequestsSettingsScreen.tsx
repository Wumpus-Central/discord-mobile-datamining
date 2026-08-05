// discord_app/modules/main_tabs_v2/native/friends/screens/FriendRequestsSettingsScreen.tsx
import "noop";
import { ScrollView } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { getMixedGradientColor } from "../../../../client_themes/native/ThemedGradient.tsx";
import { UserSettingsFriendRequests } from "../../../../user_settings/content_and_social/native/UserSettingsFriendRequests.tsx";

let c3;
let c4;
let c5;
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, flex: 1, paddingTop: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendRequestsSettingsScreen.tsx");

export default function FriendRequestsSettingsScreen() {
  let obj = { children: null };
  const items = [callback(getMixedGradientColor, { absolute: true }), ];
  obj = { style: createCacheKey().container, children: callback(UserSettingsFriendRequests, {}) };
  items[1] = callback(ScrollView, obj);
  obj[0] = items;
  return callback2(closure_4, obj);
};