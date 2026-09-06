// === Module 17031: QuestActivityButton ===

// Module 17031 (QuestActivityButton)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import timing from "timing" /* 4561 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import QuestMatchingUtils from "QuestMatchingUtils" /* 11515 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import QuestStore from "QuestStore" /* 7703 */;
import UnenrolledActivityQuestStore from "UnenrolledActivityQuestStore" /* 17032 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;

require = fn;
function QuestActivityButtonInner(quest) {
  quest = quest.quest;
  dependencyMap = undefined;
  let num;
  closure_4 = undefined;
  let sharedValue;
  let sharedValue1;
  let ref;
  let confetti;
  let obj = quest(11483);
  let obj1 = quest(504);
  let items = [sharedValue];
  const stateFromStores = obj1.useStateFromStores(items, () => sharedValue.useReducedMotion);
  let obj2 = num;
  const items1 = [, ];
  ({ id: arr2[0], userStatus } = quest);
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  items1[1] = enrolledAt;
  let result = 2 * Math.PI * 14.3;
  dependencyMap = result;
  let enrolledAt1;
  const callback = num.useCallback(() => {
    const userStatus = quest.userStatus;
    let enrolledAt;
    if (userStatus != null) {
      enrolledAt = userStatus.enrolledAt;
    }
    if (null == enrolledAt) {
      let obj = { questId: tmp.id };
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17033, dependencyMap.paths), obj, QUEST_ACTIVITY_UNENROLLED_MODAL_KEY);
    } else {
      obj = { questId: tmp.id };
      obj.openLazy(asyncRequireImpl(17034, dependencyMap.paths), "QuestProgressBottomSheet", obj);
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
    num = obj.useQuestCompletionDetails(quest).completedRatio;
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
  let tmpResult = tmp(4296);
  sharedValue = tmpResult.useSharedValue(num);
  tmpResult = tmp(4296);
  let num2 = 0;
  if (tmp9) {
    num2 = 1;
  }
  sharedValue1 = tmpResult.useSharedValue(num2);
  ref = obj2.useRef(null);
  const tmp14 = closure_13();
  confetti = tmp14;
  const fn = function u() {
    return { shadowOpacity: sharedValue1.get() };
  };
  fn.__closure = { glowOpacity: sharedValue1 };
  fn.__workletHash = 4459043613798;
  fn.__initData = __initData;
  const items2 = [tmp14.confetti];
  const animatedStyle = quest(4296).useAnimatedStyle(fn);
  const memo = obj2.useMemo(() => {
    const obj = {};
    const merged = Object.assign(confetti.confetti);
    obj.width = height;
    obj.height = height;
    const items = [{ scale: 1.6 }];
    obj.transform = items;
    return obj;
  }, items2);
  const tmpResult1 = quest(4296);
  const fn2 = function l() {
    return { strokeDashoffset: c2 - c2 * sharedValue.get() };
  };
  fn2.__closure = { circumference: result, animatedProgress: sharedValue };
  fn2.__workletHash = 3373122453897;
  fn2.__initData = __initData2;
  const items3 = [sharedValue, num, stateFromStores];
  const animatedProps = quest(4296).useAnimatedProps(fn2);
  const effect = obj2.useEffect(() => {
    num = 500;
    if (stateFromStores) {
      num = 0;
    }
    const result = sharedValue.set(timing.withTiming(num, { duration: num }));
    return () => {
      quest(c2[7]).cancelAnimation(sharedValue);
    };
  }, items3);
  const items4 = [sharedValue1, tmp9, stateFromStores];
  const effect1 = obj2.useEffect(() => {
    if (!stateFromStores) {
      if (closure_4) {
        const result = sharedValue1.set(timing.withTiming(1, { duration: 500 }));
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
  obj = { style: null, pointerEvents: "box-none", children: null };
  const items5 = [, , ];
  ({ container: arr6[0], completionGlow: arr6[1] } = tmp14);
  items5[2] = animatedStyle;
  obj.style = items5;
  obj = { style: memo, pointerEvents: "none", children: null };
  obj1 = { ref, source: null, autoPlay: false, loop: false };
  const tmpResult2 = quest(4296);
  obj1.source = quest(15132);
  obj.children = closure_9(stateFromStores(5529), obj1);
  const items6 = [closure_9(closure_4, obj), , , ];
  obj2 = { style: tmp14.buttonWrapper, children: null };
  let obj3 = { icon: null, onPress: null, accessibilityLabel: null };
  const tmp20 = stateFromStores(5529);
  obj3.icon = stateFromStores(14995);
  obj3.onPress = callback;
  const intl = tmp(1114).intl;
  obj3.accessibilityLabel = intl.string(quest(1114).t.JALI2K);
  obj2.children = closure_9(stateFromStores(17035), obj3);
  items6[1] = closure_9(closure_4, obj2);
  const obj4 = { pointerEvents: "none", style: tmp14.canvas, children: null };
  const size = { height: v32, width: v32, children: null };
  const tmp21 = stateFromStores(17035);
  size.children = closure_9(quest(8453).Circle, { cx: 16, cy: 16, r: 14.3, fill: "none", stroke: stateFromStores(576).unsafe_rawColors.OPACITY_32, strokeWidth: 3.4, strokeDasharray: result });
  obj4.children = closure_9(quest(8453).Svg, size);
  items6[2] = closure_9(closure_4, obj4);
  const obj6 = { pointerEvents: "none", style: tmp14.canvas, children: null };
  const size1 = { height: v32, width: v32, children: closure_9(closure_12, { cx: 16, cy: 16, r: 14.3, fill: "none", stroke: tmp14.progressPath.color, strokeWidth: 3.4, strokeDasharray: result, animatedProps }) };
  obj6.children = closure_9(quest(8453).Svg, size1);
  items6[3] = closure_9(closure_4, obj6);
  obj.children = items6;
  return closure_10(stateFromStores(4296).View, obj);
}
const View = fn(17).View;
const QuestVariants = fn(5444).QuestVariants;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let c11 = 32;
let closure_12 = ReanimatedRexport.createAnimatedComponent(fn(8453).Circle);
const createStyles = fn(4560);
let obj = { container: { position: "relative", width: 32, height: 32, justifyContent: "center", alignItems: "center" }, completionGlow: { shadowOffset: { width: 0, height: 0 }, shadowRadius: 12, shadowOpacity: 0, elevation: 4, shadowColor: "#30C77399" }, canvas: null, progressPath: null, buttonWrapper: null, confetti: null };
obj = { position: "absolute", transform: null };
let items = [{ rotate: "-90deg" }];
obj.transform = items;
obj.canvas = obj;
obj.progressPath = { color: nativeDefault.colors.STATUS_POSITIVE };
obj.buttonWrapper = { position: "absolute", borderRadius: 16, overflow: "hidden" };
obj.confetti = { position: "absolute" };
let closure_13 = createStyles.createStyles(obj);
const __initData = { code: "function QuestActivityButtonTsx1(){const{glowOpacity}=this.__closure;return{shadowOpacity:glowOpacity.get()};}" };
const __initData2 = { code: "function QuestActivityButtonTsx2(){const{circumference,animatedProgress}=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};}" };
const QUEST_ACTIVITY_UNENROLLED_MODAL_KEY = "QUEST_ACTIVITY_UNENROLLED_MODAL_KEY";
let obj1 = { color: nativeDefault.colors.STATUS_POSITIVE };
let size = fn(2);
let result = size.fileFinishedImporting("modules/frames/panel/native/QuestActivityButton.tsx");

export default noop.memo(function QuestActivityButton(applicationId) {
  applicationId = applicationId.applicationId;
  let stateFromStores1;
  let memo;
  let obj = applicationId(stateFromStores1[12]);
  const items = [QuestStore];
  const stateFromStores = obj.useStateFromStores(items, () => quests.quests);
  const items1 = [UnenrolledActivityQuestStore];
  stateFromStores1 = applicationId(stateFromStores1[12]).useStateFromStores(items1, () => state.getState().autoEnroll);
  const items2 = [stateFromStores, applicationId];
  memo = memo.useMemo(() => {
    const eligibleQuestsForApplicationId = QuestMatchingUtils.getEligibleQuestsForApplicationId(stateFromStores, applicationId, true);
    return eligibleQuestsForApplicationId.find((config) => {
      const features = config.config.features;
      return features.includes(constants.MOBILE_ACTIVITY_QUEST);
    });
  }, items2);
  const obj2 = applicationId(stateFromStores1[12]);
  const items3 = [UnenrolledActivityQuestStore];
  const stateFromStores2 = applicationId(stateFromStores1[12]).useStateFromStores(items3, () => {
    let id;
    if (memo != null) {
      id = memo.id;
    }
    return UnenrolledActivityQuestStore.isDismissed(id);
  });
  const items4 = [memo, stateFromStores1, stateFromStores2];
  const effect = memo.useEffect(() => {
    let tmp2 = null == memo;
    if (!tmp2) {
      const userStatus = tmp.userStatus;
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
      const obj = { questId: tmp.id };
      obj.pushLazy(asyncRequireImpl(17033, dependencyMap.paths), obj, QUEST_ACTIVITY_UNENROLLED_MODAL_KEY);
    }
  }, items4);
  let tmp6 = null;
  if (null != memo) {
    obj = { quest: memo };
    tmp6 = closure_9(QuestActivityButtonInner, obj);
  }
  return tmp6;
});