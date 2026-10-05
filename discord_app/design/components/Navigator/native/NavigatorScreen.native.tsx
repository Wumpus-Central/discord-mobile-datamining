// === Module 6531: NavigatorScreen ===

// Module 6531 (NavigatorScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import config from "config" /* 6532 */;
import PostponeRender2 from "PostponeRender" /* 6533 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsxs = Fragment.jsxs;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let route;
  let screen;
  let viewStyle;
  const obj = react2;
  const cResult = obj.c(12);
  ({ screen, route, navigation, viewStyle } = arg0);
  const customNavbar = screen.customNavbar;
  const designConfig = config.designConfig;
  const trackNavigatorScreenImpression = designConfig.useTrackNavigatorScreenImpression(screen, route);
  let tmp5 = null;
  if (null != customNavbar) {
    let tmp6;
    if (cResult[0] !== customNavbar) {
      const customNavbarResult = customNavbar();
      cResult[0] = customNavbar;
      cResult[1] = customNavbarResult;
      tmp6 = customNavbarResult;
    } else {
      tmp6 = cResult[1];
    }
    tmp5 = tmp6;
  }
  if (cResult[2] === navigation) {
    if (cResult[3] === route.params) {
      let tmp10;
      if (cResult[4] === screen) {
        tmp10 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        if (cResult[7] === screen.ignoreKeyboard) {
          if (cResult[8] === screen.postponeRender) {
            if (cResult[9] === tmp10) {
              let tmp12;
              if (cResult[10] === viewStyle) {
                tmp12 = cResult[11];
              }
              return tmp12;
            }
          }
        }
      }
      const items = [tmp5, tmp10];
      const tmp14 = jsxs(PostponeRender2.PostponeRender, { postpone: tmp8, ignoreKeyboard: tmp9, viewStyle, children: items });
      cResult[6] = tmp5;
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
}) : ((arg0) => {
  let route;
  let screen;
  let viewStyle;
  ({ screen, route } = arg0);
  const customNavbar = screen.customNavbar;
  ({ navigation, viewStyle } = arg0);
  const designConfig = config.designConfig;
  const trackNavigatorScreenImpression = designConfig.useTrackNavigatorScreenImpression(screen, route);
  let customNavbarResult = null;
  if (null != customNavbar) {
    customNavbarResult = customNavbar();
  }
  const items = [customNavbarResult, ];
  const PostponeRender = PostponeRender2.PostponeRender;
  items[1] = screen.render(route.params, navigation);
  return <PostponeRender postpone={screen.postponeRender} ignoreKeyboard={screen.ignoreKeyboard} viewStyle={viewStyle}>{items}</PostponeRender>;
}));
const result = size.fileFinishedImporting("design/components/Navigator/native/NavigatorScreen.native.tsx");

export const NavigatorScreen = memoResult;