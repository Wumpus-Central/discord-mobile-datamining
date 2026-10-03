// === Module 14857: BountyVideoEndAppStorePanel ===

// Module 14857 (BountyVideoEndAppStorePanel)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import openURLDefault from "openURL" /* 4559 */;
import native from "native" /* 4589 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import timingPresets from "timingPresets" /* 4894 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6140 */;
import AnalyticsActions from "AnalyticsActions" /* 7202 */;
import AppStoreOverlayContent from "AppStoreOverlayContent" /* 10920 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1193 */;

require = fn;
function BountyVideoEndAppStorePanelInner(metadata) {
  metadata = metadata.metadata;
  const sheetHeight = metadata.sheetHeight;
  const revealProgress = metadata.revealProgress;
  const onDismiss = metadata.onDismiss;
  const onInstallPress = metadata.onInstallPress;
  let sharedValue;
  ({ onOverlaySurfaceClick, onCarouselScroll } = metadata);
  const tmp = closure_9();
  closure_5 = tmp;
  onDismiss.useRef(false);
  let items = [onDismiss];
  const onPress = onDismiss.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      onDismiss();
    }
  }, items);
  const unmountEffect = metadata(revealProgress[8]).useUnmountEffect(onPress);
  let obj = metadata(revealProgress[8]);
  class A {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: null };
      obj3 = closure_0(closure_2[9]);
      value = revealProgress.get();
      items = [, ];
      items[0] = sheetHeight;
      items[1] = 0;
      obj1.translateY = obj3.interpolate(value, [0, 1], items, closure_0(closure_2[9]).Extrapolation.CLAMP);
      items1 = [];
      items1[0] = obj1;
      obj.transform = items1;
      return obj;
    }
  }
  let obj2 = metadata(revealProgress[9]);
  A.__closure = { interpolate: metadata(revealProgress[9]).interpolate, revealProgress, sheetHeight, Extrapolation: metadata(revealProgress[9]).Extrapolation };
  A.__workletHash = 2597568517005;
  A.__initData = __initData;
  let items1 = [metadata.storeUrl, onInstallPress];
  const animatedStyle = obj2.useAnimatedStyle(A);
  const callback1 = onDismiss.useCallback(() => {
    onInstallPress(AnalyticsActions.AppStoreOverlaySurfaces.MAIN_CTA);
    openURLDefault(metadata.storeUrl);
  }, items1);
  const items2 = [, , , ];
  ({ appId: arr3[0], platform: arr3[1], storeUrl: arr3[2] } = metadata);
  items2[3] = onInstallPress;
  const callback2 = onDismiss.useCallback(() => {
    onInstallPress(AnalyticsActions.AppStoreOverlaySurfaces.RATING_STAT);
    AppStoreOverlayContent.openAppStoreReviews(metadata.storeUrl, metadata.platform, metadata.appId);
  }, items2);
  let obj3 = { interpolate: metadata(revealProgress[9]).interpolate, revealProgress, sheetHeight, Extrapolation: metadata(revealProgress[9]).Extrapolation };
  sharedValue = metadata(revealProgress[9]).useSharedValue(1);
  const items3 = [sharedValue, onPress, revealProgress, sheetHeight];
  const items4 = [tmp.panel, sheetHeight];
  const memo = onDismiss.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const activeOffsetYResult = Gesture.Pan().activeOffsetY(8);
    const fn = function n() {
      const result = sharedValue.set(revealProgress.get());
    };
    fn.__closure = { dragStartProgress: sharedValue, revealProgress };
    fn.__workletHash = 5755610000059;
    fn.__initData = __initData3;
    const failOffsetXResult = Gesture.Pan().activeOffsetY(8).failOffsetX([-24, 24]);
    const obj = { dragStartProgress: sharedValue, revealProgress };
    const fn2 = function o(translationY) {
      const result = revealProgress.set(Math.max(0, Math.min(1, sharedValue.get() - translationY.translationY / sheetHeight)));
    };
    fn2.__closure = { revealProgress, dragStartProgress: sharedValue, sheetHeight };
    fn2.__workletHash = 15072230748689;
    fn2.__initData = __initData2;
    let obj2 = { revealProgress, dragStartProgress: sharedValue, sheetHeight };
    const onBeginResult = Gesture.Pan().activeOffsetY(8).failOffsetX([-24, 24]).onBegin(fn);
    const fn3 = function t(velocityY) {
      if (closure_1_2.get() >= 0.5) {
        if (velocityY.velocityY <= 800) {
          const result = closure_1_2.set(metadata(revealProgress[14]).withTiming(1, metadata(revealProgress[15]).timingStandard));
          const obj2 = metadata(revealProgress[14]);
        }
      }
      metadata(revealProgress[9]).runOnJS(callback)();
      const obj3 = metadata(revealProgress[9]);
    };
    const onUpdateResult = Gesture.Pan().activeOffsetY(8).failOffsetX([-24, 24]).onBegin(fn).onUpdate(fn2);
    fn3.__closure = { revealProgress, DISMISS_PROGRESS_THRESHOLD: 0.5, DISMISS_VELOCITY_THRESHOLD: 800, runOnJS: ReanimatedRexport.runOnJS, handleDismiss, withTiming: timing.withTiming, timingStandard: timingPresets.timingStandard };
    fn3.__workletHash = 1930356737433;
    fn3.__initData = __initData;
    return onUpdateResult.onEnd(fn3);
  }, items3);
  const items5 = [sheetHeight, tmp.root];
  const memo1 = onDismiss.useMemo(() => {
    const items = [closure_5.panel, { height: sheetHeight }];
    return items;
  }, items4);
  const obj5 = {
    style: onDismiss.useMemo(() => {
      const items = [closure_5.root, { height: sheetHeight }];
      return items;
    }, items5),
    children: null
  };
  const obj6 = { style: null, children: null };
  const items6 = [memo1, animatedStyle];
  obj6.style = items6;
  const obj4 = metadata(revealProgress[9]);
  const items7 = [onPress(onInstallPress, { style: tmp.scrollBody, contentContainerStyle: tmp.scrollContent, nestedScrollEnabled: true, showsVerticalScrollIndicator: false, keyboardShouldPersistTaps: "handled", children: onPress(metadata(revealProgress[7]).AppStoreOverlayBody, { metadata, onOpenReviews: callback2, onMediaGetGamePress: callback1, onCarouselScroll, onOverlaySurfaceClick }) }), , ];
  const obj8 = { gesture: memo, children: null };
  const obj9 = { style: tmp.headerGestureTarget, children: onPress(metadata(revealProgress[16]).ActionSheetHeaderBar, { variant: "overlay", style: tmp.headerBar, onPress }) };
  obj8.children = onPress(closure_5, obj9);
  items7[1] = onPress(metadata(revealProgress[13]).GestureDetector, obj8);
  items7[2] = onPress(metadata(revealProgress[7]).AppStoreOverlayFooter, { onInstallPress: callback1 });
  obj6.children = items7;
  obj5.children = sharedValue(sheetHeight(revealProgress[9]).View, obj6);
  return onPress(closure_5, obj5);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ACTION_SHEET_BORDER_RADIUS = fn(6646).ACTION_SHEET_BORDER_RADIUS;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { root: { position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 10 }, panel: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, borderTopLeftRadius: ACTION_SHEET_BORDER_RADIUS, borderTopRightRadius: ACTION_SHEET_BORDER_RADIUS, overflow: "hidden", flexDirection: "column" }, headerBar: { zIndex: 1 }, headerGestureTarget: { position: "absolute", top: 0, left: 0, right: 0, height: 48, zIndex: 2 }, scrollBody: { flex: 1, minHeight: 0 }, scrollContent: null };
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, borderTopLeftRadius: ACTION_SHEET_BORDER_RADIUS, borderTopRightRadius: ACTION_SHEET_BORDER_RADIUS, overflow: "hidden", flexDirection: "column" };
obj2.scrollContent = { paddingBottom: fn(10924).APP_STORE_OVERLAY_FOOTER_GRADIENT_HEIGHT };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function BountyVideoEndAppStorePanelTsx1(){const{interpolate,revealProgress,sheetHeight,Extrapolation}=this.__closure;return{transform:[{translateY:interpolate(revealProgress.get(),[0,1],[sheetHeight,0],Extrapolation.CLAMP)}]};}" };
let closure_11 = { code: "function BountyVideoEndAppStorePanelTsx2(event_0){const{revealProgress,DISMISS_PROGRESS_THRESHOLD,DISMISS_VELOCITY_THRESHOLD,runOnJS,handleDismiss,withTiming,timingStandard}=this.__closure;if(revealProgress.get()<DISMISS_PROGRESS_THRESHOLD||event_0.velocityY>DISMISS_VELOCITY_THRESHOLD){runOnJS(handleDismiss)();return;}revealProgress.set(withTiming(1,timingStandard));}" };
let closure_12 = { code: "function BountyVideoEndAppStorePanelTsx3(event){const{revealProgress,dragStartProgress,sheetHeight}=this.__closure;revealProgress.set(Math.max(0,Math.min(1,dragStartProgress.get()-event.translationY/sheetHeight)));}" };
let closure_13 = { code: "function BountyVideoEndAppStorePanelTsx4(){const{dragStartProgress,revealProgress}=this.__closure;dragStartProgress.set(revealProgress.get());}" };
const ReactCompilerGating = fn(558);
let obj4 = { paddingBottom: fn(10924).APP_STORE_OVERLAY_FOOTER_GRADIENT_HEIGHT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideoEndAppStorePanel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore];
    const fn = function n() {
      return theme.theme;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== arg0) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    const tmp14 = React5(BountyVideoEndAppStorePanelInner, obj2);
    cResult[2] = arg0;
    cResult[3] = tmp14;
    let tmp8 = tmp14;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === tmp8) {
      let tmp15 = cResult[6];
    }
    return tmp15;
  }
  const tmp16 = React5(native.ThemeContextProvider, { theme: stateFromStores, children: tmp8 });
  cResult[4] = stateFromStores;
  cResult[5] = tmp8;
  cResult[6] = tmp16;
  tmp15 = tmp16;
  const tmpResult = initialize;
}) : ((arg0) => {
  const items = [ThemeStore];
  const stateFromStores = initialize.useStateFromStores(items, () => theme.theme);
  const obj2 = { theme: stateFromStores, children: null };
  const merged = Object.assign(arg0);
  obj2.children = React5(BountyVideoEndAppStorePanelInner, {});
  return React5(native.ThemeContextProvider, obj2);
});