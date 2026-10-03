// === Module 6531: NavigatorScreen ===

// Module 6531 (NavigatorScreen)
import c from "c" /* 576 */;
import config from "config" /* 6532 */;
import PostponeRender from "PostponeRender" /* 6533 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxs = fn(21).jsxs;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/NavigatorScreen.native.tsx");

export const NavigatorScreen = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  ({ screen, route, navigation, viewStyle } = arg0);
  const customNavbar = screen.customNavbar;
  const designConfig = config.designConfig;
  const trackNavigatorScreenImpression = designConfig.useTrackNavigatorScreenImpression(screen, route);
  if (null == customNavbar) {
    if (cResult[2] === navigation) {
      if (cResult[3] === route.params) {
        if (cResult[4] === screen) {
          let tmp10 = cResult[5];
        }
        if (cResult[6] === null) {
          if (cResult[7] === screen.ignoreKeyboard) {
            if (cResult[8] === screen.postponeRender) {
              if (cResult[9] === tmp10) {
                if (cResult[10] === viewStyle) {
                  let tmp12 = cResult[11];
                }
                return tmp12;
              }
            }
          }
        }
        const obj2 = { postpone: tmp8, ignoreKeyboard: tmp9, viewStyle, children: null };
        const items = [null, tmp10];
        obj2.children = items;
        const tmp14 = jsxs(PostponeRender.PostponeRender, { postpone: tmp8, ignoreKeyboard: tmp9, viewStyle, children: null });
        cResult[6] = null;
        cResult[7] = screen.ignoreKeyboard;
        cResult[8] = screen.postponeRender;
        cResult[9] = tmp10;
        cResult[10] = viewStyle;
        cResult[11] = tmp14;
        tmp12 = tmp14;
      }
    }
    const renderResult = screen.render(route.params, navigation);
    cResult[2] = navigation;
    cResult[3] = route.params;
    cResult[4] = screen;
    cResult[5] = renderResult;
    tmp10 = renderResult;
  } else if (cResult[0] !== customNavbar) {
    const customNavbarResult = customNavbar();
    cResult[0] = customNavbar;
    cResult[1] = customNavbarResult;
  }
}) : ((arg0) => {
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
}));