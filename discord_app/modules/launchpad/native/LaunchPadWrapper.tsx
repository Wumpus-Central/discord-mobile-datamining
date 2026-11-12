// === Module 19652: LaunchPadWrapper ===

// Module 19652 (LaunchPadWrapper)
import nativeDefault from "native" /* 575 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import HapticUtils from "HapticUtils" /* 5491 */;
import LaunchPadPullTabCache from "LaunchPadPullTabCache" /* 19650 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: closure_6, TouchableOpacity: metroImportDefault, StyleSheet: closure_8 } = get_ActivityIndicator);
const LaunchPadTypes = fn(12307).LaunchPadTypes;
const Constants = fn(1072);
({ AnalyticEvents: closure_10, ComponentActions: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5243);
let obj2 = { modalWrapper: null, a11yDismiss: null };
let size = { height: "100%", width: "100%", paddingTop: nativeDefault.space.PX_8 };
obj2.modalWrapper = size;
const size1 = { position: "absolute", top: 0, width: "100%", height: nativeDefault.space.PX_8 };
obj2.a11yDismiss = size1;
let closure_14 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadWrapper.tsx");

export default function LaunchPadWrapper(launchPadType) {
  launchPadType = launchPadType.launchPadType;
  ({ gestureState, launchPadShown, launchPadSharedState, updaters } = launchPadType);
  let isModalOpen;
  let ref;
  const tmp = closure_14();
  isModalOpen = launchPadType(isModalOpen[10]).useIsModalOpen();
  let obj = launchPadType(isModalOpen[10]);
  ({ launchPadCoverStyles, launchPadStyles } = updaters(isModalOpen[11])({ launchPadSharedState, launchPadShown, gestureState }));
  const tmp7 = updaters(isModalOpen[12])(launchPadShown);
  _slicedToArray = tmp7;
  ref = ref.useRef(!tmp7);
  closure_5 = _slicedToArray(ref.useState({}), 2)[1];
  items = [tmp7];
  const effect = ref.useEffect(() => {
    if (closure_3) {
      ref.current = false;
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        ref.current = true;
        closure_1_5({});
      }, 1000);
      return () => clearTimeout(closure_0);
    }
  }, items);
  const items1 = [updaters];
  const onPress = ref.useCallback(() => updaters.setLaunchPadPosition(0), items1);
  const items2 = [tmp7];
  const effect1 = ref.useEffect(() => {
    if (closure_3) {
      AnalyticsUtilsDefault.track(constants.LAUNCHPAD_OPENED);
    }
  }, items2);
  const items3 = [launchPadType, tmp7, isModalOpen];
  const effect2 = ref.useEffect(() => {
    if (launchPadType === LaunchPadTypes.PULL_TAB) {
      if (!isModalOpen) {
        const result = LaunchPadPullTabCache.setLaunchPadPullTabExclusionRect();
        if (closure_3) {
          const result1 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
          const tmp2Result = HapticUtils;
        }
      }
    }
    const result2 = LaunchPadPullTabCache.clearLaunchPadPullTabExclusionRect();
  }, items3);
  const items4 = [launchPadShown];
  const effect3 = ref.useEffect(() => () => launchPadType(isModalOpen[14]).clearLaunchPadPullTabExclusionRect(), items4);
  updaters(isModalOpen[16])(() => {
    callback();
    return true;
  }, tmp7);
  closure_129_0 = updaters;
  const items5 = [updaters];
  const effect4 = ref.useEffect(() => {
    function showLaunchPad() {
      showLaunchPad.setLaunchPadShown(true);
      showLaunchPad.setLaunchPadPosition(1);
    }
    function hideLaunchPad() {
      showLaunchPad.setLaunchPadShown(false);
      showLaunchPad.setLaunchPadPosition(0);
    }
    closure_2 = updaters(isModalOpen[8]).addRouteChangeListener(hideLaunchPad);
    let ComponentDispatch = launchPadType(isModalOpen[9]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants.LAUNCH_PAD_SHOW, showLaunchPad);
    let ComponentDispatch2 = launchPadType(isModalOpen[9]).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants.LAUNCH_PAD_HIDE, hideLaunchPad);
    return () => {
      closure_2();
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(constants2.LAUNCH_PAD_SHOW, showLaunchPad);
      const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch2.unsubscribe(constants2.LAUNCH_PAD_HIDE, hideLaunchPad);
    };
  }, items5);
  const obj2 = { style: absoluteFill.absoluteFill, pointerEvents: "box-none", children: null };
  const tmp6 = updaters(isModalOpen[11])({ launchPadSharedState, launchPadShown, gestureState });
  let obj3 = { style: launchPadCoverStyles, pointerEvents: null, children: null };
  let str2 = "none";
  if (tmp7) {
    str2 = "auto";
  }
  obj3.pointerEvents = str2;
  obj3.children = closure_12(closure_7, { accessible: false, "aria-hidden": true, onPress, style: absoluteFill.absoluteFillObject });
  const items6 = [closure_12(updaters(isModalOpen[18]).View, obj3), , ];
  let tmp20Result = null;
  if (launchPadType === LaunchPadTypes.PULL_TAB) {
    tmp20Result = null;
    if (!isModalOpen) {
      const obj5 = { gestureState, launchPadSharedState, launchPadPullTabState: launchPadType.launchPadPullTabState, updaters };
      tmp20Result = closure_12(updaters(tmp3[19]), obj5);
    }
  }
  items6[1] = tmp20Result;
  const obj6 = { style: launchPadStyles, pointerEvents: "none", children: null };
  const obj7 = { nativeID: "launch-pad", style: tmp.modalWrapper, onAccessibilityEscape: onPress, accessibilityViewIsModal: tmp7, children: null };
  let str3 = "no";
  if (tmp7) {
    str3 = "yes";
  }
  const obj8 = { importantForAccessibility: str3, accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null };
  const intl = tmp2(tmp3[21]).intl;
  obj8.accessibilityLabel = intl.string(launchPadType(isModalOpen[21]).t.WAI6xu);
  obj8.onPress = onPress;
  obj8.style = tmp.a11yDismiss;
  const items7 = [closure_12(onPress, obj8), closure_12(closure_7, { accessible: false, "aria-hidden": true, onPress, style: absoluteFill.absoluteFillObject }), ];
  let tmp24 = !tmp7;
  if (!tmp7) {
    tmp24 = tmp16;
  }
  const obj4 = { accessible: false, "aria-hidden": true, onPress, style: absoluteFill.absoluteFillObject };
  const obj9 = { accessible: false, "aria-hidden": true, onPress, style: absoluteFill.absoluteFillObject };
  tmp16 = updaters(isModalOpen[17])(ref);
  const tmp18 = closure_5;
  items7[2] = closure_12(launchPadType(isModalOpen[22]).Freeze, { freeze: tmp24, children: closure_12(updaters(isModalOpen[23]), { visible: tmp7, sharedState: launchPadSharedState }) });
  obj7.children = items7;
  obj6.children = closure_13(launchPadType(isModalOpen[20]).AccessibilityView, obj7);
  items6[2] = closure_12(updaters(isModalOpen[18]).View, obj6);
  obj2.children = items6;
  return closure_13(tmp18, obj2);
};