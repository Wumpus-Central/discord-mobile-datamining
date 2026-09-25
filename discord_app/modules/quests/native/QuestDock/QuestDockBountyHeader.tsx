// === Module 14714: QuestDockBountyHeader ===

// Module 14714 (QuestDockBountyHeader)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5273 */;
import QuestTypes from "QuestTypes" /* 5754 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7136 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 14617 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const QuestDockMode = fn(5751).QuestDockMode;
const QuestDockConstants = fn(14599);
({ QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: metroRequire } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PX_32 = nativeDefault.space.PX_32;
const createStyles = fn(4829);
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
let closure_9 = createStyles.createStyles(obj);
const __initData = { code: "function QuestDockBountyHeaderTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData2 = { code: "function QuestDockBountyHeaderTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,PROMOTED_LABEL_OPACITY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?PROMOTED_LABEL_OPACITY:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
let obj3 = { alignItems: "center", alignSelf: "stretch", display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_12, justifyContent: "flex-start", flex: 1, paddingLeft: nativeDefault.space.PX_12 - QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT };
let obj4 = {};
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyHeader.tsx");

export default noop.memo(function QuestDockBountyHeader() {
  const questDockBounty = activeQuestDockMode(height[7]).useQuestDockBounty();
  const tmp4 = closure_9();
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
  let obj2 = { withSpring: activeQuestDockMode(height[10]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  const fn2 = function s() {
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 0.7;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
  };
  const tmpResult5 = activeQuestDockMode(height[9]);
  fn2.__closure = { withSpring: activeQuestDockMode(height[10]).withSpring, activeQuestDockMode, QuestDockMode, PROMOTED_LABEL_OPACITY: 0.7, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn2.__workletHash = 273450441779;
  fn2.__initData = __initData2;
  const animatedStyle1 = tmpResult5.useAnimatedStyle(fn2);
  const tmp8 = width(height[11])(activeQuestDockMode) === QuestDockMode.EXPANDED;
  const obj3 = { withSpring: activeQuestDockMode(height[10]).withSpring, activeQuestDockMode, QuestDockMode, PROMOTED_LABEL_OPACITY: 0.7, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  let size = activeQuestDockMode(height[12]).useSmokeArtSize();
  width = size.width;
  height = size.height;
  const items = [width, height];
  const memo = bountyCreative.useMemo(() => {
    const size = { width, height };
    return size;
  }, items);
  const tmpResult6 = activeQuestDockMode(height[12]);
  bountyCreative = activeQuestDockMode(height[7]).useBountyCreative(questDockBounty);
  const tmpResult7 = activeQuestDockMode(height[7]);
  const items1 = [bountyCreative];
  const tmpResult8 = activeQuestDockMode(height[13]);
  const callback = bountyCreative.useCallback(() => {
    const obj2 = { creative: bountyCreative, isTargetedDisclosure: true, trackingCtx: null };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    obj2.trackingCtx = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    obj.showModal(obj2);
  }, items1);
  const obj4 = { onSubmenuPress: activeQuestDockMode(height[13]).useActionSheetPressHandler(bountyCreative), hideBlurWhenCollapsed: true, promotedLabelLeading: true, collapsedContent: null, secondaryContentWidth: null, children: null };
  const actionSheetPressHandler = activeQuestDockMode(height[13]).useActionSheetPressHandler(bountyCreative);
  obj4.collapsedContent = closure_7(width(height[18]), {});
  obj4.secondaryContentWidth = activeQuestDockMode(height[18]).QUEST_DOCK_BOUNTY_ILLUSTRATION_RESERVED_WIDTH;
  const obj5 = { style: null, pointerEvents: "none", accessible: false, importantForAccessibility: "no-hide-descendants", children: null };
  const items2 = [tmp4.smokeArt, memo];
  obj5.style = items2;
  const obj6 = { style: null, children: null };
  const items3 = [tmp4.smokeArtFade, animatedStyle];
  obj6.style = items3;
  const tmp14 = width(height[17]);
  obj6.children = closure_7(width(height[12]), { paused: tmp8 });
  obj5.children = closure_7(width(height[19]), obj6);
  const items4 = [closure_7(closure_4, obj5), ];
  const obj7 = { style: tmp4.wrapper, children: null };
  let tmp15Result = null != questDockBounty.productIcon;
  if (tmp15Result) {
    const obj8 = { style: tmp4.productIcon, source: null, resizeMode: "cover", accessible: false, importantForAccessibility: "no" };
    const obj9 = { uri: questDockBounty.productIcon };
    obj8.source = obj9;
    tmp15Result = closure_7(tmp7(tmp2[20]), obj8);
  }
  const items5 = [tmp15Result, ];
  const obj10 = { style: tmp4.crossFadeWrapper, children: null };
  const obj11 = { style: null, children: null };
  const items6 = [tmp4.copy, animatedStyle];
  obj11.style = items6;
  const obj12 = { accessible: true, accessibilityRole: "text", accessibilityLabel: str, accessibilityElementsHidden: tmp8, importantForAccessibility: null, children: null };
  let str2 = "yes";
  const tmp17 = width(height[19]);
  if (tmp8) {
    str2 = "no-hide-descendants";
  }
  obj12.importantForAccessibility = str2;
  obj12.children = closure_7(activeQuestDockMode(height[21]).Text, { variant: "text-sm/medium", color: "text-strong", lineClamp: 2, accessible: false, style: tmp4.title, children: str });
  obj11.children = closure_7(closure_4, obj12);
  const items7 = [closure_7(width(height[19]), obj11), ];
  const obj14 = { style: null, children: null };
  const items8 = [tmp4.promotedLabel, animatedStyle1];
  obj14.style = items8;
  let str3 = "none";
  const obj13 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 2, accessible: false, style: tmp4.title, children: str };
  const tmp7Result = width(height[19]);
  if (tmp8) {
    str3 = "auto";
  }
  const obj15 = { pointerEvents: str3, accessibilityElementsHidden: !tmp8, importantForAccessibility: null, children: null };
  let str4 = "no-hide-descendants";
  if (tmp8) {
    str4 = "yes";
  }
  obj15.importantForAccessibility = str4;
  const obj16 = { onPress: callback, accessibilityRole: "button", children: null };
  const obj17 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl = tmp(tmp2[23]).intl;
  obj17.children = intl.string(activeQuestDockMode(height[23]).t.o6FLcF);
  obj16.children = closure_7(activeQuestDockMode(height[21]).Text, obj17);
  obj15.children = closure_7(activeQuestDockMode(height[22]).PressableOpacity, obj16);
  obj14.children = closure_7(closure_4, obj15);
  items7[1] = closure_7(width(height[19]), obj14);
  obj10.children = items7;
  items5[1] = closure_8(closure_4, obj10);
  obj7.children = items5;
  items4[1] = closure_8(closure_4, obj7);
  obj4.children = items4;
  return closure_8(tmp14, obj4);
});