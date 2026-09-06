// === Module 15053: BountyVideoEndAppStorePanel ===

// Module 15053 (BountyVideoEndAppStorePanel)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import openURLDefault from "openURL" /* 4249 */;
import native from "native" /* 4271 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import timingPresets from "timingPresets" /* 4564 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import AnalyticsActions from "AnalyticsActions" /* 7718 */;
import AppStoreOverlayContent from "AppStoreOverlayContent" /* 11498 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1183 */;

require = fn;
function BountyVideoEndAppStorePanelInner(metadata) {
  metadata = metadata.metadata;
  const sheetHeight = metadata.sheetHeight;
  const revealProgress = metadata.revealProgress;
  const onDismiss = metadata.onDismiss;
  const onInstallPress = metadata.onInstallPress;
  let sharedValue;
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
  let obj = metadata(revealProgress[8]);
  const unmountEffect = obj.useUnmountEffect(onPress);
  let obj1 = metadata(revealProgress[9]);
  class H {
    constructor() {
      obj = { transform: null };
      obj = { translateY: null };
      obj3 = closure_0(closure_2[9]);
      value = revealProgress.get();
      items = [, ];
      items[0] = sheetHeight;
      items[1] = 0;
      obj.translateY = obj3.interpolate(value, [0, 1], items, closure_0(closure_2[9]).Extrapolation.CLAMP);
      items1 = [];
      items1[0] = obj;
      obj.transform = items1;
      return obj;
    }
  }
  obj = { interpolate: metadata(revealProgress[9]).interpolate, revealProgress, sheetHeight, Extrapolation: metadata(revealProgress[9]).Extrapolation };
  H.__closure = obj;
  H.__workletHash = 2597568517005;
  H.__initData = __initData;
  let items1 = [metadata.storeUrl, onInstallPress];
  const animatedStyle = obj1.useAnimatedStyle(H);
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
  let obj3 = metadata(revealProgress[9]);
  sharedValue = obj3.useSharedValue(1);
  const items3 = [sharedValue, onPress, revealProgress, sheetHeight];
  const items4 = [tmp.panel, sheetHeight];
  const memo = onDismiss.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const activeOffsetYResult = Gesture.Pan().activeOffsetY(8);
    const fn = function n() {
      const result = sharedValue.set(revealProgress.get());
    };
    let obj = { dragStartProgress: sharedValue, revealProgress };
    fn.__closure = obj;
    fn.__workletHash = 5755610000059;
    fn.__initData = __initData3;
    const failOffsetXResult = Gesture.Pan().activeOffsetY(8).failOffsetX([-24, 24]);
    const fn2 = function o(translationY) {
      const result = revealProgress.set(Math.max(0, Math.min(1, sharedValue.get() - translationY.translationY / sheetHeight)));
    };
    obj = { revealProgress, dragStartProgress: sharedValue, sheetHeight };
    fn2.__closure = obj;
    fn2.__workletHash = 15072230748689;
    fn2.__initData = __initData2;
    const onBeginResult = Gesture.Pan().activeOffsetY(8).failOffsetX([-24, 24]).onBegin(fn);
    const fn3 = function t(velocityY) {
      if (closure_1_2.get() >= 0.5) {
        if (velocityY.velocityY <= 800) {
          const result = closure_1_2.set(metadata(revealProgress[14]).withTiming(1, metadata(revealProgress[15]).timingStandard));
          const obj2 = metadata(revealProgress[14]);
        }
      }
      metadata(revealProgress[9]).runOnJS(callback)();
    };
    const onUpdateResult = Gesture.Pan().activeOffsetY(8).failOffsetX([-24, 24]).onBegin(fn).onUpdate(fn2);
    fn3.__closure = { revealProgress, DISMISS_PROGRESS_THRESHOLD: 0.5, DISMISS_VELOCITY_THRESHOLD: 800, runOnJS: ReanimatedRexport.runOnJS, handleDismiss, withTiming: timing.withTiming, timingStandard: timingPresets.timingStandard };
    fn3.__workletHash = 11043554169049;
    fn3.__initData = __initData;
    return onUpdateResult.onEnd(fn3);
  }, items3);
  const items5 = [sheetHeight, tmp.root];
  const memo1 = onDismiss.useMemo(() => {
    const items = [closure_5.panel, { height: sheetHeight }];
    return items;
  }, items4);
  obj = {
    style: onDismiss.useMemo(() => {
      const items = [closure_5.root, { height: sheetHeight }];
      return items;
    }, items5),
    children: null
  };
  obj1 = { style: null, children: null };
  const items6 = [memo1, animatedStyle];
  obj1.style = items6;
  const items7 = [onPress(onInstallPress, { style: tmp.scrollBody, contentContainerStyle: tmp.scrollContent, nestedScrollEnabled: true, showsVerticalScrollIndicator: false, keyboardShouldPersistTaps: "handled", children: onPress(metadata(revealProgress[7]).AppStoreOverlayBody, { metadata, onOpenReviews: callback2, onMediaGetGamePress: callback1 }) }), , ];
  obj3 = { gesture: memo, children: null };
  const obj4 = { style: tmp.headerGestureTarget, children: onPress(metadata(revealProgress[16]).ActionSheetHeaderBar, { variant: "overlay", style: tmp.headerBar, onPress }) };
  obj3.children = onPress(closure_5, obj4);
  items7[1] = onPress(metadata(revealProgress[13]).GestureDetector, obj3);
  items7[2] = onPress(metadata(revealProgress[7]).AppStoreOverlayFooter, { onInstallPress: callback1 });
  obj1.children = items7;
  obj.children = sharedValue(sheetHeight(revealProgress[9]).View, obj1);
  return onPress(closure_5, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ACTION_SHEET_BORDER_RADIUS = fn(7151).ACTION_SHEET_BORDER_RADIUS;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { root: { position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 10 }, panel: null, headerBar: null, headerGestureTarget: null, scrollBody: null, scrollContent: null };
createStyles = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, borderTopLeftRadius: ACTION_SHEET_BORDER_RADIUS, borderTopRightRadius: ACTION_SHEET_BORDER_RADIUS, overflow: "hidden", flexDirection: "column" };
createStyles.panel = createStyles;
createStyles.headerBar = { zIndex: 1 };
createStyles.headerGestureTarget = { position: "absolute", top: 0, left: 0, right: 0, height: 48, zIndex: 2 };
createStyles.scrollBody = { flex: 1, minHeight: 0 };
createStyles.scrollContent = { paddingBottom: fn(11502).APP_STORE_OVERLAY_FOOTER_GRADIENT_HEIGHT };
let closure_9 = createStyles.createStyles(createStyles);
const __initData = { code: "function BountyVideoEndAppStorePanelTsx1(){const{interpolate,revealProgress,sheetHeight,Extrapolation}=this.__closure;return{transform:[{translateY:interpolate(revealProgress.get(),[0,1],[sheetHeight,0],Extrapolation.CLAMP)}]};}" };
let closure_11 = { code: "function BountyVideoEndAppStorePanelTsx2(event){const{revealProgress,DISMISS_PROGRESS_THRESHOLD,DISMISS_VELOCITY_THRESHOLD,runOnJS,handleDismiss,withTiming,timingStandard}=this.__closure;if(revealProgress.get()<DISMISS_PROGRESS_THRESHOLD||event.velocityY>DISMISS_VELOCITY_THRESHOLD){runOnJS(handleDismiss)();return;}revealProgress.set(withTiming(1,timingStandard));}" };
let closure_12 = { code: "function BountyVideoEndAppStorePanelTsx3(event){const{revealProgress,dragStartProgress,sheetHeight}=this.__closure;revealProgress.set(Math.max(0,Math.min(1,dragStartProgress.get()-event.translationY/sheetHeight)));}" };
let closure_13 = { code: "function BountyVideoEndAppStorePanelTsx4(){const{dragStartProgress,revealProgress}=this.__closure;dragStartProgress.set(revealProgress.get());}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideoEndAppStorePanel.tsx");

export default function BountyVideoEndAppStorePanel(arg0) {
  let obj = initialize;
  const items = [ThemeStore];
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  obj = { theme: stateFromStores, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.children = React5(BountyVideoEndAppStorePanelInner, obj);
  return React5(native.ThemeContextProvider, obj);
};