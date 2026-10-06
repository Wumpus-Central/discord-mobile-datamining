// _runtime/metro/07570__.js
import Link from "../01491_Link.js";
import _slicedToArray_mod from "00032__slicedToArray.js";
import react_mod from "../00019_react.js";
import react_native from "../00017_react-native.js";
import Fragment from "../react/00021_Fragment.js";

const require = globalThis.__r;
let dependencyMap, set;

let Platform;
let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ Animated: hasOwnProperty, Platform, StatusBar: metroRequire, StyleSheet } = react_native);
({ useAnimatedValue: metroImportAll, View: c9 } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
function SceneView(arg0) {
  let Provider;
  let Provider2;
  let Provider4;
  let ScreenStackItem;
  let _undefined;
  let animation;
  let animationDuration;
  let animationMatchesGesture;
  let autoHideHomeIndicator;
  let c3;
  let closure_5;
  let contentStyle;
  let descriptor;
  let focused;
  let freezeOnBlur;
  let fullScreenGestureEnabled;
  let gestureDirection;
  let gestureEnabled;
  let gestureResponseDistance;
  let header;
  let headerBackButtonMenuEnabled;
  let headerBackTitle;
  let headerBackground;
  let headerShown;
  let headerTransparent;
  let index;
  let isPreloaded;
  let items3;
  let items5;
  let keyboardHandlingEnabled;
  let navigationBarColor;
  let navigationBarHidden;
  let navigationBarTranslucent;
  let nextDescriptor;
  let obj10;
  let obj12;
  let obj13;
  let obj18;
  let obj19;
  let obj21;
  let obj7;
  let onAppear;
  let onDisappear;
  let onDismissed;
  let onGestureCancel;
  let onHeaderBackButtonClicked;
  let onNativeDismissCancelled;
  let onSheetDetentChanged;
  let onWillAppear;
  let onWillDisappear;
  let options;
  let orientation;
  let previousDescriptor;
  let rect;
  let route;
  let scrollEdgeEffects;
  let sheetAllowedDetents;
  let shouldFreeze;
  let statusBarAnimation;
  let statusBarBackgroundColor;
  let statusBarHidden;
  let statusBarStyle;
  let statusBarTranslucent;
  let str10;
  let str8;
  let str9;
  let tmp17;
  let tmp18;
  let unstable_headerInsets;
  let unstable_sheetFooter;
  let value;
  ({ descriptor, previousDescriptor, nextDescriptor } = arg0);
  let safeAreaInsets;
  let num6;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  react = undefined;
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
  const render = descriptor.render;
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
  const tmp2 = undefined === fullScreenGestureShadowEnabled || fullScreenGestureShadowEnabled;
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
  const tmp3 = undefined !== sheetGrabberVisible && sheetGrabberVisible;
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
  const tmp4 = undefined === sheetExpandsWhenScrolledToEdge || sheetExpandsWhenScrolledToEdge;
  if (undefined !== sheetInitialDetentIndex) {
    num4 = sheetInitialDetentIndex;
  }
  const sheetShouldOverflowTopInset = options.sheetShouldOverflowTopInset;
  const sheetResizeAnimationEnabled = options.sheetResizeAnimationEnabled;
  const tmp5 = undefined !== sheetShouldOverflowTopInset && sheetShouldOverflowTopInset;
  const tmp6 = undefined === sheetResizeAnimationEnabled || sheetResizeAnimationEnabled;
  ({ statusBarTranslucent, scrollEdgeEffects, unstable_headerInsets } = options);
  let gestureDirection1;
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
    gestureDirection1 = nextDescriptor.options.gestureDirection;
  }
  if (null != gestureDirection1) {
    gestureDirection = gestureDirection1;
  }
  if (0 === index) {
    str = "card";
  }
  const obj = num6(1491);
  const colors = obj.useTheme().colors;
  const obj2 = num6(1621);
  safeAreaInsets = obj2.useSafeAreaInsets();
  const context = react.useContext(num6(6026).HeaderShownContext);
  let num5 = react.useContext(num6(6026).HeaderHeightContext);
  const context1 = react.useContext(num6(6026).HeaderBackContext);
  const obj4 = num6(6026);
  const frameSize = obj4.useFrameSize((width) => width.width > width.height);
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
  const tmp8Result = num6(6026);
  const frameSize1 = tmp8Result.useFrameSize((arg0) => 56 + num6);
  const tmp8Result5 = num6(1491);
  const preventedRoutes = tmp8Result5.usePreventRemoveContext().preventedRoutes;
  let num7 = 2;
  [tmp17, tmp18] = react.useState(frameSize1);
  dependencyMap = tmp18;
  _slicedToArray(react.useState(frameSize1), 2);
  const useCallback = react.useCallback;
  const tmp8Result6 = num6(7571);
  const callback = useCallback(tmp8Result6.debounce(tmp18, 100), []);
  _slicedToArray = 0;
  let num8 = 0;
  const tmp21 =
    "usesNewAndroidHeaderHeightImplementation" in tmp8(5722).compatibilityFlags &&
    true === tmp8(5722).compatibilityFlags.usesNewAndroidHeaderHeightImplementation;
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
  react = tmp24;
  const items = [num8, tmp24];
  let tmp26 = statusBarTranslucent;
  const memo = obj3.useMemo(() => hasOwnProperty.add(react, c3), items);
  if (typeof statusBarTranslucent !== "boolean") {
    tmp26 = 0 !== num6;
  }
  set = tmp27;
  if (previousDescriptor) {
    const tmp8Result7 = num6(6026);
    title = tmp8Result7.getHeaderTitle(previousDescriptor.options, previousDescriptor.route.name);
  } else if (context1 != null) {
    title = context1.title;
  }
  const items1 = [null != previousDescriptor || null != context1, title];
  const memo1 = obj3.useMemo(() => {
    if (closure_5) {
      return { href: "Array", title };
    }
  }, items1);
  let preventRemove;
  if (preventedRoutes[route.key] != null) {
    preventRemove = tmp29.preventRemove;
  }
  const obj5 = {
    route,
    headerBackButtonMenuEnabled,
    headerBackTitle,
    headerHeight: tmp17,
    headerShown: undefined === header && headerShown,
    headerTopInsetEnabled: tmp26,
    headerTransparent,
    headerBack: memo1,
  };
  const useHeaderConfigProps = num6(7572).useHeaderConfigProps;
  num6(7572);
  const merged = Object.assign(options);
  if (undefined !== preventRemove) {
    headerBackButtonMenuEnabled = !preventRemove;
  }
  headerBackTitle = undefined;
  if (undefined !== options.headerBackTitle) {
    headerBackTitle = options.headerBackTitle;
  }
  let eventResult;
  const headerConfigProps = useHeaderConfigProps(obj5);
  if (null == header) {
    const obj6 = { nativeEvent: obj7 };
    const items2 = [obj6];
    obj7 = { headerHeight: tmp24 };
    const obj8 = {
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
    eventResult = set.event(items2, obj8);
  }
  const obj9 = { route, navigation, children: closure_10(ScreenStackItem, obj10) };
  const NavigationProvider = tmp8(1491).NavigationProvider;
  obj10 = {
    screenId: route.key,
    activityState: num7,
    style: StyleSheet.absoluteFill,
    "aria-hidden": !focused,
    customAnimationOnSwipe: animationMatchesGesture,
    fullScreenSwipeEnabled: fullScreenGestureEnabled,
    fullScreenSwipeShadowEnabled: tmp2,
    freezeOnBlur,
    gestureEnabled: false,
    homeIndicatorHidden: autoHideHomeIndicator,
    hideKeyboardOnSwipe: keyboardHandlingEnabled,
    navigationBarColor,
    navigationBarTranslucent,
    navigationBarHidden,
    replaceAnimation: str4,
    stackPresentation: str3,
    stackAnimation: animation,
    screenOrientation: orientation,
    sheetAllowedDetents,
    sheetLargestUndimmedDetentIndex: num2,
    sheetGrabberVisible: tmp3,
    sheetInitialDetentIndex: num4,
    sheetCornerRadius: num,
    sheetElevation: num3,
    sheetExpandsWhenScrolledToEdge: tmp4,
    sheetShouldOverflowTopInset: tmp5,
    sheetDefaultResizeAnimationEnabled: tmp6,
    statusBarAnimation,
    statusBarHidden,
    statusBarStyle,
    statusBarColor: statusBarBackgroundColor,
    statusBarTranslucent,
    swipeDirection: gestureDirection,
    transitionDuration: animationDuration,
    onWillAppear,
    onWillDisappear,
    onAppear,
    onDisappear,
    onDismissed,
    onGestureCancel,
    onSheetDetentChanged,
    gestureResponseDistance,
    nativeBackButtonDismissalEnabled: false,
    onHeaderBackButtonClicked,
    preventNativeDismiss: preventRemove,
    scrollEdgeEffects: rect,
    onNativeDismissCancelled,
    onHeaderHeightChange: eventResult,
    contentStyle: items3,
    headerConfig: headerConfigProps,
    unstable_sheetFooter,
    shouldFreeze,
    children: closure_10(Provider, obj12),
  };
  ScreenStackItem = tmp8(5722).ScreenStackItem;
  if (isPreloaded) {
    num7 = 0;
  }
  if ("card" !== str) {
    str3 = str;
  }
  let str7;
  if (scrollEdgeEffects != null) {
    str7 = scrollEdgeEffects.bottom;
  }
  if (str7 == null) {
    str7 = "automatic";
  }
  rect = { bottom: str7, top: str8, left: str9, right: str10 };
  str8 = undefined;
  if (scrollEdgeEffects != null) {
    str8 = scrollEdgeEffects.top;
  }
  if (str8 == null) {
    str8 = "automatic";
  }
  str9 = undefined;
  if (scrollEdgeEffects != null) {
    str9 = scrollEdgeEffects.left;
  }
  if (str9 == null) {
    str9 = "automatic";
  }
  str10 = undefined;
  if (scrollEdgeEffects != null) {
    str10 = scrollEdgeEffects.right;
  }
  if (str10 == null) {
    str10 = "automatic";
  }
  let tmp38 = "transparentModal" !== str && "containedTransparentModal" !== str;
  if (tmp38) {
    tmp38 = { backgroundColor: colors.background };
    const obj11 = { backgroundColor: colors.background };
  }
  items3 = [tmp38, contentStyle];
  obj12 = { value: memo, children: closure_11(Provider2, obj13) };
  Provider = tmp8(7574).AnimatedHeaderHeightContext.Provider;
  let tmp41 = tmp17;
  Provider2 = tmp8(6026).HeaderHeightContext.Provider;
  if (false === headerShown) {
    if (num5 == null) {
      num5 = 0;
    }
    tmp41 = num5;
  }
  let tmp37Result = null;
  obj13 = { value: tmp41, children: items5 };
  if (null != headerBackground) {
    const items4 = [closure_13.background, ,];
    let translucent = null;
    if (headerTransparent) {
      translucent = closure_13.translucent;
    }
    items4[1] = translucent;
    const obj15 = { height: tmp17 };
    items4[2] = obj15;
    const obj14 = { style: items4, children: headerBackground() };
    tmp37Result = closure_10(closure_9, obj14);
  }
  items5 = [tmp37Result, ,];
  let tmp37Result2 = null;
  if (null != header) {
    tmp37Result2 = null;
    if (false !== headerShown) {
      const items6 = [closure_13.header];
      let tmp47 = null;
      if (headerTransparent) {
        const items7 = [closure_13.absolute];
        const obj16 = { minHeight: tmp17 };
        items7[1] = obj16;
        tmp47 = items7;
      }
      items6[1] = tmp47;
      const obj17 = { style: items6, children: closure_10(closure_9, obj18) };
      obj18 = {
        onLayout(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          _undefined(height);
          value.setValue(height);
        },
        style: { pointerEvents: "box-none" },
        children: header(obj19),
      };
      obj19 = { back: memo1, options, route, navigation };
      tmp37Result2 = closure_10(closure_9, obj17);
    }
  }
  items5[1] = tmp37Result2;
  let tmp48 = context;
  const Provider3 = tmp8(6026).HeaderShownContext.Provider;
  if (!context) {
    tmp48 = tmp40;
  }
  const obj20 = { value: tmp48, children: closure_10(Provider4, obj21) };
  obj21 = { value: memo1, children: render() };
  Provider4 = tmp8(6026).HeaderBackContext.Provider;
  items5[2] = closure_10(Provider3, obj20);
  return closure_10(NavigationProvider, obj9);
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { zIndex: 1 },
  absolute: { position: "absolute", top: 0, start: 0, end: 0 },
  translucent: { position: "absolute", top: 0, start: 0, end: 0, zIndex: 1, elevation: 1 },
  background: { overflow: "hidden" },
});

