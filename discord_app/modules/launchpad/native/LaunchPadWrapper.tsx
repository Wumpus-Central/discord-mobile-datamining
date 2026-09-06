// === Module 16964: LaunchPadWrapper ===

// Module 16964 (LaunchPadWrapper)
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import LaunchPadPullTabCache from "LaunchPadPullTabCache" /* 16962 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire, TouchableOpacity: closure_7, StyleSheet: closure_8 } = get_ActivityIndicator);
const LaunchPadTypes = fn(11464).LaunchPadTypes;
const Constants = fn(1074);
({ AnalyticEvents: c10, ComponentActions: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
const createStyles = { modalWrapper: null, a11yDismiss: null };
let size = { height: "100%", width: "100%", paddingTop: nativeDefault.space.PX_8 };
createStyles.modalWrapper = size;
const size1 = { position: "absolute", top: 0, width: "100%", height: nativeDefault.space.PX_8 };
createStyles.a11yDismiss = size1;
let closure_14 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadWrapper.tsx");

export default function LaunchPadWrapper(launchPadType) {
  launchPadType = launchPadType.launchPadType;
  ({ gestureState, launchPadShown, launchPadSharedState, updaters } = launchPadType);
  let isModalOpen;
  let ref;
  const tmp = closure_14();
  let obj = launchPadType(isModalOpen[10]);
  isModalOpen = obj.useIsModalOpen();
  ({ launchPadCoverStyles, launchPadStyles } = updaters(isModalOpen[11])({ launchPadSharedState, launchPadShown, gestureState }));
  const tmp7 = updaters(isModalOpen[12])(launchPadShown);
  _slicedToArray = tmp7;
  ref = ref.useRef(!tmp7);
  closure_5 = _slicedToArray(ref.useState({}), 2)[1];
  const items = [tmp7];
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
    if (closure_3) {
      callback();
    }
    return closure_3;
  });
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
  obj = { style: absoluteFill.absoluteFill, pointerEvents: "box-none", children: null };
  const tmp6 = updaters(isModalOpen[11])({ launchPadSharedState, launchPadShown, gestureState });
  const items6 = [closure_12(updaters(isModalOpen[18]).View, { style: launchPadCoverStyles, pointerEvents: "none" }), , ];
  let tmp20Result = null;
  if (launchPadType === LaunchPadTypes.PULL_TAB) {
    tmp20Result = null;
    if (!isModalOpen) {
      obj = { gestureState, launchPadSharedState, launchPadPullTabState: launchPadType.launchPadPullTabState, updaters };
      tmp20Result = closure_12(updaters(tmp3[19]), obj);
    }
  }
  items6[1] = tmp20Result;
  const obj1 = { style: launchPadStyles, pointerEvents: "none", children: null };
  const obj2 = { nativeID: "launch-pad", style: tmp.modalWrapper, onAccessibilityEscape: onPress, accessibilityViewIsModal: tmp7, children: null };
  let str2 = "no";
  if (tmp7) {
    str2 = "yes";
  }
  let obj3 = { importantForAccessibility: str2, accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null };
  const intl = tmp2(tmp3[21]).intl;
  obj3.accessibilityLabel = intl.string(launchPadType(isModalOpen[21]).t.WAI6xu);
  obj3.onPress = onPress;
  obj3.style = tmp.a11yDismiss;
  const items7 = [closure_12(onPress, obj3), closure_12(closure_7, { accessible: false, "aria-hidden": true, onPress, style: absoluteFill.absoluteFillObject }), ];
  let tmp23 = !tmp7;
  if (!tmp7) {
    tmp23 = tmp16;
  }
  const obj4 = { accessible: false, "aria-hidden": true, onPress, style: absoluteFill.absoluteFillObject };
  tmp16 = updaters(isModalOpen[17])(ref);
  const tmp18 = closure_5;
  items7[2] = closure_12(launchPadType(isModalOpen[22]).Freeze, { freeze: tmp23, children: closure_12(updaters(isModalOpen[23]), { visible: tmp7, sharedState: launchPadSharedState }) });
  obj2.children = items7;
  obj1.children = closure_13(launchPadType(isModalOpen[20]).AccessibilityView, obj2);
  items6[2] = closure_12(updaters(isModalOpen[18]).View, obj1);
  obj.children = items6;
  return closure_13(tmp18, obj);
};