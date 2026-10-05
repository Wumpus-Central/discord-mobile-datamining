// === Module 14996: QuestDockBackgroundBlurHeader ===

// Module 14996 (QuestDockBackgroundBlurHeader)
import nativeDefault from "native" /* 587 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import spring from "spring" /* 5597 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ AccessibilityInfo: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const QuestDockMode = fn(5623).QuestDockMode;
const QuestDockConstants = fn(14896);
const QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = QuestDockConstants.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
({ QUEST_DOCK_CONTENT_BORDER_RADII: closure_9, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: c10, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11, QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT, QUEST_DOCK_COLLAPSED_HEIGHT, QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4890);
let obj = { header: { alignItems: "center", justifyContent: "space-between", flexDirection: "row", height: QUEST_DOCK_COLLAPSED_HEIGHT, overflow: "hidden", paddingRight: QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT, paddingLeft: QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT, gap: nativeDefault.space.PX_8, position: "absolute", zIndex: 2 }, secondaryContent: { flexGrow: 0, flexShrink: 0 }, secondaryContentStretched: { alignSelf: "stretch" }, secondaryContentOverlay: { justifyContent: "center", position: "absolute", bottom: 0, top: 0, right: 0 }, expandedContent: null, leadingContent: null, actionDisclosures: null, actionDisclosuresIcon: null, tertiaryContent: null };
let obj3 = { alignItems: "center", justifyContent: "space-between", flexDirection: "row", height: QUEST_DOCK_COLLAPSED_HEIGHT, overflow: "hidden", paddingRight: QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT, paddingLeft: QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT, gap: nativeDefault.space.PX_8, position: "absolute", zIndex: 2 };
obj.expandedContent = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj.leadingContent = { alignItems: "center", alignSelf: "stretch", flex: 1, flexDirection: "row" };
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
questDockHeaderLayoutAnimation.__closure = { withSpring: fn(5597).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
questDockHeaderLayoutAnimation.__workletHash = 13829887811453;
questDockHeaderLayoutAnimation.__initData = { code: "function questDockHeaderLayoutAnimation_QuestDockBackgroundBlurHeaderTsx1(values){const{withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:withSpring(values.targetHeight,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}};}" };
const __initData = { code: "function QuestDockBackgroundBlurHeaderTsx2(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:activeQuestDockMode.get()===QuestDockMode.EXPANDED?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};}" };
const __initData2 = { code: "function QuestDockBackgroundBlurHeaderTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData3 = { code: "function QuestDockBackgroundBlurHeaderTsx4(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED*-1:0};}" };
const __initData4 = { code: "function QuestDockBackgroundBlurHeaderTsx5(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData5 = { code: "function QuestDockBackgroundBlurHeaderTsx6(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED};}" };
const __initData6 = { code: "function QuestDockBackgroundBlurHeaderTsx7(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?\"auto\":\"none\"};}" };
const __initData7 = { code: "function QuestDockBackgroundBlurHeaderTsx8(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs}=this.__closure;return{borderRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:questDockWrapperSpecs.get().width};}" };
const __initData8 = { code: "function QuestDockBackgroundBlurHeaderTsx9(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData9 = { code: "function QuestDockBackgroundBlurHeaderTsx10(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:activeQuestDockMode.get()===QuestDockMode.EXPANDED?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};}" };
const __initData10 = { code: "function QuestDockBackgroundBlurHeaderTsx11(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData11 = { code: "function QuestDockBackgroundBlurHeaderTsx12(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED*-1:0};}" };
const __initData12 = { code: "function QuestDockBackgroundBlurHeaderTsx13(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData13 = { code: "function QuestDockBackgroundBlurHeaderTsx14(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED};}" };
const __initData14 = { code: "function QuestDockBackgroundBlurHeaderTsx15(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}" };
const __initData15 = { code: "function QuestDockBackgroundBlurHeaderTsx16(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs}=this.__closure;return{borderRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:questDockWrapperSpecs.get().width};}" };
const __initData16 = { code: "function QuestDockBackgroundBlurHeaderTsx17(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const ReactCompilerGating = fn(558);
let obj5 = { withSpring: fn(5597).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBackgroundBlurHeader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = activeQuestDockMode(576).c(66);
  ({ blurHash, children, collapsedContent, secondaryContentWidth, withPressableDisclosure, promotedLabelLeading, hideBlurWhenCollapsed, onDisclosurePress: tertiaryContent, onSubmenuPress } = arg0);
  const context = noop.useContext(tmp(14897).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  let num = 2;
  let obj = activeQuestDockMode(576);
  let obj2 = noop;
  const tmp6 = undefined !== hideBlurWhenCollapsed && hideBlurWhenCollapsed;
  [tmp9, dependencyMap] = token(noop.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      if (obj.isIOS()) {
        const result = hasOwnProperty.isReduceTransparencyEnabled();
        result.then(dependencyMap);
        closure_0 = hasOwnProperty.addEventListener("reduceTransparencyChanged", dependencyMap);
        return () => closure_0.remove();
      }
      obj = utils_PlatformUtils;
    };
    let items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp10 = fn;
    tmp11 = items;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const effect = obj2.useEffect(tmp10, tmp11);
  const tmp8 = token(noop.useState(false), 2);
  token = activeQuestDockMode(4580).useToken(questDockWrapperSpecs(587).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp15 = context.questDockWrapperSpecs(14986)(token);
  noop = tmp15;
  const tmpResult = activeQuestDockMode(4580);
  class J {
    constructor() {
      obj = activeQuestDockMode;
      tmp = QuestDockMode;
      obj1 = { borderTopLeftRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? closure_9 : closure_3, borderTopRightRadius: obj.get() === tmp.EXPANDED ? closure_9 : closure_3, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null, transform: null };
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
      items = [, ];
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
  const tmpResult10 = activeQuestDockMode(4612);
  J.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5597).withSpring, questDockAnimatedBorderRadius: tmp15, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs: context.questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11 };
  J.__workletHash = 17202411570804;
  J.__initData = __initData;
  const animatedStyle = tmpResult10.useAnimatedStyle(J);
  let obj3 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5597).withSpring, questDockAnimatedBorderRadius: tmp15, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs: context.questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11 };
  const fn2 = function $() {
    let num = 1;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 0;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
  };
  const tmpResult11 = activeQuestDockMode(4612);
  fn2.__closure = { withSpring: activeQuestDockMode(5597).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn2.__workletHash = 5804990093011;
  fn2.__initData = __initData2;
  const animatedStyle1 = tmpResult11.useAnimatedStyle(fn2);
  let obj4 = { withSpring: activeQuestDockMode(5597).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  function ee() {
    let right = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      right = -1 * v65535;
    }
    return { right };
  }
  ee.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  ee.__workletHash = 14001429324395;
  ee.__initData = __initData3;
  const animatedStyle2 = activeQuestDockMode(4612).useAnimatedStyle(ee);
  let obj5 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  const tmpResult12 = activeQuestDockMode(4612);
  function te() {
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
  }
  const tmpResult13 = activeQuestDockMode(4612);
  te.__closure = { withSpring: activeQuestDockMode(5597).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  te.__workletHash = 6229744150165;
  te.__initData = __initData4;
  const animatedStyle3 = tmpResult13.useAnimatedStyle(te);
  let obj6 = { withSpring: activeQuestDockMode(5597).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  function oe() {
    let right = 0;
    if (activeQuestDockMode.get() !== QuestDockMode.EXPANDED) {
      right = v65535;
    }
    return { right };
  }
  oe.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  oe.__workletHash = 10870034799551;
  oe.__initData = __initData5;
  const animatedStyle4 = activeQuestDockMode(4612).useAnimatedStyle(oe);
  const tmpResult14 = activeQuestDockMode(4612);
  function ie() {
    let pointerEvents = "none";
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      pointerEvents = "auto";
    }
    return { pointerEvents };
  }
  ie.__closure = { activeQuestDockMode, QuestDockMode };
  ie.__workletHash = 800759970563;
  ie.__initData = __initData6;
  const animatedProps = activeQuestDockMode(4612).useAnimatedProps(ie);
  const tmpResult15 = activeQuestDockMode(4612);
  class De {
    constructor() {
      obj = activeQuestDockMode;
      tmp = QuestDockMode;
      obj1 = { borderRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? closure_9 : closure_3, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null };
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
  const tmpResult16 = activeQuestDockMode(4612);
  De.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5597).withSpring, questDockAnimatedBorderRadius: tmp15, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs: context.questDockWrapperSpecs };
  De.__workletHash = 8904986205240;
  De.__initData = __initData7;
  const animatedStyle5 = tmpResult16.useAnimatedStyle(De);
  const obj7 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5597).withSpring, questDockAnimatedBorderRadius: tmp15, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs: context.questDockWrapperSpecs };
  function re() {
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
  }
  const tmpResult17 = activeQuestDockMode(4612);
  re.__closure = { withSpring: activeQuestDockMode(5597).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  re.__workletHash = 10022958892825;
  re.__initData = __initData8;
  if (tmp6) {
    const animatedStyle6 = tmpResult17.useAnimatedStyle(re);
  }
  const tmp24 = closure_15();
  if (cResult[2] === tertiaryContent) {
    if (cResult[3] === tmp24.actionDisclosures) {
      if (cResult[4] === tmp24.actionDisclosuresIcon) {
        if (cResult[5] === tmp24.tertiaryContent) {
          if (cResult[6] === tmp4) {
            if (cResult[8] === animatedStyle) {
              if (cResult[9] === tmp24.header) {
                let tmp31 = cResult[10];
              }
              if (cResult[11] === blurHash) {
                if (cResult[12] === animatedStyle5) {
                  if (cResult[13] === animatedStyle6) {
                    if (cResult[14] === tmp9) {
                      if (cResult[16] === children) {
                        if (cResult[17] === tmp5) {
                          if (cResult[18] === tmp24.leadingContent) {
                            let tmp40 = cResult[19];
                          }
                          if (cResult[20] === secondaryContentWidth) {
                            if (cResult[21] === tmp24.secondaryContentStretched) {
                              let tmp44 = cResult[22];
                            }
                            if (cResult[23] === tmp24.secondaryContent) {
                              if (cResult[24] === tmp44) {
                                let tmp47 = cResult[25];
                              }
                              if (cResult[26] === animatedStyle2) {
                                if (cResult[27] === tmp24.secondaryContentOverlay) {
                                  let tmp48 = cResult[28];
                                }
                                if (cResult[29] === collapsedContent) {
                                  if (cResult[30] === animatedStyle1) {
                                    let tmp49 = cResult[31];
                                  }
                                  if (cResult[32] === tmp48) {
                                    if (cResult[33] === tmp49) {
                                      let tmp52 = cResult[34];
                                    }
                                    if (cResult[35] === animatedStyle4) {
                                      if (cResult[36] === tmp57) {
                                        let tmp58 = cResult[37];
                                      }
                                      if (cResult[38] === animatedStyle3) {
                                        if (cResult[39] === tmp24.expandedContent) {
                                          let tmp59 = cResult[40];
                                        }
                                        if (cResult[41] === tmp25) {
                                          if (cResult[42] === tmp5) {
                                            let tmp60 = cResult[43];
                                          }
                                          const _Symbol = Symbol;
                                          if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                                            const intl3 = tmp(1126).intl;
                                            const stringResult = intl3.string(tmp(1126).t.PdRCRg);
                                            cResult[44] = stringResult;
                                            let tmp65 = stringResult;
                                          } else {
                                            tmp65 = cResult[44];
                                          }
                                          const _Symbol2 = Symbol;
                                          if (cResult[45] === Symbol.for("react.memo_cache_sentinel")) {
                                            const obj9 = { color: tmp13(587).colors.INTERACTIVE_TEXT_ACTIVE };
                                            const tmp69 = closure_12(tmp(7577).MoreHorizontalIcon, obj9);
                                            cResult[45] = tmp69;
                                            let tmp67 = tmp69;
                                          } else {
                                            tmp67 = cResult[45];
                                          }
                                          if (cResult[46] === onSubmenuPress) {
                                            if (cResult[47] === tmp24.tertiaryContent) {
                                              let tmp70 = cResult[48];
                                            }
                                            if (cResult[49] === tmp59) {
                                              if (cResult[50] === tmp60) {
                                                if (cResult[51] === tmp70) {
                                                  let tmp73 = cResult[52];
                                                }
                                                if (cResult[53] === animatedProps) {
                                                  if (cResult[54] === tmp58) {
                                                    if (cResult[55] === tmp73) {
                                                      let tmp76 = cResult[56];
                                                    }
                                                    if (cResult[57] === tmp47) {
                                                      if (cResult[58] === tmp52) {
                                                        if (cResult[59] === tmp76) {
                                                          let tmp80 = cResult[60];
                                                        }
                                                        if (cResult[61] === tmp80) {
                                                          if (cResult[62] === tmp31) {
                                                            if (cResult[63] === tmp32) {
                                                              if (cResult[64] === tmp40) {
                                                                let tmp84 = cResult[65];
                                                              }
                                                              return tmp84;
                                                            }
                                                          }
                                                        }
                                                        const obj10 = { style: tmp31, layout: questDockHeaderLayoutAnimation, children: null };
                                                        const items1 = [tmp32, tmp40, tmp80];
                                                        obj10.children = items1;
                                                        const tmp87 = closure_14(tmp13(6570), obj10);
                                                        cResult[61] = tmp80;
                                                        cResult[62] = tmp31;
                                                        cResult[63] = tmp32;
                                                        cResult[64] = tmp40;
                                                        cResult[65] = tmp87;
                                                        tmp84 = tmp87;
                                                      }
                                                    }
                                                    const obj11 = { style: tmp47, children: null };
                                                    const items2 = [tmp52, tmp76];
                                                    obj11.children = items2;
                                                    const tmp83 = closure_14(closure_6, obj11);
                                                    cResult[57] = tmp47;
                                                    cResult[58] = tmp52;
                                                    cResult[59] = tmp76;
                                                    cResult[60] = tmp83;
                                                    tmp80 = tmp83;
                                                  }
                                                }
                                                const obj12 = { animatedProps, style: tmp58, layout: questDockHeaderLayoutAnimation, children: tmp73 };
                                                const tmp79 = closure_12(tmp13(6570), obj12);
                                                cResult[53] = animatedProps;
                                                cResult[54] = tmp58;
                                                cResult[55] = tmp73;
                                                cResult[56] = tmp79;
                                                tmp76 = tmp79;
                                              }
                                            }
                                            const obj13 = { style: tmp59, children: null };
                                            const items3 = [tmp60, tmp70];
                                            obj13.children = items3;
                                            const tmp75 = closure_14(tmp13(6570), obj13);
                                            cResult[49] = tmp59;
                                            cResult[50] = tmp60;
                                            cResult[51] = tmp70;
                                            cResult[52] = tmp75;
                                            tmp73 = tmp75;
                                          }
                                          const obj14 = { accessibilityRole: "button", accessibilityLabel: tmp65, onPress: onSubmenuPress, style: tmp24.tertiaryContent, children: tmp67 };
                                          const tmp72 = closure_12(tmp(5909).PressableOpacity, obj14);
                                          cResult[46] = onSubmenuPress;
                                          cResult[47] = tmp24.tertiaryContent;
                                          cResult[48] = tmp72;
                                          tmp70 = tmp72;
                                        }
                                        let tmp61 = !tmp5;
                                        if (!tmp5) {
                                          const obj15 = { children: null };
                                          const items4 = [tmp25, closure_12(tmp13(14999), {})];
                                          obj15.children = items4;
                                          tmp61 = closure_14(closure_13, obj15);
                                        }
                                        cResult[41] = tmp25;
                                        cResult[42] = tmp5;
                                        cResult[43] = tmp61;
                                        tmp60 = tmp61;
                                      }
                                      const items5 = [tmp24.expandedContent, animatedStyle3];
                                      cResult[38] = animatedStyle3;
                                      cResult[39] = tmp24.expandedContent;
                                      cResult[40] = items5;
                                      tmp59 = items5;
                                    }
                                    const items6 = [null != secondaryContentWidth && tmp24.secondaryContentOverlay, animatedStyle4];
                                    cResult[35] = animatedStyle4;
                                    cResult[36] = null != secondaryContentWidth && tmp24.secondaryContentOverlay;
                                    cResult[37] = items6;
                                    tmp58 = items6;
                                  }
                                  const obj16 = { style: tmp48, layout: questDockHeaderLayoutAnimation, children: tmp49 };
                                  const tmp55 = closure_12(tmp13(6570), obj16);
                                  cResult[32] = tmp48;
                                  cResult[33] = tmp49;
                                  cResult[34] = tmp55;
                                  tmp52 = tmp55;
                                }
                                const obj17 = { style: animatedStyle1, children: collapsedContent };
                                const tmp51 = closure_12(tmp13(6570), obj17);
                                cResult[29] = collapsedContent;
                                cResult[30] = animatedStyle1;
                                cResult[31] = tmp51;
                                tmp49 = tmp51;
                              }
                              const items7 = [tmp24.secondaryContentOverlay, animatedStyle2];
                              cResult[26] = animatedStyle2;
                              cResult[27] = tmp24.secondaryContentOverlay;
                              cResult[28] = items7;
                              tmp48 = items7;
                            }
                            const items8 = [tmp24.secondaryContent, tmp44];
                            cResult[23] = tmp24.secondaryContent;
                            cResult[24] = tmp44;
                            cResult[25] = items8;
                            tmp47 = items8;
                          }
                          let tmp46 = null != secondaryContentWidth;
                          if (tmp46) {
                            const items9 = [tmp24.secondaryContentStretched, ];
                            const obj18 = { width: secondaryContentWidth };
                            items9[1] = obj18;
                            tmp46 = items9;
                          }
                          cResult[20] = secondaryContentWidth;
                          cResult[21] = tmp24.secondaryContentStretched;
                          cResult[22] = tmp46;
                          tmp44 = tmp46;
                        }
                      }
                      let tmp41 = children;
                      if (tmp5) {
                        const obj19 = { style: tmp24.leadingContent, children };
                        tmp41 = closure_12(closure_6, obj19);
                      }
                      cResult[16] = children;
                      cResult[17] = tmp5;
                      cResult[18] = tmp24.leadingContent;
                      cResult[19] = tmp41;
                      tmp40 = tmp41;
                    }
                  }
                }
              }
              if (tmpResult18.isAndroid()) {
                if (null != blurHash) {
                  const obj20 = { placeholder: blurHash, layoutAnimatedStyle: animatedStyle5, opacityAnimatedStyle: animatedStyle6, layoutAnimation: questDockHeaderLayoutAnimation };
                  let tmp36 = closure_12(tmp13(14997), obj20);
                }
                cResult[11] = blurHash;
                cResult[12] = animatedStyle5;
                cResult[13] = animatedStyle6;
                cResult[14] = tmp9;
                cResult[15] = tmp36;
              }
              const obj21 = { layoutAnimatedStyle: animatedStyle5, opacityAnimatedStyle: animatedStyle6, layoutAnimation: questDockHeaderLayoutAnimation };
              tmp36 = closure_12(tmp13(14963), obj21);
              tmpResult18 = tmp(1370);
            }
            const items10 = [tmp24.header, animatedStyle];
            cResult[8] = animatedStyle;
            cResult[9] = tmp24.header;
            cResult[10] = items10;
            tmp31 = items10;
          }
        }
      }
    }
  }
  if (undefined !== withPressableDisclosure && withPressableDisclosure) {
    const obj22 = { onPress: tertiaryContent, accessibilityRole: "button", style: null, children: null };
    const items11 = [, ];
    ({ actionDisclosures: arr3[0], tertiaryContent: arr3[1] } = tmp24);
    obj22.style = items11;
    const obj23 = { children: null };
    const obj24 = { color: "interactive-text-active", variant: "text-sm/medium", children: null };
    const intl2 = tmp(1126).intl;
    obj24.children = intl2.string(tmp(1126).t.o6FLcF);
    const items12 = [closure_12(tmp(4886).Text, obj24), ];
    const obj25 = { color: tmp13(587).colors.INTERACTIVE_TEXT_ACTIVE, style: tmp24.actionDisclosuresIcon };
    items12[1] = closure_12(tmp(11015).CircleQuestionIcon, obj25);
    obj23.children = items12;
    obj22.children = closure_14(closure_13, obj23);
    let tmp26Result = closure_12(tmp(5909).PressableOpacity, obj22);
  } else {
    const obj26 = { style: null, children: null };
    const items13 = [, ];
    ({ actionDisclosures: arr2[0], tertiaryContent: arr2[1] } = tmp24);
    obj26.style = items13;
    const obj27 = { color: "text-default", variant: "text-sm/medium", children: null };
    const intl = tmp(1126).intl;
    obj27.children = intl.string(tmp(1126).t.o6FLcF);
    obj26.children = closure_12(tmp(4886).Text, obj27);
    tmp26Result = closure_12(closure_6, obj26);
  }
  cResult[num] = tertiaryContent;
  cResult[3] = tmp24.actionDisclosures;
  ({ actionDisclosuresIcon: tmp3[4], tertiaryContent } = tmp24);
  cResult[5] = tertiaryContent;
  cResult[6] = undefined !== withPressableDisclosure && withPressableDisclosure;
  num = 7;
  cResult[7] = tmp26Result;
  const obj8 = { withSpring: activeQuestDockMode(5597).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
}) : ((promotedLabelLeading) => {
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
  const context = noop.useContext(activeQuestDockMode(14897).QuestDockGestureContext);
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
  token = activeQuestDockMode(4580).useToken(questDockWrapperSpecs(587).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp9 = questDockWrapperSpecs(14986)(token);
  noop = tmp9;
  let obj = activeQuestDockMode(4580);
  const fn = function q() {
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
  let obj2 = activeQuestDockMode(4612);
  fn.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5597).withSpring, questDockAnimatedBorderRadius: tmp9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11 };
  fn.__workletHash = 3882883093351;
  fn.__initData = __initData9;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj3 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5597).withSpring, questDockAnimatedBorderRadius: tmp9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11 };
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
  let obj4 = activeQuestDockMode(4612);
  W.__closure = { withSpring: activeQuestDockMode(5597).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  W.__workletHash = 5461767762400;
  W.__initData = __initData10;
  const animatedStyle1 = obj4.useAnimatedStyle(W);
  let obj5 = { withSpring: activeQuestDockMode(5597).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  class Z {
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
  Z.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  Z.__workletHash = 17147681641180;
  Z.__initData = __initData11;
  const animatedStyle2 = activeQuestDockMode(4612).useAnimatedStyle(Z);
  let obj6 = activeQuestDockMode(4612);
  const obj7 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  class F {
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
  const obj8 = activeQuestDockMode(4612);
  F.__closure = { withSpring: activeQuestDockMode(5597).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  F.__workletHash = 17362940839906;
  F.__initData = __initData12;
  const animatedStyle3 = obj8.useAnimatedStyle(F);
  const obj9 = { withSpring: activeQuestDockMode(5597).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
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
  V.__workletHash = 7937699213196;
  V.__initData = __initData13;
  const animatedStyle4 = activeQuestDockMode(4612).useAnimatedStyle(V);
  const obj10 = activeQuestDockMode(4612);
  const fn2 = function j() {
    let pointerEvents = "none";
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      pointerEvents = "auto";
    }
    return { pointerEvents };
  };
  fn2.__closure = { activeQuestDockMode, QuestDockMode };
  fn2.__workletHash = 1087474161008;
  fn2.__initData = __initData14;
  const animatedProps = activeQuestDockMode(4612).useAnimatedProps(fn2);
  const obj11 = activeQuestDockMode(4612);
  const fn3 = function z() {
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
  const obj12 = activeQuestDockMode(4612);
  fn3.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5597).withSpring, questDockAnimatedBorderRadius: tmp9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs };
  fn3.__workletHash = 5464365691303;
  fn3.__initData = __initData15;
  const animatedStyle5 = obj12.useAnimatedStyle(fn3);
  const obj13 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5597).withSpring, questDockAnimatedBorderRadius: tmp9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs };
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
  const obj14 = activeQuestDockMode(4612);
  J.__closure = { withSpring: activeQuestDockMode(5597).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  J.__workletHash = 7025233131750;
  J.__initData = __initData16;
  let animatedStyle6;
  if (flag2) {
    animatedStyle6 = obj14.useAnimatedStyle(J);
  }
  const tmp18 = closure_15();
  if (withPressableDisclosure) {
    const obj16 = { onPress: onDisclosurePress, accessibilityRole: "button", style: null, children: null };
    let items = [, ];
    ({ actionDisclosures: arr2[0], tertiaryContent: arr2[1] } = tmp18);
    obj16.style = items;
    const obj17 = { children: null };
    const obj18 = { color: "interactive-text-active", variant: "text-sm/medium", children: null };
    const intl2 = tmp(1126).intl;
    obj18.children = intl2.string(tmp(1126).t.o6FLcF);
    const items1 = [closure_12(tmp(4886).Text, obj18), ];
    const obj19 = { color: tmp7(587).colors.INTERACTIVE_TEXT_ACTIVE, style: tmp18.actionDisclosuresIcon };
    items1[1] = closure_12(tmp(11015).CircleQuestionIcon, obj19);
    obj17.children = items1;
    obj16.children = closure_14(closure_13, obj17);
    let tmp19Result = closure_12(tmp(5909).PressableOpacity, obj16);
    let tmp22 = closure_12;
  } else {
    const obj20 = { style: null, children: null };
    const items2 = [, ];
    ({ actionDisclosures: arr[0], tertiaryContent: arr[1] } = tmp18);
    obj20.style = items2;
    const obj21 = { color: "text-default", variant: "text-sm/medium", children: null };
    const intl = tmp(1126).intl;
    obj21.children = intl.string(tmp(1126).t.o6FLcF);
    obj20.children = closure_12(tmp(4886).Text, obj21);
    tmp19Result = closure_12(closure_6, obj20);
    tmp22 = closure_12;
  }
  const obj22 = { style: null, layout: questDockHeaderLayoutAnimation, children: null };
  const items3 = [tmp18.header, animatedStyle];
  obj22.style = items3;
  const obj15 = { withSpring: activeQuestDockMode(5597).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  const tmp7Result = questDockWrapperSpecs(6570);
  if (tmpResult.isAndroid()) {
    if (null != blurHash) {
      const obj23 = { placeholder: blurHash, layoutAnimatedStyle: animatedStyle5, opacityAnimatedStyle: animatedStyle6, layoutAnimation: questDockHeaderLayoutAnimation };
      let tmp22Result = tmp22(tmp7(14997), obj23);
    }
    const items4 = [tmp22Result, , ];
    let tmp22Result2 = children;
    if (flag) {
      const obj24 = { style: tmp18.leadingContent, children };
      tmp22Result2 = tmp22(closure_6, obj24);
    }
    items4[1] = tmp22Result2;
    const items5 = [tmp18.secondaryContent, ];
    let tmp34 = null != secondaryContentWidth;
    if (tmp34) {
      const items6 = [tmp18.secondaryContentStretched, ];
      const obj25 = { width: secondaryContentWidth };
      items6[1] = obj25;
      tmp34 = items6;
    }
    const obj26 = { style: null, children: null };
    items5[1] = tmp34;
    obj26.style = items5;
    const obj27 = { style: null, layout: null, children: null };
    const items7 = [tmp18.secondaryContentOverlay, animatedStyle2];
    obj27.style = items7;
    obj27.layout = questDockHeaderLayoutAnimation;
    const obj28 = { style: animatedStyle1, children: promotedLabelLeading.collapsedContent };
    obj27.children = tmp22(tmp7(6570), obj28);
    const items8 = [tmp22(tmp7(6570), obj27), ];
    const obj29 = { animatedProps, style: null, layout: null, children: null };
    let secondaryContentOverlay = null != secondaryContentWidth;
    const tmp7Result4 = tmp7(6570);
    if (secondaryContentOverlay) {
      secondaryContentOverlay = tmp18.secondaryContentOverlay;
    }
    const items9 = [secondaryContentOverlay, animatedStyle4];
    obj29.style = items9;
    obj29.layout = questDockHeaderLayoutAnimation;
    const obj30 = { style: null, children: null };
    const items10 = [tmp18.expandedContent, animatedStyle3];
    obj30.style = items10;
    let tmp25Result = !flag;
    const tmp7Result5 = tmp7(6570);
    if (!flag) {
      const obj31 = { children: null };
      const items11 = [tmp19Result, tmp22(tmp7(14999), {})];
      obj31.children = items11;
      tmp25Result = closure_14(closure_13, obj31);
    }
    const items12 = [tmp25Result, ];
    const obj32 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const intl3 = tmp(1126).intl;
    obj32.accessibilityLabel = intl3.string(tmp(1126).t.PdRCRg);
    obj32.onPress = onSubmenuPress;
    obj32.style = tmp18.tertiaryContent;
    const obj33 = { color: tmp7(587).colors.INTERACTIVE_TEXT_ACTIVE };
    obj32.children = tmp22(tmp(7577).MoreHorizontalIcon, obj33);
    items12[1] = tmp22(tmp(5909).PressableOpacity, obj32);
    obj30.children = items12;
    obj29.children = closure_14(tmp7(6570), obj30);
    items8[1] = tmp22(tmp7Result5, obj29);
    obj26.children = items8;
    items4[2] = closure_14(closure_6, obj26);
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
  tmp22Result = tmp22(tmp7(14963), { layoutAnimatedStyle: animatedStyle5, opacityAnimatedStyle: animatedStyle6, layoutAnimation: questDockHeaderLayoutAnimation });
  tmpResult = activeQuestDockMode(1370);
}));