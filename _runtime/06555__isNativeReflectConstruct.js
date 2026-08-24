// === Module 6555: _isNativeReflectConstruct ===

// Module 6555 (_isNativeReflectConstruct)
import closure_2 from "_classCallCheck" /* 41 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import importDefaultResult1 from "_inherits" /* 98 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

let CardStack = arg1;
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
  } catch (err) {
  }
}
({ Animated: c5, Platform, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let obj = { default: require("SlideFromRightIOS").DefaultTransition, fade: require("SlideFromRightIOS").ModalFadeTransition, fade_from_bottom: require("SlideFromRightIOS").FadeFromBottomAndroid, fade_from_right: require("SlideFromRightIOS").FadeFromRightAndroid, none: require("SlideFromRightIOS").DefaultTransition, reveal_from_bottom: require("SlideFromRightIOS").RevealFromBottomAndroid, scale_from_center: require("SlideFromRightIOS").ScaleFromCenterAndroid, slide_from_left: require("SlideFromRightIOS").SlideFromLeftIOS, slide_from_right: require("SlideFromRightIOS").SlideFromRightIOS, slide_from_bottom: require("SlideFromRightIOS").BottomSheetAndroid };
let closure_12 = Object.freeze({ options: {} });
function getInterpolationIndex(arg0, arg1) {

}
function getIsModalPresentation(arg0) {

}
function getIsModal(arg0, arg1, arg2) {

}
function getHeaderHeights(arg0, arg1, arg2, arg3, arg4, arg5) {

}
function getDistanceFromOptions(width, gestureDirection) {
  gestureDirection = undefined;
  if (gestureDirection != null) {
    gestureDirection = gestureDirection.gestureDirection;
  }
  if (gestureDirection) {
    return CardStack(6560).getDistanceForDirection(width, gestureDirection.gestureDirection, arg2);
  } else {
    let presentation;
    if (gestureDirection != null) {
      presentation = gestureDirection.presentation;
    }
    if ("modal" === presentation) {
      gestureDirection = CardStack(6556).ModalTransition.gestureDirection;
      let tmp3 = CardStack;
    } else {
      tmp3 = CardStack;
      gestureDirection = CardStack(6556).DefaultTransition.gestureDirection;
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
      const tmp8 = obj;
    }
    return tmp3(6560).getDistanceForDirection(width, gestureDirection, arg2);
  }
}
function getProgressFromGesture(arg0, arg1, arg2, arg3) {

}
class CardStack {
  constructor(arg0) {
    self = this;
    tmp = closure_2(this, closure_0);
    items = [];
    items[0] = global;
    tmp2 = closure_4;
    obj = closure_4(closure_0);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.handleLayout = (nativeEvent) => {
      const layout = nativeEvent.nativeEvent.layout;
      let height = layout.height;
      const width = layout.width;
      closure_2 = { width, height };
      height.setState((layout) => {
        if (scenes !== layout.layout.height) {
          obj = { layout: null, headerHeights: null };
          obj[0] = isParentHeaderShown;
          scenes = layout.scenes;
          ({ insets, isParentHeaderShown, isParentModal } = arg1);
          if (typeof closure_1_16 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          closure_4 = isParentHeaderShown;
          const headerHeights = layout.headerHeights;
          obj[1] = scenes.reduce((arg0, descriptor) => {
            const options = descriptor.descriptor.options;
            let headerStatusBarHeight = options.headerStatusBarHeight;
            if (undefined === headerStatusBarHeight) {
              let num = 0;
              if (!isParentHeaderShown) {
                num = insets.top;
              }
              headerStatusBarHeight = num;
            }
            let headerStyle = options.headerStyle;
            if (!headerStyle) {
              headerStyle = {};
            }
            const flattenResult = closure_1_6.flatten(headerStyle);
            if ("height" in flattenResult) {
              if (typeof flattenResult.height === "number") {
                height = flattenResult.height;
              }
              if (typeof closure_1_13 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              let diff = arg2 - 1;
              let num4 = 0;
              let num5 = 0;
              if (0 <= diff) {
                while (true) {
                  let tmp11 = scenes[diff];
                  let tmp12 = diff;
                  let tmp13 = num4;
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
              if (typeof closure_1_15 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              let flag = true;
              if (!isParentModal) {
                const cardStyleInterpolator = descriptor.descriptor.options.cardStyleInterpolator;
                if (typeof closure_1_14 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                let tmp20 = cardStyleInterpolator === scenes(insets[9]).forModalPresentationIOS;
                if (!tmp20) {
                  tmp20 = "forModalPresentationIOS" === cardStyleInterpolator.name;
                }
                if (tmp20) {
                  tmp20 = 0 !== num5;
                }
                flag = tmp20;
              }
              if (typeof height !== "number") {
                height = scenes(insets[10]).getDefaultHeaderHeight(closure_4, flag, headerStatusBarHeight);
                const obj2 = scenes(insets[10]);
              }
              arg0[descriptor.route.key] = height;
              return arg0;
            }
            height = headerHeights[descriptor.route.key];
          }, {});
          let tmp2 = obj;
          const tmp4 = isParentHeaderShown;
        } else {
          tmp2 = null;
        }
        return tmp2;
      });
    };
    tmp3Result.handleHeaderLayout = (arg0) => {
      ({ route: closure_0, height: closure_1 } = arg0);
      state.setState((headerHeights) => {
        headerHeights = headerHeights.headerHeights;
        let tmp3 = null;
        if (headerHeights[key.key] !== closure_1) {
          obj = { headerHeights: null };
          obj = {};
          const merged = Object.assign(headerHeights);
          obj[tmp.key] = tmp2;
          obj[0] = obj;
          tmp3 = obj;
        }
        return tmp3;
      });
    };
    tmp3Result.getFocusedRoute = () => {
      state = state.props.state;
      return state.routes[state.index];
    };
    tmp3Result.getPreviousScene = (route) => {
      let previousRoute;
      const scenes = previousRoute.state.scenes;
      previousRoute = previousRoute.props.getPreviousRoute({ route: route.route });
      if (previousRoute) {
        return scenes.find((descriptor) => descriptor.descriptor.route.key === previousRoute.key);
      }
      obj = { route: route.route };
    };
    obj = { routes: [], scenes: [], gestures: {}, layout: require("Background").SafeAreaProviderCompat.initialMetrics.frame, descriptors: tmp3Result.props.descriptors, activeStates: [], headerHeights: {} };
    tmp3Result.state = obj;
    return tmp3Result;
  }
}
importDefaultResult1(CardStack, importAllResult.Component);
obj = {
  key: "render",
  value: function render() {
    let self = this;
    self = this;
    const props = this.props;
    ({ insets: dependencyMap, state } = props);
    const routes = props.routes;
    ({ openingRouteKeys: closure_4, closingRouteKeys: closure_5, onOpenRoute: StyleSheet, onCloseRoute: View, renderHeader } = props);
    ({ isParentHeaderShown: closure_9, isParentModal: _isNativeReflectConstruct, onTransitionStart: obj, onTransitionEnd: closure_12, onGestureStart: getInterpolationIndex, onGestureEnd: getIsModalPresentation, onGestureCancel: getIsModal, detachInactiveScreens } = props);
    closure_16 = tmp;
    const state2 = self.state;
    let scenes = state2.scenes;
    const layout = state2.layout;
    ({ gestures: closure_19, activeStates: closure_20, headerHeights } = state2);
    closure_22 = tmp2;
    scenes = self.state.scenes;
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
    obj = { mode: "float", layout, scenes, getPreviousScene: self.getPreviousScene, getFocusedRoute: self.getFocusedRoute, contentHeight: headerHeights[tmp2.key], onContentHeightChange: self.handleHeaderLayout, style: null };
    let items = [closure_19.floating, ];
    if (someResult) {
      obj1 = { height: null };
      obj1[0] = headerHeights[tmp2.key];
      const items1 = [obj1, tmp6.absolute];
      someResult = items1;
    }
    items[1] = someResult;
    obj[7] = items;
    const items2 = [renderHeader(obj), ];
    const obj2 = { enabled: undefined === detachInactiveScreens || detachInactiveScreens, style: closure_19.container, onLayout: self.handleLayout, children: null };
    const items3 = [];
    HermesBuiltin.arraySpread(state.preloadedRoutes, HermesBuiltin.arraySpread(routes, 0));
    obj2[3] = items3.map((key, index) => {
      const preloadedRoutes = state.preloadedRoutes;
      let hasItem = preloadedRoutes.includes(key);
      if (hasItem) {
        hasItem = !routes.includes(key);
      }
      const preloadedRoutes2 = state.preloadedRoutes;
      if (preloadedRoutes2.includes(key)) {
        if (routes.includes(key)) {
          if (index >= arr.length) {
            return null;
          }
        }
        arr = routes;
      }
      const options = tmp2.descriptor.options;
      const headerShown = options.headerShown;
      let num = 0;
      ({ headerTransparent, freezeOnBlur, autoHideHomeIndicator } = options);
      ({ top, right, bottom, left } = closure_1);
      if (false !== tmp6) {
        num = headerHeights[key.key];
      }
      if (typeof closure_1_13 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let diff = index - 1;
      let num2 = 0;
      let num3 = 0;
      if (0 <= diff) {
        while (true) {
          let tmp10 = tmp[diff];
          let tmp11 = diff;
          let tmp12 = num2;
          let prop;
          if (tmp10 != null) {
            prop = tmp10.descriptor.options.cardStyleInterpolator;
          }
          num3 = num2;
          if (prop !== tmp8) {
            break;
          } else {
            num2 = num2 + 1;
            diff = diff - 1;
            num3 = num2;
            if (0 > diff) {
              break;
            }
          }
        }
      }
      if (typeof closure_1_15 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let flag = true;
      if (!closure_10) {
        const cardStyleInterpolator = tmp2.descriptor.options.cardStyleInterpolator;
        if (typeof closure_1_14 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let tmp18 = cardStyleInterpolator === someResult(closure_1_1[9]).forModalPresentationIOS;
        if (!tmp18) {
          tmp18 = "forModalPresentationIOS" === cardStyleInterpolator.name;
        }
        if (tmp18) {
          tmp18 = 0 !== num3;
        }
        flag = tmp18;
      }
      let presentation;
      if (scenes[index + 1] != null) {
        presentation = tmp19.descriptor.options.presentation;
      }
      let detachPreviousScreen;
      if (scenes[index + 1] != null) {
        detachPreviousScreen = tmp21.descriptor.options.detachPreviousScreen;
      }
      let num4 = 0;
      if (!hasItem) {
        num4 = table2[index];
      }
      obj = { style: items, enabled: closure_16, active: num4, freezeOnBlur, shouldFreeze: null, homeIndicatorHidden: null, pointerEvents: "box-none", children: null };
      items = [closure_1_6.absoluteFill];
      let tmp27 = 0 === num4;
      if (tmp27) {
        tmp27 = !hasItem;
      }
      obj[4] = tmp27;
      obj[5] = autoHideHomeIndicator;
      obj = { index, interpolationIndex: num3, modal: flag, active: index === routes.length - 1, focused: key.key === key.key, opening: closure_4.includes(key.key), closing: closure_5.includes(key.key), layout, gesture: table[key.key], scene: tmp2, safeAreaInsetTop: top, safeAreaInsetRight: right, safeAreaInsetBottom: bottom, safeAreaInsetLeft: left, onGestureStart: closure_13, onGestureCancel: closure_15, onGestureEnd: closure_14, headerHeight: num, isParentHeaderShown: closure_9, onHeaderHeightChange: null, getPreviousScene: null, getFocusedRoute: null, hasAbsoluteFloatHeader: null, renderHeader: null, onOpenRoute: null, onCloseRoute: null, onTransitionStart: null, onTransitionEnd: null, isNextScreenTransparent: null, detachCurrentScreen: null, preloaded: null };
      ({ handleHeaderLayout: obj2[19], getPreviousScene: obj2[20], getFocusedRoute: obj2[21] } = self);
      let tmp29 = closure_0;
      if (closure_0) {
        tmp29 = !headerTransparent;
      }
      obj[22] = tmp29;
      obj[23] = renderHeader;
      obj[24] = closure_6;
      obj[25] = closure_7;
      obj[26] = closure_11;
      obj[27] = closure_12;
      obj[28] = "transparentModal" === presentation;
      obj[29] = false !== detachPreviousScreen;
      obj[30] = hasItem;
      obj[7] = renderHeader(someResult(closure_1_1[13]).CardContainer, obj);
      return renderHeader(someResult(closure_1_1[12]).MaybeScreen, obj, key.key);
    });
    items2[1] = renderHeader(CardStack(6562).MaybeScreenContainer, obj2);
    obj[1] = items2;
    return closure_9(View, obj);
  }
};
let items = [obj];
obj = {
  key: "getDerivedStateFromProps",
  value: function getDerivedStateFromProps(routes, routes2) {
    let mapped = routes;
    insets = routes2;
    if (routes.routes === routes2.routes) {
      if (routes.descriptors === routes2.descriptors) {
        return null;
      }
    }
    let items = [...routes.state.preloadedRoutes];
    const reduced = items.reduce((arg0, key) => {
      let options;
      if ((mapped.descriptors[key.key] || mapped.preloadedDescriptors[key.key]) != null) {
        options = tmp2.options;
      }
      if (!options) {
        options = {};
      }
      let str = options.animation;
      let value = insets.gestures[key.key];
      if (!value) {
        const openingRouteKeys = tmp.openingRouteKeys;
        if (!openingRouteKeys.includes(key.key)) {
          const preloadedRoutes = tmp.state.preloadedRoutes;
          let num = 0;
          value = new headerHeights.Value(num);
        } else if (str == null) {
          str = "default";
        }
        let options1;
        if (tmp2 != null) {
          options1 = tmp2.options;
        }
        num = closure_1_17(tmp3.layout, options1, "rtl" === tmp.direction);
        const tmp6 = closure_1_17;
      }
      arg0[key.key] = value;
      return arg0;
    }, {});
    isParentHeaderShown = reduced;
    obj = mapped(insets[14]);
    let items1 = [...routes.state.preloadedRoutes];
    obj = {};
    let merged = Object.assign(routes.descriptors);
    let merged1 = Object.assign(routes.preloadedDescriptors);
    isParentModal = obj.getModalRouteKeys(items1, obj);
    let items2 = [...routes.state.preloadedRoutes];
    mapped = items2.map((key) => {
      const preloadedRoutes = mapped.state.preloadedRoutes;
      const hasItem = preloadedRoutes.includes(key);
      let tmp3;
      if (!hasItem) {
        tmp3 = arg2[arg1 - 1];
      }
      let tmp4;
      if (!hasItem) {
        tmp4 = arg2[arg1 + 1];
      }
      mapped = tmp6;
      obj = isParentHeaderShown[key.key];
      if (tmp3) {
        obj1 = tmp7[tmp3.key];
      }
      if (tmp4) {
        let obj2 = tmp7[tmp4.key];
      }
      const tmp8 = hasItem ? mapped.preloadedDescriptors : mapped.descriptors[key.key] || insets.descriptors[key.key];
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
            tmp13 = tmp5.descriptors[key1];
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
            tmp19 = tmp5.descriptors[key3];
          }
          let options1;
          if (tmp19 != null) {
            options1 = tmp19.options;
          }
          tmp16 = options1;
        }
        if (arg1 !== arg2.length - 1) {
          if (tmp10) {
            let presentation;
            if (tmp10 != null) {
              presentation = tmp10.presentation;
            }
            options = tmp10;
          }
          let str2 = options.animation;
          const hasItem1 = isParentModal.includes(key.key);
          if (str2 == null) {
            str2 = "default";
          }
          let str3 = str2;
          if (str2 == null) {
            str3 = "default";
          }
          if ("default" !== str2) {
            let ModalTransition = closure_1_11[str2];
          } else if ("transparentModal" === options.presentation) {
            ModalTransition = mapped(insets[8]).ModalFadeTransition;
          } else {
            if ("modal" !== options.presentation) {
              if (!hasItem1) {
                ModalTransition = mapped(insets[8]).DefaultTransition;
              }
            }
            ModalTransition = mapped(insets[8]).ModalTransition;
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
                if (typeof closure_1_14 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                let tmp42 = cardStyleInterpolator === mapped(insets[9]).forModalPresentationIOS;
                if (!tmp42) {
                  tmp42 = "forModalPresentationIOS" === cardStyleInterpolator.name;
                }
                tmp38 = tmp42;
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
                if (typeof closure_1_14 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                str10 = "screen";
                if (cardStyleInterpolator !== mapped(insets[9]).forModalPresentationIOS) {
                  const name = cardStyleInterpolator.name;
                  str10 = "screen";
                }
              }
            }
            obj = { route: null, descriptor: null, progress: null, __memo: null };
            obj[0] = key;
            obj = {};
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
            obj.options = obj1;
            obj[1] = obj;
            layout = tmp5.layout;
            if (typeof closure_1_18 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            obj2 = { width: null, height: null };
            const _Math = Math;
            obj2[0] = Math.max(1, layout.width);
            const _Math2 = Math;
            obj2[1] = Math.max(1, layout.height);
            const tmp58 = closure_1_17(obj2, tmp8.options, "rtl" === tmp.direction);
            if (tmp58 > 0) {
              const obj3 = { inputRange: null, outputRange: null };
              const items = [0, tmp58];
              obj3[0] = items;
              obj3[1] = [1, 0];
              let interpolateResult = obj.interpolate(obj3);
            } else {
              const obj4 = { inputRange: null, outputRange: null };
              const items1 = [tmp58, 0];
              obj4[0] = items1;
              obj4[1] = [0, 1];
              interpolateResult = obj.interpolate(obj4);
            }
            const obj5 = { current: null, next: null, previous: null };
            obj5[0] = interpolateResult;
            if (obj2) {
              let presentation3;
              if (tmp10 != null) {
                presentation3 = tmp10.presentation;
              }
              if ("transparentModal" !== presentation3) {
                const layout3 = tmp5.layout;
                if (typeof tmp54 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                const obj6 = { width: null, height: null };
                const _Math3 = Math;
                obj6[0] = Math.max(1, layout3.width);
                const _Math4 = Math;
                obj6[1] = Math.max(1, layout3.height);
                let tmp56Result = tmp56(obj6, tmp10, tmp55);
                if (tmp56Result > 0) {
                  const obj7 = { inputRange: null, outputRange: null };
                  const items2 = [0, tmp56Result];
                  obj7[0] = items2;
                  obj7[1] = [1, 0];
                  let interpolateResult1 = obj2.interpolate(obj7);
                } else {
                  const obj8 = { inputRange: null, outputRange: null };
                  const items3 = [tmp56Result, 0];
                  obj8[0] = items3;
                  obj8[1] = [0, 1];
                  interpolateResult1 = obj2.interpolate(obj8);
                }
              }
            }
            obj5[1] = undefined;
            if (!obj1) {
              obj5[2] = undefined;
              obj[2] = obj5;
              const items4 = [tmp5.layout, tmp8, tmp10, tmp16, obj, obj2, obj1];
              obj[3] = items4;
              let tmp68 = obj;
              if (tmp6) {
                const __memo = obj.__memo;
                tmp68 = obj;
                if (__memo.every((arg0, arg1) => __memo.__memo[arg1] === arg0)) {
                  tmp68 = tmp6;
                }
              }
              return tmp68;
            } else {
              const layout2 = tmp5.layout;
              if (typeof tmp54 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              const obj9 = { width: null, height: null };
              const _Math5 = Math;
              obj9[0] = Math.max(1, layout2.width);
              const _Math6 = Math;
              obj9[1] = Math.max(1, layout2.height);
              tmp56Result = tmp56(obj9, tmp16, tmp55);
              if (tmp56Result > 0) {
                const obj10 = { inputRange: null, outputRange: null };
                const items5 = [0, tmp56Result];
                obj10[0] = items5;
                obj10[1] = [1, 0];
                let interpolateResult2 = obj1.interpolate(obj10);
              } else {
                const obj11 = { inputRange: null, outputRange: null };
                const items6 = [tmp56Result, 0];
                obj11[0] = items6;
                obj11[1] = [0, 1];
                interpolateResult2 = obj1.interpolate(obj11);
              }
            }
          } else if ("none" !== str3) {
            let forNoAnimation = ModalTransition.cardStyleInterpolator;
          } else {
            forNoAnimation = mapped(insets[9]).forNoAnimation;
          }
          tmp34 = undefined !== gestureEnabled && gestureEnabled;
        }
        options = tmp8.options;
      }
    });
    layout = mapped;
    let activeStates = routes2.activeStates;
    if (routes.routes.length !== routes2.routes.length) {
      headerHeights = 1;
      let diff = routes.routes.length - 1;
      let num = 1;
      if (0 <= diff) {
        while (true) {
          let options = mapped[diff].descriptor.options;
          let detachPreviousScreen = options.detachPreviousScreen;
          let tmp4 = diff;
          let tmp5 = num;
          if (undefined === detachPreviousScreen) {
            let tmp11 = "transparentModal" !== options.presentation;
            if (tmp11) {
              let tmp6 = getIsModalPresentation;
              let cardStyleInterpolator = options.cardStyleInterpolator;
              if (typeof getIsModalPresentation !== "function") {
                let str3 = "Trying to call a non-function";
                let throwTypeErrorResult = HermesBuiltin.throwTypeError();
              }
              let tmp7 = mapped;
              let tmp8 = insets;
              let tmp9 = cardStyleInterpolator === mapped(insets[9]).forModalPresentationIOS || "forModalPresentationIOS" === cardStyleInterpolator.name;
              let tmp10 = !tmp9;
              if (tmp9) {
                let tmp7Result = tmp7(tmp8[15]);
                tmp10 = diff !== tmp7Result.findLastIndex(mapped, (descriptor) => {
                  const cardStyleInterpolator = descriptor.descriptor.options.cardStyleInterpolator;
                  let tmp = cardStyleInterpolator === mapped(insets[9]).forModalPresentationIOS;
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
            detachPreviousScreen = tmp11;
          }
          if (false === detachPreviousScreen) {
            let sum = num + 1;
            headerHeights = sum;
            let tmp12 = sum;
            diff = diff - 1;
            num = tmp12;
            if (0 > diff) {
              break;
            }
          } else {
            tmp12 = num;
            if (diff <= routes.routes.length - 2) {
              break;
            }
          }
          break;
        }
      }
      routes = routes.routes;
      activeStates = routes.map((arg0, arg1, arg2) => {
        if (0 !== insets.activeStates[arg1]) {
          let num2 = 1;
          let num3 = 2;
          if (arg1 !== arg2.length - 1) {
            let num4 = 0;
            if (tmp) {
              num4 = num2;
            }
            num3 = num4;
          }
          if (layout[arg2.length - 1]) {
            const current = tmp3.progress.current;
            obj = { inputRange: null, outputRange: null, extrapolate: "clamp" };
            obj[0] = [0, 0.99999, 1];
            const items = [1, 1, num3];
            obj[1] = items;
            num2 = current.interpolate(obj);
          }
          let num = num2;
        } else {
          num = 0;
        }
        return num;
      });
    }
    obj = { routes: routes.routes, scenes: mapped, gestures: reduced, descriptors: routes.descriptors, activeStates, headerHeights: null };
    ({ insets, isParentHeaderShown, isParentModal } = routes);
    ({ layout, headerHeights } = routes2);
    if (typeof getHeaderHeights !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj[5] = mapped.reduce((arg0, descriptor) => {
      const options = descriptor.descriptor.options;
      let headerStatusBarHeight = options.headerStatusBarHeight;
      if (undefined === headerStatusBarHeight) {
        let num = 0;
        if (!isParentHeaderShown) {
          num = insets.top;
        }
        headerStatusBarHeight = num;
      }
      let headerStyle = options.headerStyle;
      if (!headerStyle) {
        headerStyle = {};
      }
      const flattenResult = closure_1_6.flatten(headerStyle);
      if ("height" in flattenResult) {
        if (typeof flattenResult.height === "number") {
          height = flattenResult.height;
        }
        if (typeof closure_1_13 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let diff = arg2 - 1;
        let num4 = 0;
        let num5 = 0;
        if (0 <= diff) {
          while (true) {
            let tmp11 = scenes[diff];
            let tmp12 = diff;
            let tmp13 = num4;
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
        if (typeof closure_1_15 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let flag = true;
        if (!isParentModal) {
          const cardStyleInterpolator = descriptor.descriptor.options.cardStyleInterpolator;
          if (typeof closure_1_14 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          let tmp20 = cardStyleInterpolator === scenes(insets[9]).forModalPresentationIOS;
          if (!tmp20) {
            tmp20 = "forModalPresentationIOS" === cardStyleInterpolator.name;
          }
          if (tmp20) {
            tmp20 = 0 !== num5;
          }
          flag = tmp20;
        }
        if (typeof height !== "number") {
          height = scenes(insets[10]).getDefaultHeaderHeight(closure_4, flag, headerStatusBarHeight);
          const obj2 = scenes(insets[10]);
        }
        arg0[descriptor.route.key] = height;
        return arg0;
      }
      height = headerHeights[descriptor.route.key];
    }, {});
    return obj;
  }
};
let items1 = [obj];
const styles = StyleSheet.create({ container: { flex: 1 }, absolute: { position: "absolute", top: 0, start: 0, end: 0 }, floating: { zIndex: 1 } });

export const getAnimationEnabled = function getAnimationEnabled(animation) {
  let str = animation;
  if (animation == null) {
    str = "default";
  }
  return "none" !== str;
};
export const CardStack = importDefaultResult(CardStack, items, items1);