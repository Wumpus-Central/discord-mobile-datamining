import closure_3 from "QUEST_DOCK_COLLAPSED_HEIGHT";
import importAllResult from "useSafeAreaInsets";
import { View } from "useQuestRewardClaimHandler";
import QuestDockMode from "QuestDockMode";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let QUEST_DOCK_EXPANDED_ENROLLED_PADDING_TOP;
let QUEST_DOCK_EXPANDED_PADDING_BOTTOM;
let QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL;
let c9;
let closure_12;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function EnrolledBodyWatchTask(quest) {
  quest = quest.quest;
  let tmp = callback3();
  const context = hasWatchVideoOnMobileTasks.useContext(quest(questDockWrapperSpecs[9]).QuestDockExternalCoordinationContext);
  const setRestingQuestDockMode = context.setRestingQuestDockMode;
  questDockWrapperSpecs = hasWatchVideoOnMobileTasks.useContext(quest(questDockWrapperSpecs[10]).QuestDockGestureContext).questDockWrapperSpecs;
  const tmp3 = setRestingQuestDockMode(questDockWrapperSpecs[11])(context.restingQuestDockMode);
  let closure_3 = tmp3;
  let obj = quest(questDockWrapperSpecs[12]);
  hasWatchVideoOnMobileTasks = obj.useHasWatchVideoOnMobileTasks(quest.config);
  const items = [tmp3, questDockWrapperSpecs, quest.id, setRestingQuestDockMode, hasWatchVideoOnMobileTasks];
  const effect = hasWatchVideoOnMobileTasks.useEffect(() => {
    function _maybeOpenVideoQuestModal() {
      const self = this;
      const tmp = callback(function*() {
        if (c2 === 2) {
          c2 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (0 === v0) {
              if (arg0 === 1) {
                c2 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                const callback = tmp2;
                let tmp12 = c2.get().prevDeltaY < 0;
                if (tmp12) {
                  tmp12 = outer1_3 === outer2_7.RESET_TO_PREVIOUS;
                }
                if (tmp12) {
                  tmp12 = outer2_6.prevRestingQuestDockMode === outer2_7.EXPANDED;
                }
                if (tmp12) {
                  const obj1 = { questId: null, sourceQuestContent: null };
                  obj1[0] = outer1_0.id;
                  obj1[1] = callback(outer2_2[14]).QuestContent.QUEST_BAR_MOBILE;
                  v0 = 1;
                  c2 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = outer2_1(outer2_2[13])(obj1);
                  return obj2;
                } else {
                  c2 = 3;
                }
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              v0(outer2_7.COLLAPSED);
            }
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } catch (tmp20) {
            c2 = tmp;
            throw tmp20;
          }
        }
      });
      const _maybeOpenVideoQuestModal = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    if (hasWatchVideoOnMobileTasks) {
      (function maybeOpenVideoQuestModal() {
        const self = this;
        const apply = _maybeOpenVideoQuestModal.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
  }, items);
  obj = { children: null };
  obj = { style: tmp.headerWrapper, children: null };
  let obj1 = { quest, step: null, withActionSheet: true, location: null };
  obj1[1] = quest(questDockWrapperSpecs[16]).QuestBottomSheetStep.TASK_STATUS;
  obj1[3] = constants.QUESTS_BAR_MOBILE;
  obj[1] = callback(setRestingQuestDockMode(questDockWrapperSpecs[15]), obj1);
  const items1 = [callback(View, obj), , ];
  let obj2 = { style: tmp.contentWrapper, children: null };
  const obj3 = { quest, location: constants.QUESTS_BAR_MOBILE, step: null, sourceQuestContent: null };
  obj3[2] = quest(questDockWrapperSpecs[16]).QuestBottomSheetStep.TASK_STATUS;
  obj3[3] = quest(questDockWrapperSpecs[14]).QuestContent.QUEST_BAR_MOBILE;
  obj2[1] = callback(quest(questDockWrapperSpecs[16]).QuestBottomSheetContent, obj3);
  items1[1] = callback(View, obj2);
  const obj4 = { style: tmp.footerWrapper, children: null };
  const obj5 = { quest, step: null, style: null, withSafeArea: false, sourceQuestContent: null };
  const tmp6 = setRestingQuestDockMode(questDockWrapperSpecs[15]);
  obj5[1] = quest(questDockWrapperSpecs[16]).QuestBottomSheetStep.TASK_STATUS;
  obj5[2] = tmp.footer;
  obj5[4] = quest(questDockWrapperSpecs[14]).QuestContent.QUEST_BAR_MOBILE;
  obj4[1] = callback(setRestingQuestDockMode(questDockWrapperSpecs[17]), obj5);
  items1[2] = callback(View, obj4);
  obj[0] = items1;
  return callback2(closure_12, obj);
}
function EnrolledBodyPlayStreamTask(quest) {
  let defibrillator;
  let handleTaskSelect;
  let showMicrophone;
  let step;
  let stepActions;
  quest = quest.quest;
  const tmp = callback3();
  let obj = require(14262) /* QuestBottomSheet */;
  obj = { quest, location: constants.QUESTS_BAR_MOBILE, sourceQuestContent: require(5131) /* QuestsVisibleMessagesChangedSource */.QuestContent.QUEST_BAR_MOBILE };
  const enrolledQuestContentProps = obj.useEnrolledQuestContentProps(obj);
  ({ step, defibrillator, stepActions } = enrolledQuestContentProps);
  obj = { children: null };
  ({ handleTaskSelect, showMicrophone } = enrolledQuestContentProps);
  const items = [callback(View, { style: tmp.headerWrapper, children: callback(importDefault(14263), obj2) }), , ];
  const obj3 = { style: tmp.contentWrapper, children: null };
  const obj4 = { defibrillator, quest, handleTaskSelect, location: constants.QUESTS_BAR_MOBILE, showMicrophone, step, sourceQuestContent: null };
  obj4[6] = require(5131) /* QuestsVisibleMessagesChangedSource */.QuestContent.QUEST_BAR_MOBILE;
  obj3[1] = callback(require(14262) /* QuestBottomSheet */.QuestBottomSheetContent, obj4);
  items[1] = callback(View, obj3);
  const obj5 = { style: tmp.footerWrapper, children: null };
  const obj6 = { quest, step, isDefibrilating: defibrillator.isActive, onBack: stepActions.onBack, onDefib: defibrillator.start, onConnectConsoleNext: stepActions.onNext, style: tmp.footer, withSafeArea: false, sourceQuestContent: null };
  const obj1 = { style: tmp.headerWrapper, children: callback(importDefault(14263), obj2) };
  obj6[8] = require(5131) /* QuestsVisibleMessagesChangedSource */.QuestContent.QUEST_BAR_MOBILE;
  obj5[1] = callback(importDefault(14264), obj6);
  items[2] = callback(View, obj5);
  obj[0] = items;
  return callback2(closure_12, obj);
}
let c4 = importAllResult;
({ QuestDockMode: error, QuestsExperimentLocations: metroImportAll } = QuestsExperimentLocations);
({ QUEST_DOCK_EXPANDED_HEIGHT: c9, QUEST_DOCK_EXPANDED_PADDING_BOTTOM } = QUEST_DOCK_COLLAPSED_HEIGHT);
({ QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, QUEST_DOCK_EXPANDED_ENROLLED_PADDING_TOP } = QUEST_DOCK_COLLAPSED_HEIGHT);
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = jsxProd);
let obj = { wrapper: { flexGrow: 0, flexShrink: 0, paddingBottom: QUEST_DOCK_EXPANDED_PADDING_BOTTOM, paddingTop: QUEST_DOCK_EXPANDED_ENROLLED_PADDING_TOP, paddingHorizontal: QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL }, headerWrapper: null, contentWrapper: null, footer: null, footerWrapper: null };
obj = { marginBottom: require("Themes").space.PX_16 };
obj[1] = obj;
createCacheKey = { display: "flex", gap: require("Themes").space.PX_16, flexGrow: 0, flexShrink: 0 };
obj[2] = createCacheKey;
obj[3] = { marginTop: require("Themes").space.PX_16 };
obj[4] = { marginLeft: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, marginRight: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL };
let closure_14 = createCacheKey.createStyles(obj);
let obj2 = { marginTop: require("Themes").space.PX_16 };
let obj3 = { marginLeft: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, marginRight: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL };
const memoResult = importAllResult.memo(function QuestDockEnrolledBody() {
  let obj = minExpandedContentHeight(14323);
  const questCreative = obj.useQuestCreative();
  minExpandedContentHeight = importAllResult.useContext(minExpandedContentHeight(14241).QuestDockGestureContext).minExpandedContentHeight;
  const items = [minExpandedContentHeight];
  const items1 = [minExpandedContentHeight];
  const callback = importAllResult.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (minExpandedContentHeight.get() !== height) {
      const result = minExpandedContentHeight.set(height);
    }
  }, items);
  const effect = importAllResult.useEffect(() => () => {
    if (closure_0.get() !== outer1_9) {
      const result = closure_0.set(tmp);
    }
  }, items1);
  obj = { style: null, onLayout: null, children: null };
  const items2 = [callback3().wrapper, ];
  obj = { paddingBottom: Math.max(importDefault(1581)().bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM) };
  items2[1] = obj;
  obj[0] = items2;
  obj[1] = callback;
  const tmp2 = callback3();
  const tmp6 = View;
  if (obj4.hasWatchVideoTasks(questCreative)) {
    const obj1 = { quest: null };
    obj1[0] = questCreative;
    let tmp5Result = tmp5(EnrolledBodyWatchTask, obj1);
  } else {
    const obj2 = { quest: null };
    obj2[0] = questCreative;
    tmp5Result = tmp5(EnrolledBodyPlayStreamTask, obj2);
  }
  obj[2] = tmp5Result;
  return closure_11(tmp6, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledBody.tsx");

export default memoResult;