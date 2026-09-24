// discord_app/modules/quests/native/QuestDock/QuestDockBackgroundBlurHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_PlatformUtils from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ AccessibilityInfo: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const QuestDockMode = fn(5749).QuestDockMode;
const QuestDockConstants = fn(15431);
const QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = QuestDockConstants.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
({
  QUEST_DOCK_CONTENT_BORDER_RADII: closure_9,
  QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: c10,
  QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11,
  QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT,
  QUEST_DOCK_COLLAPSED_HEIGHT,
} = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4829);
let obj = {
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: QUEST_DOCK_COLLAPSED_HEIGHT,
    overflow: "hidden",
    paddingRight: QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT,
    paddingLeft: nativeDefault.space.PX_8,
    gap: nativeDefault.space.PX_8,
    position: "absolute",
    zIndex: 2,
  },
  secondaryContent: { flexGrow: 0, flexShrink: 0 },
  secondaryContentStretched: { alignSelf: "stretch" },
  secondaryContentOverlay: { justifyContent: "center", position: "absolute", bottom: 0, top: 0, right: 0 },
  expandedContent: null,
  leadingContent: null,
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
  paddingRight: QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT,
  paddingLeft: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_8,
  position: "absolute",
  zIndex: 2,
};
obj.expandedContent = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj.leadingContent = { alignItems: "center", alignSelf: "stretch", flex: 1, flexDirection: "row" };
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
questDockHeaderLayoutAnimation.__closure = { withSpring: fn(5272).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
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
let obj5 = { withSpring: fn(5272).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBackgroundBlurHeader.tsx");

export default noop.memo(function QuestDockBackgroundBlurHeader(promotedLabelLeading) {
  ({ blurHash, children, secondaryContentWidth, withPressableDisclosure } = promotedLabelLeading);
  if (withPressableDisclosure === undefined) {
    withPressableDisclosure = false;
  }
  let flag = promotedLabelLeading.promotedLabelLeading;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = promotedLabelLeading.hideBlurWhenCollapsed;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let activeQuestDockMode;
  dependencyMap = undefined;
  let token;
  noop = undefined;
  ({ onDisclosurePress, onSubmenuPress } = promotedLabelLeading);
  const context = noop.useContext(activeQuestDockMode(15432).QuestDockGestureContext);
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
  token = activeQuestDockMode(4526).useToken(questDockWrapperSpecs(576).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp9 = questDockWrapperSpecs(15520)(token);
  noop = tmp9;
  let obj = activeQuestDockMode(4526);
  const fn = function q() {
    const obj2 = {
      borderTopLeftRadius:
        activeQuestDockMode.get() === QuestDockMode.EXPANDED ? QUEST_DOCK_CONTENT_BORDER_RADII : token,
      borderTopRightRadius:
        activeQuestDockMode.get() === QuestDockMode.EXPANDED ? QUEST_DOCK_CONTENT_BORDER_RADII : token,
      borderBottomLeftRadius: null,
      borderBottomRightRadius: null,
      width: null,
      transform: null,
    };
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      let withSpringResult = QUEST_DOCK_CONTENT_BORDER_RADII;
    } else {
      withSpringResult = spring.withSpring(closure_4.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
    }
    obj2.borderBottomLeftRadius = withSpringResult;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      let withSpringResult1 = QUEST_DOCK_CONTENT_BORDER_RADII;
    } else {
      withSpringResult1 = spring.withSpring(closure_4.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
    }
    obj2.borderBottomRightRadius = withSpringResult1;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      let width = questDockWrapperSpecs.get().width - 2 * closure_2_11;
    } else {
      width = questDockWrapperSpecs.get().width;
    }
    obj2.width = width;
    let num2 = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num2 = closure_2_11;
    }
    const items = [{ translateX: spring.withSpring(num2, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) }];
    const obj6 = { translateX: spring.withSpring(num2, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
    let num3 = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num3 = closure_2_11;
    }
    const tmp15Result = spring;
    items[1] = { translateY: spring.withSpring(num3, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
    obj2.transform = items;
    return obj2;
  };
  let obj2 = activeQuestDockMode(4561);
  fn.__closure = {
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_CONTENT_BORDER_RADII,
    questDockBorderRadius: token,
    withSpring: activeQuestDockMode(5272).withSpring,
    questDockAnimatedBorderRadius: tmp9,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
    questDockWrapperSpecs,
    QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11,
  };
  fn.__workletHash = 17202411570804;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj3 = {
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_CONTENT_BORDER_RADII,
    questDockBorderRadius: token,
    withSpring: activeQuestDockMode(5272).withSpring,
    questDockAnimatedBorderRadius: tmp9,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
    questDockWrapperSpecs,
    QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11,
  };
  class W {
    constructor() {
      obj = closure_0(closure_2[8]);
      num = 1;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        num = 0;
      }
      obj1 = { opacity: obj.withSpring(num, closure_8) };
      return obj1;
    }
  }
  let obj4 = activeQuestDockMode(4561);
  W.__closure = {
    withSpring: activeQuestDockMode(5272).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
  };
  W.__workletHash = 5804990093011;
  W.__initData = __initData2;
  const animatedStyle1 = obj4.useAnimatedStyle(W);
  let obj5 = {
    withSpring: activeQuestDockMode(5272).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
  };
  class V {
    constructor() {
      right = 0;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        tmp = closure_10;
        num2 = -1;
        right = -1 * closure_10;
      }
      return { right };
    }
  }
  V.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  V.__workletHash = 14001429324395;
  V.__initData = __initData3;
  const animatedStyle2 = activeQuestDockMode(4561).useAnimatedStyle(V);
  let obj6 = activeQuestDockMode(4561);
  const obj7 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  class Z {
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
  const obj8 = activeQuestDockMode(4561);
  Z.__closure = {
    withSpring: activeQuestDockMode(5272).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
  };
  Z.__workletHash = 6229744150165;
  Z.__initData = __initData4;
  const animatedStyle3 = obj8.useAnimatedStyle(Z);
  const obj9 = {
    withSpring: activeQuestDockMode(5272).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
  };
  class F {
    constructor() {
      right = 0;
      if (activeQuestDockMode.get() !== QuestDockMode.EXPANDED) {
        right = closure_10;
      }
      return { right };
    }
  }
  F.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  F.__workletHash = 10870034799551;
  F.__initData = __initData5;
  const animatedStyle4 = activeQuestDockMode(4561).useAnimatedStyle(F);
  const obj10 = activeQuestDockMode(4561);
  const fn2 = function j() {
    let pointerEvents = "none";
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      pointerEvents = "auto";
    }
    return { pointerEvents };
  };
  fn2.__closure = { activeQuestDockMode, QuestDockMode };
  fn2.__workletHash = 3272003844163;
  fn2.__initData = __initData6;
  const animatedProps = activeQuestDockMode(4561).useAnimatedProps(fn2);
  const obj11 = activeQuestDockMode(4561);
  const fn3 = function z() {
    const obj2 = {
      borderRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? QUEST_DOCK_CONTENT_BORDER_RADII : token,
      borderBottomLeftRadius: null,
      borderBottomRightRadius: null,
      width: null,
    };
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      let withSpringResult = QUEST_DOCK_CONTENT_BORDER_RADII;
    } else {
      withSpringResult = spring.withSpring(closure_4.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
    }
    obj2.borderBottomLeftRadius = withSpringResult;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      let withSpringResult1 = QUEST_DOCK_CONTENT_BORDER_RADII;
    } else {
      withSpringResult1 = spring.withSpring(closure_4.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
    }
    obj2.borderBottomRightRadius = withSpringResult1;
    obj2.width = questDockWrapperSpecs.get().width;
    return obj2;
  };
  const obj12 = activeQuestDockMode(4561);
  fn3.__closure = {
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_CONTENT_BORDER_RADII,
    questDockBorderRadius: token,
    withSpring: activeQuestDockMode(5272).withSpring,
    questDockAnimatedBorderRadius: tmp9,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
    questDockWrapperSpecs,
  };
  fn3.__workletHash = 8904986205240;
  fn3.__initData = __initData7;
  const animatedStyle5 = obj12.useAnimatedStyle(fn3);
  const obj13 = {
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_CONTENT_BORDER_RADII,
    questDockBorderRadius: token,
    withSpring: activeQuestDockMode(5272).withSpring,
    questDockAnimatedBorderRadius: tmp9,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
    questDockWrapperSpecs,
  };
  class J {
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
  const obj14 = activeQuestDockMode(4561);
  J.__closure = {
    withSpring: activeQuestDockMode(5272).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
  };
  J.__workletHash = 10022958892825;
  J.__initData = __initData8;
  let animatedStyle6;
  if (flag2) {
    animatedStyle6 = obj14.useAnimatedStyle(J);
  }
  const tmp18 = closure_15();
  if (withPressableDisclosure) {
    const obj16 = { onPress: onDisclosurePress, accessibilityRole: "button", style: null, children: null };
    let items = [,];
    ({ actionDisclosures: arr2[0], tertiaryContent: arr2[1] } = tmp18);
    obj16.style = items;
    const obj17 = { children: null };
    const obj18 = { color: "interactive-text-active", variant: "text-sm/medium", children: null };
    const intl2 = tmp(1115).intl;
    obj18.children = intl2.string(tmp(1115).t.o6FLcF);
    const items1 = [closure_12(tmp(4825).Text, obj18)];
    const obj19 = { color: tmp7(576).colors.INTERACTIVE_TEXT_ACTIVE, style: tmp18.actionDisclosuresIcon };
    items1[1] = closure_12(tmp(11459).CircleQuestionIcon, obj19);
    obj17.children = items1;
    obj16.children = closure_14(closure_13, obj17);
    let tmp19Result = closure_12(tmp(5427).PressableOpacity, obj16);
    let tmp22 = closure_12;
  } else {
    const obj20 = { style: null, children: null };
    const items2 = [,];
    ({ actionDisclosures: arr[0], tertiaryContent: arr[1] } = tmp18);
    obj20.style = items2;
    const obj21 = { color: "text-default", variant: "text-sm/medium", children: null };
    const intl = tmp(1115).intl;
    obj21.children = intl.string(tmp(1115).t.o6FLcF);
    obj20.children = closure_12(tmp(4825).Text, obj21);
    tmp19Result = closure_12(closure_6, obj20);
    tmp22 = closure_12;
  }
  const obj22 = { style: null, layout: questDockHeaderLayoutAnimation, children: null };
  const items3 = [tmp18.header, animatedStyle];
  obj22.style = items3;
  const obj15 = {
    withSpring: activeQuestDockMode(5272).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
  };
  const tmp7Result = questDockWrapperSpecs(7406);
  if (tmpResult.isAndroid()) {
    if (null != blurHash) {
      const obj23 = {
        placeholder: blurHash,
        layoutAnimatedStyle: animatedStyle5,
        opacityAnimatedStyle: animatedStyle6,
        layoutAnimation: questDockHeaderLayoutAnimation,
      };
      let tmp22Result = tmp22(tmp7(15529), obj23);
    }
    const items4 = [tmp22Result, ,];
    let tmp25Result = children;
    if (flag) {
      const obj24 = { style: tmp18.leadingContent, children: null };
      const items5 = [children];
      const obj25 = {
        animatedProps,
        style: animatedStyle3,
        layout: questDockHeaderLayoutAnimation,
        children: tmp19Result,
      };
      items5[1] = tmp22(tmp7(7406), obj25);
      obj24.children = items5;
      tmp25Result = closure_14(closure_6, obj24);
    }
    items4[1] = tmp25Result;
    const items6 = [tmp18.secondaryContent];
    let tmp34 = null != secondaryContentWidth;
    if (tmp34) {
      const items7 = [tmp18.secondaryContentStretched];
      const obj26 = { width: secondaryContentWidth };
      items7[1] = obj26;
      tmp34 = items7;
    }
    const obj27 = { style: null, children: null };
    items6[1] = tmp34;
    obj27.style = items6;
    const obj28 = { style: null, layout: null, children: null };
    const items8 = [tmp18.secondaryContentOverlay, animatedStyle2];
    obj28.style = items8;
    obj28.layout = questDockHeaderLayoutAnimation;
    const obj29 = { style: animatedStyle1, children: promotedLabelLeading.collapsedContent };
    obj28.children = tmp22(tmp7(7406), obj29);
    const items9 = [tmp22(tmp7(7406), obj28)];
    const obj30 = { animatedProps, style: null, layout: null, children: null };
    let secondaryContentOverlay = null != secondaryContentWidth;
    const tmp7Result4 = tmp7(7406);
    if (secondaryContentOverlay) {
      secondaryContentOverlay = tmp18.secondaryContentOverlay;
    }
    const items10 = [secondaryContentOverlay, animatedStyle4];
    obj30.style = items10;
    obj30.layout = questDockHeaderLayoutAnimation;
    const obj31 = { style: null, children: null };
    const items11 = [tmp18.expandedContent, animatedStyle3];
    obj31.style = items11;
    let tmp25Result2 = !flag;
    const tmp7Result5 = tmp7(7406);
    if (!flag) {
      const obj32 = { children: null };
      const items12 = [tmp19Result, tmp22(tmp7(15531), {})];
      obj32.children = items12;
      tmp25Result2 = closure_14(closure_13, obj32);
    }
    const items13 = [tmp25Result2];
    const obj33 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const intl3 = tmp(1115).intl;
    obj33.accessibilityLabel = intl3.string(tmp(1115).t.PdRCRg);
    obj33.onPress = onSubmenuPress;
    obj33.style = tmp18.tertiaryContent;
    const obj34 = { color: tmp7(576).colors.INTERACTIVE_TEXT_ACTIVE };
    obj33.children = tmp22(tmp(8271).MoreHorizontalIcon, obj34);
    items13[1] = tmp22(tmp(5427).PressableOpacity, obj33);
    obj31.children = items13;
    obj30.children = closure_14(tmp7(7406), obj31);
    items9[1] = tmp22(tmp7Result5, obj30);
    obj27.children = items9;
    items4[2] = closure_14(closure_6, obj27);
    class W {
      constructor() {
        obj = closure_0(closure_2[8]);
        num = 1;
        if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
          num = 0;
        }
        obj1 = { opacity: obj.withSpring(num, closure_8) };
        return obj1;
      }
    }
    return closure_14(tmp7Result, obj22);
  }
  tmp22Result = tmp22(tmp7(15497), {
    layoutAnimatedStyle: animatedStyle5,
    opacityAnimatedStyle: animatedStyle6,
    layoutAnimation: questDockHeaderLayoutAnimation,
  });
  tmpResult = activeQuestDockMode(1365);
});
