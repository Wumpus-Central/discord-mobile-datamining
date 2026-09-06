// === Module 7035: NavigatorScreen ===

// Module 7035 (NavigatorScreen)
import config from "config" /* 7036 */;
import PostponeRender from "PostponeRender" /* 7037 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxs = fn(21).jsxs;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/NavigatorScreen.native.tsx");

export const NavigatorScreen = noop.memo((arg0) => {
  ({ screen, route } = arg0);
  const customNavbar = screen.customNavbar;
  ({ navigation, viewStyle } = arg0);
  const designConfig = config.designConfig;
  const trackNavigatorScreenImpression = designConfig.useTrackNavigatorScreenImpression(screen, route);
  let customNavbarResult = null;
  if (null != customNavbar) {
    customNavbarResult = customNavbar();
  }
  const obj = { postpone: screen.postponeRender, ignoreKeyboard: screen.ignoreKeyboard, viewStyle, children: null };
  const items = [customNavbarResult, screen.render(route.params, navigation)];
  obj.children = items;
  return jsxs(PostponeRender.PostponeRender, { postpone: screen.postponeRender, ignoreKeyboard: screen.ignoreKeyboard, viewStyle, children: null });
});