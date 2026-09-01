// discord_app/modules/main_tabs_v2/native/panels/MainTabsEmptyChatPanel.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import sum from "../../../screen/native/drawer/useDrawerWidth.tsx";
import FavoritesEmptyStateDefault from "../../../favorites/native/FavoritesEmptyState.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
let closure_6 = createCacheKey.createStyles((left, marginTop) => {
  let obj = { container: null };
  obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.left = left;
  obj.marginTop = marginTop;
  obj.backgroundColor = ThemesDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND;
  obj.borderTopWidth = ThemesDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH;
  obj.borderTopColor = ThemesDefault.colors.APP_FRAME_BORDER;
  obj.borderLeftWidth = ThemesDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH;
  obj.borderLeftColor = ThemesDefault.colors.APP_FRAME_BORDER;
  obj.borderTopLeftRadius = ThemesDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS;
  obj[0] = obj;
  return obj;
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsEmptyChatPanel.tsx");

export default function MainTabsEmptyChatPanel() {
  let obj = sum;
  const drawerWidth = obj.useDrawerWidth();
  const tmp3 = importDefault;
  const tmp4 = callback(drawerWidth, useSafeAreaInsetsDefault().top);
  let tmp5 = null;
  if (obj2.useIsFavoritesGuildSelected()) {
    obj = { style: null, pointerEvents: "box-none", children: null };
    obj[0] = tmp4.container;
    obj[2] = jsx(FavoritesEmptyStateDefault, {});
    tmp5 = (
      <closure_4 style={null} pointerEvents="box-none">
        {null}
      </closure_4>
    );
  }
  return tmp5;
}
