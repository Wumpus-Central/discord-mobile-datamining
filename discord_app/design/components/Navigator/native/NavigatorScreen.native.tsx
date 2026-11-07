// discord_app/design/components/Navigator/native/NavigatorScreen.native.tsx
import config from "../../../config.tsx";
import PostponeRender from "PostponeRender.native.tsx";
import NavigatorGradientContext from "NavigatorGradientContext.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsxs: c2, jsx: c3 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/NavigatorScreen.native.tsx");

export const NavigatorScreen = noop.memo(function NavigatorScreen(arg0) {
  ({ screen, route, gradientColor } = arg0);
  const customNavbar = screen.customNavbar;
  ({ navigation, viewStyle } = arg0);
  const designConfig = config.designConfig;
  const trackNavigatorScreenImpression = designConfig.useTrackNavigatorScreenImpression(screen, route);
  let customNavbarResult = null;
  if (null != customNavbar) {
    customNavbarResult = customNavbar();
  }
  const obj = { postpone: screen.postponeRender, ignoreKeyboard: screen.ignoreKeyboard, viewStyle, children: null };
  items = [customNavbarResult, screen.render(route.params, navigation)];
  obj.children = items;
  const tmp5 = React2(PostponeRender.PostponeRender, obj);
  let tmp6 = tmp5;
  if (null != gradientColor) {
    const obj2 = { color: gradientColor, children: tmp5 };
    tmp6 = React3(NavigatorGradientContext.NavigatorGradientProvider, obj2);
  }
  return tmp6;
});
