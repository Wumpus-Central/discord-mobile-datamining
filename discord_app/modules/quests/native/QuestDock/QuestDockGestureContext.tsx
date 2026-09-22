// === Module 15371: QuestDockGestureContext ===

// Module 15371 (QuestDockGestureContext)
import subscribeToWindowDimensionsDefault from "subscribeToWindowDimensions" /* 12291 */;
import noop from "module_19" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 15368 */;

const require = fn;
const QuestDockMode = fn(5663).QuestDockMode;
const height = fn(15370).QUEST_DOCK_COLLAPSED_HEIGHT;
const jsx = fn(21).jsx;
const obj = { questDockWrapperSpecs: null, windowDimensions: null, activeQuestDockMode: null, minExpandedContentHeight: null };
let ReanimatedHelperTypes = fn(7321);
obj.questDockWrapperSpecs = ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0, x: 0, y: 0, prevDeltaY: 0 });
ReanimatedHelperTypes = fn(7321);
obj.windowDimensions = ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0, maxContentHeight: 0, landscape: false });
ReanimatedHelperTypes = fn(7321);
obj.activeQuestDockMode = ReanimatedHelperTypes.createFakeSharedValue(QuestDockMode.COLLAPSED);
ReanimatedHelperTypes = fn(7321);
obj.minExpandedContentHeight = ReanimatedHelperTypes.createFakeSharedValue(0);
const context = noop.createContext(obj);
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockGestureContext.tsx");

export const QuestDockGestureContext = context;
export const QuestDockGestureContextProvider = noop.memo(function QuestDockGestureContextProviderInner(children) {
  let size = sharedValue3.useMemo(sharedValue(sharedValue2[6]).getWindowDimensions, []);
  const size1 = { width: size.width, height: size.height, landscape: size.width > size.height, maxContentHeight: size.height };
  sharedValue = sharedValue(sharedValue2[7]).useSharedValue(size1);
  const obj2 = sharedValue(sharedValue2[7]);
  const tmp = sharedValue;
  const tmp2 = sharedValue2;
  const youBarHorizontalMargin = sharedValue(sharedValue2[8]).useYouBarHorizontalMargin();
  const obj4 = sharedValue(sharedValue2[8]);
  const size2 = { width: null, height: null, x: 0, y: -8, prevDeltaY: 0 };
  const obj5 = sharedValue(sharedValue2[7]);
  size2.width = sharedValue(sharedValue2[9]).getQuestDockCollapsedWidth(size.width, youBarHorizontalMargin, youBarHorizontalMargin);
  size2.height = height;
  const sharedValue1 = obj5.useSharedValue(size2);
  const obj7 = sharedValue(sharedValue2[9]);
  const obj8 = sharedValue(sharedValue2[7]);
  sharedValue2 = obj8.useSharedValue(sharedValue(sharedValue2[9]).isSoftDismissed(QuestDockStore.questDockSoftDismissedAt) ? QuestDockMode.SOFT_DISMISSED : QuestDockMode.COLLAPSED);
  const obj9 = sharedValue(sharedValue2[9]);
  sharedValue3 = tmp(tmp2[7]).useSharedValue(children.expandedHeight);
  const items = [sharedValue];
  const effect = obj.useEffect(() => subscribeToWindowDimensionsDefault((arg0) => {
    ({ width, height } = arg0);
    const size = { width, height, landscape: width > height, maxContentHeight: height };
    const result = sharedValue.set(size);
  }), items);
  const items1 = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  const tmpResult = tmp(tmp2[7]);
  return <context.Provider value={sharedValue3.useMemo(() => ({ windowDimensions: sharedValue, questDockWrapperSpecs: sharedValue1, activeQuestDockMode: sharedValue2, minExpandedContentHeight: sharedValue3 }), items1)}>{children.children}</context.Provider>;
});