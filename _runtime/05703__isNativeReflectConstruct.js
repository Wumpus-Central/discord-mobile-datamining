import { getDistanceForDirection } from "05706_getDistanceForDirection.js";
import { findLastIndex } from "05721_findLastIndex.js";
// _runtime/05703__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import importDefaultResult1 from "_inherits";

let Platform;
let StyleSheet;
let c10;
let c9;
let error;
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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
({ Animated: error, Platform, StyleSheet } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_12 = Object.freeze({ options: {} });
function getInterpolationIndex(arg0, arg1) {

}
function getIsModal(arg0, arg1, arg2) {

}
function getHeaderHeights(arg0, arg1, arg2, arg3, arg4, arg5) {

}
function getDistanceFromOptions(arg0, arg1) {

}
function getProgressFromGesture(interpolate, width, options) {
  let obj = { width: Math.max(1, width.width), height: Math.max(1, width.height) };
  if (typeof getDistanceFromOptions !== "function") {
    HermesBuiltin.throwTypeError();
  }
  options = undefined;
  if (options != null) {
    options = options.options;
  }
  if (!options) {
    options = {};
  }
  const gestureDirection = options.gestureDirection;
  if (undefined !== gestureDirection) {
    const tmp10 = getDistanceForDirection(obj, gestureDirection);
    if (tmp10 > 0) {
      obj = { inputRange: null, outputRange: null };
      const items = [0, tmp10];
      obj[0] = items;
      obj[1] = [1, 0];
      let interpolateResult = interpolate.interpolate(obj);
    } else {
      obj = { inputRange: null, outputRange: null };
      const items1 = [tmp10, 0];
      obj[0] = items1;
      obj[1] = [0, 1];
      interpolateResult = interpolate.interpolate(obj);
    }
    return interpolateResult;
  } else if ("modal" === tmp) {
    let gestureDirection2 = CardStack(5719).ModalTransition.gestureDirection;
  } else {
    gestureDirection2 = CardStack(5719).DefaultTransition.gestureDirection;
  }
}
class CardStack {
  constructor(arg0) {
    self = this;
    tmp = _isNativeReflectConstruct(this, apply);
    items = [];
    items[0] = global;
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(apply);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.handleLayout = (nativeEvent) => {
      const layout = nativeEvent.nativeEvent.layout;
      let height = layout.height;
      const width = layout.width;
      let closure_2 = { width, height };
      height.setState((layout) => {
        let insets;
        let isParentHeaderShown;
        let isParentModal;
        if (scenes !== layout.layout.height) {
          const obj = { layout: null, headerHeights: null };
          obj[0] = isParentHeaderShown;
          scenes = layout.scenes;
          ({ insets, isParentHeaderShown, isParentModal } = arg1);
          if (typeof outer1_15 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          let _possibleConstructorReturn = isParentHeaderShown;
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
            const flattenResult = outer1_8.flatten(headerStyle);
            if ("height" in flattenResult) {
              if (typeof flattenResult.height === "number") {
                let height = flattenResult.height;
              }
              if (typeof outer1_13 !== "function") {
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
              if (typeof outer1_14 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              let flag = true;
              if (!isParentModal) {
                const obj2 = scenes(isParentHeaderShown[8]);
                flag = scenes(isParentHeaderShown[8]).getIsModalPresentation(descriptor.descriptor.options.cardStyleInterpolator) && 0 !== num5;
                const tmp19 = scenes(isParentHeaderShown[8]).getIsModalPresentation(descriptor.descriptor.options.cardStyleInterpolator) && 0 !== num5;
              }
              if (typeof height !== "number") {
                height = scenes(isParentHeaderShown[9]).getDefaultHeaderHeight(_possibleConstructorReturn, flag, headerStatusBarHeight);
                const obj3 = scenes(isParentHeaderShown[9]);
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
      let closure_0;
      let closure_1;
      ({ route: closure_0, height: closure_1 } = arg0);
      tmp3Result.setState((headerHeights) => {
        headerHeights = headerHeights.headerHeights;
        let tmp3 = null;
        if (headerHeights[key.key] !== closure_1) {
          let obj = { headerHeights: null };
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
      const state = tmp3Result.props.state;
      return state.routes[state.index];
    };
    tmp3Result.getPreviousScene = (route) => {
      let previousRoute;
      const scenes = previousRoute.state.scenes;
      previousRoute = previousRoute.props.getPreviousRoute({ route: route.route });
      if (previousRoute) {
        return scenes.find((descriptor) => descriptor.descriptor.route.key === previousRoute.key);
      }
      const obj = { route: route.route };
    };
    obj = { routes: [], scenes: [], gestures: {}, layout: require("Background").SafeAreaProviderCompat.initialMetrics.frame, descriptors: tmp3Result.props.descriptors, headerHeights: {} };
    tmp3Result.state = obj;
    return tmp3Result;
  }
}
require("_inherits")(CardStack, importAllResult.Component);
let obj = {
  key: "render",
  value: function render() {
    let StyleSheet;
    let _isNativeReflectConstruct;
    let closure_10;
    let closure_12;
    let _classCallCheck;
    let _possibleConstructorReturn;
    let closure_6;
    let closure_7;
    let closure_9;
    let dependencyMap;
    let detachInactiveScreens;
    let getInterpolationIndex;
    let getProgressFromGesture;
    let headerHeights;
    let importDefault;
    let renderHeader;
    let routes;
    let state;
    let self = this;
    self = this;
    const props = this.props;
    ({ insets: importDefault, state, routes, closingRouteKeys: dependencyMap, onOpenRoute: _classCallCheck, onCloseRoute: _possibleConstructorReturn, renderHeader } = props);
    ({ renderScene: closure_6, isParentHeaderShown: closure_7, isParentModal: StyleSheet, onTransitionStart: closure_9, onTransitionEnd: closure_10, onGestureStart: _isNativeReflectConstruct, onGestureEnd: closure_12, onGestureCancel: getInterpolationIndex, detachInactiveScreens } = props);
    const getIsModal = tmp;
    const state2 = self.state;
    const scenes = state2.scenes;
    const layout = state2.layout;
    ({ gestures: getProgressFromGesture, headerHeights } = state2);
    let closure_19 = tmp2;
    const scenes1 = self.state.scenes;
    const substr = scenes1.slice(-2);
    const someResult = substr.some((descriptor) => {
      let headerShown;
      let headerTransparent;
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
    let CardStack = 1;
    let diff = scenes.length - 1;
    let num = 1;
    if (0 <= diff) {
      while (true) {
        let options = scenes[diff].descriptor.options;
        let detachPreviousScreen = options.detachPreviousScreen;
        let tmp5 = diff;
        let tmp6 = num;
        if (undefined === detachPreviousScreen) {
          let tmp7 = "transparentModal" !== options.presentation;
          if (tmp7) {
            let tmp8 = CardStack;
            let tmp9 = dependencyMap;
            let obj1 = CardStack(5704);
            let isModalPresentation = obj1.getIsModalPresentation(options.cardStyleInterpolator);
            let tmp11 = !isModalPresentation;
            if (isModalPresentation) {
              let tmp12 = importDefault;
              tmp11 = diff !== findLastIndex(scenes, (descriptor) => {
                const cardStyleInterpolator = descriptor.descriptor.options.cardStyleInterpolator;
                let tmp = cardStyleInterpolator === v1(closure_2[13]).forModalPresentationIOS;
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
            tmp7 = tmp11;
          }
          detachPreviousScreen = tmp7;
        }
        if (false === detachPreviousScreen) {
          let sum = num + 1;
          CardStack = sum;
          let tmp13 = sum;
          diff = diff - 1;
          num = tmp13;
          if (0 > diff) {
            break;
          }
        } else {
          tmp13 = num;
          if (diff <= scenes.length - 2) {
            break;
          }
        }
        break;
      }
    }
    let obj = { mode: "float", layout, scenes, getPreviousScene: self.getPreviousScene, getFocusedRoute: self.getFocusedRoute, onContentHeightChange: self.handleHeaderLayout, style: null };
    let items = [headerHeights.floating, ];
    let tmp17 = someResult;
    if (someResult) {
      obj = { height: null };
      obj[0] = headerHeights[tmp2.key];
      const items1 = [obj, tmp16.absolute];
      tmp17 = items1;
    }
    obj1 = { children: renderHeader(obj) };
    items[1] = tmp17;
    obj[6] = items;
    const tmp15Result = closure_9(importAllResult.Fragment, obj1, "header");
    let tmp22 = null;
    if (!someResult) {
      tmp22 = tmp15Result;
    }
    const children = [tmp22, , ];
    let obj2 = { enabled: undefined === detachInactiveScreens || detachInactiveScreens, style: headerHeights.container, onLayout: self.handleLayout, children: null };
    obj2[3] = routes.map((key, index) => {
      let bottom;
      let freezeOnBlur;
      let headerStyle;
      let headerTransparent;
      let left;
      let right;
      let top;
      let num = 0;
      if (index >= arg2.length - v1 - 1) {
        let num2 = 2;
        if (index !== arg2.length - 1) {
          let num3 = 0;
          if (index >= arg2.length - tmp3) {
            num3 = 1;
          }
          num2 = num3;
        }
        let num4 = 1;
        if (tmp[arg2.length - 1]) {
          const current = tmp4.progress.current;
          let obj = { inputRange: null, outputRange: null, extrapolate: "clamp" };
          obj[0] = [0, 0.99999, 1];
          const items = [1, 1, num2];
          obj[1] = items;
          num4 = current.interpolate(obj);
        }
        num = num4;
      }
      const options = tmp2.descriptor.options;
      const headerShown = options.headerShown;
      const headerTintColor = options.headerTintColor;
      let num5 = 0;
      ({ headerTransparent, headerStyle, freezeOnBlur } = options);
      ({ top, right, bottom, left } = closure_1);
      if (false !== (undefined === headerShown || headerShown)) {
        num5 = headerHeights[key.key];
      }
      let isDarkResult;
      if (undefined === headerShown || headerShown) {
        if (typeof headerTintColor === "string") {
          isDarkResult = outer1_1(outer1_2[15])(headerTintColor).isDark();
          const obj3 = outer1_1(outer1_2[15])(headerTintColor);
        } else {
          const flattenResult = outer1_8.flatten(headerStyle);
          let tmp8 = flattenResult;
          if (flattenResult) {
            tmp8 = "backgroundColor" in flattenResult;
          }
          if (tmp8) {
            tmp8 = typeof flattenResult.backgroundColor === "string";
          }
          if (tmp8) {
            isDarkResult = !outer1_1(outer1_2[15])(flattenResult.backgroundColor).isDark();
            const obj2 = outer1_1(outer1_2[15])(flattenResult.backgroundColor);
          }
        }
      }
      if (typeof outer1_13 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let diff = index - 1;
      let num6 = 0;
      let num7 = 0;
      if (0 <= diff) {
        while (true) {
          let tmp15 = tmp[diff];
          let tmp16 = diff;
          let tmp17 = num6;
          let prop;
          if (tmp15 != null) {
            prop = tmp15.descriptor.options.cardStyleInterpolator;
          }
          num7 = num6;
          if (prop !== tmp13) {
            break;
          } else {
            num6 = num6 + 1;
            diff = diff - 1;
            num7 = num6;
            if (0 > diff) {
              break;
            }
          }
        }
      }
      if (typeof closure_14 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let flag = true;
      if (!closure_8) {
        const obj4 = v1(outer1_2[8]);
        flag = v1(outer1_2[8]).getIsModalPresentation(tmp2.descriptor.options.cardStyleInterpolator) && 0 !== num7;
        const tmp22 = v1(outer1_2[8]).getIsModalPresentation(tmp2.descriptor.options.cardStyleInterpolator) && 0 !== num7;
      }
      let presentation;
      if (scenes[index + 1] != null) {
        presentation = tmp23.descriptor.options.presentation;
      }
      let detachPreviousScreen;
      if (scenes[index + 1] != null) {
        detachPreviousScreen = tmp25.descriptor.options.detachPreviousScreen;
      }
      obj = { style: outer1_8.absoluteFill, enabled: closure_14, active: num, freezeOnBlur, pointerEvents: "box-none", children: null };
      obj = { index, interpolationIndex: num7, modal: flag, active: index === arg2.length - 1, focused: scenes[index].key === key.key, closing: null, layout: null, gesture: null, scene: null, safeAreaInsetTop: null, safeAreaInsetRight: null, safeAreaInsetBottom: null, safeAreaInsetLeft: null, onGestureStart: null, onGestureCancel: null, onGestureEnd: null, headerHeight: null, isParentHeaderShown: null, onHeaderHeightChange: null, getPreviousScene: null, getFocusedRoute: null, headerDarkContent: null, hasAbsoluteFloatHeader: null, renderHeader: null, renderScene: null, onOpenRoute: null, onCloseRoute: null, onTransitionStart: null, onTransitionEnd: null, isNextScreenTransparent: null, detachCurrentScreen: null };
      obj[5] = closure_2.includes(key.key);
      obj[6] = layout;
      obj[7] = table[key.key];
      obj[8] = scenes[index];
      obj[9] = top;
      obj[10] = right;
      obj[11] = bottom;
      obj[12] = left;
      obj[13] = closure_11;
      obj[14] = closure_13;
      obj[15] = closure_12;
      obj[16] = num5;
      obj[17] = closure_7;
      ({ handleHeaderLayout: obj6[18], getPreviousScene: obj6[19], getFocusedRoute: obj6[20] } = self);
      obj[21] = isDarkResult;
      let tmp30 = closure_20;
      if (closure_20) {
        tmp30 = !headerTransparent;
      }
      obj[22] = tmp30;
      obj[23] = renderHeader;
      obj[24] = closure_6;
      obj[25] = _classCallCheck;
      obj[26] = _possibleConstructorReturn;
      obj[27] = closure_9;
      obj[28] = closure_10;
      obj[29] = "transparentModal" === presentation;
      obj[30] = false !== detachPreviousScreen;
      obj[5] = outer1_9(outer1_1(outer1_2[16]), obj);
      return outer1_9(v1(outer1_2[14]).MaybeScreen, obj, key.key);
    });
    children[1] = closure_9(CardStack(5722).MaybeScreenContainer, obj2);
    let tmp23 = null;
    if (someResult) {
      tmp23 = tmp15Result;
    }
    children[2] = tmp23;
    return closure_10(CardStack(5674).Background, { children });
  }
};
let items = [obj];
obj = {
  key: "getDerivedStateFromProps",
  value: function getDerivedStateFromProps(routes, routes2) {
    let headerHeights;
    let insets;
    let isParentHeaderShown;
    let isParentModal;
    let layout;
    let mapped = routes;
    insets = routes2;
    if (routes.routes === routes2.routes) {
      if (routes.descriptors === routes2.descriptors) {
        return null;
      }
    }
    routes = routes.routes;
    const reduced = routes.reduce((arg0, key) => {
      let options;
      if (mapped.descriptors[key.key] != null) {
        options = tmp2.options;
      }
      if (!options) {
        options = {};
      }
      let value = insets.gestures[key.key];
      if (!value) {
        const openingRouteKeys = mapped.openingRouteKeys;
        let num = 0;
        if (openingRouteKeys.includes(key.key)) {
          num = 0;
          if (false !== tmp3) {
            if (typeof outer1_16 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            let options1;
            if (tmp2 != null) {
              options1 = tmp2.options;
            }
            if (!options1) {
              options1 = {};
            }
            const gestureDirection = options1.gestureDirection;
            if (undefined !== gestureDirection) {
              num = insets(isParentHeaderShown[11])(tmp4.layout, gestureDirection);
            } else if ("modal" === tmp7) {
              let gestureDirection2 = mapped(isParentHeaderShown[10]).ModalTransition.gestureDirection;
            } else {
              gestureDirection2 = mapped(isParentHeaderShown[10]).DefaultTransition.gestureDirection;
            }
          }
        }
        value = new outer1_7.Value(num);
      }
      arg0[key.key] = value;
      return arg0;
    }, {});
    isParentHeaderShown = reduced;
    const routes1 = routes.routes;
    mapped = routes1.map((arg0, arg1, arg2) => {
      const mapped = tmp4;
      if (mapped.descriptors[arg0.key] || insets.descriptors[arg0.key]) {
        let key;
        if (tmp2 != null) {
          key = tmp2.key;
        }
        let tmp14 = tmp9.descriptors[key];
        if (!tmp14) {
          let key1;
          if (tmp2 != null) {
            key1 = tmp2.key;
          }
          tmp14 = tmp3.descriptors[key1];
        }
        let key2;
        if (tmp != null) {
          key2 = tmp.key;
        }
        let tmp17 = tmp9.descriptors[key2];
        if (!tmp17) {
          let key3;
          if (tmp != null) {
            key3 = tmp.key;
          }
          tmp17 = tmp3.descriptors[key3];
        }
        if (arg1 !== arg2.length - 1) {
          if (tmp14) {
            if ("transparentModal" !== tmp14.options.presentation) {
              let options = tmp14.options;
            }
            if ("modal" === options.presentation) {
              let DefaultTransition = mapped(isParentHeaderShown[10]).ModalTransition;
            } else if ("transparentModal" === options.presentation) {
              DefaultTransition = mapped(isParentHeaderShown[10]).ModalFadeTransition;
            } else {
              DefaultTransition = mapped(isParentHeaderShown[10]).DefaultTransition;
            }
            const animationEnabled = options.animationEnabled;
            const gestureEnabled = options.gestureEnabled;
            let gestureDirection = options.gestureDirection;
            if (undefined === gestureDirection) {
              gestureDirection = DefaultTransition.gestureDirection;
            }
            let transitionSpec = options.transitionSpec;
            if (undefined === transitionSpec) {
              transitionSpec = DefaultTransition.transitionSpec;
            }
            const cardStyleInterpolator = options.cardStyleInterpolator;
            if (undefined !== cardStyleInterpolator) {
              let headerStyleInterpolator = options.headerStyleInterpolator;
              if (undefined === headerStyleInterpolator) {
                headerStyleInterpolator = DefaultTransition.headerStyleInterpolator;
              }
              let cardOverlayEnabled = options.cardOverlayEnabled;
              if (undefined === cardOverlayEnabled) {
                let isModalPresentation = "transparentModal" !== options.presentation;
                if (!isModalPresentation) {
                  let obj = mapped(isParentHeaderShown[8]);
                  isModalPresentation = obj.getIsModalPresentation(cardStyleInterpolator);
                }
                cardOverlayEnabled = isModalPresentation;
              }
              let str5 = tmp10.options.headerMode;
              if (str5 == null) {
                let tmp33 = "modal" !== options.presentation;
                if (tmp33) {
                  tmp33 = "transparentModal" !== options.presentation;
                }
                if (tmp33) {
                  let presentation;
                  if (tmp14 != null) {
                    presentation = tmp14.options.presentation;
                  }
                  tmp33 = "modal" !== presentation;
                }
                if (tmp33) {
                  let presentation1;
                  if (tmp14 != null) {
                    presentation1 = tmp14.options.presentation;
                  }
                  tmp33 = "transparentModal" !== presentation1;
                }
                str5 = "screen";
                if (tmp33) {
                  let obj1 = mapped(isParentHeaderShown[8]);
                  const isModalPresentation1 = obj1.getIsModalPresentation(cardStyleInterpolator);
                  str5 = "screen";
                }
              }
              obj = { route: null, descriptor: null, progress: null, __memo: null };
              obj[0] = arg0;
              obj = {};
              const merged = Object.assign(tmp10);
              obj1 = {};
              const merged1 = Object.assign(tmp10.options);
              obj1.animationEnabled = tmp25;
              obj1.cardOverlayEnabled = cardOverlayEnabled;
              obj1.cardStyleInterpolator = cardStyleInterpolator;
              obj1.gestureDirection = gestureDirection;
              obj1.gestureEnabled = tmp26;
              obj1.headerStyleInterpolator = headerStyleInterpolator;
              obj1.transitionSpec = transitionSpec;
              obj1.headerMode = str5;
              obj.options = obj1;
              obj[1] = obj;
              const obj2 = { current: null, next: null, previous: null };
              obj2[0] = outer1_17(tmp6, tmp3.layout, tmp10);
              let tmp44Result;
              if (tmp8) {
                let presentation2;
                if (tmp14 != null) {
                  presentation2 = tmp14.options.presentation;
                }
                if ("transparentModal" !== presentation2) {
                  tmp44Result = tmp44(tmp8, tmp3.layout, tmp14);
                }
              }
              obj2[1] = tmp44Result;
              tmp44Result = undefined;
              if (tmp7) {
                tmp44Result = tmp44(tmp7, tmp3.layout, tmp17);
              }
              obj2[2] = tmp44Result;
              obj[2] = obj2;
              const items = [tmp3.layout, tmp10, tmp14, tmp17, tmp6, tmp8, tmp7];
              obj[3] = items;
              let tmp48 = obj;
              if (tmp4) {
                const __memo = obj.__memo;
                tmp48 = obj;
                if (__memo.every((arg0, arg1) => tmp4.__memo[arg1] === arg0)) {
                  tmp48 = tmp4;
                }
              }
              return tmp48;
            } else if (false === tmp25) {
              let cardStyleInterpolator2 = mapped(isParentHeaderShown[13]).forNoAnimation;
            } else {
              cardStyleInterpolator2 = DefaultTransition.cardStyleInterpolator;
            }
            tmp26 = undefined !== gestureEnabled && gestureEnabled;
          }
        }
        options = tmp10.options;
      }
    });
    let obj = { routes: routes.routes, scenes: mapped, gestures: reduced, descriptors: routes.descriptors, headerHeights: null };
    ({ insets, isParentHeaderShown, isParentModal } = routes);
    ({ layout, headerHeights } = routes2);
    if (typeof getHeaderHeights !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj[4] = mapped.reduce((arg0, descriptor) => {
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
      const flattenResult = outer1_8.flatten(headerStyle);
      if ("height" in flattenResult) {
        if (typeof flattenResult.height === "number") {
          let height = flattenResult.height;
        }
        if (typeof outer1_13 !== "function") {
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
        if (typeof outer1_14 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let flag = true;
        if (!isParentModal) {
          const obj2 = scenes(isParentHeaderShown[8]);
          flag = scenes(isParentHeaderShown[8]).getIsModalPresentation(descriptor.descriptor.options.cardStyleInterpolator) && 0 !== num5;
          const tmp19 = scenes(isParentHeaderShown[8]).getIsModalPresentation(descriptor.descriptor.options.cardStyleInterpolator) && 0 !== num5;
        }
        if (typeof height !== "number") {
          height = scenes(isParentHeaderShown[9]).getDefaultHeaderHeight(_possibleConstructorReturn, flag, headerStatusBarHeight);
          const obj3 = scenes(isParentHeaderShown[9]);
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
const styles = StyleSheet.create({ container: { flex: 1 }, absolute: { position: "absolute", top: 0, left: 0, right: 0 }, floating: { zIndex: 1 } });

export default importDefaultResult(CardStack, items, items1);