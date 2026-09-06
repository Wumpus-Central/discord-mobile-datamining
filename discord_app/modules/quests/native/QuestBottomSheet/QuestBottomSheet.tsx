// === Module 15120: QuestBottomSheet ===

// Module 15120 (QuestBottomSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import QuestTypes from "QuestTypes" /* 5447 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7722 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7724 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7728 */;
import WarningIcon from "WarningIcon" /* 8588 */;
import QuestActionCreators from "QuestActionCreators" /* 11276 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 11483 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11496 */;
import QuestHooks from "QuestHooks" /* 15091 */;
import QuestBottomSheetHeaderDefault from "QuestBottomSheetHeader" /* 15121 */;
import QuestBottomSheetFooterDefault from "QuestBottomSheetFooter" /* 15122 */;
import QuestBottomSheetProgressCard from "QuestBottomSheetProgressCard" /* 15160 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import QuestStore from "QuestStore" /* 7703 */;

require = fn;
function QuestBottomSheet(initialStep) {
  ({ quest, sourceQuestContent } = initialStep);
  let obj = { quest, initialStep: initialStep.initialStep, location: constants.QUEST_HOME_MOBILE, sourceQuestContent };
  const tmp3 = useEnrolledQuestContentProps(obj);
  ({ step, defibrillator, stepActions } = tmp3);
  ({ handleTaskSelect, showMicrophone } = tmp3);
  let obj1 = QuestHooks;
  const hasWatchVideoOnMobileTasks = obj1.useHasWatchVideoOnMobileTasks(quest.config);
  let obj2 = QuestTaskUtils;
  const tmp = closure_14();
  let obj3 = QuestTaskUtils;
  const hasWatchVideoTasksResult = obj2.hasWatchVideoTasks(quest);
  const tmp8 = _slicedToArray(useState(0), 2);
  closure_0 = tmp8[1];
  obj = { value: noop.useMemo(() => ({ isInQuestBottomSheet: true }), []), children: null };
  obj = { header: null, footer: null, startExpanded: true, children: null };
  obj1 = { quest, step, location: constants.QUEST_HOME_MOBILE };
  obj.header = closure_1_10(QuestBottomSheetHeaderDefault, obj1);
  let tmp9Result = null;
  if (!isInGameQuestResult) {
    if (!hasWatchVideoTasksResult) {
      obj2 = {
        quest,
        sourceQuestContent,
        step,
        isDefibrilating: defibrillator.isActive,
        onLayout(nativeEvent) {
              closure_0(nativeEvent.nativeEvent.layout.height);
            },
        onBack: stepActions.onBack,
        onDefib: defibrillator.start,
        onConnectConsoleNext: stepActions.onNext
      };
      tmp9Result = closure_1_10(QuestBottomSheetFooterDefault, obj2);
    } else {
      tmp9Result = null;
    }
  }
  obj.footer = tmp9Result;
  const items = [tmp.contentContainer, ];
  let num = 0;
  if (step !== obj.TASK_SELECT) {
    num = tmp8[0];
  }
  obj3 = { style: items, children: closure_1_10(QuestBottomSheetContent, { defibrillator, quest, handleTaskSelect, location: constants.QUEST_HOME_MOBILE, showMicrophone, sourceQuestContent, step }) };
  items[1] = { paddingBottom: num };
  obj.children = closure_1_10(View, obj3);
  obj.children = closure_1_10(Sheet_BottomSheet.BottomSheet, obj);
  return closure_1_10(context.Provider, obj);
}
function useEnrolledQuestContentProps(quest) {
  quest = quest.quest;
  ({ location: _location, sourceQuestContent: importDefault } = quest);
  let obj = quest(11774);
  dependencyMap = obj.useTrackQuestContentClickedWithImpression();
  let obj1 = quest(11486);
  _slicedToArray = obj1.useQuestImpressionId();
  let obj2 = quest(11483);
  const questTaskDetails = obj2.useQuestTaskDetails(quest);
  const isQuestProgressing = quest(11483).useIsQuestProgressing(quest);
  const obj4 = quest(11483);
  let tmp6 = _slicedToArray(quest(11483).useTaskPlatformScreen(quest, questTaskDetails), 3);
  noop = tmp6[2];
  const obj5 = quest(11483);
  closure_129_0 = quest;
  closure_129_1 = undefined;
  closure_129_2 = undefined;
  closure_129_3 = undefined;
  closure_129_4 = undefined;
  closure_129_5 = undefined;
  closure_129_6 = undefined;
  closure_129_7 = undefined;
  closure_129_8 = undefined;
  closure_129_11 = undefined;
  closure_129_12 = undefined;
  closure_129_13 = undefined;
  closure_129_14 = undefined;
  closure_129_15 = undefined;
  closure_129_9 = function showConsoleSelect() {
    return View(true);
  };
  closure_129_10 = function hideConsoleSelect() {
    return View(false);
  };
  const userStatus = quest.userStatus;
  let completedAt;
  const hasWatchVideoOnMobileTasks = quest(15091).useHasWatchVideoOnMobileTasks(quest.config);
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  let tmpResult = tmp(11483);
  const xboxAndPlaystationAccounts = tmpResult.useConnectedAccounts().xboxAndPlaystationAccounts;
  closure_129_1 = xboxAndPlaystationAccounts;
  let items = [quest, xboxAndPlaystationAccounts];
  const memo = noop.useMemo(() => QuestPlatformUtils.supportedConsoles(quest).filter((item) => {
    closure_0 = item;
    return null != sourceQuestContent.find((type) => type.type === closure_0);
  }), items);
  tmpResult = tmp(11483);
  const questTaskDetails1 = tmpResult.useQuestTaskDetails(quest);
  const obj6 = quest(15091);
  let isQuestProgressing1 = quest(11483).useIsQuestProgressing(quest);
  const tmpResult1 = quest(11483);
  let tmp5Result = tmp5(quest(11483).useTaskPlatformScreen(quest, questTaskDetails1), 3);
  const first = tmp5Result[0];
  closure_129_2 = first;
  closure_129_3 = tmp14;
  closure_129_4 = tmp15;
  let tmp16 = 0 === memo.length;
  if (tmp16) {
    tmp16 = !tmp9;
  }
  if (tmp16) {
    tmp16 = first === tmp(5447).TaskPlatformScreen.CONSOLE;
  }
  if (!tmp16) {
    tmp16 = quest.initialStep === obj.CONSOLE_CONNECT;
  }
  tmp5Result = tmp5(noop.useState(tmp16), 2);
  const first1 = tmp5Result[0];
  closure_129_5 = first1;
  closure_129_6 = tmp20;
  if (!isQuestProgressing1) {
    isQuestProgressing1 = questTaskDetails1.progressSeconds > 0;
  }
  closure_129_7 = isQuestProgressing1;
  const tmpResult2 = quest(11483);
  if (!tmp21) {
    tmp20(true);
  }
  const items1 = [tmp5Result[2]];
  const callback = obj8.useCallback(() => {
    View(false);
    closure_4(null);
  }, items1);
  closure_129_8 = callback;
  const memo1 = obj8.useMemo(() => {
    const items = [{ type: constants.TASK_STATUS, shouldShow: true }];
    return items;
  }, []);
  closure_129_11 = memo1;
  const items2 = [first1, isQuestProgressing1];
  const memo2 = obj8.useMemo(() => {
    obj = { type: obj.CONSOLE_CONNECT, shouldShow, onNext };
    const items = [obj, ];
    obj = { type: obj.TASK_STATUS, shouldShow: true, onBack: null };
    let tmp;
    if (!QuestStore) {
      tmp = constants2;
    }
    obj.onBack = tmp;
    items[1] = obj;
    return items;
  }, items2);
  closure_129_12 = memo2;
  const items3 = [first, first1, isQuestProgressing1, callback];
  const memo3 = obj8.useMemo(() => {
    obj = { type: obj.TASK_SELECT, shouldShow: closure_2 === QuestTypes.TaskPlatformScreen.SELECT };
    const items = [obj, , ];
    obj = { type: obj.CONSOLE_CONNECT, shouldShow: closure_2 === QuestTypes.TaskPlatformScreen.CONSOLE && shouldShow, onBack, onNext };
    let tmp6 = onBack;
    items[1] = obj;
    obj = { type: obj.TASK_STATUS, shouldShow: true, onBack: null };
    let tmp7;
    if (!QuestStore) {
      if (closure_2 === QuestTypes.TaskPlatformScreen.CONSOLE) {
        tmp6 = constants2;
      }
      tmp7 = tmp6;
    }
    obj.onBack = tmp7;
    items[2] = obj;
    return items;
  }, items3);
  closure_129_13 = memo3;
  tmp21 = 0 !== memo.length || null != completedAt || first !== quest(5447).TaskPlatformScreen.CONSOLE || first1;
  const hasWatchVideoOnMobileTasks1 = quest(15091).useHasWatchVideoOnMobileTasks(quest.config);
  closure_129_14 = hasWatchVideoOnMobileTasks1;
  const tmpResult3 = quest(15091);
  const isMobileActivityQuest = quest(15091).useMobileActivityQuest(quest).isMobileActivityQuest;
  closure_129_15 = isMobileActivityQuest;
  const items4 = [tmp5Result[1], memo3, memo1, memo2, hasWatchVideoOnMobileTasks1, isMobileActivityQuest];
  const memo4 = obj8.useMemo(() => {
    let hasItem = 1 === impressionId.length;
    if (hasItem) {
      hasItem = impressionId.includes(constants2.DESKTOP);
    }
    let hasItem1 = 1 === impressionId.length;
    if (hasItem1) {
      hasItem1 = impressionId.includes(constants2.CONSOLE);
    }
    let arr2 = constants;
    if (!hasItem) {
      if (!closure_1_14) {
        if (!QuestBottomSheet) {
          if (hasItem1) {
            arr2 = closure_1_12;
          }
        }
        let found = arr2.find((shouldShow) => shouldShow.shouldShow);
        if (found == null) {
          found = arr2.at(-1);
        }
        return found;
      }
    }
    arr2 = closure_1_11;
  }, items4);
  const items5 = [memo4.type, ];
  let onBack;
  if (memo4 != null) {
    onBack = memo4.onBack;
  }
  obj = { onBack, onNext: null };
  let onNext;
  if (memo4 != null) {
    onNext = memo4.onNext;
  }
  obj.onNext = onNext;
  items5[1] = obj;
  const tmpResult4 = quest(15091);
  closure_130_0 = quest;
  [tmp32, tmp33] = _slicedToArray(items5, 2);
  const tmp5Result1 = _slicedToArray(items5, 2);
  obj = { quest, location: constants.QUEST_HOME_MOBILE };
  const questLogger = quest(7709).getQuestLogger(obj);
  closure_130_1 = questLogger;
  const tmp5Result2 = _slicedToArray(useState([]), 2);
  closure_130_2 = tmp36;
  const tmp5Result3 = _slicedToArray(useState(false), 2);
  closure_130_3 = tmp38;
  const items6 = [quest, questLogger, tmp5Result3[1], tmp5Result2[1]];
  obj1 = {
    errorHints: tmp5Result2[0],
    isActive: tmp5Result3[0],
    start: obj8.useCallback(() => {
      impressionId(true);
      const result = QuestActionCreators.manuallyStartConsoleQuest(quest.id);
      const nextPromise = result.then((errorHints) => dependencyMap(errorHints.errorHints));
      result.then((errorHints) => dependencyMap(errorHints.errorHints)).catch((error) => {
        dependencyMap([]);
        logger.error("Failed to start console quest", error);
        sourceQuestContent(4259);
        const obj = { key: "START_DEFIBRILLATOR_ERROR", content: null, icon: null };
        const intl = quest(1114).intl;
        obj.content = intl.string(quest(1114).t.CKsXk3);
        obj.icon = sourceQuestContent(5597);
        obj.open(obj);
      }).finally(() => impressionId(false));
    }, items6)
  };
  const userStatus2 = quest.userStatus;
  let completedAt1;
  if (userStatus2 != null) {
    completedAt1 = userStatus2.completedAt;
  }
  const tmpResult5 = quest(7709);
  obj2 = {
    quest,
    defibrillator: obj1,
    step: tmp32,
    stepActions: tmp33,
    showMicrophone: null == completedAt1 && !isQuestProgressing && tmp6[0] === quest(5447).TaskPlatformScreen.CONSOLE && !hasWatchVideoOnMobileTasks,
    handleTaskSelect(arg0) {
      if (arg0 === constants2.CONSOLE) {
        let DESELECT_PLATFORM = AnalyticsTypes.QuestContentCTA.SELECT_CONSOLE_PLATFORM;
        let tmp4 = require;
      } else if (arg0 === tmp.DESKTOP) {
        DESELECT_PLATFORM = AnalyticsTypes.QuestContentCTA.SELECT_DESKTOP_PLATFORM;
        tmp4 = require;
      } else {
        DESELECT_PLATFORM = AnalyticsTypes.QuestContentCTA.DESELECT_PLATFORM;
        tmp4 = require;
      }
      let tmp4Result = tmp4(11192);
      if (tmp4Result.shouldMigrateToAdAnalyticsInterface(tmp4(11192).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet")) {
        tmp4Result = tmp4(11193);
        let obj = { type: tmp4(11197).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp4(5451).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: DESELECT_PLATFORM, surfaceId: tmp4(5447).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId };
        tmp4Result.captureAdUserAction(obj);
      } else {
        obj = { questId: quest.id, questContent: tmp4(5447).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: DESELECT_PLATFORM, sourceQuestContent };
        closure_2(obj);
      }
      closure_4(arg0);
    }
  };
  return obj2;
}
class QuestBottomSheetContent {
  constructor(arg0) {
    ({ defibrillator, quest } = global);
    flag = global.showMicrophone;
    if (flag === undefined) {
      flag = false;
    }
    sourceQuestContent = global.sourceQuestContent;
    step = global.step;
    closure_2 = undefined;
    tmp = closure_2;
    obj = quest(closure_2[16]);
    hasWatchVideoOnMobileTasks = obj.useHasWatchVideoOnMobileTasks(quest.config);
    closure_2 = hasWatchVideoOnMobileTasks;
    items = [, , ];
    items[0] = quest;
    items[1] = hasWatchVideoOnMobileTasks;
    items[2] = sourceQuestContent;
    tmp4 = jsxs;
    tmp6 = closure_13;
    tmp7 = step === closure_13.TASK_SELECT;
    memo = closure_4.useMemo(() => {
      if (hasWatchVideoOnMobileTasks) {
        let obj = { quest, sourceQuestContent };
        let tmp5Result = closure_2_10(QuestBottomSheetProgressCard.QuestBottomSheetProgressCardWatchTask, obj);
      } else {
        obj = QuestTaskUtils;
        const tmp8 = QuestBottomSheetProgressCard;
        if (isInGameQuestResult) {
          obj = { quest, sourceQuestContent };
          tmp5Result = closure_2_10(tmp8.QuestBottomSheetProgressCardInGameTask, obj);
        } else {
          const obj1 = { quest, sourceQuestContent };
          tmp5Result = closure_2_10(tmp8.QuestBottomSheetProgressCardPlayStreamTask, obj1);
        }
        isInGameQuestResult = obj.isInGameQuest(quest);
      }
      return tmp5Result;
    }, items);
    tmp5 = Fragment;
    if (tmp7) {
      tmp8 = jsx;
      tmp9 = sourceQuestContent;
      obj = { onTaskSelect: null };
      obj.onTaskSelect = global.handleTaskSelect;
      tmp7 = jsx(sourceQuestContent(tmp[31]), obj);
    }
    items1 = [, , ];
    items1[0] = tmp7;
    tmp10 = step === tmp6.CONSOLE_CONNECT;
    if (tmp10) {
      tmp11 = jsx;
      tmp12 = sourceQuestContent;
      obj1 = { quest: null, step: null, sourceQuestContent: null };
      obj1.quest = quest;
      obj1.step = step;
      obj1.sourceQuestContent = sourceQuestContent;
      tmp10 = jsx(sourceQuestContent(tmp[32]), obj1);
    }
    items1[1] = tmp10;
    tmp4Result = step === tmp6.TASK_STATUS;
    if (tmp4Result) {
      items2 = [, ];
      items2[0] = memo;
      tmp14 = View;
      if (flag) {
        flag = !hasWatchVideoOnMobileTasks;
      }
      if (flag) {
        obj2 = { quest: null, errorHints: null };
        obj2.quest = quest;
        tmp17 = null;
        errorHints = undefined;
        tmp15 = jsx;
        tmp16 = MicrophoneUnit;
        if (defibrillator != null) {
          errorHints = defibrillator.errorHints;
        }
        obj2.errorHints = errorHints;
        flag = tmp15(tmp16, obj2);
      }
      obj3 = { children: null };
      items2[1] = flag;
      obj3.children = items2;
      tmp4Result = tmp4(tmp14, obj3);
    }
    items1[2] = tmp4Result;
    return tmp4(tmp5, { children: items1 });
  }
}
function MicrophoneUnit(arg0) {
  ({ quest, errorHints } = arg0);
  const tmp = closure_14();
  let obj = hooks_QuestHooks;
  let num;
  if (errorHints != null) {
    num = errorHints.length;
  }
  if (num == null) {
    num = 0;
  }
  if (num > 0) {
    if (null != errorHints) {
      const items = [];
      items[HermesBuiltin.arraySpread(errorHints.map((message) => message.message), 0)] = obj.useQuestHowToHelpArticle().message;
      let items3 = items;
    }
    obj = { style: tmp.microphoneUnit, children: null };
    obj = { style: tmp.microphoneUnitHeader, children: null };
    let str = "text-feedback-warning";
    if (tmp4) {
      str = "text-feedback-critical";
    }
    const obj1 = { color: str };
    const items1 = [closure_1_10(WarningIcon.WarningIcon, obj1), ];
    const intl2 = util.intl;
    if (tmp4) {
      const obj2 = { gameTitle: quest.config.messages.gameTitle };
      let formatToPlainStringResult = intl2.formatToPlainString(util.t["28Ql27"], obj2);
    } else {
      formatToPlainStringResult = intl2.string(util.t.YstzGO);
    }
    const obj3 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: formatToPlainStringResult };
    items1[1] = closure_1_10(Text_Text.Text, obj3);
    obj.children = items1;
    const items2 = [closure_1_11(View, obj), items3.map((children, index) => closure_1_10(Text_Text.Text, { variant: "text-sm/normal", children }, index))];
    obj.children = items2;
    return closure_1_11(View, obj);
  }
  const tmp2Result = utils_QuestUtils;
  const intl = util.intl;
  if (isSponsoredPlayQuestResult) {
    let stringResult = intl.string(util.t.bUyEZZ);
  } else {
    const obj4 = { gameTitle: quest.config.messages.gameTitle };
    stringResult = intl.formatToPlainString(util.t.GXqvC1, obj4);
  }
  items3 = [stringResult];
  isSponsoredPlayQuestResult = utils_QuestUtils.isSponsoredPlayQuest(quest);
}
const useState = fn(19).useState;
const View = fn(17).View;
const QuestConstants = fn(5444);
({ QuestsExperimentLocations: closure_8, QuestTaskPlatform: closure_9 } = QuestConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let QuestBottomSheetStep = { TASK_SELECT: "TASK_SELECT", CONSOLE_CONNECT: "CONSOLE_CONNECT", TASK_STATUS: "TASK_STATUS" };
fn(4560);
QuestBottomSheetStep = { contentContainer: { display: "flex", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 }, microphoneUnit: null, microphoneUnitHeader: null };
const createStyles = { display: "flex", gap: nativeDefault.space.PX_8, marginHorizontal: -nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
QuestBottomSheetStep.microphoneUnit = createStyles;
let obj1 = { display: "flex", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
QuestBottomSheetStep.microphoneUnitHeader = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_14 = createStyles.createStyles(QuestBottomSheetStep);
const context = noop.createContext({ isInQuestBottomSheet: false });
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheet.tsx");

export default function QuestBottomSheetConnected(questContentPosition) {
  ({ questId: require, initialStep: importDefault, sourceQuestContent } = questContentPosition);
  let obj = require("initialize");
  const items = [QuestStore];
  const stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuest(require));
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = {
      overrideVisibility: true,
      questOrQuests: stateFromStores,
      questContent: require("QuestTypes").QuestContent.QUEST_BOTTOM_SHEET,
      questContentPosition: questContentPosition.questContentPosition,
      sourceQuestContent,
      children() {
          return closure_2_10(QuestBottomSheet, { quest: stateFromStores, initialStep, sourceQuestContent });
        }
    };
    tmp4 = closure_10(require("QuestContentImpressionTracker").QuestContentImpressionTrackerNative, obj);
  }
  return tmp4;
};
export { QuestBottomSheetStep };
export { useEnrolledQuestContentProps };
export { QuestBottomSheetContent };
export const QuestBottomSheetContext = context;