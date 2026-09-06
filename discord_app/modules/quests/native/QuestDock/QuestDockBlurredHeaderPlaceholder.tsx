// discord_app/modules/quests/native/QuestDock/QuestDockBlurredHeaderPlaceholder.tsx
import thumbHashToRGBA from "../../../../../_runtime/15194_thumbHashToRGBA.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
const QuestDockMode = fn(5444).QuestDockMode;
const QuestDockConstants = fn(15095);
({ QUEST_DOCK_EXPANDED_HEIGHT, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let obj = { image: null, overlay: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.height = QUEST_DOCK_EXPANDED_HEIGHT;
obj.top = -QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
obj.image = obj;
const createStyles = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createStyles.backgroundColor = "rgba(38, 39, 50, 0.3)";
createStyles.height = QUEST_DOCK_EXPANDED_HEIGHT;
obj.overlay = createStyles;
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
  let obj = placeholder(activeQuestDockMode[8]);
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
  obj = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED, questDockWrapperSpecs };
  D.__closure = obj;
  D.__workletHash = 11176778421725;
  D.__initData = __initData;
  obj = { children: null };
  animatedStyle = obj.useAnimatedStyle(D);
  const obj1 = { source: memo, style: null, layout: animatedLayout };
  const items1 = [tmp3.image, animatedStyle, animatedStyle];
  obj1.style = items1;
  const items2 = [
    closure_7(questDockWrapperSpecs(activeQuestDockMode[8]).Image, obj1),
    closure_7(closure_4, { style: tmp3.overlay }),
  ];
  obj.children = items2;
  return closure_9(closure_8, obj);
});
