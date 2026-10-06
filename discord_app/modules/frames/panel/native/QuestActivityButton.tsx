// === Module 17213: QuestActivityButton ===

// Module 17213 (QuestActivityButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import timing from "timing" /* 4897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import QuestConstants from "QuestConstants" /* 5630 */;
import inlineStyles from "inlineStyles" /* 8169 */;
import QuestMatchingUtils from "QuestMatchingUtils" /* 9077 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import QuestStore from "QuestStore" /* 7200 */;
import UnenrolledActivityQuestStore from "UnenrolledActivityQuestStore" /* 17214 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import createStyles from "createStyles" /* 4896 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let c10;
let c9;
let items;
let obj2;
let obj3;
function QuestActivityButtonInner(quest) {
  let Circle;
  let Svg;
  let Svg2;
  let c2;
  let intl;
  let items5;
  let items6;
  let obj10;
  let obj12;
  let obj6;
  let obj8;
  let size1;
  let tmp21;
  let tmp22;
  let userStatus;
  quest = quest.quest;
  dependencyMap = undefined;
  let num;
  let closure_4;
  let sharedValue;
  let sharedValue1;
  let ref;
  let confetti;
  let obj = quest(10924);
  const completedRatio = obj.useQuestCompletionDetails(quest).completedRatio;
  let obj2 = quest(504);
  let items = [sharedValue];
  const stateFromStores = obj2.useStateFromStores(items, () => sharedValue.useReducedMotion);
  let obj3 = num;
  const items1 = [, ];
  ({ id: arr2[0], userStatus } = quest);
  let enrolledAt;
  const useCallback = num.useCallback;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  items1[1] = enrolledAt;
  let result = 2 * Math.PI * 14.3;
  dependencyMap = result;
  let enrolledAt1;
  const callback = useCallback(() => {
    const userStatus = quest.userStatus;
    let enrolledAt;
    if (userStatus != null) {
      enrolledAt = userStatus.enrolledAt;
    }
    if (null == enrolledAt) {
      const obj2 = { questId: quest.id };
      const obj3 = ModalActionCreatorsDefault;
      obj3.pushLazy(asyncRequire(17215, dependencyMap.paths), obj2, QUEST_ACTIVITY_UNENROLLED_MODAL_KEY);
    } else {
      const obj4 = { questId: quest.id };
      const obj = ActionSheetActionCreatorsDefault;
      obj.openLazy(asyncRequire(17216, dependencyMap.paths), "QuestProgressBottomSheet", obj4);
    }
  }, items1);
  if (quest != null) {
    const userStatus2 = quest.userStatus;
    if (userStatus2 != null) {
      enrolledAt1 = userStatus2.enrolledAt;
    }
  }
  num = 0;
  if (null != enrolledAt1) {
    num = completedRatio;
  }
  let enrolledAt2;
  if (quest != null) {
    const userStatus3 = quest.userStatus;
    if (userStatus3 != null) {
      enrolledAt2 = userStatus3.enrolledAt;
    }
  }
  let tmp9 = null != enrolledAt2;
  if (tmp9) {
    let completedAt;
    if (quest != null) {
      const userStatus4 = quest.userStatus;
      if (userStatus4 != null) {
        completedAt = userStatus4.completedAt;
      }
    }
    tmp9 = null != completedAt;
  }
  closure_4 = tmp9;
  const tmpResult = quest(4618);
  sharedValue = tmpResult.useSharedValue(num);
  let num2 = 0;
  const useSharedValue = quest(4618).useSharedValue;
  quest(4618);
  if (tmp9) {
    num2 = 1;
  }
  sharedValue1 = useSharedValue(num2);
  ref = obj3.useRef(null);
  const tmp15 = closure_13();
  confetti = tmp15;
  const fn = function u() {
    const obj = { shadowOpacity: sharedValue1.get() };
    return obj;
  };
  fn.__closure = { glowOpacity: sharedValue1 };
  fn.__workletHash = 4459043613798;
  fn.__initData = __initData;
  const items2 = [tmp15.confetti];
  const tmpResult5 = quest(4618);
  const animatedStyle = tmpResult5.useAnimatedStyle(fn);
  const memo = obj3.useMemo(() => {
    let items;
    const obj = { width: height, height, transform: items };
    const merged = Object.assign(confetti.confetti);
    items = [{ scale: 1.6 }];
    return obj;
  }, items2);
  const fn2 = function l() {
    const obj = { strokeDashoffset: c2 - c2 * sharedValue.get() };
    return obj;
  };
  fn2.__closure = { circumference: result, animatedProgress: sharedValue };
  fn2.__workletHash = 3373122453897;
  fn2.__initData = __initData2;
  const items3 = [sharedValue, num, stateFromStores];
  const tmpResult6 = quest(4618);
  const animatedProps = tmpResult6.useAnimatedProps(fn2);
  const effect = obj3.useEffect(() => {
    num = 500;
    set = sharedValue.set;
    const withTiming = timing.withTiming;
    timing;
    const tmp3 = num;
    if (stateFromStores) {
      num = 0;
    }
    const result = set(withTiming(tmp3, { duration: num }));
    return () => {
      const obj = quest(c2[7]);
      obj.cancelAnimation(sharedValue);
    };
  }, items3);
  const items4 = [sharedValue1, tmp9, stateFromStores];
  const effect1 = obj3.useEffect(() => {
    if (!stateFromStores) {
      if (closure_4) {
        set = sharedValue1.set;
        const obj = timing;
        const result = set(obj.withTiming(1, { duration: 500 }));
        const current = ref.current;
        if (current != null) {
          current.play();
        }
      }
    }
    const result1 = sharedValue1.set(0);
    const current2 = ref.current;
    if (current2 != null) {
      current2.reset();
    }
  }, items4);
  let obj4 = { style: items5, pointerEvents: "box-none", children: items6 };
  items5 = [, , ];
  ({ container: arr6[0], completionGlow: arr6[1] } = tmp15);
  items5[2] = animatedStyle;
  const obj5 = { style: memo, pointerEvents: "none", children: closure_9(tmp21, obj6) };
  View = stateFromStores(4618).View;
  obj6 = { ref, source: quest(14951), autoPlay: false, loop: false };
  tmp21 = stateFromStores(5927);
  items6 = [closure_9(closure_4, obj5), , , ];
  const obj7 = { style: tmp15.buttonWrapper, children: closure_9(tmp22, obj8) };
  obj8 = { icon: stateFromStores(14820), onPress: callback, accessibilityLabel: intl.string(quest(1126).t.JALI2K) };
  tmp22 = stateFromStores(17217);
  intl = tmp(1126).intl;
  items6[1] = closure_9(closure_4, obj7);
  const obj9 = { pointerEvents: "none", style: tmp15.canvas, children: closure_9(Svg, size) };
  size = { height: v32, width: v32, children: closure_9(Circle, obj10) };
  Svg = tmp(8169).Svg;
  obj10 = { cx: 16, cy: 16, r: 14.3, fill: "none", stroke: stateFromStores(587).unsafe_rawColors.OPACITY_32, strokeWidth: 3.4, strokeDasharray: result };
  Circle = tmp(8169).Circle;
  items6[2] = closure_9(closure_4, obj9);
  const obj11 = { pointerEvents: "none", style: tmp15.canvas, children: closure_9(Svg2, size1) };
  size1 = { height: v32, width: v32, children: closure_9(closure_12, obj12) };
  obj12 = { cx: 16, cy: 16, r: 14.3, fill: "none", stroke: tmp15.progressPath.color, strokeWidth: 3.4, strokeDasharray: result, animatedProps };
  Svg2 = tmp(8169).Svg;
  items6[3] = closure_9(closure_4, obj11);
  return closure_10(View, obj4);
}
let View = react_native.View;
const QuestVariants = QuestConstants.QuestVariants;
({ jsx: c9, jsxs: c10 } = Fragment);
let c11 = 32;
let closure_12 = ReanimatedRexport.createAnimatedComponent(inlineStyles.Circle);
let obj = { container: { position: "relative", width: 32, height: 32, justifyContent: "center", alignItems: "center" }, completionGlow: { shadowOffset: { width: 0, height: 0 }, shadowRadius: 12, shadowOpacity: 0, elevation: 4, shadowColor: "#30C77399" }, canvas: obj2, progressPath: obj3, buttonWrapper: { position: "absolute", borderRadius: 16, overflow: "hidden" }, confetti: { position: "absolute" } };
obj2 = { position: "absolute", transform: items };
items = [{ rotate: "-90deg" }];
obj3 = { color: nativeDefault.colors.STATUS_POSITIVE };
let closure_13 = createStyles.createStyles(obj);
const __initData = { code: "function QuestActivityButtonTsx1(){const{glowOpacity}=this.__closure;return{shadowOpacity:glowOpacity.get()};}" };
const __initData2 = { code: "function QuestActivityButtonTsx2(){const{circumference,animatedProgress}=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};}" };
const QUEST_ACTIVITY_UNENROLLED_MODAL_KEY = "QUEST_ACTIVITY_UNENROLLED_MODAL_KEY";
const memoResult = react.memo(function QuestActivityButton(applicationId) {
  let quests;
  let state;
  applicationId = applicationId.applicationId;
  let stateFromStores1;
  let memo;
  let obj = applicationId(stateFromStores1[12]);
  const items = [QuestStore];
  const stateFromStores = obj.useStateFromStores(items, () => quests.quests);
  let obj2 = applicationId(stateFromStores1[12]);
  const items1 = [UnenrolledActivityQuestStore];
  stateFromStores1 = obj2.useStateFromStores(items1, () => state.getState().autoEnroll);
  const items2 = [stateFromStores, applicationId];
  memo = memo.useMemo(() => {
    const obj = QuestMatchingUtils;
    const eligibleQuestsForApplicationId = obj.getEligibleQuestsForApplicationId(stateFromStores, applicationId, true);
    return eligibleQuestsForApplicationId.find((config) => {
      const features = config.config.features;
      return features.includes(constants.MOBILE_ACTIVITY_QUEST);
    });
  }, items2);
  const items3 = [UnenrolledActivityQuestStore];
  const obj3 = applicationId(stateFromStores1[12]);
  const stateFromStores2 = obj3.useStateFromStores(items3, () => {
    let id;
    const isDismissed = UnenrolledActivityQuestStore.isDismissed;
    if (memo != null) {
      id = memo.id;
    }
    return isDismissed(id);
  });
  const items4 = [memo, stateFromStores1, stateFromStores2];
  const effect = memo.useEffect(() => {
    let tmp2 = null == memo;
    if (!tmp2) {
      const userStatus = memo.userStatus;
      let enrolledAt;
      if (userStatus != null) {
        enrolledAt = userStatus.enrolledAt;
      }
      tmp2 = null != enrolledAt;
    }
    if (!tmp2) {
      tmp2 = stateFromStores1;
    }
    if (!tmp2) {
      tmp2 = stateFromStores2;
    }
    if (!tmp2) {
      const obj2 = { questId: memo.id };
      const obj = ModalActionCreatorsDefault;
      obj.pushLazy(asyncRequire(17215, dependencyMap.paths), obj2, QUEST_ACTIVITY_UNENROLLED_MODAL_KEY);
    }
  }, items4);
  let tmp6 = null;
  if (null != memo) {
    const obj4 = { quest: memo };
    tmp6 = closure_9(QuestActivityButtonInner, obj4);
  }
  return tmp6;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/frames/panel/native/QuestActivityButton.tsx");

export default memoResult;