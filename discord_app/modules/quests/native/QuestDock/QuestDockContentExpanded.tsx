// discord_app/modules/quests/native/QuestDock/QuestDockContentExpanded.tsx
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import useSafeAreaInsetsSharedValueDefault from "../../../safe_area/useSafeAreaInsetsSharedValue.native.tsx";
import QuestDockUtils from "QuestDockUtils.tsx";
import QuestDockGestureContext from "QuestDockGestureContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
const QuestDockMode = fn(6916).QuestDockMode;
let closure_5 = fn(17319).QUEST_DOCK_MODE_CHANGE_PHYSICS;
const jsx = fn(21).jsx;
const createStyles = fn(5141);
const obj = { wrapper: null };
const obj3 = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj3.bottom = undefined;
obj3.display = "flex";
obj3.zIndex = 1;
obj.wrapper = obj3;
let closure_7 = createStyles.createStyles(obj);
const constants = {
  code: "(function QuestDockContentExpandedTsx1(){let[expandedHeightMode,getQuestDockExpandedHeightLimits,windowDimensions,safeArea,expandedHeight,getQuestDockExpandedWidth,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs]=this.__closure;return{height:expandedHeightMode==='content'?undefined:getQuestDockExpandedHeightLimits(windowDimensions.get().height,safeArea.get().top,expandedHeight).maxHeight,width:getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring((questDockWrapperSpecs.get().width-getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right))/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};})",
};
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentExpanded.tsx");

export default noop.memo(function QuestDockContentExpanded(arg0) {
  ({ children, expandedHeightMode, expandedHeight } = arg0);
  const context = noop.useContext(QuestDockGestureContext.QuestDockGestureContext);
  ({ activeQuestDockMode, questDockWrapperSpecs, windowDimensions } = context);
  const tmp = _undefined5();
  const tmp5 = useSafeAreaInsetsSharedValueDefault();
  items = [
    constants,
    expandedHeightMode,
    QuestDockUtils.getQuestDockExpandedHeightLimits,
    windowDimensions,
    tmp5,
    expandedHeight,
    QuestDockUtils.getQuestDockExpandedWidth,
    spring_spring.withSpring,
    activeQuestDockMode,
    QuestDockMode,
    _undefined4,
    questDockWrapperSpecs,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items;
  class QuestDockContentExpandedTsx1 {
    constructor() {
      maxHeight = undefined;
      if ("content" !== closure_0) {
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp4 = closure_3;
        tmp5 = closure_4;
        maxHeight = closure_1(closure_2.get().height, closure_3.get().top, closure_4).maxHeight;
      }
      size = {
        height: maxHeight,
        width: closure_5(closure_2.get().width, closure_3.get().left, closure_3.get().right),
        opacity: null,
        transform: null,
      };
      obj2 = closure_2;
      tmp6 = closure_5;
      obj3 = closure_3;
      tmp7 = closure_6;
      num = 0;
      if (closure_7.get() === closure_8.EXPANDED) {
        num = 1;
      }
      size.opacity = tmp7(num, closure_9);
      obj1 = {
        translateX: tmp7(
          (closure_10.get().width - tmp6(obj2.get().width, obj3.get().left, obj3.get().right)) / 2,
          closure_9,
        ),
      };
      items = [];
      items[0] = obj1;
      size.transform = items;
      return size;
    }
  }
  const items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
  QuestDockContentExpandedTsx1.__closure = items1;
  QuestDockContentExpandedTsx1.__workletHash = 5435658496809;
  QuestDockContentExpandedTsx1.__initData = tmp6;
  const animatedStyle = _mod1652.useAnimatedStyle(QuestDockContentExpandedTsx1);
  const obj2 = { style: null, children };
  const items2 = [tmp.wrapper, animatedStyle];
  obj2.style = items2;
  return jsx(_modDef1652.View, { style: null, children });
});
