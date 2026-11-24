// === Module 16614: QuestDockBackgroundBlurHeader ===

// Module 16614 (QuestDockBackgroundBlurHeader)
import nativeDefault from "native" /* 575 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1358 */;
import useQuestDockAnimatedBorderRadiusDefault from "useQuestDockAnimatedBorderRadius" /* 16600 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ AccessibilityInfo: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const QuestDockMode = fn(6745).QuestDockMode;
const QuestDockConstants = fn(16508);
const QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = QuestDockConstants.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
({ QUEST_DOCK_CONTENT_BORDER_RADII: closure_9, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11, QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT, QUEST_DOCK_COLLAPSED_HEIGHT, QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4917);
let obj = { header: { alignItems: "center", justifyContent: "space-between", flexDirection: "row", height: QUEST_DOCK_COLLAPSED_HEIGHT, overflow: "hidden", paddingRight: QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT, paddingLeft: QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT, gap: nativeDefault.space.PX_8, position: "absolute", zIndex: 2 }, secondaryContent: { flexGrow: 0, flexShrink: 0 }, secondaryContentStretched: { alignSelf: "stretch" }, secondaryContentTrailing: { alignItems: "flex-end", justifyContent: "center" }, secondaryContentOverlay: { justifyContent: "center", position: "absolute", bottom: 0, top: 0, right: 0 }, expandedContent: null, leadingContent: null, actionDisclosures: null, actionDisclosuresIcon: null, tertiaryContent: null };
let obj3 = { alignItems: "center", justifyContent: "space-between", flexDirection: "row", height: QUEST_DOCK_COLLAPSED_HEIGHT, overflow: "hidden", paddingRight: QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT, paddingLeft: QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT, gap: nativeDefault.space.PX_8, position: "absolute", zIndex: 2 };
obj.expandedContent = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj.leadingContent = { alignItems: "center", alignSelf: "stretch", flex: 1, flexDirection: "row" };
obj.actionDisclosures = { alignItems: "center", display: "flex", flexDirection: "row", gap: 4 };
obj.actionDisclosuresIcon = { height: 14, width: 14 };
obj.tertiaryContent = { opacity: 0.7 };
let closure_15 = createStyles.createStyles(obj);
let items = [{ code: "(function questDockHeaderLayoutAnimation_QuestDockBackgroundBlurHeaderTsx1(values){let[withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:withSpring(values.targetHeight,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}};})" }, fn(5518).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED];
let closure_129_0;
let closure_129_1;
[tmp5, tmp6, tmp7] = items;
function questDockHeaderLayoutAnimation(originX) {
  const obj = { initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight }, animations: null };
  const size = { originX: require(originX.targetOriginX, importDefault), originY: require(originX.targetOriginY, importDefault), height: require(originX.targetHeight, importDefault), width: require(originX.targetWidth, importDefault) };
  obj.animations = size;
  return obj;
}
let items1 = [tmp6, tmp7];
questDockHeaderLayoutAnimation.__closure = items1;
questDockHeaderLayoutAnimation.__workletHash = 9861898236452;
questDockHeaderLayoutAnimation.__initData = tmp5;
let closure_17 = { code: "(function QuestDockBackgroundBlurHeaderTsx2(){let[activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED]=this.__closure;return{borderTopLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:activeQuestDockMode.get()===QuestDockMode.EXPANDED?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};})" };
let closure_18 = { code: "(function QuestDockBackgroundBlurHeaderTsx3(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})" };
let closure_19 = { code: "(function QuestDockBackgroundBlurHeaderTsx4(){let[activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED]=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED*-1:0};})" };
let closure_20 = { code: "(function QuestDockBackgroundBlurHeaderTsx5(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})" };
let closure_21 = { code: "(function QuestDockBackgroundBlurHeaderTsx6(){let[activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED]=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED};})" };
let closure_22 = { code: "(function QuestDockBackgroundBlurHeaderTsx7(){let[activeQuestDockMode,QuestDockMode]=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};})" };
let closure_23 = { code: "(function QuestDockBackgroundBlurHeaderTsx8(){let[activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs]=this.__closure;return{borderRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:questDockWrapperSpecs.get().width};})" };
let closure_24 = { code: "(function QuestDockBackgroundBlurHeaderTsx9(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})" };
let obj4 = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBackgroundBlurHeader.tsx");

export default noop.memo(function QuestDockBackgroundBlurHeader(withPressableDisclosure) {
  ({ blurHash, children, secondaryContentWidth, secondaryContentLayout } = withPressableDisclosure);
  if (secondaryContentLayout === undefined) {
    secondaryContentLayout = "overlay";
  }
  let flag = withPressableDisclosure.withPressableDisclosure;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = withPressableDisclosure.promotedLabelLeading;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = withPressableDisclosure.hideBlurWhenCollapsed;
  if (flag3 === undefined) {
    flag3 = false;
  }
  _require = undefined;
  ({ onDisclosurePress, onSubmenuPress } = withPressableDisclosure);
  const context = noop.useContext(require("QuestDockGestureContext").QuestDockGestureContext);
  ({ activeQuestDockMode, questDockWrapperSpecs } = context);
  [tmp5, c0] = noop.useState(false);
  const effect = noop.useEffect(() => {
    if (obj.isIOS()) {
      const result = hasOwnProperty.isReduceTransparencyEnabled();
      result.then(c0);
      closure_0 = hasOwnProperty.addEventListener("reduceTransparencyChanged", c0);
      return () => closure_0.remove();
    }
    obj = utils_PlatformUtils;
  }, []);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  const token = require("useToken").useToken(nativeDefault.modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  let tmp9 = useQuestDockAnimatedBorderRadiusDefault(token);
  let obj = require("useToken");
  items = [closure_17, activeQuestDockMode, c7, closure_9, token, require("spring/spring").withSpring, tmp9, c8, questDockWrapperSpecs, closure_11];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22] = items;
  class QuestDockBackgroundBlurHeaderTsx2 {
    constructor() {
      obj = closure_0;
      tmp = closure_1;
      obj1 = { borderTopLeftRadius: closure_0.get() === closure_1.EXPANDED ? closure_2 : closure_3, borderTopRightRadius: obj.get() === tmp.EXPANDED ? closure_2 : closure_3, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null, transform: null };
      if (obj.get() === tmp.EXPANDED) {
        tmp5 = closure_2;
      } else {
        tmp2 = closure_4;
        tmp3 = closure_5;
        tmp4 = closure_6;
        tmp5 = closure_4(closure_5.get(), closure_6);
      }
      obj1.borderBottomLeftRadius = tmp5;
      if (obj.get() === tmp.EXPANDED) {
        tmp9 = closure_2;
      } else {
        tmp6 = closure_4;
        tmp7 = closure_5;
        tmp8 = closure_6;
        tmp9 = closure_4(closure_5.get(), closure_6);
      }
      obj1.borderBottomRightRadius = tmp9;
      if (obj.get() === tmp.EXPANDED) {
        tmp11 = closure_7;
        tmp12 = closure_8;
        num = 2;
        width = closure_7.get().width - 2 * closure_8;
      } else {
        tmp10 = closure_7;
        width = closure_7.get().width;
      }
      obj1.width = width;
      tmp13 = closure_4;
      num2 = 0;
      if (obj.get() === tmp.EXPANDED) {
        num2 = closure_8;
      }
      obj5 = { translateX: tmp13(num2, closure_6) };
      tmp14 = closure_6;
      items = [, ];
      items[0] = obj5;
      num3 = 0;
      if (obj.get() === tmp.EXPANDED) {
        num3 = closure_8;
      }
      obj6 = { translateY: tmp13(num3, tmp14) };
      items[1] = obj6;
      obj1.transform = items;
      return obj1;
    }
  }
  const items1 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22];
  QuestDockBackgroundBlurHeaderTsx2.__closure = items1;
  QuestDockBackgroundBlurHeaderTsx2.__workletHash = 15843117992557;
  QuestDockBackgroundBlurHeaderTsx2.__initData = tmp13;
  const animatedStyle = require("module_1653").useAnimatedStyle(QuestDockBackgroundBlurHeaderTsx2);
  let obj2 = require("module_1653");
  const items2 = [closure_18, require("spring/spring").withSpring, activeQuestDockMode, c7, c8];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp24, tmp25, tmp26, tmp27, tmp28] = items2;
  class QuestDockBackgroundBlurHeaderTsx3 {
    constructor() {
      tmp = closure_0;
      num = 1;
      if (closure_1.get() === closure_2.EXPANDED) {
        num = 0;
      }
      obj = { opacity: tmp(num, closure_3) };
      return obj;
    }
  }
  const items3 = [tmp25, tmp26, tmp27, tmp28];
  QuestDockBackgroundBlurHeaderTsx3.__closure = items3;
  QuestDockBackgroundBlurHeaderTsx3.__workletHash = 13259096238986;
  QuestDockBackgroundBlurHeaderTsx3.__initData = tmp24;
  const animatedStyle1 = require("module_1653").useAnimatedStyle(QuestDockBackgroundBlurHeaderTsx3);
  const tmpResult = require("module_1653");
  const items4 = [closure_19, activeQuestDockMode, c7, closure_10];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp31, tmp32, tmp33, tmp34] = items4;
  class QuestDockBackgroundBlurHeaderTsx4 {
    constructor() {
      right = 0;
      if (closure_0.get() === closure_1.EXPANDED) {
        tmp = closure_2;
        num2 = -1;
        right = -1 * closure_2;
      }
      return { right };
    }
  }
  const items5 = [tmp32, tmp33, tmp34];
  QuestDockBackgroundBlurHeaderTsx4.__closure = items5;
  QuestDockBackgroundBlurHeaderTsx4.__workletHash = 5498318902770;
  QuestDockBackgroundBlurHeaderTsx4.__initData = tmp31;
  const animatedStyle2 = require("module_1653").useAnimatedStyle(QuestDockBackgroundBlurHeaderTsx4);
  const tmpResult8 = require("module_1653");
  const items6 = [closure_20, require("spring/spring").withSpring, activeQuestDockMode, c7, c8];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp36, tmp37, tmp38, tmp39, tmp40] = items6;
  class QuestDockBackgroundBlurHeaderTsx5 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_1.get() === closure_2.EXPANDED) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_3) };
      return obj;
    }
  }
  const items7 = [tmp37, tmp38, tmp39, tmp40];
  QuestDockBackgroundBlurHeaderTsx5.__closure = items7;
  QuestDockBackgroundBlurHeaderTsx5.__workletHash = 4711611266444;
  QuestDockBackgroundBlurHeaderTsx5.__initData = tmp36;
  const animatedStyle3 = require("module_1653").useAnimatedStyle(QuestDockBackgroundBlurHeaderTsx5);
  const tmpResult9 = require("module_1653");
  const items8 = [closure_21, activeQuestDockMode, c7, closure_10];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp42, tmp43, tmp44, tmp45] = items8;
  class QuestDockBackgroundBlurHeaderTsx6 {
    constructor() {
      right = 0;
      if (closure_0.get() !== closure_1.EXPANDED) {
        right = closure_2;
      }
      return { right };
    }
  }
  const items9 = [tmp43, tmp44, tmp45];
  QuestDockBackgroundBlurHeaderTsx6.__closure = items9;
  QuestDockBackgroundBlurHeaderTsx6.__workletHash = 9528005254022;
  QuestDockBackgroundBlurHeaderTsx6.__initData = tmp42;
  const animatedStyle4 = require("module_1653").useAnimatedStyle(QuestDockBackgroundBlurHeaderTsx6);
  const tmpResult10 = require("module_1653");
  const items10 = [closure_22, activeQuestDockMode, c7];
  _require = undefined;
  importDefault = undefined;
  [tmp47, tmp48, tmp49] = items10;
  class QuestDockBackgroundBlurHeaderTsx7 {
    constructor() {
      pointerEvents = "none";
      if (closure_0.get() === closure_1.EXPANDED) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
  }
  const items11 = [tmp48, tmp49];
  QuestDockBackgroundBlurHeaderTsx7.__closure = items11;
  QuestDockBackgroundBlurHeaderTsx7.__workletHash = 4001448257594;
  QuestDockBackgroundBlurHeaderTsx7.__initData = tmp47;
  const animatedProps = require("module_1653").useAnimatedProps(QuestDockBackgroundBlurHeaderTsx7);
  const tmpResult11 = require("module_1653");
  const items12 = [closure_23, activeQuestDockMode, c7, closure_9, token, require("spring/spring").withSpring, tmp9, c8, questDockWrapperSpecs];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59] = items12;
  class QuestDockBackgroundBlurHeaderTsx8 {
    constructor() {
      obj = closure_0;
      tmp = closure_1;
      obj1 = { borderRadius: closure_0.get() === closure_1.EXPANDED ? closure_2 : closure_3, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null };
      if (obj.get() === tmp.EXPANDED) {
        tmp5 = closure_2;
      } else {
        tmp2 = closure_4;
        tmp3 = closure_5;
        tmp4 = closure_6;
        tmp5 = closure_4(closure_5.get(), closure_6);
      }
      obj1.borderBottomLeftRadius = tmp5;
      if (obj.get() === tmp.EXPANDED) {
        tmp9 = closure_2;
      } else {
        tmp6 = closure_4;
        tmp7 = closure_5;
        tmp8 = closure_6;
        tmp9 = closure_4(closure_5.get(), closure_6);
      }
      obj1.borderBottomRightRadius = tmp9;
      obj1.width = closure_7.get().width;
      return obj1;
    }
  }
  const items13 = [tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59];
  QuestDockBackgroundBlurHeaderTsx8.__closure = items13;
  QuestDockBackgroundBlurHeaderTsx8.__workletHash = 4109714632929;
  QuestDockBackgroundBlurHeaderTsx8.__initData = tmp51;
  const animatedStyle5 = require("module_1653").useAnimatedStyle(QuestDockBackgroundBlurHeaderTsx8);
  const tmpResult12 = require("module_1653");
  const items14 = [closure_24, require("spring/spring").withSpring, activeQuestDockMode, c7, c8];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp61, tmp62, tmp63, tmp64, tmp65] = items14;
  class QuestDockBackgroundBlurHeaderTsx9 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_1.get() === closure_2.EXPANDED) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_3) };
      return obj;
    }
  }
  const items15 = [tmp62, tmp63, tmp64, tmp65];
  QuestDockBackgroundBlurHeaderTsx9.__closure = items15;
  QuestDockBackgroundBlurHeaderTsx9.__workletHash = 6712330626688;
  QuestDockBackgroundBlurHeaderTsx9.__initData = tmp61;
  let animatedStyle6;
  if (flag3) {
    animatedStyle6 = tmpResult13.useAnimatedStyle(QuestDockBackgroundBlurHeaderTsx9);
  }
  const tmp67 = closure_15();
  if (flag) {
    let obj3 = { onPress: onDisclosurePress, accessibilityRole: "button", style: null, children: null };
    const items16 = [, ];
    ({ actionDisclosures: arr18[0], tertiaryContent: arr18[1] } = tmp67);
    obj3.style = items16;
    const obj4 = { children: null };
    const obj5 = { color: "interactive-text-active", variant: "body-sm/medium", children: null };
    const intl2 = tmp(1112).intl;
    obj5.children = intl2.string(tmp(1112).t.o6FLcF);
    const items17 = [closure_12(tmp(5508).Text, obj5), ];
    const obj6 = { color: tmp7(575).colors.INTERACTIVE_TEXT_ACTIVE, style: tmp67.actionDisclosuresIcon };
    items17[1] = closure_12(tmp(9321).CircleQuestionIcon, obj6);
    obj4.children = items17;
    obj3.children = closure_14(closure_13, obj4);
    let tmp68Result = closure_12(tmp(6026).PressableOpacity, obj3);
    let tmp71 = closure_12;
  } else {
    const obj7 = { style: null, children: null };
    const items18 = [, ];
    ({ actionDisclosures: arr17[0], tertiaryContent: arr17[1] } = tmp67);
    obj7.style = items18;
    const obj8 = { color: "text-default", variant: "body-sm/medium", children: null };
    const intl = tmp(1112).intl;
    obj8.children = intl.string(tmp(1112).t.o6FLcF);
    obj7.children = closure_12(tmp(5508).Text, obj8);
    tmp68Result = closure_12(c6, obj7);
    tmp71 = closure_12;
  }
  const obj9 = { style: null, layout: questDockHeaderLayoutAnimation, children: null };
  const items19 = [tmp67.header, animatedStyle];
  obj9.style = items19;
  tmpResult13 = require("module_1653");
  if (tmpResult14.isAndroid()) {
    if (null != blurHash) {
      const obj10 = { placeholder: blurHash, layoutAnimatedStyle: animatedStyle5, opacityAnimatedStyle: animatedStyle6, layoutAnimation: questDockHeaderLayoutAnimation };
      let tmp71Result = tmp71(tmp7(16615), obj10);
    }
    const items20 = [tmp71Result, , ];
    let tmp71Result2 = children;
    if (flag2) {
      const obj11 = { style: tmp67.leadingContent, children };
      tmp71Result2 = tmp71(c6, obj11);
    }
    items20[1] = tmp71Result2;
    const items21 = [tmp67.secondaryContent, ];
    if (null == secondaryContentWidth) {
      const obj12 = { style: null, children: null };
      items21[1] = tmp82;
      obj12.style = items21;
      const obj13 = { style: null, layout: null, children: null };
      const items22 = [tmp67.secondaryContentOverlay, animatedStyle2];
      obj13.style = items22;
      obj13.layout = questDockHeaderLayoutAnimation;
      const obj14 = { style: animatedStyle1, children: withPressableDisclosure.collapsedContent };
      obj13.children = tmp71(tmp7(1653).View, obj14);
      const items23 = [tmp71(tmp7(1653).View, obj13), ];
      const obj15 = { animatedProps, style: null, layout: null, children: null };
      let secondaryContentOverlay = null != secondaryContentWidth;
      if (secondaryContentOverlay) {
        secondaryContentOverlay = "overlay" === secondaryContentLayout;
      }
      if (secondaryContentOverlay) {
        secondaryContentOverlay = tmp67.secondaryContentOverlay;
      }
      const items24 = [secondaryContentOverlay, animatedStyle4];
      obj15.style = items24;
      obj15.layout = questDockHeaderLayoutAnimation;
      const obj16 = { style: null, children: null };
      const items25 = [tmp67.expandedContent, animatedStyle3];
      obj16.style = items25;
      let tmp74Result = !flag2;
      if (!flag2) {
        const obj17 = { children: null };
        const items26 = [tmp68Result, tmp71(tmp7(16617), {})];
        obj17.children = items26;
        tmp74Result = closure_14(closure_13, obj17);
      }
      const items27 = [tmp74Result, ];
      const obj18 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
      const intl3 = tmp(1112).intl;
      obj18.accessibilityLabel = intl3.string(tmp(1112).t.PdRCRg);
      obj18.onPress = onSubmenuPress;
      obj18.style = tmp67.tertiaryContent;
      const obj19 = { color: tmp7(575).colors.INTERACTIVE_TEXT_ACTIVE };
      obj18.children = tmp71(tmp(7612).MoreHorizontalIcon, obj19);
      items27[1] = tmp71(tmp(6026).PressableOpacity, obj18);
      obj16.children = items27;
      obj15.children = closure_14(tmp7(1653).View, obj16);
      items23[1] = tmp71(tmp7(1653).View, obj15);
      obj12.children = items23;
      items20[2] = closure_14(tmp80, obj12);
      obj9.children = items20;
      return closure_14(tmp7(1653).View, obj9);
    } else if ("inline" === secondaryContentLayout) {
      const items28 = [, , ];
      ({ secondaryContentStretched: arr24[0], secondaryContentTrailing: arr24[1] } = tmp67);
      const obj20 = { minWidth: secondaryContentWidth };
      items28[2] = obj20;
      let items29 = items28;
    } else {
      items29 = [tmp67.secondaryContentStretched, ];
      const obj21 = { width: secondaryContentWidth };
      items29[1] = obj21;
    }
  }
  tmp71Result = tmp71(tmp7(16580), { layoutAnimatedStyle: animatedStyle5, opacityAnimatedStyle: animatedStyle6, layoutAnimation: questDockHeaderLayoutAnimation });
  tmpResult14 = require("utils/PlatformUtils");
});