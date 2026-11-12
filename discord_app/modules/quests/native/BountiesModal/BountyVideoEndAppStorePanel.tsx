// === Module 17478: BountyVideoEndAppStorePanel ===

// Module 17478 (BountyVideoEndAppStorePanel)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import native from "native" /* 5314 */;
import timing_timing from "timing/timing" /* 5485 */;
import timingPresets from "timingPresets" /* 5488 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5535 */;
import openURLDefault from "openURL" /* 5945 */;
import AnalyticsActions from "AnalyticsActions" /* 8758 */;
import AppStoreOverlayContent from "AppStoreOverlayContent" /* 10103 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1192 */;

require = fn;
function BountyVideoEndAppStorePanelInner(metadata) {
  metadata = metadata.metadata;
  _require = metadata;
  const sheetHeight = metadata.sheetHeight;
  const revealProgress = metadata.revealProgress;
  const onDismiss = metadata.onDismiss;
  noop = onDismiss;
  const onInstallPress = metadata.onInstallPress;
  let sharedValue;
  ({ onOverlaySurfaceClick, onCarouselScroll } = metadata);
  const tmp = closure_9();
  closure_5 = tmp;
  noop.useRef(false);
  items = [onDismiss];
  const onPress = noop.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      _undefined2();
    }
  }, items);
  const unmountEffect = require("useMountEffect").useUnmountEffect(onPress);
  let obj2 = require("useMountEffect");
  let items1 = [closure_10, require("module_1652").interpolate, revealProgress, sheetHeight, require("module_1652").Extrapolation];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp6, tmp7, tmp8, tmp9, tmp10] = items1;
  class BountyVideoEndAppStorePanelTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: null };
      items = [, ];
      items[0] = closure_2;
      items[1] = 0;
      obj1.translateY = closure_0(closure_1.get(), [0, 1], items, closure_3.CLAMP);
      items1 = [];
      items1[0] = obj1;
      obj.transform = items1;
      return obj;
    }
  }
  let items2 = [tmp7, tmp8, tmp9, tmp10];
  BountyVideoEndAppStorePanelTsx1.__closure = items2;
  BountyVideoEndAppStorePanelTsx1.__workletHash = 12486357955860;
  BountyVideoEndAppStorePanelTsx1.__initData = tmp6;
  let items3 = [metadata.storeUrl, onInstallPress];
  const animatedStyle = require("module_1652").useAnimatedStyle(BountyVideoEndAppStorePanelTsx1);
  const callback1 = obj.useCallback(() => {
    onInstallPress(AnalyticsActions.AppStoreOverlaySurfaces.MAIN_CTA);
    openURLDefault(_undefined.storeUrl);
  }, items3);
  let items4 = [, , , ];
  ({ appId: arr5[0], platform: arr5[1], storeUrl: arr5[2] } = metadata);
  items4[3] = onInstallPress;
  const callback2 = obj.useCallback(() => {
    onInstallPress(AnalyticsActions.AppStoreOverlaySurfaces.RATING_STAT);
    AppStoreOverlayContent.openAppStoreReviews(_undefined.storeUrl, _undefined.platform, _undefined.appId);
  }, items4);
  const obj3 = require("module_1652");
  sharedValue = require("module_1652").useSharedValue(1);
  let items5 = [sharedValue, onPress, revealProgress, sheetHeight];
  const items6 = [tmp.panel, sheetHeight];
  const memo = obj.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const activeOffsetYResult = Gesture.Pan().activeOffsetY(8);
    items = [closure_11, sharedValue, c2];
    c0 = undefined;
    c1 = undefined;
    [tmp5, tmp6, tmp7] = items;
    class BountyVideoEndAppStorePanelTsx2 {
      constructor() {
        result = closure_0.set(closure_1.get());
        return;
      }
    }
    const items1 = [tmp6, tmp7];
    BountyVideoEndAppStorePanelTsx2.__closure = items1;
    BountyVideoEndAppStorePanelTsx2.__workletHash = 15884130525060;
    BountyVideoEndAppStorePanelTsx2.__initData = tmp5;
    const failOffsetXResult = Gesture.Pan().activeOffsetY(8).failOffsetX([-24, 24]);
    const items2 = [closure_12, c2, sharedValue, c1];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp8, tmp9, tmp10, tmp11] = items2;
    class BountyVideoEndAppStorePanelTsx3 {
      constructor(arg0) {
        result = closure_0.set(Math.max(0, Math.min(1, closure_1.get() - arg0.translationY / closure_2)));
        return;
      }
    }
    const items3 = [tmp9, tmp10, tmp11];
    BountyVideoEndAppStorePanelTsx3.__closure = items3;
    BountyVideoEndAppStorePanelTsx3.__workletHash = 14538440343336;
    BountyVideoEndAppStorePanelTsx3.__initData = tmp8;
    const onBeginResult = Gesture.Pan().activeOffsetY(8).failOffsetX([-24, 24]).onBegin(BountyVideoEndAppStorePanelTsx2);
    const items4 = [closure_13, c2, 0.5, 800, _mod1705.scheduleOnRN, callback, timing_timing.withTiming, timingPresets.timingStandard];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items4;
    class BountyVideoEndAppStorePanelTsx4 {
      constructor(arg0) {
        obj = closure_0;
        if (closure_0.get() >= closure_1) {
          tmp = arg0;
          tmp2 = closure_2;
          if (arg0.velocityY <= closure_2) {
            tmp3 = closure_5;
            tmp4 = closure_6;
            num = 1;
            result = obj.set(closure_5(1, closure_6));
          }
          return;
        }
        tmp6 = closure_3(closure_4);
        return;
      }
    }
    const items5 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19];
    BountyVideoEndAppStorePanelTsx4.__closure = items5;
    BountyVideoEndAppStorePanelTsx4.__workletHash = 469106011655;
    BountyVideoEndAppStorePanelTsx4.__initData = tmp12;
    return Gesture.Pan().activeOffsetY(8).failOffsetX([-24, 24]).onBegin(BountyVideoEndAppStorePanelTsx2).onUpdate(BountyVideoEndAppStorePanelTsx3).onEnd(BountyVideoEndAppStorePanelTsx4);
  }, items5);
  const items7 = [sheetHeight, tmp.root];
  const memo1 = obj.useMemo(() => {
    items = [closure_5.panel, { height }];
    return items;
  }, items6);
  const obj4 = {
    style: noop.useMemo(() => {
      items = [closure_5.root, { height }];
      return items;
    }, items7),
    children: null
  };
  const obj5 = { style: null, children: null };
  const items8 = [memo1, animatedStyle];
  obj5.style = items8;
  const tmp3Result = require("module_1652");
  const items9 = [onPress(onInstallPress, { style: tmp.scrollBody, contentContainerStyle: tmp.scrollContent, nestedScrollEnabled: true, showsVerticalScrollIndicator: false, keyboardShouldPersistTaps: "handled", children: onPress(require("AppStoreOverlayBody").AppStoreOverlayBody, { metadata, onOpenReviews: callback2, onMediaGetGamePress: callback1, onCarouselScroll, onOverlaySurfaceClick }) }), , ];
  const obj7 = { gesture: memo, children: null };
  const obj8 = { style: tmp.headerGestureTarget, children: onPress(require("ActionSheetHeaderBar").ActionSheetHeaderBar, { variant: "overlay", style: tmp.headerBar, onPress }) };
  obj7.children = onPress(closure_5, obj8);
  items9[1] = onPress(require("LegacyBaseButton").GestureDetector, obj7);
  items9[2] = onPress(require("AppStoreOverlayBody").AppStoreOverlayFooter, { onInstallPress: callback1 });
  obj5.children = items9;
  obj4.children = sharedValue(_modDef1652.View, obj5);
  return onPress(closure_5, obj4);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ACTION_SHEET_BORDER_RADIUS = fn(5504).ACTION_SHEET_BORDER_RADIUS;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5243);
