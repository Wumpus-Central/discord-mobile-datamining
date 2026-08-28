// discord_app/modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import CONFIG_NEVER_ANIMATE from "../../../../design/animation/reanimated/spring/spring.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { QuestDockMode } from "../../QuestConstants.tsx";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QuestDockConstants.tsx";
import { ThemeTypes } from "../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
let c4 = importAllResult;
({ AccessibilityInfo: c5, View: closure_6 } = get_ActivityIndicator);
const QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = QUEST_DOCK_COLLAPSED_HEIGHT.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
({ QUEST_DOCK_CONTENT_BORDER_RADII: c9, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: c10, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: unpackModuleId, QUEST_DOCK_COLLAPSED_HEIGHT } = QUEST_DOCK_COLLAPSED_HEIGHT);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
let obj = { questDockHeader: { alignItems: "center", justifyContent: "space-between", flexDirection: "row", height: QUEST_DOCK_COLLAPSED_HEIGHT, overflow: "hidden", paddingRight: 16, paddingLeft: 8, position: "absolute", zIndex: 2 }, wreathImage: { height: 35, marginRight: 4, width: 35 }, questDockHeaderPrimary: { alignItems: "center", flexDirection: "row" }, logo: { marginTop: 2 }, questDockHeaderSecondary: { flexGrow: 0, flexShrink: 0 }, questDockHeaderContentCollapsed: { justifyContent: "center", position: "absolute", bottom: 0, top: 0, right: 0 }, questDockHeaderContentExpanded: { alignItems: "center", flexDirection: "row", gap: 8 }, questDockHeaderActionDisclosures: { alignItems: "center", display: "flex", flexDirection: "row", gap: 4 }, questDockHeaderActionDisclosuresIcon: { height: 14, width: 14 }, questDockHeaderActionSeparator: null, questDockHeaderTertiaryContent: null };
obj = { backgroundColor: ThemesDefault.colors.TEXT_DEFAULT, opacity: 0.2, height: 18, width: 1.5 };
obj[9] = obj;
obj[10] = { opacity: 0.7 };
let closure_16 = createCacheKey.createStyles(obj);
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
  let obj = questCreative(questDockWrapperSpecs[10]);
  questCreative = obj.useQuestCreative();
  const context = token.useContext(questCreative(questDockWrapperSpecs[11]).QuestDockGestureContext);
  const activeQuestDockMode = context.activeQuestDockMode;
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  [tmp6, closure_3] = callback(token.useState(false), 2);
  const effect = token.useEffect(() => {
    if (obj.isIOS()) {
      const result = store.isReduceTransparencyEnabled();
      result.then(closure_3);
      closure_0 = store.addEventListener("reduceTransparencyChanged", closure_3);
      return () => closure_0.remove();
    }
    obj = questCreative(questDockWrapperSpecs[12]);
  }, []);
  let items = [questCreative];
  const memo = token.useMemo(() => ({ type: questCreative(questDockWrapperSpecs[13]).AdCreativeType.QUEST, quest: questCreative }), items);
  obj1 = questCreative(questDockWrapperSpecs[14]);
  const items1 = [questCreative];
  const tmp5 = callback(token.useState(false), 2);
  callback = token.useCallback(() => {
    let obj = activeQuestDockMode(questDockWrapperSpecs[15]);
    obj = { quest: questCreative, isTargetedDisclosure: true, trackingCtx: null };
    obj = { content: questCreative(questDockWrapperSpecs[16]).QuestContent.QUEST_BAR_MOBILE, ctaContent: questCreative(questDockWrapperSpecs[17]).QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: questCreative(questDockWrapperSpecs[16]).QuestContent.QUEST_BAR_MOBILE };
    obj[2] = obj;
    obj.showModal(obj);
  }, items1);
  const actionSheetPressHandler = obj1.useActionSheetPressHandler(memo);
  let obj2 = questCreative(questDockWrapperSpecs[19]);
  if (obj2.isThemeDark(tmp12)) {
    let LIGHT = tmp13.DARK;
    let tmp14 = tmp13;
  } else {
    LIGHT = tmp13.LIGHT;
    tmp14 = tmp13;
  }
  let tmpResult = tmp(tmp2[20]);
  token = tmpResult.useToken(tmp11(tmp2[8]).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  let tmp16 = activeQuestDockMode(questDockWrapperSpecs[21])(token);
  closure_5 = tmp16;
  tmpResult = tmp(tmp2[22]);
  class K {
    constructor() {
      obj = activeQuestDockMode;
      tmp = closure_1_7;
      obj = { borderTopLeftRadius: activeQuestDockMode.get() === closure_1_7.EXPANDED ? closure_1_9 : closure_4, borderTopRightRadius: obj.get() === tmp.EXPANDED ? closure_1_9 : closure_4, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null, transform: null };
      if (obj.get() === tmp.EXPANDED) {
        withSpringResult = closure_1_9;
      } else {
        tmp2 = closure_0;
        tmp3 = questDockWrapperSpecs;
        obj3 = closure_0(questDockWrapperSpecs[9]);
        tmp4 = closure_5;
        tmp5 = closure_1_8;
        withSpringResult = obj3.withSpring(closure_5.get(), closure_1_8);
      }
      obj[2] = withSpringResult;
      if (obj.get() === tmp.EXPANDED) {
        withSpringResult1 = closure_1_9;
      } else {
        tmp7 = closure_0;
        tmp8 = questDockWrapperSpecs;
        obj4 = closure_0(questDockWrapperSpecs[9]);
        tmp9 = closure_5;
        tmp10 = closure_1_8;
        withSpringResult1 = obj4.withSpring(closure_5.get(), closure_1_8);
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
      tmp15 = closure_0;
      tmp16 = questDockWrapperSpecs;
      obj5 = closure_0(questDockWrapperSpecs[9]);
      num2 = 0;
      if (obj.get() === tmp.EXPANDED) {
        num2 = closure_1_11;
      }
      obj1 = { translateX: obj5.withSpring(num2, closure_1_8) };
      tmp17 = closure_1_8;
      items = [, ];
      items[0] = obj1;
      tmp15Result = tmp15(tmp16[9]);
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
  obj = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII: closure_9, questDockBorderRadius: token, withSpring: tmp(tmp2[9]).withSpring, questDockAnimatedBorderRadius: tmp16, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11 };
  K.__closure = obj;
  K.__workletHash = 15527986377887;
  K.__initData = closure_18;
  const animatedStyle = tmpResult.useAnimatedStyle(K);
  tmp12 = activeQuestDockMode(questDockWrapperSpecs[18])();
  class X {
    constructor() {
      obj = closure_0(questDockWrapperSpecs[9]);
      num = 1;
      if (activeQuestDockMode.get() === closure_1_7.EXPANDED) {
        num = 0;
      }
      obj = { opacity: obj.withSpring(num, closure_1_8) };
      return obj;
    }
  }
  obj = { withSpring: tmp(tmp2[9]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  X.__closure = obj;
  X.__workletHash = 15527972438968;
  X.__initData = closure_19;
  const animatedStyle1 = questCreative(questDockWrapperSpecs[22]).useAnimatedStyle(X);
  const tmpResult1 = questCreative(questDockWrapperSpecs[22]);
  const fn = function q() {
    let right = 0;
    if (activeQuestDockMode.get() === closure_1_7.EXPANDED) {
      right = -1 * closure_1_10;
    }
    return { right };
  };
  obj1 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  fn.__closure = obj1;
  fn.__workletHash = 7866036039040;
  fn.__initData = closure_20;
  const animatedStyle2 = questCreative(questDockWrapperSpecs[22]).useAnimatedStyle(fn);
  const tmpResult2 = questCreative(questDockWrapperSpecs[22]);
  const fn2 = function f() {
    let obj = questCreative(questDockWrapperSpecs[9]);
    let num = 0;
    if (activeQuestDockMode.get() === closure_1_7.EXPANDED) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, closure_1_8) };
    return obj;
  };
  obj2 = { withSpring: tmp(tmp2[9]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn2.__closure = obj2;
  fn2.__workletHash = 11647269239934;
  fn2.__initData = closure_21;
  const animatedStyle3 = questCreative(questDockWrapperSpecs[22]).useAnimatedStyle(fn2);
  const tmpResult3 = questCreative(questDockWrapperSpecs[22]);
  class B {
    constructor() {
      right = 0;
      if (activeQuestDockMode.get() !== closure_1_7.EXPANDED) {
        right = closure_1_10;
      }
      return { right };
    }
  }
  B.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  B.__workletHash = 14794727045076;
  B.__initData = closure_22;
  const animatedStyle4 = questCreative(questDockWrapperSpecs[22]).useAnimatedStyle(B);
  const tmpResult4 = questCreative(questDockWrapperSpecs[22]);
  class G {
    constructor() {
      pointerEvents = "none";
      if (activeQuestDockMode.get() === closure_1_7.EXPANDED) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
  }
  G.__closure = { activeQuestDockMode, QuestDockMode };
  G.__workletHash = 6738114933032;
  G.__initData = closure_23;
  const animatedProps = questCreative(questDockWrapperSpecs[22]).useAnimatedProps(G);
  const tmpResult5 = questCreative(questDockWrapperSpecs[22]);
  const fn3 = function x() {
    let obj = activeQuestDockMode;
    obj = { borderRadius: activeQuestDockMode.get() === closure_1_7.EXPANDED ? closure_1_9 : token, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null };
    if (obj.get() === closure_1_7.EXPANDED) {
      let withSpringResult = closure_1_9;
    } else {
      withSpringResult = questCreative(questDockWrapperSpecs[9]).withSpring(store.get(), closure_1_8);
      const obj3 = questCreative(questDockWrapperSpecs[9]);
    }
    obj[1] = withSpringResult;
    if (obj.get() === closure_1_7.EXPANDED) {
      let withSpringResult1 = closure_1_9;
    } else {
      withSpringResult1 = questCreative(questDockWrapperSpecs[9]).withSpring(store.get(), closure_1_8);
      const obj4 = questCreative(questDockWrapperSpecs[9]);
    }
    obj[2] = withSpringResult1;
    obj[3] = questDockWrapperSpecs.get().width;
    return obj;
  };
  const tmpResult6 = questCreative(questDockWrapperSpecs[22]);
  fn3.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII: closure_9, questDockBorderRadius: token, withSpring: questCreative(questDockWrapperSpecs[9]).withSpring, questDockAnimatedBorderRadius: tmp16, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs };
  fn3.__workletHash = 16321960714067;
  fn3.__initData = closure_24;
  const animatedStyle5 = tmpResult6.useAnimatedStyle(fn3);
  const tmp24 = callback3();
  let obj3 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII: closure_9, questDockBorderRadius: token, withSpring: questCreative(questDockWrapperSpecs[9]).withSpring, questDockAnimatedBorderRadius: tmp16, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs };
  const questBarHeroBlurhash = questCreative.config.assets.questBarHeroBlurhash;
  const questGameLogotypeAssetUrl = questCreative(questDockWrapperSpecs[23]).useQuestGameLogotypeAssetUrl(questCreative);
  let obj4 = { style: items2, layout: questDockHeaderLayoutAnimation, children: null };
  items2 = [tmp24.questDockHeader, animatedStyle];
  let tmp11Result = tmp11(tmp2[24]);
  const tmpResult7 = questCreative(questDockWrapperSpecs[23]);
  if (tmpResult8.isAndroid()) {
    if (null != questBarHeroBlurhash) {
      let obj5 = { placeholder: null, animatedStyle: null, animatedLayout: null };
      obj5[0] = questBarHeroBlurhash;
      obj5[1] = animatedStyle5;
      obj5[2] = tmp28;
      let tmp31 = callback2(tmp11(tmp2[25]), obj5);
      let tmp30 = callback2;
    }
    const items3 = [tmp31, , ];
    const obj6 = { style: null, children: null };
    obj6[0] = tmp24.questDockHeaderPrimary;
    tmp11Result = tmp11(tmp2[27]);
    if (LIGHT === tmp14.DARK) {
      let tmp11Result1 = tmp11(tmp2[28]);
    } else {
      tmp11Result1 = tmp11(tmp2[29]);
    }
    const obj7 = { source: null, resizeMode: "contain", style: null };
    obj7[0] = tmp11Result1;
    obj7[2] = tmp24.wreathImage;
    const items4 = [tmp30(tmp11Result, obj7), ];
    const obj8 = { assetUrl: null, height: 36, maxWidth: 120, style: null };
    obj8[0] = questGameLogotypeAssetUrl;
    obj8[3] = tmp24.logo;
    items4[1] = tmp30(tmp11(tmp2[30]), obj8);
    obj6[1] = items4;
    items3[1] = tmp26(closure_6, obj6);
    const obj9 = { style: null, children: null };
    obj9[0] = tmp24.questDockHeaderSecondary;
    const obj10 = { style: null, layout: null, children: null };
    const items5 = [tmp24.questDockHeaderContentCollapsed, animatedStyle2];
    obj10[0] = items5;
    obj10[1] = tmp28;
    const obj11 = { style: null, children: null };
    obj11[0] = animatedStyle1;
    const tmp11Result2 = tmp11(tmp2[24]);
    const obj12 = { style: null, variant: "text-sm/medium", color: "interactive-text-active", children: null };
    obj12[0] = tmp24.questDockHeaderTertiaryContent;
    const intl = tmp(tmp2[32]).intl;
    obj12[3] = intl.string(tmp(tmp2[32]).t["3mgEQf"]);
    obj11[1] = tmp30(tmp(tmp2[31]).Text, obj12);
    obj10[2] = tmp30(tmp11(tmp2[24]), obj11);
    class K {
      constructor() {
        obj = activeQuestDockMode;
        tmp = closure_1_7;
        obj = { borderTopLeftRadius: activeQuestDockMode.get() === closure_1_7.EXPANDED ? closure_1_9 : closure_4, borderTopRightRadius: obj.get() === tmp.EXPANDED ? closure_1_9 : closure_4, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null, transform: null };
        if (obj.get() === tmp.EXPANDED) {
          withSpringResult = closure_1_9;
        } else {
          tmp2 = closure_0;
          tmp3 = questDockWrapperSpecs;
          obj3 = closure_0(questDockWrapperSpecs[9]);
          tmp4 = closure_5;
          tmp5 = closure_1_8;
          withSpringResult = obj3.withSpring(closure_5.get(), closure_1_8);
        }
        obj[2] = withSpringResult;
        if (obj.get() === tmp.EXPANDED) {
          withSpringResult1 = closure_1_9;
        } else {
          tmp7 = closure_0;
          tmp8 = questDockWrapperSpecs;
          obj4 = closure_0(questDockWrapperSpecs[9]);
          tmp9 = closure_5;
          tmp10 = closure_1_8;
          withSpringResult1 = obj4.withSpring(closure_5.get(), closure_1_8);
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
        tmp15 = closure_0;
        tmp16 = questDockWrapperSpecs;
        obj5 = closure_0(questDockWrapperSpecs[9]);
        num2 = 0;
        if (obj.get() === tmp.EXPANDED) {
          num2 = closure_1_11;
        }
        obj1 = { translateX: obj5.withSpring(num2, closure_1_8) };
        tmp17 = closure_1_8;
        items = [, ];
        items[0] = obj1;
        tmp15Result = tmp15(tmp16[9]);
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
    tmp38[0] = tmp30(tmp11Result2, obj10);
    const obj13 = { animatedProps: null, style: null, layout: null, children: null };
    obj13[0] = animatedProps;
    obj13[1] = animatedStyle4;
    obj13[2] = tmp28;
    const tmp11Result3 = tmp11(tmp2[24]);
    const obj14 = { style: null, children: null };
    const items6 = [tmp24.questDockHeaderContentExpanded, animatedStyle3];
    obj14[0] = items6;
    const tmp11Result4 = tmp11(tmp2[24]);
    const obj15 = { onPress: null, accessibilityRole: "button", style: null, children: null };
    obj15[0] = callback;
    const items7 = [, ];
    ({ questDockHeaderActionDisclosures: arr8[0], questDockHeaderTertiaryContent: arr8[1] } = tmp24);
    obj15[2] = items7;
    const obj16 = { children: null };
    const obj17 = { color: "interactive-text-active", variant: "text-sm/medium", children: null };
    class X {
      constructor() {
        obj = closure_0(questDockWrapperSpecs[9]);
        num = 1;
        if (activeQuestDockMode.get() === closure_1_7.EXPANDED) {
          num = 0;
        }
        obj = { opacity: obj.withSpring(num, closure_1_8) };
        return obj;
      }
    }
    const intl2 = tmp(tmp2[32]).intl;
    obj17[2] = intl2.string(tmp(tmp2[32]).t.o6FLcF);
    const items8 = [tmp30(tmp42, obj17), ];
    const obj18 = { color: null, style: null };
    obj18[0] = tmp11(tmp2[8]).colors.INTERACTIVE_TEXT_ACTIVE;
    obj18[1] = tmp24.questDockHeaderActionDisclosuresIcon;
    items8[1] = tmp30(tmp(tmp2[34]).CircleQuestionIcon, obj18);
    obj16[0] = items8;
    obj15[3] = tmp26(closure_15, obj16);
    const items9 = [tmp30(tmp(tmp2[33]).PressableOpacity, obj15), , ];
    const obj19 = { style: null };
    obj19[0] = tmp24.questDockHeaderActionSeparator;
    items9[1] = tmp30(closure_6, obj19);
    const obj20 = { accessibilityRole: "button", onPress: null, style: null, children: null };
    obj20[1] = actionSheetPressHandler;
    obj20[2] = tmp24.questDockHeaderTertiaryContent;
    const obj21 = { color: null };
    obj21[0] = tmp11(tmp2[8]).colors.INTERACTIVE_TEXT_ACTIVE;
    obj20[3] = tmp30(tmp(tmp2[35]).MoreHorizontalIcon, obj21);
    items9[2] = tmp30(tmp(tmp2[33]).PressableOpacity, obj20);
    obj14[1] = items9;
    obj13[3] = tmp26(tmp11(tmp2[24]), obj14);
    tmp38[1] = tmp30(tmp11Result4, obj13);
    obj9[1] = tmp38;
    items3[2] = tmp26(closure_6, obj9);
    obj4[2] = items3;
    return tmp26(tmp11Result, obj4);
  }
  tmp30 = callback2;
  tmp31 = callback2(tmp11(tmp2[26]), { animatedStyle: animatedStyle5, animatedLayout: tmp28 });
});
let result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx");

export default memoResult;