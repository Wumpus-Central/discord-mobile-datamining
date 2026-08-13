// discord_app/modules/main_tabs_v2/native/panels/MainTabsEmptyChatPanel.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { useSafeAreaInsets } from "../../../safe_area/useSafeAreaInsets.native.tsx";
import { sum } from "../../../screen/native/drawer/useDrawerWidth.tsx";

let c3;
let c4;
const require = arg1;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
let closure_6 = createCacheKey.createStyles((left, marginTop) => {
  let obj = { container: null };
  obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.left = left;
  obj.marginTop = marginTop;
  obj.backgroundColor = Themes.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND;
  obj.borderTopWidth = Themes.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH;
  obj.borderTopColor = Themes.colors.APP_FRAME_BORDER;
  obj.borderLeftWidth = Themes.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH;
  obj.borderLeftColor = Themes.colors.APP_FRAME_BORDER;
  obj.borderTopLeftRadius = Themes.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS;
  obj[0] = obj;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsEmptyChatPanel.tsx");

export default function MainTabsEmptyChatPanel() {
  let obj = sum;
  const drawerWidth = obj.useDrawerWidth();
  const tmp3 = importDefault;
  const tmp4 = callback(drawerWidth, useSafeAreaInsets().top);
  let tmp5 = null;
  if (obj2.useIsFavoritesGuildSelected()) {
    obj = { style: null, pointerEvents: "box-none", children: null };
    obj[0] = tmp4.container;
    obj[2] = jsx(tmp3(15887), {});
    tmp5 = <closure_4 style={null} pointerEvents="box-none">{null}</closure_4>;
  }
  return tmp5;
};