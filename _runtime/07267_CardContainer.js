// _runtime/07267_CardContainer.js
import Link from "01485_Link.js";
import _mod5848 from "metro/05848__.js";
import ModalPresentationContext from "07257_ModalPresentationContext.js";
import _mod7268 from "metro/07268__.js";
import CardA11yWrapper from "07269_CardA11yWrapper.js";
import _mod7270 from "metro/07270__.js";
import noop from "metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const container = StyleSheet.create({ container: { flex: 1 }, header: { zIndex: 1 }, scene: { flex: 1 } });

export const CardContainer = noop.memo(function CardContainerInner(active) {
  active = active.active;
  ({
    focused,
    getPreviousScene,
    headerHeight,
    isParentHeaderShown,
    layout,
    onCloseRoute: dependencyMap,
    onOpenRoute: noop,
    onGestureCancel: closure_3,
    onGestureEnd: closure_4,
    onGestureStart: closure_5,
    onTransitionEnd: closure_6,
    onTransitionStart: closure_7,
    scene,
  } = active);
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  let headerTitle;
  let href;
  closure_15 = undefined;
  ({
    interpolationIndex,
    index,
    opening,
    closing,
    gesture,
    modal,
    getFocusedRoute,
    hasAbsoluteFloatHeader,
    onHeaderHeightChange,
    isNextScreenTransparent,
    detachCurrentScreen,
    preloaded,
    renderHeader,
    safeAreaInsetBottom,
    safeAreaInsetLeft,
    safeAreaInsetRight,
    safeAreaInsetTop,
  } = active);
  const ref = noop.useRef(null);
  let num = noop.useContext(_mod5848.HeaderHeightContext);
  let tmp4 = focused;
  if (focused) {
    tmp4 = false !== scene.descriptor.options.keyboardHandlingEnabled;
  }
  let obj2 = Link;
  const keyboardManager = _mod7268.useKeyboardManager({ enabled: tmp4, focused });
  ({ onPageChangeStart: c10, onPageChangeCancel: c11, onPageChangeConfirm: c12 } = keyboardManager);
  const tmp2Result = _mod7268;
  const items = [scene.progress.next];
  const effect = noop.useEffect(() => {
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
  ({
    presentation,
    headerMode,
    headerShown,
    animation,
    cardOverlay,
    cardOverlayEnabled,
    cardShadowEnabled,
    cardStyle,
    cardStyleInterpolator,
    gestureDirection,
    gestureEnabled,
    gestureResponseDistance,
    gestureVelocityImpact,
    transitionSpec,
  } = scene.descriptor.options);
  const tmp2Result4 = Link;
  const previousScene = getPreviousScene({ route: scene.descriptor.route });
  let tmp8;
  let tmp9;
  if (previousScene) {
    ({ route, options } = previousScene.descriptor);
    headerTitle = _mod5848.getHeaderTitle(options, route.name);
    href = tmp2Result5.useLinkBuilder().buildHref(route.name, route.params);
    tmp8 = href;
    tmp9 = headerTitle;
    const tmp2Result6 = _mod5848;
  }
  closure_15 = tmp12;
  const items1 = [null != previousScene, tmp9, tmp8];
  const memo = noop.useMemo(() => {
    if (closure_15) {
      const obj = { href, title: headerTitle };
      return obj;
    }
  }, items1);
  const obj4 = {
    ref,
    focused,
    active,
    animated: "none" !== animation,
    isNextScreenTransparent,
    detachCurrentScreen,
    children: null,
  };
  const obj5 = {
    animated: "none" !== animation,
    interpolationIndex,
    gestureDirection,
    layout,
    insets: { top: safeAreaInsetTop, right: safeAreaInsetRight, bottom: safeAreaInsetBottom, left: safeAreaInsetLeft },
    direction: obj2.useLocale().direction,
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
        const obj = { gesture: closing.gesture, active, closing };
        tmp2(obj);
      }
      if (closure_1_7 != null) {
        const obj2 = { route: scene.descriptor.route };
        tmp5(obj2, closing);
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
    children: null,
  };
  let tmp16 = 0 !== index;
  if (tmp16) {
    tmp16 = gestureEnabled;
  }
  obj5.gestureEnabled = tmp16;
  obj5.gestureResponseDistance = gestureResponseDistance;
  obj5.gestureVelocityImpact = gestureVelocityImpact;
  obj5.transitionSpec = transitionSpec;
  obj5.styleInterpolator = cardStyleInterpolator;
  let tmp18 = tmp17;
  if ("float" !== headerMode) {
    tmp18 = "modal" !== presentation;
  }
  obj5.pageOverflowEnabled = tmp18;
  obj5.preloaded = preloaded;
  let tmp19 = null;
  if (hasAbsoluteFloatHeader) {
    tmp19 = null;
    if ("screen" !== headerMode) {
      const obj6 = { marginTop: headerHeight };
      tmp19 = obj6;
    }
  }
  obj5.containerStyle = tmp19;
  let str3 = "transparent";
  if ("transparentModal" !== presentation) {
    str3 = tmp2Result4.useTheme().colors.background;
  }
  const items2 = [{ backgroundColor: str3 }, cardStyle];
  obj5.contentStyle = items2;
  const obj7 = { style: container.container, children: null };
  const obj8 = { value: modal, children: null };
  let renderHeaderResult = null;
  if ("float" !== headerMode) {
    const obj9 = {
      mode: "screen",
      layout,
      scenes: null,
      getPreviousScene: null,
      getFocusedRoute: null,
      contentHeight: null,
      onContentHeightChange: null,
      style: null,
    };
    const items3 = [previousScene, scene];
    obj9.scenes = items3;
    obj9.getPreviousScene = getPreviousScene;
    obj9.getFocusedRoute = getFocusedRoute;
    obj9.contentHeight = headerHeight;
    obj9.onContentHeightChange = onHeaderHeightChange;
    obj9.style = container.header;
    renderHeaderResult = renderHeader(obj9);
  }
  const items4 = [renderHeaderResult];
  const obj10 = { style: container.scene, children: null };
  const obj11 = { value: memo, children: null };
  if (!isParentHeaderShown) {
    isParentHeaderShown = false !== headerShown;
  }
  const obj12 = { value: isParentHeaderShown, children: null };
  if (false === headerShown) {
    if (num == null) {
      num = 0;
    }
    headerHeight = num;
  }
  const obj13 = { value: headerHeight, children: null };
  const descriptor = scene.descriptor;
  obj13.children = descriptor.render();
  obj12.children = React4(_mod5848.HeaderHeightContext.Provider, obj13);
  obj11.children = React4(_mod5848.HeaderShownContext.Provider, obj12);
  obj10.children = React4(_mod5848.HeaderBackContext.Provider, obj11);
  items4[1] = React4(React3, obj10);
  obj8.children = items4;
  obj7.children = hasOwnProperty(ModalPresentationContext.ModalPresentationContext.Provider, obj8);
  obj5.children = React4(React3, obj7);
  obj4.children = React4(_mod7270.Card, obj5);
  return React4(CardA11yWrapper.CardA11yWrapper, obj4);
});
