// discord_app/modules/quests/native/QuestDock/QuestDockBlurredHeaderPlaceholder.tsx
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { QuestDockMode } from "../../QuestConstants.tsx";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QuestDockConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c3 = importAllResult;
({ StyleSheet, View: c4 } = get_ActivityIndicator);
({ QUEST_DOCK_EXPANDED_HEIGHT, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED } = QUEST_DOCK_COLLAPSED_HEIGHT);
({ jsx: error, Fragment: closure_8, jsxs: c9 } = jsxProd);
let obj = { image: null, overlay: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.height = QUEST_DOCK_EXPANDED_HEIGHT;
obj.top = -QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
obj[0] = obj;
createCacheKey = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.backgroundColor = "rgba(38, 39, 50, 0.3)";
createCacheKey.height = QUEST_DOCK_EXPANDED_HEIGHT;
obj[1] = createCacheKey;
let closure_10 = createCacheKey.createStyles(obj);
let closure_11 = { code: "function QuestDockBlurredHeaderPlaceholderTsx1(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,questDockWrapperSpecs}=this.__closure;return{left:activeQuestDockMode.get()===QuestDockMode.EXPANDED?-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,width:questDockWrapperSpecs.get().width+QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED};}" };
const memoResult = importAllResult.memo(function QuestDockBlurredContentBackground(placeholder) {
  placeholder = placeholder.placeholder;
  ({ animatedLayout, animatedStyle } = placeholder);
  const context = importAllResult.useContext(placeholder(activeQuestDockMode[6]).QuestDockGestureContext);
  const questDockWrapperSpecs = context.questDockWrapperSpecs;
  activeQuestDockMode = context.activeQuestDockMode;
  const items = [placeholder];
  const memo = importAllResult.useMemo(() => {
    const obj = { uri: placeholder(activeQuestDockMode[7]).thumbHashToDataURL(Uint8Array.from(atob(placeholder), (str) => str.charCodeAt(0))) };
    return obj;
  }, items);
  const tmp3 = callback3();
  let obj = placeholder(activeQuestDockMode[8]);
  class D {
    constructor() {
      num = 0;
      if (activeQuestDockMode.get() === closure_1_5.EXPANDED) {
        tmp = closure_1_6;
        num = -closure_1_6;
      }
      obj = { left: num, width: questDockWrapperSpecs.get().width + closure_1_6 };
      return obj;
    }
  }
  obj = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED, questDockWrapperSpecs };
  D.__closure = obj;
  D.__workletHash = 11176778421725;
  D.__initData = closure_11;
  obj = { children: null };
  animatedStyle = obj.useAnimatedStyle(D);
  const items1 = [tmp3.image, animatedStyle, animatedStyle];
  const items2 = [callback(questDockWrapperSpecs(activeQuestDockMode[8]).Image, { source: memo, style: items1, layout: animatedLayout }), callback(closure_4, { style: tmp3.overlay })];
  obj[0] = items2;
  return callback2(closure_8, obj);
});
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredHeaderPlaceholder.tsx");

export default memoResult;