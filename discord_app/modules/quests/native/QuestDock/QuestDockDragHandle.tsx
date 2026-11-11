// discord_app/modules/quests/native/QuestDock/QuestDockDragHandle.tsx
import util from "../../../../intl/index.native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import ActionSheetHeaderBar from "../../../../design/components/Sheet/native/ActionSheetHeaderBar.native.tsx";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import QuestDockUtils from "QuestDockUtils.tsx";
import QuestDockGestureContext from "QuestDockGestureContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
const QuestDockMode = fn(5275).QuestDockMode;
let closure_6 = fn(17585).QUEST_DOCK_MODE_CHANGE_PHYSICS;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5243);
let obj = { dragHandleWrapper: null, dragHandleOverlay: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.bottom = undefined;
obj3.zIndex = 4;
obj.dragHandleWrapper = obj3;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.bottom = undefined;
obj.dragHandleOverlay = obj4;
let closure_9 = createStyles.createStyles(obj);
let closure_10 = {
  code: "(function QuestDockDragHandleTsx1(){let[activeQuestDockMode,QuestDockMode]=this.__closure;return{transform:[{translateY:activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?-4:0}]};})",
};
let closure_11 = {
  code: "(function QuestDockDragHandleTsx2(){let[withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS]=this.__closure;return{opacity:withSpring(isDefaultVariant||activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};})",
};
let closure_12 = {
  code: "(function QuestDockDragHandleTsx3(){let[withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS]=this.__closure;return{opacity:withSpring(!isDefaultVariant&&activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?0.5:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockDragHandle.tsx");

export default noop.memo(function QuestDockDragHandle(arg0) {
  ({ isExpanded, variant } = arg0);
  const tmp = closure_9();
  const activeQuestDockMode = noop.useContext(QuestDockGestureContext.QuestDockGestureContext).activeQuestDockMode;
  items = [closure_10, activeQuestDockMode, QuestDockMode];
  c0 = undefined;
  c1 = undefined;
  [tmp5, tmp6, tmp7] = items;
  class QuestDockDragHandleTsx1 {
    constructor() {
      obj = closure_0;
      num = 0;
      if (closure_0.get() !== closure_1.CLOSED) {
        num = 0;
        if (obj.get() !== tmp.SOFT_DISMISSED) {
          num = -4;
        }
      }
      obj1 = { transform: null };
      items = [];
      items[0] = { translateY: num };
      obj1.transform = items;
      return obj1;
    }
  }
  const items1 = [tmp6, tmp7];
  QuestDockDragHandleTsx1.__closure = items1;
  QuestDockDragHandleTsx1.__workletHash = 17506228702630;
  QuestDockDragHandleTsx1.__initData = tmp5;
  const animatedStyle = _mod1652.useAnimatedStyle(QuestDockDragHandleTsx1);
  const items2 = [
    closure_11,
    spring_spring.withSpring,
    "default" === variant,
    activeQuestDockMode,
    QuestDockMode,
    closure_6,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items2;
  class QuestDockDragHandleTsx2 {
    constructor() {
      if (!closure_1) {
        obj = closure_2;
        if (closure_2.get() !== closure_3.CLOSED) {
          num = 0;
        }
        obj1 = { opacity: null };
        tmp3 = closure_4;
        obj1.opacity = tmp(num, closure_4);
        return obj1;
      }
      num = 1;
      return;
    }
  }
  const items3 = [tmp12, tmp13, tmp14, tmp15, tmp16];
  QuestDockDragHandleTsx2.__closure = items3;
  QuestDockDragHandleTsx2.__workletHash = 5329516175324;
  QuestDockDragHandleTsx2.__initData = tmp11;
  const animatedStyle1 = _mod1652.useAnimatedStyle(QuestDockDragHandleTsx2);
  const tmp2Result = _mod1652;
  const items4 = [
    closure_12,
    spring_spring.withSpring,
    "default" === variant,
    activeQuestDockMode,
    QuestDockMode,
    closure_6,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items4;
  class QuestDockDragHandleTsx3 {
    constructor() {
      if (!closure_1) {
        obj = closure_2;
        if (closure_2.get() !== closure_3.CLOSED) {
          num = 0.5;
        }
        obj1 = { opacity: null };
        tmp3 = closure_4;
        obj1.opacity = tmp(num, closure_4);
        return obj1;
      }
      num = 0;
      return;
    }
  }
  const items5 = [tmp19, tmp20, tmp21, tmp22, tmp23];
  QuestDockDragHandleTsx3.__closure = items5;
  QuestDockDragHandleTsx3.__workletHash = 1737041725862;
  QuestDockDragHandleTsx3.__initData = tmp18;
  let obj2 = { style: tmp.dragHandleWrapper, children: null };
  const animatedStyle2 = _mod1652.useAnimatedStyle(QuestDockDragHandleTsx3);
  const obj3 = { style: animatedStyle, layout: QuestDockUtils.dimensionsLayoutTransition, children: null };
  const obj4 = { style: null, children: null };
  const items6 = [tmp.dragHandleOverlay, animatedStyle2];
  obj4.style = items6;
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (isExpanded) {
    let stringResult = string(t["GQ+4bk"]);
  } else {
    stringResult = string(t.Yplnt6);
  }
  obj4.children = metroImportDefault(ActionSheetHeaderBar.ActionSheetHeaderBar, {
    variant: "overlay",
    accessibilityLabel: stringResult,
  });
  const items7 = [metroImportDefault(_modDef1652.View, obj4)];
  const obj5 = {
    style: null,
    pointerEvents: "none",
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: metroImportDefault(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "default" }),
  };
  const items8 = [tmp.dragHandleOverlay, animatedStyle1];
  obj5.style = items8;
  items7[1] = metroImportDefault(_modDef1652.View, obj5);
  obj3.children = items7;
  obj2.children = React5(_modDef1652.View, obj3);
  return metroImportDefault(React4, obj2);
});
