// === Module 17476: QuestDockBlurredHeaderPlaceholder ===

// Module 17476 (QuestDockBlurredHeaderPlaceholder)
import _modDef1652 from "module_1652" /* 1652 */;
import FastImageDefault from "FastImage" /* 5842 */;
import thumbHashToRGBA from "thumbHashToRGBA" /* 17477 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const QuestDockMode = fn(6836).QuestDockMode;
const QuestDockConstants = fn(17382);
({ QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: metroImportDefault, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5140);
let obj = { imageContainer: null, overlay: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.overflow = "hidden";
obj3.height = QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
obj3.top = -QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
obj.imageContainer = obj3;
const obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.backgroundColor = "rgba(38, 39, 50, 0.3)";
obj4.height = QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
obj.overlay = obj4;
let closure_10 = createStyles.createStyles(obj);
let closure_11 = { code: "(function QuestDockBlurredHeaderPlaceholderTsx1(){let[activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,questDockWrapperSpecs]=this.__closure;return{left:activeQuestDockMode.get()===QuestDockMode.EXPANDED?-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,width:questDockWrapperSpecs.get().width+QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredHeaderPlaceholder.tsx");

export default noop.memo(function QuestDockBlurredHeaderPlaceholder(arg0) {
  ({ opacityAnimatedStyle, placeholder } = arg0);
  _require = placeholder;
  ({ layoutAnimation, layoutAnimatedStyle } = arg0);
  const context = noop.useContext(require("QuestDockGestureContext").QuestDockGestureContext);
  items = [placeholder];
  ({ questDockWrapperSpecs, activeQuestDockMode } = context);
  const memo = noop.useMemo(() => {
    const obj = { uri: thumbHashToRGBA.thumbHashToDataURL(Uint8Array.from(atob(c0), (str) => str.charCodeAt(0))) };
    return obj;
  }, items);
  const tmp4 = closure_10();
  const items1 = [closure_11, activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED, questDockWrapperSpecs];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp5, tmp6, tmp7, tmp8, tmp9] = items1;
  class QuestDockBlurredHeaderPlaceholderTsx1 {
    constructor() {
      num = 0;
      if (closure_0.get() === closure_1.EXPANDED) {
        tmp = closure_2;
        num = -closure_2;
      }
      obj = { left: num, width: closure_3.get().width + closure_2 };
      return obj;
    }
  }
  const items2 = [tmp6, tmp7, tmp8, tmp9];
  QuestDockBlurredHeaderPlaceholderTsx1.__closure = items2;
  QuestDockBlurredHeaderPlaceholderTsx1.__workletHash = 16240509940580;
  QuestDockBlurredHeaderPlaceholderTsx1.__initData = tmp5;
  const obj2 = { children: null };
  const animatedStyle = require("module_1652").useAnimatedStyle(QuestDockBlurredHeaderPlaceholderTsx1);
  const obj3 = { style: null, layout: layoutAnimation, children: closure_7(FastImageDefault, { source: memo, style: StyleSheet.absoluteFill }) };
  const items3 = [tmp4.imageContainer, layoutAnimatedStyle, animatedStyle, opacityAnimatedStyle];
  obj3.style = items3;
  const items4 = [closure_7(_modDef1652.View, obj3), ];
  const obj5 = { style: null };
  const items5 = [tmp4.overlay, opacityAnimatedStyle];
  obj5.style = items5;
  items4[1] = closure_7(_modDef1652.View, obj5);
  obj2.children = items4;
  return closure_9(closure_8, obj2);
});