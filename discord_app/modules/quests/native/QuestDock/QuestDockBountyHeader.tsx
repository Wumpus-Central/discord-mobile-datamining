// discord_app/modules/quests/native/QuestDock/QuestDockBountyHeader.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPEDDefault from "QuestDockBackgroundBlurHeader.tsx";
import _modDef15022 from "QuestDockHeaderSeparator.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { QuestDockMode } from "../../QuestConstants.tsx";
import { QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED as closure_6 } from "QuestDockConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c3 = importAllResult;
({ jsx: error, jsxs: closure_8 } = jsxProd);
const PX_32 = ThemesDefault.space.PX_32;
let obj = {
  wrapper: null,
  productIcon: null,
  crossFadeWrapper: null,
  copy: null,
  expandedContent: null,
  expandedLabel: null,
  expandedLabelText: null,
};
obj = {
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  gap: ThemesDefault.space.PX_12,
  justifyContent: "flex-start",
  flex: 1,
  paddingLeft: ThemesDefault.space.PX_8,
};
obj[0] = obj;
createCacheKey = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: ThemesDefault.radii.sm,
  flexGrow: 0,
  flexShrink: 0,
  height: PX_32,
  width: PX_32,
};
obj[1] = createCacheKey;
obj[2] = { alignSelf: "stretch", flex: 1, justifyContent: "center" };
obj[3] = { flexShrink: 1 };
obj[4] = {
  alignItems: "center",
  bottom: 0,
  flexDirection: "row",
  gap: ThemesDefault.space.PX_12,
  left: 0,
  position: "absolute",
  right: 0,
  top: 0,
};
let obj2 = {
  alignItems: "center",
  bottom: 0,
  flexDirection: "row",
  gap: ThemesDefault.space.PX_12,
  left: 0,
  position: "absolute",
  right: 0,
  top: 0,
};
obj[5] = { alignItems: "center", flexDirection: "row", flexShrink: 1, gap: ThemesDefault.space.PX_8 };
obj[6] = { opacity: 0.7 };
let closure_9 = createCacheKey.createStyles(obj);
let closure_10 = {
  code: "function QuestDockBountyHeaderTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}",
};
let closure_11 = {
  code: "function QuestDockBountyHeaderTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}",
};
let obj3 = { alignItems: "center", flexDirection: "row", flexShrink: 1, gap: ThemesDefault.space.PX_8 };
const memoResult = importAllResult.memo(function QuestDockBountyHeader() {
  let obj = activeQuestDockMode(14929);
  const questDockBounty = obj.useQuestDockBounty();
  const tmp4 = callback();
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  const intl = tmp(1233).intl;
  const stringResult = intl.string(activeQuestDockMode(1233).t["4QEsIN"]);
  activeQuestDockMode = importAllResult.useContext(tmp(14923).QuestDockGestureContext).activeQuestDockMode;
  let tmpResult = tmp(4217);
  const fn = function n() {
    let obj = activeQuestDockMode(closure_1_2[11]);
    let num = 1;
    if (activeQuestDockMode.get() === closure_1_5.EXPANDED) {
      num = 0;
    }
    obj = { opacity: obj.withSpring(num, closure_1_6) };
    return obj;
  };
  obj = {
    withSpring: tmp(4927).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_6,
  };
  fn.__closure = obj;
  fn.__workletHash = 16909083558605;
  fn.__initData = closure_10;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  tmpResult = tmp(4217);
  const fn2 = function _() {
    let obj = activeQuestDockMode(closure_1_2[11]);
    let num = 0;
    if (activeQuestDockMode.get() === closure_1_5.EXPANDED) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, closure_1_6) };
    return obj;
  };
  obj = {
    withSpring: tmp(4927).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_6,
  };
  fn2.__closure = obj;
  fn2.__workletHash = 3799310117358;
  fn2.__initData = closure_11;
  const animatedStyle1 = tmpResult.useAnimatedStyle(fn2);
  const bountyCreative = activeQuestDockMode(14929).useBountyCreative(questDockBounty);
  const tmpResult1 = activeQuestDockMode(14929);
  const tmpResult2 = activeQuestDockMode(14919);
  obj1 = { onSubmenuPress: activeQuestDockMode(14919).useActionSheetPressHandler(bountyCreative), children: null };
  const obj2 = {
    style: tmp4.wrapper,
    accessible: true,
    accessibilityRole: "text",
    accessibilityLabel: null,
    children: null,
  };
  let combined = stringResult;
  const actionSheetPressHandler = activeQuestDockMode(14919).useActionSheetPressHandler(bountyCreative);
  if ("" !== str) {
    const _HermesInternal = HermesInternal;
    combined = "" + str + ", " + stringResult;
  }
  obj2[3] = combined;
  let tmp10Result = null != questDockBounty.productIcon;
  if (tmp10Result) {
    const obj3 = { style: null, source: null, resizeMode: "cover", accessible: false, importantForAccessibility: "no" };
    obj3[0] = tmp4.productIcon;
    const obj4 = { uri: null };
    obj4[0] = questDockBounty.productIcon;
    obj3[1] = obj4;
    tmp10Result = tmp10(tmp11(5501), obj3);
  }
  const items = [tmp10Result];
  const obj5 = {
    style: tmp4.crossFadeWrapper,
    accessible: false,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const obj6 = { style: items1, children: null };
  items1 = [tmp4.copy, animatedStyle];
  let tmp11Result = tmp11(7805);
  const items2 = [
    closure_7(activeQuestDockMode(4474).Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      lineClamp: 1,
      accessible: false,
      children: stringResult,
    }),
    closure_7(activeQuestDockMode(4474).Text, {
      variant: "text-md/medium",
      color: "text-strong",
      lineClamp: 1,
      accessible: false,
      children: str,
    }),
  ];
  obj6[1] = items2;
  const items3 = [closure_8(tmp11Result, obj6)];
  const obj7 = { style: items4, children: null };
  items4 = [tmp4.expandedContent, animatedStyle1];
  tmp11Result = tmp11(7805);
  const items5 = [closure_7(_modDef15022, {})];
  const obj8 = { style: tmp4.expandedLabel, children: null };
  const items6 = [
    closure_7(activeQuestDockMode(6265).BountiesPosterIllocon, { size: 32, accessible: false }),
    closure_7(activeQuestDockMode(4474).Text, {
      style: tmp4.expandedLabelText,
      variant: "text-sm/medium",
      color: "text-default",
      lineClamp: 1,
      accessible: false,
      children: stringResult,
    }),
  ];
  obj8[1] = items6;
  items5[1] = closure_8(View, obj8);
  obj7[1] = items5;
  items3[1] = closure_8(tmp11Result, obj7);
  obj5[3] = items3;
  items[1] = closure_8(View, obj5);
  obj2[4] = items;
  obj1[1] = closure_8(View, obj2);
  return closure_7(QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPEDDefault, obj1);
});
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyHeader.tsx");

export default memoResult;
