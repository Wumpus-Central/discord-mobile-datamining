// discord_app/modules/quests/native/QuestDock/QuestDockBlurredHeaderPlaceholder.tsx
import thumbHashToRGBA from "../../../../../_runtime/14725_thumbHashToRGBA.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const StyleSheet = fn(17).StyleSheet;
const QuestDockMode = fn(5756).QuestDockMode;
const QuestDockConstants = fn(14624);
({ QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4836);
let obj = { image: null, overlay: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.height = QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
obj3.top = -QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
obj.image = obj3;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.backgroundColor = "rgba(38, 39, 50, 0.3)";
obj4.height = QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
obj.overlay = obj4;
let closure_9 = createStyles.createStyles(obj);
const __initData = {
  code: "function QuestDockBlurredHeaderPlaceholderTsx1(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,questDockWrapperSpecs}=this.__closure;return{left:activeQuestDockMode.get()===QuestDockMode.EXPANDED?-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,width:questDockWrapperSpecs.get().width+QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredHeaderPlaceholder.tsx");

export default noop.memo(function QuestDockBlurredHeaderPlaceholder(arg0) {
  ({ opacityAnimatedStyle, placeholder } = arg0);
  ({ layoutAnimation, layoutAnimatedStyle } = arg0);
  const context = noop.useContext(placeholder(activeQuestDockMode[6]).QuestDockGestureContext);
  const questDockWrapperSpecs = context.questDockWrapperSpecs;
  activeQuestDockMode = context.activeQuestDockMode;
  const items = [placeholder];
  const memo = noop.useMemo(() => {
    const obj = {
      uri: thumbHashToRGBA.thumbHashToDataURL(Uint8Array.from(atob(placeholder), (str) => str.charCodeAt(0))),
    };
    return obj;
  }, items);
  const tmp3 = closure_9();
  class E {
    constructor() {
      num = 0;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        tmp = closure_5;
        num = -closure_5;
      }
      obj = { left: num, width: questDockWrapperSpecs.get().width + closure_5 };
      return obj;
    }
  }
  E.__closure = {
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,
    questDockWrapperSpecs,
  };
  E.__workletHash = 11176778421725;
  E.__initData = __initData;
  const obj3 = { children: null };
  const animatedStyle = placeholder(activeQuestDockMode[8]).useAnimatedStyle(E);
  const obj4 = { source: memo, style: null, layout: layoutAnimation };
  const items1 = [tmp3.image, layoutAnimatedStyle, animatedStyle, opacityAnimatedStyle];
  obj4.style = items1;
  const items2 = [closure_6(questDockWrapperSpecs(activeQuestDockMode[8]).Image, obj4)];
  const obj5 = { style: null };
  const items3 = [tmp3.overlay, opacityAnimatedStyle];
  obj5.style = items3;
  items2[1] = closure_6(questDockWrapperSpecs(activeQuestDockMode[9]), obj5);
  obj3.children = items2;
  return closure_8(closure_7, obj3);
});
