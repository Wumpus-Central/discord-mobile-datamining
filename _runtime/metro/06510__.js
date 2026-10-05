// === Module 6510: ? ===

// Module 6510
import _mod6019 from "module_6019" /* 6019 */;
import SlideFromRightIOS from "SlideFromRightIOS" /* 6511 */;
import forHorizontalIOS from "forHorizontalIOS" /* 6513 */;
import _mod6515 from "module_6515" /* 6515 */;
import MaybeScreenContainer2 from "MaybeScreenContainer" /* 6517 */;
import CardContainer2 from "CardContainer" /* 6518 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

let _require, dependencyMap, flatten;

let Platform;
let StyleSheet;
let c9;
let hasOwnProperty;
let metroImportAll;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
({ Animated: hasOwnProperty, Platform, StyleSheet } = react_native);
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { default: SlideFromRightIOS.DefaultTransition, fade: SlideFromRightIOS.ModalFadeTransition, fade_from_bottom: SlideFromRightIOS.FadeFromBottomAndroid, fade_from_right: SlideFromRightIOS.FadeFromRightAndroid, none: SlideFromRightIOS.DefaultTransition, reveal_from_bottom: SlideFromRightIOS.RevealFromBottomAndroid, scale_from_center: SlideFromRightIOS.ScaleFromCenterAndroid, slide_from_left: SlideFromRightIOS.SlideFromLeftIOS, slide_from_right: SlideFromRightIOS.SlideFromRightIOS, slide_from_bottom: SlideFromRightIOS.BottomSheetAndroid };
let closure_12 = Object.freeze({ options: {} });
function getInterpolationIndex(arg0, arg1) {

}
function getIsModalPresentation(arg0) {

}
function getIsModal(arg0, arg1, arg2) {

}
function getHeaderHeights(arg0, arg1, arg2, arg3, arg4, arg5) {

}
function getDistanceFromOptions(size, gestureDirection, arg2) {
  let gestureDirection1;
  if (gestureDirection != null) {
    gestureDirection1 = gestureDirection.gestureDirection;
  }
  if (gestureDirection1) {
    const obj2 = _mod6515;
    return obj2.getDistanceForDirection(size, gestureDirection.gestureDirection, arg2);
  } else {
    let tmp3;
    let presentation;
    if (gestureDirection != null) {
      presentation = gestureDirection.presentation;
    }
    if ("modal" === presentation) {
      gestureDirection = SlideFromRightIOS.ModalTransition.gestureDirection;
      tmp3 = require;
    } else {
      tmp3 = require;
      gestureDirection = SlideFromRightIOS.DefaultTransition.gestureDirection;
    }
    let animation;
    if (gestureDirection != null) {
      animation = gestureDirection.animation;
    }
    if (animation) {
      let animation1;
      if (gestureDirection != null) {
        animation1 = gestureDirection.animation;
      }
      let gestureDirection2;
      if (obj[animation1] != null) {
        gestureDirection2 = tmp10.gestureDirection;
      }
      gestureDirection = gestureDirection2;
    }
    const tmp3Result = tmp3(6515);
    return tmp3Result.getDistanceForDirection(size, gestureDirection, arg2);
  }
}
function getProgressFromGesture(arg0, arg1, arg2, arg3) {

}
class CardStack {
  constructor(arg0) {
    let constructResult;
    const self = this;
    const tmp = _classCallCheck(this, CardStack);
    const items = [arg0];
    obj = _getPrototypeOf(CardStack);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = c3(self, constructResult);
    let closure_0 = tmp3Result;
    tmp3Result.handleLayout = (nativeEvent) => {
      let layout = nativeEvent.nativeEvent.layout;
      let height = layout.height;
      const width = layout.width;
      let closure_2 = { width, height };
      closure_0.setState((layout, arg1) => {
        let tmp2;
        if (height !== layout.layout.height) {
          obj = { layout, headerHeights: null };
          const scenes = layout.scenes;
          if (typeof closure_2_16 === "function") {
            let closure_1 = tmp6;
            layout = tmp7;
            let closure_3 = tmp8;
            let closure_4 = tmp4;
            let closure_5 = tmp9;
            obj.headerHeights = scenes.reduce((acc, descriptor, index) => {
              const options = descriptor.descriptor.options;
              let headerStatusBarHeight = options.headerStatusBarHeight;
              if (undefined === headerStatusBarHeight) {
                let num = 0;
                if (!closure_2) {
                  num = top.top;
                }
                headerStatusBarHeight = num;
              }
              let headerStyle = options.headerStyle;
              flatten = flatten.flatten;
              if (!headerStyle) {
                headerStyle = {};
              }
              const flattenResult = flatten(headerStyle);
              if ("height" in flattenResult) {
                if (typeof flattenResult.height === "number") {
                  height = flattenResult.height;
                }
                if (typeof closure_2_13 === "function") {
                  let diff = index - 1;
                  let num4 = 0;
                  let num5 = 0;
                  if (0 <= diff) {
                    while (true) {
                      let tmp11 = scenes[diff];
                      let prop;
                      if (tmp11 != null) {
                        prop = tmp11.descriptor.options.cardStyleInterpolator;
                      }
                      num5 = num4;
                      if (prop !== tmp8) {
                        break;
                      } else {
                        num4 = num4 + 1;
                        diff = diff - 1;
                        num5 = num4;
                        if (0 > diff) {
                          break;
                        }
                      }
                    }
                  }
                  if (typeof closure_2_15 === "function") {
                    let flag = true;
                    if (!tmp16) {
                      const cardStyleInterpolator = descriptor.descriptor.options.cardStyleInterpolator;
                      if (typeof closure_2_14 === "function") {
                        flag = (cardStyleInterpolator === closure_2_0(width[9]).forModalPresentationIOS || "forModalPresentationIOS" === cardStyleInterpolator.name) && 0 !== num5;
                        const tmp20 = (cardStyleInterpolator === closure_2_0(width[9]).forModalPresentationIOS || "forModalPresentationIOS" === cardStyleInterpolator.name) && 0 !== num5;
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                    const key = descriptor.route.key;
                    if (typeof height !== "number") {
                      const obj2 = closure_2_0(width[10]);
                      height = obj2.getDefaultHeaderHeight(closure_4, flag, headerStatusBarHeight);
                    }
                    acc[key] = height;
                    return acc;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              height = closure_5[descriptor.route.key];
            }, {});
            tmp2 = obj;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          tmp2 = null;
        }
        return tmp2;
      });
    };
    tmp3Result.handleHeaderLayout = (arg0) => {
      let closure_129_0;
      let closure_129_1;
      ({ route: closure_129_0, height: closure_129_1 } = arg0);
      closure_0.setState((headerHeights) => {
        let obj2;
        headerHeights = headerHeights.headerHeights;
        let tmp3 = null;
        if (headerHeights[key.key] !== closure_1_1) {
          obj = { headerHeights: obj2 };
          obj2 = {};
          const merged = Object.assign(headerHeights);
          obj2[tmp.key] = tmp2;
          tmp3 = obj;
        }
        return tmp3;
      });
    };
    tmp3Result.getFocusedRoute = () => {
      const state = closure_0.props.state;
      return state.routes[state.index];
    };
    tmp3Result.getPreviousScene = (route) => {
      const scenes = closure_0.state.scenes;
      obj = { route: route.route };
      const previousRoute = closure_0.props.getPreviousRoute(obj);
      if (previousRoute) {
        return scenes.find((descriptor) => descriptor.descriptor.route.key === previousRoute.key);
      }
    };
    let obj2 = { routes: [], scenes: [], gestures: {}, layout: _mod6019.SafeAreaProviderCompat.initialMetrics.frame, descriptors: tmp3Result.props.descriptors, activeStates: [], headerHeights: {} };
    tmp3Result.state = obj2;
    return tmp3Result;
  }
}
_inherits(CardStack, react.Component);
const entry = {
  key: "render",
  value: function render() {
    let closure_20;
    let closure_5;
    let closure_9;
    let detachInactiveScreens;
    let headerHeights;
    let items;
    let items2;
    let items3;
    let onCloseRoute;
    let onGestureCancel;
    let onGestureEnd;
    let onGestureStart;
    let onOpenRoute;
    let onTransitionEnd;
    let onTransitionStart;
    let renderHeader;
    let state;
    const self = this;
    const props = this.props;
    ({ insets: dependencyMap, state } = props);
    const routes = props.routes;
    ({ openingRouteKeys: _getPrototypeOf, closingRouteKeys: closure_5, onOpenRoute: StyleSheet, onCloseRoute: View, renderHeader } = props);
    ({ isParentHeaderShown: closure_9, isParentModal: _isNativeReflectConstruct, onTransitionStart: obj, onTransitionEnd: closure_12, onGestureStart: getInterpolationIndex, onGestureEnd: getIsModalPresentation, onGestureCancel: getIsModal, detachInactiveScreens } = props);
    const tmp2 = undefined === detachInactiveScreens || detachInactiveScreens;
    const enabled = tmp2;
    const state2 = self.state;
    const scenes = state2.scenes;
    const layout = state2.layout;
    ({ gestures: closure_19, activeStates: closure_20, headerHeights } = state2);
    const tmp3 = state.routes[state.index];
    const key = tmp3;
    const scenes1 = self.state.scenes;
    const tmp4 = headerHeights[tmp3.key];
    const substr = scenes1.slice(-2);
    let someResult = substr.some((descriptor) => {
      let headerShown;
      let headerTransparent;
      let options = descriptor.descriptor.options;
      if (options == null) {
        options = {};
      }
      ({ headerTransparent, headerShown } = options);
      let tmp = !headerTransparent;
      const headerMode = options.headerMode;
      if (!headerTransparent) {
        tmp = false !== (undefined === headerShown || headerShown);
      }
      if (tmp) {
        tmp = "screen" !== headerMode;
      }
      return !tmp;
    });
    const require = someResult;
    obj = { style: closure_19.container, children: items2 };
    const obj2 = { mode: "float", layout, scenes, getPreviousScene: self.getPreviousScene, getFocusedRoute: self.getFocusedRoute, contentHeight: headerHeights[tmp3.key], onContentHeightChange: self.handleHeaderLayout, style: items };
    items = [closure_19.floating, ];
    if (someResult) {
      let obj3 = { height: tmp4 };
      const items1 = [obj3, closure_19.absolute];
      someResult = items1;
    }
    items[1] = someResult;
    items2 = [renderHeader(obj2), ];
    const obj4 = {
      enabled: tmp2,
      style: closure_19.container,
      onLayout: self.handleLayout,
      children: items3.map((key, index) => {
        let CardContainer;
        let autoHideHomeIndicator;
        let bottom;
        let freezeOnBlur;
        let headerTransparent;
        let items;
        let left;
        let obj3;
        let right;
        let tmp32;
        let tmp33;
        let tmp43;
        let top;
        const preloadedRoutes = state.preloadedRoutes;
        const key2 = key.key.key;
        const tmp = closure_19[key.key.key];
        const hasItem = preloadedRoutes.includes(key) && !routes.includes(key);
        const preloadedRoutes2 = state.preloadedRoutes;
        if (preloadedRoutes2.includes(key.key)) {
          if (routes.includes(key.key)) {
            if (index >= routes.length) {
              return null;
            }
          }
        }
        const options = tmp3.descriptor.options;
        const headerShown = options.headerShown;
        let num = 0;
        const tmp7 = undefined === headerShown || headerShown;
        ({ headerTransparent, freezeOnBlur, autoHideHomeIndicator } = options);
        ({ top, right, bottom, left } = dependencyMap);
        if (false !== tmp7) {
          num = headerHeights[key.key];
        }
        if (typeof getInterpolationIndex === "function") {
          let diff = index - 1;
          let num3 = 0;
          let num4 = 0;
          if (0 <= diff) {
            while (true) {
              let tmp12 = scenes[diff];
              let prop;
              if (tmp12 != null) {
                prop = tmp12.descriptor.options.cardStyleInterpolator;
              }
              num4 = num3;
              if (prop !== tmp9) {
                break;
              } else {
                num3 = num3 + 1;
                diff = diff - 1;
                num4 = num3;
                if (0 > diff) {
                  break;
                }
              }
            }
          }
          if (typeof getIsModal === "function") {
            let flag = true;
            if (!tmp17) {
              const cardStyleInterpolator = tmp3.descriptor.options.cardStyleInterpolator;
              if (typeof getIsModalPresentation === "function") {
                flag = (cardStyleInterpolator === forHorizontalIOS.forModalPresentationIOS || "forModalPresentationIOS" === cardStyleInterpolator.name) && 0 !== num4;
                const tmp21 = (cardStyleInterpolator === forHorizontalIOS.forModalPresentationIOS || "forModalPresentationIOS" === cardStyleInterpolator.name) && 0 !== num4;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            let presentation;
            if (scenes[index + 1] != null) {
              presentation = tmp22.descriptor.options.presentation;
            }
            let detachPreviousScreen;
            if (scenes[index + 1] != null) {
              detachPreviousScreen = tmp24.descriptor.options.detachPreviousScreen;
            }
            let num5 = 0;
            if (!hasItem) {
              num5 = closure_20[index];
            }
            obj = { style: items, enabled, active: num5, freezeOnBlur, shouldFreeze: tmp32, homeIndicatorHidden: autoHideHomeIndicator, pointerEvents: "box-none", children: metroImportAll(CardContainer, obj3) };
            items = [StyleSheet.absoluteFill];
            tmp32 = 0 === num5;
            const MaybeScreen = MaybeScreenContainer2.MaybeScreen;
            if (tmp32) {
              tmp32 = !hasItem;
            }
            obj3 = { index, interpolationIndex: num4, modal: flag, active: index === routes.length - 1, focused: tmp33, opening: _getPrototypeOf.includes(key.key.key), closing: Value.includes(key.key.key), layout, gesture: tmp, scene: scenes[index], safeAreaInsetTop: top, safeAreaInsetRight: right, safeAreaInsetBottom: bottom, safeAreaInsetLeft: left, onGestureStart: getInterpolationIndex, onGestureCancel: getIsModal, onGestureEnd: getIsModalPresentation, headerHeight: num, isParentHeaderShown, onHeaderHeightChange: null, getPreviousScene: null, getFocusedRoute: null, hasAbsoluteFloatHeader: tmp43, renderHeader, onOpenRoute: StyleSheet, onCloseRoute: View, onTransitionStart, onTransitionEnd, isNextScreenTransparent: "transparentModal" === presentation, detachCurrentScreen: false !== detachPreviousScreen, preloaded: hasItem };
            tmp33 = key.key === key2;
            CardContainer = CardContainer2.CardContainer;
            ({ handleHeaderLayout: obj2.onHeaderHeightChange, getPreviousScene: obj2.getPreviousScene, getFocusedRoute: obj2.getFocusedRoute } = self);
            tmp43 = require && !headerTransparent;
            return metroImportAll(MaybeScreen, obj, key.key.key);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      })
    };
    items3 = [];
    const MaybeScreenContainer = MaybeScreenContainer2.MaybeScreenContainer;
    HermesBuiltin.arraySpread(items3, state.preloadedRoutes, HermesBuiltin.arraySpread(items3, routes, 0));
    items2[1] = renderHeader(MaybeScreenContainer, obj4);
    return isParentHeaderShown(View, obj);
  }
};
let items = [entry];
const entry1 = {
  key: "getDerivedStateFromProps",
  value: function getDerivedStateFromProps(routes, routes2) {
    let tmp18;
    _require = routes;
    dependencyMap = routes2;
    if (routes.routes === routes2.routes) {
      if (routes.descriptors === routes2.descriptors) {
        return null;
      }
    }
    let items = [...routes.state.preloadedRoutes];
    const reduced = items.reduce(function(acc, key) {
      let options;
      if ((routes.descriptors[key.key] || routes.preloadedDescriptors[key.key]) != null) {
        options = tmp2.options;
      }
      if (!options) {
        options = {};
      }
      let str = options.animation;
      let value = routes2.gestures[key.key];
      if (!value) {
        const openingRouteKeys = routes.openingRouteKeys;
        hasOwnProperty = hasOwnProperty.Value;
        if (!openingRouteKeys.includes(key.key.key)) {
          const preloadedRoutes = routes.state.preloadedRoutes;
          let num = 0;
          const self = this;
          const self2 = this;
          value = new hasOwnProperty(num);
        } else if (str == null) {
          str = "default";
        }
        let options1;
        const layout = tmp3.layout;
        if ((routes.descriptors[key.key] || routes.preloadedDescriptors[key.key]) != null) {
          options1 = tmp2.options;
        }
        num = getDistanceFromOptions(layout, options1, "rtl" === routes.direction);
      }
      acc[key.key] = value;
      return acc;
    }, {});
    const tmp2 = require("module_6527");
    let items1 = [...routes.state.preloadedRoutes];
    const getModalRouteKeys = tmp2.getModalRouteKeys;
    obj = {};
    let merged = Object.assign(routes.descriptors);
    let merged1 = Object.assign(routes.preloadedDescriptors);
    let closure_3 = getModalRouteKeys(items1, obj);
    let items2 = [...routes.state.preloadedRoutes];
    const mapped = items2.map((key, index, arg2) => {
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let obj5;
      let obj6;
      let tmp59;
      let tmp63;
      const preloadedRoutes = routes.state.preloadedRoutes;
      const hasItem = preloadedRoutes.includes(key);
      let tmp3;
      if (!hasItem) {
        tmp3 = arg2[index - 1];
      }
      let tmp4;
      if (!hasItem) {
        tmp4 = arg2[index + 1];
      }
      routes = tmp6;
      const tmp8 = (hasItem ? routes.preloadedDescriptors : routes.descriptors)[key.key] || routes2.descriptors[key.key] || (routes2.scenes[index] ? routes2.scenes[index].descriptor : closure_12);
      let tmp9 = tmp4;
      if (tmp9) {
        key = undefined;
        const descriptors = tmp.descriptors;
        if (tmp4 != null) {
          key = tmp4.key;
        }
        let tmp12 = descriptors[key];
        if (!tmp12) {
          let key1;
          const descriptors2 = routes2.descriptors;
          if (tmp4 != null) {
            key1 = tmp4.key;
          }
          tmp12 = descriptors2[key1];
        }
        let options1;
        if (tmp12 != null) {
          options1 = tmp12.options;
        }
        tmp9 = options1;
      }
      let tmp15 = tmp3;
      if (tmp15) {
        let key2;
        const descriptors3 = tmp.descriptors;
        if (tmp3 != null) {
          key2 = tmp3.key;
        }
        let tmp18 = descriptors3[key2];
        if (!tmp18) {
          let key3;
          const descriptors4 = routes2.descriptors;
          if (tmp3 != null) {
            key3 = tmp3.key;
          }
          tmp18 = descriptors4[key3];
        }
        let options2;
        if (tmp18 != null) {
          options2 = tmp18.options;
        }
        tmp15 = options2;
      }
      if (index !== arg2.length - 1) {
        let options;
        let ModalTransition;
        if (tmp9) {
          let presentation;
          if (tmp9 != null) {
            presentation = tmp9.presentation;
          }
          options = tmp9;
        }
        let str2 = options.animation;
        const hasItem1 = closure_3.includes(key.key);
        if (str2 == null) {
          str2 = "default";
        }
        let str3 = str2;
        if (str2 == null) {
          str3 = "default";
        }
        if ("default" !== str2) {
          ModalTransition = obj[str2];
        } else if ("transparentModal" === options.presentation) {
          ModalTransition = SlideFromRightIOS.ModalFadeTransition;
        } else {
          if ("modal" !== options.presentation) {
            if (!hasItem1) {
              ModalTransition = SlideFromRightIOS.DefaultTransition;
            }
          }
          ModalTransition = SlideFromRightIOS.ModalTransition;
        }
        const gestureEnabled = options.gestureEnabled;
        let gestureDirection = options.gestureDirection;
        const tmp33 = undefined !== gestureEnabled && gestureEnabled;
        if (undefined === gestureDirection) {
          gestureDirection = ModalTransition.gestureDirection;
        }
        let transitionSpec = options.transitionSpec;
        if (undefined === transitionSpec) {
          transitionSpec = ModalTransition.transitionSpec;
        }
        let cardStyleInterpolator = options.cardStyleInterpolator;
        if (undefined === cardStyleInterpolator) {
          let forNoAnimation;
          if ("none" !== str3) {
            forNoAnimation = ModalTransition.cardStyleInterpolator;
          } else {
            forNoAnimation = forHorizontalIOS.forNoAnimation;
          }
          cardStyleInterpolator = forNoAnimation;
        }
        let headerStyleInterpolator = options.headerStyleInterpolator;
        if (undefined === headerStyleInterpolator) {
          headerStyleInterpolator = ModalTransition.headerStyleInterpolator;
        }
        let cardOverlayEnabled = options.cardOverlayEnabled;
        if (undefined === cardOverlayEnabled) {
          let tmp36 = "transparentModal" !== options.presentation;
          if (!tmp36) {
            if (typeof getIsModalPresentation === "function") {
              tmp36 = cardStyleInterpolator === forHorizontalIOS.forModalPresentationIOS || "forModalPresentationIOS" === cardStyleInterpolator.name;
              const tmp40 = cardStyleInterpolator === forHorizontalIOS.forModalPresentationIOS || "forModalPresentationIOS" === cardStyleInterpolator.name;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          cardOverlayEnabled = tmp36;
        }
        let str10 = tmp8.options.headerMode;
        if (str10 == null) {
          let tmp41 = "modal" !== options.presentation && "transparentModal" !== options.presentation;
          if (tmp41) {
            let presentation1;
            if (tmp9 != null) {
              presentation1 = tmp9.presentation;
            }
            tmp41 = "modal" !== presentation1;
          }
          if (tmp41) {
            let presentation2;
            if (tmp9 != null) {
              presentation2 = tmp9.presentation;
            }
            tmp41 = "transparentModal" !== presentation2;
          }
          str10 = "screen";
          if (tmp41) {
            if (typeof getIsModalPresentation === "function") {
              str10 = "screen";
              if (cardStyleInterpolator !== forHorizontalIOS.forModalPresentationIOS) {
                const name = cardStyleInterpolator.name;
                str10 = "screen";
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
        const obj4 = { route: key, descriptor: obj5, progress: null, __memo: null };
        const direction = tmp.direction;
        obj5 = { options: obj6 };
        const merged = Object.assign(tmp8);
        obj6 = { animation: str2, cardOverlayEnabled, cardStyleInterpolator, gestureDirection, gestureEnabled: tmp33, headerStyleInterpolator, transitionSpec, headerMode: str10 };
        const merged1 = Object.assign(tmp8.options);
        const layout = routes2.layout;
        if (typeof getProgressFromGesture === "function") {
          let interpolateResult;
          size = { width: Math.max(1, layout.width), height: Math.max(1, layout.height) };
          const _Math = Math;
          const _Math2 = Math;
          const tmp57 = getDistanceFromOptions(size, tmp53, "rtl" === direction);
          if (tmp57 > 0) {
            const obj7 = { inputRange: items, outputRange: [1, 0] };
            items = [0, tmp57];
            interpolateResult = obj.interpolate(obj7);
          } else {
            const obj8 = { inputRange: items1, outputRange: [0, 1] };
            items1 = [tmp57, 0];
            interpolateResult = obj.interpolate(obj8);
          }
          const obj9 = { current: interpolateResult, next: tmp59, previous: tmp63 };
          tmp59 = undefined;
          if (obj3) {
            let presentation3;
            if (tmp9 != null) {
              presentation3 = tmp9.presentation;
            }
            if ("transparentModal" !== presentation3) {
              const layout3 = routes2.layout;
              if (typeof getProgressFromGesture === "function") {
                let interpolateResult1;
                const size1 = { width: Math.max(1, layout3.width), height: Math.max(1, layout3.height) };
                const _Math3 = Math;
                const _Math4 = Math;
                const tmp55Result = getDistanceFromOptions(size1, tmp9, "rtl" === direction);
                if (tmp55Result > 0) {
                  const obj10 = { inputRange: items2, outputRange: [1, 0] };
                  items2 = [0, tmp55Result];
                  interpolateResult1 = obj3.interpolate(obj10);
                } else {
                  const obj11 = { inputRange: items3, outputRange: [0, 1] };
                  items3 = [tmp55Result, 0];
                  interpolateResult1 = obj3.interpolate(obj11);
                }
                tmp59 = interpolateResult1;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
          tmp63 = undefined;
          if (obj2) {
            const layout2 = routes2.layout;
            if (typeof getProgressFromGesture === "function") {
              let interpolateResult2;
              const size2 = { width: Math.max(1, layout2.width), height: Math.max(1, layout2.height) };
              const _Math5 = Math;
              const _Math6 = Math;
              const tmp55Result2 = getDistanceFromOptions(size2, tmp15, "rtl" === direction);
              if (tmp55Result2 > 0) {
                const obj12 = { inputRange: items4, outputRange: [1, 0] };
                items4 = [0, tmp55Result2];
                interpolateResult2 = obj2.interpolate(obj12);
              } else {
                const obj13 = { inputRange: items5, outputRange: [0, 1] };
                items5 = [tmp55Result2, 0];
                interpolateResult2 = obj2.interpolate(obj13);
              }
              tmp63 = interpolateResult2;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          obj4.progress = obj9;
          const items6 = [routes2.layout, tmp8, tmp9, tmp15, reduced[key.key], obj3, obj2];
          obj4.__memo = items6;
          let tmp66 = obj4;
          if (routes2.scenes[index]) {
            const __memo = obj4.__memo;
            tmp66 = obj4;
            if (__memo.every((item, index) => __memo.__memo[index] === item)) {
              tmp66 = tmp6;
            }
          }
          return tmp66;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      options = tmp8.options;
    });
    let activeStates = routes2.activeStates;
    if (routes.routes.length !== routes2.routes.length) {
      let num2 = 1;
      let c5 = 1;
      let diff = routes.routes.length - 1;
      let num3 = 2;
      let str = "forModalPresentationIOS";
      let str2 = "transparentModal";
      let num = 1;
      if (0 <= diff) {
        while (true) {
          let tmp13;
          let options = mapped[diff].descriptor.options;
          let detachPreviousScreen = options.detachPreviousScreen;
          let tmp6 = num;
          if (undefined === detachPreviousScreen) {
            let tmp12 = "transparentModal" !== options.presentation;
            if (tmp12) {
              let cardStyleInterpolator = options.cardStyleInterpolator;
              if (typeof getIsModalPresentation !== "function") {
                break;
              } else {
                let tmp8 = _require;
                let tmp9 = dependencyMap;
                let tmp10 = cardStyleInterpolator === require("forHorizontalIOS").forModalPresentationIOS || "forModalPresentationIOS" === cardStyleInterpolator.name;
                let tmp11 = !tmp10;
                if (tmp10) {
                  let tmp8Result = tmp8(6528);
                  tmp11 = diff !== tmp8Result.findLastIndex(mapped, (descriptor) => {
                    const cardStyleInterpolator = descriptor.descriptor.options.cardStyleInterpolator;
                    let tmp = cardStyleInterpolator === routes(routes2[9]).forModalPresentationIOS;
                    if (!tmp) {
                      let name;
                      if (cardStyleInterpolator != null) {
                        name = cardStyleInterpolator.name;
                      }
                      tmp = "forModalPresentationIOS" === name;
                    }
                    return tmp;
                  });
                }
                tmp12 = tmp11;
              }
            }
            detachPreviousScreen = tmp12;
          }
          if (false === detachPreviousScreen) {
            let sum = num + 1;
            c5 = sum;
            tmp13 = sum;
            diff = diff - 1;
            num = tmp13;
          } else {
            tmp13 = num;
          }
        }
        let str3 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
      routes = routes.routes;
      activeStates = routes.map((item, index, arg2) => {
        let items;
        let num;
        const tmp = index >= arg2.length - c5;
        if (0 !== routes2.activeStates[index]) {
          let num2 = 1;
          let num3 = 2;
          if (index !== arg2.length - 1) {
            let num4 = 0;
            if (tmp) {
              num4 = num2;
            }
            num3 = num4;
          }
          if (mapped[arg2.length - 1]) {
            const current = tmp3.progress.current;
            obj = { inputRange: [0, 0.99999, 1], outputRange: items, extrapolate: "clamp" };
            items = [1, 1, num3];
            num2 = current.interpolate(obj);
          }
          num = num2;
        } else {
          num = 0;
        }
        return num;
      });
    }
    const obj2 = { routes: routes.routes, scenes: mapped, gestures: reduced, descriptors: routes.descriptors, activeStates, headerHeights: null };
    if (typeof getHeaderHeights === "function") {
      dependencyMap = tmp16;
      let closure_2 = tmp17;
      closure_3 = tmp18;
      let closure_4 = tmp19;
      let closure_5 = tmp20;
      obj2.headerHeights = mapped.reduce((acc, descriptor, index) => {
        const options = descriptor.descriptor.options;
        let headerStatusBarHeight = options.headerStatusBarHeight;
        if (undefined === headerStatusBarHeight) {
          let num = 0;
          if (!closure_2) {
            num = top.top;
          }
          headerStatusBarHeight = num;
        }
        let headerStyle = options.headerStyle;
        flatten = flatten.flatten;
        if (!headerStyle) {
          headerStyle = {};
        }
        const flattenResult = flatten(headerStyle);
        if ("height" in flattenResult) {
          if (typeof flattenResult.height === "number") {
            height = flattenResult.height;
          }
          if (typeof closure_2_13 === "function") {
            let diff = index - 1;
            let num4 = 0;
            let num5 = 0;
            if (0 <= diff) {
              while (true) {
                let tmp11 = scenes[diff];
                let prop;
                if (tmp11 != null) {
                  prop = tmp11.descriptor.options.cardStyleInterpolator;
                }
                num5 = num4;
                if (prop !== tmp8) {
                  break;
                } else {
                  num4 = num4 + 1;
                  diff = diff - 1;
                  num5 = num4;
                  if (0 > diff) {
                    break;
                  }
                }
              }
            }
            if (typeof closure_2_15 === "function") {
              let flag = true;
              if (!tmp16) {
                const cardStyleInterpolator = descriptor.descriptor.options.cardStyleInterpolator;
                if (typeof closure_2_14 === "function") {
                  flag = (cardStyleInterpolator === closure_2_0(width[9]).forModalPresentationIOS || "forModalPresentationIOS" === cardStyleInterpolator.name) && 0 !== num5;
                  const tmp20 = (cardStyleInterpolator === closure_2_0(width[9]).forModalPresentationIOS || "forModalPresentationIOS" === cardStyleInterpolator.name) && 0 !== num5;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              const key = descriptor.route.key;
              if (typeof height !== "number") {
                const obj2 = closure_2_0(width[10]);
                height = obj2.getDefaultHeaderHeight(closure_4, flag, headerStatusBarHeight);
              }
              acc[key] = height;
              return acc;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        height = closure_5[descriptor.route.key];
      }, {});
      return obj2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
};
let items1 = [entry1];
const importDefaultResultResult = _createClass(CardStack, items, items1);
const styles = StyleSheet.create({ container: { flex: 1 }, absolute: { position: "absolute", top: 0, start: 0, end: 0 }, floating: { zIndex: 1 } });
const CardStack_export = importDefaultResultResult;

export const getAnimationEnabled = function getAnimationEnabled(animation) {
  let str = animation;
  if (animation == null) {
    str = "default";
  }
  return "none" !== str;
};
export { CardStack_export as CardStack };