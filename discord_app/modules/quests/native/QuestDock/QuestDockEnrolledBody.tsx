// === Module 15198: QuestDockEnrolledBody ===

// Module 15198 (QuestDockEnrolledBody)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import QuestTypes from "QuestTypes" /* 5447 */;
import QuestBottomSheet from "QuestBottomSheet" /* 15120 */;
import QuestBottomSheetHeaderDefault from "QuestBottomSheetHeader" /* 15121 */;
import QuestBottomSheetFooterDefault from "QuestBottomSheetFooter" /* 15122 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import QuestStore from "QuestStore" /* 7703 */;
import QuestDockStore from "QuestDockStore" /* 15093 */;

require = fn;
function EnrolledBodyWatchTask(quest) {
  quest = quest.quest;
  const tmp = closure_15();
  const context = hasWatchVideoOnMobileTasks.useContext(quest(questDockWrapperSpecs[10]).QuestDockExternalCoordinationContext);
  const setRestingQuestDockMode = context.setRestingQuestDockMode;
  questDockWrapperSpecs = hasWatchVideoOnMobileTasks.useContext(quest(questDockWrapperSpecs[11]).QuestDockGestureContext).questDockWrapperSpecs;
  const tmp7 = setRestingQuestDockMode(questDockWrapperSpecs[12])(context.restingQuestDockMode);
  closure_3 = tmp7;
  let obj = quest(questDockWrapperSpecs[13]);
  hasWatchVideoOnMobileTasks = obj.useHasWatchVideoOnMobileTasks(quest.config);
  const items = [tmp7, questDockWrapperSpecs, quest.id, setRestingQuestDockMode, hasWatchVideoOnMobileTasks, ];
  let userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  items[5] = completedAt;
  const effect = hasWatchVideoOnMobileTasks.useEffect(() => {
    closure_0 = async function _maybeOpenVideoQuestModal(arg0, value) {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
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
                const obj1 = { questId: tmp2.id, sourceQuestContent: quest(5447).QuestContent.QUEST_BAR_MOBILE };
                v1 = 1;
                c2 = 1;
                const obj2 = { value: setRestingQuestDockMode(15124)(obj1), done: false };
                return obj2;
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
          obj = { value, done: true };
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
  obj = { children: null };
  obj = { style: tmp.headerWrapper, children: null };
  let obj1 = { quest, step: null, withActionSheet: true, location: null };
  let tmp6Result = tmp6(tmp4[16]);
  obj1.step = quest(questDockWrapperSpecs[17]).QuestBottomSheetStep.TASK_STATUS;
  obj1.location = constants.QUESTS_BAR_MOBILE;
  obj.children = closure_12(tmp6Result, obj1);
  const items1 = [closure_12(View, obj), , ];
  let obj2 = { style: tmp.contentWrapper, children: closure_12(quest(questDockWrapperSpecs[17]).QuestBottomSheetContent, { quest, location: constants.QUESTS_BAR_MOBILE, step: quest(questDockWrapperSpecs[17]).QuestBottomSheetStep.TASK_STATUS, sourceQuestContent: quest(questDockWrapperSpecs[15]).QuestContent.QUEST_BAR_MOBILE }) };
  items1[1] = closure_12(View, obj2);
  const obj4 = { style: tmp.footerWrapper, children: null };
  const obj5 = { quest, step: null, style: null, withSafeArea: false, sourceQuestContent: null };
  tmp6Result = tmp6(tmp4[18]);
  obj5.step = quest(questDockWrapperSpecs[17]).QuestBottomSheetStep.TASK_STATUS;
  obj5.style = tmp.footer;
  obj5.sourceQuestContent = quest(questDockWrapperSpecs[15]).QuestContent.QUEST_BAR_MOBILE;
  obj4.children = closure_12(tmp6Result, obj5);
  items1[2] = closure_12(View, obj4);
  obj.children = items1;
  return closure_14(closure_13, obj);
}
function EnrolledBodyPlayStreamTask(quest) {
  quest = quest.quest;
  const tmp = closure_15();
  let obj = { quest, location: constants.QUESTS_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
  const enrolledQuestContentProps = obj.useEnrolledQuestContentProps(obj);
  ({ step, defibrillator, stepActions } = enrolledQuestContentProps);
  obj = { children: null };
  const obj1 = { style: tmp.headerWrapper, children: closure_1_12(QuestBottomSheetHeaderDefault, { quest, step, withActionSheet: true, location: constants.QUESTS_BAR_MOBILE }) };
  ({ handleTaskSelect, showMicrophone } = enrolledQuestContentProps);
  const items = [closure_1_12(View, obj1), , ];
  const obj3 = { style: tmp.contentWrapper, children: closure_1_12(QuestBottomSheet.QuestBottomSheetContent, { defibrillator, quest, handleTaskSelect, location: constants.QUESTS_BAR_MOBILE, showMicrophone, step, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE }) };
  items[1] = closure_1_12(View, obj3);
  const obj5 = { style: tmp.footerWrapper, children: null };
  const obj6 = { quest, step, isDefibrilating: defibrillator.isActive, onBack: stepActions.onBack, onDefib: defibrillator.start, onConnectConsoleNext: stepActions.onNext, style: tmp.footer, withSafeArea: false, sourceQuestContent: null };
  const obj2 = { quest, step, withActionSheet: true, location: constants.QUESTS_BAR_MOBILE };
  const obj4 = { defibrillator, quest, handleTaskSelect, location: constants.QUESTS_BAR_MOBILE, showMicrophone, step, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
  obj6.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
  obj5.children = closure_1_12(QuestBottomSheetFooterDefault, obj6);
  items[2] = closure_1_12(View, obj5);
  obj.children = items;
  return closure_1_14(map1, obj);
}
const View = fn(17).View;
const QuestConstants = fn(5444);
({ QuestDockMode: closure_8, QuestsExperimentLocations: closure_9 } = QuestConstants);
const QuestDockConstants = fn(15095);
({ QUEST_DOCK_EXPANDED_HEIGHT: c10, QUEST_DOCK_EXPANDED_PADDING_BOTTOM } = QuestDockConstants);
({ QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, QUEST_DOCK_EXPANDED_ENROLLED_PADDING_TOP } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
fn(4560);
let obj = { wrapper: { flexGrow: 0, flexShrink: 0, paddingBottom: QUEST_DOCK_EXPANDED_PADDING_BOTTOM, paddingTop: QUEST_DOCK_EXPANDED_ENROLLED_PADDING_TOP, paddingHorizontal: QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL }, headerWrapper: null, contentWrapper: null, footer: null, footerWrapper: null };
obj = { marginBottom: nativeDefault.space.PX_16 };
obj.headerWrapper = obj;
const createStyles = { display: "flex", gap: nativeDefault.space.PX_16, flexGrow: 0, flexShrink: 0 };
obj.contentWrapper = createStyles;
obj.footer = { marginTop: nativeDefault.space.PX_16 };
obj.footerWrapper = { marginLeft: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, marginRight: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL };
let closure_15 = createStyles.createStyles(obj);
let obj2 = { marginTop: nativeDefault.space.PX_16 };
let obj3 = { marginLeft: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, marginRight: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledBody.tsx");

export default noop.memo(function QuestDockEnrolledBody() {
  let obj = minExpandedContentHeight(15102);
  const questDockQuest = obj.useQuestDockQuest();
  minExpandedContentHeight = noop.useContext(minExpandedContentHeight(15096).QuestDockGestureContext).minExpandedContentHeight;
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
  obj = { style: null, onLayout: null, children: null };
  const items2 = [closure_15().wrapper, ];
  obj = { paddingBottom: Math.max(useSafeAreaInsetsDefault().bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM) };
  items2[1] = obj;
  obj.style = items2;
  obj.onLayout = callback;
  const tmp2 = closure_15();
  const tmp6 = View;
  if (obj4.hasWatchVideoTasks(questDockQuest)) {
    const obj1 = { quest: questDockQuest };
    let tmp5Result = tmp5(EnrolledBodyWatchTask, obj1);
  } else {
    const obj2 = { quest: questDockQuest };
    tmp5Result = tmp5(EnrolledBodyPlayStreamTask, obj2);
  }
  obj.children = tmp5Result;
  return closure_12(tmp6, obj);
});