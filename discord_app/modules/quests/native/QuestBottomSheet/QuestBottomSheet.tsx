// discord_app/modules/quests/native/QuestBottomSheet/QuestBottomSheet.tsx
import ThemesDefault from "Themes" /* 712 */;
import isSponsoredPlayQuest from "isSponsoredPlayQuest" /* 7474 */;
import useQuests from "useQuests" /* 10684 */;
import QuestBottomSheetHeaderDefault from "QuestBottomSheetHeader" /* 14473 */;
import useQuestRewardClaimHandlerDefault from "useQuestRewardClaimHandler" /* 14474 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importDefaultResult from "noop" /* 19 */;
import { useState } from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_7 from "initializeState" /* 7453 */;
import QuestsExperimentLocations from "QuestsExperimentLocations" /* 6716 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import { Background } from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { getApplicationIdsByTaskTypes } from "../../utils/QuestTaskUtils.tsx";
import { useDeliveredDockCreative } from "../QuestHooks.native.tsx";

require = arg1;
function QuestBottomSheet(initialStep) {
  ({ quest, sourceQuestContent } = initialStep);
  let _require;
  obj = { quest, initialStep: initialStep.initialStep, location: constants.QUEST_HOME_MOBILE, sourceQuestContent };
  const tmp3 = useEnrolledQuestContentProps(obj);
  ({ step, defibrillator, stepActions } = tmp3);
  ({ handleTaskSelect, showMicrophone } = tmp3);
  obj1 = _useDeliveredDockCreative;
  const hasWatchVideoOnMobileTasks = obj1.useHasWatchVideoOnMobileTasks(quest.config);
  let obj2 = _getApplicationIdsByTaskTypes;
  const tmp = callback3();
  const tmp2 = constants;
  let obj3 = _getApplicationIdsByTaskTypes;
  const hasWatchVideoTasksResult = obj2.hasWatchVideoTasks(quest);
  const tmp8 = callback(useState(0), 2);
  _require = tmp8[1];
  obj = { value: importDefaultResult.useMemo(() => ({ isInQuestBottomSheet: true }), []), children: null };
  obj = { header: callback2(QuestBottomSheetHeaderDefault, obj1), footer: null, startExpanded: true, children: null };
  obj1 = { quest, step, location: constants.QUEST_HOME_MOBILE };
  let tmp9Result = null;
  if (!isInGameQuestResult) {
    if (!hasWatchVideoTasksResult) {
      obj2 = { quest: null, sourceQuestContent: null, step: null, isDefibrilating: null, onLayout: null, onBack: null, onDefib: null, onConnectConsoleNext: null };
      obj2[0] = quest;
      obj2[1] = sourceQuestContent;
      obj2[2] = step;
      obj2[3] = defibrillator.isActive;
      obj2[4] = function onLayout(nativeEvent) {
        callback(nativeEvent.nativeEvent.layout.height);
      };
      obj2[5] = stepActions.onBack;
      obj2[6] = defibrillator.start;
      obj2[7] = stepActions.onNext;
      tmp9Result = tmp9(useQuestRewardClaimHandlerDefault, obj2);
    } else {
      tmp9Result = null;
    }
  }
  obj[1] = tmp9Result;
  const items = [tmp.contentContainer, ];
  let num = 0;
  if (step !== obj.TASK_SELECT) {
    num = tmp8[0];
  }
  obj3 = { style: items, children: tmp9(QuestBottomSheetContent, obj4) };
  items[1] = { paddingBottom: num };
  obj[3] = callback2(View, obj3);
  obj[1] = callback2(_Background.BottomSheet, obj);
  return callback2(context.Provider, obj);
}
function useEnrolledQuestContentProps(quest) {
  quest = quest.quest;
  ({ location: _location, sourceQuestContent: questLogger } = quest);
  dependencyMap = undefined;
  let callback;
  importDefaultResult = undefined;
  obj = quest(10953);
  dependencyMap = obj.useTrackQuestContentClickedWithImpression();
  obj1 = quest(10687);
  callback = obj1.useQuestImpressionId();
  let obj2 = quest(10684);
  const questTaskDetails = obj2.useQuestTaskDetails(quest);
  const isQuestProgressing = quest(10684).useIsQuestProgressing(quest);
  const obj4 = quest(10684);
  let tmp6 = callback(quest(10684).useTaskPlatformScreen(quest, questTaskDetails), 3);
  importDefaultResult = tmp6[2];
  const obj5 = quest(10684);
  questLogger = undefined;
  dependencyMap = undefined;
  callback = undefined;
  importDefaultResult = undefined;
  let first1;
  closure_6 = undefined;
  let isQuestProgressing1;
  callback = undefined;
  let memo1;
  let memo2;
  let memo3;
  let hasWatchVideoOnMobileTasks1;
  let isMobileActivityQuest;
  function showConsoleSelect() {
    return callback2(true);
  }
  function hideConsoleSelect() {
    return callback2(false);
  }
  const userStatus = quest.userStatus;
  let completedAt;
  const hasWatchVideoOnMobileTasks = quest(14443).useHasWatchVideoOnMobileTasks(quest.config);
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  let tmpResult = tmp(10684);
  const xboxAndPlaystationAccounts = tmpResult.useConnectedAccounts().xboxAndPlaystationAccounts;
  questLogger = xboxAndPlaystationAccounts;
  let items = [quest, xboxAndPlaystationAccounts];
  const memo = importDefaultResult.useMemo(() => {
    obj = quest(10689);
    return quest(10689).supportedConsoles(quest).filter((arg0) => {
      closure_0 = arg0;
      return null != closure_1.find((type) => type.type === closure_0);
    });
  }, items);
  tmpResult = tmp(10684);
  const questTaskDetails1 = tmpResult.useQuestTaskDetails(quest);
  const obj6 = quest(14443);
  isQuestProgressing1 = quest(10684).useIsQuestProgressing(quest);
  const tmpResult1 = quest(10684);
  let tmp5Result = tmp5(quest(10684).useTaskPlatformScreen(quest, questTaskDetails1), 3);
  const first = tmp5Result[0];
  dependencyMap = first;
  callback = tmp14;
  importDefaultResult = tmp15;
  let tmp16 = 0 === memo.length;
  if (tmp16) {
    tmp16 = !tmp9;
  }
  if (tmp16) {
    tmp16 = first === tmp(6719).TaskPlatformScreen.CONSOLE;
  }
  if (!tmp16) {
    tmp16 = quest.initialStep === memo3.CONSOLE_CONNECT;
  }
  tmp5Result = tmp5(importDefaultResult.useState(tmp16), 2);
  first1 = tmp5Result[0];
  closure_6 = tmp20;
  if (!isQuestProgressing1) {
    isQuestProgressing1 = questTaskDetails1.progressSeconds > 0;
  }
  const tmpResult2 = quest(10684);
  if (!tmp21) {
    tmp20(true);
  }
  const items1 = [tmp5Result[2]];
  callback = obj8.useCallback(() => {
    callback2(false);
    callback(null);
  }, items1);
  memo1 = obj8.useMemo(() => {
    const items = [{ type: memo3.TASK_STATUS, shouldShow: true }];
    return items;
  }, []);
  const items2 = [first1, isQuestProgressing1];
  memo2 = obj8.useMemo(() => {
    obj = { type: memo3.CONSOLE_CONNECT, shouldShow: first1, onNext: hideConsoleSelect };
    const items = [obj, ];
    obj = { type: memo3.TASK_STATUS, shouldShow: true, onBack: null };
    let tmp;
    if (!isQuestProgressing1) {
      tmp = showConsoleSelect;
    }
    obj[2] = tmp;
    items[1] = obj;
    return items;
  }, items2);
  const items3 = [first, first1, isQuestProgressing1, callback];
  memo3 = obj8.useMemo(() => {
    obj = { type: memo3.TASK_SELECT, shouldShow: dependencyMap === quest(6719).TaskPlatformScreen.SELECT };
    const items = [obj, , ];
    obj = { type: memo3.CONSOLE_CONNECT, shouldShow: dependencyMap === quest(6719).TaskPlatformScreen.CONSOLE && first1, onBack: callback, onNext: hideConsoleSelect };
    let tmp6 = callback;
    items[1] = obj;
    obj = { type: memo3.TASK_STATUS, shouldShow: true, onBack: null };
    let tmp7;
    if (!isQuestProgressing1) {
      if (dependencyMap === quest(6719).TaskPlatformScreen.CONSOLE) {
        tmp6 = showConsoleSelect;
      }
      tmp7 = tmp6;
    }
    obj[2] = tmp7;
    items[2] = obj;
    return items;
  }, items3);
  tmp21 = 0 !== memo.length || null != completedAt || first !== quest(6719).TaskPlatformScreen.CONSOLE || first1;
  hasWatchVideoOnMobileTasks1 = quest(14443).useHasWatchVideoOnMobileTasks(quest.config);
  const tmpResult3 = quest(14443);
  isMobileActivityQuest = quest(14443).useMobileActivityQuest(quest).isMobileActivityQuest;
  const items4 = [tmp5Result[1], memo3, memo1, memo2, hasWatchVideoOnMobileTasks1, isMobileActivityQuest];
  const memo4 = obj8.useMemo(() => {
    let hasItem = 1 === lib.length;
    if (hasItem) {
      hasItem = arr.includes(showConsoleSelect.DESKTOP);
    }
    let hasItem1 = 1 === arr.length;
    if (hasItem1) {
      hasItem1 = arr.includes(showConsoleSelect.CONSOLE);
    }
    let arr2 = memo3;
    if (!hasItem) {
      if (!hasWatchVideoOnMobileTasks1) {
        if (!isMobileActivityQuest) {
          if (hasItem1) {
            arr2 = memo2;
          }
        }
        let found = arr2.find((shouldShow) => shouldShow.shouldShow);
        if (found == null) {
          found = arr2.at(-1);
        }
        return found;
      }
    }
    arr2 = memo1;
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
  obj[1] = onNext;
  items5[1] = obj;
  const tmpResult4 = quest(14443);
  questLogger = undefined;
  dependencyMap = undefined;
  callback = undefined;
  [tmp32, tmp33] = callback(items5, 2);
  const tmp5Result1 = callback(items5, 2);
  obj = { quest, location: callback.QUEST_HOME_MOBILE };
  questLogger = quest(7459).getQuestLogger(obj);
  const tmp5Result2 = callback(first1([]), 2);
  dependencyMap = tmp36;
  const tmp5Result3 = callback(first1(false), 2);
  callback = tmp38;
  const items6 = [quest, questLogger, tmp5Result3[1], tmp5Result2[1]];
  obj1 = {
    errorHints: tmp5Result2[0],
    isActive: tmp5Result3[0],
    start: obj8.useCallback(() => {
      lib(true);
      const result = quest(10477).manuallyStartConsoleQuest(quest.id);
      obj = quest(10477);
      const nextPromise = result.then((errorHints) => callback(errorHints.errorHints));
      result.then((errorHints) => callback(errorHints.errorHints)).catch((arg0) => {
        callback([]);
        logger.error("Failed to start console quest", arg0);
        obj = closure_1_1(closure_1_2[10]);
        obj = { key: "START_DEFIBRILLATOR_ERROR", content: null, icon: null };
        const intl = closure_1_0(closure_1_2[11]).intl;
        obj[1] = intl.string(closure_1_0(closure_1_2[11]).t.CKsXk3);
        obj[2] = closure_1_1(closure_1_2[12]);
        obj.open(obj);
      }).finally(() => callback2(false));
    }, items6)
  };
  const userStatus2 = quest.userStatus;
  let completedAt1;
  if (userStatus2 != null) {
    completedAt1 = userStatus2.completedAt;
  }
  const tmpResult5 = quest(7459);
  obj2 = {
    quest,
    defibrillator: obj1,
    step: tmp32,
    stepActions: tmp33,
    showMicrophone: null == completedAt1 && !isQuestProgressing && tmp6[0] === quest(6719).TaskPlatformScreen.CONSOLE && !hasWatchVideoOnMobileTasks,
    handleTaskSelect(arg0) {
      if (arg0 === showConsoleSelect.CONSOLE) {
        let DESELECT_PLATFORM = quest(7480).QuestContentCTA.SELECT_CONSOLE_PLATFORM;
        let tmp4 = quest;
      } else if (arg0 === tmp.DESKTOP) {
        DESELECT_PLATFORM = quest(7480).QuestContentCTA.SELECT_DESKTOP_PLATFORM;
        tmp4 = quest;
      } else {
        DESELECT_PLATFORM = quest(7480).QuestContentCTA.DESELECT_PLATFORM;
        tmp4 = quest;
      }
      let tmp4Result = tmp4(9502);
      if (tmp4Result.shouldMigrateToAdAnalyticsInterface(tmp4(9502).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet")) {
        tmp4Result = tmp4(9503);
        obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null };
        obj[0] = tmp4(9507).AdUserActionType.CLICK_INTERNAL;
        obj[1] = tmp4(7469).AdCreativeType.QUEST;
        obj[2] = quest.id;
        obj[3] = DESELECT_PLATFORM;
        obj[4] = tmp4(6719).QuestContent.QUEST_BOTTOM_SHEET;
        obj[5] = questLogger;
        obj[6] = closure_3;
        tmp4Result.captureAdUserAction(obj);
      } else {
        obj = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
        obj[0] = quest.id;
        obj[1] = tmp4(6719).QuestContent.QUEST_BOTTOM_SHEET;
        obj[2] = DESELECT_PLATFORM;
        obj[3] = questLogger;
        dependencyMap(obj);
      }
      callback(arg0);
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
    obj = require("useDeliveredDockCreative");
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
        obj = { quest: null, sourceQuestContent: null };
        obj[0] = quest;
        obj[1] = sourceQuestContent;
        let tmp5Result = closure_1_10(quest(hasWatchVideoOnMobileTasks[30]).QuestBottomSheetProgressCardWatchTask, obj);
      } else {
        obj = quest(hasWatchVideoOnMobileTasks[19]);
        const tmp8 = quest(hasWatchVideoOnMobileTasks[30]);
        if (isInGameQuestResult) {
          obj = { quest: null, sourceQuestContent: null };
          obj[0] = tmp3;
          obj[1] = sourceQuestContent;
          tmp5Result = tmp5(tmp8.QuestBottomSheetProgressCardInGameTask, obj);
        } else {
          obj1 = { quest: null, sourceQuestContent: null };
          obj1[0] = tmp3;
          obj1[1] = sourceQuestContent;
          tmp5Result = tmp5(tmp8.QuestBottomSheetProgressCardPlayStreamTask, obj1);
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
      obj[0] = global.handleTaskSelect;
      tmp7 = jsx(require("QuestBottomSheetTaskSelect"), obj);
    }
    items1 = [, , ];
    items1[0] = tmp7;
    tmp10 = step === tmp6.CONSOLE_CONNECT;
    if (tmp10) {
      tmp11 = jsx;
      tmp12 = sourceQuestContent;
      obj1 = { quest: null, step: null, sourceQuestContent: null };
      obj1[0] = quest;
      obj1[1] = step;
      obj1[2] = sourceQuestContent;
      tmp10 = jsx(require("NonInlineConsoleConnection"), obj1);
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
        obj2[0] = quest;
        tmp17 = null;
        errorHints = undefined;
        tmp15 = jsx;
        tmp16 = MicrophoneUnit;
        if (defibrillator != null) {
          errorHints = defibrillator.errorHints;
        }
        obj2[1] = errorHints;
        flag = tmp15(tmp16, obj2);
      }
      obj3 = { children: null };
      items2[1] = flag;
      obj3[0] = items2;
      tmp4Result = tmp4(tmp14, obj3);
    }
    items1[2] = tmp4Result;
    return tmp4(tmp5, { children: items1 });
  }
}
function MicrophoneUnit(arg0) {
  ({ quest, errorHints } = arg0);
  const tmp = callback3();
  obj = useQuests;
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
    obj = { style: null, children: null };
    obj[0] = tmp.microphoneUnit;
    obj = { style: null, children: null };
    obj[0] = tmp.microphoneUnitHeader;
    let str = "text-feedback-warning";
    if (tmp4) {
      str = "text-feedback-critical";
    }
    obj1 = { color: null };
    obj1[0] = str;
    const items1 = [closure_10(tmp2(8078).WarningIcon, obj1), ];
    const intl2 = tmp2(1236).intl;
    if (tmp4) {
      const obj2 = { gameTitle: null };
      obj2[0] = quest.config.messages.gameTitle;
      let formatToPlainStringResult = intl2.formatToPlainString(tmp2(1236).t["28Ql27"], obj2);
    } else {
      formatToPlainStringResult = intl2.string(tmp2(1236).t.YstzGO);
    }
    const obj3 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
    obj3[2] = formatToPlainStringResult;
    items1[1] = closure_10(tmp2(4734).Text, obj3);
    obj[1] = items1;
    const items2 = [closure_11(View, obj), items3.map((children) => callback2(callback(table[35]).Text, { variant: "text-sm/normal", children }, arg1))];
    obj[1] = items2;
    return closure_11(View, obj);
  }
  const tmp2Result = isSponsoredPlayQuest;
  const intl = tmp2(1236).intl;
  if (isSponsoredPlayQuestResult) {
    let stringResult = intl.string(tmp2(1236).t.bUyEZZ);
  } else {
    const obj4 = { gameTitle: null };
    obj4[0] = quest.config.messages.gameTitle;
    stringResult = intl.formatToPlainString(tmp2(1236).t.GXqvC1, obj4);
  }
  items3 = [stringResult];
}
let c4 = importDefaultResult;
({ QuestsExperimentLocations: closure_8, QuestTaskPlatform: c9 } = QuestsExperimentLocations);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
let obj = { TASK_SELECT: "TASK_SELECT", CONSOLE_CONNECT: "CONSOLE_CONNECT", TASK_STATUS: "TASK_STATUS" };
obj = { contentContainer: { display: "flex", paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_24 }, microphoneUnit: null, microphoneUnitHeader: null };
createCacheKey = { display: "flex", gap: ThemesDefault.space.PX_8, marginHorizontal: -ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16, marginTop: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_16, borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE };
obj[1] = createCacheKey;
let obj1 = { display: "flex", paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_24 };
obj[2] = { display: "flex", flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
let closure_14 = createCacheKey.createStyles(obj);
const context = importDefaultResult.createContext({ isInQuestBottomSheet: false });
let obj3 = { display: "flex", flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
let result = require("set").fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheet.tsx");

export default function QuestBottomSheetConnected(questContentPosition) {
  ({ questId: require, initialStep: importDefault, sourceQuestContent } = questContentPosition);
  let stateFromStores;
  obj = require(sourceQuestContent[17]);
  const items = [closure_7];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_7.getQuest(closure_0));
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { overrideVisibility: true, questOrQuests: null, questContent: null, questContentPosition: null, sourceQuestContent: null, children: null };
    obj[1] = stateFromStores;
    obj[2] = tmp(tmp2[15]).QuestContent.QUEST_BOTTOM_SHEET;
    obj[3] = questContentPosition.questContentPosition;
    obj[4] = sourceQuestContent;
    obj[5] = function children() {
      return closure_1_10(closure_1_15, { quest: stateFromStores, initialStep: closure_1, sourceQuestContent });
    };
    tmp4 = callback2(tmp(tmp2[18]).QuestContentImpressionTrackerNative, obj);
  }
  return tmp4;
};
export const QuestBottomSheetStep = obj;
export { useEnrolledQuestContentProps };
export { QuestBottomSheetContent };
export const QuestBottomSheetContext = context;