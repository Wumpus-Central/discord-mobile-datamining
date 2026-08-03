import PressableBase from "PressableBase";
import importAllResult from "map";
import get_ActivityIndicator from "useTheme";
import { QuestDockMode } from "QuestsExperimentLocations";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT";
import { ThemeTypes } from "sum";
import jsxProd from "module_4054";
import createCacheKey from "createCacheKey";

let QUEST_DOCK_COLLAPSED_HEIGHT;
let c10;
let c5;
let c9;
let closure_14;
let closure_15;
let closure_6;
let map1;
let unpackModuleId;
const require = arg1;
let c4 = importAllResult;
({ AccessibilityInfo: c5, View: closure_6 } = get_ActivityIndicator);
const QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = QUEST_DOCK_COLLAPSED_HEIGHT.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
({ QUEST_DOCK_CONTENT_BORDER_RADII: c9, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: c10, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: unpackModuleId, QUEST_DOCK_COLLAPSED_HEIGHT } = QUEST_DOCK_COLLAPSED_HEIGHT);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
let obj = { questDockHeader: { alignItems: "center", justifyContent: "space-between", flexDirection: "row", height: QUEST_DOCK_COLLAPSED_HEIGHT, overflow: "hidden", paddingRight: 16, paddingLeft: 8, position: "absolute", zIndex: 2 }, wreathImage: { height: 35, marginRight: 4, width: 35 }, questDockHeaderPrimary: { alignItems: "center", flexDirection: "row" }, logo: { marginTop: 2 }, questDockHeaderSecondary: { flexGrow: 0, flexShrink: 0 }, questDockHeaderContentCollapsed: { justifyContent: "center", position: "absolute", bottom: 0, top: 0, right: 0 }, questDockHeaderContentExpanded: { alignItems: "center", flexDirection: "row", gap: 8 }, questDockHeaderActionDisclosures: { alignItems: "center", display: "flex", flexDirection: "row", gap: 4 }, questDockHeaderActionDisclosuresIcon: { height: 14, width: 14 }, questDockHeaderActionSeparator: null, questDockHeaderTertiaryContent: null };
obj = { backgroundColor: require("Themes").colors.TEXT_DEFAULT, opacity: 0.2, height: 18, width: 1.5 };
obj[9] = obj;
obj[10] = { opacity: 0.7 };
let closure_16 = createCacheKey.createStyles(obj);
function questDockHeaderLayoutAnimation(currentOriginX) {
  obj = { initialValues: obj, animations: null };
  obj = { originX: currentOriginX.currentOriginX, originY: currentOriginX.currentOriginY, width: currentOriginX.currentWidth, height: currentOriginX.currentHeight };
  obj = { originX: null, originY: null, height: null, width: null };
  obj[0] = require(4603) /* CONFIG_NEVER_ANIMATE */.withSpring(currentOriginX.targetOriginX, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
  const obj4 = require(4603) /* CONFIG_NEVER_ANIMATE */;
  obj[1] = require(4603) /* CONFIG_NEVER_ANIMATE */.withSpring(currentOriginX.targetOriginY, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
  const obj5 = require(4603) /* CONFIG_NEVER_ANIMATE */;
  obj[2] = require(4603) /* CONFIG_NEVER_ANIMATE */.withSpring(currentOriginX.targetHeight, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
  const obj6 = require(4603) /* CONFIG_NEVER_ANIMATE */;
  obj[3] = require(4603) /* CONFIG_NEVER_ANIMATE */.withSpring(currentOriginX.targetWidth, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
  obj[1] = obj;
  return obj;
}
createCacheKey = { withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
questDockHeaderLayoutAnimation.__closure = createCacheKey;
questDockHeaderLayoutAnimation.__workletHash = 6787168806966;
questDockHeaderLayoutAnimation.__initData = { code: "function questDockHeaderLayoutAnimation_QuestDockUnenrolledHeaderTsx1(values){const{withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:withSpring(values.targetHeight,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}};}" };
let closure_18 = { code: "function QuestDockUnenrolledHeaderTsx2(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:activeQuestDockMode.get()===QuestDockMode.EXPANDED?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};}" };
let closure_19 = { code: "function QuestDockUnenrolledHeaderTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
let closure_20 = { code: "function QuestDockUnenrolledHeaderTsx4(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED*-1:0};}" };
let closure_21 = { code: "function QuestDockUnenrolledHeaderTsx5(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
let closure_22 = { code: "function QuestDockUnenrolledHeaderTsx6(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED};}" };
let closure_23 = { code: "function QuestDockUnenrolledHeaderTsx7(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}" };
let closure_24 = { code: "function QuestDockUnenrolledHeaderTsx8(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs}=this.__closure;return{borderRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:questDockWrapperSpecs.get().width};}" };
const memoResult = importAllResult.memo(function QuestDockUnenrolledHeader() {
  let PressableBase;
  let tmp6;
  let obj = questCreative(questDockWrapperSpecs[10]);
  questCreative = obj.useQuestCreative();
  const context = token.useContext(questCreative(questDockWrapperSpecs[11]).QuestDockGestureContext);
  const activeQuestDockMode = context.activeQuestDockMode;
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  [tmp6, PressableBase] = callback(token.useState(false), 2);
  const effect = token.useEffect(() => {
    if (obj.isIOS()) {
      const result = tmp15.isReduceTransparencyEnabled();
      result.then(PressableBase);
      let closure_0 = tmp15.addEventListener("reduceTransparencyChanged", PressableBase);
      return () => closure_0.remove();
    }
    obj = questCreative(questDockWrapperSpecs[12]);
  }, []);
  let obj1 = questCreative(questDockWrapperSpecs[13]);
  let items = [questCreative];
  const tmp5 = callback(token.useState(false), 2);
  callback = token.useCallback(() => {
    let obj = activeQuestDockMode(questDockWrapperSpecs[14]);
    obj = { quest: questCreative, isTargetedDisclosure: true, trackingCtx: null };
    obj = { content: questCreative(questDockWrapperSpecs[15]).QuestContent.QUEST_BAR_MOBILE, ctaContent: questCreative(questDockWrapperSpecs[16]).QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: questCreative(questDockWrapperSpecs[15]).QuestContent.QUEST_BAR_MOBILE };
    obj[2] = obj;
    obj.showModal(obj);
  }, items);
  const actionSheetPressHandler = obj1.useActionSheetPressHandler(questCreative);
  let obj2 = questCreative(questDockWrapperSpecs[18]);
  if (obj2.isThemeDark(tmp11)) {
    let LIGHT = tmp12.DARK;
    let tmp13 = tmp12;
  } else {
    LIGHT = tmp12.LIGHT;
    tmp13 = tmp12;
  }
  let tmpResult = tmp(tmp2[19]);
  token = tmpResult.useToken(tmp10(tmp2[8]).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp15 = activeQuestDockMode(questDockWrapperSpecs[20])(token);
  let closure_5 = tmp15;
  tmpResult = tmp(tmp2[21]);
  class K {
    constructor() {
      obj = activeQuestDockMode;
      tmp = outer1_7;
      obj = { borderTopLeftRadius: activeQuestDockMode.get() === outer1_7.EXPANDED ? outer1_9 : closure_4, borderTopRightRadius: obj.get() === tmp.EXPANDED ? outer1_9 : closure_4, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null, transform: null };
      if (obj.get() === tmp.EXPANDED) {
        withSpringResult = outer1_9;
      } else {
        tmp2 = useQuestCreative;
        tmp3 = questDockWrapperSpecs;
        obj3 = useQuestCreative(questDockWrapperSpecs[9]);
        tmp4 = closure_5;
        tmp5 = outer1_8;
        withSpringResult = obj3.withSpring(closure_5.get(), outer1_8);
      }
      obj[2] = withSpringResult;
      if (obj.get() === tmp.EXPANDED) {
        withSpringResult1 = outer1_9;
      } else {
        tmp7 = useQuestCreative;
        tmp8 = questDockWrapperSpecs;
        obj4 = useQuestCreative(questDockWrapperSpecs[9]);
        tmp9 = closure_5;
        tmp10 = outer1_8;
        withSpringResult1 = obj4.withSpring(closure_5.get(), outer1_8);
      }
      obj[3] = withSpringResult1;
      if (obj.get() === tmp.EXPANDED) {
        tmp13 = questDockWrapperSpecs;
        tmp14 = outer1_11;
        num = 2;
        width = questDockWrapperSpecs.get().width - 2 * outer1_11;
      } else {
        tmp12 = questDockWrapperSpecs;
        width = questDockWrapperSpecs.get().width;
      }
      obj[4] = width;
      tmp15 = useQuestCreative;
      tmp16 = questDockWrapperSpecs;
      obj5 = useQuestCreative(questDockWrapperSpecs[9]);
      num2 = 0;
      if (obj.get() === tmp.EXPANDED) {
        num2 = outer1_11;
      }
      obj1 = { translateX: obj5.withSpring(num2, outer1_8) };
      tmp17 = outer1_8;
      items = [, ];
      items[0] = obj1;
      tmp15Result = tmp15(tmp16[9]);
      num3 = 0;
      if (obj.get() === tmp.EXPANDED) {
        num3 = outer1_11;
      }
      obj2 = { translateY: tmp15Result.withSpring(num3, tmp17) };
      items[1] = obj2;
      obj[5] = items;
      return obj;
    }
  }
  obj = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII: closure_9, questDockBorderRadius: token, withSpring: tmp(tmp2[9]).withSpring, questDockAnimatedBorderRadius: tmp15, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11 };
  K.__closure = obj;
  K.__workletHash = 15527986377887;
  K.__initData = closure_18;
  const animatedStyle = tmpResult.useAnimatedStyle(K);
  tmp11 = activeQuestDockMode(questDockWrapperSpecs[17])();
  class X {
    constructor() {
      obj = useQuestCreative(questDockWrapperSpecs[9]);
      num = 1;
      if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
        num = 0;
      }
      obj = { opacity: obj.withSpring(num, outer1_8) };
      return obj;
    }
  }
  obj = { withSpring: tmp(tmp2[9]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  X.__closure = obj;
  X.__workletHash = 15527972438968;
  X.__initData = closure_19;
  const animatedStyle1 = questCreative(questDockWrapperSpecs[21]).useAnimatedStyle(X);
  const tmpResult1 = questCreative(questDockWrapperSpecs[21]);
  const fn = function q() {
    let right = 0;
    if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
      right = -1 * outer1_10;
    }
    return { right };
  };
  obj1 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  fn.__closure = obj1;
  fn.__workletHash = 7866036039040;
  fn.__initData = closure_20;
  const animatedStyle2 = questCreative(questDockWrapperSpecs[21]).useAnimatedStyle(fn);
  const tmpResult2 = questCreative(questDockWrapperSpecs[21]);
  const fn2 = function f() {
    let obj = questCreative(questDockWrapperSpecs[9]);
    let num = 0;
    if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, outer1_8) };
    return obj;
  };
  obj2 = { withSpring: tmp(tmp2[9]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn2.__closure = obj2;
  fn2.__workletHash = 11647269239934;
  fn2.__initData = closure_21;
  const animatedStyle3 = questCreative(questDockWrapperSpecs[21]).useAnimatedStyle(fn2);
  const tmpResult3 = questCreative(questDockWrapperSpecs[21]);
  class B {
    constructor() {
      right = 0;
      if (activeQuestDockMode.get() !== outer1_7.EXPANDED) {
        right = outer1_10;
      }
      return { right };
    }
  }
  B.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  B.__workletHash = 14794727045076;
  B.__initData = closure_22;
  const animatedStyle4 = questCreative(questDockWrapperSpecs[21]).useAnimatedStyle(B);
  const tmpResult4 = questCreative(questDockWrapperSpecs[21]);
  class G {
    constructor() {
      pointerEvents = "none";
      if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
  }
  G.__closure = { activeQuestDockMode, QuestDockMode };
  G.__workletHash = 6738114933032;
  G.__initData = closure_23;
  const animatedProps = questCreative(questDockWrapperSpecs[21]).useAnimatedProps(G);
  const tmpResult5 = questCreative(questDockWrapperSpecs[21]);
  const fn3 = function x() {
    let obj = activeQuestDockMode;
    obj = { borderRadius: activeQuestDockMode.get() === outer1_7.EXPANDED ? outer1_9 : token, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null };
    if (obj.get() === outer1_7.EXPANDED) {
      let withSpringResult = outer1_9;
    } else {
      withSpringResult = questCreative(questDockWrapperSpecs[9]).withSpring(tmp15.get(), outer1_8);
      const obj3 = questCreative(questDockWrapperSpecs[9]);
    }
    obj[1] = withSpringResult;
    if (obj.get() === outer1_7.EXPANDED) {
      let withSpringResult1 = outer1_9;
    } else {
      withSpringResult1 = questCreative(questDockWrapperSpecs[9]).withSpring(tmp15.get(), outer1_8);
      const obj4 = questCreative(questDockWrapperSpecs[9]);
    }
    obj[2] = withSpringResult1;
    obj[3] = questDockWrapperSpecs.get().width;
    return obj;
  };
  const tmpResult6 = questCreative(questDockWrapperSpecs[21]);
  fn3.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII: closure_9, questDockBorderRadius: token, withSpring: questCreative(questDockWrapperSpecs[9]).withSpring, questDockAnimatedBorderRadius: tmp15, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs };
  fn3.__workletHash = 16321960714067;
  fn3.__initData = closure_24;
  const animatedStyle5 = tmpResult6.useAnimatedStyle(fn3);
  const tmp23 = callback3();
  let obj3 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII: closure_9, questDockBorderRadius: token, withSpring: questCreative(questDockWrapperSpecs[9]).withSpring, questDockAnimatedBorderRadius: tmp15, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs };
  const questBarHeroBlurhash = questCreative.config.assets.questBarHeroBlurhash;
  const questGameLogotypeAssetUrl = questCreative(questDockWrapperSpecs[22]).useQuestGameLogotypeAssetUrl(questCreative);
  let obj4 = { style: items1, layout: questDockHeaderLayoutAnimation, children: null };
  items1 = [tmp23.questDockHeader, animatedStyle];
  let tmp10Result = tmp10(tmp2[23]);
  const tmpResult7 = questCreative(questDockWrapperSpecs[22]);
  if (tmpResult8.isAndroid()) {
    if (null != questBarHeroBlurhash) {
      let obj5 = { placeholder: null, animatedStyle: null, animatedLayout: null };
      obj5[0] = questBarHeroBlurhash;
      obj5[1] = animatedStyle5;
      obj5[2] = tmp27;
      let tmp30 = callback2(tmp10(tmp2[24]), obj5);
      let tmp29 = callback2;
    }
    const items2 = [tmp30, , ];
    const obj6 = { style: null, children: null };
    obj6[0] = tmp23.questDockHeaderPrimary;
    tmp10Result = tmp10(tmp2[26]);
    if (LIGHT === tmp13.DARK) {
      let tmp10Result1 = tmp10(tmp2[27]);
    } else {
      tmp10Result1 = tmp10(tmp2[28]);
    }
    const obj7 = { source: null, resizeMode: "contain", style: null };
    obj7[0] = tmp10Result1;
    obj7[2] = tmp23.wreathImage;
    const items3 = [tmp29(tmp10Result, obj7), ];
    const obj8 = { assetUrl: null, height: 36, maxWidth: 120, style: null };
    obj8[0] = questGameLogotypeAssetUrl;
    obj8[3] = tmp23.logo;
    items3[1] = tmp29(tmp10(tmp2[29]), obj8);
    obj6[1] = items3;
    items2[1] = tmp25(closure_6, obj6);
    const obj9 = { style: null, children: null };
    obj9[0] = tmp23.questDockHeaderSecondary;
    const obj10 = { style: null, layout: null, children: null };
    const items4 = [tmp23.questDockHeaderContentCollapsed, animatedStyle2];
    obj10[0] = items4;
    obj10[1] = tmp27;
    const obj11 = { style: null, children: null };
    obj11[0] = animatedStyle1;
    const tmp10Result2 = tmp10(tmp2[23]);
    const obj12 = { style: null, variant: "text-sm/medium", color: "interactive-text-active", children: null };
    obj12[0] = tmp23.questDockHeaderTertiaryContent;
    const string = tmp(tmp2[31]).intl.string;
    class K {
      constructor() {
        obj = activeQuestDockMode;
        tmp = outer1_7;
        obj = { borderTopLeftRadius: activeQuestDockMode.get() === outer1_7.EXPANDED ? outer1_9 : closure_4, borderTopRightRadius: obj.get() === tmp.EXPANDED ? outer1_9 : closure_4, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null, transform: null };
        if (obj.get() === tmp.EXPANDED) {
          withSpringResult = outer1_9;
        } else {
          tmp2 = useQuestCreative;
          tmp3 = questDockWrapperSpecs;
          obj3 = useQuestCreative(questDockWrapperSpecs[9]);
          tmp4 = closure_5;
          tmp5 = outer1_8;
          withSpringResult = obj3.withSpring(closure_5.get(), outer1_8);
        }
        obj[2] = withSpringResult;
        if (obj.get() === tmp.EXPANDED) {
          withSpringResult1 = outer1_9;
        } else {
          tmp7 = useQuestCreative;
          tmp8 = questDockWrapperSpecs;
          obj4 = useQuestCreative(questDockWrapperSpecs[9]);
          tmp9 = closure_5;
          tmp10 = outer1_8;
          withSpringResult1 = obj4.withSpring(closure_5.get(), outer1_8);
        }
        obj[3] = withSpringResult1;
        if (obj.get() === tmp.EXPANDED) {
          tmp13 = questDockWrapperSpecs;
          tmp14 = outer1_11;
          num = 2;
          width = questDockWrapperSpecs.get().width - 2 * outer1_11;
        } else {
          tmp12 = questDockWrapperSpecs;
          width = questDockWrapperSpecs.get().width;
        }
        obj[4] = width;
        tmp15 = useQuestCreative;
        tmp16 = questDockWrapperSpecs;
        obj5 = useQuestCreative(questDockWrapperSpecs[9]);
        num2 = 0;
        if (obj.get() === tmp.EXPANDED) {
          num2 = outer1_11;
        }
        obj1 = { translateX: obj5.withSpring(num2, outer1_8) };
        tmp17 = outer1_8;
        items = [, ];
        items[0] = obj1;
        tmp15Result = tmp15(tmp16[9]);
        num3 = 0;
        if (obj.get() === tmp.EXPANDED) {
          num3 = outer1_11;
        }
        obj2 = { translateY: tmp15Result.withSpring(num3, tmp17) };
        items[1] = obj2;
        obj[5] = items;
        return obj;
      }
    }
    obj11[1] = tmp29(tmp(tmp2[30]).Text, obj12);
    obj10[2] = tmp29(tmp10(tmp2[23]), obj11);
    const items5 = [tmp29(tmp10Result2, obj10), ];
    const obj13 = { animatedProps: null, style: null, layout: null, children: null };
    obj13[0] = animatedProps;
    obj13[1] = animatedStyle4;
    obj13[2] = tmp27;
    const tmp10Result3 = tmp10(tmp2[23]);
    const obj14 = { style: null, children: null };
    const items6 = [tmp23.questDockHeaderContentExpanded, animatedStyle3];
    obj14[0] = items6;
    const tmp10Result4 = tmp10(tmp2[23]);
    const obj15 = { onPress: null, accessibilityRole: "button", style: null, children: null };
    obj15[0] = callback;
    const items7 = [, ];
    ({ questDockHeaderActionDisclosures: arr8[0], questDockHeaderTertiaryContent: arr8[1] } = tmp23);
    obj15[2] = items7;
    class X {
      constructor() {
        obj = useQuestCreative(questDockWrapperSpecs[9]);
        num = 1;
        if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
          num = 0;
        }
        obj = { opacity: obj.withSpring(num, outer1_8) };
        return obj;
      }
    }
    const obj16 = { color: "interactive-text-active", variant: "text-sm/medium", children: null };
    const intl = tmp(tmp2[31]).intl;
    obj16[2] = intl.string(tmp(tmp2[31]).t.o6FLcF);
    const items8 = [tmp29(tmp(tmp2[30]).Text, obj16), ];
    const obj17 = { color: null, style: null };
    obj17[0] = tmp10(tmp2[8]).colors.INTERACTIVE_TEXT_ACTIVE;
    obj17[1] = tmp23.questDockHeaderActionDisclosuresIcon;
    items8[1] = tmp29(tmp(tmp2[33]).CircleQuestionIcon, obj17);
    tmp40[0] = items8;
    obj15[3] = tmp25(closure_15, tmp40);
    const items9 = [tmp29(tmp(tmp2[32]).PressableOpacity, obj15), , ];
    const obj18 = { style: null };
    obj18[0] = tmp23.questDockHeaderActionSeparator;
    items9[1] = tmp29(closure_6, obj18);
    const obj19 = { accessibilityRole: "button", onPress: null, style: null, children: null };
    obj19[1] = actionSheetPressHandler;
    obj19[2] = tmp23.questDockHeaderTertiaryContent;
    const obj20 = { color: null };
    obj20[0] = tmp10(tmp2[8]).colors.INTERACTIVE_TEXT_ACTIVE;
    obj19[3] = tmp29(tmp(tmp2[34]).MoreHorizontalIcon, obj20);
    items9[2] = tmp29(tmp(tmp2[32]).PressableOpacity, obj19);
    obj14[1] = items9;
    obj13[3] = tmp25(tmp10(tmp2[23]), obj14);
    items5[1] = tmp29(tmp10Result4, obj13);
    obj9[1] = items5;
    items2[2] = tmp25(closure_6, obj9);
    obj4[2] = items2;
    return tmp25(tmp10Result, obj4);
  }
  tmp29 = callback2;
  tmp30 = callback2(tmp10(tmp2[25]), { animatedStyle: animatedStyle5, animatedLayout: tmp27 });
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx");

export default memoResult;