// === Module 15096: QuestDockGestureContext ===

// Module 15096 (QuestDockGestureContext)
import subscribeToWindowDimensionsDefault from "subscribeToWindowDimensions" /* 12034 */;
import noop from "module_19" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 15093 */;

const require = fn;
const QuestDockMode = fn(5444).QuestDockMode;
const QuestDockConstants = fn(15095);
({ QUEST_DOCK_COLLAPSED_HEIGHT: metroRequire, QUEST_DOCK_EXPANDED_HEIGHT: closure_7 } = QuestDockConstants);
const jsx = fn(21).jsx;
let obj = { questDockWrapperSpecs: null, windowDimensions: null, activeQuestDockMode: null, minExpandedContentHeight: null };
let ReanimatedHelperTypes = fn(7074);
obj.questDockWrapperSpecs = ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0, x: 0, y: 0, prevDeltaY: 0 });
ReanimatedHelperTypes = fn(7074);
obj.windowDimensions = ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0, maxContentHeight: 0, landscape: false });
ReanimatedHelperTypes = fn(7074);
obj.activeQuestDockMode = ReanimatedHelperTypes.createFakeSharedValue(QuestDockMode.COLLAPSED);
ReanimatedHelperTypes = fn(7074);
obj.minExpandedContentHeight = ReanimatedHelperTypes.createFakeSharedValue(0);
const context = noop.createContext(obj);
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockGestureContext.tsx");

export const QuestDockGestureContext = context;
export const QuestDockGestureContextProvider = noop.memo(function QuestDockGestureContextProviderInner(children) {
  let obj = sharedValue3;
  let size = sharedValue3.useMemo(sharedValue(sharedValue2[6]).getWindowDimensions, []);
  size = { width: size.width, height: size.height, landscape: size.width > size.height, maxContentHeight: size.height };
  sharedValue = sharedValue(sharedValue2[7]).useSharedValue(size);
  const obj2 = sharedValue(sharedValue2[7]);
  const tmp = sharedValue;
  const tmp2 = sharedValue2;
  const youBarHorizontalMargin = sharedValue(sharedValue2[8]).useYouBarHorizontalMargin();
  const obj4 = sharedValue(sharedValue2[8]);
  const size1 = { width: null, height: null, x: 0, y: -8, prevDeltaY: 0 };
  const obj5 = sharedValue(sharedValue2[7]);
  size1.width = sharedValue(sharedValue2[9]).getQuestDockCollapsedWidth(size.width, youBarHorizontalMargin, youBarHorizontalMargin);
  size1.height = height;
  const sharedValue1 = obj5.useSharedValue(size1);
  const obj7 = sharedValue(sharedValue2[9]);
  const obj8 = sharedValue(sharedValue2[7]);
  sharedValue2 = obj8.useSharedValue(sharedValue(sharedValue2[9]).isSoftDismissed(QuestDockStore.questDockSoftDismissedAt) ? QuestDockMode.SOFT_DISMISSED : QuestDockMode.COLLAPSED);
  const obj9 = sharedValue(sharedValue2[9]);
  sharedValue3 = tmp(tmp2[7]).useSharedValue(closure_7);
  const items = [sharedValue];
  const effect = obj.useEffect(() => subscribeToWindowDimensionsDefault((arg0) => {
    ({ width, height } = arg0);
    const size = { width, height, landscape: width > height, maxContentHeight: height };
    const result = sharedValue.set(size);
  }), items);
  const items1 = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  obj = { value: obj.useMemo(() => ({ windowDimensions: sharedValue, questDockWrapperSpecs: sharedValue1, activeQuestDockMode: sharedValue2, minExpandedContentHeight: sharedValue3 }), items1), children: children.children };
  return <context.Provider value={obj.useMemo(() => ({ windowDimensions: sharedValue, questDockWrapperSpecs: sharedValue1, activeQuestDockMode: sharedValue2, minExpandedContentHeight: sharedValue3 }), items1)}>{children.children}</context.Provider>;
});