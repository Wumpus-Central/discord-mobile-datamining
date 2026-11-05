// === Module 19453: QuestActivityButton ===

// Module 19453 (QuestActivityButton)
import nativeDefault from "native" /* 575 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import timing_timing from "timing/timing" /* 5380 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import QuestMatchingUtils from "QuestMatchingUtils" /* 14912 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;
import QuestStore from "QuestStore" /* 7991 */;
import UnenrolledActivityQuestStore from "UnenrolledActivityQuestStore" /* 19454 */;
import module_1652 from "module_1652" /* 1652 */;

require = fn;
function QuestActivityButtonInner(quest) {
  quest = quest.quest;
  _require = quest;
  let num;
  noop = undefined;
  let sharedValue;
  let sharedValue1;
  let ref;
  let confetti;
  let obj = require("hooks/QuestHooks");
  items = [sharedValue1];
  const stateFromStores = require("initialize").useStateFromStores(items, () => sharedValue1.useReducedMotion);
  importDefault = stateFromStores;
  const items1 = [, ];
  ({ id: arr2[0], userStatus } = quest);
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  items1[1] = enrolledAt;
  let enrolledAt1;
  const callback = noop.useCallback(() => {
    const userStatus = _undefined.userStatus;
    let enrolledAt;
    if (userStatus != null) {
      enrolledAt = userStatus.enrolledAt;
    }
    if (null == enrolledAt) {
      const obj2 = { questId: _undefined.id };
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(19455, dependencyMap.paths), obj2, QUEST_ACTIVITY_UNENROLLED_MODAL_KEY);
    } else {
      const obj4 = { questId: _undefined.id };
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(19456, dependencyMap.paths), "QuestProgressBottomSheet", obj4);
    }
  }, items1);
  let result = 2 * Math.PI;
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
  noop = tmp9;
  let obj2 = require("initialize");
  sharedValue = require("module_1652").useSharedValue(num);
  const tmpResult = require("module_1652");
  let num2 = 0;
  if (tmp9) {
    num2 = 1;
  }
  sharedValue1 = require("module_1652").useSharedValue(num2);
  ref = obj3.useRef(null);
  const tmp14 = closure_13();
  confetti = tmp14;
  const tmpResult4 = require("module_1652");
  const items2 = [closure_14, sharedValue1];
  _require = undefined;
  [tmp15, tmp16] = items2;
  let result1 = result * 14.3;
  class QuestActivityButtonTsx1 {
    constructor() {
      obj = { shadowOpacity: closure_0.get() };
      return obj;
    }
  }
  const items3 = [tmp16];
  QuestActivityButtonTsx1.__closure = items3;
  QuestActivityButtonTsx1.__workletHash = 8919500662559;
  QuestActivityButtonTsx1.__initData = tmp15;
  const items4 = [tmp14.confetti];
  const animatedStyle = require("module_1652").useAnimatedStyle(QuestActivityButtonTsx1);
  const memo = obj3.useMemo(() => {
    const obj = {};
    const merged = Object.assign(confetti.confetti);
    obj.width = height;
    obj.height = height;
    items = [{ scale: 1.6 }];
    obj.transform = items;
    return obj;
  }, items4);
  const tmpResult5 = require("module_1652");
  const items5 = [closure_15, result1, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp20, tmp21, tmp22] = items5;
  class QuestActivityButtonTsx2 {
    constructor() {
      obj = { strokeDashoffset: closure_0 - closure_0 * closure_1.get() };
      return obj;
    }
  }
  const items6 = [tmp21, tmp22];
  QuestActivityButtonTsx2.__closure = items6;
  QuestActivityButtonTsx2.__workletHash = 1636159470064;
  QuestActivityButtonTsx2.__initData = tmp20;
  const items7 = [sharedValue, num, stateFromStores];
  const animatedProps = require("module_1652").useAnimatedProps(QuestActivityButtonTsx2);
  const effect = obj3.useEffect(() => {
    num = 500;
    if (c1) {
      num = 0;
    }
    const result = sharedValue.set(timing_timing.withTiming(num, { duration: num }));
    return () => {
      c0(num[7]).cancelAnimation(sharedValue);
    };
  }, items7);
  const items8 = [sharedValue1, tmp9, stateFromStores];
  const effect1 = obj3.useEffect(() => {
    if (!c1) {
      if (closure_3) {
        const result = sharedValue1.set(timing_timing.withTiming(1, { duration: 500 }));
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
  }, items8);
  let obj4 = { style: null, pointerEvents: "box-none", children: null };
  const items9 = [, , ];
  ({ container: arr10[0], completionGlow: arr10[1] } = tmp14);
  items9[2] = animatedStyle;
  obj4.style = items9;
  const obj5 = { style: memo, pointerEvents: "none", children: null };
  const obj6 = { ref, source: null, autoPlay: false, loop: false };
  const tmpResult6 = require("module_1652");
  obj6.source = require("module_17322");
  obj5.children = closure_9(require("LottieAnimationView"), obj6);
  const items10 = [closure_9(sharedValue, obj5), , , ];
  const obj7 = { style: tmp14.buttonWrapper, children: null };
  const obj8 = { icon: null, onPress: null, accessibilityLabel: null };
  const tmp26 = require("LottieAnimationView");
  obj8.icon = require("module_14944");
  obj8.onPress = callback;
  const intl = tmp(tmp2[23]).intl;
  obj8.accessibilityLabel = intl.string(require("util").t.JALI2K);
  obj7.children = closure_9(require("VoicePanelIconButton"), obj8);
  items10[1] = closure_9(sharedValue, obj7);
  const obj9 = { pointerEvents: "none", style: tmp14.canvas, children: null };
  const size = { height: v32, width: v32, children: null };
  const tmp27 = require("VoicePanelIconButton");
  size.children = closure_9(require("inlineStyles").Circle, { cx: 16, cy: 16, r: 14.3, fill: "none", stroke: require("native").unsafe_rawColors.OPACITY_32, strokeWidth: 3.4, strokeDasharray: result1 });
  obj9.children = closure_9(require("inlineStyles").Svg, size);
  items10[2] = closure_9(sharedValue, obj9);
  const obj11 = { pointerEvents: "none", style: tmp14.canvas, children: null };
  const size1 = { height: v32, width: v32, children: closure_9(closure_12, { cx: 16, cy: 16, r: 14.3, fill: "none", stroke: tmp14.progressPath.color, strokeWidth: 3.4, strokeDasharray: result1, animatedProps }) };
  obj11.children = closure_9(require("inlineStyles").Svg, size1);
  items10[3] = closure_9(sharedValue, obj11);
  obj4.children = items10;
  return closure_10(require("module_1652").View, obj4);
}
const View = fn(17).View;
const QuestVariants = fn(6919).QuestVariants;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let c11 = 32;
let closure_12 = module_1652.createAnimatedComponent(fn(8176).Circle);
const createStyles = fn(5143);
let obj = { container: { position: "relative", width: 32, height: 32, justifyContent: "center", alignItems: "center" }, completionGlow: { shadowOffset: { width: 0, height: 0 }, shadowRadius: 12, shadowOpacity: 0, elevation: 4, shadowColor: "#30C77399" }, canvas: null, progressPath: { color: nativeDefault.colors.STATUS_POSITIVE }, buttonWrapper: { position: "absolute", borderRadius: 16, overflow: "hidden" }, confetti: { position: "absolute" } };
let obj2 = { position: "absolute", transform: null };
let items = [{ rotate: "-90deg" }];
obj2.transform = items;
obj.canvas = obj2;
let closure_13 = createStyles.createStyles(obj);
let closure_14 = { code: "(function QuestActivityButtonTsx1(){let[glowOpacity]=this.__closure;return{shadowOpacity:glowOpacity.get()};})" };
let closure_15 = { code: "(function QuestActivityButtonTsx2(){let[circumference,animatedProgress]=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};})" };
const QUEST_ACTIVITY_UNENROLLED_MODAL_KEY = "QUEST_ACTIVITY_UNENROLLED_MODAL_KEY";
let obj4 = { color: nativeDefault.colors.STATUS_POSITIVE };
let size = fn(2);
let result = size.fileFinishedImporting("modules/frames/panel/native/QuestActivityButton.tsx");

export default noop.memo(function QuestActivityButton(applicationId) {
  applicationId = applicationId.applicationId;
  let stateFromStores1;
  let memo;
  items = [QuestStore];
  const stateFromStores = applicationId(stateFromStores1[12]).useStateFromStores(items, () => quests.quests);
  let obj = applicationId(stateFromStores1[12]);
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
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(19455, dependencyMap.paths), obj2, QUEST_ACTIVITY_UNENROLLED_MODAL_KEY);
    }
  }, items4);
  let tmp6 = null;
  if (null != memo) {
    const obj4 = { quest: memo };
    tmp6 = closure_9(QuestActivityButtonInner, obj4);
  }
  return tmp6;
});