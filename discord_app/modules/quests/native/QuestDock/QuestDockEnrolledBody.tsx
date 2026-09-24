// === Module 15534: QuestDockEnrolledBody ===

// Module 15534 (QuestDockEnrolledBody)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import QuestTypes from "QuestTypes" /* 5752 */;
import QuestBottomSheet from "QuestBottomSheet" /* 15456 */;
import QuestBottomSheetHeaderDefault from "QuestBottomSheetHeader" /* 15457 */;
import QuestBottomSheetFooterDefault from "QuestBottomSheetFooter" /* 15458 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import QuestStore from "QuestStore" /* 8026 */;
import QuestDockStore from "QuestDockStore" /* 15429 */;

require = fn;
function EnrolledBodyWatchTask(quest) {
  quest = quest.quest;
  const tmp = closure_15();
  const context = hasWatchVideoOnMobileTasks.useContext(quest(questDockWrapperSpecs[10]).QuestDockExternalCoordinationContext);
  const setRestingQuestDockMode = context.setRestingQuestDockMode;
  questDockWrapperSpecs = hasWatchVideoOnMobileTasks.useContext(quest(questDockWrapperSpecs[11]).QuestDockGestureContext).questDockWrapperSpecs;
  const tmp7 = setRestingQuestDockMode(questDockWrapperSpecs[12])(context.restingQuestDockMode);
  closure_3 = tmp7;
  hasWatchVideoOnMobileTasks = quest(questDockWrapperSpecs[13]).useHasWatchVideoOnMobileTasks(quest.config);
  const items = [tmp7, questDockWrapperSpecs, quest.id, setRestingQuestDockMode, hasWatchVideoOnMobileTasks, ];
  let userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  items[5] = completedAt;
  const effect = hasWatchVideoOnMobileTasks.useEffect(() => {
    closure_0 = async function _maybeOpenVideoQuestModal() {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let tmp12 = c2.get().prevDeltaY < 0;
              if (tmp12) {
                tmp12 = closure_1_3 === constants.RESET_TO_PREVIOUS;
              }
              if (tmp12) {
                tmp12 = QuestDockStore.prevRestingQuestDockMode === constants.EXPANDED;
              }
              if (tmp12) {
                const isQuestAccessSuspended = QuestStore.isQuestAccessSuspended;
                let tmp16 = !isQuestAccessSuspended;
                if (isQuestAccessSuspended) {
                  const userStatus = tmp2.userStatus;
                  let completedAt;
                  if (userStatus != null) {
                    completedAt = userStatus.completedAt;
                  }
                  tmp16 = null != completedAt;
                }
                tmp12 = tmp16;
              }
              if (tmp12) {
                const obj4 = { questId: tmp2.id, sourceQuestContent: quest(5752).QuestContent.QUEST_BAR_MOBILE };
                v1 = 1;
                c2 = 1;
                const obj5 = { value: setRestingQuestDockMode(15460)(obj4), done: false };
                return obj5;
              } else {
                c2 = 3;
              }
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 !== 2) {
            v1(constants.COLLAPSED);
          }
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } catch (tmp25) {
          c2 = tmp;
          throw tmp25;
        }
      }
    };
    if (hasWatchVideoOnMobileTasks) {
      (function maybeOpenVideoQuestModal() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
  }, items);
  let obj2 = { children: null };
  let obj3 = { style: tmp.headerWrapper, children: null };
  let obj4 = { quest, step: null, withActionSheet: true, location: null };
  let obj = quest(questDockWrapperSpecs[13]);
  obj4.step = quest(questDockWrapperSpecs[17]).QuestBottomSheetStep.TASK_STATUS;
  obj4.location = constants.QUESTS_BAR_MOBILE;
  obj3.children = closure_12(setRestingQuestDockMode(questDockWrapperSpecs[16]), obj4);
  const items1 = [closure_12(View, obj3), , ];
  let obj5 = { style: tmp.contentWrapper, children: null };
  const tmp6Result = setRestingQuestDockMode(questDockWrapperSpecs[16]);
  obj5.children = closure_12(quest(questDockWrapperSpecs[17]).QuestBottomSheetContent, { quest, location: constants.QUESTS_BAR_MOBILE, step: quest(questDockWrapperSpecs[17]).QuestBottomSheetStep.TASK_STATUS, sourceQuestContent: quest(questDockWrapperSpecs[15]).QuestContent.QUEST_BAR_MOBILE });
  items1[1] = closure_12(View, obj5);
  const obj7 = { style: tmp.footerWrapper, children: null };
  const obj8 = { quest, step: null, style: null, withSafeArea: false, sourceQuestContent: null };
  const obj6 = { quest, location: constants.QUESTS_BAR_MOBILE, step: quest(questDockWrapperSpecs[17]).QuestBottomSheetStep.TASK_STATUS, sourceQuestContent: quest(questDockWrapperSpecs[15]).QuestContent.QUEST_BAR_MOBILE };
  obj8.step = quest(questDockWrapperSpecs[17]).QuestBottomSheetStep.TASK_STATUS;
  obj8.style = tmp.footer;
  obj8.sourceQuestContent = quest(questDockWrapperSpecs[15]).QuestContent.QUEST_BAR_MOBILE;
  obj7.children = closure_12(setRestingQuestDockMode(questDockWrapperSpecs[18]), obj8);
  items1[2] = closure_12(View, obj7);
  obj2.children = items1;
  return closure_14(closure_13, obj2);
}
function EnrolledBodyPlayStreamTask(quest) {
  quest = quest.quest;
  const tmp = closure_15();
  const obj = QuestBottomSheet;
  const enrolledQuestContentProps = obj.useEnrolledQuestContentProps({ quest, location: constants.QUESTS_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
  ({ step, defibrillator, stepActions } = enrolledQuestContentProps);
  const obj3 = { children: null };
  const obj4 = { style: tmp.headerWrapper, children: closure_1_12(QuestBottomSheetHeaderDefault, { quest, step, withActionSheet: true, location: constants.QUESTS_BAR_MOBILE }) };
  ({ handleTaskSelect, showMicrophone } = enrolledQuestContentProps);
  const items = [closure_1_12(View, obj4), , ];
  const obj6 = { style: tmp.contentWrapper, children: null };
  const obj2 = { quest, location: constants.QUESTS_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
  const obj5 = { quest, step, withActionSheet: true, location: constants.QUESTS_BAR_MOBILE };
  obj6.children = closure_1_12(QuestBottomSheet.QuestBottomSheetContent, { defibrillator, quest, handleTaskSelect, location: constants.QUESTS_BAR_MOBILE, showMicrophone, step, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
  items[1] = closure_1_12(View, obj6);
  const obj8 = { style: tmp.footerWrapper, children: null };
  const obj9 = { quest, step, isDefibrilating: defibrillator.isActive, onBack: stepActions.onBack, onDefib: defibrillator.start, onConnectConsoleNext: stepActions.onNext, style: tmp.footer, withSafeArea: false, sourceQuestContent: null };
  const obj7 = { defibrillator, quest, handleTaskSelect, location: constants.QUESTS_BAR_MOBILE, showMicrophone, step, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
  obj9.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
  obj8.children = closure_1_12(QuestBottomSheetFooterDefault, obj9);
  items[2] = closure_1_12(View, obj8);
  obj3.children = items;
  return closure_1_14(map1, obj3);
}
const View = fn(17).View;
const QuestConstants = fn(5749);
({ QuestDockMode: closure_8, QuestsExperimentLocations: closure_9 } = QuestConstants);
const QuestDockConstants = fn(15431);
({ QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT: c10, QUEST_DOCK_EXPANDED_PADDING_BOTTOM } = QuestDockConstants);
({ QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, QUEST_DOCK_EXPANDED_ENROLLED_PADDING_TOP } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4829);
let obj = { wrapper: { flexGrow: 0, flexShrink: 0, paddingBottom: QUEST_DOCK_EXPANDED_PADDING_BOTTOM, paddingTop: QUEST_DOCK_EXPANDED_ENROLLED_PADDING_TOP, paddingHorizontal: QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL }, headerWrapper: { marginBottom: nativeDefault.space.PX_16 }, contentWrapper: null, footer: null, footerWrapper: null };
let obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj.contentWrapper = { display: "flex", gap: nativeDefault.space.PX_16, flexGrow: 0, flexShrink: 0 };
let obj4 = { display: "flex", gap: nativeDefault.space.PX_16, flexGrow: 0, flexShrink: 0 };
obj.footer = { marginTop: nativeDefault.space.PX_16 };
obj.footerWrapper = { marginLeft: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, marginRight: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL };
let closure_15 = createStyles.createStyles(obj);
let obj5 = { marginTop: nativeDefault.space.PX_16 };
let obj6 = { marginLeft: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, marginRight: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledBody.tsx");

export default noop.memo(function QuestDockEnrolledBody() {
  const questDockQuest = minExpandedContentHeight(15438).useQuestDockQuest();
  const obj = minExpandedContentHeight(15438);
  minExpandedContentHeight = noop.useContext(minExpandedContentHeight(15432).QuestDockGestureContext).minExpandedContentHeight;
  const items = [minExpandedContentHeight];
  const items1 = [minExpandedContentHeight];
  const callback = noop.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (minExpandedContentHeight.get() !== height) {
      const result = minExpandedContentHeight.set(height);
    }
  }, items);
  const effect = noop.useEffect(() => () => {
    if (minExpandedContentHeight.get() !== closure_2_10) {
      const result = minExpandedContentHeight.set(tmp);
    }
  }, items1);
  const obj2 = { style: null, onLayout: null, children: null };
  const items2 = [closure_15().wrapper, ];
  const tmp2 = closure_15();
  items2[1] = { paddingBottom: Math.max(useSafeAreaInsetsDefault().bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM) };
  obj2.style = items2;
  obj2.onLayout = callback;
  const obj3 = { paddingBottom: Math.max(useSafeAreaInsetsDefault().bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM) };
  if (obj4.hasWatchVideoTasks(questDockQuest)) {
    const obj5 = { quest: questDockQuest };
    let tmp5Result = closure_12(EnrolledBodyWatchTask, obj5);
  } else {
    const obj6 = { quest: questDockQuest };
    tmp5Result = closure_12(EnrolledBodyPlayStreamTask, obj6);
  }
  obj2.children = tmp5Result;
  return closure_12(View, obj2);
});