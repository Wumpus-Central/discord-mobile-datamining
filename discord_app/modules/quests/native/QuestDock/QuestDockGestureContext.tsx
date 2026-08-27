// === Module 14646: QuestDockMode ===

// Module 14646 (QuestDockMode)
import importAllResult from "noop" /* 19 */;
import closure_4 from "QuestDockMode" /* 14643 */;
import { QuestDockMode } from "QuestsExperimentLocations" /* 5339 */;
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT" /* 14645 */;
import { jsx } from "jsxProd" /* 21 */;
import createFakeSharedValue from "createFakeSharedValue" /* 7730 */;

const require = arg1;
let c3 = importAllResult;
({ QUEST_DOCK_COLLAPSED_HEIGHT: closure_6, QUEST_DOCK_EXPANDED_HEIGHT: error } = QUEST_DOCK_COLLAPSED_HEIGHT);
let obj = { questDockWrapperSpecs: null, windowDimensions: null, activeQuestDockMode: null, minExpandedContentHeight: null };
obj[0] = createFakeSharedValue.createFakeSharedValue({ width: 0, height: 0, x: 0, y: 0, prevDeltaY: 0 });
obj[1] = createFakeSharedValue.createFakeSharedValue({ width: 0, height: 0, maxContentHeight: 0, landscape: false });
obj[2] = createFakeSharedValue.createFakeSharedValue(QuestDockMode.COLLAPSED);
obj[3] = require("module_0");
const context = importAllResult.createContext(obj);
const memoResult = importAllResult.memo(function QuestDockGestureContextProviderInner(children) {
  let obj = sharedValue3;
  const size = sharedValue3.useMemo(sharedValue(sharedValue2[6]).getWindowDimensions, []);
  obj1 = sharedValue(sharedValue2[7]);
  obj = { width: size.width, height: size.height, landscape: size.width > size.height, maxContentHeight: size.height };
  sharedValue = obj1.useSharedValue(obj);
  const youBarHorizontalMargin = sharedValue(sharedValue2[8]).useYouBarHorizontalMargin();
  const obj4 = sharedValue(sharedValue2[8]);
  const tmp = sharedValue;
  const tmp2 = sharedValue2;
  obj = { width: null, height: null, x: 0, y: -8, prevDeltaY: 0 };
  const obj5 = sharedValue(sharedValue2[7]);
  obj[0] = sharedValue(sharedValue2[9]).getQuestDockCollapsedWidth(size.width, youBarHorizontalMargin, youBarHorizontalMargin);
  obj[1] = closure_6;
  const sharedValue1 = obj5.useSharedValue(obj);
  const obj7 = sharedValue(sharedValue2[9]);
  const obj8 = sharedValue(sharedValue2[7]);
  sharedValue2 = obj8.useSharedValue(sharedValue(sharedValue2[9]).isSoftDismissed(obj.questDockSoftDismissedAt) ? tmp6.SOFT_DISMISSED : tmp6.COLLAPSED);
  const obj9 = sharedValue(sharedValue2[9]);
  sharedValue3 = tmp(tmp2[7]).useSharedValue(closure_7);
  const items = [sharedValue];
  const effect = obj.useEffect(() => sharedValue1(sharedValue2[10])((arg0) => {
    ({ width, height } = arg0);
    const result = closure_0.set({ width, height, landscape: width > height, maxContentHeight: height });
  }), items);
  const items1 = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  obj1 = { value: obj.useMemo(() => ({ windowDimensions: sharedValue, questDockWrapperSpecs: sharedValue1, activeQuestDockMode: sharedValue2, minExpandedContentHeight: sharedValue3 }), items1), children: children.children };
  return <context.Provider value={obj.useMemo(() => ({ windowDimensions: sharedValue, questDockWrapperSpecs: sharedValue1, activeQuestDockMode: sharedValue2, minExpandedContentHeight: sharedValue3 }), items1)}>{arg0.children}</context.Provider>;
});
let result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockGestureContext.tsx");

export const QuestDockGestureContext = context;
export const QuestDockGestureContextProvider = memoResult;