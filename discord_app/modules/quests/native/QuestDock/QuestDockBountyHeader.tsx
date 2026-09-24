// === Module 15544: QuestDockBountyHeader ===

// Module 15544 (QuestDockBountyHeader)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5272 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const QuestDockMode = fn(5749).QuestDockMode;
const QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = fn(15431).QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PX_32 = nativeDefault.space.PX_32;
const createStyles = fn(4829);
let obj = { wrapper: { alignItems: "center", display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_12, justifyContent: "flex-start", flexShrink: 1, paddingLeft: nativeDefault.space.PX_8 }, productIcon: null, crossFadeWrapper: null, copy: null, smokeArt: null, smokeArtFade: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, flexGrow: 0, flexShrink: 0, height: PX_32, width: PX_32 };
obj.productIcon = size;
obj.crossFadeWrapper = { alignSelf: "stretch", width: 0 };
obj.copy = { bottom: 0, justifyContent: "center", left: 0, position: "absolute", top: 0, flexShrink: 1, maxWidth: 120 };
obj.smokeArt = { position: "absolute", left: 0, bottom: 0 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.smokeArtFade = {};
let closure_9 = createStyles.createStyles(obj);
const __initData = { code: "function QuestDockBountyHeaderTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
let obj3 = { alignItems: "center", display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_12, justifyContent: "flex-start", flexShrink: 1, paddingLeft: nativeDefault.space.PX_8 };
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
  activeQuestDockMode = noop.useContext(tmp(tmp2[8]).QuestDockGestureContext).activeQuestDockMode;
  let obj = activeQuestDockMode(height[7]);
  const fn = function o() {
    let num = 1;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 0;
    }
    return { opacity: spring.withSpring(num, closure_6) };
  };
  const tmpResult = activeQuestDockMode(height[9]);
  fn.__closure = { withSpring: activeQuestDockMode(height[10]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn.__workletHash = 16909083558605;
  fn.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const obj2 = { withSpring: activeQuestDockMode(height[10]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  const tmp7 = width(height[11])(activeQuestDockMode);
  let size = activeQuestDockMode(height[12]).useSmokeArtSize();
  width = size.width;
  height = size.height;
  const items = [width, height];
  const memo = noop.useMemo(() => {
    const size = { width, height };
    return size;
  }, items);
  const tmpResult4 = activeQuestDockMode(height[12]);
  const bountyCreative = activeQuestDockMode(height[7]).useBountyCreative(questDockBounty);
  const tmpResult5 = activeQuestDockMode(height[7]);
  const tmpResult6 = activeQuestDockMode(height[13]);
  const obj3 = { onSubmenuPress: activeQuestDockMode(height[13]).useActionSheetPressHandler(bountyCreative), hideBlurWhenCollapsed: true, promotedLabelLeading: true, collapsedContent: null, secondaryContentWidth: null, children: null };
  const actionSheetPressHandler = activeQuestDockMode(height[13]).useActionSheetPressHandler(bountyCreative);
  obj3.collapsedContent = closure_7(width(height[15]), {});
  obj3.secondaryContentWidth = activeQuestDockMode(height[15]).QUEST_DOCK_BOUNTY_ILLUSTRATION_RESERVED_WIDTH;
  const obj4 = { style: null, pointerEvents: "none", accessible: false, importantForAccessibility: "no-hide-descendants", children: null };
  const items1 = [tmp4.smokeArt, memo];
  obj4.style = items1;
  const obj5 = { style: null, children: null };
  const items2 = [tmp4.smokeArtFade, animatedStyle];
  obj5.style = items2;
  const tmp12 = width(height[14]);
  obj5.children = closure_7(width(height[12]), { paused: tmp7 === QuestDockMode.EXPANDED });
  obj4.children = closure_7(width(height[16]), obj5);
  const items3 = [closure_7(closure_4, obj4), ];
  const obj7 = { style: tmp4.wrapper, accessible: true, accessibilityRole: "text", accessibilityLabel: str, children: null };
  let tmp13Result = null != questDockBounty.productIcon;
  if (tmp13Result) {
    const obj8 = { style: tmp4.productIcon, source: null, resizeMode: "cover", accessible: false, importantForAccessibility: "no" };
    const obj9 = { uri: questDockBounty.productIcon };
    obj8.source = obj9;
    tmp13Result = closure_7(tmp6(tmp2[17]), obj8);
  }
  const items4 = [tmp13Result, ];
  const obj10 = { style: tmp4.crossFadeWrapper, accessible: false, importantForAccessibility: "no-hide-descendants", children: null };
  const obj11 = { style: null, children: null };
  const items5 = [tmp4.copy, animatedStyle];
  obj11.style = items5;
  const obj6 = { paused: tmp7 === QuestDockMode.EXPANDED };
  const tmp15 = width(height[16]);
  obj11.children = closure_7(activeQuestDockMode(height[18]).Text, { variant: "text-md/medium", color: "text-strong", lineClamp: 1, accessible: false, children: str });
  obj10.children = closure_7(width(height[16]), obj11);
  items4[1] = closure_7(closure_4, obj10);
  obj7.children = items4;
  items3[1] = closure_8(closure_4, obj7);
  obj3.children = items3;
  return closure_8(tmp12, obj3);
});