// discord_app/modules/frames/panel/native/QuestActivityButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import QuestMatchingUtils from "../../../quests/utils/QuestMatchingUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import QuestStore from "../../../quests/QuestStore.tsx";
import UnenrolledActivityQuestStore from "../../../quests/UnenrolledActivityQuestStore.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";

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
  let obj = quest(11824);
  let items = [sharedValue];
  const stateFromStores = quest(504).useStateFromStores(items, () => sharedValue.useReducedMotion);
  const items1 = [,];
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
      const obj2 = { questId: quest.id };
      ModalActionCreatorsDefault.pushLazy(
        asyncRequireImpl(17600, dependencyMap.paths),
        obj2,
        QUEST_ACTIVITY_UNENROLLED_MODAL_KEY,
      );
    } else {
      const obj4 = { questId: quest.id };
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(17601, dependencyMap.paths),
        "QuestProgressBottomSheet",
        obj4,
      );
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
  let obj2 = quest(504);
  sharedValue = quest(4561).useSharedValue(num);
  const tmpResult = quest(4561);
  let num2 = 0;
  if (tmp9) {
    num2 = 1;
  }
  sharedValue1 = quest(4561).useSharedValue(num2);
  ref = obj3.useRef(null);
  const tmp14 = closure_13();
  confetti = tmp14;
  const tmpResult4 = quest(4561);
  const fn = function u() {
    return { shadowOpacity: sharedValue1.get() };
  };
  fn.__closure = { glowOpacity: sharedValue1 };
  fn.__workletHash = 4459043613798;
  fn.__initData = __initData;
  const items2 = [tmp14.confetti];
  const animatedStyle = quest(4561).useAnimatedStyle(fn);
  const memo = obj3.useMemo(() => {
    const obj = {};
    const merged = Object.assign(confetti.confetti);
    obj.width = height;
    obj.height = height;
    const items = [{ scale: 1.6 }];
    obj.transform = items;
    return obj;
  }, items2);
  const tmpResult5 = quest(4561);
  const fn2 = function l() {
    return { strokeDashoffset: c2 - c2 * sharedValue.get() };
  };
  fn2.__closure = { circumference: result, animatedProgress: sharedValue };
  fn2.__workletHash = 3373122453897;
  fn2.__initData = __initData2;
  const items3 = [sharedValue, num, stateFromStores];
  const animatedProps = quest(4561).useAnimatedProps(fn2);
  const effect = obj3.useEffect(() => {
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
  const effect1 = obj3.useEffect(() => {
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
  let obj4 = { style: null, pointerEvents: "box-none", children: null };
  const items5 = [, ,];
  ({ container: arr6[0], completionGlow: arr6[1] } = tmp14);
  items5[2] = animatedStyle;
  obj4.style = items5;
  const obj5 = { style: memo, pointerEvents: "none", children: null };
  const obj6 = { ref, source: null, autoPlay: false, loop: false };
  const tmpResult6 = quest(4561);
  obj6.source = quest(15468);
  obj5.children = closure_9(stateFromStores(5834), obj6);
  const items6 = [closure_9(closure_4, obj5), , ,];
  const obj7 = { style: tmp14.buttonWrapper, children: null };
  const obj8 = { icon: null, onPress: null, accessibilityLabel: null };
  const tmp20 = stateFromStores(5834);
  obj8.icon = stateFromStores(15341);
  obj8.onPress = callback;
  const intl = tmp(1115).intl;
  obj8.accessibilityLabel = intl.string(quest(1115).t.JALI2K);
  obj7.children = closure_9(stateFromStores(17602), obj8);
  items6[1] = closure_9(closure_4, obj7);
  const obj9 = { pointerEvents: "none", style: tmp14.canvas, children: null };
  const size = { height: v32, width: v32, children: null };
  const tmp21 = stateFromStores(17602);
  size.children = closure_9(quest(8807).Circle, {
    cx: 16,
    cy: 16,
    r: 14.3,
    fill: "none",
    stroke: stateFromStores(576).unsafe_rawColors.OPACITY_32,
    strokeWidth: 3.4,
    strokeDasharray: result,
  });
  obj9.children = closure_9(quest(8807).Svg, size);
  items6[2] = closure_9(closure_4, obj9);
  const obj11 = { pointerEvents: "none", style: tmp14.canvas, children: null };
  const size1 = {
    height: v32,
    width: v32,
    children: closure_9(closure_12, {
      cx: 16,
      cy: 16,
      r: 14.3,
      fill: "none",
      stroke: tmp14.progressPath.color,
      strokeWidth: 3.4,
      strokeDasharray: result,
      animatedProps,
    }),
  };
  obj11.children = closure_9(quest(8807).Svg, size1);
  items6[3] = closure_9(closure_4, obj11);
  obj4.children = items6;
  return closure_10(stateFromStores(4561).View, obj4);
}
const View = fn(17).View;
const QuestVariants = fn(5749).QuestVariants;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let c11 = 32;
let closure_12 = ReanimatedRexport.createAnimatedComponent(fn(8807).Circle);
const createStyles = fn(4829);
let obj = {
  container: { position: "relative", width: 32, height: 32, justifyContent: "center", alignItems: "center" },
  completionGlow: {
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 12,
    shadowOpacity: 0,
    elevation: 4,
    shadowColor: "#30C77399",
  },
  canvas: null,
  progressPath: { color: nativeDefault.colors.STATUS_POSITIVE },
  buttonWrapper: { position: "absolute", borderRadius: 16, overflow: "hidden" },
  confetti: { position: "absolute" },
};
let obj2 = { position: "absolute", transform: null };
let items = [{ rotate: "-90deg" }];
obj2.transform = items;
obj.canvas = obj2;
let closure_13 = createStyles.createStyles(obj);
const __initData = {
  code: "function QuestActivityButtonTsx1(){const{glowOpacity}=this.__closure;return{shadowOpacity:glowOpacity.get()};}",
};
const __initData2 = {
  code: "function QuestActivityButtonTsx2(){const{circumference,animatedProgress}=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};}",
};
const QUEST_ACTIVITY_UNENROLLED_MODAL_KEY = "QUEST_ACTIVITY_UNENROLLED_MODAL_KEY";
let obj4 = { color: nativeDefault.colors.STATUS_POSITIVE };
let size = fn(2);
let result = size.fileFinishedImporting("modules/frames/panel/native/QuestActivityButton.tsx");

export default noop.memo(function QuestActivityButton(applicationId) {
  applicationId = applicationId.applicationId;
  let stateFromStores1;
  let memo;
  const items = [QuestStore];
  const stateFromStores = applicationId(stateFromStores1[12]).useStateFromStores(items, () => quests.quests);
  let obj = applicationId(stateFromStores1[12]);
  const items1 = [UnenrolledActivityQuestStore];
  stateFromStores1 = applicationId(stateFromStores1[12]).useStateFromStores(items1, () => state.getState().autoEnroll);
  const items2 = [stateFromStores, applicationId];
  memo = memo.useMemo(() => {
    const eligibleQuestsForApplicationId = QuestMatchingUtils.getEligibleQuestsForApplicationId(
      stateFromStores,
      applicationId,
      true,
    );
    return eligibleQuestsForApplicationId.find((config) => {
      const features = config.config.features;
      return features.includes(constants.MOBILE_ACTIVITY_QUEST);
    });
  }, items2);
  let obj2 = applicationId(stateFromStores1[12]);
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
      ModalActionCreatorsDefault.pushLazy(
        asyncRequireImpl(17600, dependencyMap.paths),
        obj2,
        QUEST_ACTIVITY_UNENROLLED_MODAL_KEY,
      );
    }
  }, items4);
  let tmp6 = null;
  if (null != memo) {
    const obj4 = { quest: memo };
    tmp6 = closure_9(QuestActivityButtonInner, obj4);
  }
  return tmp6;
});
