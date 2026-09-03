// === Module 14896: BountyVideoEndAppStorePanelInner ===

// Module 14896 (BountyVideoEndAppStorePanelInner)
import initialize from "initialize" /* 586 */;
import ThemesDefault from "Themes" /* 709 */;
import ManaContext from "ManaContext" /* 4204 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "handleThemeChange" /* 1301 */;
import { ACTION_SHEET_BORDER_RADIUS } from "ACTION_SHEET_START_HEIGHT_RATIO" /* 5632 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function BountyVideoEndAppStorePanelInner(metadata) {
  metadata = metadata.metadata;
  const sheetHeight = metadata.sheetHeight;
  const revealProgress = metadata.revealProgress;
  const onDismiss = metadata.onDismiss;
  const onInstallPress = metadata.onInstallPress;
  closure_5 = undefined;
  closure_6 = undefined;
  let callback;
  let sharedValue;
  const tmp = callback2();
  closure_5 = tmp;
  closure_6 = onDismiss.useRef(false);
  let items = [onDismiss];
  callback = onDismiss.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      onDismiss();
    }
  }, items);
  let obj = metadata(revealProgress[8]);
  const unmountEffect = obj.useUnmountEffect(callback);
  obj1 = metadata(revealProgress[9]);
  class H {
    constructor() {
      obj = { transform: null };
      obj = { translateY: null };
      obj3 = metadata(revealProgress[9]);
      value = revealProgress.get();
      items = [, ];
      items[0] = sheetHeight;
      items[1] = 0;
      obj[0] = obj3.interpolate(value, [0, 1], items, metadata(revealProgress[9]).Extrapolation.CLAMP);
      items1 = [];
      items1[0] = obj;
      obj[0] = items1;
      return obj;
    }
  }
  obj = { interpolate: metadata(revealProgress[9]).interpolate, revealProgress, sheetHeight, Extrapolation: metadata(revealProgress[9]).Extrapolation };
  H.__closure = obj;
  H.__workletHash = 2597568517005;
  H.__initData = closure_10;
  let items1 = [metadata.storeUrl, onInstallPress];
  const animatedStyle = obj1.useAnimatedStyle(H);
  const callback1 = onDismiss.useCallback(() => {
    onInstallPress(metadata(revealProgress[10]).AppStoreOverlaySurfaces.MAIN_CTA);
    sheetHeight(revealProgress[11])(metadata.storeUrl);
  }, items1);
  const items2 = [, , , ];
  ({ appId: arr3[0], platform: arr3[1], storeUrl: arr3[2] } = metadata);
  items2[3] = onInstallPress;
  callback2 = onDismiss.useCallback(() => {
    onInstallPress(metadata(revealProgress[10]).AppStoreOverlaySurfaces.RATING_STAT);
    metadata(revealProgress[12]).openAppStoreReviews(metadata.storeUrl, metadata.platform, metadata.appId);
  }, items2);
  let obj3 = metadata(revealProgress[9]);
  sharedValue = obj3.useSharedValue(1);
  const items3 = [sharedValue, callback, revealProgress, sheetHeight];
  const items4 = [tmp.panel, sheetHeight];
  const memo = onDismiss.useMemo(() => {
    const Gesture = metadata(revealProgress[13]).Gesture;
    const PanResult = Gesture.Pan();
    const activeOffsetYResult = Gesture.Pan().activeOffsetY(8);
    const fn = function n() {
      const result = store2.set(store.get());
    };
    let obj = { dragStartProgress: sharedValue, revealProgress };
    fn.__closure = obj;
    fn.__workletHash = 5755610000059;
    fn.__initData = closure_1_13;
    const failOffsetXResult = Gesture.Pan().activeOffsetY(8).failOffsetX([-24, 24]);
    const fn2 = function o(translationY) {
      const result = store.set(Math.max(0, Math.min(1, store2.get() - translationY.translationY / closure_1)));
    };
    obj = { revealProgress, dragStartProgress: sharedValue, sheetHeight };
    fn2.__closure = obj;
    fn2.__workletHash = 15072230748689;
    fn2.__initData = closure_1_12;
    const onBeginResult = Gesture.Pan().activeOffsetY(8).failOffsetX([-24, 24]).onBegin(fn);
    const fn3 = function t(velocityY) {
      if (store.get() >= 0.5) {
        if (velocityY.velocityY <= 800) {
          const result = store.set(closure_1_0(closure_1_2[14]).withTiming(1, closure_1_0(closure_1_2[15]).timingStandard));
          const obj2 = closure_1_0(closure_1_2[14]);
        }
      }
      closure_1_0(closure_1_2[9]).runOnJS(closure_7)();
    };
    const onUpdateResult = Gesture.Pan().activeOffsetY(8).failOffsetX([-24, 24]).onBegin(fn).onUpdate(fn2);
    fn3.__closure = { revealProgress, DISMISS_PROGRESS_THRESHOLD: 0.5, DISMISS_VELOCITY_THRESHOLD: 800, runOnJS: metadata(revealProgress[9]).runOnJS, handleDismiss: callback, withTiming: metadata(revealProgress[14]).withTiming, timingStandard: metadata(revealProgress[15]).timingStandard };
    fn3.__workletHash = 11043554169049;
    fn3.__initData = closure_1_11;
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
  obj1 = { style: items6, children: null };
  items6 = [memo1, animatedStyle];
  const items7 = [callback(onInstallPress, { style: tmp.scrollBody, contentContainerStyle: tmp.scrollContent, nestedScrollEnabled: true, showsVerticalScrollIndicator: false, keyboardShouldPersistTaps: "handled", children: callback(metadata(revealProgress[7]).AppStoreOverlayBody, { metadata, onOpenReviews: callback2, onMediaGetGamePress: callback1 }) }), , ];
  obj3 = { gesture: memo, children: null };
  let obj2 = { style: tmp.scrollBody, contentContainerStyle: tmp.scrollContent, nestedScrollEnabled: true, showsVerticalScrollIndicator: false, keyboardShouldPersistTaps: "handled", children: callback(metadata(revealProgress[7]).AppStoreOverlayBody, { metadata, onOpenReviews: callback2, onMediaGetGamePress: callback1 }) };
  obj3[1] = callback(closure_5, { style: tmp.headerGestureTarget, children: callback(metadata(revealProgress[16]).ActionSheetHeaderBar, obj5) });
  items7[1] = callback(metadata(revealProgress[13]).GestureDetector, obj3);
  items7[2] = callback(metadata(revealProgress[7]).AppStoreOverlayFooter, { onInstallPress: callback1 });
  obj1[1] = items7;
  obj[1] = sharedValue(sheetHeight(revealProgress[9]).View, obj1);
  return callback(closure_5, obj);
}
({ ScrollView: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { root: { position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 10 }, panel: null, headerBar: null, headerGestureTarget: null, scrollBody: null, scrollContent: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, borderTopLeftRadius: ACTION_SHEET_BORDER_RADIUS, borderTopRightRadius: ACTION_SHEET_BORDER_RADIUS, overflow: "hidden", flexDirection: "column" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { zIndex: 1 };
createCacheKey[3] = { position: "absolute", top: 0, left: 0, right: 0, height: 48, zIndex: 2 };
createCacheKey[4] = { flex: 1, minHeight: 0 };
createCacheKey[5] = { paddingBottom: require("APP_STORE_OVERLAY_HEIGHT_RATIO").APP_STORE_OVERLAY_FOOTER_GRADIENT_HEIGHT };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = { code: "function BountyVideoEndAppStorePanelTsx1(){const{interpolate,revealProgress,sheetHeight,Extrapolation}=this.__closure;return{transform:[{translateY:interpolate(revealProgress.get(),[0,1],[sheetHeight,0],Extrapolation.CLAMP)}]};}" };
let closure_11 = { code: "function BountyVideoEndAppStorePanelTsx2(event){const{revealProgress,DISMISS_PROGRESS_THRESHOLD,DISMISS_VELOCITY_THRESHOLD,runOnJS,handleDismiss,withTiming,timingStandard}=this.__closure;if(revealProgress.get()<DISMISS_PROGRESS_THRESHOLD||event.velocityY>DISMISS_VELOCITY_THRESHOLD){runOnJS(handleDismiss)();return;}revealProgress.set(withTiming(1,timingStandard));}" };
let closure_12 = { code: "function BountyVideoEndAppStorePanelTsx3(event){const{revealProgress,dragStartProgress,sheetHeight}=this.__closure;revealProgress.set(Math.max(0,Math.min(1,dragStartProgress.get()-event.translationY/sheetHeight)));}" };
let closure_13 = { code: "function BountyVideoEndAppStorePanelTsx4(){const{dragStartProgress,revealProgress}=this.__closure;dragStartProgress.set(revealProgress.get());}" };
let obj1 = { paddingBottom: require("APP_STORE_OVERLAY_HEIGHT_RATIO").APP_STORE_OVERLAY_FOOTER_GRADIENT_HEIGHT };
let result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideoEndAppStorePanel.tsx");

export default function BountyVideoEndAppStorePanel(arg0) {
  let obj = initialize;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  obj = { theme: stateFromStores, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj[1] = callback(BountyVideoEndAppStorePanelInner, obj);
  return callback(ManaContext.ThemeContextProvider, obj);
};