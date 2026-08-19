// === Module 6532: CardContainer ===

// Module 6532 (CardContainer)
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const require = fn;
({ StyleSheet, View: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
const styles = StyleSheet.create({ container: { flex: 1 }, header: { zIndex: 1 }, scene: { flex: 1 } });

export const CardContainer = importAllResult.memo(function CardContainerInner(active) {
  active = active.active;
  ({ focused, getPreviousScene, headerHeight, isParentHeaderShown, layout, onCloseRoute: dependencyMap, onOpenRoute: closure_2, onGestureCancel: closure_3, onGestureEnd: closure_4, onGestureStart: closure_5, onTransitionEnd: closure_6, onTransitionStart: closure_7, scene } = active);
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  let headerTitle;
  let href;
  closure_15 = undefined;
  let obj = importAllResult;
  ({ interpolationIndex, index, opening, closing, gesture, modal, getFocusedRoute, hasAbsoluteFloatHeader, onHeaderHeightChange, isNextScreenTransparent, detachCurrentScreen, preloaded, renderHeader, safeAreaInsetBottom, safeAreaInsetLeft, safeAreaInsetRight, safeAreaInsetTop } = active);
  const ref = importAllResult.useRef(null);
  obj1 = active(1501);
  let num = importAllResult.useContext(active(6319).HeaderHeightContext);
  let tmp4 = focused;
  if (focused) {
    tmp4 = false !== scene.descriptor.options.keyboardHandlingEnabled;
  }
  let tmp2Result = tmp2(6533);
  const keyboardManager = tmp2Result.useKeyboardManager({ enabled: tmp4, focused });
  ({ onPageChangeStart: c10, onPageChangeCancel: c11, onPageChangeConfirm: c12 } = keyboardManager);
  tmp2Result = tmp2(1501);
  const items = [scene.progress.next];
  const effect = obj.useEffect(() => {
    let next = scene.progress.next;
    let addListenerResult;
    if (next != null) {
      const addListener = next.addListener;
      if (addListener != null) {
        addListenerResult = addListener((arg0) => {
          const current = ref.current;
          if (current != null) {
            current.setInert(tmp > 0.1);
          }
        });
      }
    }
    active = addListenerResult;
    return () => {
      if (closure_0) {
        const next = scene.progress.next;
        if (next != null) {
          const removeListener = next.removeListener;
          if (removeListener != null) {
            removeListener(tmp);
          }
        }
      }
    };
  }, items);
  ({ presentation, headerMode, headerShown, animation, cardOverlay, cardOverlayEnabled, cardShadowEnabled, cardStyle, cardStyleInterpolator, gestureDirection, gestureEnabled, gestureResponseDistance, gestureVelocityImpact, transitionSpec } = scene.descriptor.options);
  obj = { route: scene.descriptor.route };
  const previousScene = getPreviousScene(obj);
  let tmp8;
  let tmp9;
  if (previousScene) {
    ({ route, options } = previousScene.descriptor);
    headerTitle = tmp2(6319).getHeaderTitle(options, route.name);
    href = tmp2Result1.useLinkBuilder().buildHref(route.name, route.params);
    tmp8 = href;
    tmp9 = headerTitle;
    const tmp2Result2 = tmp2(6319);
  }
  closure_15 = tmp12;
  const items1 = [null != previousScene, tmp9, tmp8];
  const memo = obj.useMemo(() => {
    if (closure_15) {
      const obj = { href: null, title: null };
      obj[0] = href;
      obj[1] = headerTitle;
      return obj;
    }
  }, items1);
  obj = { ref, focused, active, animated: tmp14, isNextScreenTransparent, detachCurrentScreen, children: null };
  obj1 = {
    animated: tmp14,
    interpolationIndex,
    gestureDirection,
    layout,
    insets: { top: safeAreaInsetTop, right: safeAreaInsetRight, bottom: safeAreaInsetBottom, left: safeAreaInsetLeft },
    direction: obj1.useLocale().direction,
    gesture,
    current: scene.progress.current,
    next: scene.progress.next,
    opening,
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
    onTransition(closure_1_2) {
      const closing = closure_1_2.closing;
      const current = ref.current;
      if (current != null) {
        current.setInert(closing);
      }
      if (c12 != null) {
        let obj = { gesture: null, active: null, closing: null };
        obj[0] = closure_1_2.gesture;
        obj[1] = active;
        obj[2] = closing;
        tmp2(obj);
      }
      if (closure_7 != null) {
        obj = { route: null };
        obj[0] = scene.descriptor.route;
        tmp5(obj, closing);
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
    onGestureEnd(arg0, arg1) {
      callback4({ route: scene.descriptor.route });
    },
    gestureEnabled: null,
    gestureResponseDistance: null,
    gestureVelocityImpact: null,
    transitionSpec: null,
    styleInterpolator: null,
    pageOverflowEnabled: null,
    preloaded: null,
    containerStyle: null,
    contentStyle: null,
    children: null
  };
  let tmp16 = 0 !== index;
  if (tmp16) {
    tmp16 = gestureEnabled;
  }
  obj1[20] = tmp16;
  obj1[21] = gestureResponseDistance;
  obj1[22] = gestureVelocityImpact;
  obj1[23] = transitionSpec;
  obj1[24] = cardStyleInterpolator;
  let tmp18 = tmp17;
  if ("float" !== headerMode) {
    tmp18 = "modal" !== presentation;
  }
  obj1[25] = tmp18;
  obj1[26] = preloaded;
  let tmp19 = null;
  if (hasAbsoluteFloatHeader) {
    tmp19 = null;
    if ("screen" !== headerMode) {
      const obj2 = { marginTop: null };
      obj2[0] = headerHeight;
      tmp19 = obj2;
    }
  }
  obj1[27] = tmp19;
  let str3 = "transparent";
  if ("transparentModal" !== presentation) {
    str3 = tmp2Result.useTheme().colors.background;
  }
  const items2 = [{ backgroundColor: str3 }, cardStyle];
  obj1[28] = items2;
  const obj3 = { style: container.container, children: null };
  const obj4 = { value: modal, children: null };
  let renderHeaderResult = null;
  if ("float" !== headerMode) {
    const obj5 = { mode: "screen", layout: null, scenes: null, getPreviousScene: null, getFocusedRoute: null, contentHeight: null, onContentHeightChange: null, style: null };
    obj5[1] = layout;
    const items3 = [previousScene, scene];
    obj5[2] = items3;
    obj5[3] = getPreviousScene;
    obj5[4] = getFocusedRoute;
    obj5[5] = headerHeight;
    obj5[6] = onHeaderHeightChange;
    obj5[7] = container.header;
    renderHeaderResult = renderHeader(obj5);
  }
  const items4 = [renderHeaderResult, ];
  const obj6 = { style: container.scene, children: null };
  const obj7 = { value: memo, children: null };
  if (!isParentHeaderShown) {
    isParentHeaderShown = false !== headerShown;
  }
  const obj8 = { value: isParentHeaderShown, children: null };
  if (false === headerShown) {
    if (num == null) {
      num = 0;
    }
    headerHeight = num;
  }
  tmp2Result1 = active(1501);
  const descriptor = scene.descriptor;
  obj8[1] = callback(active(6319).HeaderHeightContext.Provider, { value: headerHeight, children: descriptor.render() });
  obj7[1] = callback(active(6319).HeaderShownContext.Provider, obj8);
  obj6[1] = callback(active(6319).HeaderBackContext.Provider, obj7);
  items4[1] = callback(closure_3, obj6);
  obj4[1] = items4;
  obj3[1] = callback2(active(6522).ModalPresentationContext.Provider, obj4);
  obj1[29] = callback(closure_3, obj3);
  obj[6] = callback(active(6535).Card, obj1);
  return callback(active(6534).CardA11yWrapper, obj);
});