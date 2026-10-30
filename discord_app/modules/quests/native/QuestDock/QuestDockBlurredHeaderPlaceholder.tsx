// === Module 17094: QuestDockBlurredHeaderPlaceholder ===

// Module 17094 (QuestDockBlurredHeaderPlaceholder)
import thumbHashToRGBA from "thumbHashToRGBA" /* 17095 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const QuestDockMode = fn(6775).QuestDockMode;
const QuestDockConstants = fn(17001);
({ QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5009);
let obj = { imageContainer: null, overlay: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.overflow = "hidden";
obj3.height = QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
obj3.top = -QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
obj.imageContainer = obj3;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.backgroundColor = "rgba(38, 39, 50, 0.3)";
obj4.height = QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
obj.overlay = obj4;
let closure_10 = createStyles.createStyles(obj);
const __initData = { code: "function QuestDockBlurredHeaderPlaceholderTsx1(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,questDockWrapperSpecs}=this.__closure;return{left:activeQuestDockMode.get()===QuestDockMode.EXPANDED?-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,width:questDockWrapperSpecs.get().width+QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED};}" };
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
    const obj = { uri: thumbHashToRGBA.thumbHashToDataURL(Uint8Array.from(atob(placeholder), (str) => str.charCodeAt(0))) };
    return obj;
  }, items);
  const tmp3 = closure_10();
  class E {
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
  E.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED, questDockWrapperSpecs };
  E.__workletHash = 11176778421725;
  E.__initData = __initData;
  const obj3 = { children: null };
  const animatedStyle = placeholder(activeQuestDockMode[8]).useAnimatedStyle(E);
  const obj4 = { style: null, layout: layoutAnimation, children: null };
  const items1 = [tmp3.imageContainer, layoutAnimatedStyle, animatedStyle, opacityAnimatedStyle];
  obj4.style = items1;
  let obj = placeholder(activeQuestDockMode[8]);
  const obj2 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED, questDockWrapperSpecs };
  obj4.children = closure_7(questDockWrapperSpecs(activeQuestDockMode[10]), { source: memo, style: StyleSheet.absoluteFill });
  const items2 = [closure_7(questDockWrapperSpecs(activeQuestDockMode[9]), obj4), ];
  const obj6 = { style: null };
  const items3 = [tmp3.overlay, opacityAnimatedStyle];
  obj6.style = items3;
  items2[1] = closure_7(questDockWrapperSpecs(activeQuestDockMode[9]), obj6);
  obj3.children = items2;
  return closure_9(closure_8, obj3);
});