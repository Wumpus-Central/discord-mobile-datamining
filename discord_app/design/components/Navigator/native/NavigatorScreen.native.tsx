// discord_app/design/components/Navigator/native/NavigatorScreen.native.tsx
import config from "../../../config.tsx";
import PostponeRender from "PostponeRender.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  return jsxs(PostponeRender.PostponeRender, {
    postpone: screen.postponeRender,
    ignoreKeyboard: screen.ignoreKeyboard,
    viewStyle,
    children: null,
  });
});
