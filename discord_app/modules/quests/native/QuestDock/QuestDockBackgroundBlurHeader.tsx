// === Module 15034: QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED ===

// Module 15034 (QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)
import ThemesDefault from "Themes" /* 709 */;
import CONFIG_NEVER_ANIMATE from "CONFIG_NEVER_ANIMATE" /* 4928 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { QuestDockMode } from "QuestsExperimentLocations" /* 5396 */;
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT" /* 14937 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
let c4 = importAllResult;
({ AccessibilityInfo: c5, View: closure_6 } = get_ActivityIndicator);
const QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = QUEST_DOCK_COLLAPSED_HEIGHT.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
({ QUEST_DOCK_CONTENT_BORDER_RADII: c9, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: c10, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: unpackModuleId, QUEST_DOCK_COLLAPSED_HEIGHT } = QUEST_DOCK_COLLAPSED_HEIGHT);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
let obj = { header: null, secondaryContent: null, collapsedContent: null, expandedContent: null, actionDisclosures: null, actionDisclosuresIcon: null, tertiaryContent: null };
obj = { alignItems: "center", justifyContent: "space-between", flexDirection: "row", height: QUEST_DOCK_COLLAPSED_HEIGHT, overflow: "hidden", paddingRight: ThemesDefault.space.PX_16, paddingLeft: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_8, position: "absolute", zIndex: 2 };
obj[0] = obj;
obj[1] = { flexGrow: 0, flexShrink: 0 };
obj[2] = { justifyContent: "center", position: "absolute", bottom: 0, top: 0, right: 0 };
createCacheKey = { alignItems: "center", flexDirection: "row", gap: ThemesDefault.space.PX_8 };
obj[3] = createCacheKey;
obj[4] = { alignItems: "center", display: "flex", flexDirection: "row", gap: 4 };
obj[5] = { height: 14, width: 14 };
obj[6] = { opacity: 0.7 };
let closure_15 = createCacheKey.createStyles(obj);
function questDockHeaderLayoutAnimation(currentOriginX) {
  obj = { initialValues: obj, animations: null };
  obj = { originX: currentOriginX.currentOriginX, originY: currentOriginX.currentOriginY, width: currentOriginX.currentWidth, height: currentOriginX.currentHeight };
  obj = { originX: CONFIG_NEVER_ANIMATE.withSpring(currentOriginX.targetOriginX, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED), originY: null, height: null, width: null };
  const obj4 = CONFIG_NEVER_ANIMATE;
  obj[1] = CONFIG_NEVER_ANIMATE.withSpring(currentOriginX.targetOriginY, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
  const obj5 = CONFIG_NEVER_ANIMATE;
  obj[2] = CONFIG_NEVER_ANIMATE.withSpring(currentOriginX.targetHeight, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
  const obj6 = CONFIG_NEVER_ANIMATE;
  obj[3] = CONFIG_NEVER_ANIMATE.withSpring(currentOriginX.targetWidth, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
  obj[1] = obj;
  return obj;
}
questDockHeaderLayoutAnimation.__closure = { withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
questDockHeaderLayoutAnimation.__workletHash = 13829887811453;
questDockHeaderLayoutAnimation.__initData = { code: "function questDockHeaderLayoutAnimation_QuestDockBackgroundBlurHeaderTsx1(values){const{withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:withSpring(values.targetHeight,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}};}" };
let closure_17 = { code: "function QuestDockBackgroundBlurHeaderTsx2(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:activeQuestDockMode.get()===QuestDockMode.EXPANDED?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};}" };
let closure_18 = { code: "function QuestDockBackgroundBlurHeaderTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
let closure_19 = { code: "function QuestDockBackgroundBlurHeaderTsx4(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED*-1:0};}" };
let closure_20 = { code: "function QuestDockBackgroundBlurHeaderTsx5(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
let closure_21 = { code: "function QuestDockBackgroundBlurHeaderTsx6(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED};}" };
let closure_22 = { code: "function QuestDockBackgroundBlurHeaderTsx7(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}" };
let closure_23 = { code: "function QuestDockBackgroundBlurHeaderTsx8(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs}=this.__closure;return{borderRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:questDockWrapperSpecs.get().width};}" };
let obj2 = { withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
const memoResult = importAllResult.memo(function QuestDockBackgroundBlurHeader(arg0) {
  ({ blurHash, withPressableDisclosure } = arg0);
  ({ children, collapsedContent } = arg0);
  if (withPressableDisclosure === undefined) {
    withPressableDisclosure = false;
  }
  let activeQuestDockMode;
  let questDockWrapperSpecs;
  dependencyMap = undefined;
  let token;
  importAllResult = undefined;
  ({ onDisclosurePress, onSubmenuPress } = arg0);
  const context = importAllResult.useContext(activeQuestDockMode(14938).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  [tmp5, c2] = token(importAllResult.useState(false), 2);
  const effect = importAllResult.useEffect(() => {
    if (obj.isIOS()) {
      const result = closure_1_5.isReduceTransparencyEnabled();
      result.then(_undefined);
      closure_0 = closure_1_5.addEventListener("reduceTransparencyChanged", _undefined);
      return () => closure_0.remove();
    }
    obj = activeQuestDockMode(_undefined[10]);
  }, []);
  let obj = activeQuestDockMode(4197);
  token = obj.useToken(questDockWrapperSpecs(709).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp9 = questDockWrapperSpecs(15026)(token);
  importAllResult = tmp9;
  obj1 = activeQuestDockMode(4217);
  class G {
    constructor() {
      obj = activeQuestDockMode;
      tmp = closure_1_7;
      obj = { borderTopLeftRadius: activeQuestDockMode.get() === closure_1_7.EXPANDED ? closure_1_9 : closure_3, borderTopRightRadius: obj.get() === tmp.EXPANDED ? closure_1_9 : closure_3, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null, transform: null };
      if (obj.get() === tmp.EXPANDED) {
        withSpringResult = closure_1_9;
      } else {
        tmp2 = activeQuestDockMode;
        tmp3 = closure_2;
        obj3 = activeQuestDockMode(closure_2[8]);
        tmp4 = closure_4;
        tmp5 = closure_1_8;
        withSpringResult = obj3.withSpring(closure_4.get(), closure_1_8);
      }
      obj[2] = withSpringResult;
      if (obj.get() === tmp.EXPANDED) {
        withSpringResult1 = closure_1_9;
      } else {
        tmp7 = activeQuestDockMode;
        tmp8 = closure_2;
        obj4 = activeQuestDockMode(closure_2[8]);
        tmp9 = closure_4;
        tmp10 = closure_1_8;
        withSpringResult1 = obj4.withSpring(closure_4.get(), closure_1_8);
      }
      obj[3] = withSpringResult1;
      if (obj.get() === tmp.EXPANDED) {
        tmp13 = questDockWrapperSpecs;
        tmp14 = closure_1_11;
        num = 2;
        width = questDockWrapperSpecs.get().width - 2 * closure_1_11;
      } else {
        tmp12 = questDockWrapperSpecs;
        width = questDockWrapperSpecs.get().width;
      }
      obj[4] = width;
      tmp15 = activeQuestDockMode;
      tmp16 = closure_2;
      obj5 = activeQuestDockMode(closure_2[8]);
      num2 = 0;
      if (obj.get() === tmp.EXPANDED) {
        num2 = closure_1_11;
      }
      obj1 = { translateX: obj5.withSpring(num2, closure_1_8) };
      tmp17 = closure_1_8;
      items = [, ];
      items[0] = obj1;
      tmp15Result = tmp15(tmp16[8]);
      num3 = 0;
      if (obj.get() === tmp.EXPANDED) {
        num3 = closure_1_11;
      }
      obj2 = { translateY: tmp15Result.withSpring(num3, tmp17) };
      items[1] = obj2;
      obj[5] = items;
      return obj;
    }
  }
  obj = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII: closure_9, questDockBorderRadius: token, withSpring: activeQuestDockMode(4928).withSpring, questDockAnimatedBorderRadius: tmp9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11 };
  G.__closure = obj;
  G.__workletHash = 17202411570804;
  G.__initData = closure_17;
  const animatedStyle = obj1.useAnimatedStyle(G);
  let obj3 = activeQuestDockMode(4217);
  const fn = function b() {
    let obj = activeQuestDockMode(_undefined[8]);
    let num = 1;
    if (activeQuestDockMode.get() === closure_1_7.EXPANDED) {
      num = 0;
    }
    obj = { opacity: obj.withSpring(num, closure_1_8) };
    return obj;
  };
  obj = { withSpring: activeQuestDockMode(4928).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn.__closure = obj;
  fn.__workletHash = 5804990093011;
  fn.__initData = closure_18;
  const animatedStyle1 = obj3.useAnimatedStyle(fn);
  let obj5 = activeQuestDockMode(4217);
  class Y {
    constructor() {
      right = 0;
      if (activeQuestDockMode.get() === closure_1_7.EXPANDED) {
        tmp = closure_1_10;
        num2 = -1;
        right = -1 * closure_1_10;
      }
      return { right };
    }
  }
  obj1 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  Y.__closure = obj1;
  Y.__workletHash = 14001429324395;
  Y.__initData = closure_19;
  const animatedStyle2 = obj5.useAnimatedStyle(Y);
  let obj7 = activeQuestDockMode(4217);
  const fn2 = function x() {
    let obj = activeQuestDockMode(_undefined[8]);
    let num = 0;
    if (activeQuestDockMode.get() === closure_1_7.EXPANDED) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, closure_1_8) };
    return obj;
  };
  const tmp4 = token(importAllResult.useState(false), 2);
  fn2.__closure = { withSpring: activeQuestDockMode(4928).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn2.__workletHash = 6229744150165;
  fn2.__initData = closure_20;
  const animatedStyle3 = obj7.useAnimatedStyle(fn2);
  let obj9 = activeQuestDockMode(4217);
  const fn3 = function q() {
    let right = 0;
    if (activeQuestDockMode.get() !== closure_1_7.EXPANDED) {
      right = closure_1_10;
    }
    return { right };
  };
  fn3.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  fn3.__workletHash = 10870034799551;
  fn3.__initData = closure_21;
  const animatedStyle4 = obj9.useAnimatedStyle(fn3);
  let obj10 = activeQuestDockMode(4217);
  class W {
    constructor() {
      pointerEvents = "none";
      if (activeQuestDockMode.get() === closure_1_7.EXPANDED) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
  }
  W.__closure = { activeQuestDockMode, QuestDockMode };
  W.__workletHash = 3272003844163;
  W.__initData = closure_22;
  const animatedProps = obj10.useAnimatedProps(W);
  let obj11 = activeQuestDockMode(4217);
  class V {
    constructor() {
      obj = activeQuestDockMode;
      tmp = closure_1_7;
      obj = { borderRadius: activeQuestDockMode.get() === closure_1_7.EXPANDED ? closure_1_9 : closure_3, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null };
      if (obj.get() === tmp.EXPANDED) {
        withSpringResult = closure_1_9;
      } else {
        tmp2 = activeQuestDockMode;
        tmp3 = closure_2;
        obj3 = activeQuestDockMode(closure_2[8]);
        tmp4 = closure_4;
        tmp5 = closure_1_8;
        withSpringResult = obj3.withSpring(closure_4.get(), closure_1_8);
      }
      obj[1] = withSpringResult;
      if (obj.get() === tmp.EXPANDED) {
        withSpringResult1 = closure_1_9;
      } else {
        tmp7 = activeQuestDockMode;
        tmp8 = closure_2;
        obj4 = activeQuestDockMode(closure_2[8]);
        tmp9 = closure_4;
        tmp10 = closure_1_8;
        withSpringResult1 = obj4.withSpring(closure_4.get(), closure_1_8);
      }
      obj[2] = withSpringResult1;
      obj[3] = questDockWrapperSpecs.get().width;
      return obj;
    }
  }
  obj3 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII: closure_9, questDockBorderRadius: token, withSpring: activeQuestDockMode(4928).withSpring, questDockAnimatedBorderRadius: tmp9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs };
  V.__closure = obj3;
  V.__workletHash = 8904986205240;
  V.__initData = closure_23;
  const animatedStyle5 = obj11.useAnimatedStyle(V);
  let tmp17 = callback2();
  let obj4 = { style: items, layout: questDockHeaderLayoutAnimation, children: null };
  items = [tmp17.header, animatedStyle];
  const obj2 = { withSpring: activeQuestDockMode(4928).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  let obj14 = activeQuestDockMode(1235);
  if (obj14.isAndroid()) {
    if (null != blurHash) {
      obj5 = { placeholder: null, animatedStyle: null, animatedLayout: null };
      obj5[0] = blurHash;
      obj5[1] = animatedStyle5;
      obj5[2] = tmp20;
      let tmp23 = callback(tmp7(15035), obj5);
      let tmp22 = callback;
    }
    const items1 = [tmp23, children, ];
    const obj6 = { style: null, children: null };
    obj6[0] = tmp17.secondaryContent;
    obj7 = { style: null, layout: null, children: null };
    const items2 = [tmp17.collapsedContent, animatedStyle2];
    obj7[0] = items2;
    obj7[1] = tmp20;
    let tmp7Result = tmp7(7808);
    const obj8 = { style: null, children: null };
    obj8[0] = animatedStyle1;
    obj8[1] = collapsedContent;
    obj7[2] = tmp22(tmp7(7808), obj8);
    const items3 = [tmp22(tmp7Result, obj7), ];
    obj9 = { animatedProps: null, style: null, layout: null, children: null };
    obj9[0] = animatedProps;
    obj9[1] = animatedStyle4;
    obj9[2] = tmp20;
    tmp7Result = tmp7(7808);
    obj10 = { style: null, children: null };
    const items4 = [tmp17.expandedContent, animatedStyle3];
    obj10[0] = items4;
    if (withPressableDisclosure) {
      obj11 = { onPress: null, accessibilityRole: "button", style: null, children: null };
      obj11[0] = onDisclosurePress;
      const items5 = [, ];
      ({ actionDisclosures: arr7[0], tertiaryContent: arr7[1] } = tmp17);
      obj11[2] = items5;
      const obj12 = { children: null };
      const obj13 = { color: "interactive-text-active", variant: "text-sm/medium", children: null };
      const intl2 = tmp(1233).intl;
      obj13[2] = intl2.string(tmp(1233).t.o6FLcF);
      const items6 = [tmp22(tmp(4474).Text, obj13), ];
      obj14 = { color: null, style: null };
      obj14[0] = tmp7(709).colors.INTERACTIVE_TEXT_ACTIVE;
      obj14[1] = tmp17.actionDisclosuresIcon;
      items6[1] = tmp22(tmp(11078).CircleQuestionIcon, obj14);
      obj12[0] = items6;
      obj11[3] = tmp18(closure_13, obj12);
      let tmp22Result = tmp22(tmp(5077).PressableOpacity, obj11);
    } else {
      const obj15 = { style: null, children: null };
      const items7 = [, ];
      ({ actionDisclosures: arr6[0], tertiaryContent: arr6[1] } = tmp17);
      obj15[0] = items7;
      const obj16 = { color: "text-default", variant: "text-sm/medium", children: null };
      const intl = tmp(1233).intl;
      obj16[2] = intl.string(tmp(1233).t.o6FLcF);
      obj15[1] = tmp22(tmp(4474).Text, obj16);
      tmp22Result = tmp22(tmp25, obj15);
    }
    const items8 = [tmp22Result, tmp22(tmp7(15037), {}), ];
    const obj17 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    class G {
      constructor() {
        obj = activeQuestDockMode;
        tmp = closure_1_7;
        obj = { borderTopLeftRadius: activeQuestDockMode.get() === closure_1_7.EXPANDED ? closure_1_9 : closure_3, borderTopRightRadius: obj.get() === tmp.EXPANDED ? closure_1_9 : closure_3, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null, transform: null };
        if (obj.get() === tmp.EXPANDED) {
          withSpringResult = closure_1_9;
        } else {
          tmp2 = activeQuestDockMode;
          tmp3 = closure_2;
          obj3 = activeQuestDockMode(closure_2[8]);
          tmp4 = closure_4;
          tmp5 = closure_1_8;
          withSpringResult = obj3.withSpring(closure_4.get(), closure_1_8);
        }
        obj[2] = withSpringResult;
        if (obj.get() === tmp.EXPANDED) {
          withSpringResult1 = closure_1_9;
        } else {
          tmp7 = activeQuestDockMode;
          tmp8 = closure_2;
          obj4 = activeQuestDockMode(closure_2[8]);
          tmp9 = closure_4;
          tmp10 = closure_1_8;
          withSpringResult1 = obj4.withSpring(closure_4.get(), closure_1_8);
        }
        obj[3] = withSpringResult1;
        if (obj.get() === tmp.EXPANDED) {
          tmp13 = questDockWrapperSpecs;
          tmp14 = closure_1_11;
          num = 2;
          width = questDockWrapperSpecs.get().width - 2 * closure_1_11;
        } else {
          tmp12 = questDockWrapperSpecs;
          width = questDockWrapperSpecs.get().width;
        }
        obj[4] = width;
        tmp15 = activeQuestDockMode;
        tmp16 = closure_2;
        obj5 = activeQuestDockMode(closure_2[8]);
        num2 = 0;
        if (obj.get() === tmp.EXPANDED) {
          num2 = closure_1_11;
        }
        obj1 = { translateX: obj5.withSpring(num2, closure_1_8) };
        tmp17 = closure_1_8;
        items = [, ];
        items[0] = obj1;
        tmp15Result = tmp15(tmp16[8]);
        num3 = 0;
        if (obj.get() === tmp.EXPANDED) {
          num3 = closure_1_11;
        }
        obj2 = { translateY: tmp15Result.withSpring(num3, tmp17) };
        items[1] = obj2;
        obj[5] = items;
        return obj;
      }
    }
    obj17[1] = obj29.string(tmp(1233).t.PdRCRg);
    obj17[2] = onSubmenuPress;
    obj17[3] = tmp17.tertiaryContent;
    const obj18 = { color: null };
    obj18[0] = tmp7(709).colors.INTERACTIVE_TEXT_ACTIVE;
    obj17[4] = tmp22(tmp(8817).MoreHorizontalIcon, obj18);
    items8[2] = tmp22(tmp(5077).PressableOpacity, obj17);
    obj10[1] = items8;
    obj9[3] = tmp18(tmp7(7808), obj10);
    items3[1] = tmp22(tmp7Result, obj9);
    obj6[1] = items3;
    items1[2] = tmp18(closure_6, obj6);
    obj4[2] = items1;
    return tmp18(tmp19, obj4);
  }
  tmp22 = callback;
  tmp23 = callback(tmp7(15003), { animatedStyle: animatedStyle5, animatedLayout: tmp20 });
});
let result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBackgroundBlurHeader.tsx");

export default memoResult;