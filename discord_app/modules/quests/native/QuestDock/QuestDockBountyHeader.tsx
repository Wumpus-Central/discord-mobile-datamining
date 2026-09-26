// === Module 14742: QuestDockBountyHeader ===

// Module 14742 (QuestDockBountyHeader)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5280 */;
import QuestTypes from "QuestTypes" /* 5759 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7141 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 14642 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const QuestConstants = fn(5756);
({ QuestDockMode: hasOwnProperty, QuestsExperimentLocations: metroRequire } = QuestConstants);
const QuestDockConstants = fn(14624);
({ QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_7 } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_32 = nativeDefault.space.PX_32;
const createStyles = fn(4836);
let obj = { wrapper: { alignItems: "center", alignSelf: "stretch", display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_12, justifyContent: "flex-start", flex: 1, paddingLeft: nativeDefault.space.PX_12 - QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT }, productIcon: null, crossFadeWrapper: null, copy: null, promotedLabel: null, smokeArt: null, smokeArtFade: null, title: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, flexGrow: 0, flexShrink: 0, height: PX_32, width: PX_32 };
obj.productIcon = size;
obj.crossFadeWrapper = { alignSelf: "stretch", flex: 1 };
obj.copy = { bottom: 0, justifyContent: "center", left: 0, position: "absolute", right: 0, top: 0 };
obj.promotedLabel = { bottom: 0, justifyContent: "center", left: 0, position: "absolute", top: 0 };
obj.smokeArt = { position: "absolute", left: -QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT, bottom: 0 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.smokeArtFade = {};
obj.title = { lineHeight: 16 };
let closure_10 = createStyles.createStyles(obj);
const __initData = { code: "function QuestDockBountyHeaderTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData2 = { code: "function QuestDockBountyHeaderTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,PROMOTED_LABEL_OPACITY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?PROMOTED_LABEL_OPACITY:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
let obj3 = { alignItems: "center", alignSelf: "stretch", display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_12, justifyContent: "flex-start", flex: 1, paddingLeft: nativeDefault.space.PX_12 - QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT };
let obj4 = {};
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyHeader.tsx");

export default noop.memo(function QuestDockBountyHeader() {
  const questDockBounty = activeQuestDockMode(height[7]).useQuestDockBounty();
  const tmp4 = closure_10();
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  activeQuestDockMode = bountyCreative.useContext(tmp(tmp2[8]).QuestDockGestureContext).activeQuestDockMode;
  let obj = activeQuestDockMode(height[7]);
  const fn = function o() {
    let num = 1;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 0;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
  };
  const tmpResult = activeQuestDockMode(height[9]);
  fn.__closure = { withSpring: activeQuestDockMode(height[10]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn.__workletHash = 16909083558605;
  fn.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const obj3 = { withSpring: activeQuestDockMode(height[10]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  const fn2 = function s() {
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 0.7;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
  };
  const tmpResult7 = activeQuestDockMode(height[9]);
  fn2.__closure = { withSpring: activeQuestDockMode(height[10]).withSpring, activeQuestDockMode, QuestDockMode, PROMOTED_LABEL_OPACITY: 0.7, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn2.__workletHash = 273450441779;
  fn2.__initData = __initData2;
  const animatedStyle1 = tmpResult7.useAnimatedStyle(fn2);
  const obj4 = { withSpring: activeQuestDockMode(height[10]).withSpring, activeQuestDockMode, QuestDockMode, PROMOTED_LABEL_OPACITY: 0.7, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  const tmp8 = width(height[11])(activeQuestDockMode);
  const isBountiesAndroidQuestBarSmokeAnimationEnabled = activeQuestDockMode(height[12]).useIsBountiesAndroidQuestBarSmokeAnimationEnabled(constants.QUESTS_BAR_MOBILE);
  const tmpResult8 = activeQuestDockMode(height[12]);
  const tmp10 = activeQuestDockMode(height[13]).isAndroid() && isBountiesAndroidQuestBarSmokeAnimationEnabled;
  const tmpResult9 = activeQuestDockMode(height[13]);
  let size = activeQuestDockMode(height[14]).useSmokeArtSize();
  width = size.width;
  height = size.height;
  const items = [width, height];
  const memo = obj2.useMemo(() => {
    const size = { width, height };
    return size;
  }, items);
  const tmpResult10 = activeQuestDockMode(height[14]);
  bountyCreative = activeQuestDockMode(height[7]).useBountyCreative(questDockBounty);
  const tmpResult11 = activeQuestDockMode(height[7]);
  const items1 = [bountyCreative];
  const tmpResult12 = activeQuestDockMode(height[15]);
  const callback = obj2.useCallback(() => {
    const obj2 = { creative: bountyCreative, isTargetedDisclosure: true, trackingCtx: null };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    obj2.trackingCtx = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    obj.showModal(obj2);
  }, items1);
  const obj5 = { onSubmenuPress: activeQuestDockMode(height[15]).useActionSheetPressHandler(bountyCreative), hideBlurWhenCollapsed: true, promotedLabelLeading: true, collapsedContent: null, secondaryContentWidth: null, children: null };
  const actionSheetPressHandler = activeQuestDockMode(height[15]).useActionSheetPressHandler(bountyCreative);
  obj5.collapsedContent = closure_8(width(height[20]), {});
  obj5.secondaryContentWidth = activeQuestDockMode(height[20]).QUEST_DOCK_BOUNTY_ILLUSTRATION_RESERVED_WIDTH;
  const obj6 = { style: null, pointerEvents: "none", accessible: false, importantForAccessibility: "no-hide-descendants", children: null };
  const items2 = [tmp4.smokeArt, memo];
  obj6.style = items2;
  const obj7 = { style: null, needsOffscreenAlphaCompositing: tmp10, children: null };
  const items3 = [tmp4.smokeArtFade, animatedStyle];
  obj7.style = items3;
  const tmp7Result = width(height[19]);
  const obj8 = { surface: null, paused: null };
  const tmp7Result5 = width(height[21]);
  obj8.surface = activeQuestDockMode(height[14]).QuestDockBountySmokeSurface.COLLAPSED;
  obj8.paused = tmp8 === QuestDockMode.EXPANDED;
  obj7.children = closure_8(width(height[14]), obj8);
  let str2 = "no-offscreen-compositing";
  if (tmp10) {
    str2 = "offscreen-compositing";
  }
  obj6.children = closure_8(tmp7Result5, obj7, str2);
  const items4 = [closure_8(closure_4, obj6), ];
  const obj9 = { style: tmp4.wrapper, children: null };
  let tmp18Result = null != questDockBounty.productIcon;
  if (tmp18Result) {
    const obj10 = { style: tmp4.productIcon, source: null, resizeMode: "cover", accessible: false, importantForAccessibility: "no" };
    const obj11 = { uri: questDockBounty.productIcon };
    obj10.source = obj11;
    tmp18Result = closure_8(tmp7(tmp2[22]), obj10);
  }
  const items5 = [tmp18Result, ];
  const obj12 = { style: tmp4.crossFadeWrapper, children: null };
  const obj13 = { style: null, children: null };
  const items6 = [tmp4.copy, animatedStyle];
  obj13.style = items6;
  const obj14 = { accessible: true, accessibilityRole: "text", accessibilityLabel: str, accessibilityElementsHidden: tmp8 === QuestDockMode.EXPANDED, importantForAccessibility: null, children: null };
  let str3 = "yes";
  const tmp7Result6 = width(height[14]);
  if (tmp8 === QuestDockMode.EXPANDED) {
    str3 = "no-hide-descendants";
  }
  obj14.importantForAccessibility = str3;
  obj14.children = closure_8(activeQuestDockMode(height[23]).Text, { variant: "text-sm/medium", color: "text-strong", lineClamp: 2, accessible: false, style: tmp4.title, children: str });
  obj13.children = closure_8(closure_4, obj14);
  const items7 = [closure_8(width(height[21]), obj13), ];
  const obj16 = { style: null, children: null };
  const items8 = [tmp4.promotedLabel, animatedStyle1];
  obj16.style = items8;
  let str4 = "none";
  const obj15 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 2, accessible: false, style: tmp4.title, children: str };
  const tmp7Result7 = width(height[21]);
  if (tmp8 === QuestDockMode.EXPANDED) {
    str4 = "auto";
  }
  const obj17 = { pointerEvents: str4, accessibilityElementsHidden: tmp8 !== QuestDockMode.EXPANDED, importantForAccessibility: null, children: null };
  let str5 = "no-hide-descendants";
  if (tmp8 === QuestDockMode.EXPANDED) {
    str5 = "yes";
  }
  obj17.importantForAccessibility = str5;
  const obj18 = { onPress: callback, accessibilityRole: "button", children: null };
  const obj19 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl = tmp(tmp2[25]).intl;
  obj19.children = intl.string(activeQuestDockMode(height[25]).t.o6FLcF);
  obj18.children = closure_8(activeQuestDockMode(height[23]).Text, obj19);
  obj17.children = closure_8(activeQuestDockMode(height[24]).PressableOpacity, obj18);
  obj16.children = closure_8(closure_4, obj17);
  items7[1] = closure_8(width(height[21]), obj16);
  obj12.children = items7;
  items5[1] = closure_9(closure_4, obj12);
  obj9.children = items5;
  items4[1] = closure_9(closure_4, obj9);
  obj5.children = items4;
  return closure_9(tmp7Result, obj5);
});