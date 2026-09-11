// discord_app/modules/quests/native/QuestDock/QuestDockBountyHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import ReanimatedNativeViewDefault from "../../../core/native/ReanimatedNativeView.tsx";
import QuestDockBackgroundBlurHeaderDefault from "QuestDockBackgroundBlurHeader.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const QuestDockMode = fn(5495).QuestDockMode;
const QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = fn(15153).QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PX_32 = nativeDefault.space.PX_32;
const createStyles = fn(4606);
let obj = { wrapper: null, productIcon: null, crossFadeWrapper: null, copy: null };
obj = {
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  gap: nativeDefault.space.PX_12,
  justifyContent: "flex-start",
  flex: 1,
  paddingLeft: nativeDefault.space.PX_8,
};
obj.wrapper = obj;
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.sm,
  flexGrow: 0,
  flexShrink: 0,
  height: PX_32,
  width: PX_32,
};
obj.productIcon = size;
obj.crossFadeWrapper = { alignSelf: "stretch", flex: 1, justifyContent: "center" };
obj.copy = { flexShrink: 1 };
let closure_9 = createStyles.createStyles(obj);
const __initData = {
  code: "function QuestDockBountyHeaderTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}",
};
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyHeader.tsx");

export default noop.memo(function QuestDockBountyHeader() {
  let obj = activeQuestDockMode(15160);
  const questDockBounty = obj.useQuestDockBounty();
  const tmp4 = closure_9();
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  activeQuestDockMode = noop.useContext(tmp(15154).QuestDockGestureContext).activeQuestDockMode;
  let tmpResult = tmp(4343);
  const fn = function n() {
    let obj = spring;
    let num = 1;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 0;
    }
    obj = { opacity: obj.withSpring(num, closure_6) };
    return obj;
  };
  obj = {
    withSpring: tmp(5025).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
  };
  fn.__closure = obj;
  fn.__workletHash = 16909083558605;
  fn.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  tmpResult = tmp(15160);
  const bountyCreative = tmpResult.useBountyCreative(questDockBounty);
  const tmpResult1 = activeQuestDockMode(15150);
  obj = { onSubmenuPress: activeQuestDockMode(15150).useActionSheetPressHandler(bountyCreative), children: null };
  const obj1 = {
    style: tmp4.wrapper,
    accessible: true,
    accessibilityRole: "text",
    accessibilityLabel: str,
    children: null,
  };
  let tmp8Result = null != questDockBounty.productIcon;
  const actionSheetPressHandler = activeQuestDockMode(15150).useActionSheetPressHandler(bountyCreative);
  if (tmp8Result) {
    const obj2 = {
      style: tmp4.productIcon,
      source: null,
      resizeMode: "cover",
      accessible: false,
      importantForAccessibility: "no",
    };
    const obj3 = { uri: questDockBounty.productIcon };
    obj2.source = obj3;
    tmp8Result = closure_7(FastImageDefault, obj2);
  }
  const items = [tmp8Result];
  const obj4 = {
    style: tmp4.crossFadeWrapper,
    accessible: false,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const obj5 = { style: null, children: null };
  const items1 = [tmp4.copy, animatedStyle];
  obj5.style = items1;
  const tmp10 = QuestDockBackgroundBlurHeaderDefault;
  obj5.children = closure_7(activeQuestDockMode(4602).Text, {
    variant: "text-md/medium",
    color: "text-strong",
    lineClamp: 1,
    accessible: false,
    children: str,
  });
  obj4.children = closure_7(ReanimatedNativeViewDefault, obj5);
  items[1] = closure_7(View, obj4);
  obj1.children = items;
  obj.children = closure_8(View, obj1);
  return closure_7(tmp10, obj);
});