export const NativeStackView = function NativeStackView(state) {
  let ScreenStack;
  let closure_5;
  let combined;
  let descriptors;
  let obj5;
  state = state.state;
  ({ navigation: require, descriptors } = state);
  const describe = state.describe;
  let obj = require("_slicedToArray");
  const setNextDismissedKey = obj.useDismissedRouteError(state).setNextDismissedKey;
  const obj2 = require("react");
  const invalidPreventRemoveError = obj2.useInvalidPreventRemoveError(descriptors);
  const obj3 = require("07577__.js");
  const modalRouteKeys = obj3.getModalRouteKeys(state.routes, descriptors);
  const preloadedRoutes = state.preloadedRoutes;
  let closure_6 = preloadedRoutes.reduce((acc, key) => {
    acc[key.key] = acc[key.key] || describe(key, true);
    const tmp = acc[key.key] || describe(key, true);
    return acc;
  }, {});
  const obj4 = { children: closure_10(ScreenStack, obj5) };
  const SafeAreaProviderCompat = require("06026__.js").SafeAreaProviderCompat;
  const routes = state.routes;
  obj5 = {
    style: closure_13.container,
    children: combined.map((key, index) => {
      let tmp16;
      state = key;
      let tmp2 = descriptors[key.key];
      if (tmp2 == null) {
        tmp2 = closure_6[key.key];
      }
      key = undefined;
      index = state.index;
      const diff = state.index - 1;
      const tmp4 = state;
      if (state.routes[index - 1] != null) {
        key = tmp6.key;
      }
      let key1;
      if (tmp4.routes[index + 1] != null) {
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
      if ("nativeFabricUIManager" in state) {
        tmp16 = !(
          (undefined !== closure_6[key.key] && undefined === descriptors[key.key]) ||
          index === index ||
          diff === index ||
          (hasItem && false)
        );
      } else {
        tmp16 = !tmp14 && !tmp15 && !tmp13;
      }
      let obj = {
        index,
        focused: tmp15,
        shouldFreeze: tmp16,
        descriptor: tmp2,
        previousDescriptor: tmp10,
        nextDescriptor: tmp11,
        isPresentationModal: hasItem,
        isPreloaded: tmp14,
        onWillDisappear() {
          const obj = { type: "transitionStart", data: { closing: true }, target: key.key };
          require.emit(obj);
        },
        onWillAppear() {
          const obj = { type: "transitionStart", data: { closing: false }, target: key.key };
          require.emit(obj);
        },
        onAppear() {
          const obj = { type: "transitionEnd", data: { closing: false }, target: key.key };
          require.emit(obj);
        },
        onDisappear() {
          const obj = { type: "transitionEnd", data: { closing: true }, target: key.key };
          require.emit(obj);
        },
        onDismissed(nativeEvent) {
          const dispatch = require.dispatch;
          const obj = { source: key.key, target: state.key };
          const StackActions = Link.StackActions;
          const merged = Object.assign(StackActions.pop(nativeEvent.nativeEvent.dismissCount));
          dispatch(obj);
          setNextDismissedKey(key.key);
        },
        onHeaderBackButtonClicked() {
          const dispatch = require.dispatch;
          const obj = { source: key.key, target: state.key };
          const StackActions = Link.StackActions;
          const merged = Object.assign(StackActions.pop());
          dispatch(obj);
        },
        onNativeDismissCancelled(nativeEvent) {
          const dispatch = require.dispatch;
          const obj = { source: key.key, target: state.key };
          const StackActions = Link.StackActions;
          const merged = Object.assign(StackActions.pop(nativeEvent.nativeEvent.dismissCount));
          dispatch(obj);
        },
        onGestureCancel() {
          const obj = { type: "gestureCancel", target: key.key };
          require.emit(obj);
        },
        onSheetDetentChanged(nativeEvent) {
          const obj = {
            type: "sheetDetentChange",
            target: key.key,
            data: { index: nativeEvent.nativeEvent.index, stable: nativeEvent.nativeEvent.isStable },
          };
          require.emit(obj);
        },
      };
      return closure_1_10(SceneView, obj, key.key);
    }),
  };
  ScreenStack = require("enableScreens").ScreenStack;
  combined = routes.concat(state.preloadedRoutes);
  return closure_10(SafeAreaProviderCompat, obj4);
};
