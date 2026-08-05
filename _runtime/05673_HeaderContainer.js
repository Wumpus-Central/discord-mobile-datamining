// _runtime/05673_HeaderContainer.js
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let StyleSheet;
let c4;
let c5;
const require = arg1;
({ Animated: c4, StyleSheet, View: c5 } = get_ActivityIndicator);
const styles = StyleSheet.create({ header: { position: "absolute", top: 0, left: 0, right: 0 } });

export default function HeaderContainer(getFocusedRoute) {
  let noop;
  let dependencyMap;
  let importDefault;
  let require;
  let scenes;
  ({ mode: require, scenes, layout: importDefault, getPreviousScene: dependencyMap, onContentHeightChange: noop } = getFocusedRoute);
  let RN;
  let closure_5;
  RN = getFocusedRoute.getFocusedRoute();
  closure_5 = React.useContext(require(5674) /* Background */.HeaderBackContext);
  let obj = { pointerEvents: "box-none", style: getFocusedRoute.style, children: null };
  let substr = scenes.slice(-3);
  obj[2] = substr.map((descriptor, arg1, arr) => {
    let header;
    let headerShown;
    let closure_0 = descriptor;
    if ("screen" !== closure_0) {
      if (descriptor) {
        let options = descriptor.descriptor.options;
        ({ header, headerShown } = options);
        let tmp2 = undefined === headerShown;
        if (!tmp2) {
          tmp2 = headerShown;
        }
        if (options.headerMode === tmp) {
          if (tmp2) {
            let obj = { route: null };
            obj[0] = descriptor.descriptor.route;
            const tmp7 = callback(obj);
            let tmp8 = closure_5;
            let tmp9 = closure_5;
            if (tmp7) {
              descriptor = tmp7.descriptor;
              if (tmp7) {
                obj = { title: null };
                let obj2 = outer1_0(outer1_2[3]);
                obj[0] = obj2.getHeaderTitle(tmp10, tmp11.name);
                tmp8 = obj;
              }
              tmp9 = tmp8;
            }
            descriptor = undefined;
            if (arr[arg1 - 1] != null) {
              descriptor = tmp14.descriptor;
            }
            let descriptor1;
            if (arr[arg1 + 1] != null) {
              descriptor1 = tmp17.descriptor;
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
            obj = { layout: null, back: null, progress: null, options: null, route: null, navigation: null, styleInterpolator: null };
            obj[0] = closure_1;
            obj[1] = tmp9;
            obj[2] = descriptor.progress;
            obj[3] = descriptor.descriptor.options;
            obj[4] = descriptor.descriptor.route;
            obj[5] = descriptor.descriptor.navigation;
            if ("float" === tmp) {
              if (!tmp21) {
                let forNoAnimation = tmp4;
              } else {
                if ("vertical" !== gestureDirection) {
                  if ("vertical-inverted" !== gestureDirection) {
                    if ("horizontal-inverted" === gestureDirection) {
                      let forSlideUp = outer1_0(outer1_2[4]).forSlideRight;
                    } else {
                      forSlideUp = outer1_0(outer1_2[4]).forSlideLeft;
                    }
                  }
                }
                forSlideUp = outer1_0(outer1_2[4]).forSlideUp;
              }
            } else {
              forNoAnimation = outer1_0(outer1_2[4]).forNoAnimation;
            }
            obj[6] = forNoAnimation;
            const obj1 = { value: null, children: null };
            obj1[0] = descriptor.descriptor.navigation;
            obj2 = { value: null, children: null };
            obj2[0] = descriptor.descriptor.route;
            let fn;
            if (noop) {
              fn = (height) => {
                outer1_3({ route: descriptor.descriptor.route, height: height.nativeEvent.layout.height });
              };
            }
            const obj3 = { onLayout: null, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, style: null, children: null };
            obj3[0] = fn;
            let str5 = "none";
            if (key.key === descriptor.descriptor.route.key) {
              str5 = "box-none";
            }
            obj3[1] = str5;
            obj3[2] = key.key !== descriptor.descriptor.route.key;
            let str6 = "no-hide-descendants";
            if (key.key === descriptor.descriptor.route.key) {
              str6 = "auto";
            }
            obj3[3] = str6;
            if ("float" !== tmp) {
              header = null;
              obj3[4] = header;
              if (undefined !== header) {
                let headerResult = header(obj);
              } else {
                const obj4 = {};
                const merged = Object.assign(obj);
                headerResult = tmp33(outer1_1(outer1_2[6]), obj4);
                const tmp45 = outer1_1(outer1_2[6]);
              }
              obj3[5] = headerResult;
              obj2[1] = tmp33(tmp38, obj3);
              obj1[1] = tmp33(outer1_0(outer1_2[5]).NavigationRouteContext.Provider, obj2);
              return tmp33(outer1_0(outer1_2[5]).NavigationContext.Provider, obj1, descriptor.descriptor.route.key);
            }
            header = outer1_7.header;
            const tmp19 = undefined === headerShown2 || headerShown2;
            tmp21 = (false === (undefined === headerShown2 || headerShown2) || "screen" === options.headerMode) && !descriptor1 || found;
            tmp38 = closure_5;
          }
        }
        return null;
      }
    }
    return null;
  });
  return <RN.View pointerEvents="box-none" style={arg0.style}>{null}</RN.View>;
};