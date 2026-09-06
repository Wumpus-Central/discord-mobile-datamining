// === Module 15192: QuestDockBackgroundBlurHeader ===

// Module 15192 (QuestDockBackgroundBlurHeader)
import nativeDefault from "native" /* 576 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1116 */;
import spring from "spring" /* 4974 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ AccessibilityInfo: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const QuestDockMode = fn(5444).QuestDockMode;
const QuestDockConstants = fn(15095);
const QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = QuestDockConstants.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
({ QUEST_DOCK_CONTENT_BORDER_RADII: closure_9, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: c10, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11, QUEST_DOCK_COLLAPSED_HEIGHT } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
fn(4560);
let obj = { header: null, secondaryContent: null, collapsedContent: null, expandedContent: null, actionDisclosures: null, actionDisclosuresIcon: null, tertiaryContent: null };
obj = { alignItems: "center", justifyContent: "space-between", flexDirection: "row", height: QUEST_DOCK_COLLAPSED_HEIGHT, overflow: "hidden", paddingRight: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, position: "absolute", zIndex: 2 };
obj.header = obj;
obj.secondaryContent = { flexGrow: 0, flexShrink: 0 };
obj.collapsedContent = { justifyContent: "center", position: "absolute", bottom: 0, top: 0, right: 0 };
const createStyles = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj.expandedContent = createStyles;
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
questDockHeaderLayoutAnimation.__closure = { withSpring: fn(4974).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
questDockHeaderLayoutAnimation.__workletHash = 13829887811453;
questDockHeaderLayoutAnimation.__initData = { code: "function questDockHeaderLayoutAnimation_QuestDockBackgroundBlurHeaderTsx1(values){const{withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:withSpring(values.targetHeight,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}};}" };
const __initData = { code: "function QuestDockBackgroundBlurHeaderTsx2(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:activeQuestDockMode.get()===QuestDockMode.EXPANDED?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};}" };
const __initData2 = { code: "function QuestDockBackgroundBlurHeaderTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData3 = { code: "function QuestDockBackgroundBlurHeaderTsx4(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED*-1:0};}" };
const __initData4 = { code: "function QuestDockBackgroundBlurHeaderTsx5(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData5 = { code: "function QuestDockBackgroundBlurHeaderTsx6(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED};}" };
const __initData6 = { code: "function QuestDockBackgroundBlurHeaderTsx7(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}" };
const __initData7 = { code: "function QuestDockBackgroundBlurHeaderTsx8(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs}=this.__closure;return{borderRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:questDockWrapperSpecs.get().width};}" };
let obj2 = { withSpring: fn(4974).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBackgroundBlurHeader.tsx");

export default noop.memo(function QuestDockBackgroundBlurHeader(arg0) {
  ({ blurHash, withPressableDisclosure } = arg0);
  ({ children, collapsedContent } = arg0);
  if (withPressableDisclosure === undefined) {
    withPressableDisclosure = false;
  }
  let activeQuestDockMode;
  dependencyMap = undefined;
  let token;
  noop = undefined;
  ({ onDisclosurePress, onSubmenuPress } = arg0);
  const context = noop.useContext(activeQuestDockMode(15096).QuestDockGestureContext);
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
  let obj = activeQuestDockMode(4262);
  token = obj.useToken(questDockWrapperSpecs(576).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp9 = questDockWrapperSpecs(15184)(token);
  noop = tmp9;
  let obj1 = activeQuestDockMode(4296);
  class G {
    constructor() {
      obj = activeQuestDockMode;
      tmp = QuestDockMode;
      obj = { borderTopLeftRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? closure_9 : closure_3, borderTopRightRadius: obj.get() === tmp.EXPANDED ? closure_9 : closure_3, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null, transform: null };
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
      obj.borderBottomLeftRadius = withSpringResult;
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
      obj.borderBottomRightRadius = withSpringResult1;
      if (obj.get() === tmp.EXPANDED) {
        tmp13 = questDockWrapperSpecs;
        tmp14 = closure_11;
        num = 2;
        width = questDockWrapperSpecs.get().width - 2 * closure_11;
      } else {
        tmp12 = questDockWrapperSpecs;
        width = questDockWrapperSpecs.get().width;
      }
      obj.width = width;
      tmp15 = closure_0;
      tmp16 = closure_2;
      obj5 = closure_0(closure_2[8]);
      num2 = 0;
      if (obj.get() === tmp.EXPANDED) {
        num2 = closure_11;
      }
      obj1 = { translateX: obj5.withSpring(num2, closure_8) };
      tmp17 = closure_8;
      items = [, ];
      items[0] = obj1;
      tmp15Result = tmp15(tmp16[8]);
      num3 = 0;
      if (obj.get() === tmp.EXPANDED) {
        num3 = closure_11;
      }
      obj2 = { translateY: tmp15Result.withSpring(num3, tmp17) };
      items[1] = obj2;
      obj.transform = items;
      return obj;
    }
  }
  obj = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(4974).withSpring, questDockAnimatedBorderRadius: tmp9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11 };
  G.__closure = obj;
  G.__workletHash = 17202411570804;
  G.__initData = __initData;
  const animatedStyle = obj1.useAnimatedStyle(G);
  let obj3 = activeQuestDockMode(4296);
  const fn = function b() {
    let obj = spring;
    let num = 1;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 0;
    }
    obj = { opacity: obj.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
    return obj;
  };
  obj = { withSpring: activeQuestDockMode(4974).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn.__closure = obj;
  fn.__workletHash = 5804990093011;
  fn.__initData = __initData2;
  const animatedStyle1 = obj3.useAnimatedStyle(fn);
  let obj5 = activeQuestDockMode(4296);
  class Y {
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
  obj1 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  Y.__closure = obj1;
  Y.__workletHash = 14001429324395;
  Y.__initData = __initData3;
  const animatedStyle2 = obj5.useAnimatedStyle(Y);
  let obj7 = activeQuestDockMode(4296);
  const fn2 = function x() {
    let obj = spring;
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
    return obj;
  };
  const tmp4 = token(noop.useState(false), 2);
  fn2.__closure = { withSpring: activeQuestDockMode(4974).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn2.__workletHash = 6229744150165;
  fn2.__initData = __initData4;
  const animatedStyle3 = obj7.useAnimatedStyle(fn2);
  let obj9 = activeQuestDockMode(4296);
  const fn3 = function q() {
    let right = 0;
    if (activeQuestDockMode.get() !== QuestDockMode.EXPANDED) {
      right = closure_2_10;
    }
    return { right };
  };
  fn3.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  fn3.__workletHash = 10870034799551;
  fn3.__initData = __initData5;
  const animatedStyle4 = obj9.useAnimatedStyle(fn3);
  let obj10 = activeQuestDockMode(4296);
  class W {
    constructor() {
      pointerEvents = "none";
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
  }
  W.__closure = { activeQuestDockMode, QuestDockMode };
  W.__workletHash = 3272003844163;
  W.__initData = __initData6;
  const animatedProps = obj10.useAnimatedProps(W);
  let obj11 = activeQuestDockMode(4296);
  class V {
    constructor() {
      obj = activeQuestDockMode;
      tmp = QuestDockMode;
      obj = { borderRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? closure_9 : closure_3, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null };
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
      obj.borderBottomLeftRadius = withSpringResult;
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
      obj.borderBottomRightRadius = withSpringResult1;
      obj.width = questDockWrapperSpecs.get().width;
      return obj;
    }
  }
  obj3 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(4974).withSpring, questDockAnimatedBorderRadius: tmp9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs };
  V.__closure = obj3;
  V.__workletHash = 8904986205240;
  V.__initData = __initData7;
  const animatedStyle5 = obj11.useAnimatedStyle(V);
  let tmp17 = closure_15();
  let obj4 = { style: null, layout: questDockHeaderLayoutAnimation, children: null };
  let items = [tmp17.header, animatedStyle];
  obj4.style = items;
  const obj2 = { withSpring: activeQuestDockMode(4974).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  let obj14 = activeQuestDockMode(1116);
  if (obj14.isAndroid()) {
    if (null != blurHash) {
      obj5 = { placeholder: blurHash, animatedStyle: animatedStyle5, animatedLayout: tmp20 };
      let tmp23 = closure_12(tmp7(15193), obj5);
      let tmp22 = closure_12;
    }
    const items1 = [tmp23, children, ];
    const obj6 = { style: tmp17.secondaryContent, children: null };
    obj7 = { style: null, layout: null, children: null };
    const items2 = [tmp17.collapsedContent, animatedStyle2];
    obj7.style = items2;
    obj7.layout = tmp20;
    let tmp7Result = tmp7(7073);
    const obj8 = { style: animatedStyle1, children: collapsedContent };
    obj7.children = tmp22(tmp7(7073), obj8);
    const items3 = [tmp22(tmp7Result, obj7), ];
    obj9 = { animatedProps, style: animatedStyle4, layout: tmp20, children: null };
    tmp7Result = tmp7(7073);
    obj10 = { style: null, children: null };
    const items4 = [tmp17.expandedContent, animatedStyle3];
    obj10.style = items4;
    if (withPressableDisclosure) {
      obj11 = { onPress: onDisclosurePress, accessibilityRole: "button", style: null, children: null };
      const items5 = [, ];
      ({ actionDisclosures: arr7[0], tertiaryContent: arr7[1] } = tmp17);
      obj11.style = items5;
      const obj12 = { children: null };
      const obj13 = { color: "interactive-text-active", variant: "text-sm/medium", children: null };
      const intl2 = tmp(1114).intl;
      obj13.children = intl2.string(tmp(1114).t.o6FLcF);
      const items6 = [tmp22(tmp(4556).Text, obj13), ];
      obj14 = { color: tmp7(576).colors.INTERACTIVE_TEXT_ACTIVE, style: tmp17.actionDisclosuresIcon };
      items6[1] = tmp22(tmp(11105).CircleQuestionIcon, obj14);
      obj12.children = items6;
      obj11.children = tmp18(closure_13, obj12);
      let tmp22Result = tmp22(tmp(5123).PressableOpacity, obj11);
    } else {
      const obj15 = { style: null, children: null };
      const items7 = [, ];
      ({ actionDisclosures: arr6[0], tertiaryContent: arr6[1] } = tmp17);
      obj15.style = items7;
      const obj16 = { color: "text-default", variant: "text-sm/medium", children: null };
      const intl = tmp(1114).intl;
      obj16.children = intl.string(tmp(1114).t.o6FLcF);
      obj15.children = tmp22(tmp(4556).Text, obj16);
      tmp22Result = tmp22(tmp25, obj15);
    }
    const items8 = [tmp22Result, tmp22(tmp7(15195), {}), ];
    const obj17 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    class G {
      constructor() {
        obj = activeQuestDockMode;
        tmp = QuestDockMode;
        obj = { borderTopLeftRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? closure_9 : closure_3, borderTopRightRadius: obj.get() === tmp.EXPANDED ? closure_9 : closure_3, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null, transform: null };
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
        obj.borderBottomLeftRadius = withSpringResult;
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
        obj.borderBottomRightRadius = withSpringResult1;
        if (obj.get() === tmp.EXPANDED) {
          tmp13 = questDockWrapperSpecs;
          tmp14 = closure_11;
          num = 2;
          width = questDockWrapperSpecs.get().width - 2 * closure_11;
        } else {
          tmp12 = questDockWrapperSpecs;
          width = questDockWrapperSpecs.get().width;
        }
        obj.width = width;
        tmp15 = closure_0;
        tmp16 = closure_2;
        obj5 = closure_0(closure_2[8]);
        num2 = 0;
        if (obj.get() === tmp.EXPANDED) {
          num2 = closure_11;
        }
        obj1 = { translateX: obj5.withSpring(num2, closure_8) };
        tmp17 = closure_8;
        items = [, ];
        items[0] = obj1;
        tmp15Result = tmp15(tmp16[8]);
        num3 = 0;
        if (obj.get() === tmp.EXPANDED) {
          num3 = closure_11;
        }
        obj2 = { translateY: tmp15Result.withSpring(num3, tmp17) };
        items[1] = obj2;
        obj.transform = items;
        return obj;
      }
    }
    obj17.accessibilityLabel = obj29.string(tmp(1114).t.PdRCRg);
    obj17.onPress = onSubmenuPress;
    obj17.style = tmp17.tertiaryContent;
    const obj18 = { color: tmp7(576).colors.INTERACTIVE_TEXT_ACTIVE };
    obj17.children = tmp22(tmp(8672).MoreHorizontalIcon, obj18);
    items8[2] = tmp22(tmp(5123).PressableOpacity, obj17);
    obj10.children = items8;
    obj9.children = tmp18(tmp7(7073), obj10);
    items3[1] = tmp22(tmp7Result, obj9);
    obj6.children = items3;
    items1[2] = tmp18(closure_6, obj6);
    obj4.children = items1;
    return tmp18(tmp19, obj4);
  }
  tmp22 = closure_12;
  tmp23 = closure_12(tmp7(15161), { animatedStyle: animatedStyle5, animatedLayout: tmp20 });
});