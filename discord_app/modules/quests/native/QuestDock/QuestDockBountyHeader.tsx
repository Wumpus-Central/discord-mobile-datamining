// === Module 15202: QuestDockBountyHeader ===

// Module 15202 (QuestDockBountyHeader)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 4974 */;
import FastImageDefault from "FastImage" /* 5587 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7073 */;
import QuestDockBackgroundBlurHeaderDefault from "QuestDockBackgroundBlurHeader" /* 15192 */;
import QuestDockHeaderSeparatorDefault from "QuestDockHeaderSeparator" /* 15195 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const QuestDockMode = fn(5444).QuestDockMode;
const QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = fn(15095).QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PX_32 = nativeDefault.space.PX_32;
fn(4560);
let obj = { wrapper: null, productIcon: null, crossFadeWrapper: null, copy: null, expandedContent: null, expandedLabel: null, expandedLabelText: null };
obj = { alignItems: "center", display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_12, justifyContent: "flex-start", flex: 1, paddingLeft: nativeDefault.space.PX_8 };
obj.wrapper = obj;
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, flexGrow: 0, flexShrink: 0, height: PX_32, width: PX_32 };
obj.productIcon = size;
obj.crossFadeWrapper = { alignSelf: "stretch", flex: 1, justifyContent: "center" };
obj.copy = { flexShrink: 1 };
const rect = { alignItems: "center", bottom: 0, flexDirection: "row", gap: nativeDefault.space.PX_12, left: 0, position: "absolute", right: 0, top: 0 };
obj.expandedContent = rect;
const createStyles = { alignItems: "center", flexDirection: "row", flexShrink: 1, gap: nativeDefault.space.PX_8 };
obj.expandedLabel = createStyles;
obj.expandedLabelText = { opacity: 0.7 };
let closure_9 = createStyles.createStyles(obj);
const __initData = { code: "function QuestDockBountyHeaderTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData2 = { code: "function QuestDockBountyHeaderTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyHeader.tsx");

export default noop.memo(function QuestDockBountyHeader() {
  let obj = activeQuestDockMode(15102);
  const questDockBounty = obj.useQuestDockBounty();
  const tmp4 = closure_9();
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  const intl = tmp(1114).intl;
  const stringResult = intl.string(activeQuestDockMode(1114).t["4QEsIN"]);
  activeQuestDockMode = noop.useContext(tmp(15096).QuestDockGestureContext).activeQuestDockMode;
  let tmpResult = tmp(4296);
  const fn = function n() {
    let obj = spring;
    let num = 1;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 0;
    }
    obj = { opacity: obj.withSpring(num, closure_6) };
    return obj;
  };
  obj = { withSpring: tmp(4974).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn.__closure = obj;
  fn.__workletHash = 16909083558605;
  fn.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  tmpResult = tmp(4296);
  const fn2 = function _() {
    let obj = spring;
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, closure_6) };
    return obj;
  };
  obj = { withSpring: tmp(4974).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn2.__closure = obj;
  fn2.__workletHash = 3799310117358;
  fn2.__initData = __initData2;
  const animatedStyle1 = tmpResult.useAnimatedStyle(fn2);
  const bountyCreative = activeQuestDockMode(15102).useBountyCreative(questDockBounty);
  const tmpResult1 = activeQuestDockMode(15102);
  const tmpResult2 = activeQuestDockMode(15092);
  const obj1 = { onSubmenuPress: activeQuestDockMode(15092).useActionSheetPressHandler(bountyCreative), children: null };
  const obj2 = { style: tmp4.wrapper, accessible: true, accessibilityRole: "text", accessibilityLabel: null, children: null };
  let combined = stringResult;
  const actionSheetPressHandler = activeQuestDockMode(15092).useActionSheetPressHandler(bountyCreative);
  if ("" !== str) {
    const _HermesInternal = HermesInternal;
    combined = "" + str + ", " + stringResult;
  }
  obj2.accessibilityLabel = combined;
  let tmp10Result = null != questDockBounty.productIcon;
  if (tmp10Result) {
    const obj3 = { style: tmp4.productIcon, source: null, resizeMode: "cover", accessible: false, importantForAccessibility: "no" };
    const obj4 = { uri: questDockBounty.productIcon };
    obj3.source = obj4;
    tmp10Result = closure_7(FastImageDefault, obj3);
  }
  const items = [tmp10Result, ];
  const obj5 = { style: tmp4.crossFadeWrapper, accessible: false, importantForAccessibility: "no-hide-descendants", children: null };
  const obj6 = { style: null, children: null };
  const items1 = [tmp4.copy, animatedStyle];
  obj6.style = items1;
  let tmp11Result = ReanimatedNativeViewDefault;
  const items2 = [closure_7(activeQuestDockMode(4556).Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, accessible: false, children: stringResult }), closure_7(activeQuestDockMode(4556).Text, { variant: "text-md/medium", color: "text-strong", lineClamp: 1, accessible: false, children: str })];
  obj6.children = items2;
  const items3 = [closure_8(tmp11Result, obj6), ];
  const obj7 = { style: null, children: null };
  const items4 = [tmp4.expandedContent, animatedStyle1];
  obj7.style = items4;
  tmp11Result = ReanimatedNativeViewDefault;
  const items5 = [closure_7(QuestDockHeaderSeparatorDefault, {}), ];
  const obj8 = { style: tmp4.expandedLabel, children: null };
  const items6 = [closure_7(activeQuestDockMode(5692).BountiesPosterIllocon, { size: 32, accessible: false }), closure_7(activeQuestDockMode(4556).Text, { style: tmp4.expandedLabelText, variant: "text-sm/medium", color: "text-default", lineClamp: 1, accessible: false, children: stringResult })];
  obj8.children = items6;
  items5[1] = closure_8(View, obj8);
  obj7.children = items5;
  items3[1] = closure_8(tmp11Result, obj7);
  obj5.children = items3;
  items[1] = closure_8(View, obj5);
  obj2.children = items;
  obj1.children = closure_8(View, obj2);
  return closure_7(QuestDockBackgroundBlurHeaderDefault, obj1);
});