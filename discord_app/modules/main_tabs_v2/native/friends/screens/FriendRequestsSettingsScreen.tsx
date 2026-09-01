// discord_app/modules/main_tabs_v2/native/friends/screens/FriendRequestsSettingsScreen.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getMixedGradientColorDefault from "../../../../client_themes/native/ThemedGradient.tsx";
import UserSettingsFriendRequestsDefault from "../../../../user_settings/content_and_social/native/UserSettingsFriendRequests.tsx";
import { ScrollView } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

noopAll;
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null };
createCacheKey = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER,
  flex: 1,
  paddingTop: ThemesDefault.space.PX_16,
  paddingHorizontal: ThemesDefault.space.PX_16,
};
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting(
  "modules/main_tabs_v2/native/friends/screens/FriendRequestsSettingsScreen.tsx",
);

export default function FriendRequestsSettingsScreen() {
  let obj = { children: null };
  const items = [callback(getMixedGradientColorDefault, { absolute: true })];
  obj = { style: callback3().container, children: callback(UserSettingsFriendRequestsDefault, {}) };
  items[1] = callback(ScrollView, obj);
  obj[0] = items;
  return callback2(closure_4, obj);
}
