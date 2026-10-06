// === Module 16941: MainTabsEmptyChatPanel ===

// Module 16941 (MainTabsEmptyChatPanel)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import FavoritesHooks from "FavoritesHooks" /* 10049 */;
import useDrawerWidth from "useDrawerWidth" /* 11157 */;
import FavoritesEmptyStateDefault from "FavoritesEmptyState" /* 16942 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ StyleSheet: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((left, marginTop) => {
  let obj2;
  const obj = { container: obj2 };
  obj2 = { left, marginTop, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND, borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: nativeDefault.colors.APP_FRAME_BORDER, borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER, borderTopLeftRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  return obj;
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = react2;
  const cResult = obj.c(3);
  const obj2 = useDrawerWidth;
  const drawerWidth = obj2.useDrawerWidth();
  const tmp5 = closure_6(drawerWidth, useSafeAreaInsetsDefault().top);
  let tmp6 = null;
  const obj3 = FavoritesHooks;
  if (obj3.useIsFavoritesGuildSelected()) {
    let first;
    let tmp11;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp10 = jsx(FavoritesEmptyStateDefault, {});
      cResult[0] = tmp10;
      first = tmp10;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== tmp5.container) {
      const tmp14 = <React3 style={tmp5.container} pointerEvents="box-none">{first}</React3>;
      cResult[1] = tmp5.container;
      cResult[2] = tmp14;
      tmp11 = tmp14;
    } else {
      tmp11 = cResult[2];
    }
    tmp6 = tmp11;
  }
  return tmp6;
}) : (() => {
  const obj = useDrawerWidth;
  const drawerWidth = obj.useDrawerWidth();
  let tmp5 = null;
  const tmp4 = closure_6(drawerWidth, useSafeAreaInsetsDefault().top);
  const obj2 = FavoritesHooks;
  if (obj2.useIsFavoritesGuildSelected()) {
    tmp5 = <React3 style={tmp4.container} pointerEvents="box-none">{jsx(FavoritesEmptyStateDefault, {})}</React3>;
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsEmptyChatPanel.tsx");

export default tmp4;