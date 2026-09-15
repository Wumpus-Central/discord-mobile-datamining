// === Module 16886: MainTabsEmptyChatPanel ===

// Module 16886 (MainTabsEmptyChatPanel)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import useDrawerWidth from "useDrawerWidth" /* 11662 */;
import FavoritesEmptyStateDefault from "FavoritesEmptyState" /* 16887 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let closure_6 = createStyles.createStyles((left, marginTop) => {
  const obj = { container: null };
  const obj2 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj2.left = left;
  obj2.marginTop = marginTop;
  obj2.backgroundColor = nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND;
  obj2.borderTopWidth = nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH;
  obj2.borderTopColor = nativeDefault.colors.APP_FRAME_BORDER;
  obj2.borderLeftWidth = nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH;
  obj2.borderLeftColor = nativeDefault.colors.APP_FRAME_BORDER;
  obj2.borderTopLeftRadius = nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS;
  obj.container = obj2;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsEmptyChatPanel.tsx");

export default function MainTabsEmptyChatPanel() {
  const drawerWidth = useDrawerWidth.useDrawerWidth();
  const tmp4 = closure_6(drawerWidth, useSafeAreaInsetsDefault().top);
  let tmp5 = null;
  if (obj2.useIsFavoritesGuildSelected()) {
    const obj3 = { style: tmp4.container, pointerEvents: "box-none", children: jsx(FavoritesEmptyStateDefault, {}) };
    tmp5 = <React4 style={tmp4.container} pointerEvents="box-none">{jsx(FavoritesEmptyStateDefault, {})}</React4>;
  }
  return tmp5;
};