import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let Platform;
let StyleSheet;
let error;
let metroImportAll;
const require = arg1;
function NativeStackViewInner(state) {
  let descriptors;
  let importDefault;
  state = state.state;
  ({ navigation: importDefault, descriptors } = state);
  let setNextDismissedKey;
  setNextDismissedKey = importDefault(descriptors[11])(state).setNextDismissedKey;
  importDefault(descriptors[12])(descriptors);
  let obj = { style: closure_12.container, children: null };
  const routes = state.routes;
  obj[1] = routes.map((key, index) => {
    const state = key;
    key = undefined;
    if (state.routes[index - 1] != null) {
      key = tmp3.key;
    }
    let key1;
    if (state.routes[index + 1] != null) {
      key1 = tmp5.key;
    }
    let tmp7;
    if (key) {
      tmp7 = tmp[key];
    }
    let tmp8;
    if (key1) {
      tmp8 = tmp[key1];
    }
    return outer1_7(outer1_10, {
      index,
      focused: state.index === index,
      descriptor: descriptors[key.key],
      previousDescriptor: tmp7,
      nextDescriptor: tmp8,
      onWillDisappear(onDidDisappear, arg1) {
        outer1_1.emit({ type: "transitionStart", data: { closing: true }, target: key.key });
      },
      onWillAppear() {
        outer1_1.emit({ type: "transitionStart", data: { closing: false }, target: key.key });
      },
      onAppear() {
        outer1_1.emit({ type: "transitionEnd", data: { closing: false }, target: key.key });
      },
      onDisappear() {
        outer1_1.emit({ type: "transitionEnd", data: { closing: true }, target: key.key });
      },
      onDismissed(nativeEvent) {
        const obj = {};
        const StackActions = state(descriptors[4]).StackActions;
        const merged = Object.assign(StackActions.pop(nativeEvent.nativeEvent.dismissCount));
        obj.source = key.key;
        obj.target = key.key;
        outer1_1.dispatch(obj);
        outer1_3(key.key);
      },
      onHeaderBackButtonClicked() {
        const obj = {};
        const StackActions = state(descriptors[4]).StackActions;
        const merged = Object.assign(StackActions.pop());
        obj.source = key.key;
        obj.target = key.key;
        outer1_1.dispatch(obj);
      },
      onNativeDismissCancelled(nativeEvent) {
        const obj = {};
        const StackActions = state(descriptors[4]).StackActions;
        const merged = Object.assign(StackActions.pop(nativeEvent.nativeEvent.dismissCount));
        obj.source = key.key;
        obj.target = key.key;
        outer1_1.dispatch(obj);
      },
      onGestureCancel() {
        outer1_1.emit({ type: "gestureCancel", target: key.key });
      }
    }, key.key);
  });
  return callback2(state(descriptors[7]).ScreenStack, obj);
}
({ Platform, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
function MaybeNestedStack(children) {
  let header;
  let headerHeight;
  let headerShown;
  let headerTopInsetEnabled;
  let options;
  let presentation;
  let route;
  ({ options, route } = children);
  ({ presentation, headerHeight, headerTopInsetEnabled } = children);
  let importDefault;
  let dependencyMap;
  let obj = route(1481);
  ({ header, headerShown } = options);
  let tmp2 = undefined === headerShown;
  if (!tmp2) {
    tmp2 = headerShown;
  }
  importDefault = tmp2;
  dependencyMap = React.useRef(tmp2);
  const items = [tmp2, presentation, route.name];
  const effect = React.useEffect(() => {
    _undefined(table[5])(false, "Dynamically changing 'headerShown' in modals will result in remounting the screen and losing all local state. See options for the screen '" + route.name + "'.");
    table.current = _undefined;
  }, items);
  const items1 = [closure_12.container, , ];
  let tmp6 = "transparentModal" !== presentation;
  if (tmp6) {
    tmp6 = "containedTransparentModal" !== presentation;
  }
  if (tmp6) {
    obj = { backgroundColor: null };
    obj[0] = obj.useTheme().colors.background;
    tmp6 = obj;
  }
  obj = { style: items1, stackPresentation: null, children: null };
  items1[1] = tmp6;
  items1[2] = options.contentStyle;
  let str2 = "push";
  if ("card" !== presentation) {
    str2 = presentation;
  }
  obj[1] = str2;
  obj[2] = children.children;
  return closure_7(importDefault(8384), obj);
}
function SceneView(arg0) {
  let animation;
  let autoHideHomeIndicator;
  let customAnimationOnGesture;
  let descriptor;
  let focused;
  let freezeOnBlur;
  let fullScreenGestureEnabled;
  let gestureEnabled;
  let gestureResponseDistance;
  let header;
  let headerBackButtonMenuEnabled;
  let headerBackground;
  let headerShown;
  let headerTransparent;
  let height;
  let index;
  let keyboardHandlingEnabled;
  let navigation;
  let navigationBarColor;
  let navigationBarHidden;
  let nextDescriptor;
  let onAppear;
  let onDisappear;
  let onDismissed;
  let onGestureCancel;
  let onHeaderBackButtonClicked;
  let onNativeDismissCancelled;
  let onWillAppear;
  let onWillDisappear;
  let options;
  let orientation;
  let presentation;
  let previousDescriptor;
  let route;
  let sheetAllowedDetents;
  let statusBarAnimation;
  let statusBarColor;
  let statusBarHidden;
  let statusBarStyle;
  let statusBarTranslucent;
  let width;
  ({ focused, descriptor, previousDescriptor, nextDescriptor } = arg0);
  let _require;
  ({ route, navigation, options } = descriptor);
  ({ index, onWillDisappear, onWillAppear, onAppear, onDisappear, onDismissed, onHeaderBackButtonClicked, onNativeDismissCancelled, onGestureCancel } = arg0);
  let obj = _require(4631);
  const UNSTABLE_headerInsets = options.UNSTABLE_headerInsets;
  let left;
  if (UNSTABLE_headerInsets != null) {
    left = UNSTABLE_headerInsets.left;
  }
  const UNSTABLE_headerInsets2 = options.UNSTABLE_headerInsets;
  let right;
  if (UNSTABLE_headerInsets2 != null) {
    right = UNSTABLE_headerInsets2.right;
  }
  const UNSTABLE_headerInsets3 = options.UNSTABLE_headerInsets;
  let bottom;
  if (UNSTABLE_headerInsets3 != null) {
    bottom = UNSTABLE_headerInsets3.bottom;
  }
  const animationTypeForReplace = options.animationTypeForReplace;
  let str = "push";
  let str2 = "push";
  if (undefined !== animationTypeForReplace) {
    str2 = animationTypeForReplace;
  }
  const fullScreenGestureShadowEnabled = options.fullScreenGestureShadowEnabled;
  ({ gestureEnabled, header, headerBackButtonMenuEnabled, headerShown, headerBackground, headerTransparent, sheetAllowedDetents } = options);
  let str3 = "large";
  ({ gestureResponseDistance, autoHideHomeIndicator, keyboardHandlingEnabled, navigationBarColor, navigationBarHidden, orientation } = options);
  if (undefined !== sheetAllowedDetents) {
    str3 = sheetAllowedDetents;
  }
  const sheetLargestUndimmedDetent = options.sheetLargestUndimmedDetent;
  let str4 = "all";
  if (undefined !== sheetLargestUndimmedDetent) {
    str4 = sheetLargestUndimmedDetent;
  }
  const sheetGrabberVisible = options.sheetGrabberVisible;
  const sheetCornerRadius = options.sheetCornerRadius;
  let num = -1;
  if (undefined !== sheetCornerRadius) {
    num = sheetCornerRadius;
  }
  const sheetExpandsWhenScrolledToEdge = options.sheetExpandsWhenScrolledToEdge;
  ({ statusBarTranslucent, presentation } = options);
  let str5 = "card";
  ({ statusBarAnimation, statusBarHidden, statusBarStyle, statusBarColor, freezeOnBlur, animation, customAnimationOnGesture, fullScreenGestureEnabled } = options);
  if (undefined !== presentation) {
    str5 = presentation;
  }
  let gestureDirection = options.gestureDirection;
  if (undefined === gestureDirection) {
    let str6 = "vertical";
    if ("card" === str5) {
      str6 = "horizontal";
    }
    gestureDirection = str6;
  }
  gestureDirection = undefined;
  if (nextDescriptor != null) {
    gestureDirection = nextDescriptor.options.gestureDirection;
  }
  if (0 === index) {
    str5 = "card";
  }
  let tmpResult = tmp(1584);
  const safeAreaInsets = tmpResult.useSafeAreaInsets();
  tmpResult = tmp(1584);
  const safeAreaFrame = tmpResult.useSafeAreaFrame();
  let tmp12 = "modal" === str5;
  if (!tmp12) {
    tmp12 = "formSheet" === str5;
  }
  ({ width, height } = safeAreaFrame);
  let obj3 = React;
  const context = React.useContext(tmp(5674).HeaderShownContext);
  let num2 = React.useContext(tmp(5674).HeaderHeightContext);
  let num3 = 0;
  const context1 = React.useContext(tmp(5674).HeaderBackContext);
  if (!context) {
    num3 = safeAreaInsets.top;
  }
  const tmp6 = undefined !== fullScreenGestureShadowEnabled && fullScreenGestureShadowEnabled;
  const tmp7 = undefined !== sheetGrabberVisible && sheetGrabberVisible;
  const tmp8 = undefined === sheetExpandsWhenScrolledToEdge || sheetExpandsWhenScrolledToEdge;
  const tmpResult1 = _require(1481);
  let defaultHeaderHeight = _require(5674).getDefaultHeaderHeight(safeAreaFrame, tmp12, num3);
  const tmp16 = callback(obj3.useState(defaultHeaderHeight), 2);
  _require = tmp16[1];
  let tmp17 = statusBarTranslucent;
  if (typeof statusBarTranslucent !== "T") {
    tmp17 = 0 !== num3;
  }
  if (header) {
    defaultHeaderHeight = tmp16[0];
  }
  let tmp18 = context1;
  if (previousDescriptor) {
    obj = { title: null };
    obj[0] = tmp(5674).getHeaderTitle(previousDescriptor.options, previousDescriptor.route.name);
    tmp18 = obj;
    const tmpResult3 = tmp(5674);
  }
  const tmp19 = tmpResult1.usePreventRemoveContext().preventedRoutes[route.key];
  let preventRemove;
  if (tmp19 != null) {
    preventRemove = tmp19.preventRemove;
  }
  obj = { enabled: true, isNativeStack: true, style: StyleSheet.absoluteFill, hasLargeHeader: null, customAnimationOnSwipe: null, fullScreenSwipeEnabled: null, fullScreenSwipeShadowEnabled: null, gestureEnabled: false, homeIndicatorHidden: null, hideKeyboardOnSwipe: null, navigationBarColor: null, navigationBarHidden: null, replaceAnimation: null, stackPresentation: null, stackAnimation: null, screenOrientation: null, sheetAllowedDetents: null, sheetLargestUndimmedDetent: null, sheetGrabberVisible: null, sheetCornerRadius: null, sheetExpandsWhenScrolledToEdge: null, statusBarAnimation: null, statusBarHidden: null, statusBarStyle: null, statusBarColor: null, statusBarTranslucent: null, swipeDirection: null, transitionDuration: null, onWillDisappear: null, onWillAppear: null, onAppear: null, onDisappear: null, onDismissed: null, onGestureCancel: null, gestureResponseDistance: null, nativeBackButtonDismissalEnabled: false, onHeaderBackButtonClicked: null, preventNativeDismiss: null, onNativeDismissCancelled: null, freezeOnBlur: null, children: null };
  let flag = options.headerLargeTitle;
  if (flag == null) {
    flag = false;
  }
  obj[3] = flag;
  obj[4] = customAnimationOnGesture;
  obj[5] = fullScreenGestureEnabled;
  obj[6] = tmp6;
  obj[8] = autoHideHomeIndicator;
  obj[9] = keyboardHandlingEnabled;
  obj[10] = navigationBarColor;
  obj[11] = navigationBarHidden;
  obj[12] = str2;
  if ("card" !== str5) {
    str = str5;
  }
  obj[13] = str;
  obj[14] = animation;
  obj[15] = orientation;
  obj[16] = str3;
  obj[17] = str4;
  obj[18] = tmp7;
  obj[19] = num;
  obj[20] = tmp8;
  obj[21] = statusBarAnimation;
  obj[22] = statusBarHidden;
  obj[23] = statusBarStyle;
  obj[24] = statusBarColor;
  obj[25] = statusBarTranslucent;
  obj[26] = gestureDirection;
  obj[27] = options.animationDuration;
  obj[28] = onWillDisappear;
  obj[29] = onWillAppear;
  obj[30] = onAppear;
  obj[31] = onDisappear;
  obj[32] = onDismissed;
  obj[33] = onGestureCancel;
  obj[34] = gestureResponseDistance;
  obj[36] = onHeaderBackButtonClicked;
  obj[37] = preventRemove;
  obj[38] = onNativeDismissCancelled;
  obj[39] = freezeOnBlur;
  const obj1 = { value: navigation, children: null };
  const obj2 = { value: route, children: null };
  let tmp22 = context;
  if (!context) {
    tmp22 = false !== headerShown;
  }
  obj3 = { value: tmp22, children: null };
  let tmp25 = defaultHeaderHeight;
  if (false === headerShown) {
    if (num2 == null) {
      num2 = 0;
    }
    tmp25 = num2;
  }
  const obj4 = { value: tmp25, children: null };
  let tmp21Result = null;
  if (null != headerBackground) {
    const items = [closure_12.background, , ];
    let translucent = null;
    if (headerTransparent) {
      translucent = closure_12.translucent;
    }
    const obj5 = { style: null, children: null };
    items[1] = translucent;
    const obj6 = { height: null };
    obj6[0] = defaultHeaderHeight;
    items[2] = obj6;
    obj5[0] = items;
    obj5[1] = headerBackground();
    tmp21Result = tmp21(View, obj5);
    const tmp27 = View;
  }
  const items1 = [tmp21Result, , ];
  const obj7 = { accessibilityElementsHidden: !focused, importantForAccessibility: null, style: null, children: null };
  let str8 = "no-hide-descendants";
  if (focused) {
    str8 = "auto";
  }
  obj7[1] = str8;
  obj7[2] = closure_12.scene;
  const obj8 = { options, route, presentation: str5, headerHeight: defaultHeaderHeight, headerTopInsetEnabled: tmp17, children: null };
  const obj9 = { value: tmp18, children: null };
  const obj10 = { value: obj.useEdgeInsetApplication(false === left, false === right, false === bottom).nextContextValue, children: null };
  obj10[1] = descriptor.render();
  obj9[1] = closure_7(_require(4631).EdgeInsetApplicationContext.Provider, obj10);
  obj8[5] = closure_7(_require(5674).HeaderBackContext.Provider, obj9);
  const items2 = [closure_7(MaybeNestedStack, obj8), ];
  tmp21Result = null;
  if (undefined !== header) {
    tmp21Result = null;
    if (tmp24) {
      const obj11 = { onLayout: null, style: null, children: null };
      obj11[0] = function onLayout(nativeEvent) {
        callback(nativeEvent.nativeEvent.layout.height);
      };
      let absolute = null;
      if (headerTransparent) {
        absolute = tmp30.absolute;
      }
      obj11[1] = absolute;
      const obj12 = { back: null, options: null, route: null, navigation: null };
      obj12[0] = tmp18;
      obj12[1] = options;
      obj12[2] = route;
      obj12[3] = navigation;
      obj11[2] = header(obj12);
      tmp21Result = tmp21(tmp29, obj11);
    }
  }
  items2[1] = tmp21Result;
  obj7[3] = items2;
  items1[1] = closure_8(View, obj7);
  const obj13 = {};
  tmp30 = closure_12;
  const tmpResult2 = _require(5674);
  const merged = Object.assign(options);
  obj13.route = route;
  if (undefined !== preventRemove) {
    headerBackButtonMenuEnabled = !preventRemove;
  }
  obj13.headerBackButtonMenuEnabled = headerBackButtonMenuEnabled;
  obj13.headerShown = undefined === header && headerShown;
  obj13.headerHeight = defaultHeaderHeight;
  let headerBackTitle;
  if (undefined !== options.headerBackTitle) {
    headerBackTitle = options.headerBackTitle;
  }
  obj13.headerBackTitle = headerBackTitle;
  obj13.headerTopInsetEnabled = tmp17;
  obj13.canGoBack = undefined !== tmp18;
  items1[2] = closure_7(importDefault(8385), obj13);
  obj4[1] = items1;
  obj3[1] = closure_8(_require(5674).HeaderHeightContext.Provider, obj4);
  obj2[1] = closure_7(_require(5674).HeaderShownContext.Provider, obj3);
  obj1[1] = closure_7(_require(1481).NavigationRouteContext.Provider, obj2);
  obj[40] = closure_7(_require(1481).NavigationContext.Provider, obj1);
  return closure_7(_require(4631).Screen, obj, route.key);
}
const styles = StyleSheet.create({ container: { flex: 1 }, scene: { flex: 1, flexDirection: "column-reverse" }, absolute: { position: "absolute", top: 0, left: 0, right: 0 }, translucent: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 1, elevation: 1 }, background: { overflow: "hidden" } });

export default function NativeStackView(arg0) {
  let obj = { children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj[0] = callback2(NativeStackViewInner, obj);
  return callback2(require(5674) /* Background */.SafeAreaProviderCompat, obj);
};