// discord_app/modules/quests/native/QuestDock/QuestDockEnrolledBody.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import QuestsVisibleMessagesChangedSource from "../../QuestTypes.tsx";
import QuestBottomSheet from "../QuestBottomSheet/QuestBottomSheet.tsx";
import QuestBottomSheetHeaderDefault from "../QuestBottomSheet/QuestBottomSheetHeader.tsx";
import useQuestRewardClaimHandlerDefault from "../QuestBottomSheet/QuestBottomSheetFooter.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../QuestStore.tsx";
import closure_7 from "QuestDockStore.tsx";
import QuestsExperimentLocations from "../../QuestConstants.tsx";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QuestDockConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function EnrolledBodyWatchTask(quest) {
  quest = quest.quest;
  let tmp = callback3();
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
                  tmp12 = closure_1_3 === closure_2_8.RESET_TO_PREVIOUS;
                }
                if (tmp12) {
                  tmp12 = closure_2_7.prevRestingQuestDockMode === closure_2_8.EXPANDED;
                }
                if (tmp12) {
                  const isQuestAccessSuspended = closure_2_6.isQuestAccessSuspended;
                  let tmp16 = !isQuestAccessSuspended;
                  if (isQuestAccessSuspended) {
                    const userStatus = closure_1_0.userStatus;
                    let completedAt;
                    if (userStatus != null) {
                      completedAt = userStatus.completedAt;
                    }
                    tmp16 = null != completedAt;
                  }
                  tmp12 = tmp16;
                }
                if (tmp12) {
                  obj1 = { questId: null, sourceQuestContent: null };
                  obj1[0] = closure_1_0.id;
                  obj1[1] = callback(closure_2_2[15]).QuestContent.QUEST_BAR_MOBILE;
                  v0 = 1;
                  c2 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = closure_2_1(closure_2_2[14])(obj1);
                  return obj2;
                } else {
                  c2 = 3;
                }
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              v0(closure_2_8.COLLAPSED);
            }
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } catch (tmp25) {
            c2 = tmp;
            throw tmp25;
          }
        }
      });
      closure_0 = tmp;
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
  obj1 = { quest, step: null, withActionSheet: true, location: null };
  let tmp6Result = tmp6(tmp4[16]);
  obj1[1] = quest(questDockWrapperSpecs[17]).QuestBottomSheetStep.TASK_STATUS;
  obj1[3] = constants.QUESTS_BAR_MOBILE;
  obj[1] = callback(tmp6Result, obj1);
  const items1 = [callback(View, obj), , ];
  let obj2 = { style: tmp.contentWrapper, children: callback(quest(questDockWrapperSpecs[17]).QuestBottomSheetContent, { quest, location: constants.QUESTS_BAR_MOBILE, step: quest(questDockWrapperSpecs[17]).QuestBottomSheetStep.TASK_STATUS, sourceQuestContent: quest(questDockWrapperSpecs[15]).QuestContent.QUEST_BAR_MOBILE }) };
  items1[1] = callback(View, obj2);
  const obj4 = { style: tmp.footerWrapper, children: null };
  const obj5 = { quest, step: null, style: null, withSafeArea: false, sourceQuestContent: null };
  tmp6Result = tmp6(tmp4[18]);
  obj5[1] = quest(questDockWrapperSpecs[17]).QuestBottomSheetStep.TASK_STATUS;
  obj5[2] = tmp.footer;
  obj5[4] = quest(questDockWrapperSpecs[15]).QuestContent.QUEST_BAR_MOBILE;
  obj4[1] = callback(tmp6Result, obj5);
  items1[2] = callback(View, obj4);
  obj[0] = items1;
  return callback2(closure_13, obj);
}
function EnrolledBodyPlayStreamTask(quest) {
  quest = quest.quest;
  const tmp = callback3();
  let obj = QuestBottomSheet;
  obj = { quest, location: constants.QUESTS_BAR_MOBILE, sourceQuestContent: QuestsVisibleMessagesChangedSource.QuestContent.QUEST_BAR_MOBILE };
  const enrolledQuestContentProps = obj.useEnrolledQuestContentProps(obj);
  ({ step, defibrillator, stepActions } = enrolledQuestContentProps);
  obj = { children: null };
  ({ handleTaskSelect, showMicrophone } = enrolledQuestContentProps);
  const items = [callback(View, { style: tmp.headerWrapper, children: callback(QuestBottomSheetHeaderDefault, obj2) }), , ];
  const obj3 = { style: tmp.contentWrapper, children: null };
  obj1 = { style: tmp.headerWrapper, children: callback(QuestBottomSheetHeaderDefault, obj2) };
  obj3[1] = callback(QuestBottomSheet.QuestBottomSheetContent, { defibrillator, quest, handleTaskSelect, location: constants.QUESTS_BAR_MOBILE, showMicrophone, step, sourceQuestContent: QuestsVisibleMessagesChangedSource.QuestContent.QUEST_BAR_MOBILE });
  items[1] = callback(View, obj3);
  const obj5 = { style: tmp.footerWrapper, children: null };
  const obj6 = { quest, step, isDefibrilating: defibrillator.isActive, onBack: stepActions.onBack, onDefib: defibrillator.start, onConnectConsoleNext: stepActions.onNext, style: tmp.footer, withSafeArea: false, sourceQuestContent: null };
  const obj4 = { defibrillator, quest, handleTaskSelect, location: constants.QUESTS_BAR_MOBILE, showMicrophone, step, sourceQuestContent: QuestsVisibleMessagesChangedSource.QuestContent.QUEST_BAR_MOBILE };
  obj6[8] = QuestsVisibleMessagesChangedSource.QuestContent.QUEST_BAR_MOBILE;
  obj5[1] = callback(useQuestRewardClaimHandlerDefault, obj6);
  items[2] = callback(View, obj5);
  obj[0] = items;
  return callback2(closure_13, obj);
}
let c4 = importAllResult;
({ QuestDockMode: closure_8, QuestsExperimentLocations: c9 } = QuestsExperimentLocations);
({ QUEST_DOCK_EXPANDED_HEIGHT: c10, QUEST_DOCK_EXPANDED_PADDING_BOTTOM } = QUEST_DOCK_COLLAPSED_HEIGHT);
({ QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, QUEST_DOCK_EXPANDED_ENROLLED_PADDING_TOP } = QUEST_DOCK_COLLAPSED_HEIGHT);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
let obj = { wrapper: { flexGrow: 0, flexShrink: 0, paddingBottom: QUEST_DOCK_EXPANDED_PADDING_BOTTOM, paddingTop: QUEST_DOCK_EXPANDED_ENROLLED_PADDING_TOP, paddingHorizontal: QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL }, headerWrapper: null, contentWrapper: null, footer: null, footerWrapper: null };
obj = { marginBottom: ThemesDefault.space.PX_16 };
obj[1] = obj;
createCacheKey = { display: "flex", gap: ThemesDefault.space.PX_16, flexGrow: 0, flexShrink: 0 };
obj[2] = createCacheKey;
obj[3] = { marginTop: ThemesDefault.space.PX_16 };
obj[4] = { marginLeft: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, marginRight: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL };
let closure_15 = createCacheKey.createStyles(obj);
let obj2 = { marginTop: ThemesDefault.space.PX_16 };
let obj3 = { marginLeft: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, marginRight: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL };
const memoResult = importAllResult.memo(function QuestDockEnrolledBody() {
  let obj = minExpandedContentHeight(14667);
  const questCreative = obj.useQuestCreative();
  minExpandedContentHeight = importAllResult.useContext(minExpandedContentHeight(14646).QuestDockGestureContext).minExpandedContentHeight;
  const items = [minExpandedContentHeight];
  const items1 = [minExpandedContentHeight];
  const callback = importAllResult.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (minExpandedContentHeight.get() !== height) {
      const result = minExpandedContentHeight.set(height);
    }
  }, items);
  const effect = importAllResult.useEffect(() => () => {
    if (closure_0.get() !== closure_1_10) {
      const result = closure_0.set(tmp);
    }
  }, items1);
  obj = { style: null, onLayout: null, children: null };
  const items2 = [callback3().wrapper, ];
  obj = { paddingBottom: Math.max(useSafeAreaInsetsDefault().bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM) };
  items2[1] = obj;
  obj[0] = items2;
  obj[1] = callback;
  const tmp2 = callback3();
  const tmp6 = View;
  if (obj4.hasWatchVideoTasks(questCreative)) {
    obj1 = { quest: null };
    obj1[0] = questCreative;
    let tmp5Result = tmp5(EnrolledBodyWatchTask, obj1);
  } else {
    const obj2 = { quest: null };
    obj2[0] = questCreative;
    tmp5Result = tmp5(EnrolledBodyPlayStreamTask, obj2);
  }
  obj[2] = tmp5Result;
  return closure_12(tmp6, obj);
});
let result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledBody.tsx");

export default memoResult;