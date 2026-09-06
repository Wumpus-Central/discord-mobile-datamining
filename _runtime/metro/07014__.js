// _runtime/metro/07014__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

let CardStack = fn;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
get_ActivityIndicator = fn(17);
({ Animated: hasOwnProperty, Platform, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let obj = {
  default: fn(7015).DefaultTransition,
  fade: fn(7015).ModalFadeTransition,
  fade_from_bottom: fn(7015).FadeFromBottomAndroid,
  fade_from_right: fn(7015).FadeFromRightAndroid,
  none: fn(7015).DefaultTransition,
  reveal_from_bottom: fn(7015).RevealFromBottomAndroid,
  scale_from_center: fn(7015).ScaleFromCenterAndroid,
  slide_from_left: fn(7015).SlideFromLeftIOS,
  slide_from_right: fn(7015).SlideFromRightIOS,
  slide_from_bottom: fn(7015).BottomSheetAndroid,
};
let closure_12 = Object.freeze({ options: {} });
function getInterpolationIndex(arg0, arg1) {}
function getIsModalPresentation(arg0) {}
function getIsModal(arg0, arg1, arg2) {}
function getHeaderHeights(arg0, arg1, arg2, arg3, arg4, arg5) {}
function getDistanceFromOptions(size, gestureDirection, arg2) {
  gestureDirection = undefined;
  if (gestureDirection != null) {
    gestureDirection = gestureDirection.gestureDirection;
  }
  if (gestureDirection) {
    return CardStack(7019).getDistanceForDirection(size, gestureDirection.gestureDirection, arg2);
  } else {
    let presentation;
    if (gestureDirection != null) {
      presentation = gestureDirection.presentation;
    }
    if ("modal" === presentation) {
      gestureDirection = CardStack(7015).ModalTransition.gestureDirection;
      let tmp3 = CardStack;
    } else {
      tmp3 = CardStack;
      gestureDirection = CardStack(7015).DefaultTransition.gestureDirection;
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
      let gestureDirection1;
      if (obj[animation1] != null) {
        gestureDirection1 = tmp10.gestureDirection;
      }
      gestureDirection = gestureDirection1;
    }
    return tmp3(7019).getDistanceForDirection(size, gestureDirection, arg2);
  }
}
function getProgressFromGesture(arg0, arg1, arg2, arg3) {}
class CardStack {
  constructor(arg0) {
    self = this;
    tmp = c2(this, CardStack);
    items = [];
    items[0] = global;
    tmp2 = closure_4;
    obj = closure_4(CardStack);
    tmp3 = closure_3;
    if (c10()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.handleLayout = (nativeEvent) => {
      let layout = nativeEvent.nativeEvent.layout;
      let height = layout.height;
      let width = layout.width;
      layout = { width, height };
      state.setState((layout, arg1) => {
        if (height !== layout.layout.height) {
          obj = { layout, headerHeights: null };
          const scenes = layout.scenes;
          if (typeof getHeaderHeights === "function") {
            width = tmp6;
            layout = tmp7;
            closure_3 = tmp8;
            closure_4 = tmp4;
            obj.headerHeights = scenes.reduce((acc, descriptor, index) => {
              const options = descriptor.descriptor.options;
              let headerStatusBarHeight = options.headerStatusBarHeight;
              if (undefined === headerStatusBarHeight) {
                let num = 0;
                if (!closure_2) {
                  num = scenes.top;
                }
                headerStatusBarHeight = num;
              }
              let headerStyle = options.headerStyle;
              if (!headerStyle) {
                headerStyle = {};
              }
              const flattenResult = closure_2_6.flatten(headerStyle);
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
                        let tmp20 = cardStyleInterpolator === height(width[9]).forModalPresentationIOS;
                        if (!tmp20) {
                          tmp20 = "forModalPresentationIOS" === cardStyleInterpolator.name;
                        }
                        if (tmp20) {
                          tmp20 = 0 !== num5;
                        }
                        flag = tmp20;
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                    if (typeof height !== "number") {
                      height = height(width[10]).getDefaultHeaderHeight(closure_4, flag, headerStatusBarHeight);
                      const obj2 = height(width[10]);
                    }
                    acc[descriptor.route.key] = height;
                    return acc;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              height = tmp9[descriptor.route.key];
            }, {});
            let tmp2 = obj;
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
      ({ route: closure_0, height: closure_1 } = arg0);
      key.setState((headerHeights) => {
        headerHeights = headerHeights.headerHeights;
        let tmp3 = null;
        if (headerHeights[key.key] !== closure_1_1) {
          headerHeights = { headerHeights: null };
          headerHeights = {};
          const merged = Object.assign(headerHeights);
          headerHeights[tmp.key] = tmp2;
          headerHeights.headerHeights = headerHeights;
          tmp3 = headerHeights;
        }
        return tmp3;
      });
    };
    tmp3Result.getFocusedRoute = () => {
      state = state.props.state;
      return state.routes[state.index];
    };
    tmp3Result.getPreviousScene = (route) => {
      const scenes = state.state.scenes;
      const previousRoute = state.props.getPreviousRoute({ route: route.route });
      if (previousRoute) {
        return scenes.find((descriptor) => descriptor.descriptor.route.key === previousRoute.key);
      }
      obj = { route: route.route };
    };
    obj = {
      routes: [],
      scenes: [],
      gestures: {},
      layout: closure_0(closure_1[10]).SafeAreaProviderCompat.initialMetrics.frame,
      descriptors: tmp3Result.props.descriptors,
      activeStates: [],
      headerHeights: {},
    };
    tmp3Result.state = obj;
    return tmp3Result;
  }
}
_inherits(CardStack, noop.Component);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    ({ insets: dependencyMap, state } = props);
    const routes = props.routes;
    ({
      openingRouteKeys: _getPrototypeOf,
      closingRouteKeys: closure_5,
      onOpenRoute: StyleSheet,
      onCloseRoute: View,
      renderHeader,
    } = props);
    ({
      isParentHeaderShown: closure_9,
      isParentModal: _isNativeReflectConstruct,
      onTransitionStart: obj,
      onTransitionEnd: closure_12,
      onGestureStart: getInterpolationIndex,
      onGestureEnd: getIsModalPresentation,
      onGestureCancel: getIsModal,
      detachInactiveScreens,
    } = props);
    const enabled = tmp;
    const state2 = self.state;
    const layout = state2.layout;
    ({ gestures: closure_19, activeStates: closure_20, headerHeights } = state2);
    const scenes = self.state.scenes;
    const substr = scenes.slice(-2);
    let someResult = substr.some((descriptor) => {
      let options = descriptor.descriptor.options;
      if (options == null) {
        options = {};
      }
      ({ headerTransparent, headerShown } = options);
      let tmp = !headerTransparent;
      if (!headerTransparent) {
        tmp = false !== (undefined === headerShown || headerShown);
        const tmp2 = undefined === headerShown || headerShown;
      }
      if (tmp) {
        tmp = "screen" !== options.headerMode;
      }
      return !tmp;
    });
    CardStack = someResult;
    obj = { style: closure_19.container, children: null };
    obj = {
      mode: "float",
      layout,
      scenes,
      getPreviousScene: self.getPreviousScene,
      getFocusedRoute: self.getFocusedRoute,
      contentHeight: headerHeights[tmp2.key],
      onContentHeightChange: self.handleHeaderLayout,
      style: null,
    };
    let items = [closure_19.floating];
    if (someResult) {
      const obj1 = { height: headerHeights[tmp2.key] };
      const items1 = [obj1, closure_19.absolute];
      someResult = items1;
    }
    items[1] = someResult;
    obj.style = items;
    const items2 = [renderHeader(obj)];
    const obj2 = {
      enabled: undefined === detachInactiveScreens || detachInactiveScreens,
      style: closure_19.container,
      onLayout: self.handleLayout,
      children: null,
    };
    const items3 = [];
    HermesBuiltin.arraySpread(state.preloadedRoutes, HermesBuiltin.arraySpread(routes, 0));
    obj2.children = items3.map((key, index) => {
      const preloadedRoutes = state.preloadedRoutes;
      let hasItem = preloadedRoutes.includes(key);
      if (hasItem) {
        hasItem = !routes.includes(key);
      }
      const preloadedRoutes2 = state.preloadedRoutes;
      if (preloadedRoutes2.includes(key)) {
        if (routes.includes(key)) {
          if (index >= routes.length) {
            return null;
          }
        }
      }
      const options = tmp2.descriptor.options;
      const headerShown = options.headerShown;
      let num = 0;
      ({ headerTransparent, freezeOnBlur, autoHideHomeIndicator } = options);
      ({ top, right, bottom, left } = dependencyMap);
      if (false !== tmp6) {
        num = headerHeights[key.key];
      }
      if (typeof getInterpolationIndex === "function") {
        let diff = index - 1;
        let num3 = 0;
        let num4 = 0;
        if (0 <= diff) {
          while (true) {
            let tmp11 = scenes[diff];
            let prop;
            if (tmp11 != null) {
              prop = tmp11.descriptor.options.cardStyleInterpolator;
            }
            num4 = num3;
            if (prop !== tmp8) {
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
          if (!tmp16) {
            const cardStyleInterpolator = tmp2.descriptor.options.cardStyleInterpolator;
            if (typeof getIsModalPresentation === "function") {
              let tmp20 = cardStyleInterpolator === CardStack(7017).forModalPresentationIOS;
              if (!tmp20) {
                tmp20 = "forModalPresentationIOS" === cardStyleInterpolator.name;
              }
              if (tmp20) {
                tmp20 = 0 !== num4;
              }
              flag = tmp20;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          let presentation;
          if (scenes[index + 1] != null) {
            presentation = tmp21.descriptor.options.presentation;
          }
          let detachPreviousScreen;
          if (scenes[index + 1] != null) {
            detachPreviousScreen = tmp23.descriptor.options.detachPreviousScreen;
          }
          let num5 = 0;
          if (!hasItem) {
            num5 = closure_1_20[index];
          }
          obj = {
            style: null,
            enabled: null,
            active: null,
            freezeOnBlur: null,
            shouldFreeze: null,
            homeIndicatorHidden: null,
            pointerEvents: "box-none",
            children: null,
          };
          const items = [StyleSheet.absoluteFill];
          obj.style = items;
          obj.enabled = enabled;
          obj.active = num5;
          obj.freezeOnBlur = freezeOnBlur;
          let tmp31 = 0 === num5;
          if (tmp31) {
            tmp31 = !hasItem;
          }
          obj.shouldFreeze = tmp31;
          obj.homeIndicatorHidden = autoHideHomeIndicator;
          obj = {
            index,
            interpolationIndex: num4,
            modal: flag,
            active: index === routes.length - 1,
            focused: key.key === key.key,
            opening: _getPrototypeOf.includes(key.key),
            closing: Value.includes(key.key),
            layout,
            gesture: closure_1_19[key.key],
            scene: tmp2,
            safeAreaInsetTop: top,
            safeAreaInsetRight: right,
            safeAreaInsetBottom: bottom,
            safeAreaInsetLeft: left,
            onGestureStart,
            onGestureCancel,
            onGestureEnd,
            headerHeight: num,
            isParentHeaderShown,
            onHeaderHeightChange: null,
            getPreviousScene: null,
            getFocusedRoute: null,
            hasAbsoluteFloatHeader: null,
            renderHeader: null,
            onOpenRoute: null,
            onCloseRoute: null,
            onTransitionStart: null,
            onTransitionEnd: null,
            isNextScreenTransparent: null,
            detachCurrentScreen: null,
            preloaded: null,
          };
          ({
            handleHeaderLayout: obj2.onHeaderHeightChange,
            getPreviousScene: obj2.getPreviousScene,
            getFocusedRoute: obj2.getFocusedRoute,
          } = self);
          let tmp42 = someResult;
          if (someResult) {
            tmp42 = !headerTransparent;
          }
          obj.hasAbsoluteFloatHeader = tmp42;
          obj.renderHeader = renderHeader;
          obj.onOpenRoute = onOpenRoute;
          obj.onCloseRoute = onCloseRoute;
          obj.onTransitionStart = onTransitionStart;
          obj.onTransitionEnd = onTransitionEnd;
          obj.isNextScreenTransparent = "transparentModal" === presentation;
          obj.detachCurrentScreen = false !== detachPreviousScreen;
          obj.preloaded = hasItem;
          obj.children = React6(CardStack(7022).CardContainer, obj);
          return React6(CardStack(7021).MaybeScreen, obj, key.key);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      tmp6 = undefined === headerShown || headerShown;
    });
    items2[1] = renderHeader(CardStack(7021).MaybeScreenContainer, obj2);
    obj.children = items2;
    return isParentHeaderShown(View, obj);
  },
};
let items = [entry];
const entry1 = {
  key: "getDerivedStateFromProps",
  value: function getDerivedStateFromProps(routes, routes2) {
    CardStack = routes;
    dependencyMap = routes2;
    if (routes.routes === routes2.routes) {
      if (routes.descriptors === routes2.descriptors) {
        return null;
      }
    }
    let items = [...routes.state.preloadedRoutes];
    const reduced = items.reduce((acc, key) => {
      let options;
      if ((closure_0.descriptors[key.key] || closure_0.preloadedDescriptors[key.key]) != null) {
        options = tmp2.options;
      }
      if (!options) {
        options = {};
      }
      let str = options.animation;
      value = closure_1.gestures[key.key];
      if (!value) {
        const openingRouteKeys = closure_0.openingRouteKeys;
        if (!openingRouteKeys.includes(key.key)) {
          const preloadedRoutes = closure_0.state.preloadedRoutes;
          let num = 0;
          value = new Value.Value(num);
        } else if (str == null) {
          str = "default";
        }
        let options1;
        if (tmp2 != null) {
          options1 = tmp2.options;
        }
        num = getDistanceFromOptions(tmp3.layout, options1, "rtl" === closure_0.direction);
      }
      acc[key.key] = value;
      return acc;
    }, {});
    CardStack(7031);
    let items1 = [...routes.state.preloadedRoutes];
    obj = {};
    let merged = Object.assign(routes.descriptors);
    let merged1 = Object.assign(routes.preloadedDescriptors);
    const modalRouteKeys = obj.getModalRouteKeys(items1, obj);
    let items2 = [...routes.state.preloadedRoutes];
    const mapped = items2.map((key, index, arg2) => {
      const preloadedRoutes = __memo.state.preloadedRoutes;
      const hasItem = preloadedRoutes.includes(key);
      let tmp3;
      if (!hasItem) {
        tmp3 = arg2[index - 1];
      }
      let tmp4;
      if (!hasItem) {
        tmp4 = arg2[index + 1];
      }
      __memo = tmp6;
      let descriptor = reduced[key.key];
      if (tmp3) {
        let obj1 = reduced[tmp3.key];
      }
      if (tmp4) {
        let obj2 = reduced[tmp4.key];
      }
      const tmp8 = hasItem
        ? __memo.preloadedDescriptors
        : __memo.descriptors[key.key] || closure_1.descriptors[key.key];
      if (tmp8) {
        let tmp10 = tmp4;
        if (tmp4) {
          key = undefined;
          if (tmp4 != null) {
            key = tmp4.key;
          }
          let tmp13 = tmp.descriptors[key];
          if (!tmp13) {
            let key1;
            if (tmp4 != null) {
              key1 = tmp4.key;
            }
            tmp13 = closure_1.descriptors[key1];
          }
          let options;
          if (tmp13 != null) {
            options = tmp13.options;
          }
          tmp10 = options;
        }
        let tmp16 = tmp3;
        if (tmp3) {
          let key2;
          if (tmp3 != null) {
            key2 = tmp3.key;
          }
          let tmp19 = tmp.descriptors[key2];
          if (!tmp19) {
            let key3;
            if (tmp3 != null) {
              key3 = tmp3.key;
            }
            tmp19 = closure_1.descriptors[key3];
          }
          let options1;
          if (tmp19 != null) {
            options1 = tmp19.options;
          }
          tmp16 = options1;
        }
        if (index !== arg2.length - 1) {
          if (tmp10) {
            let presentation;
            if (tmp10 != null) {
              presentation = tmp10.presentation;
            }
            options = tmp10;
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
            let ModalTransition = descriptor[str2];
          } else if ("transparentModal" === options.presentation) {
            ModalTransition = CardStack(7015).ModalFadeTransition;
          } else {
            if ("modal" !== options.presentation) {
              if (!hasItem1) {
                ModalTransition = CardStack(7015).DefaultTransition;
              }
            }
            ModalTransition = CardStack(7015).ModalTransition;
          }
          const gestureEnabled = options.gestureEnabled;
          let gestureDirection = options.gestureDirection;
          if (undefined === gestureDirection) {
            gestureDirection = ModalTransition.gestureDirection;
          }
          let transitionSpec = options.transitionSpec;
          if (undefined === transitionSpec) {
            transitionSpec = ModalTransition.transitionSpec;
          }
          const cardStyleInterpolator = options.cardStyleInterpolator;
          if (undefined !== cardStyleInterpolator) {
            let headerStyleInterpolator = options.headerStyleInterpolator;
            if (undefined === headerStyleInterpolator) {
              headerStyleInterpolator = ModalTransition.headerStyleInterpolator;
            }
            let cardOverlayEnabled = options.cardOverlayEnabled;
            if (undefined === cardOverlayEnabled) {
              let tmp38 = "transparentModal" !== options.presentation;
              if (!tmp38) {
                if (typeof getIsModalPresentation === "function") {
                  let tmp42 = cardStyleInterpolator === CardStack(7017).forModalPresentationIOS;
                  if (!tmp42) {
                    tmp42 = "forModalPresentationIOS" === cardStyleInterpolator.name;
                  }
                  tmp38 = tmp42;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              cardOverlayEnabled = tmp38;
            }
            let str10 = tmp8.options.headerMode;
            if (str10 == null) {
              let tmp43 = "modal" !== options.presentation;
              if (tmp43) {
                tmp43 = "transparentModal" !== options.presentation;
              }
              if (tmp43) {
                let presentation1;
                if (tmp10 != null) {
                  presentation1 = tmp10.presentation;
                }
                tmp43 = "modal" !== presentation1;
              }
              if (tmp43) {
                let presentation2;
                if (tmp10 != null) {
                  presentation2 = tmp10.presentation;
                }
                tmp43 = "transparentModal" !== presentation2;
              }
              str10 = "screen";
              if (tmp43) {
                if (typeof getIsModalPresentation === "function") {
                  str10 = "screen";
                  if (cardStyleInterpolator !== CardStack(7017).forModalPresentationIOS) {
                    const name = cardStyleInterpolator.name;
                    str10 = "screen";
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
            }
            descriptor = { route: key, descriptor: null, progress: null, __memo: null };
            descriptor = {};
            const merged = Object.assign(tmp8);
            obj1 = {};
            const merged1 = Object.assign(tmp8.options);
            obj1.animation = str2;
            obj1.cardOverlayEnabled = cardOverlayEnabled;
            obj1.cardStyleInterpolator = cardStyleInterpolator;
            obj1.gestureDirection = gestureDirection;
            obj1.gestureEnabled = tmp34;
            obj1.headerStyleInterpolator = headerStyleInterpolator;
            obj1.transitionSpec = transitionSpec;
            obj1.headerMode = str10;
            descriptor.options = obj1;
            descriptor.descriptor = descriptor;
            const layout = closure_1.layout;
            if (typeof getProgressFromGesture === "function") {
              const size = { width: null, height: null };
              const _Math = Math;
              size.width = Math.max(1, layout.width);
              const _Math2 = Math;
              size.height = Math.max(1, layout.height);
              const tmp59 = getDistanceFromOptions(size, tmp55, "rtl" === tmp.direction);
              if (tmp59 > 0) {
                obj2 = { inputRange: null, outputRange: null };
                const items = [0, tmp59];
                obj2.inputRange = items;
                obj2.outputRange = [1, 0];
                let interpolateResult = descriptor.interpolate(obj2);
              } else {
                const obj3 = { inputRange: null, outputRange: null };
                const items1 = [tmp59, 0];
                obj3.inputRange = items1;
                obj3.outputRange = [0, 1];
                interpolateResult = descriptor.interpolate(obj3);
              }
              const obj4 = { current: interpolateResult, next: null, previous: null };
              if (obj2) {
                let presentation3;
                if (tmp10 != null) {
                  presentation3 = tmp10.presentation;
                }
                if ("transparentModal" !== presentation3) {
                  const layout3 = closure_1.layout;
                  if (typeof getProgressFromGesture === "function") {
                    const size1 = { width: null, height: null };
                    const _Math3 = Math;
                    size1.width = Math.max(1, layout3.width);
                    const _Math4 = Math;
                    size1.height = Math.max(1, layout3.height);
                    let tmp57Result = getDistanceFromOptions(size1, tmp10, tmp56);
                    if (tmp57Result > 0) {
                      const obj5 = { inputRange: null, outputRange: null };
                      const items2 = [0, tmp57Result];
                      obj5.inputRange = items2;
                      obj5.outputRange = [1, 0];
                      let interpolateResult1 = obj2.interpolate(obj5);
                    } else {
                      const obj6 = { inputRange: null, outputRange: null };
                      const items3 = [tmp57Result, 0];
                      obj6.inputRange = items3;
                      obj6.outputRange = [0, 1];
                      interpolateResult1 = obj2.interpolate(obj6);
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              }
              obj4.next = undefined;
              if (!obj1) {
                obj4.previous = undefined;
                descriptor.progress = obj4;
                const items4 = [closure_1.layout, tmp8, tmp10, tmp16, descriptor, obj2, obj1];
                descriptor.__memo = items4;
                let tmp69 = descriptor;
                if (tmp6) {
                  __memo = descriptor.__memo;
                  tmp69 = descriptor;
                  if (__memo.every((item, index) => __memo.__memo[index] === item)) {
                    tmp69 = tmp6;
                  }
                }
                return tmp69;
              } else {
                const layout2 = closure_1.layout;
                if (typeof getProgressFromGesture === "function") {
                  const size2 = { width: null, height: null };
                  const _Math5 = Math;
                  size2.width = Math.max(1, layout2.width);
                  const _Math6 = Math;
                  size2.height = Math.max(1, layout2.height);
                  tmp57Result = getDistanceFromOptions(size2, tmp16, tmp56);
                  if (tmp57Result > 0) {
                    const obj7 = { inputRange: null, outputRange: null };
                    const items5 = [0, tmp57Result];
                    obj7.inputRange = items5;
                    obj7.outputRange = [1, 0];
                    let interpolateResult2 = obj1.interpolate(obj7);
                  } else {
                    const obj8 = { inputRange: null, outputRange: null };
                    const items6 = [tmp57Result, 0];
                    obj8.inputRange = items6;
                    obj8.outputRange = [0, 1];
                    interpolateResult2 = obj1.interpolate(obj8);
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if ("none" !== str3) {
            let forNoAnimation = ModalTransition.cardStyleInterpolator;
          } else {
            forNoAnimation = CardStack(7017).forNoAnimation;
          }
          tmp34 = undefined !== gestureEnabled && gestureEnabled;
        }
        options = tmp8.options;
      }
    });
    let activeStates = routes2.activeStates;
    if (routes.routes.length !== routes2.routes.length) {
      c5 = 1;
      let diff = routes.routes.length - 1;
      let num = 1;
      if (0 <= diff) {
        while (true) {
          let options = mapped[diff].descriptor.options;
          let detachPreviousScreen = options.detachPreviousScreen;
          if (undefined === detachPreviousScreen) {
            let tmp11 = "transparentModal" !== options.presentation;
            if (tmp11) {
              let cardStyleInterpolator = options.cardStyleInterpolator;
              if (typeof getIsModalPresentation !== "function") {
                break;
              } else {
                let tmp7 = CardStack;
                let tmp9 =
                  cardStyleInterpolator === CardStack(7017).forModalPresentationIOS ||
                  "forModalPresentationIOS" === cardStyleInterpolator.name;
                let tmp10 = !tmp9;
                if (tmp9) {
                  let tmp7Result = tmp7(7032);
                  tmp10 =
                    diff !==
                    tmp7Result.findLastIndex(mapped, (descriptor) => {
                      const cardStyleInterpolator = descriptor.descriptor.options.cardStyleInterpolator;
                      let tmp = cardStyleInterpolator === closure_0(closure_1[9]).forModalPresentationIOS;
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
                tmp11 = tmp10;
              }
            }
            detachPreviousScreen = tmp11;
          }
          if (false === detachPreviousScreen) {
            let sum = num + 1;
            c5 = sum;
            let tmp12 = sum;
            diff = diff - 1;
            num = tmp12;
          } else {
            tmp12 = num;
          }
        }
        throw new TypeError("Trying to call a non-function");
      }
      routes = routes.routes;
      activeStates = routes.map((item, index, arg2) => {
        if (0 !== closure_1.activeStates[index]) {
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
            obj = { inputRange: [0, 0.99999, 1], outputRange: null, extrapolate: "clamp" };
            const items = [1, 1, num3];
            obj.outputRange = items;
            num2 = current.interpolate(obj);
          }
          let num = num2;
        } else {
          num = 0;
        }
        return num;
      });
    }
    obj = {
      routes: routes.routes,
      scenes: mapped,
      gestures: reduced,
      descriptors: routes.descriptors,
      activeStates,
      headerHeights: null,
    };
    if (typeof getHeaderHeights === "function") {
      closure_129_0 = mapped;
      closure_129_1 = tmp15;
      closure_129_2 = tmp16;
      closure_129_3 = tmp17;
      closure_129_4 = tmp18;
      closure_129_5 = tmp19;
      obj.headerHeights = mapped.reduce((acc, descriptor, index) => {
        const options = descriptor.descriptor.options;
        let headerStatusBarHeight = options.headerStatusBarHeight;
        if (undefined === headerStatusBarHeight) {
          let num = 0;
          if (!closure_2) {
            num = scenes.top;
          }
          headerStatusBarHeight = num;
        }
        let headerStyle = options.headerStyle;
        if (!headerStyle) {
          headerStyle = {};
        }
        const flattenResult = closure_2_6.flatten(headerStyle);
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
                  let tmp20 = cardStyleInterpolator === height(width[9]).forModalPresentationIOS;
                  if (!tmp20) {
                    tmp20 = "forModalPresentationIOS" === cardStyleInterpolator.name;
                  }
                  if (tmp20) {
                    tmp20 = 0 !== num5;
                  }
                  flag = tmp20;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              if (typeof height !== "number") {
                height = height(width[10]).getDefaultHeaderHeight(closure_4, flag, headerStatusBarHeight);
                const obj2 = height(width[10]);
              }
              acc[descriptor.route.key] = height;
              return acc;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        height = tmp9[descriptor.route.key];
      }, {});
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
};
let items1 = [entry1];
const styles = StyleSheet.create({
  container: { flex: 1 },
  absolute: { position: "absolute", top: 0, start: 0, end: 0 },
  floating: { zIndex: 1 },
});

export const getAnimationEnabled = function getAnimationEnabled(animation) {
  let str = animation;
  if (animation == null) {
    str = "default";
  }
  return "none" !== str;
};
export const CardStack = _createClass(CardStack, items, items1);
