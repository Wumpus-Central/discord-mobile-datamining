// discord_app/modules/quests/native/QuestDock/QuestDockBackgroundBlurHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_PlatformUtils from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ AccessibilityInfo: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const QuestDockMode = fn(5661).QuestDockMode;
const QuestDockConstants = fn(15362);
const QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = QuestDockConstants.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
({
  QUEST_DOCK_CONTENT_BORDER_RADII: closure_9,
  QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: c10,
  QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11,
  QUEST_DOCK_COLLAPSED_HEIGHT,
} = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4756);
let obj = {
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: QUEST_DOCK_COLLAPSED_HEIGHT,
    overflow: "hidden",
    paddingRight: nativeDefault.space.PX_16,
    paddingLeft: nativeDefault.space.PX_8,
    gap: nativeDefault.space.PX_8,
    position: "absolute",
    zIndex: 2,
  },
  secondaryContent: { flexGrow: 0, flexShrink: 0 },
  collapsedContent: { justifyContent: "center", position: "absolute", bottom: 0, top: 0, right: 0 },
  expandedContent: null,
  actionDisclosures: null,
  actionDisclosuresIcon: null,
  tertiaryContent: null,
};
let obj3 = {
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  height: QUEST_DOCK_COLLAPSED_HEIGHT,
  overflow: "hidden",
  paddingRight: nativeDefault.space.PX_16,
  paddingLeft: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_8,
  position: "absolute",
  zIndex: 2,
};
obj.expandedContent = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj.actionDisclosures = { alignItems: "center", display: "flex", flexDirection: "row", gap: 4 };
obj.actionDisclosuresIcon = { height: 14, width: 14 };
obj.tertiaryContent = { opacity: 0.7 };
let closure_15 = createStyles.createStyles(obj);
function questDockHeaderLayoutAnimation(originX) {
  const obj = {
    initialValues: {
      originX: originX.currentOriginX,
      originY: originX.currentOriginY,
      width: originX.currentWidth,
      height: originX.currentHeight,
    },
    animations: null,
  };
  const size = {
    originX: spring.withSpring(originX.targetOriginX, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),
    originY: null,
    height: null,
    width: null,
  };
  size.originY = spring.withSpring(originX.targetOriginY, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
  size.height = spring.withSpring(originX.targetHeight, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
  size.width = spring.withSpring(originX.targetWidth, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
  obj.animations = size;
  return obj;
}
let obj4 = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 };
questDockHeaderLayoutAnimation.__closure = { withSpring: fn(5185).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
questDockHeaderLayoutAnimation.__workletHash = 13829887811453;
questDockHeaderLayoutAnimation.__initData = {
  code: "function questDockHeaderLayoutAnimation_QuestDockBackgroundBlurHeaderTsx1(values){const{withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:withSpring(values.targetHeight,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}};}",
};
const __initData = {
  code: "function QuestDockBackgroundBlurHeaderTsx2(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:activeQuestDockMode.get()===QuestDockMode.EXPANDED?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};}",
};
const __initData2 = {
  code: "function QuestDockBackgroundBlurHeaderTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}",
};
const __initData3 = {
  code: "function QuestDockBackgroundBlurHeaderTsx4(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED*-1:0};}",
};
const __initData4 = {
  code: "function QuestDockBackgroundBlurHeaderTsx5(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}",
};
const __initData5 = {
  code: "function QuestDockBackgroundBlurHeaderTsx6(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED};}",
};
const __initData6 = {
  code: "function QuestDockBackgroundBlurHeaderTsx7(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}",
};
const __initData7 = {
  code: "function QuestDockBackgroundBlurHeaderTsx8(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs}=this.__closure;return{borderRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:questDockWrapperSpecs.get().width};}",
};
const __initData8 = {
  code: "function QuestDockBackgroundBlurHeaderTsx9(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}",
};
let obj5 = { withSpring: fn(5185).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBackgroundBlurHeader.tsx");

export default noop.memo(function QuestDockBackgroundBlurHeader(hideBlurWhenCollapsed) {
  ({ blurHash, withPressableDisclosure } = hideBlurWhenCollapsed);
  ({ children, collapsedContent } = hideBlurWhenCollapsed);
  if (withPressableDisclosure === undefined) {
    withPressableDisclosure = false;
  }
  let flag = hideBlurWhenCollapsed.hideBlurWhenCollapsed;
  if (flag === undefined) {
    flag = false;
  }
  let activeQuestDockMode;
  dependencyMap = undefined;
  let token;
  noop = undefined;
  ({ onDisclosurePress, onSubmenuPress } = hideBlurWhenCollapsed);
  const context = noop.useContext(activeQuestDockMode(15363).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  const questDockWrapperSpecs = context.questDockWrapperSpecs;
  [tmp5, c2] = token(noop.useState(false), 2);
  const effect = noop.useEffect(() => {
    if (obj.isIOS()) {
      const result = hasOwnProperty.isReduceTransparencyEnabled();
      result.then(c2);
      closure_0 = hasOwnProperty.addEventListener("reduceTransparencyChanged", c2);
      return () => closure_0.remove();
    }
    obj = utils_PlatformUtils;
  }, []);
  const tmp4 = token(noop.useState(false), 2);
  token = activeQuestDockMode(4457).useToken(questDockWrapperSpecs(576).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp9 = questDockWrapperSpecs(15451)(token);
  noop = tmp9;
  let obj = activeQuestDockMode(4457);
  class Y {
    constructor() {
      obj = activeQuestDockMode;
      tmp = QuestDockMode;
      obj1 = {
        borderTopLeftRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? closure_9 : closure_3,
        borderTopRightRadius: obj.get() === tmp.EXPANDED ? closure_9 : closure_3,
        borderBottomLeftRadius: null,
        borderBottomRightRadius: null,
        width: null,
        transform: null,
      };
      if (obj.get() === tmp.EXPANDED) {
        withSpringResult = closure_9;
      } else {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj3 = closure_0(closure_2[8]);
        tmp4 = closure_4;
        tmp5 = closure_8;
        withSpringResult = obj3.withSpring(closure_4.get(), closure_8);
      }
      obj1.borderBottomLeftRadius = withSpringResult;
      if (obj.get() === tmp.EXPANDED) {
        withSpringResult1 = closure_9;
      } else {
        tmp7 = closure_0;
        tmp8 = closure_2;
        obj4 = closure_0(closure_2[8]);
        tmp9 = closure_4;
        tmp10 = closure_8;
        withSpringResult1 = obj4.withSpring(closure_4.get(), closure_8);
      }
      obj1.borderBottomRightRadius = withSpringResult1;
      if (obj.get() === tmp.EXPANDED) {
        tmp13 = questDockWrapperSpecs;
        tmp14 = closure_11;
        num = 2;
        width = questDockWrapperSpecs.get().width - 2 * closure_11;
      } else {
        tmp12 = questDockWrapperSpecs;
        width = questDockWrapperSpecs.get().width;
      }
      obj1.width = width;
      tmp15 = closure_0;
      tmp16 = closure_2;
      obj5 = closure_0(closure_2[8]);
      num2 = 0;
      if (obj.get() === tmp.EXPANDED) {
        num2 = closure_11;
      }
      obj9 = { translateX: obj5.withSpring(num2, closure_8) };
      tmp17 = closure_8;
      items = [,];
      items[0] = obj9;
      tmp15Result = tmp15(tmp16[8]);
      num3 = 0;
      if (obj.get() === tmp.EXPANDED) {
        num3 = closure_11;
      }
      obj10 = { translateY: tmp15Result.withSpring(num3, tmp17) };
      items[1] = obj10;
      obj1.transform = items;
      return obj1;
    }
  }
  let obj2 = activeQuestDockMode(4492);
  Y.__closure = {
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_CONTENT_BORDER_RADII,
    questDockBorderRadius: token,
    withSpring: activeQuestDockMode(5185).withSpring,
    questDockAnimatedBorderRadius: tmp9,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
    questDockWrapperSpecs,
    QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11,
  };
  Y.__workletHash = 17202411570804;
  Y.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(Y);
  let obj3 = {
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_CONTENT_BORDER_RADII,
    questDockBorderRadius: token,
    withSpring: activeQuestDockMode(5185).withSpring,
    questDockAnimatedBorderRadius: tmp9,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
    questDockWrapperSpecs,
    QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11,
  };
  const fn = function x() {
    let num = 1;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 0;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
  };
  let obj4 = activeQuestDockMode(4492);
  fn.__closure = {
    withSpring: activeQuestDockMode(5185).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
  };
  fn.__workletHash = 5804990093011;
  fn.__initData = __initData2;
  const animatedStyle1 = obj4.useAnimatedStyle(fn);
  let obj5 = {
    withSpring: activeQuestDockMode(5185).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
  };
  const fn2 = function q() {
    let right = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      right = -1 * closure_2_10;
    }
    return { right };
  };
  fn2.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  fn2.__workletHash = 14001429324395;
  fn2.__initData = __initData3;
  const animatedStyle2 = activeQuestDockMode(4492).useAnimatedStyle(fn2);
  let obj6 = activeQuestDockMode(4492);
  const obj7 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  class W {
    constructor() {
      obj = closure_0(closure_2[8]);
      num = 0;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        num = 1;
      }
      obj1 = { opacity: obj.withSpring(num, closure_8) };
      return obj1;
    }
  }
  const obj8 = activeQuestDockMode(4492);
  W.__closure = {
    withSpring: activeQuestDockMode(5185).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
  };
  W.__workletHash = 6229744150165;
  W.__initData = __initData4;
  const animatedStyle3 = obj8.useAnimatedStyle(W);
  const obj9 = {
    withSpring: activeQuestDockMode(5185).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
  };
  class V {
    constructor() {
      right = 0;
      if (activeQuestDockMode.get() !== QuestDockMode.EXPANDED) {
        right = closure_10;
      }
      return { right };
    }
  }
  V.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  V.__workletHash = 10870034799551;
  V.__initData = __initData5;
  const animatedStyle4 = activeQuestDockMode(4492).useAnimatedStyle(V);
  const obj10 = activeQuestDockMode(4492);
  class Z {
    constructor() {
      pointerEvents = "none";
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
  }
  Z.__closure = { activeQuestDockMode, QuestDockMode };
  Z.__workletHash = 3272003844163;
  Z.__initData = __initData6;
  const animatedProps = activeQuestDockMode(4492).useAnimatedProps(Z);
  const obj11 = activeQuestDockMode(4492);
  class F {
    constructor() {
      obj = activeQuestDockMode;
      tmp = QuestDockMode;
      obj1 = {
        borderRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? closure_9 : closure_3,
        borderBottomLeftRadius: null,
        borderBottomRightRadius: null,
        width: null,
      };
      if (obj.get() === tmp.EXPANDED) {
        withSpringResult = closure_9;
      } else {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj3 = closure_0(closure_2[8]);
        tmp4 = closure_4;
        tmp5 = closure_8;
        withSpringResult = obj3.withSpring(closure_4.get(), closure_8);
      }
      obj1.borderBottomLeftRadius = withSpringResult;
      if (obj.get() === tmp.EXPANDED) {
        withSpringResult1 = closure_9;
      } else {
        tmp7 = closure_0;
        tmp8 = closure_2;
        obj4 = closure_0(closure_2[8]);
        tmp9 = closure_4;
        tmp10 = closure_8;
        withSpringResult1 = obj4.withSpring(closure_4.get(), closure_8);
      }
      obj1.borderBottomRightRadius = withSpringResult1;
      obj1.width = questDockWrapperSpecs.get().width;
      return obj1;
    }
  }
  const obj12 = activeQuestDockMode(4492);
  F.__closure = {
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_CONTENT_BORDER_RADII,
    questDockBorderRadius: token,
    withSpring: activeQuestDockMode(5185).withSpring,
    questDockAnimatedBorderRadius: tmp9,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
    questDockWrapperSpecs,
  };
  F.__workletHash = 8904986205240;
  F.__initData = __initData7;
  const animatedStyle5 = obj12.useAnimatedStyle(F);
  const obj13 = {
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_CONTENT_BORDER_RADII,
    questDockBorderRadius: token,
    withSpring: activeQuestDockMode(5185).withSpring,
    questDockAnimatedBorderRadius: tmp9,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
    questDockWrapperSpecs,
  };
  const fn3 = function j() {
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
  };
  const obj14 = activeQuestDockMode(4492);
  fn3.__closure = {
    withSpring: activeQuestDockMode(5185).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
  };
  fn3.__workletHash = 10022958892825;
  fn3.__initData = __initData8;
  let animatedStyle6;
  if (flag) {
    animatedStyle6 = obj14.useAnimatedStyle(fn3);
  }
  const tmp18 = closure_15();
  const obj16 = { style: null, layout: questDockHeaderLayoutAnimation, children: null };
  let items = [tmp18.header, animatedStyle];
  obj16.style = items;
  const obj15 = {
    withSpring: activeQuestDockMode(5185).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
  };
  const tmp7Result = questDockWrapperSpecs(7318);
  if (tmpResult.isAndroid()) {
    if (null != blurHash) {
      const obj17 = {
        placeholder: blurHash,
        layoutAnimatedStyle: animatedStyle5,
        opacityAnimatedStyle: animatedStyle6,
        layoutAnimation: questDockHeaderLayoutAnimation,
      };
      let tmp24 = closure_12(tmp7(15460), obj17);
      let tmp23 = closure_12;
    }
    const items1 = [tmp24, children];
    const obj18 = { style: tmp18.secondaryContent, children: null };
    const obj19 = { style: null, layout: null, children: null };
    const items2 = [tmp18.collapsedContent, animatedStyle2];
    obj19.style = items2;
    obj19.layout = questDockHeaderLayoutAnimation;
    const obj20 = { style: animatedStyle1, children: collapsedContent };
    obj19.children = tmp23(tmp7(7318), obj20);
    const items3 = [tmp23(tmp7(7318), obj19)];
    const obj21 = { animatedProps, style: animatedStyle4, layout: questDockHeaderLayoutAnimation, children: null };
    const tmp7Result4 = tmp7(7318);
    const obj22 = { style: null, children: null };
    const items4 = [tmp18.expandedContent, animatedStyle3];
    obj22.style = items4;
    const tmp7Result5 = tmp7(7318);
    if (withPressableDisclosure) {
      const obj23 = { onPress: onDisclosurePress, accessibilityRole: "button", style: null, children: null };
      const items5 = [,];
      ({ actionDisclosures: arr7[0], tertiaryContent: arr7[1] } = tmp18);
      obj23.style = items5;
      const obj24 = { children: null };
      const obj25 = { color: "interactive-text-active", variant: "text-sm/medium", children: null };
      const intl2 = tmp(1115).intl;
      obj25.children = intl2.string(tmp(1115).t.o6FLcF);
      const items6 = [tmp23(tmp(4752).Text, obj25)];
      const obj26 = { color: tmp7(576).colors.INTERACTIVE_TEXT_ACTIVE, style: tmp18.actionDisclosuresIcon };
      items6[1] = tmp23(tmp(11373).CircleQuestionIcon, obj26);
      obj24.children = items6;
      obj23.children = closure_14(closure_13, obj24);
      let tmp23Result = tmp23(tmp(5339).PressableOpacity, obj23);
    } else {
      const obj27 = { style: null, children: null };
      const items7 = [,];
      ({ actionDisclosures: arr6[0], tertiaryContent: arr6[1] } = tmp18);
      obj27.style = items7;
      const obj28 = { color: "text-default", variant: "text-sm/medium", children: null };
      const intl = tmp(1115).intl;
      obj28.children = intl.string(tmp(1115).t.o6FLcF);
      obj27.children = tmp23(tmp(4752).Text, obj28);
      tmp23Result = tmp23(closure_6, obj27);
    }
    const items8 = [tmp23Result, tmp23(tmp7(15462), {})];
    const obj29 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const string = tmp(1115).intl.string;
    class Y {
      constructor() {
        obj = activeQuestDockMode;
        tmp = QuestDockMode;
        obj1 = {
          borderTopLeftRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? closure_9 : closure_3,
          borderTopRightRadius: obj.get() === tmp.EXPANDED ? closure_9 : closure_3,
          borderBottomLeftRadius: null,
          borderBottomRightRadius: null,
          width: null,
          transform: null,
        };
        if (obj.get() === tmp.EXPANDED) {
          withSpringResult = closure_9;
        } else {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj3 = closure_0(closure_2[8]);
          tmp4 = closure_4;
          tmp5 = closure_8;
          withSpringResult = obj3.withSpring(closure_4.get(), closure_8);
        }
        obj1.borderBottomLeftRadius = withSpringResult;
        if (obj.get() === tmp.EXPANDED) {
          withSpringResult1 = closure_9;
        } else {
          tmp7 = closure_0;
          tmp8 = closure_2;
          obj4 = closure_0(closure_2[8]);
          tmp9 = closure_4;
          tmp10 = closure_8;
          withSpringResult1 = obj4.withSpring(closure_4.get(), closure_8);
        }
        obj1.borderBottomRightRadius = withSpringResult1;
        if (obj.get() === tmp.EXPANDED) {
          tmp13 = questDockWrapperSpecs;
          tmp14 = closure_11;
          num = 2;
          width = questDockWrapperSpecs.get().width - 2 * closure_11;
        } else {
          tmp12 = questDockWrapperSpecs;
          width = questDockWrapperSpecs.get().width;
        }
        obj1.width = width;
        tmp15 = closure_0;
        tmp16 = closure_2;
        obj5 = closure_0(closure_2[8]);
        num2 = 0;
        if (obj.get() === tmp.EXPANDED) {
          num2 = closure_11;
        }
        obj9 = { translateX: obj5.withSpring(num2, closure_8) };
        tmp17 = closure_8;
        items = [,];
        items[0] = obj9;
        tmp15Result = tmp15(tmp16[8]);
        num3 = 0;
        if (obj.get() === tmp.EXPANDED) {
          num3 = closure_11;
        }
        obj10 = { translateY: tmp15Result.withSpring(num3, tmp17) };
        items[1] = obj10;
        obj1.transform = items;
        return obj1;
      }
    }
    obj29.onPress = onSubmenuPress;
    obj29.style = tmp18.tertiaryContent;
    const obj30 = { color: tmp7(576).colors.INTERACTIVE_TEXT_ACTIVE };
    obj29.children = tmp23(tmp(8181).MoreHorizontalIcon, obj30);
    items8[2] = tmp23(tmp(5339).PressableOpacity, obj29);
    obj22.children = items8;
    obj21.children = closure_14(tmp7(7318), obj22);
    items3[1] = tmp23(tmp7Result5, obj21);
    obj18.children = items3;
    items1[2] = closure_14(closure_6, obj18);
    obj16.children = items1;
    return closure_14(tmp7Result, obj16);
  }
  tmp23 = closure_12;
  tmp24 = closure_12(tmp7(15428), {
    layoutAnimatedStyle: animatedStyle5,
    opacityAnimatedStyle: animatedStyle6,
    layoutAnimation: questDockHeaderLayoutAnimation,
  });
  tmpResult = activeQuestDockMode(1365);
});
