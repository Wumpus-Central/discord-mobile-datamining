// discord_app/modules/frames/panel/native/QuestActivityButton.tsx
import importAllResult from "play";
import { View } from "contextMenuButton";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import initializeState from "initializeState";
import set from "set";
import { QuestVariants } from "QuestsExperimentLocations";
import jsxProd from "module_16186";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4083";

let c10;
let c9;
const require = arg1;
function QuestActivityButtonInner(quest) {
  let userStatus;
  quest = quest.quest;
  let stateFromStores;
  let dependencyMap;
  let num;
  let c4;
  let sharedValue;
  let sharedValue1;
  let ref;
  let c8;
  let obj = quest(10420);
  let obj1 = quest(589);
  let items = [sharedValue];
  stateFromStores = obj1.useStateFromStores(items, () => sharedValue.useReducedMotion);
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
      let obj = { questId: null };
      obj[0] = tmp.id;
      stateFromStores(_undefined[13]).pushLazy(quest(_undefined[15])(_undefined[14], _undefined.paths), obj, outer1_17);
      const obj3 = stateFromStores(_undefined[13]);
    } else {
      obj = stateFromStores(_undefined[16]);
      obj = { questId: null };
      obj[0] = tmp.id;
      obj.openLazy(quest(_undefined[15])(_undefined[17], _undefined.paths), "QuestProgressBottomSheet", obj);
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
  c4 = tmp9;
  let tmpResult = tmp(4083);
  sharedValue = tmpResult.useSharedValue(num);
  tmpResult = tmp(4083);
  let num2 = 0;
  if (tmp9) {
    num2 = 1;
  }
  sharedValue1 = tmpResult.useSharedValue(num2);
  ref = obj2.useRef(null);
  const tmp14 = callback3();
  c8 = tmp14;
  const fn = function u() {
    return { shadowOpacity: sharedValue1.get() };
  };
  fn.__closure = { glowOpacity: sharedValue1 };
  fn.__workletHash = 4459043613798;
  fn.__initData = closure_14;
  const items2 = [tmp14.confetti];
  const animatedStyle = quest(4083).useAnimatedStyle(fn);
  const memo = obj2.useMemo(() => {
    const obj = {};
    const merged = Object.assign(_undefined2.confetti);
    obj.width = outer1_11;
    obj.height = outer1_11;
    const items = [{ scale: 1.6 }];
    obj.transform = items;
    return obj;
  }, items2);
  const tmpResult1 = quest(4083);
  const fn2 = function l() {
    return { strokeDashoffset: c2 - c2 * sharedValue.get() };
  };
  fn2.__closure = { circumference: result, animatedProgress: sharedValue };
  fn2.__workletHash = 3373122453897;
  fn2.__initData = closure_15;
  const items3 = [sharedValue, num, stateFromStores];
  const animatedProps = quest(4083).useAnimatedProps(fn2);
  const effect = obj2.useEffect(() => {
    let num = 500;
    if (stateFromStores) {
      num = 0;
    }
    const result = sharedValue.set(quest(_undefined[18]).withTiming(num, { duration: num }));
    return () => {
      outer1_0(outer1_2[7]).cancelAnimation(maybeApplyNoTextColorForLightCustomTheme);
    };
  }, items3);
  const items4 = [sharedValue1, tmp9, stateFromStores];
  const effect1 = obj2.useEffect(() => {
    if (!stateFromStores) {
      if (c4) {
        const result = sharedValue1.set(quest(_undefined[18]).withTiming(1, { duration: 500 }));
        const current = ref.current;
        if (current != null) {
          current.play();
        }
        const obj = quest(_undefined[18]);
      }
    }
    const result1 = sharedValue1.set(0);
    const current2 = ref.current;
    if (current2 != null) {
      current2.reset();
    }
  }, items4);
  obj = { style: items5, pointerEvents: "box-none", children: null };
  items5 = [, , ];
  ({ container: arr6[0], completionGlow: arr6[1] } = tmp14);
  items5[2] = animatedStyle;
  obj = { style: memo, pointerEvents: "none", children: null };
  obj1 = { ref, source: null, autoPlay: false, loop: false };
  const tmpResult2 = quest(4083);
  obj1[1] = quest(14439);
  obj[2] = callback(stateFromStores(5759), obj1);
  const items6 = [callback(c4, obj), , , ];
  obj2 = { style: tmp14.buttonWrapper, children: null };
  let obj3 = { icon: null, onPress: null, accessibilityLabel: null };
  const tmp20 = stateFromStores(5759);
  obj3[0] = stateFromStores(14307);
  obj3[1] = callback;
  const intl = tmp(1236).intl;
  obj3[2] = intl.string(quest(1236).t.JALI2K);
  obj2[1] = callback(stateFromStores(16186), obj3);
  items6[1] = callback(c4, obj2);
  const obj4 = { pointerEvents: "none", style: tmp14.canvas, children: null };
  const obj5 = { height: c11, width: c11, children: null };
  const obj6 = { cx: 16, cy: 16, r: 14.3, fill: "none", stroke: null, strokeWidth: 3.4, strokeDasharray: null };
  obj6[4] = stateFromStores(712).unsafe_rawColors.OPACITY_32;
  obj6[6] = result;
  obj5[2] = callback(quest(7880).Circle, obj6);
  obj4[2] = callback(quest(7880).Svg, obj5);
  items6[2] = callback(c4, obj4);
  const obj7 = { pointerEvents: "none", style: tmp14.canvas, children: null };
  const obj8 = { height: c11, width: c11, children: null };
  obj8[2] = callback(closure_12, { cx: 16, cy: 16, r: 14.3, fill: "none", stroke: tmp14.progressPath.color, strokeWidth: 3.4, strokeDasharray: result, animatedProps });
  obj7[2] = callback(quest(7880).Svg, obj8);
  items6[3] = callback(c4, obj7);
  obj[2] = items6;
  return callback2(stateFromStores(4083).View, obj);
}
let c3 = importAllResult;
({ jsx: c9, jsxs: c10 } = jsxProd);
let c11 = 32;
let closure_12 = require("module_4083").createAnimatedComponent(require("inlineStyles").Circle);
let obj = { container: { position: "relative", width: 32, height: 32, justifyContent: "center", alignItems: "center" }, completionGlow: { shadowOffset: { width: 0, height: 0 }, shadowRadius: 12, shadowOpacity: 0, elevation: 4, shadowColor: "#30C77399" }, canvas: { position: "absolute", transform: items }, progressPath: null, buttonWrapper: null, confetti: null };
items = [{ rotate: "-90deg" }];
obj = { color: require("Themes").colors.STATUS_POSITIVE };
obj[3] = obj;
obj[4] = { position: "absolute", borderRadius: 16, overflow: "hidden" };
obj[5] = { position: "absolute" };
let closure_13 = createCacheKey.createStyles(obj);
let closure_14 = { code: "function QuestActivityButtonTsx1(){const{glowOpacity}=this.__closure;return{shadowOpacity:glowOpacity.get()};}" };
let closure_15 = { code: "function QuestActivityButtonTsx2(){const{circumference,animatedProgress}=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};}" };
const QUEST_ACTIVITY_UNENROLLED_MODAL_KEY = "QUEST_ACTIVITY_UNENROLLED_MODAL_KEY";
const memoResult = importAllResult.memo(function QuestActivityButton(applicationId) {
  applicationId = applicationId.applicationId;
  let stateFromStores;
  let stateFromStores1;
  let memo;
  let stateFromStores2;
  let obj = applicationId(stateFromStores1[12]);
  const items = [initializeState];
  stateFromStores = obj.useStateFromStores(items, () => quests.quests);
  const items1 = [set];
  stateFromStores1 = applicationId(stateFromStores1[12]).useStateFromStores(items1, () => state.getState().autoEnroll);
  const items2 = [stateFromStores, applicationId];
  memo = memo.useMemo(() => {
    const eligibleQuestsForApplicationId = applicationId(stateFromStores1[24]).getEligibleQuestsForApplicationId(stateFromStores, applicationId, true);
    return eligibleQuestsForApplicationId.find((config) => {
      const features = config.config.features;
      return features.includes(constants.MOBILE_ACTIVITY_QUEST);
    });
  }, items2);
  const obj2 = applicationId(stateFromStores1[12]);
  const items3 = [set];
  stateFromStores2 = applicationId(stateFromStores1[12]).useStateFromStores(items3, () => {
    let id;
    if (memo != null) {
      id = memo.id;
    }
    return outer1_7.isDismissed(id);
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
      let obj = stateFromStores(stateFromStores1[13]);
      obj = { questId: null };
      obj[0] = tmp.id;
      obj.pushLazy(applicationId(stateFromStores1[15])(stateFromStores1[14], stateFromStores1.paths), obj, outer1_17);
    }
  }, items4);
  let tmp6 = null;
  if (null != memo) {
    obj = { quest: null };
    obj[0] = memo;
    tmp6 = callback(QuestActivityButtonInner, obj);
  }
  return tmp6;
});
let result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/frames/panel/native/QuestActivityButton.tsx");

export default memoResult;