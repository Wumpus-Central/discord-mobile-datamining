// === Module 7008: HeaderContainer ===

// Module 7008 (HeaderContainer)
import Link from "Link" /* 1484 */;
import _mod5631 from "module_5631" /* 5631 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const styles = StyleSheet.create({ absolute: { position: "absolute", top: 0, start: 0, end: 0 } });

export const HeaderContainer = function HeaderContainer(getFocusedRoute) {
  ({ mode: require, scenes, layout: dependencyMap, getPreviousScene: noop, contentHeight: closure_3, onContentHeightChange: jsx } = getFocusedRoute);
  const focusedRoute = getFocusedRoute.getFocusedRoute();
  closure_6 = noop.useContext(_mod5631.HeaderBackContext);
  let obj = Link;
  const buildHref = obj.useLinkBuilder().buildHref;
  obj = { pointerEvents: "box-none", style: getFocusedRoute.style, children: null };
  let substr = scenes.slice(-2);
  obj.children = substr.map((descriptor, index, arr) => {
    if ("screen" !== descriptor) {
      if (descriptor) {
        let options = descriptor.descriptor.options;
        ({ header, headerShown } = options);
        let tmp3 = undefined === headerShown;
        if (!tmp3) {
          tmp3 = headerShown;
        }
        if (options.headerMode === tmp) {
          if (tmp3) {
            let obj = { route: descriptor.descriptor.route };
            const tmp8 = closure_2(obj);
            let tmp9 = closure_6;
            let tmp10 = closure_6;
            if (tmp8) {
              const route = tmp8.descriptor.route;
              if (tmp8) {
                obj = { title: null, href: null };
                let obj2 = require("module_5631");
                obj.title = obj2.getHeaderTitle(tmp11, route.name);
                obj.href = buildHref(route.name, route.params);
                tmp9 = obj;
              }
              tmp10 = tmp9;
            }
            descriptor = undefined;
            if (arr[index - 1] != null) {
              descriptor = tmp15.descriptor;
            }
            let descriptor1;
            if (arr[index + 1] != null) {
              descriptor1 = tmp18.descriptor;
            }
            options = undefined;
            if (descriptor != null) {
              options = descriptor.options;
            }
            if (!options) {
              options = {};
            }
            const headerShown2 = options.headerShown;
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
            let options1;
            if (found != null) {
              options1 = found.descriptor.options;
            }
            if (!options1) {
              options1 = {};
            }
            const gestureDirection = options1.gestureDirection;
            obj = { layout, back: tmp10, progress: descriptor.progress, options: descriptor.descriptor.options, route: descriptor.descriptor.route, navigation: descriptor.descriptor.navigation, styleInterpolator: null };
            if ("float" === tmp) {
              if (!tmp22) {
                let forNoAnimation = tmp5;
              } else {
                if ("vertical" !== gestureDirection) {
                  if ("vertical-inverted" !== gestureDirection) {
                    if ("horizontal-inverted" === gestureDirection) {
                      let forSlideUp = require("module_7009").forSlideRight;
                    } else {
                      forSlideUp = require("module_7009").forSlideLeft;
                    }
                  }
                }
                forSlideUp = require("module_7009").forSlideUp;
              }
            } else {
              forNoAnimation = require("module_7009").forNoAnimation;
            }
            obj.styleInterpolator = forNoAnimation;
            const obj1 = { route: descriptor.descriptor.route, navigation: descriptor.descriptor.navigation, children: null };
            let str5 = "none";
            if (closure_5.key === descriptor.descriptor.route.key) {
              str5 = "box-none";
            }
            obj2 = { pointerEvents: str5, "aria-hidden": closure_5.key !== descriptor.descriptor.route.key, style: null, children: null };
            if ("float" !== tmp) {
              let tmp39 = null;
              obj2.style = tmp39;
              let fn;
              if (closure_4) {
                fn = (height) => {
                  jsx({ route: descriptor.descriptor.route, height: height.nativeEvent.layout.height });
                };
              }
              const obj3 = { pointerEvents: "box-none", onLayout: fn, children: null };
              if (undefined !== header) {
                let headerResult = header(obj);
              } else {
                const obj4 = {};
                const merged = Object.assign(obj);
                headerResult = jsx(require("Header").Header, {});
              }
              obj3.children = headerResult;
              obj2.children = <closure_1_3 pointerEvents="box-none" onLayout={fn}>{null}</closure_1_3>;
              obj1.children = <closure_1_3 {...obj2} />;
              return jsx(require("Link").NavigationProvider, obj1, descriptor.descriptor.route.key);
            }
            const items = [closure_5.absolute, ];
            let tmp41 = null;
            if (tmp2) {
              const obj5 = { minHeight };
              tmp41 = obj5;
            }
            items[1] = tmp41;
            tmp39 = items;
            const tmp20 = undefined === headerShown2 || headerShown2;
            tmp22 = (false === (undefined === headerShown2 || headerShown2) || "screen" === options.headerMode) && !descriptor1 || found;
          }
        }
        return null;
      }
    }
    return null;
  });
  return <minHeight pointerEvents="box-none" style={getFocusedRoute.style}>{null}</minHeight>;
};