let obj2 = { root: { position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 10 }, panel: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, borderTopLeftRadius: ACTION_SHEET_BORDER_RADIUS, borderTopRightRadius: ACTION_SHEET_BORDER_RADIUS, overflow: "hidden", flexDirection: "column" }, headerBar: { zIndex: 1 }, headerGestureTarget: { position: "absolute", top: 0, left: 0, right: 0, height: 48, zIndex: 2 }, scrollBody: { flex: 1, minHeight: 0 }, scrollContent: null };
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, borderTopLeftRadius: ACTION_SHEET_BORDER_RADIUS, borderTopRightRadius: ACTION_SHEET_BORDER_RADIUS, overflow: "hidden", flexDirection: "column" };
obj2.scrollContent = { paddingBottom: fn(10108).APP_STORE_OVERLAY_FOOTER_GRADIENT_HEIGHT };
let closure_9 = createStyles.createStyles(obj2);
let closure_10 = { code: "(function BountyVideoEndAppStorePanelTsx1(){let[interpolate,revealProgress,sheetHeight,Extrapolation]=this.__closure;return{transform:[{translateY:interpolate(revealProgress.get(),[0,1],[sheetHeight,0],Extrapolation.CLAMP)}]};})" };
let closure_11 = { code: "(function BountyVideoEndAppStorePanelTsx2(){let[dragStartProgress,revealProgress]=this.__closure;dragStartProgress.set(revealProgress.get());})" };
let closure_12 = { code: "(function BountyVideoEndAppStorePanelTsx3(event){let[revealProgress,dragStartProgress,sheetHeight]=this.__closure;revealProgress.set(Math.max(0,Math.min(1,dragStartProgress.get()-event.translationY/sheetHeight)));})" };
let closure_13 = { code: "(function BountyVideoEndAppStorePanelTsx4(event){let[revealProgress,DISMISS_PROGRESS_THRESHOLD,DISMISS_VELOCITY_THRESHOLD,scheduleOnRN,handleDismiss,withTiming,timingStandard]=this.__closure;if(revealProgress.get()<DISMISS_PROGRESS_THRESHOLD||event.velocityY>DISMISS_VELOCITY_THRESHOLD){scheduleOnRN(handleDismiss);return;}revealProgress.set(withTiming(1,timingStandard));})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideoEndAppStorePanel.tsx");

export default function BountyVideoEndAppStorePanel(arg0) {
  items = [ThemeStore];
  const stateFromStores = initialize.useStateFromStores(items, () => theme.theme);
  const obj2 = { theme: stateFromStores, children: null };
  const merged = Object.assign(arg0);
  obj2.children = metroImportDefault(BountyVideoEndAppStorePanelInner, {});
  return metroImportDefault(native.ThemeContextProvider, obj2);
};