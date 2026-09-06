// _runtime/metro/07915__.js
import Link from "../01484_Link.js";
import _slicedToArray from "00032__.js";
import noop from "00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Animated: hasOwnProperty, Platform, StatusBar: metroRequire, StyleSheet } = get_ActivityIndicator);
({ useAnimatedValue: closure_8, View: closure_9 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
function SceneView(arg0) {
  ({ descriptor, previousDescriptor, nextDescriptor } = arg0);
  let safeAreaInsets;
  let num6;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  set = undefined;
  let title;
  ({ route, navigation, options } = descriptor);
  let str = options.presentation;
  ({
    index,
    focused,
    shouldFreeze,
    isPreloaded,
    onWillDisappear,
    onWillAppear,
    onAppear,
    onDisappear,
    onDismissed,
    onHeaderBackButtonClicked,
    onNativeDismissCancelled,
    onGestureCancel,
    onSheetDetentChanged,
  } = arg0);
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
  ({
    header,
    headerBackButtonMenuEnabled,
    headerShown,
    headerBackground,
    headerTransparent,
    sheetAllowedDetents,
    gestureResponseDistance,
    autoHideHomeIndicator,
    keyboardHandlingEnabled,
    navigationBarColor,
    navigationBarTranslucent,
    navigationBarHidden,
    orientation,
  } = options);
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
  ({
    statusBarAnimation,
    statusBarHidden,
    statusBarStyle,
    statusBarBackgroundColor,
    unstable_sheetFooter,
    freezeOnBlur,
    contentStyle,
  } = options);
  if (nextDescriptor != null) {
    gestureDirection = nextDescriptor.options.gestureDirection;
  }
  if (0 === index) {
    str = "card";
  }
  let obj = num6(1484);
  let obj1 = num6(1614);
  safeAreaInsets = obj1.useSafeAreaInsets();
  let obj2 = noop;
  const context = noop.useContext(num6(5631).HeaderShownContext);
  let num5 = noop.useContext(num6(5631).HeaderHeightContext);
  const context1 = noop.useContext(num6(5631).HeaderBackContext);
  let obj3 = num6(5631);
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
  let tmp8Result = tmp8(5631);
  const frameSize1 = tmp8Result.useFrameSize((arg0) => 56 + num6);
  tmp8Result = tmp8(1484);
  let num7 = 2;
  [tmp17, tmp18] = _slicedToArray(obj2.useState(frameSize1), 2);
  dependencyMap = tmp18;
  const tmp16 = _slicedToArray(obj2.useState(frameSize1), 2);
  const tmp2 = undefined === fullScreenGestureShadowEnabled || fullScreenGestureShadowEnabled;
  const tmp3 = undefined !== sheetGrabberVisible && sheetGrabberVisible;
  const tmp4 = undefined === sheetExpandsWhenScrolledToEdge || sheetExpandsWhenScrolledToEdge;
  const tmp5 = undefined !== sheetShouldOverflowTopInset && sheetShouldOverflowTopInset;
  const tmp6 = undefined === sheetResizeAnimationEnabled || sheetResizeAnimationEnabled;
  const callback = obj2.useCallback(num6(7916).debounce(tmp18, 100), []);
  let tmp21 = "usesNewAndroidHeaderHeightImplementation" in tmp8(4912).compatibilityFlags;
  if (tmp21) {
    tmp21 = true === tmp8(4912).compatibilityFlags.usesNewAndroidHeaderHeightImplementation;
  }
  _slicedToArray = 0;
  let num8 = 0;
  if (null == header) {
    num8 = 0;
    if (!tmp21) {
      let num9 = title.currentHeight;
      if (num9 == null) {
        num9 = 0;
      }
      const sum = -num9 + num6;
      _slicedToArray = sum;
      num8 = sum;
    }
  }
  const tmp24 = closure_8(frameSize1);
  noop = tmp24;
  const items = [num8, tmp24];
  let tmp26 = statusBarTranslucent;
  const memo = obj2.useMemo(() => set.add(closure_4, c3), items);
  if (typeof statusBarTranslucent !== "boolean") {
    tmp26 = 0 !== num6;
  }
  set = tmp27;
  if (previousDescriptor) {
    title = tmp8(5631).getHeaderTitle(previousDescriptor.options, previousDescriptor.route.name);
    const tmp8Result2 = tmp8(5631);
  } else if (context1 != null) {
    title = context1.title;
  }
  const items1 = [null != previousDescriptor || null != context1, title];
  const memo1 = obj2.useMemo(() => {
    if (closure_5) {
      const obj = { href: "Array", title };
      return obj;
    }
  }, items1);
  const tmp29 = tmp8Result.usePreventRemoveContext().preventedRoutes[route.key];
  let preventRemove;
  if (tmp29 != null) {
    preventRemove = tmp29.preventRemove;
  }
  const tmp8Result1 = num6(7916);
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
  const headerConfigProps = num6(7917).useHeaderConfigProps(obj);
  if (null == header) {
    obj = { nativeEvent: null };
    obj1 = { headerHeight: tmp24 };
    obj.nativeEvent = obj1;
    const items2 = [obj];
    obj2 = {
      useNativeDriver: true,
      listener(nativeEvent) {
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
      },
    };
    eventResult = set.event(items2, obj2);
  }
  obj3 = { route, navigation, children: null };
  const obj4 = {
    screenId: route.key,
    activityState: null,
    style: null,
    "aria-hidden": null,
    customAnimationOnSwipe: null,
    fullScreenSwipeEnabled: null,
    fullScreenSwipeShadowEnabled: null,
    freezeOnBlur: null,
    gestureEnabled: false,
    homeIndicatorHidden: null,
    hideKeyboardOnSwipe: null,
    navigationBarColor: null,
    navigationBarTranslucent: null,
    navigationBarHidden: null,
    replaceAnimation: null,
    stackPresentation: null,
    stackAnimation: null,
    screenOrientation: null,
    sheetAllowedDetents: null,
    sheetLargestUndimmedDetentIndex: null,
    sheetGrabberVisible: null,
    sheetInitialDetentIndex: null,
    sheetCornerRadius: null,
    sheetElevation: null,
    sheetExpandsWhenScrolledToEdge: null,
    sheetShouldOverflowTopInset: null,
    sheetDefaultResizeAnimationEnabled: null,
    statusBarAnimation: null,
    statusBarHidden: null,
    statusBarStyle: null,
    statusBarColor: null,
    statusBarTranslucent: null,
    swipeDirection: null,
    transitionDuration: null,
    onWillAppear: null,
    onWillDisappear: null,
    onAppear: null,
    onDisappear: null,
    onDismissed: null,
    onGestureCancel: null,
    onSheetDetentChanged: null,
    gestureResponseDistance: null,
    nativeBackButtonDismissalEnabled: false,
    onHeaderBackButtonClicked: null,
    preventNativeDismiss: null,
    scrollEdgeEffects: null,
    onNativeDismissCancelled: null,
    onHeaderHeightChange: null,
    contentStyle: null,
    headerConfig: null,
    unstable_sheetFooter: null,
    shouldFreeze: null,
    children: null,
  };
  if (isPreloaded) {
    num7 = 0;
  }
  obj4.activityState = num7;
  obj4.style = StyleSheet.absoluteFill;
  obj4["aria-hidden"] = !focused;
  obj4.customAnimationOnSwipe = animationMatchesGesture;
  obj4.fullScreenSwipeEnabled = fullScreenGestureEnabled;
  obj4.fullScreenSwipeShadowEnabled = tmp2;
  obj4.freezeOnBlur = freezeOnBlur;
  obj4.homeIndicatorHidden = autoHideHomeIndicator;
  obj4.hideKeyboardOnSwipe = keyboardHandlingEnabled;
  obj4.navigationBarColor = navigationBarColor;
  obj4.navigationBarTranslucent = navigationBarTranslucent;
  obj4.navigationBarHidden = navigationBarHidden;
  obj4.replaceAnimation = str4;
  if ("card" !== str) {
    str3 = str;
  }
  obj4.stackPresentation = str3;
  obj4.stackAnimation = animation;
  obj4.screenOrientation = orientation;
  obj4.sheetAllowedDetents = sheetAllowedDetents;
  obj4.sheetLargestUndimmedDetentIndex = num2;
  obj4.sheetGrabberVisible = tmp3;
  obj4.sheetInitialDetentIndex = num4;
  obj4.sheetCornerRadius = num;
  obj4.sheetElevation = num3;
  obj4.sheetExpandsWhenScrolledToEdge = tmp4;
  obj4.sheetShouldOverflowTopInset = tmp5;
  obj4.sheetDefaultResizeAnimationEnabled = tmp6;
  obj4.statusBarAnimation = statusBarAnimation;
  obj4.statusBarHidden = statusBarHidden;
  obj4.statusBarStyle = statusBarStyle;
  obj4.statusBarColor = statusBarBackgroundColor;
  obj4.statusBarTranslucent = statusBarTranslucent;
  obj4.swipeDirection = gestureDirection;
  obj4.transitionDuration = animationDuration;
  obj4.onWillAppear = onWillAppear;
  obj4.onWillDisappear = onWillDisappear;
  obj4.onAppear = onAppear;
  obj4.onDisappear = onDisappear;
  obj4.onDismissed = onDismissed;
  obj4.onGestureCancel = onGestureCancel;
  obj4.onSheetDetentChanged = onSheetDetentChanged;
  obj4.gestureResponseDistance = gestureResponseDistance;
  obj4.onHeaderBackButtonClicked = onHeaderBackButtonClicked;
  obj4.preventNativeDismiss = preventRemove;
  let str7;
  if (scrollEdgeEffects != null) {
    str7 = scrollEdgeEffects.bottom;
  }
  if (str7 == null) {
    str7 = "automatic";
  }
  const rect = { bottom: str7, top: null, left: null, right: null };
  let str8;
  if (scrollEdgeEffects != null) {
    str8 = scrollEdgeEffects.top;
  }
  if (str8 == null) {
    str8 = "automatic";
  }
  rect.top = str8;
  let str9;
  if (scrollEdgeEffects != null) {
    str9 = scrollEdgeEffects.left;
  }
  if (str9 == null) {
    str9 = "automatic";
  }
  rect.left = str9;
  let str10;
  if (scrollEdgeEffects != null) {
    str10 = scrollEdgeEffects.right;
  }
  if (str10 == null) {
    str10 = "automatic";
  }
  rect.right = str10;
  obj4.scrollEdgeEffects = rect;
  obj4.onNativeDismissCancelled = onNativeDismissCancelled;
  obj4.onHeaderHeightChange = eventResult;
  let tmp37 = "transparentModal" !== str;
  if (tmp37) {
    tmp37 = "containedTransparentModal" !== str;
  }
  if (tmp37) {
    const obj5 = { backgroundColor: obj.useTheme().colors.background };
    tmp37 = obj5;
  }
  const items3 = [tmp37, contentStyle];
  obj4.contentStyle = items3;
  obj4.headerConfig = headerConfigProps;
  obj4.unstable_sheetFooter = unstable_sheetFooter;
  obj4.shouldFreeze = shouldFreeze;
  const obj6 = { value: memo, children: null };
  let tmp40 = tmp17;
  if (false === headerShown) {
    if (num5 == null) {
      num5 = 0;
    }
    tmp40 = num5;
  }
  const obj7 = { value: tmp40, children: null };
  let tmp36Result = null;
  if (null != headerBackground) {
    const items4 = [closure_13.background, ,];
    let translucent = null;
    if (headerTransparent) {
      translucent = closure_13.translucent;
    }
    const obj8 = { style: null, children: null };
    items4[1] = translucent;
    const obj9 = { height: tmp17 };
    items4[2] = obj9;
    obj8.style = items4;
    obj8.children = headerBackground();
    tmp36Result = closure_10(closure_9, obj8);
  }
  const items5 = [tmp36Result, ,];
  tmp36Result = null;
  if (null != header) {
    tmp36Result = null;
    if (tmp39) {
      const items6 = [closure_13.header];
      let tmp46 = null;
      if (headerTransparent) {
        const items7 = [closure_13.absolute];
        const obj10 = { minHeight: tmp17 };
        items7[1] = obj10;
        tmp46 = items7;
      }
      const obj11 = { style: null, children: null };
      items6[1] = tmp46;
      obj11.style = items6;
      const obj12 = {
        onLayout(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          _undefined(height);
          value.setValue(height);
        },
        style: { pointerEvents: "box-none" },
        children: null,
      };
      const obj13 = { back: memo1, options, route, navigation };
      obj12.children = header(obj13);
      obj11.children = closure_10(closure_9, obj12);
      tmp36Result = closure_10(closure_9, obj11);
    }
  }
  items5[1] = tmp36Result;
  let tmp47 = context;
  if (!context) {
    tmp47 = tmp39;
  }
  const obj14 = { value: tmp47, children: null };
  const tmp8Result3 = num6(7917);
  obj14.children = closure_10(num6(5631).HeaderBackContext.Provider, { value: memo1, children: descriptor.render() });
  items5[2] = closure_10(num6(5631).HeaderShownContext.Provider, obj14);
  obj7.children = items5;
  obj6.children = closure_11(num6(5631).HeaderHeightContext.Provider, obj7);
  obj4.children = closure_10(num6(7919).AnimatedHeaderHeightContext.Provider, obj6);
  obj3.children = closure_10(num6(4912).ScreenStackItem, obj4);
  return closure_10(num6(1484).NavigationProvider, obj3);
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { zIndex: 1 },
  absolute: { position: "absolute", top: 0, start: 0, end: 0 },
  translucent: { position: "absolute", top: 0, start: 0, end: 0, zIndex: 1, elevation: 1 },
  background: { overflow: "hidden" },
});

export const NativeStackView = function NativeStackView(state) {
  state = state.state;
  ({ navigation: require, descriptors } = state);
  const describe = state.describe;
  let obj = require("07920__.js");
  const setNextDismissedKey = obj.useDismissedRouteError(state).setNextDismissedKey;
  const invalidPreventRemoveError = require("07921__.js").useInvalidPreventRemoveError(descriptors);
  const obj2 = require("07921__.js");
  const modalRouteKeys = require("07922__.js").getModalRouteKeys(state.routes, descriptors);
  const preloadedRoutes = state.preloadedRoutes;
  dependencyMap = preloadedRoutes.reduce((acc, key) => {
    let tmp = acc[key.key];
    if (!tmp) {
      tmp = describe(key, true);
    }
    acc[key.key] = tmp;
    return acc;
  }, {});
  obj = { children: null };
  obj = { style: closure_13.container, children: null };
  const routes = state.routes;
  const combined = routes.concat(state.preloadedRoutes);
  obj.children = combined.map((key, index) => {
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
      tmp10 = descriptors[key];
    }
    let tmp11;
    if (key1) {
      tmp11 = descriptors[key1];
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
    return closure_1_10(
      SceneView,
      {
        index,
        focused: state.index === index,
        shouldFreeze: tmp15,
        descriptor: tmp2,
        previousDescriptor: tmp10,
        nextDescriptor: tmp11,
        isPresentationModal: hasItem,
        isPreloaded: undefined !== dependencyMap[key.key] && undefined === descriptors[key.key],
        onWillDisappear() {
          require.emit({ type: "transitionStart", data: { closing: true }, target: key.key });
        },
        onWillAppear() {
          require.emit({ type: "transitionStart", data: { closing: false }, target: key.key });
        },
        onAppear() {
          require.emit({ type: "transitionEnd", data: { closing: false }, target: key.key });
        },
        onDisappear() {
          require.emit({ type: "transitionEnd", data: { closing: true }, target: key.key });
        },
        onDismissed(nativeEvent) {
          const obj = {};
          const StackActions = Link.StackActions;
          const merged = Object.assign(StackActions.pop(nativeEvent.nativeEvent.dismissCount));
          obj.source = key.key;
          obj.target = state.key;
          closure_2_1.dispatch(obj);
          setNextDismissedKey(key.key);
        },
        onHeaderBackButtonClicked() {
          const obj = {};
          const StackActions = Link.StackActions;
          const merged = Object.assign(StackActions.pop());
          obj.source = key.key;
          obj.target = state.key;
          closure_2_1.dispatch(obj);
        },
        onNativeDismissCancelled(nativeEvent) {
          const obj = {};
          const StackActions = Link.StackActions;
          const merged = Object.assign(StackActions.pop(nativeEvent.nativeEvent.dismissCount));
          obj.source = key.key;
          obj.target = state.key;
          closure_2_1.dispatch(obj);
        },
        onGestureCancel() {
          require.emit({ type: "gestureCancel", target: key.key });
        },
        onSheetDetentChanged(nativeEvent) {
          require.emit({
            type: "sheetDetentChange",
            target: key.key,
            data: { index: nativeEvent.nativeEvent.index, stable: nativeEvent.nativeEvent.isStable },
          });
        },
      },
      key.key,
    );
  });
  obj.children = closure_10(require("enableScreens").ScreenStack, obj);
  return closure_10(require("05631__.js").SafeAreaProviderCompat, obj);
};
