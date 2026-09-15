// discord_app/modules/quests/native/QuestDock/QuestDockBlurredHeaderPlaceholder.tsx
import thumbHashToRGBA from "../../../../../_runtime/15285_thumbHashToRGBA.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
const QuestDockMode = fn(5529).QuestDockMode;
const QuestDockConstants = fn(15186);
({ QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4639);
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
let closure_10 = createStyles.createStyles(obj);
const __initData = {
  code: "function QuestDockBlurredHeaderPlaceholderTsx1(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,questDockWrapperSpecs}=this.__closure;return{left:activeQuestDockMode.get()===QuestDockMode.EXPANDED?-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,width:questDockWrapperSpecs.get().width+QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredHeaderPlaceholder.tsx");

export default noop.memo(function QuestDockBlurredContentBackground(placeholder) {
  placeholder = placeholder.placeholder;
  ({ animatedLayout, animatedStyle } = placeholder);
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
  const tmp3 = closure_10();
  class D {
    constructor() {
      num = 0;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        tmp = closure_6;
        num = -closure_6;
      }
      obj = { left: num, width: questDockWrapperSpecs.get().width + closure_6 };
      return obj;
    }
  }
  D.__closure = {
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,
    questDockWrapperSpecs,
  };
  D.__workletHash = 11176778421725;
  D.__initData = __initData;
  const obj3 = { children: null };
  const animatedStyle1 = placeholder(activeQuestDockMode[8]).useAnimatedStyle(D);
  const obj4 = { source: memo, style: null, layout: animatedLayout };
  const items1 = [tmp3.image, animatedStyle, animatedStyle1];
  obj4.style = items1;
  const items2 = [
    closure_7(questDockWrapperSpecs(activeQuestDockMode[8]).Image, obj4),
    closure_7(closure_4, { style: tmp3.overlay }),
  ];
  obj3.children = items2;
  return closure_9(closure_8, obj3);
});
