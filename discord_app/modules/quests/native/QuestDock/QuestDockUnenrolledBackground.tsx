// discord_app/modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import { QuestDockMode } from "QuestsExperimentLocations" /* 6716 */;
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT" /* 14447 */;
import { VerticalGradient } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
let c4 = importAllResult;
({ AppState: c5, StyleSheet } = get_ActivityIndicator);
({ QUEST_DOCK_EXPANDED_HEIGHT, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: c9 } = QUEST_DOCK_COLLAPSED_HEIGHT);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let obj = { backgroundWrapper: null, backgroundHeroAsset: null, backgroundHeroAssetVideo: null, backgroundGradient: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.right = undefined;
obj.bottom = undefined;
obj.height = QUEST_DOCK_EXPANDED_HEIGHT;
obj.zIndex = 1;
obj[0] = obj;
createCacheKey = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.height = QUEST_DOCK_EXPANDED_HEIGHT;
createCacheKey.resizeMode = "cover";
obj[1] = createCacheKey;
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj[2] = {};
let obj3 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj3.height = QUEST_DOCK_EXPANDED_HEIGHT;
obj[3] = obj3;
let closure_13 = createCacheKey.createStyles(obj);
let closure_14 = { code: "function QuestDockUnenrolledBackgroundTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions}=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};}" };
let closure_15 = { code: "function QuestDockUnenrolledBackgroundTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,videoLoaded,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()!==QuestDockMode.EXPANDED||!videoLoaded?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const memoResult = importAllResult.memo(function QuestDockUnenrolledBackground() {
  let obj = activeQuestDockMode(setRestingQuestDockMode[9]);
  const questCreative = obj.useQuestCreative();
  const tmp4 = callback2();
  obj1 = activeQuestDockMode(setRestingQuestDockMode[10]);
  const questDockHeroAsset = obj1.useQuestDockHeroAsset(questCreative);
  ({ staticUrl, videoAsset } = questDockHeroAsset);
  let obj2 = importAllResult;
  const context = importAllResult.useContext(activeQuestDockMode(setRestingQuestDockMode[11]).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  setRestingQuestDockMode = importAllResult.useContext(activeQuestDockMode(setRestingQuestDockMode[12]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  let obj3 = activeQuestDockMode(setRestingQuestDockMode[14]);
  let items = [closure_6];
  const stateFromStores = obj3.useStateFromStores(items, () => lib.useReducedMotion);
  let obj4 = activeQuestDockMode(setRestingQuestDockMode[15]);
  const token = obj4.useToken(windowDimensions(setRestingQuestDockMode[16]).colors.CARD_BACKGROUND_DEFAULT);
  const items1 = [token];
  const memo = importAllResult.useMemo(() => {
    const obj = windowDimensions(setRestingQuestDockMode[17])(token);
    const items = [obj.alpha(0).hex(), , , ];
    const alphaResult = obj.alpha(0);
    items[1] = obj.alpha(0.1).hex();
    const alphaResult1 = obj.alpha(0.1);
    items[2] = obj.alpha(0.8).hex();
    const alphaResult2 = obj.alpha(0.8);
    items[3] = obj.alpha(1).hex();
    return items;
  }, items1);
  const memo1 = importAllResult.useMemo(() => [0, 0.33, 0.76, 1], []);
  let obj5 = activeQuestDockMode(setRestingQuestDockMode[18]);
  const fn = function s() {
    let obj = activeQuestDockMode(setRestingQuestDockMode[19]);
    obj1 = activeQuestDockMode;
    let num = 0;
    if (activeQuestDockMode.get() === closure_1_7.COLLAPSED) {
      num = -1 * closure_1_9;
    }
    obj = { translateX: obj.withSpring(num, closure_1_8) };
    const items = [obj, ];
    let num3 = 0;
    if (obj1.get() === closure_1_7.COLLAPSED) {
      num3 = -1 * closure_1_9;
    }
    obj = { transform: null, width: null };
    obj1 = { translateY: activeQuestDockMode(setRestingQuestDockMode[19]).withSpring(num3, closure_1_8) };
    items[1] = obj1;
    obj[0] = items;
    obj[1] = windowDimensions.get().width;
    return obj;
  };
  obj = { withSpring: activeQuestDockMode(setRestingQuestDockMode[19]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8, windowDimensions };
  fn.__closure = obj;
  fn.__workletHash = 3565242281634;
  fn.__initData = closure_14;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const tmp14 = closure_8;
  const tmp16 = token;
  const tmp8 = windowDimensions(setRestingQuestDockMode[13])(activeQuestDockMode);
  [tmp18, closure_4] = token(importAllResult.useState("active" !== first.currentState), 2);
  const items2 = [activeQuestDockMode, setRestingQuestDockMode];
  const effect = importAllResult.useEffect(() => {
    closure_0 = first.addEventListener("change", (arg0) => {
      callback2("active" !== arg0);
      let tmp3 = lib(closure_1_2[20]).isIOS() && tmp;
      if (tmp3) {
        tmp3 = lib.get() === closure_1_7.EXPANDED;
      }
      if (tmp3) {
        callback(closure_1_7.COLLAPSED);
      }
    });
    return () => {
      lib.remove();
    };
  }, items2);
  let isRendered = !tmp18;
  if (!tmp18) {
    isRendered = importAllResult.useContext(windowDimensions(setRestingQuestDockMode[21])).isRendered;
  }
  if (isRendered) {
    isRendered = !stateFromStores;
  }
  if (isRendered) {
    isRendered = null != videoAsset;
  }
  if (isRendered) {
    let tmpResult = tmp(tmp2[20]);
    isRendered = !tmpResult.isAndroid();
  }
  if (isRendered) {
    tmpResult = tmp(tmp2[22]);
    isRendered = tmpResult.isHeroVideoSupported(videoAsset);
  }
  const tmp16Result = tmp16(obj2.useState(false), 2);
  first = tmp16Result[0];
  closure_6 = tmp16Result[1];
  const callback = obj2.useCallback(() => {
    lib(true);
  }, []);
  const tmp17 = token(importAllResult.useState("active" !== first.currentState), 2);
  class G {
    constructor() {
      obj = activeQuestDockMode(setRestingQuestDockMode[19]);
      num = 1;
      if (activeQuestDockMode.get() === closure_1_7.EXPANDED) {
        tmp = closure_5;
        num = 1;
        if (closure_5) {
          num = 0;
        }
      }
      obj = { opacity: obj.withSpring(num, closure_1_8) };
      return obj;
    }
  }
  obj = { withSpring: tmp(tmp2[19]).withSpring, activeQuestDockMode, QuestDockMode: tmp13, videoLoaded: first, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: tmp14 };
  G.__closure = obj;
  G.__workletHash = 13084905891385;
  G.__initData = closure_15;
  const animatedStyle1 = activeQuestDockMode(setRestingQuestDockMode[18]).useAnimatedStyle(G);
  obj1 = { style: items3, children: null };
  items3 = [tmp4.backgroundWrapper, animatedStyle];
  let tmp7Result = tmp7(tmp2[23]);
  if (isRendered) {
    obj2 = { children: null };
    obj3 = { style: null, onLoad: null, source: null, paused: null, resizeMode: "cover", muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false };
    obj3[0] = tmp4.backgroundHeroAssetVideo;
    obj3[1] = callback;
    obj4 = { uri: null };
    obj4[0] = videoAsset.url;
    obj3[2] = obj4;
    obj3[3] = tmp8 !== tmp13.EXPANDED;
    const items4 = [callback(tmp(tmp2[24]).VideoComponent, obj3), ];
    obj5 = { style: null, children: null };
    obj5[0] = animatedStyle1;
    tmp7Result = tmp7(tmp2[23]);
    const obj6 = { style: null, source: null };
    obj6[0] = tmp4.backgroundHeroAsset;
    const obj7 = { uri: null };
    obj7[0] = staticUrl;
    obj6[1] = obj7;
    obj5[1] = callback(tmp7(tmp2[25]), obj6);
    items4[1] = callback(tmp7Result, obj5);
    obj2[0] = items4;
    let tmp25Result = tmp25(obj2.Fragment, obj2);
    let tmp27 = callback;
  } else {
    tmp27 = callback;
    const obj8 = { style: null, source: null };
    obj8[0] = tmp4.backgroundHeroAsset;
    const obj9 = { uri: null };
    obj9[0] = staticUrl;
    obj8[1] = obj9;
    tmp25Result = callback(tmp7(tmp2[25]), obj8);
  }
  const items5 = [tmp25Result, tmp27(windowDimensions(setRestingQuestDockMode[26]), { locations: memo1, style: tmp4.backgroundGradient, start: VerticalGradient.START, end: VerticalGradient.END, colors: memo })];
  obj1[1] = items5;
  return closure_12(tmp7Result, obj1);
});
let obj2 = {};
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx");

export default memoResult;