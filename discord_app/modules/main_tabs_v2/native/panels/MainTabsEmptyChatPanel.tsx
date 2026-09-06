// === Module 16734: MainTabsEmptyChatPanel ===

// Module 16734 (MainTabsEmptyChatPanel)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import useDrawerWidth from "useDrawerWidth" /* 11528 */;
import noop from "module_19" /* 19 */;

const FavoritesEmptyStateDefault = tmp3(16735);
require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles((left, marginTop) => {
  let obj = { container: null };
  obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.left = left;
  obj.marginTop = marginTop;
  obj.backgroundColor = nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND;
  obj.borderTopWidth = nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH;
  obj.borderTopColor = nativeDefault.colors.APP_FRAME_BORDER;
  obj.borderLeftWidth = nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH;
  obj.borderLeftColor = nativeDefault.colors.APP_FRAME_BORDER;
  obj.borderTopLeftRadius = nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS;
  obj.container = obj;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsEmptyChatPanel.tsx");

export default function MainTabsEmptyChatPanel() {
  let obj = useDrawerWidth;
  const drawerWidth = obj.useDrawerWidth();
  const tmp4 = closure_6(drawerWidth, useSafeAreaInsetsDefault().top);
  let tmp5 = null;
  if (obj2.useIsFavoritesGuildSelected()) {
    obj = { style: tmp4.container, pointerEvents: "box-none", children: jsx(FavoritesEmptyStateDefault, {}) };
    tmp5 = <React4 style={tmp4.container} pointerEvents="box-none">{jsx(FavoritesEmptyStateDefault, {})}</React4>;
  }
  return tmp5;
};