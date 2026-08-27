// === Module 16456: LaunchPadWrapper ===

// Module 16456 (LaunchPadWrapper)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { LaunchPadTypes } from "LAUNCH_PAD_SPRING_CONFIG" /* 10984 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
({ View: c5, Pressable: closure_6, TouchableOpacity: error, StyleSheet: closure_8 } = get_ActivityIndicator);
({ AnalyticEvents: c10, ComponentActions: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { modalWrapper: null, a11yDismiss: null };
createCacheKey = { height: "100%", width: "100%", paddingTop: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", top: 0, width: "100%", height: ThemesDefault.space.PX_8 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let obj1 = { position: "absolute", top: 0, width: "100%", height: ThemesDefault.space.PX_8 };
let result = require("set").fileFinishedImporting("modules/launchpad/native/LaunchPadWrapper.tsx");

export default function LaunchPadWrapper(launchPadType) {
  launchPadType = launchPadType.launchPadType;
  updaters = launchPadType;
  ({ gestureState, launchPadShown, launchPadSharedState, updaters } = launchPadType);
  let isModalOpen;
  let callback;
  let ref;
  closure_5 = undefined;
  callback = undefined;
  const tmp = callback3();
  let obj = updaters(isModalOpen[10]);
  isModalOpen = obj.useIsModalOpen();
  ({ launchPadCoverStyles, launchPadStyles } = updaters(isModalOpen[11])({ launchPadSharedState, launchPadShown, gestureState }));
  const tmp7 = updaters(isModalOpen[12])(launchPadShown);
  callback = tmp7;
  ref = ref.useRef(!tmp7);
  closure_5 = callback(ref.useState({}), 2)[1];
  const items = [tmp7];
  const effect = ref.useEffect(() => {
    if (closure_3) {
      ref.current = false;
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_4.current = true;
        callback({});
      }, 1000);
      return () => clearTimeout(closure_0);
    }
  }, items);
  const items1 = [updaters];
  callback = ref.useCallback(() => updaters.setLaunchPadPosition(0), items1);
  const items2 = [tmp7];
  const effect1 = ref.useEffect(() => {
    if (closure_3) {
      updaters(isModalOpen[13]).track(closure_1_10.LAUNCHPAD_OPENED);
      const obj = updaters(isModalOpen[13]);
    }
  }, items2);
  const items3 = [launchPadType, tmp7, isModalOpen];
  const effect2 = ref.useEffect(() => {
    if (updaters === closure_1_9.PULL_TAB) {
      if (!isModalOpen) {
        const result = updaters(isModalOpen[14]).setLaunchPadPullTabExclusionRect();
        if (closure_3) {
          const result1 = tmp2(tmp3[15]).triggerHapticFeedback(tmp2(tmp3[15]).HapticFeedbackTypes.IMPACT_LIGHT);
          const tmp2Result = tmp2(tmp3[15]);
        }
        const obj = updaters(isModalOpen[14]);
      }
    }
    const result2 = updaters(isModalOpen[14]).clearLaunchPadPullTabExclusionRect();
  }, items3);
  const items4 = [launchPadShown];
  const effect3 = ref.useEffect(() => () => callback(table[14]).clearLaunchPadPullTabExclusionRect(), items4);
  updaters(isModalOpen[16])(() => {
    if (closure_3) {
      callback();
    }
    return closure_3;
  });
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
    let ComponentDispatch = updaters(isModalOpen[9]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(closure_1_11.LAUNCH_PAD_SHOW, showLaunchPad);
    let ComponentDispatch2 = updaters(isModalOpen[9]).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(closure_1_11.LAUNCH_PAD_HIDE, hideLaunchPad);
    return () => {
      callback();
      const ComponentDispatch = updaters(isModalOpen[9]).ComponentDispatch;
      ComponentDispatch.unsubscribe(closure_2_11.LAUNCH_PAD_SHOW, showLaunchPad);
      const ComponentDispatch2 = updaters(isModalOpen[9]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(closure_2_11.LAUNCH_PAD_HIDE, hideLaunchPad);
    };
  }, items5);
  obj = { style: absoluteFill.absoluteFill, pointerEvents: "box-none", children: null };
  const tmp6 = updaters(isModalOpen[11])({ launchPadSharedState, launchPadShown, gestureState });
  const items6 = [callback2(updaters(isModalOpen[18]).View, { style: launchPadCoverStyles, pointerEvents: "none" }), , ];
  let tmp20Result = null;
  if (launchPadType === LaunchPadTypes.PULL_TAB) {
    tmp20Result = null;
    if (!isModalOpen) {
      obj = { gestureState: null, launchPadSharedState: null, launchPadPullTabState: null, updaters: null };
      obj[0] = gestureState;
      obj[1] = launchPadSharedState;
      obj[2] = launchPadType.launchPadPullTabState;
      obj[3] = updaters;
      tmp20Result = tmp20(tmp5(tmp3[19]), obj);
    }
  }
  items6[1] = tmp20Result;
  obj1 = { style: launchPadStyles, pointerEvents: "none", children: null };
  const obj2 = { nativeID: "launch-pad", style: tmp.modalWrapper, onAccessibilityEscape: callback, accessibilityViewIsModal: tmp7, children: null };
  let str2 = "no";
  if (tmp7) {
    str2 = "yes";
  }
  const obj3 = { importantForAccessibility: str2, accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null };
  const intl = tmp2(tmp3[21]).intl;
  obj3[2] = intl.string(updaters(isModalOpen[21]).t.WAI6xu);
  obj3[3] = callback;
  obj3[4] = tmp.a11yDismiss;
  const items7 = [callback2(callback, obj3), callback2(closure_7, { accessible: false, "aria-hidden": true, onPress: callback, style: absoluteFill.absoluteFillObject }), ];
  let tmp23 = !tmp7;
  if (!tmp7) {
    tmp23 = tmp16;
  }
  const obj4 = { accessible: false, "aria-hidden": true, onPress: callback, style: absoluteFill.absoluteFillObject };
  tmp16 = updaters(isModalOpen[17])(ref);
  const tmp18 = closure_5;
  const tmp19 = absoluteFill;
  const tmp22 = callback;
  items7[2] = callback2(updaters(isModalOpen[22]).Freeze, { freeze: tmp23, children: callback2(updaters(isModalOpen[23]), { visible: tmp7, sharedState: launchPadSharedState }) });
  obj2[4] = items7;
  obj1[2] = closure_13(updaters(isModalOpen[20]).AccessibilityView, obj2);
  items6[2] = callback2(updaters(isModalOpen[18]).View, obj1);
  obj[2] = items6;
  return closure_13(tmp18, obj);
};