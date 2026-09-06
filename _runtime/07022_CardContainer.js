// === Module 7022: CardContainer ===

// Module 7022 (CardContainer)
import Link from "Link" /* 1484 */;
import _mod5631 from "module_5631" /* 5631 */;
import ModalPresentationContext from "ModalPresentationContext" /* 7012 */;
import CardA11yWrapper from "CardA11yWrapper" /* 7024 */;
import _mod7025 from "module_7025" /* 7025 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const container = StyleSheet.create({ container: { flex: 1 }, header: { zIndex: 1 }, scene: { flex: 1 } });

export const CardContainer = noop.memo(function CardContainerInner(active) {
  active = active.active;
  ({ focused, getPreviousScene, headerHeight, isParentHeaderShown, layout, onCloseRoute: dependencyMap, onOpenRoute: noop, onGestureCancel: closure_3, onGestureEnd: closure_4, onGestureStart: closure_5, onTransitionEnd: closure_6, onTransitionStart: closure_7, scene } = active);
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  let headerTitle;
  let href;
  closure_15 = undefined;
  let obj = noop;
  ({ interpolationIndex, index, opening, closing, gesture, modal, getFocusedRoute, hasAbsoluteFloatHeader, onHeaderHeightChange, isNextScreenTransparent, detachCurrentScreen, preloaded, renderHeader, safeAreaInsetBottom, safeAreaInsetLeft, safeAreaInsetRight, safeAreaInsetTop } = active);
  const ref = noop.useRef(null);
  let obj1 = Link;
  let num = noop.useContext(_mod5631.HeaderHeightContext);
  let tmp4 = focused;
  if (focused) {
    tmp4 = false !== scene.descriptor.options.keyboardHandlingEnabled;
  }
  let tmp2Result = tmp2(7023);
  const keyboardManager = tmp2Result.useKeyboardManager({ enabled: tmp4, focused });
  ({ onPageChangeStart: c10, onPageChangeCancel: c11, onPageChangeConfirm: c12 } = keyboardManager);
  tmp2Result = tmp2(1484);
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
      if (addListenerResult) {
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
    headerTitle = tmp2(5631).getHeaderTitle(options, route.name);
    href = tmp2Result1.useLinkBuilder().buildHref(route.name, route.params);
    tmp8 = href;
    tmp9 = headerTitle;
    const tmp2Result2 = tmp2(5631);
  }
  closure_15 = tmp12;
  const items1 = [null != previousScene, tmp9, tmp8];
  const memo = obj.useMemo(() => {
    if (closure_15) {
      const obj = { href, title: headerTitle };
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
      container({ route }, false);
      noop({ route });
    },
    onClose() {
      const route = scene.descriptor.route;
      container({ route }, true);
      dependencyMap({ route });
    },
    overlay: cardOverlay,
    overlayEnabled: cardOverlayEnabled,
    shadowEnabled: cardShadowEnabled,
    onTransition(closing) {
      closing = closing.closing;
      const current = ref.current;
      if (current != null) {
        current.setInert(closing);
      }
      if (c12 != null) {
        let obj = { gesture: closing.gesture, active, closing };
        tmp2(obj);
      }
      if (closure_1_7 != null) {
        obj = { route: scene.descriptor.route };
        tmp5(obj, closing);
      }
    },
    onGestureBegin() {
      _undefined();
      closure_1_5({ route: scene.descriptor.route });
    },
    onGestureCanceled() {
      _undefined2();
      closure_1_3({ route: scene.descriptor.route });
    },
    onGestureEnd() {
      closure_1_4({ route: scene.descriptor.route });
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
  obj1.gestureEnabled = tmp16;
  obj1.gestureResponseDistance = gestureResponseDistance;
  obj1.gestureVelocityImpact = gestureVelocityImpact;
  obj1.transitionSpec = transitionSpec;
  obj1.styleInterpolator = cardStyleInterpolator;
  let tmp18 = tmp17;
  if ("float" !== headerMode) {
    tmp18 = "modal" !== presentation;
  }
  obj1.pageOverflowEnabled = tmp18;
  obj1.preloaded = preloaded;
  let tmp19 = null;
  if (hasAbsoluteFloatHeader) {
    tmp19 = null;
    if ("screen" !== headerMode) {
      const obj2 = { marginTop: headerHeight };
      tmp19 = obj2;
    }
  }
  obj1.containerStyle = tmp19;
  let str3 = "transparent";
  if ("transparentModal" !== presentation) {
    str3 = tmp2Result.useTheme().colors.background;
  }
  const items2 = [{ backgroundColor: str3 }, cardStyle];
  obj1.contentStyle = items2;
  const obj3 = { style: container.container, children: null };
  const obj4 = { value: modal, children: null };
  let renderHeaderResult = null;
  if ("float" !== headerMode) {
    const obj5 = { mode: "screen", layout, scenes: null, getPreviousScene: null, getFocusedRoute: null, contentHeight: null, onContentHeightChange: null, style: null };
    const items3 = [previousScene, scene];
    obj5.scenes = items3;
    obj5.getPreviousScene = getPreviousScene;
    obj5.getFocusedRoute = getFocusedRoute;
    obj5.contentHeight = headerHeight;
    obj5.onContentHeightChange = onHeaderHeightChange;
    obj5.style = tmp21.header;
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
  const obj9 = { value: headerHeight, children: null };
  const descriptor = scene.descriptor;
  obj9.children = descriptor.render();
  obj8.children = React4(_mod5631.HeaderHeightContext.Provider, obj9);
  obj7.children = React4(_mod5631.HeaderShownContext.Provider, obj8);
  obj6.children = React4(_mod5631.HeaderBackContext.Provider, obj7);
  items4[1] = React4(React3, obj6);
  obj4.children = items4;
  obj3.children = hasOwnProperty(ModalPresentationContext.ModalPresentationContext.Provider, obj4);
  obj1.children = React4(React3, obj3);
  obj.children = React4(_mod7025.Card, obj1);
  return React4(CardA11yWrapper.CardA11yWrapper, obj);
});