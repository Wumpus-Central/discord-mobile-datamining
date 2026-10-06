// === Module 14913: QuestDockGestureContext ===

// Module 14913 (QuestDockGestureContext)
import Fragment from "Fragment" /* 21 */;
import QuestConstants from "QuestConstants" /* 5630 */;
import subscribeToWindowDimensionsDefault from "subscribeToWindowDimensions" /* 11662 */;
import QuestDockConstants from "QuestDockConstants" /* 14912 */;
import react from "react" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 14910 */;
import "ReanimatedHelperTypes";
import ReanimatedHelperTypes_mod from "ReanimatedHelperTypes" /* 6578 */;
import size_mod from "module_2" /* 2 */;

let ReanimatedHelperTypes;
const QuestDockMode = QuestConstants.QuestDockMode;
const height = QuestDockConstants.QUEST_DOCK_COLLAPSED_HEIGHT;
const jsx = Fragment.jsx;
const obj = { questDockWrapperSpecs: ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0, x: 0, y: 0, prevDeltaY: 0 }), windowDimensions: ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0, maxContentHeight: 0, landscape: false }), activeQuestDockMode: ReanimatedHelperTypes.createFakeSharedValue(QuestDockMode.COLLAPSED), minExpandedContentHeight: ReanimatedHelperTypes.createFakeSharedValue(0) };
const createContext = react.createContext;
ReanimatedHelperTypes = ReanimatedHelperTypes_mod;
const context = createContext(obj);
const memoResult = react.memo(function QuestDockGestureContextProviderInner(children) {
  let obj6;
  let sharedValue;
  let sharedValue2;
  let sharedValue3;
  const expandedHeight = children.expandedHeight;
  size = sharedValue3.useMemo(sharedValue(sharedValue2[6]).getWindowDimensions, []);
  const size1 = { width: size.width, height: size.height, landscape: size.width > size.height, maxContentHeight: size.height };
  const obj2 = sharedValue(sharedValue2[7]);
  const tmp = sharedValue;
  sharedValue = obj2.useSharedValue(size1);
  const obj4 = sharedValue(sharedValue2[8]);
  const youBarHorizontalMargin = obj4.useYouBarHorizontalMargin();
  const size2 = { width: obj6.getQuestDockCollapsedWidth(size.width, youBarHorizontalMargin, youBarHorizontalMargin), height, x: 0, y: -8, prevDeltaY: 0 };
  const useSharedValue = sharedValue(sharedValue2[7]).useSharedValue;
  sharedValue(sharedValue2[7]);
  obj6 = sharedValue(sharedValue2[9]);
  const sharedValue1 = useSharedValue(size2);
  const useSharedValue2 = sharedValue(sharedValue2[7]).useSharedValue;
  sharedValue(sharedValue2[7]);
  const obj7 = sharedValue(sharedValue2[9]);
  const tmp2 = sharedValue2;
  sharedValue2 = useSharedValue2(obj7.isSoftDismissed(QuestDockStore.questDockSoftDismissedAt) ? QuestDockMode.SOFT_DISMISSED : QuestDockMode.COLLAPSED);
  const tmpResult = tmp(tmp2[7]);
  sharedValue3 = tmpResult.useSharedValue(expandedHeight);
  const items = [sharedValue];
  const effect = obj.useEffect(() => subscribeToWindowDimensionsDefault((arg0) => {
    let width;
    ({ width, height } = arg0);
    size = { width, height, landscape: width > height, maxContentHeight: height };
    const result = sharedValue.set(size);
  }), items);
  const items1 = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  return <context.Provider value={sharedValue3.useMemo(() => ({ windowDimensions: sharedValue, questDockWrapperSpecs: sharedValue1, activeQuestDockMode: sharedValue2, minExpandedContentHeight: sharedValue3 }), items1)}>{children.children}</context.Provider>;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockGestureContext.tsx");

export const QuestDockGestureContext = context;
export const QuestDockGestureContextProvider = memoResult;