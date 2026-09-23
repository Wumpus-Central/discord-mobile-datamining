// === Module 15519: QuestDockBackgroundBlurHeader ===

// Module 15519 (QuestDockBackgroundBlurHeader)
import nativeDefault from "native" /* 576 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import spring from "spring" /* 5270 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ AccessibilityInfo: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const QuestDockMode = fn(5747).QuestDockMode;
const QuestDockConstants = fn(15422);
const QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = QuestDockConstants.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
({ QUEST_DOCK_CONTENT_BORDER_RADII: closure_9, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: c10, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11, QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT, QUEST_DOCK_COLLAPSED_HEIGHT } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4827);
let obj = { header: { alignItems: "center", justifyContent: "space-between", flexDirection: "row", height: QUEST_DOCK_COLLAPSED_HEIGHT, overflow: "hidden", paddingRight: QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT, paddingLeft: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, position: "absolute", zIndex: 2 }, secondaryContent: { flexGrow: 0, flexShrink: 0 }, secondaryContentStretched: { alignSelf: "stretch" }, secondaryContentOverlay: { justifyContent: "center", position: "absolute", bottom: 0, top: 0, right: 0 }, expandedContent: null, actionDisclosures: null, actionDisclosuresIcon: null, tertiaryContent: null };
let obj3 = { alignItems: "center", justifyContent: "space-between", flexDirection: "row", height: QUEST_DOCK_COLLAPSED_HEIGHT, overflow: "hidden", paddingRight: QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT, paddingLeft: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, position: "absolute", zIndex: 2 };
obj.expandedContent = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj.actionDisclosures = { alignItems: "center", display: "flex", flexDirection: "row", gap: 4 };
obj.actionDisclosuresIcon = { height: 14, width: 14 };
obj.tertiaryContent = { opacity: 0.7 };
let closure_15 = createStyles.createStyles(obj);
function questDockHeaderLayoutAnimation(originX) {
  const obj = { initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight }, animations: null };
  const size = { originX: spring.withSpring(originX.targetOriginX, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED), originY: null, height: null, width: null };
  size.originY = spring.withSpring(originX.targetOriginY, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
  size.height = spring.withSpring(originX.targetHeight, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
  size.width = spring.withSpring(originX.targetWidth, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
  obj.animations = size;
  return obj;
}
let obj4 = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 };
questDockHeaderLayoutAnimation.__closure = { withSpring: fn(5270).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
questDockHeaderLayoutAnimation.__workletHash = 13829887811453;
questDockHeaderLayoutAnimation.__initData = { code: "function questDockHeaderLayoutAnimation_QuestDockBackgroundBlurHeaderTsx1(values){const{withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:withSpring(values.targetHeight,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}};}" };
const __initData = { code: "function QuestDockBackgroundBlurHeaderTsx2(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:activeQuestDockMode.get()===QuestDockMode.EXPANDED?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};}" };
const __initData2 = { code: "function QuestDockBackgroundBlurHeaderTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData3 = { code: "function QuestDockBackgroundBlurHeaderTsx4(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED*-1:0};}" };
const __initData4 = { code: "function QuestDockBackgroundBlurHeaderTsx5(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData5 = { code: "function QuestDockBackgroundBlurHeaderTsx6(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED};}" };
const __initData6 = { code: "function QuestDockBackgroundBlurHeaderTsx7(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}" };
const __initData7 = { code: "function QuestDockBackgroundBlurHeaderTsx8(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs}=this.__closure;return{borderRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:questDockWrapperSpecs.get().width};}" };
const __initData8 = { code: "function QuestDockBackgroundBlurHeaderTsx9(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
let obj5 = { withSpring: fn(5270).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBackgroundBlurHeader.tsx");

export default noop.memo(function QuestDockBackgroundBlurHeader(hideBlurWhenCollapsed) {
  ({ blurHash, secondaryContentWidth, withPressableDisclosure } = hideBlurWhenCollapsed);
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
  const context = noop.useContext(activeQuestDockMode(15423).QuestDockGestureContext);
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
  token = activeQuestDockMode(4524).useToken(questDockWrapperSpecs(576).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp9 = questDockWrapperSpecs(15511)(token);
  noop = tmp9;
  let obj = activeQuestDockMode(4524);
  const fn = function x() {
    const obj2 = { borderTopLeftRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? QUEST_DOCK_CONTENT_BORDER_RADII : token, borderTopRightRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? QUEST_DOCK_CONTENT_BORDER_RADII : token, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null, transform: null };
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
    const items = [{ translateX: spring.withSpring(num2, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) }, ];
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
  let obj2 = activeQuestDockMode(4559);
  fn.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5270).withSpring, questDockAnimatedBorderRadius: tmp9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11 };
  fn.__workletHash = 17202411570804;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj3 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5270).withSpring, questDockAnimatedBorderRadius: tmp9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11 };
  const fn2 = function q() {
    let num = 1;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 0;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
  };
  let obj4 = activeQuestDockMode(4559);
  fn2.__closure = { withSpring: activeQuestDockMode(5270).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn2.__workletHash = 5804990093011;
  fn2.__initData = __initData2;
  const animatedStyle1 = obj4.useAnimatedStyle(fn2);
  let obj5 = { withSpring: activeQuestDockMode(5270).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  class W {
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
  W.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  W.__workletHash = 14001429324395;
  W.__initData = __initData3;
  const animatedStyle2 = activeQuestDockMode(4559).useAnimatedStyle(W);
  let obj6 = activeQuestDockMode(4559);
  const obj7 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  class V {
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
  const obj8 = activeQuestDockMode(4559);
  V.__closure = { withSpring: activeQuestDockMode(5270).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  V.__workletHash = 6229744150165;
  V.__initData = __initData4;
  const animatedStyle3 = obj8.useAnimatedStyle(V);
  const obj9 = { withSpring: activeQuestDockMode(5270).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  class Z {
    constructor() {
      right = 0;
      if (activeQuestDockMode.get() !== QuestDockMode.EXPANDED) {
        right = closure_10;
      }
      return { right };
    }
  }
  Z.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  Z.__workletHash = 10870034799551;
  Z.__initData = __initData5;
  const animatedStyle4 = activeQuestDockMode(4559).useAnimatedStyle(Z);
  const obj10 = activeQuestDockMode(4559);
  class F {
    constructor() {
      pointerEvents = "none";
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
  }
  F.__closure = { activeQuestDockMode, QuestDockMode };
  F.__workletHash = 3272003844163;
  F.__initData = __initData6;
  const animatedProps = activeQuestDockMode(4559).useAnimatedProps(F);
  const obj11 = activeQuestDockMode(4559);
  const fn3 = function j() {
    const obj2 = { borderRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? QUEST_DOCK_CONTENT_BORDER_RADII : token, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null };
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
  const obj12 = activeQuestDockMode(4559);
  fn3.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5270).withSpring, questDockAnimatedBorderRadius: tmp9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs };
  fn3.__workletHash = 8904986205240;
  fn3.__initData = __initData7;
  const animatedStyle5 = obj12.useAnimatedStyle(fn3);
  const obj13 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5270).withSpring, questDockAnimatedBorderRadius: tmp9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs };
  const fn4 = function z() {
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
  };
  const obj14 = activeQuestDockMode(4559);
  fn4.__closure = { withSpring: activeQuestDockMode(5270).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn4.__workletHash = 10022958892825;
  fn4.__initData = __initData8;
  let animatedStyle6;
  if (flag) {
    animatedStyle6 = obj14.useAnimatedStyle(fn4);
  }
  const tmp18 = closure_15();
  const obj16 = { style: null, layout: questDockHeaderLayoutAnimation, children: null };
  let items = [tmp18.header, animatedStyle];
  obj16.style = items;
  const obj15 = { withSpring: activeQuestDockMode(5270).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  const tmp7Result = questDockWrapperSpecs(7404);
  if (tmpResult.isAndroid()) {
    if (null != blurHash) {
      const obj17 = { placeholder: blurHash, layoutAnimatedStyle: animatedStyle5, opacityAnimatedStyle: animatedStyle6, layoutAnimation: questDockHeaderLayoutAnimation };
      let tmp24 = closure_12(tmp7(15520), obj17);
      let tmp23 = closure_12;
    }
    const items1 = [tmp24, children, ];
    const items2 = [tmp18.secondaryContent, ];
    let tmp28 = null != secondaryContentWidth;
    if (tmp28) {
      const items3 = [tmp18.secondaryContentStretched, ];
      const obj18 = { width: secondaryContentWidth };
      items3[1] = obj18;
      tmp28 = items3;
    }
    const obj19 = { style: null, children: null };
    items2[1] = tmp28;
    obj19.style = items2;
    const obj20 = { style: null, layout: null, children: null };
    const items4 = [tmp18.secondaryContentOverlay, animatedStyle2];
    obj20.style = items4;
    obj20.layout = questDockHeaderLayoutAnimation;
    const obj21 = { style: animatedStyle1, children: collapsedContent };
    obj20.children = tmp23(tmp7(7404), obj21);
    const items5 = [tmp23(tmp7(7404), obj20), ];
    const obj22 = { animatedProps, style: null, layout: null, children: null };
    let secondaryContentOverlay = null != secondaryContentWidth;
    const tmp7Result4 = tmp7(7404);
    if (secondaryContentOverlay) {
      secondaryContentOverlay = tmp18.secondaryContentOverlay;
    }
    const items6 = [secondaryContentOverlay, animatedStyle4];
    obj22.style = items6;
    obj22.layout = questDockHeaderLayoutAnimation;
    const obj23 = { style: null, children: null };
    const items7 = [tmp18.expandedContent, animatedStyle3];
    obj23.style = items7;
    const tmp7Result5 = tmp7(7404);
    if (withPressableDisclosure) {
      const obj24 = { onPress: onDisclosurePress, accessibilityRole: "button", style: null, children: null };
      const items8 = [, ];
      ({ actionDisclosures: arr10[0], tertiaryContent: arr10[1] } = tmp18);
      obj24.style = items8;
      const obj25 = { children: null };
      const obj26 = { color: "interactive-text-active", variant: "text-sm/medium", children: null };
      const intl2 = tmp(1115).intl;
      obj26.children = intl2.string(tmp(1115).t.o6FLcF);
      const items9 = [tmp23(tmp(4823).Text, obj26), ];
      const obj27 = { color: tmp7(576).colors.INTERACTIVE_TEXT_ACTIVE, style: tmp18.actionDisclosuresIcon };
      items9[1] = tmp23(tmp(11453).CircleQuestionIcon, obj27);
      obj25.children = items9;
      obj24.children = closure_14(closure_13, obj25);
      let tmp23Result = tmp23(tmp(5425).PressableOpacity, obj24);
    } else {
      const obj28 = { style: null, children: null };
      const items10 = [, ];
      ({ actionDisclosures: arr9[0], tertiaryContent: arr9[1] } = tmp18);
      obj28.style = items10;
      const obj29 = { color: "text-default", variant: "text-sm/medium", children: null };
      const intl = tmp(1115).intl;
      obj29.children = intl.string(tmp(1115).t.o6FLcF);
      obj28.children = tmp23(tmp(4823).Text, obj29);
      tmp23Result = tmp23(closure_6, obj28);
    }
    const items11 = [tmp23Result, tmp23(tmp7(15522), {}), ];
    const obj30 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const intl3 = tmp(1115).intl;
    obj30.accessibilityLabel = intl3.string(tmp(1115).t.PdRCRg);
    obj30.onPress = onSubmenuPress;
    obj30.style = tmp18.tertiaryContent;
    const obj31 = { color: tmp7(576).colors.INTERACTIVE_TEXT_ACTIVE };
    obj30.children = tmp23(tmp(8267).MoreHorizontalIcon, obj31);
    items11[2] = tmp23(tmp(5425).PressableOpacity, obj30);
    obj23.children = items11;
    obj22.children = closure_14(tmp7(7404), obj23);
    items5[1] = tmp23(tmp7Result5, obj22);
    obj19.children = items5;
    items1[2] = closure_14(closure_6, obj19);
    obj16.children = items1;
    return closure_14(tmp7Result, obj16);
  }
  tmp23 = closure_12;
  tmp24 = closure_12(tmp7(15488), { layoutAnimatedStyle: animatedStyle5, opacityAnimatedStyle: animatedStyle6, layoutAnimation: questDockHeaderLayoutAnimation });
  tmpResult = activeQuestDockMode(1365);
});