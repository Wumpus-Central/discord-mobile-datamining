// === Module 6518: CardContainer ===

// Module 6518 (CardContainer)
import Link from "Link" /* 1491 */;
import _mod6019 from "module_6019" /* 6019 */;
import react2 from "react" /* 6508 */;
import react3 from "react" /* 6519 */;
import CardA11yWrapper2 from "CardA11yWrapper" /* 6520 */;
import Card2 from "Card" /* 6521 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
({ StyleSheet, View: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const memoResult = react.memo(function CardContainerInner(active) {
  let Card;
  let Provider;
  let Provider2;
  let Provider3;
  let Provider4;
  let animation;
  let c10;
  let c11;
  let c12;
  let cardOverlay;
  let cardOverlayEnabled;
  let cardShadowEnabled;
  let cardStyle;
  let cardStyleInterpolator;
  let closing;
  let closure_129_1;
  let closure_129_2;
  let closure_129_3;
  let closure_129_4;
  let closure_129_5;
  let closure_129_6;
  let closure_129_7;
  let descriptor;
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
  let headerHeight;
  let headerMode;
  let headerShown;
  let index;
  let interpolationIndex;
  let isNextScreenTransparent;
  let isParentHeaderShown;
  let items2;
  let items3;
  let items4;
  let layout;
  let modal;
  let obj11;
  let obj12;
  let obj13;
  let obj5;
  let obj7;
  let obj8;
  let onHeaderHeightChange;
  let opening;
  let options;
  let preloaded;
  let presentation;
  let renderHeader;
  let route;
  let safeAreaInsetBottom;
  let safeAreaInsetLeft;
  let safeAreaInsetRight;
  let safeAreaInsetTop;
  let scene;
  let tmp16;
  let tmp18;
  let tmp19;
  let transitionSpec;
  active = active.active;
  ({ focused, getPreviousScene, headerHeight, isParentHeaderShown, layout, onCloseRoute: closure_129_1, onOpenRoute: closure_129_2, onGestureCancel: closure_129_3, onGestureEnd: closure_129_4, onGestureStart: closure_129_5, onTransitionEnd: closure_129_6, onTransitionStart: closure_129_7, scene } = active);
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  let headerTitle;
  let href;
  let closure_15;
  ({ interpolationIndex, index, opening, closing, gesture, modal, getFocusedRoute, hasAbsoluteFloatHeader, onHeaderHeightChange, isNextScreenTransparent, detachCurrentScreen, preloaded, renderHeader, safeAreaInsetBottom, safeAreaInsetLeft, safeAreaInsetRight, safeAreaInsetTop } = active);
  const ref = react.useRef(null);
  let obj2 = Link;
  const direction = obj2.useLocale().direction;
  let num = react.useContext(_mod6019.HeaderHeightContext);
  const tmp4 = focused && false !== scene.descriptor.options.keyboardHandlingEnabled;
  const tmp2Result = react3;
  const keyboardManager = tmp2Result.useKeyboardManager({ enabled: tmp4, focused });
  ({ onPageChangeStart: c10, onPageChangeCancel: c11, onPageChangeConfirm: c12 } = keyboardManager);
  const items = [scene.progress.next];
  const tmp2Result4 = Link;
  const colors = tmp2Result4.useTheme().colors;
  const effect = react.useEffect(() => {
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
      if (active) {
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
  const obj3 = { route: scene.descriptor.route };
  const tmp2Result5 = Link;
  const buildHref = tmp2Result5.useLinkBuilder().buildHref;
  const previousScene = getPreviousScene(obj3);
  let tmp8;
  let tmp9;
  if (previousScene) {
    ({ route, options } = previousScene.descriptor);
    const tmp2Result6 = _mod6019;
    headerTitle = tmp2Result6.getHeaderTitle(options, route.name);
    href = buildHref(route.name, route.params);
    tmp8 = href;
    tmp9 = headerTitle;
  }
  closure_15 = tmp12;
  const items1 = [null != previousScene, tmp9, tmp8];
  const memo = react.useMemo(() => {
    if (closure_15) {
      return { href, title: headerTitle };
    }
  }, items1);
  const obj4 = { ref, focused, active, animated: "none" !== animation, isNextScreenTransparent, detachCurrentScreen, children: React3(Card, obj5) };
  obj5 = {
    animated: "none" !== animation,
    interpolationIndex,
    gestureDirection,
    layout,
    insets: { top: safeAreaInsetTop, right: safeAreaInsetRight, bottom: safeAreaInsetBottom, left: safeAreaInsetLeft },
    direction,
    gesture,
    current: scene.progress.current,
    next: scene.progress.next,
    opening,
    closing,
    onOpen() {
      const route = scene.descriptor.route;
      closure_1_6({ route }, false);
      closure_1_2({ route });
    },
    onClose() {
      const route = scene.descriptor.route;
      closure_1_6({ route }, true);
      closure_1_1({ route });
    },
    overlay: cardOverlay,
    overlayEnabled: cardOverlayEnabled,
    shadowEnabled: cardShadowEnabled,
    onTransition(dependencyMap) {
      const closing = dependencyMap.closing;
      const current = ref.current;
      const gesture = dependencyMap.gesture;
      if (current != null) {
        current.setInert(closing);
      }
      const route = scene.descriptor.route;
      if (c12 != null) {
        const obj = { gesture, active, closing };
        tmp2(obj);
      }
      if (closure_1_7 != null) {
        const obj2 = { route };
        tmp5(obj2, closing);
      }
    },
    onGestureBegin() {
      const route = scene.descriptor.route;
      _undefined();
      closure_1_5({ route });
    },
    onGestureCanceled() {
      const route = scene.descriptor.route;
      _undefined2();
      closure_1_3({ route });
    },
    onGestureEnd() {
      const obj = { route: scene.descriptor.route };
      closure_1_4(obj);
    },
    gestureEnabled: tmp16,
    gestureResponseDistance,
    gestureVelocityImpact,
    transitionSpec,
    styleInterpolator: cardStyleInterpolator,
    pageOverflowEnabled: tmp18,
    preloaded,
    containerStyle: tmp19,
    contentStyle: items2,
    children: React3(_false, obj7)
  };
  tmp16 = 0 !== index;
  const CardA11yWrapper = CardA11yWrapper2.CardA11yWrapper;
  Card = Card2.Card;
  if (tmp16) {
    tmp16 = gestureEnabled;
  }
  tmp19 = null;
  tmp18 = tmp17 && "modal" !== presentation;
  if (hasAbsoluteFloatHeader) {
    tmp19 = null;
    if ("screen" !== headerMode) {
      tmp19 = { marginTop: headerHeight };
      const obj6 = { marginTop: headerHeight };
    }
  }
  let str3 = "transparent";
  if ("transparentModal" !== presentation) {
    str3 = colors.background;
  }
  items2 = [{ backgroundColor: str3 }, cardStyle];
  obj7 = { style: container.container, children: hasOwnProperty(Provider, obj8) };
  let renderHeaderResult = null;
  obj8 = { value: modal, children: items4 };
  Provider = react2.ModalPresentationContext.Provider;
  if ("float" !== headerMode) {
    const obj9 = { mode: "screen", layout, scenes: items3, getPreviousScene, getFocusedRoute, contentHeight: headerHeight, onContentHeightChange: onHeaderHeightChange, style: container.header };
    items3 = [previousScene, scene];
    renderHeaderResult = renderHeader(obj9);
  }
  items4 = [renderHeaderResult, ];
  const obj10 = { style: container.scene, children: React3(Provider2, obj11) };
  obj11 = { value: memo, children: React3(Provider3, obj12) };
  Provider2 = _mod6019.HeaderBackContext.Provider;
  Provider3 = _mod6019.HeaderShownContext.Provider;
  if (!isParentHeaderShown) {
    isParentHeaderShown = false !== headerShown;
  }
  obj12 = { value: isParentHeaderShown, children: React3(Provider4, obj13) };
  Provider4 = _mod6019.HeaderHeightContext.Provider;
  if (false === headerShown) {
    if (num == null) {
      num = 0;
    }
    headerHeight = num;
  }
  obj13 = { value: headerHeight, children: descriptor.render() };
  descriptor = scene.descriptor;
  items4[1] = React3(_false, obj10);
  return React3(CardA11yWrapper, obj4);
});
const container = StyleSheet.create({ container: { flex: 1 }, header: { zIndex: 1 }, scene: { flex: 1 } });

export const CardContainer = memoResult;