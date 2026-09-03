// _runtime/06025_HeaderContainer.js
import createStandardNavigationFactories from "01499_createStandardNavigationFactories.js";
import Background from "05511_Background.js";
import closure_2 from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

require = arg1;
({ StyleSheet, View: c3 } = get_ActivityIndicator);
const styles = StyleSheet.create({ absolute: { position: "absolute", top: 0, start: 0, end: 0 } });

export const HeaderContainer = function HeaderContainer(getFocusedRoute) {
  ({
    mode: require,
    scenes,
    layout: dependencyMap,
    getPreviousScene: closure_2,
    contentHeight: closure_3,
    onContentHeightChange: jsx,
  } = getFocusedRoute);
  let focusedRoute;
  closure_6 = undefined;
  let buildHref;
  focusedRoute = getFocusedRoute.getFocusedRoute();
  closure_6 = React.useContext(Background.HeaderBackContext);
  let obj = createStandardNavigationFactories;
  buildHref = obj.useLinkBuilder().buildHref;
  obj = { pointerEvents: "box-none", style: getFocusedRoute.style, children: null };
  let substr = scenes.slice(-2);
  obj[2] = substr.map((descriptor, arg1, arr) => {
    closure_0 = descriptor;
    if ("screen" !== closure_0) {
      if (descriptor) {
        let options = descriptor.descriptor.options;
        ({ header, headerShown } = options);
        let tmp3 = undefined === headerShown;
        if (!tmp3) {
          tmp3 = headerShown;
        }
        if (options.headerMode === tmp) {
          if (tmp3) {
            let obj = { route: null };
            obj[0] = descriptor.descriptor.route;
            const tmp8 = callback(obj);
            let tmp9 = closure_6;
            let tmp10 = closure_6;
            if (tmp8) {
              const route = tmp8.descriptor.route;
              if (tmp8) {
                obj = { title: null, href: null };
                let obj2 = closure_1_0(closure_1_1[3]);
                obj[0] = obj2.getHeaderTitle(tmp11, route.name);
                obj[1] = buildHref(route.name, route.params);
                tmp9 = obj;
              }
              tmp10 = tmp9;
            }
            descriptor = undefined;
            if (arr[arg1 - 1] != null) {
              descriptor = tmp15.descriptor;
            }
            let descriptor1;
            if (arr[arg1 + 1] != null) {
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
            const substr = arr.slice(arg1 + 1);
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
            obj = {
              layout: null,
              back: null,
              progress: null,
              options: null,
              route: null,
              navigation: null,
              styleInterpolator: null,
            };
            obj[0] = closure_1;
            obj[1] = tmp10;
            obj[2] = descriptor.progress;
            obj[3] = descriptor.descriptor.options;
            obj[4] = descriptor.descriptor.route;
            obj[5] = descriptor.descriptor.navigation;
            if ("float" === tmp) {
              if (!tmp22) {
                let forNoAnimation = tmp5;
              } else {
                if ("vertical" !== gestureDirection) {
                  if ("vertical-inverted" !== gestureDirection) {
                    if ("horizontal-inverted" === gestureDirection) {
                      let forSlideUp = closure_1_0(closure_1_1[5]).forSlideRight;
                    } else {
                      forSlideUp = closure_1_0(closure_1_1[5]).forSlideLeft;
                    }
                  }
                }
                forSlideUp = closure_1_0(closure_1_1[5]).forSlideUp;
              }
            } else {
              forNoAnimation = closure_1_0(closure_1_1[5]).forNoAnimation;
            }
            obj[6] = forNoAnimation;
            obj1 = { route: null, navigation: null, children: null };
            obj1[0] = descriptor.descriptor.route;
            obj1[1] = descriptor.descriptor.navigation;
            let str5 = "none";
            if (closure_5.key === descriptor.descriptor.route.key) {
              str5 = "box-none";
            }
            obj2 = { pointerEvents: null, "aria-hidden": null, style: null, children: null };
            obj2[0] = str5;
            obj2[1] = closure_5.key !== descriptor.descriptor.route.key;
            if ("float" !== tmp) {
              let tmp39 = null;
              obj2[2] = tmp39;
              let fn;
              if (closure_4) {
                fn = (height) => {
                  closure_1_4({ route: descriptor.descriptor.route, height: height.nativeEvent.layout.height });
                };
              }
              const obj3 = { pointerEvents: "box-none", onLayout: null, children: null };
              obj3[1] = fn;
              if (undefined !== header) {
                let headerResult = header(obj);
              } else {
                const obj4 = {};
                const merged = Object.assign(obj);
                headerResult = tmp35(closure_1_0(closure_1_1[6]).Header, obj4);
              }
              obj3[2] = headerResult;
              obj2[3] = tmp35(tmp38, obj3);
              obj1[2] = tmp35(tmp38, obj2);
              return tmp35(closure_1_0(closure_1_1[4]).NavigationProvider, obj1, descriptor.descriptor.route.key);
            }
            const items = [closure_5.absolute];
            let tmp41 = null;
            if (tmp2) {
              const obj5 = { minHeight: null };
              obj5[0] = closure_3;
              tmp41 = obj5;
            }
            items[1] = tmp41;
            tmp39 = items;
            const tmp20 = undefined === headerShown2 || headerShown2;
            tmp22 =
              ((false === (undefined === headerShown2 || headerShown2) || "screen" === options.headerMode) &&
                !descriptor1) ||
              found;
          }
        }
        return null;
      }
    }
    return null;
  });
  return (
    <closure_3 pointerEvents="box-none" style={arg0.style}>
      {null}
    </closure_3>
  );
};
