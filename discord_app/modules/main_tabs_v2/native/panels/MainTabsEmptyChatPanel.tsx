// discord_app/modules/main_tabs_v2/native/panels/MainTabsEmptyChatPanel.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import FavoritesHooks from "../../../favorites/FavoritesHooks.tsx";
import useDrawerWidth from "../../../screen/native/drawer/useDrawerWidth.tsx";
import FavoritesEmptyStateDefault from "../../../favorites/native/FavoritesEmptyState.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5090);
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
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsEmptyChatPanel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function MainTabsEmptyChatPanel() {
      const cResult = c.c(3);
      const drawerWidth = useDrawerWidth.useDrawerWidth();
      let container = closure_6(drawerWidth, useSafeAreaInsetsDefault().top);
      if (!obj3.useIsFavoritesGuildSelected()) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp8 = jsx(FavoritesEmptyStateDefault, {});
          cResult[0] = tmp8;
          let first = tmp8;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== container.container) {
          const obj4 = { style: container.container, pointerEvents: "box-none", children: first };
          const tmp12 = (
            <React4 style={container.container} pointerEvents="box-none">
              {first}
            </React4>
          );
          container = container.container;
          cResult[1] = container;
          cResult[2] = tmp12;
        }
      }
      obj3 = FavoritesHooks;
    }
  : function MainTabsEmptyChatPanel() {
      const drawerWidth = useDrawerWidth.useDrawerWidth();
      const tmp4 = closure_6(drawerWidth, useSafeAreaInsetsDefault().top);
      let tmp5 = null;
      if (obj2.useIsFavoritesGuildSelected()) {
        const obj3 = {
          style: tmp4.container,
          pointerEvents: "box-none",
          children: jsx(FavoritesEmptyStateDefault, {}),
        };
        tmp5 = (
          <React4 style={tmp4.container} pointerEvents="box-none">
            {jsx(FavoritesEmptyStateDefault, {})}
          </React4>
        );
      }
      return tmp5;
    };
