// === Module 6504: HeaderContainer ===

// Module 6504 (HeaderContainer)
import Fragment from "Fragment" /* 21 */;
import Link from "Link" /* 1491 */;
import _mod6019 from "module_6019" /* 6019 */;
import react_native from "react-native" /* 6505 */;
import _mod6506 from "module_6506" /* 6506 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;

let descriptor;

let StyleSheet;
let c3;
({ StyleSheet, View: c3 } = react_native2);
const jsx = Fragment.jsx;
const styles = StyleSheet.create({ absolute: { position: "absolute", top: 0, start: 0, end: 0 } });

export const HeaderContainer = function HeaderContainer(style) {
  let closure_3;
  let layout;
  let minHeight;
  let scenes;
  ({ mode: require, scenes, layout: dependencyMap, getPreviousScene: react, contentHeight: closure_3, onContentHeightChange: jsx } = style);
  style = style.style;
  const focusedRoute = style.getFocusedRoute();
  let closure_6 = react.useContext(_mod6019.HeaderBackContext);
  let obj = Link;
  const buildHref = obj.useLinkBuilder().buildHref;
  let substr = scenes.slice(-2);
  return <minHeight pointerEvents="box-none" style={style}>{substr.map((descriptor, index, arr) => {
    let forNoAnimation;
    let header;
    let headerShown;
    let obj3;
    const tmp = descriptor;
    const tmp2 = "screen" === descriptor;
    if (!tmp2) {
      if (descriptor) {
        let options = descriptor.descriptor.options;
        ({ header, headerShown } = options);
        let tmp3 = undefined === headerShown;
        const headerMode = options.headerMode;
        if (!tmp3) {
          tmp3 = headerShown;
        }
        let headerStyleInterpolator = options.headerStyleInterpolator;
        if (headerMode === tmp) {
          if (tmp3) {
            const obj = { route: descriptor.descriptor.route };
            const tmp7 = closure_2(obj);
            let tmp8 = closure_6;
            let tmp9 = closure_6;
            if (tmp7) {
              const route = tmp7.descriptor.route;
              if (tmp7) {
                const obj2 = { title: obj3.getHeaderTitle(tmp10, route.name), href: buildHref(route.name, route.params) };
                tmp8 = obj2;
                obj3 = _mod6019;
              }
              tmp9 = tmp8;
            }
            descriptor = undefined;
            if (arr[index - 1] != null) {
              descriptor = tmp14.descriptor;
            }
            let descriptor1;
            if (arr[index + 1] != null) {
              descriptor1 = tmp17.descriptor;
            }
            let options1;
            if (descriptor != null) {
              options1 = descriptor.options;
            }
            if (!options1) {
              options1 = {};
            }
            const headerShown2 = options1.headerShown;
            const headerMode2 = options1.headerMode;
            const tmp19 = undefined === headerShown2 || headerShown2;
            const substr = arr.slice(index + 1);
            const found = substr.find((descriptor) => {
              let options;
              if (descriptor != null) {
                options = descriptor.descriptor.options;
              }
              if (!options) {
                options = {};
              }
              const headerShown = options.headerShown;
              let tmp3 = false === (undefined === headerShown || headerShown);
              if (!tmp3) {
                tmp3 = "screen" === tmp2;
              }
              return tmp3;
            });
            let options2;
            if (found != null) {
              options2 = found.descriptor.options;
            }
            if (!options2) {
              options2 = {};
            }
            const gestureDirection = options2.gestureDirection;
            const obj4 = { layout: dependencyMap, back: tmp9, progress: descriptor.progress, options: descriptor.descriptor.options, route: descriptor.descriptor.route, navigation: descriptor.descriptor.navigation, styleInterpolator: forNoAnimation };
            const tmp21 = (false === tmp19 || "screen" === headerMode2) && !descriptor1 || found;
            if ("float" === tmp) {
              if (tmp21) {
                if ("vertical" !== gestureDirection) {
                  let forSlideUp;
                  if ("vertical-inverted" !== gestureDirection) {
                    if ("horizontal-inverted" === gestureDirection) {
                      forSlideUp = react_native.forSlideRight;
                    } else {
                      forSlideUp = react_native.forSlideLeft;
                    }
                  }
                  headerStyleInterpolator = forSlideUp;
                }
                forSlideUp = react_native.forSlideUp;
              }
              forNoAnimation = headerStyleInterpolator;
            } else {
              forNoAnimation = react_native.forNoAnimation;
            }
            const obj5 = { route: descriptor.descriptor.route, navigation: descriptor.descriptor.navigation, children: null };
            let str5 = "none";
            const NavigationProvider = Link.NavigationProvider;
            if (closure_5.key === descriptor.descriptor.route.key) {
              str5 = "box-none";
            }
            const obj6 = { pointerEvents: str5, "aria-hidden": closure_5.key !== descriptor.descriptor.route.key, style: null, children: null };
            if ("float" !== tmp) {
              let headerResult;
              let tmp37 = null;
              obj6.style = tmp37;
              let fn;
              if (jsx) {
                fn = (height) => {
                  <obj />;
                };
              }
              if (undefined !== header) {
                headerResult = header(obj4);
              } else {
                const Header = _mod6506.Header;
                const merged = Object.assign(obj4);
                headerResult = <Header />;
              }
              obj6.children = <closure_3 pointerEvents="box-none" onLayout={fn}>{headerResult}</closure_3>;
              obj5.children = <closure_3 {...obj6} />;
              return <NavigationProvider key={descriptor.descriptor.route.key} {...obj5} />;
            }
            const items = [closure_5.absolute, ];
            let tmp39 = null;
            if (tmp2) {
              tmp39 = { minHeight };
              const obj9 = { minHeight };
            }
            items[1] = tmp39;
            tmp37 = items;
          }
        }
        return null;
      }
    }
    return null;
  })}</minHeight>;
};