// _runtime/07824_StyleSheet.js
import closure_3 from "metro/00032__slicedToArray.js";
import closure_4 from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import jsxProd from "react/00021_jsxProd.js";

const require = arg1;
({ Animated: c5, Platform, StatusBar: closure_6, StyleSheet } = get_ActivityIndicator);
({ useAnimatedValue: closure_8, View: c9 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
function SceneView(arg0) {
  ({ descriptor, previousDescriptor, nextDescriptor } = arg0);
  let safeAreaInsets;
  let num6;
  dependencyMap = undefined;
  let callback;
  let React;
  closure_5 = undefined;
  let title;
  ({ route, navigation, options } = descriptor);
  let str = options.presentation;
  ({ index, focused, shouldFreeze, isPreloaded, onWillDisappear, onWillAppear, onAppear, onDisappear, onDismissed, onHeaderBackButtonClicked, onNativeDismissCancelled, onGestureCancel, onSheetDetentChanged } = arg0);
  ({ animation, animationMatchesGesture } = options);
  if (undefined === str) {
    let str2 = "card";
    if (tmp) {
      str2 = "modal";
    }
    str = str2;
  }
  const animationTypeForReplace = options.animationTypeForReplace;
  let str3 = "push";
  let str4 = "push";
  ({ fullScreenGestureEnabled, animationDuration } = options);
  if (undefined !== animationTypeForReplace) {
    str4 = animationTypeForReplace;
  }
  const fullScreenGestureShadowEnabled = options.fullScreenGestureShadowEnabled;
  ({ gestureEnabled, gestureDirection } = options);
  if (undefined === gestureDirection) {
    let str5 = "vertical";
    if ("card" === str) {
      str5 = "horizontal";
    }
    gestureDirection = str5;
  }
  ({ header, headerBackButtonMenuEnabled, headerShown, headerBackground, headerTransparent, sheetAllowedDetents, gestureResponseDistance, autoHideHomeIndicator, keyboardHandlingEnabled, navigationBarColor, navigationBarTranslucent, navigationBarHidden, orientation } = options);
  if (undefined === sheetAllowedDetents) {
    sheetAllowedDetents = [1];
  }
  const sheetLargestUndimmedDetentIndex = options.sheetLargestUndimmedDetentIndex;
  let num = -1;
  let num2 = -1;
  if (undefined !== sheetLargestUndimmedDetentIndex) {
    num2 = sheetLargestUndimmedDetentIndex;
  }
  const sheetGrabberVisible = options.sheetGrabberVisible;
  const sheetCornerRadius = options.sheetCornerRadius;
  if (undefined !== sheetCornerRadius) {
    num = sheetCornerRadius;
  }
  const sheetElevation = options.sheetElevation;
  let num3 = 24;
  if (undefined !== sheetElevation) {
    num3 = sheetElevation;
  }
  const sheetExpandsWhenScrolledToEdge = options.sheetExpandsWhenScrolledToEdge;
  const sheetInitialDetentIndex = options.sheetInitialDetentIndex;
  let num4 = 0;
  if (undefined !== sheetInitialDetentIndex) {
    num4 = sheetInitialDetentIndex;
  }
  const sheetShouldOverflowTopInset = options.sheetShouldOverflowTopInset;
  const sheetResizeAnimationEnabled = options.sheetResizeAnimationEnabled;
  ({ statusBarTranslucent, scrollEdgeEffects, unstable_headerInsets } = options);
  gestureDirection = undefined;
  ({ statusBarAnimation, statusBarHidden, statusBarStyle, statusBarBackgroundColor, unstable_sheetFooter, freezeOnBlur, contentStyle } = options);
  if (nextDescriptor != null) {
    gestureDirection = nextDescriptor.options.gestureDirection;
  }
  if (0 === index) {
    str = "card";
  }
  let obj = num6(1500);
  obj1 = num6(1631);
  safeAreaInsets = obj1.useSafeAreaInsets();
  let obj2 = React;
  const context = React.useContext(num6(5502).HeaderShownContext);
  let num5 = React.useContext(num6(5502).HeaderHeightContext);
  const context1 = React.useContext(num6(5502).HeaderBackContext);
  let obj3 = num6(5502);
  const frameSize = obj3.useFrameSize((width) => width.width > width.height);
  num6 = 0;
  if (!context) {
    let top;
    if (unstable_headerInsets != null) {
      top = unstable_headerInsets.top;
    }
    num6 = 0;
    if (false !== top) {
      num6 = safeAreaInsets.top;
    }
  }
  let tmp8Result = tmp8(5502);
  const frameSize1 = tmp8Result.useFrameSize((arg0) => 56 + num6);
  tmp8Result = tmp8(1500);
  let num7 = 2;
  [tmp17, tmp18] = callback(obj2.useState(frameSize1), 2);
  dependencyMap = tmp18;
  const tmp16 = callback(obj2.useState(frameSize1), 2);
  const tmp2 = undefined === fullScreenGestureShadowEnabled || fullScreenGestureShadowEnabled;
  const tmp3 = undefined !== sheetGrabberVisible && sheetGrabberVisible;
  const tmp4 = undefined === sheetExpandsWhenScrolledToEdge || sheetExpandsWhenScrolledToEdge;
  const tmp5 = undefined !== sheetShouldOverflowTopInset && sheetShouldOverflowTopInset;
  const tmp6 = undefined === sheetResizeAnimationEnabled || sheetResizeAnimationEnabled;
  callback = obj2.useCallback(num6(7825).debounce(tmp18, 100), []);
  let tmp21 = "usesNewAndroidHeaderHeightImplementation" in tmp8(4865).compatibilityFlags;
  if (tmp21) {
    tmp21 = true === tmp8(4865).compatibilityFlags.usesNewAndroidHeaderHeightImplementation;
  }
  callback = 0;
  let num8 = 0;
  if (null == header) {
    num8 = 0;
    if (!tmp21) {
      let num9 = title.currentHeight;
      if (num9 == null) {
        num9 = 0;
      }
      const sum = -num9 + num6;
      callback = sum;
      num8 = sum;
    }
  }
  const tmp24 = callback2(frameSize1);
  React = tmp24;
  const items = [num8, tmp24];
  let tmp26 = statusBarTranslucent;
  const memo = obj2.useMemo(() => set.add(closure_4, c3), items);
  if (typeof statusBarTranslucent !== "boolean") {
    tmp26 = 0 !== num6;
  }
  closure_5 = tmp27;
  if (previousDescriptor) {
    title = tmp8(5502).getHeaderTitle(previousDescriptor.options, previousDescriptor.route.name);
    const tmp8Result2 = tmp8(5502);
  } else if (context1 != null) {
    title = context1.title;
  }
  const items1 = [null != previousDescriptor || null != context1, title];
  const memo1 = obj2.useMemo(() => {
    if (closure_5) {
      const obj = { href: "Array", title: 0 };
      obj[1] = title;
      return obj;
    }
  }, items1);
  const tmp29 = tmp8Result.usePreventRemoveContext().preventedRoutes[route.key];
  let preventRemove;
  if (tmp29 != null) {
    preventRemove = tmp29.preventRemove;
  }
  const tmp8Result1 = num6(7825);
  obj = {};
  const merged = Object.assign(options);
  obj.route = route;
  if (undefined !== preventRemove) {
    headerBackButtonMenuEnabled = !preventRemove;
  }
  obj.headerBackButtonMenuEnabled = headerBackButtonMenuEnabled;
  let headerBackTitle;
  if (undefined !== options.headerBackTitle) {
    headerBackTitle = options.headerBackTitle;
  }
  obj.headerBackTitle = headerBackTitle;
  obj.headerHeight = tmp17;
  obj.headerShown = undefined === header && headerShown;
  obj.headerTopInsetEnabled = tmp26;
  obj.headerTransparent = headerTransparent;
  obj.headerBack = memo1;
  let eventResult;
  const headerConfigProps = num6(7826).useHeaderConfigProps(obj);
  if (null == header) {
    obj = { nativeEvent: null };
    obj1 = { headerHeight: null };
    obj1[0] = tmp24;
    obj[0] = obj1;
    const items2 = [obj];
    obj2 = { useNativeDriver: true, listener: null };
    obj2[1] = function listener(nativeEvent) {
      if (nativeEvent.nativeEvent) {
        if (typeof nativeEvent.nativeEvent === "object") {
          if ("headerHeight" in nativeEvent.nativeEvent) {
            if (typeof nativeEvent.nativeEvent.headerHeight === "number") {
              const headerHeight = nativeEvent.nativeEvent.headerHeight;
              if (0 !== headerHeight) {
                const _Math = Math;
                if (Math.round(headerHeight) <= 56) {
                  _undefined(headerHeight + safeAreaInsets.top);
                }
              }
              _undefined(headerHeight);
            }
          }
        }
      }
    };
    eventResult = closure_5.event(items2, obj2);
  }
  obj3 = { route, navigation, children: null };
  const obj4 = { screenId: route.key, activityState: null, style: null, "aria-hidden": null, customAnimationOnSwipe: null, fullScreenSwipeEnabled: null, fullScreenSwipeShadowEnabled: null, freezeOnBlur: null, gestureEnabled: false, homeIndicatorHidden: null, hideKeyboardOnSwipe: null, navigationBarColor: null, navigationBarTranslucent: null, navigationBarHidden: null, replaceAnimation: null, stackPresentation: null, stackAnimation: null, screenOrientation: null, sheetAllowedDetents: null, sheetLargestUndimmedDetentIndex: null, sheetGrabberVisible: null, sheetInitialDetentIndex: null, sheetCornerRadius: null, sheetElevation: null, sheetExpandsWhenScrolledToEdge: null, sheetShouldOverflowTopInset: null, sheetDefaultResizeAnimationEnabled: null, statusBarAnimation: null, statusBarHidden: null, statusBarStyle: null, statusBarColor: null, statusBarTranslucent: null, swipeDirection: null, transitionDuration: null, onWillAppear: null, onWillDisappear: null, onAppear: null, onDisappear: null, onDismissed: null, onGestureCancel: null, onSheetDetentChanged: null, gestureResponseDistance: null, nativeBackButtonDismissalEnabled: false, onHeaderBackButtonClicked: null, preventNativeDismiss: null, scrollEdgeEffects: null, onNativeDismissCancelled: null, onHeaderHeightChange: null, contentStyle: null, headerConfig: null, unstable_sheetFooter: null, shouldFreeze: null, children: null };
  if (isPreloaded) {
    num7 = 0;
  }
  obj4[1] = num7;
  obj4[2] = StyleSheet.absoluteFill;
  obj4[3] = !focused;
  obj4[4] = animationMatchesGesture;
  obj4[5] = fullScreenGestureEnabled;
  obj4[6] = tmp2;
  obj4[7] = freezeOnBlur;
  obj4[9] = autoHideHomeIndicator;
  obj4[10] = keyboardHandlingEnabled;
  obj4[11] = navigationBarColor;
  obj4[12] = navigationBarTranslucent;
  obj4[13] = navigationBarHidden;
  obj4[14] = str4;
  if ("card" !== str) {
    str3 = str;
  }
  obj4[15] = str3;
  obj4[16] = animation;
  obj4[17] = orientation;
  obj4[18] = sheetAllowedDetents;
  obj4[19] = num2;
  obj4[20] = tmp3;
  obj4[21] = num4;
  obj4[22] = num;
  obj4[23] = num3;
  obj4[24] = tmp4;
  obj4[25] = tmp5;
  obj4[26] = tmp6;
  obj4[27] = statusBarAnimation;
  obj4[28] = statusBarHidden;
  obj4[29] = statusBarStyle;
  obj4[30] = statusBarBackgroundColor;
  obj4[31] = statusBarTranslucent;
  obj4[32] = gestureDirection;
  obj4[33] = animationDuration;
  obj4[34] = onWillAppear;
  obj4[35] = onWillDisappear;
  obj4[36] = onAppear;
  obj4[37] = onDisappear;
  obj4[38] = onDismissed;
  obj4[39] = onGestureCancel;
  obj4[40] = onSheetDetentChanged;
  obj4[41] = gestureResponseDistance;
  obj4[43] = onHeaderBackButtonClicked;
  obj4[44] = preventRemove;
  let str7;
  if (scrollEdgeEffects != null) {
    str7 = scrollEdgeEffects.bottom;
  }
  if (str7 == null) {
    str7 = "automatic";
  }
  const obj5 = { bottom: str7, top: null, left: null, right: null };
  let str8;
  if (scrollEdgeEffects != null) {
    str8 = scrollEdgeEffects.top;
  }
  if (str8 == null) {
    str8 = "automatic";
  }
  obj5[1] = str8;
  let str9;
  if (scrollEdgeEffects != null) {
    str9 = scrollEdgeEffects.left;
  }
  if (str9 == null) {
    str9 = "automatic";
  }
  obj5[2] = str9;
  let str10;
  if (scrollEdgeEffects != null) {
    str10 = scrollEdgeEffects.right;
  }
  if (str10 == null) {
    str10 = "automatic";
  }
  obj5[3] = str10;
  obj4[45] = obj5;
  obj4[46] = onNativeDismissCancelled;
  obj4[47] = eventResult;
  let tmp37 = "transparentModal" !== str;
  if (tmp37) {
    tmp37 = "containedTransparentModal" !== str;
  }
  if (tmp37) {
    const obj6 = { backgroundColor: null };
    obj6[0] = obj.useTheme().colors.background;
    tmp37 = obj6;
  }
  const items3 = [tmp37, contentStyle];
  obj4[48] = items3;
  obj4[49] = headerConfigProps;
  obj4[50] = unstable_sheetFooter;
  obj4[51] = shouldFreeze;
  const obj7 = { value: memo, children: null };
  let tmp40 = tmp17;
  if (false === headerShown) {
    if (num5 == null) {
      num5 = 0;
    }
    tmp40 = num5;
  }
  const obj8 = { value: tmp40, children: null };
  let tmp36Result = null;
  if (null != headerBackground) {
    const items4 = [closure_13.background, , ];
    let translucent = null;
    if (headerTransparent) {
      translucent = closure_13.translucent;
    }
    const obj9 = { style: null, children: null };
    items4[1] = translucent;
    const obj10 = { height: null };
    obj10[0] = tmp17;
    items4[2] = obj10;
    obj9[0] = items4;
    obj9[1] = headerBackground();
    tmp36Result = tmp36(closure_9, obj9);
    const tmp42 = closure_9;
  }
  const items5 = [tmp36Result, , ];
  tmp36Result = null;
  if (null != header) {
    tmp36Result = null;
    if (tmp39) {
      const items6 = [closure_13.header, ];
      let tmp46 = null;
      if (headerTransparent) {
        const items7 = [closure_13.absolute, ];
        const obj11 = { minHeight: null };
        obj11[0] = tmp17;
        items7[1] = obj11;
        tmp46 = items7;
      }
      const obj12 = { style: null, children: null };
      items6[1] = tmp46;
      obj12[0] = items6;
      const obj13 = { onLayout: null, style: null, children: null };
      obj13[0] = function onLayout(nativeEvent) {
        const height = nativeEvent.nativeEvent.layout.height;
        _undefined(height);
        value.setValue(height);
      };
      obj13[1] = { pointerEvents: "box-none" };
      const obj14 = { back: null, options: null, route: null, navigation: null };
      obj14[0] = memo1;
      obj14[1] = options;
      obj14[2] = route;
      obj14[3] = navigation;
      obj13[2] = header(obj14);
      obj12[1] = tmp36(closure_9, obj13);
      tmp36Result = tmp36(tmp45, obj12);
    }
  }
  items5[1] = tmp36Result;
  let tmp47 = context;
  if (!context) {
    tmp47 = tmp39;
  }
  const obj15 = { value: tmp47, children: null };
  const tmp38 = closure_11;
  const tmp8Result3 = num6(7826);
  obj15[1] = closure_10(num6(5502).HeaderBackContext.Provider, { value: memo1, children: descriptor.render() });
  items5[2] = closure_10(num6(5502).HeaderShownContext.Provider, obj15);
  obj8[1] = items5;
  obj7[1] = tmp38(num6(5502).HeaderHeightContext.Provider, obj8);
  obj4[52] = closure_10(num6(7828).AnimatedHeaderHeightContext.Provider, obj7);
  obj3[2] = closure_10(num6(4865).ScreenStackItem, obj4);
  return closure_10(num6(1500).NavigationProvider, obj3);
}
const styles = StyleSheet.create({ container: { flex: 1 }, header: { zIndex: 1 }, absolute: { position: "absolute", top: 0, start: 0, end: 0 }, translucent: { position: "absolute", top: 0, start: 0, end: 0, zIndex: 1, elevation: 1 }, background: { overflow: "hidden" } });

export const NativeStackView = function NativeStackView(state) {
  state = state.state;
  ({ navigation: require, descriptors } = state);
  const describe = state.describe;
  let setNextDismissedKey;
  let modalRouteKeys;
  closure_6 = undefined;
  let obj = require(descriptors[11]);
  setNextDismissedKey = obj.useDismissedRouteError(state).setNextDismissedKey;
  const invalidPreventRemoveError = require(descriptors[12]).useInvalidPreventRemoveError(descriptors);
  const obj2 = require(descriptors[12]);
  modalRouteKeys = require(descriptors[13]).getModalRouteKeys(state.routes, descriptors);
  const preloadedRoutes = state.preloadedRoutes;
  closure_6 = preloadedRoutes.reduce((arg0, key) => {
    let tmp = arg0[key.key];
    if (!tmp) {
      tmp = describe(key, true);
    }
    arg0[key.key] = tmp;
    return arg0;
  }, {});
  obj = { children: null };
  obj = { style: closure_13.container, children: null };
  const routes = state.routes;
  const combined = routes.concat(state.preloadedRoutes);
  obj[1] = combined.map((key, index) => {
    state = key;
    let tmp2 = descriptors[key.key];
    if (tmp2 == null) {
      tmp2 = dependencyMap[key.key];
    }
    key = undefined;
    const diff = state.index - 1;
    if (state.routes[index - 1] != null) {
      key = tmp6.key;
    }
    let key1;
    if (state.routes[index + 1] != null) {
      key1 = tmp8.key;
    }
    let tmp10;
    if (key) {
      tmp10 = tmp[key];
    }
    let tmp11;
    if (key1) {
      tmp11 = tmp[key1];
    }
    const hasItem = closure_5.includes(key.key);
    let flag = hasItem;
    if (hasItem) {
      flag = false;
    }
    if ("nativeFabricUIManager" in state) {
      let tmp16 = tmp13;
      if (!tmp13) {
        tmp16 = tmp14;
      }
      if (!tmp16) {
        tmp16 = diff === index;
      }
      if (!tmp16) {
        tmp16 = flag;
      }
      let tmp15 = !tmp16;
    } else {
      tmp15 = !tmp13;
      if (!tmp13) {
        tmp15 = !tmp14;
      }
      if (tmp15) {
        tmp15 = !flag;
      }
    }
    return closure_1_10(closure_1_12, {
      index,
      focused: state.index === index,
      shouldFreeze: tmp15,
      descriptor: tmp2,
      previousDescriptor: tmp10,
      nextDescriptor: tmp11,
      isPresentationModal: hasItem,
      isPreloaded: undefined !== dependencyMap[key.key] && undefined === descriptors[key.key],
      onWillDisappear(onDidDisappear, arg1) {
        closure_1_1.emit({ type: "transitionStart", data: { closing: true }, target: key.key });
      },
      onWillAppear() {
        closure_1_1.emit({ type: "transitionStart", data: { closing: false }, target: key.key });
      },
      onAppear() {
        closure_1_1.emit({ type: "transitionEnd", data: { closing: false }, target: key.key });
      },
      onDisappear() {
        closure_1_1.emit({ type: "transitionEnd", data: { closing: true }, target: key.key });
      },
      onDismissed(nativeEvent) {
        const obj = {};
        const StackActions = closure_2_1(descriptors[4]).StackActions;
        const merged = Object.assign(StackActions.pop(nativeEvent.nativeEvent.dismissCount));
        obj.source = key.key;
        obj.target = key.key;
        closure_1_1.dispatch(obj);
        closure_1_4(key.key);
      },
      onHeaderBackButtonClicked() {
        const obj = {};
        const StackActions = closure_2_1(descriptors[4]).StackActions;
        const merged = Object.assign(StackActions.pop());
        obj.source = key.key;
        obj.target = key.key;
        closure_1_1.dispatch(obj);
      },
      onNativeDismissCancelled(nativeEvent) {
        const obj = {};
        const StackActions = closure_2_1(descriptors[4]).StackActions;
        const merged = Object.assign(StackActions.pop(nativeEvent.nativeEvent.dismissCount));
        obj.source = key.key;
        obj.target = key.key;
        closure_1_1.dispatch(obj);
      },
      onGestureCancel() {
        closure_1_1.emit({ type: "gestureCancel", target: key.key });
      },
      onSheetDetentChanged(index) {
        obj = { type: "sheetDetentChange", target: key.key, data: obj };
        obj = { index: index.nativeEvent.index, stable: index.nativeEvent.isStable };
        closure_1_1.emit(obj);
      }
    }, key.key);
  });
  obj[0] = callback3(require(descriptors[8]).ScreenStack, obj);
  return callback3(require(descriptors[6]).SafeAreaProviderCompat, obj);
};