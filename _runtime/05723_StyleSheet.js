// _runtime/05723_StyleSheet.js
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let error;
let metroImportAll;
const require = arg1;
let c4 = importAllResult;
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
const styles = StyleSheet.create({ container: { flex: 1, flexDirection: "column-reverse" }, scene: { flex: 1 } });

export default importAllResult.memo(function CardContainer(active) {
  let StyleSheet;
  let View;
  let animationEnabled;
  let c10;
  let c11;
  let c12;
  let c9;
  let cardOverlay;
  let cardOverlayEnabled;
  let cardShadowEnabled;
  let cardStyle;
  let cardStyleInterpolator;
  let closing;
  let _slicedToArray;
  let closure_4;
  let closure_7;
  let dependencyMap;
  let detachCurrentScreen;
  let focused;
  let gesture;
  let gestureDirection;
  let gestureEnabled;
  let gestureResponseDistance;
  let gestureVelocityImpact;
  let getFocusedRoute;
  let getPreviousScene;
  let hasAbsoluteFloatHeader;
  let headerDarkContent;
  let headerHeight;
  let headerMode;
  let headerShown;
  let importDefault;
  let index;
  let interpolationIndex;
  let isNextScreenTransparent;
  let isParentHeaderShown;
  let layout;
  let modal;
  let onHeaderHeightChange;
  let options2;
  let presentation;
  let renderHeader;
  let renderScene;
  let route;
  let safeAreaInsetBottom;
  let safeAreaInsetLeft;
  let safeAreaInsetRight;
  let safeAreaInsetTop;
  let scene;
  let tmp7;
  let transitionSpec;
  active = active.active;
  ({ focused, getPreviousScene, headerHeight, isParentHeaderShown, layout, onCloseRoute: importDefault, onOpenRoute: dependencyMap, onGestureCancel: _slicedToArray, onGestureEnd: closure_4, onGestureStart: StyleSheet, onTransitionEnd: View, onTransitionStart: closure_7, scene } = active);
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  let headerTitle;
  let obj = importAllResult;
  ({ interpolationIndex, index, closing, gesture, modal, getFocusedRoute, headerDarkContent, hasAbsoluteFloatHeader, onHeaderHeightChange, isNextScreenTransparent, detachCurrentScreen, renderHeader, renderScene, safeAreaInsetBottom, safeAreaInsetLeft, safeAreaInsetRight, safeAreaInsetTop } = active);
  let num = importAllResult.useContext(active(5674).HeaderHeightContext);
  const items = [scene.descriptor];
  const tmp4 = require("05724_useKeyboardManager.js");
  ({ onPageChangeStart: c9, onPageChangeCancel: c10, onPageChangeConfirm: c11 } = require("05724_useKeyboardManager.js")(importAllResult.useCallback(() => {
    let navigation;
    let options;
    ({ navigation, options } = scene.descriptor);
    let isFocusedResult = navigation.isFocused();
    if (isFocusedResult) {
      isFocusedResult = false !== options.keyboardHandlingEnabled;
    }
    return isFocusedResult;
  }, items)));
  let obj1 = active(1481);
  let str = "box-none";
  const tmp4Result = require("05724_useKeyboardManager.js")(importAllResult.useCallback(() => {
    let navigation;
    let options;
    ({ navigation, options } = scene.descriptor);
    let isFocusedResult = navigation.isFocused();
    if (isFocusedResult) {
      isFocusedResult = false !== options.keyboardHandlingEnabled;
    }
    return isFocusedResult;
  }, items));
  [tmp7, c12] = callback(importAllResult.useState("box-none"), 2);
  const items1 = [tmp7, scene.progress.next];
  const effect = importAllResult.useEffect(() => {
    let next = scene.progress.next;
    let addListenerResult;
    if (next != null) {
      const addListener = next.addListener;
      if (addListener != null) {
        addListenerResult = addListener((value) => {
          let str = "none";
          if (value.value <= 0.1) {
            str = "box-none";
          }
          closure_12(str);
        });
      }
    }
    const active = addListenerResult;
    return () => {
      if (closure_0) {
        const next = outer1_8.progress.next;
        if (next != null) {
          const removeListener = next.removeListener;
          if (removeListener != null) {
            removeListener(tmp);
          }
        }
      }
    };
  }, items1);
  const options = scene.descriptor.options;
  ({ presentation, headerMode, headerShown } = options);
  obj = { route: scene.descriptor.route };
  ({ animationEnabled, cardOverlay, cardOverlayEnabled, cardShadowEnabled, cardStyle, cardStyleInterpolator, gestureDirection, gestureEnabled, gestureResponseDistance, gestureVelocityImpact, transitionSpec } = options);
  const previousScene = getPreviousScene(obj);
  let tmp10;
  if (previousScene) {
    ({ options: options2, route } = previousScene.descriptor);
    headerTitle = tmp(5674).getHeaderTitle(options2, route.name);
    tmp10 = headerTitle;
    const tmpResult = tmp(5674);
  }
  const items2 = [tmp10];
  const memo = obj.useMemo(() => {
    let tmp2;
    if (undefined !== headerTitle) {
      const obj = { title: null };
      obj[0] = tmp;
      tmp2 = obj;
    }
    return tmp2;
  }, items2);
  obj = {
    interpolationIndex,
    gestureDirection,
    layout,
    insets: { top: safeAreaInsetTop, right: safeAreaInsetRight, bottom: safeAreaInsetBottom, left: safeAreaInsetLeft },
    gesture,
    current: scene.progress.current,
    next: scene.progress.next,
    closing,
    onOpen() {
      const route = scene.descriptor.route;
      callback6({ route }, false);
      callback2({ route });
    },
    onClose() {
      const route = scene.descriptor.route;
      callback6({ route }, true);
      callback({ route });
    },
    overlay: cardOverlay,
    overlayEnabled: cardOverlayEnabled,
    shadowEnabled: cardShadowEnabled,
    onTransition(closing) {
      closing = closing.closing;
      if (closing.gesture) {
        if (active) {
          if (closing) {
            if (c11 != null) {
              tmp8(false);
            }
          }
        }
        if (c10 != null) {
          tmp5();
        }
      } else if (c11 != null) {
        tmp(true);
      }
      if (closure_7 != null) {
        const obj = { route: null };
        obj[0] = scene.descriptor.route;
        tmp11(obj, closing);
      }
    },
    onGestureBegin() {
      _undefined();
      callback5({ route: scene.descriptor.route });
    },
    onGestureCanceled() {
      _undefined2();
      callback3({ route: scene.descriptor.route });
    },
    onGestureEnd() {
      callback4({ route: scene.descriptor.route });
    },
    gestureEnabled: null,
    gestureResponseDistance: null,
    gestureVelocityImpact: null,
    transitionSpec: null,
    styleInterpolator: null,
    accessibilityElementsHidden: null,
    importantForAccessibility: null,
    pointerEvents: null,
    pageOverflowEnabled: null,
    headerDarkContent: null,
    containerStyle: null,
    contentStyle: null,
    style: null,
    children: null
  };
  let tmp15 = 0 !== index;
  const tmp6 = callback(importAllResult.useState("box-none"), 2);
  if (tmp15) {
    tmp15 = gestureEnabled;
  }
  obj[17] = tmp15;
  obj[18] = gestureResponseDistance;
  obj[19] = gestureVelocityImpact;
  obj[20] = transitionSpec;
  obj[21] = cardStyleInterpolator;
  obj[22] = !focused;
  let str2 = "no-hide-descendants";
  if (focused) {
    str2 = "auto";
  }
  obj[23] = str2;
  if (!active) {
    str = tmp7;
  }
  obj[24] = str;
  let tmp17 = tmp16;
  if ("float" !== headerMode) {
    tmp17 = "modal" !== presentation;
  }
  obj[25] = tmp17;
  obj[26] = headerDarkContent;
  let tmp18 = null;
  if (hasAbsoluteFloatHeader) {
    tmp18 = null;
    if ("screen" !== headerMode) {
      obj1 = { marginTop: null };
      obj1[0] = headerHeight;
      tmp18 = obj1;
    }
  }
  obj[27] = tmp18;
  let str5 = "transparent";
  if ("transparentModal" !== presentation) {
    str5 = obj1.useTheme().colors.background;
  }
  const items3 = [{ backgroundColor: str5 }, cardStyle];
  obj[28] = items3;
  const obj2 = { overflow: "hidden", display: null };
  if (false === animationEnabled) {
    if (false === isNextScreenTransparent) {
      if (false !== detachCurrentScreen) {
        let str7 = "none";
      }
      obj2[1] = str7;
      const items4 = [obj2, StyleSheet.absoluteFill];
      obj[29] = items4;
      const obj3 = { style: null, children: null };
      obj3[0] = c9.container;
      const obj4 = { value: null, children: null };
      obj4[0] = modal;
      const obj5 = { style: null, children: null };
      obj5[0] = c9.scene;
      const obj6 = { value: null, children: null };
      obj6[0] = memo;
      if (!isParentHeaderShown) {
        isParentHeaderShown = false !== headerShown;
      }
      const obj7 = { value: null, children: null };
      obj7[0] = isParentHeaderShown;
      if (!headerShown) {
        if (num == null) {
          num = 0;
        }
        headerHeight = num;
      }
      const obj8 = { value: null, children: null };
      obj8[0] = headerHeight;
      const obj9 = { route: null };
      obj9[0] = scene.descriptor.route;
      obj8[1] = renderScene(obj9);
      obj7[1] = tmp13(tmp(5674).HeaderHeightContext.Provider, obj8);
      obj6[1] = tmp13(tmp(5674).HeaderShownContext.Provider, obj7);
      obj5[1] = tmp13(tmp(5674).HeaderBackContext.Provider, obj6);
      const items5 = [tmp13(View, obj5), ];
      let renderHeaderResult = null;
      if (tmp16) {
        const obj10 = { mode: "screen", layout: null, scenes: null, getPreviousScene: null, getFocusedRoute: null, onContentHeightChange: null };
        obj10[1] = layout;
        const items6 = [previousScene, scene];
        obj10[2] = items6;
        obj10[3] = getPreviousScene;
        obj10[4] = getFocusedRoute;
        obj10[5] = onHeaderHeightChange;
        renderHeaderResult = renderHeader(obj10);
      }
      items5[1] = renderHeaderResult;
      obj4[1] = items5;
      obj3[1] = scene(tmp3(5700).Provider, obj4);
      obj[30] = tmp13(View, obj3);
      return tmp13(tmp3Result, obj);
    }
  }
  str7 = "flex";
});