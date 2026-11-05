// discord_app/modules/main_tabs_v2/native/MainTabs.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import useColorThemeBackgroundDefault from "../../client_themes/native/useColorThemeBackground.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import useActiveTheme from "../../client_themes/native/useActiveTheme.tsx";
import ThemedGradientDefault from "../../client_themes/native/ThemedGradient.tsx";
import useAppFrameDefault from "useAppFrame.tsx";
import MainTabsNavigatorPanelDefault from "panels/MainTabsNavigatorPanel.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5143);
let closure_7 = createStyles.createStyles((paddingLeft, paddingRight, top) => {
  const obj = {
    container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingLeft, paddingRight },
    content: { flex: 1 },
    frameBorderClip: null,
    frameBorderOffset: null,
  };
  const obj3 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj3.top = top;
  obj3.left = undefined;
  obj3.width = nativeDefault.radii.md;
  obj3.overflow = "hidden";
  obj.frameBorderClip = obj3;
  obj.frameBorderOffset = { top: -top };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default noop.memo(function MainTabs() {
  const tmp3 = useColorThemeBackgroundDefault();
  const isCustomThemeActive = useActiveTheme.useIsCustomThemeActive();
  const tmp5 = useAppFrameDefault();
  ({ left, right } = tmp5.insets);
  const styles = tmp5.styles;
  const tmp6 = closure_7(left, right, useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH));
  const obj3 = { style: null, children: null };
  items = [tmp6.container, styles.container];
  obj3.style = items;
  const obj4 = { gradient: tmp3, children: null };
  if (left > 0) {
    let tmp8Result = null;
    if (!tmp7) {
      tmp8Result = hasOwnProperty(ThemedGradientDefault, { absolute: true, mix: true });
    }
  } else {
    tmp8Result = null;
  }
  const items1 = [tmp8Result];
  const obj5 = { style: null, children: null };
  const items2 = [tmp6.content, styles.content];
  obj5.style = items2;
  const items3 = [hasOwnProperty(ThemedGradientDefault, { absolute: true, mix: isCustomThemeActive }), ,];
  const obj6 = {
    style: null,
    children: hasOwnProperty(MainTabsNavigatorPanelDefault, { showHeaderGradient: null == styles.container }),
  };
  const items4 = [tmp6.content, styles.body];
  obj6.style = items4;
  items3[1] = hasOwnProperty(React4, obj6);
  let tmp8Result2 = null;
  if (null != styles.container) {
    const obj8 = { style: tmp6.frameBorderClip, pointerEvents: "none", children: null };
    const obj9 = { style: null };
    const items5 = [styles.border, tmp6.frameBorderOffset];
    obj9.style = items5;
    obj8.children = hasOwnProperty(React4, obj9);
    tmp8Result2 = hasOwnProperty(React4, obj8);
  }
  items3[2] = tmp8Result2;
  obj5.children = items3;
  items1[1] = timestampProducer(React4, obj5);
  obj4.children = items1;
  obj3.children = timestampProducer(native.ThemeContextProvider, obj4);
  return hasOwnProperty(React4, obj3);
});
