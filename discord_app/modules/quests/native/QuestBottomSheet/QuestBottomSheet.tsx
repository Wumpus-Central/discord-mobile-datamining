// discord_app/modules/quests/native/QuestBottomSheet/QuestBottomSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00019_react.js";
import react3 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import WarningIcon2 from "../../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import utils_QuestUtils from "../../utils/QuestUtils.tsx";
import QuestTaskUtils from "../../utils/QuestTaskUtils.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestActionCreators from "../../QuestActionCreators.tsx";
import hooks_QuestHooks from "../../hooks/QuestHooks.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import QuestHooks from "../QuestHooks.native.tsx";
import QuestBottomSheetHeaderDefault from "QuestBottomSheetHeader.tsx";
import QuestBottomSheetFooterDefault from "QuestBottomSheetFooter.tsx";
import QuestBottomSheetProgressCard from "QuestBottomSheetProgressCard.tsx";
import QuestBottomSheetTaskSelectDefault from "QuestBottomSheetTaskSelect.tsx";
import QuestBottomSheetConsoleConnectDefault from "QuestBottomSheetConsoleConnect.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import QuestStore from "../../QuestStore.tsx";
import QuestConstants from "../../QuestConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const react_mod = react2;
let BottomSheet, _require, dependencyMap, importDefault, quest, questId;

let c10;
let c9;
let closure_12;
let metroImportAll;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
let react = react_mod;
let useState = react2.useState;
const View = react_native.View;
({ QuestsExperimentLocations: metroImportAll, QuestTaskPlatform: c9 } = QuestConstants);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
const QuestBottomSheetStep = {
  TASK_SELECT: "TASK_SELECT",
  CONSOLE_CONNECT: "CONSOLE_CONNECT",
  TASK_STATUS: "TASK_STATUS",
};
let createStyles = createStyles_mod;
let obj2 = { contentContainer: obj3, microphoneUnit: obj4, microphoneUnitHeader: obj5 };
obj3 = { display: "flex", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj4 = {
  display: "flex",
  gap: nativeDefault.space.PX_8,
  marginHorizontal: -nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  marginTop: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj5 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_14 = createStyles(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      let _slicedToArray;
      let tmp11;
      let tmp4;
      let tmp7;
      let tmp9;
      _require = quest;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(10);
      if (cResult[0] !== quest) {
        const obj2 = { quest, location: constants.QUEST_HOME_MOBILE };
        const tmpResult = tmp(7206);
        const questLogger = tmpResult.getQuestLogger(obj2);
        cResult[0] = quest;
        cResult[1] = questLogger;
        tmp4 = questLogger;
      } else {
        tmp4 = cResult[1];
      }
      let closure_1 = tmp4;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        cResult[2] = items;
        tmp7 = items;
      } else {
        tmp7 = cResult[2];
      }
      [tmp9, dependencyMap] = useState(tmp7);
      _slicedToArray(useState(tmp7), 2);
      const tmp10 = _slicedToArray(useState(false), 2);
      [tmp11, _slicedToArray] = tmp10;
      if (cResult[3] === tmp4) {
        let tmp12;
        if (cResult[4] === quest) {
          tmp12 = cResult[5];
        }
        if (cResult[6] === tmp9) {
          if (cResult[7] === tmp11) {
            let tmp13;
            if (cResult[8] === tmp12) {
              tmp13 = cResult[9];
            }
            return tmp13;
          }
        }
        const obj3 = { errorHints: tmp9, isActive: tmp11, start: tmp12 };
        cResult[6] = tmp9;
        cResult[7] = tmp11;
        cResult[8] = tmp12;
        cResult[9] = obj3;
        tmp13 = obj3;
      }
      const fn = function c() {
        let logger;
        _slicedToArray(true);
        let obj = QuestActionCreators;
        const result = obj.manuallyStartConsoleQuest(quest.id);
        const nextPromise = result.then((errorHints) => closure_1_2(errorHints.errorHints));
        const catchPromise = nextPromise.catch((error) => {
          let intl;
          closure_1_2([]);
          logger.error("Failed to start console quest", error);
          const obj = {
            key: "START_DEFIBRILLATOR_ERROR",
            content: intl.string(quest(dependencyMap[13]).t.CKsXk3),
            icon: logger(dependencyMap[14]),
          };
          const open = logger(dependencyMap[12]).open;
          logger(dependencyMap[12]);
          intl = quest(dependencyMap[13]).intl;
          open(obj);
        });
        catchPromise.finally(() => closure_1_3(false));
      };
      cResult[3] = tmp4;
      cResult[4] = quest;
      cResult[5] = fn;
      tmp12 = fn;
    }
  : (quest) => {
      let closure_2;
      let closure_3;
      let items;
      _require = quest;
      let obj = require("getQuestLogger");
      const obj2 = { quest, location: constants.QUEST_HOME_MOBILE };
      const questLogger = obj.getQuestLogger(obj2);
      const tmp2 = quest(useState([]), 2);
      dependencyMap = tmp4;
      const first = tmp2[0];
      const tmp5 = quest(useState(false), 2);
      quest = tmp6;
      const obj3 = {
        errorHints: first,
        isActive: tmp5[0],
        start: react.useCallback(() => {
          let logger;
          closure_3(true);
          let obj = QuestActionCreators;
          const result = obj.manuallyStartConsoleQuest(quest.id);
          const nextPromise = result.then((errorHints) => closure_1_2(errorHints.errorHints));
          const catchPromise = nextPromise.catch((error) => {
            let intl;
            closure_1_2([]);
            logger.error("Failed to start console quest", error);
            const obj = {
              key: "START_DEFIBRILLATOR_ERROR",
              content: intl.string(quest(closure_2[13]).t.CKsXk3),
              icon: questLogger(closure_2[14]),
            };
            const open = questLogger(closure_2[12]).open;
            questLogger(closure_2[12]);
            intl = quest(closure_2[13]).intl;
            open(obj);
          });
          catchPromise.finally(() => closure_1_3(false));
        }, items),
      };
      items = [quest, questLogger, tmp5[1], tmp2[1]];
      return obj3;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      let tmp13;
      let tmp14;
      let tmp19;
      let tmp20;
      const obj = react3;
      const cResult = obj.c(36);
      quest = quest.quest;
      const userStatus = quest.userStatus;
      let completedAt;
      const initialStep = quest.initialStep;
      if (userStatus != null) {
        completedAt = userStatus.completedAt;
      }
      const tmpResult = hooks_QuestHooks;
      const xboxAndPlaystationAccounts = tmpResult.useConnectedAccounts().xboxAndPlaystationAccounts;
      if (cResult[0] === quest) {
        let arr;
        if (cResult[1] === xboxAndPlaystationAccounts) {
          arr = cResult[2];
        }
        const tmpResult5 = hooks_QuestHooks;
        const questTaskDetails = tmpResult5.useQuestTaskDetails(quest);
        const tmpResult6 = hooks_QuestHooks;
        const isQuestProgressing = tmpResult6.useIsQuestProgressing(quest);
        const tmpResult7 = hooks_QuestHooks;
        [tmp13, r10054, tmp14] = tmpResult7.useTaskPlatformScreen(quest, questTaskDetails);
        importDefault = tmp14;
        let tmp16 = 0 === arr.length;
        useState = react.useState;
        _slicedToArray(tmpResult7.useTaskPlatformScreen(quest, questTaskDetails), 3);
        if (tmp16) {
          tmp16 = !tmp5;
        }
        if (tmp16) {
          tmp16 = tmp13 === QuestTypes.TaskPlatformScreen.CONSOLE;
        }
        if (!tmp16) {
          tmp16 = initialStep === obj.CONSOLE_CONNECT;
        }
        [tmp19, tmp20] = useState(tmp16);
        dependencyMap = tmp20;
        _slicedToArray(useState(tmp16), 2);
        const tmp22 =
          0 !== arr.length || null != completedAt || tmp13 !== QuestTypes.TaskPlatformScreen.CONSOLE || tmp19;
        if (!tmp22) {
          tmp20(true);
        }
        if (cResult[5] !== tmp14) {
          class C {
            constructor() {
              tmp = closure_2(false);
              tmp2 = closure_1(null);
              return;
            }
          }
          cResult[5] = tmp14;
          cResult[6] = C;
        } else {
          class C {
            constructor() {
              tmp = closure_2(false);
              tmp2 = closure_1(null);
              return;
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor() {
              tmp = closure_2(false);
              tmp2 = closure_1(null);
              return;
            }
          }
          cResult[7] = tmp27;
        } else {
          class C {
            constructor() {
              tmp = closure_2(false);
              tmp2 = closure_1(null);
              return;
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class M {
            constructor() {
              return closure_2(false);
            }
          }
          cResult[8] = M;
        } else {
          class M {
            constructor() {
              return closure_2(false);
            }
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class M {
            constructor() {
              return closure_2(false);
            }
          }
          tmp30[0] = obj.TASK_STATUS;
          const items = [tmp30];
          cResult[9] = items;
        } else {
          class M {
            constructor() {
              return closure_2(false);
            }
          }
        }
        if (cResult[10] !== tmp19) {
          class M {
            constructor() {
              return closure_2(false);
            }
          }
          tmp33[0] = obj.CONSOLE_CONNECT;
          tmp33[1] = tmp19;
          tmp33[2] = M;
          cResult[10] = tmp19;
          cResult[11] = tmp33;
        } else {
          class M {
            constructor() {
              return closure_2(false);
            }
          }
        }
        if (!(isQuestProgressing || questTaskDetails.progressSeconds > 0)) {
          class M {
            constructor() {
              return closure_2(false);
            }
          }
        }
        if (cResult[12] !== undefined) {
          class M {
            constructor() {
              return closure_2(false);
            }
          }
          tmp37[0] = obj.TASK_STATUS;
          tmp37[2] = undefined;
          cResult[12] = undefined;
          cResult[13] = tmp37;
        } else {
          class M {
            constructor() {
              return closure_2(false);
            }
          }
        }
        if (cResult[14] === tmp33) {
          class M {
            constructor() {
              return closure_2(false);
            }
          }
          const tmp40 = tmp13 === QuestTypes.TaskPlatformScreen.SELECT;
          if (cResult[17] !== tmp40) {
            class M {
              constructor() {
                return closure_2(false);
              }
            }
            tmp42[0] = obj.TASK_SELECT;
            tmp42[1] = tmp40;
            cResult[17] = tmp40;
            cResult[18] = tmp42;
          } else {
            class M {
              constructor() {
                return closure_2(false);
              }
            }
          }
          const tmp44 = tmp13 === QuestTypes.TaskPlatformScreen.CONSOLE && tmp19;
          if (cResult[19] === C) {
            class M {
              constructor() {
                return closure_2(false);
              }
            }
            let tmp47;
            if (!(isQuestProgressing || questTaskDetails.progressSeconds > 0)) {
              class M {
                constructor() {
                  return closure_2(false);
                }
              }
              tmp47 = C;
            }
            if (cResult[22] !== tmp47) {
              class M {
                constructor() {
                  return closure_2(false);
                }
              }
              tmp49[0] = obj.TASK_STATUS;
              tmp49[2] = tmp47;
              cResult[22] = tmp47;
              cResult[23] = tmp49;
            } else {
              class M {
                constructor() {
                  return closure_2(false);
                }
              }
            }
            if (cResult[24] === tmp42) {
              class M {
                constructor() {
                  return closure_2(false);
                }
              }
            }
            const items1 = [tmp42, tmp45, tmp49];
            cResult[24] = tmp42;
            cResult[25] = tmp45;
            cResult[26] = tmp49;
            cResult[27] = items1;
          }
          const obj2 = { type: obj.CONSOLE_CONNECT, shouldShow: tmp44, onBack: C, onNext: M };
          cResult[19] = C;
          cResult[20] = tmp44;
          cResult[21] = obj2;
        }
        const items2 = [tmp33, tmp37];
        cResult[14] = tmp33;
        cResult[15] = tmp37;
        cResult[16] = items2;
      }
      if (cResult[3] !== xboxAndPlaystationAccounts) {
        class M {
          constructor() {
            return closure_2(false);
          }
        }
        cResult[3] = xboxAndPlaystationAccounts;
        cResult[4] = tmp7;
      } else {
        class M {
          constructor() {
            return closure_2(false);
          }
        }
      }
      const tmpResult8 = QuestPlatformUtils;
      const supportedConsolesResult = tmpResult8.supportedConsoles(quest);
      const found = supportedConsolesResult.filter(tmp7);
      cResult[0] = quest;
      cResult[1] = xboxAndPlaystationAccounts;
      cResult[2] = found;
      arr = found;
    }
  : (quest) => {
      let closure_4;
      let length;
      let onNext;
      let xboxAndPlaystationAccounts;
      let first;
      quest = undefined;
      react = undefined;
      let first1;
      let closure_6;
      let isQuestProgressing;
      let onBack;
      let memo1;
      let memo2;
      let memo3;
      let hasWatchVideoOnMobileTasks;
      let isMobileActivityQuest;
      function showConsoleSelect() {
        return closure_6(true);
      }
      function hideConsoleSelect() {
        return closure_6(false);
      }
      const userStatus = quest.userStatus;
      let completedAt;
      const initialStep = quest.initialStep;
      if (userStatus != null) {
        completedAt = userStatus.completedAt;
      }
      let obj = quest(first[15]);
      xboxAndPlaystationAccounts = obj.useConnectedAccounts().xboxAndPlaystationAccounts;
      let obj2 = react;
      let items = [quest, xboxAndPlaystationAccounts];
      const memo = react.useMemo(() => {
        const obj = QuestPlatformUtils;
        const supportedConsolesResult = obj.supportedConsoles(quest);
        return supportedConsolesResult.filter((item) => {
          let closure_0 = item;
          return null != xboxAndPlaystationAccounts.find((type) => type.type === closure_0);
        });
      }, items);
      let obj3 = quest(first[15]);
      const questTaskDetails = obj3.useQuestTaskDetails(quest);
      const obj4 = quest(first[15]);
      isQuestProgressing = obj4.useIsQuestProgressing(quest);
      let tmp7 = quest;
      const obj5 = quest(first[15]);
      const tmp8 = quest(obj5.useTaskPlatformScreen(quest, questTaskDetails), 3);
      first = tmp8[0];
      quest = tmp10;
      react = tmp11;
      let tmp12 = 0 === memo.length;
      useState = react.useState;
      if (tmp12) {
        tmp12 = !tmp2;
      }
      if (tmp12) {
        tmp12 = first === tmp3(tmp4[17]).TaskPlatformScreen.CONSOLE;
      }
      if (!tmp12) {
        tmp12 = initialStep === memo3.CONSOLE_CONNECT;
      }
      const tmp7Result = tmp7(useState(tmp12), 2);
      first1 = tmp7Result[0];
      closure_6 = tmp16;
      if (!isQuestProgressing) {
        isQuestProgressing = questTaskDetails.progressSeconds > 0;
      }
      const tmp17 =
        0 !== memo.length || null != completedAt || first !== quest(first[17]).TaskPlatformScreen.CONSOLE || first1;
      if (!tmp17) {
        tmp7Result[1](true);
      }
      const items1 = [tmp8[2]];
      onBack = obj2.useCallback(() => {
        closure_6(false);
        closure_4(null);
      }, items1);
      memo1 = obj2.useMemo(() => {
        const items = [];
        const obj = { type: memo3.TASK_STATUS, shouldShow: true };
        items[0] = obj;
        return items;
      }, []);
      const items2 = [first1, isQuestProgressing];
      memo2 = obj2.useMemo(() => {
        let obj;
        let tmp;
        obj = { type: obj.CONSOLE_CONNECT, shouldShow: first1, onNext: hideConsoleSelect };
        const items = [obj];
        const obj2 = { type: obj.TASK_STATUS, shouldShow: true, onBack: tmp };
        tmp = undefined;
        if (!isQuestProgressing) {
          tmp = showConsoleSelect;
        }
        items[1] = obj2;
        return items;
      }, items2);
      const items3 = [first, first1, isQuestProgressing, onBack];
      memo3 = obj2.useMemo(() => {
        let obj;
        let tmp7;
        obj = { type: obj.TASK_SELECT, shouldShow: first === QuestTypes.TaskPlatformScreen.SELECT };
        const items = [obj, ,];
        let tmp6 = onBack;
        items[1] = {
          type: obj.CONSOLE_CONNECT,
          shouldShow: first === QuestTypes.TaskPlatformScreen.CONSOLE && first1,
          onBack,
          onNext: hideConsoleSelect,
        };
        const obj3 = { type: obj.TASK_STATUS, shouldShow: true, onBack: tmp7 };
        tmp7 = undefined;
        const obj2 = {
          type: obj.CONSOLE_CONNECT,
          shouldShow: first === QuestTypes.TaskPlatformScreen.CONSOLE && first1,
          onBack,
          onNext: hideConsoleSelect,
        };
        first === QuestTypes.TaskPlatformScreen.CONSOLE && first1;
        if (!isQuestProgressing) {
          if (first === QuestTypes.TaskPlatformScreen.CONSOLE) {
            tmp6 = showConsoleSelect;
          }
          tmp7 = tmp6;
        }
        items[2] = obj3;
        return items;
      }, items3);
      const tmp3Result = quest(first[18]);
      hasWatchVideoOnMobileTasks = tmp3Result.useHasWatchVideoOnMobileTasks(quest.config);
      const tmp3Result2 = quest(first[18]);
      isMobileActivityQuest = tmp3Result2.useMobileActivityQuest(quest).isMobileActivityQuest;
      const items4 = [tmp8[1], memo3, memo1, memo2, hasWatchVideoOnMobileTasks, isMobileActivityQuest];
      const memo4 = obj2.useMemo(() => {
        const hasItem = 1 === length.length && length.includes(showConsoleSelect.DESKTOP);
        const hasItem1 = 1 === length.length && length.includes(showConsoleSelect.CONSOLE);
        let arr2 = memo3;
        if (!hasItem) {
          if (!hasWatchVideoOnMobileTasks) {
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
      const items5 = [memo4.type];
      onBack = undefined;
      if (memo4 != null) {
        onBack = memo4.onBack;
      }
      const obj6 = { onBack, onNext };
      onNext = undefined;
      if (memo4 != null) {
        onNext = memo4.onNext;
      }
      items5[1] = obj6;
      return items5;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (questId) => {
      let first;
      let sourceQuestContent;
      let tmp6;
      let obj = questId(sourceQuestContent[9]);
      const cResult = obj.c(12);
      questId = questId.questId;
      const initialStep = questId.initialStep;
      sourceQuestContent = questId.sourceQuestContent;
      const questContentPosition = questId.questContentPosition;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [QuestStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== questId) {
        const fn = function n() {
          return QuestStore.getQuest(questId);
        };
        cResult[1] = questId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = questId(sourceQuestContent[19]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (null != stateFromStores) {
        if (cResult[3] === initialStep) {
          if (cResult[4] === stateFromStores) {
            let tmp8;
            if (cResult[5] === sourceQuestContent) {
              tmp8 = cResult[6];
            }
            class T {
              constructor() {
                const obj = { quest: stateFromStores, initialStep, sourceQuestContent };
                return authStore(closure_17, obj);
              }
            }
            const obj2 = {
              overrideVisibility: true,
              questOrQuests: stateFromStores,
              questContent: questId(sourceQuestContent[17]).QuestContent.QUEST_BOTTOM_SHEET,
              questContentPosition,
              sourceQuestContent,
              children: tmp8,
            };
            const QuestContentImpressionTrackerNative = tmp(tmp2[20]).QuestContentImpressionTrackerNative;
            cResult[7] = stateFromStores;
            cResult[8] = questContentPosition;
            cResult[9] = sourceQuestContent;
            cResult[10] = tmp8;
            cResult[11] = closure_10(QuestContentImpressionTrackerNative, obj2);
            const tmp11 = closure_10(QuestContentImpressionTrackerNative, obj2);
          }
        }
        class T {
          constructor() {
            const obj = { quest: stateFromStores, initialStep, sourceQuestContent };
            return authStore(closure_17, obj);
          }
        }
        cResult[3] = initialStep;
        cResult[4] = stateFromStores;
        cResult[5] = sourceQuestContent;
        cResult[6] = T;
        tmp8 = T;
      }
      return null;
    }
  : (questContentPosition) => {
      let initialStep;
      let require;
      let sourceQuestContent;
      ({ questId: require, initialStep: importDefault, sourceQuestContent } = questContentPosition);
      questContentPosition = questContentPosition.questContentPosition;
      let obj = require("get initialized");
      const items = [QuestStore];
      const stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuest(_require));
      let tmp4 = null;
      if (null != stateFromStores) {
        const obj2 = {
          overrideVisibility: true,
          questOrQuests: stateFromStores,
          questContent: require("QuestTypes").QuestContent.QUEST_BOTTOM_SHEET,
          questContentPosition,
          sourceQuestContent,
          children() {
            const obj = { quest: stateFromStores, initialStep: importDefault, sourceQuestContent };
            return authStore(closure_17, obj);
          },
        };
        const QuestContentImpressionTrackerNative =
          require("QuestContentImpressionTracker").QuestContentImpressionTrackerNative;
        tmp4 = closure_10(QuestContentImpressionTrackerNative, obj2);
      }
      return tmp4;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let defibrillator;
      let first;
      let handleTaskSelect;
      let initialStep;
      let showMicrophone;
      let sourceQuestContent;
      let step;
      let stepActions;
      const obj = react3;
      const cResult = obj.c(39);
      ({ quest, initialStep, sourceQuestContent } = arg0);
      closure_14();
      if (cResult[0] === initialStep) {
        if (cResult[1] === quest) {
          let tmp5;
          let tmp9;
          let tmp11;
          if (cResult[2] === sourceQuestContent) {
            tmp5 = cResult[3];
          }
          ({ step, defibrillator, stepActions, handleTaskSelect, showMicrophone } = closure_18(tmp5));
          closure_18(tmp5);
          const tmpResult = QuestHooks;
          const hasWatchVideoOnMobileTasks = tmpResult.useHasWatchVideoOnMobileTasks(quest.config);
          if (cResult[4] !== quest) {
            const tmpResult3 = QuestTaskUtils;
            const hasWatchVideoTasksResult = tmpResult3.hasWatchVideoTasks(quest);
            cResult[4] = quest;
            cResult[5] = hasWatchVideoTasksResult;
            tmp9 = hasWatchVideoTasksResult;
          } else {
            tmp9 = cResult[5];
          }
          if (cResult[6] !== quest) {
            const tmpResult4 = QuestTaskUtils;
            const isInGameQuestResult = tmpResult4.isInGameQuest(quest);
            cResult[6] = quest;
            cResult[7] = isInGameQuestResult;
            tmp11 = isInGameQuestResult;
          } else {
            tmp11 = cResult[7];
          }
          [first, _require] = useState(0);
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            class I {
              constructor(arg0) {
                tmp = closure_0(arg0.nativeEvent.layout.height);
                return;
              }
            }
            cResult[8] = I;
          } else {
            class I {
              constructor(arg0) {
                tmp = closure_0(arg0.nativeEvent.layout.height);
                return;
              }
            }
          }
          let tmp19 = !tmp11;
          if (tmp19) {
            class I {
              constructor(arg0) {
                tmp = closure_0(arg0.nativeEvent.layout.height);
                return;
              }
            }
            if (tmp9) {
              class I {
                constructor(arg0) {
                  tmp = closure_0(arg0.nativeEvent.layout.height);
                  return;
                }
              }
            }
            tmp19 = tmp20;
          }
          const _Symbol2 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            class I {
              constructor(arg0) {
                tmp = closure_0(arg0.nativeEvent.layout.height);
                return;
              }
            }
            cResult[9] = tmp22;
          } else {
            class I {
              constructor(arg0) {
                tmp = closure_0(arg0.nativeEvent.layout.height);
                return;
              }
            }
          }
          if (cResult[10] === quest) {
            class I {
              constructor(arg0) {
                tmp = closure_0(arg0.nativeEvent.layout.height);
                return;
              }
            }
            if (cResult[13] === defibrillator) {
              class I {
                constructor(arg0) {
                  tmp = closure_0(arg0.nativeEvent.layout.height);
                  return;
                }
              }
            }
            let tmp29 = null;
            if (tmp19) {
              class I {
                constructor(arg0) {
                  tmp = closure_0(arg0.nativeEvent.layout.height);
                  return;
                }
              }
              const obj2 = {
                quest,
                sourceQuestContent,
                step,
                isDefibrilating: defibrillator.isActive,
                onLayout: I,
                onBack: stepActions.onBack,
                onDefib: defibrillator.start,
                onConnectConsoleNext: stepActions.onNext,
              };
              tmp29 = authStore(QuestBottomSheetFooterDefault, obj2);
            }
            cResult[13] = defibrillator;
            cResult[14] = quest;
            cResult[15] = tmp19;
            cResult[16] = sourceQuestContent;
            cResult[17] = step;
            cResult[18] = stepActions;
            cResult[19] = tmp29;
          }
          const obj3 = { quest, step, location: metroImportAll.QUEST_HOME_MOBILE };
          cResult[10] = quest;
          cResult[11] = step;
          cResult[12] = authStore(QuestBottomSheetHeaderDefault, obj3);
          const tmp27 = authStore(QuestBottomSheetHeaderDefault, obj3);
        }
      }
      const obj4 = { quest, initialStep, location: metroImportAll.QUEST_HOME_MOBILE, sourceQuestContent };
      cResult[0] = initialStep;
      cResult[1] = quest;
      cResult[2] = sourceQuestContent;
      cResult[3] = obj4;
      tmp5 = obj4;
    }
  : (initialStep) => {
      let closure_0;
      let defibrillator;
      let first;
      let handleTaskSelect;
      let obj10;
      let obj6;
      let obj7;
      let obj9;
      let showMicrophone;
      let sourceQuestContent;
      let step;
      let stepActions;
      let tmp10Result;
      ({ quest, sourceQuestContent } = initialStep);
      closure_0 = undefined;
      const obj = {
        quest,
        initialStep: initialStep.initialStep,
        location: metroImportAll.QUEST_HOME_MOBILE,
        sourceQuestContent,
      };
      const tmp = closure_14();
      const tmp3 = closure_18(obj);
      ({ step, defibrillator, stepActions } = tmp3);
      ({ handleTaskSelect, showMicrophone } = tmp3);
      const obj2 = QuestHooks;
      const hasWatchVideoOnMobileTasks = obj2.useHasWatchVideoOnMobileTasks(quest.config);
      const obj3 = QuestTaskUtils;
      const hasWatchVideoTasksResult = obj3.hasWatchVideoTasks(quest);
      const obj4 = QuestTaskUtils;
      const isInGameQuestResult = obj4.isInGameQuest(quest);
      [first, closure_0] = useState(0);
      const Provider = context.Provider;
      const obj5 = {
        value: react.useMemo(() => ({ isInQuestBottomSheet: true }), []),
        children: authStore(BottomSheet, obj6),
      };
      obj6 = {
        header: authStore(QuestBottomSheetHeaderDefault, obj7),
        footer: tmp10Result,
        startExpanded: true,
        children: authStore(View, obj9),
      };
      BottomSheet = Sheet_BottomSheet.BottomSheet;
      tmp10Result = null;
      obj7 = { quest, step, location: metroImportAll.QUEST_HOME_MOBILE };
      if (!isInGameQuestResult) {
        if (!hasWatchVideoTasksResult) {
          const obj8 = {
            quest,
            sourceQuestContent,
            step,
            isDefibrilating: defibrillator.isActive,
            onLayout(nativeEvent) {
              closure_0(nativeEvent.nativeEvent.layout.height);
            },
            onBack: stepActions.onBack,
            onDefib: defibrillator.start,
            onConnectConsoleNext: stepActions.onNext,
          };
          tmp10Result = authStore(QuestBottomSheetFooterDefault, obj8);
        } else {
          tmp10Result = null;
        }
      }
      const items = [tmp.contentContainer];
      let num = 0;
      if (step !== obj.TASK_SELECT) {
        num = first;
      }
      items[1] = { paddingBottom: num };
      obj9 = { style: items, children: authStore(closure_19, obj10) };
      obj10 = {
        defibrillator,
        quest,
        handleTaskSelect,
        location: metroImportAll.QUEST_HOME_MOBILE,
        showMicrophone,
        sourceQuestContent,
        step,
      };
      return authStore(Provider, obj5);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      let _location;
      let initialStep;
      let sourceQuestContent;
      let tmp17;
      let tmp18;
      let trackQuestContentClickedWithImpression;
      const tmp = quest;
      let obj = quest(trackQuestContentClickedWithImpression[9]);
      const cResult = obj.c(17);
      quest = quest.quest;
      ({ initialStep, location: _location, sourceQuestContent } = quest);
      let obj2 = quest(trackQuestContentClickedWithImpression[25]);
      const tmp2 = trackQuestContentClickedWithImpression;
      trackQuestContentClickedWithImpression = obj2.useTrackQuestContentClickedWithImpression();
      const obj3 = quest(trackQuestContentClickedWithImpression[26]);
      const getQuestImpressionId = obj3.useGetQuestImpressionId();
      const obj4 = quest(trackQuestContentClickedWithImpression[15]);
      const questTaskDetails = obj4.useQuestTaskDetails(quest);
      const obj5 = quest(trackQuestContentClickedWithImpression[15]);
      const isQuestProgressing = obj5.useIsQuestProgressing(quest);
      const obj6 = quest(trackQuestContentClickedWithImpression[15]);
      const tmp9 = getQuestImpressionId(obj6.useTaskPlatformScreen(quest, questTaskDetails), 3);
      let closure_4 = tmp11;
      const first = tmp9[0];
      quest(trackQuestContentClickedWithImpression[18]);
      if (cResult[0] === initialStep) {
        if (cResult[1] === _location) {
          let tmp14;
          if (cResult[2] === quest) {
            tmp14 = cResult[3];
          }
          [tmp17, tmp18] = getQuestImpressionId(closure_16(tmp14), 2);
          getQuestImpressionId(closure_16(tmp14), 2);
          const tmp20 = closure_15(quest);
          const userStatus = quest.userStatus;
          let completedAt;
          if (userStatus != null) {
            completedAt = userStatus.completedAt;
          }
          const tmp23 =
            null == completedAt && !isQuestProgressing && first === tmp(tmp2[17]).TaskPlatformScreen.CONSOLE && !tmp13;
          if (cResult[4] === getQuestImpressionId) {
            if (cResult[5] === quest.id) {
              if (cResult[6] === tmp9[2]) {
                if (cResult[7] === sourceQuestContent) {
                  let tmp24;
                  if (cResult[8] === trackQuestContentClickedWithImpression) {
                    tmp24 = cResult[9];
                  }
                  if (cResult[10] === tmp20) {
                    if (cResult[11] === tmp24) {
                      if (cResult[12] === quest) {
                        if (cResult[13] === tmp23) {
                          if (cResult[14] === tmp17) {
                            let tmp25;
                            if (cResult[15] === tmp18) {
                              tmp25 = cResult[16];
                            }
                            return tmp25;
                          }
                        }
                      }
                    }
                  }
                  const obj7 = {
                    quest,
                    defibrillator: tmp20,
                    step: tmp17,
                    stepActions: tmp18,
                    showMicrophone: tmp23,
                    handleTaskSelect: tmp24,
                  };
                  cResult[10] = tmp20;
                  cResult[11] = tmp24;
                  cResult[12] = quest;
                  cResult[13] = tmp23;
                  cResult[14] = tmp17;
                  cResult[15] = tmp18;
                  cResult[16] = obj7;
                  tmp25 = obj7;
                }
              }
            }
          }
          const fn = function v(arg0) {
            let DESELECT_PLATFORM;
            let tmp4;
            if (arg0 === constants.CONSOLE) {
              DESELECT_PLATFORM = AnalyticsTypes.QuestContentCTA.SELECT_CONSOLE_PLATFORM;
              tmp4 = require;
            } else if (arg0 === tmp.DESKTOP) {
              DESELECT_PLATFORM = AnalyticsTypes.QuestContentCTA.SELECT_DESKTOP_PLATFORM;
              tmp4 = require;
            } else {
              DESELECT_PLATFORM = AnalyticsTypes.QuestContentCTA.DESELECT_PLATFORM;
              tmp4 = require;
            }
            const tmp4Result = tmp4(7237);
            if (
              tmp4Result.shouldMigrateToAdAnalyticsInterface(
                tmp4(7237).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
                "quest_bottom_sheet",
              )
            ) {
              const obj = {
                type: tmp4(7236).AdUserActionType.CLICK_INTERNAL,
                adCreativeType: tmp4(5637).AdCreativeType.QUEST,
                adCreativeId: quest.id,
                questContentCTA: DESELECT_PLATFORM,
                surfaceId: tmp4(5633).QuestContent.QUEST_BOTTOM_SHEET,
                sourceQuestContent,
                impressionId: getQuestImpressionId(),
              };
              const captureAdUserAction = tmp4(7226).captureAdUserAction;
              tmp4(7226);
              captureAdUserAction(obj);
            } else {
              const obj2 = {
                questId: quest.id,
                questContent: tmp4(5633).QuestContent.QUEST_BOTTOM_SHEET,
                questContentCTA: DESELECT_PLATFORM,
                sourceQuestContent,
              };
              trackQuestContentClickedWithImpression(obj2);
            }
            closure_4(arg0);
          };
          cResult[4] = getQuestImpressionId;
          cResult[5] = quest.id;
          cResult[6] = tmp9[2];
          cResult[7] = sourceQuestContent;
          cResult[8] = trackQuestContentClickedWithImpression;
          cResult[9] = fn;
          tmp24 = fn;
        }
      }
      const obj8 = { quest, initialStep, location: _location };
      cResult[0] = initialStep;
      cResult[1] = _location;
      cResult[2] = quest;
      cResult[3] = obj8;
      tmp14 = obj8;
    }
  : (quest) => {
      let _location;
      let closure_2;
      let closure_3;
      let initialStep;
      let tmp10;
      let tmp9;
      quest = quest.quest;
      const sourceQuestContent = quest.sourceQuestContent;
      quest = undefined;
      ({ initialStep, location: _location } = quest);
      const tmp = quest;
      let obj = quest(10967);
      dependencyMap = obj.useTrackQuestContentClickedWithImpression();
      let obj2 = quest(10929);
      quest = obj2.useGetQuestImpressionId();
      const obj3 = quest(10924);
      const questTaskDetails = obj3.useQuestTaskDetails(quest);
      const obj4 = quest(10924);
      const isQuestProgressing = obj4.useIsQuestProgressing(quest);
      const obj5 = quest(10924);
      const tmp5 = quest(obj5.useTaskPlatformScreen(quest, questTaskDetails), 3);
      let closure_4 = tmp5[2];
      const first = tmp5[0];
      const obj6 = quest(14908);
      const hasWatchVideoOnMobileTasks = obj6.useHasWatchVideoOnMobileTasks(quest.config);
      [tmp9, tmp10] = quest(closure_16({ quest, initialStep, location: _location }), 2);
      const userStatus = quest.userStatus;
      let completedAt;
      quest(closure_16({ quest, initialStep, location: _location }), 2);
      const tmp11 = closure_15(quest);
      if (userStatus != null) {
        completedAt = userStatus.completedAt;
      }
      const obj7 = {
        quest,
        defibrillator: tmp11,
        step: tmp9,
        stepActions: tmp10,
        showMicrophone:
          null == completedAt &&
          !isQuestProgressing &&
          first === tmp(5633).TaskPlatformScreen.CONSOLE &&
          !hasWatchVideoOnMobileTasks,
        handleTaskSelect(arg0) {
          let DESELECT_PLATFORM;
          let tmp4;
          if (arg0 === constants.CONSOLE) {
            DESELECT_PLATFORM = AnalyticsTypes.QuestContentCTA.SELECT_CONSOLE_PLATFORM;
            tmp4 = require;
          } else if (arg0 === tmp.DESKTOP) {
            DESELECT_PLATFORM = AnalyticsTypes.QuestContentCTA.SELECT_DESKTOP_PLATFORM;
            tmp4 = require;
          } else {
            DESELECT_PLATFORM = AnalyticsTypes.QuestContentCTA.DESELECT_PLATFORM;
            tmp4 = require;
          }
          const tmp4Result = tmp4(7237);
          if (
            tmp4Result.shouldMigrateToAdAnalyticsInterface(
              tmp4(7237).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
              "quest_bottom_sheet",
            )
          ) {
            const obj = {
              type: tmp4(7236).AdUserActionType.CLICK_INTERNAL,
              adCreativeType: tmp4(5637).AdCreativeType.QUEST,
              adCreativeId: quest.id,
              questContentCTA: DESELECT_PLATFORM,
              surfaceId: tmp4(5633).QuestContent.QUEST_BOTTOM_SHEET,
              sourceQuestContent,
              impressionId: closure_3(),
            };
            const captureAdUserAction = tmp4(7226).captureAdUserAction;
            tmp4(7226);
            captureAdUserAction(obj);
          } else {
            const obj2 = {
              questId: quest.id,
              questContent: tmp4(5633).QuestContent.QUEST_BOTTOM_SHEET,
              questContentCTA: DESELECT_PLATFORM,
              sourceQuestContent,
            };
            closure_2(obj2);
          }
          closure_4(arg0);
        },
      };
      return obj7;
    };
let closure_18 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let defibrillator;
      let errorHints1;
      let handleTaskSelect;
      let items;
      let showMicrophone;
      let sourceQuestContent;
      let step;
      let tmp6;
      const obj = react3;
      const cResult = obj.c(27);
      ({ defibrillator, quest, handleTaskSelect, showMicrophone, sourceQuestContent, step } = arg0);
      const tmpResult = QuestHooks;
      const hasWatchVideoOnMobileTasks = tmpResult.useHasWatchVideoOnMobileTasks(quest.config);
      if (hasWatchVideoOnMobileTasks) {
        if (cResult[0] === quest) {
          let tmp12;
          if (cResult[1] === sourceQuestContent) {
            tmp12 = cResult[2];
          }
          tmp6 = tmp12;
        }
        const obj2 = { quest, sourceQuestContent };
        const tmp14 = authStore(QuestBottomSheetProgressCard.QuestBottomSheetProgressCardWatchTask, obj2);
        cResult[0] = quest;
        cResult[1] = sourceQuestContent;
        cResult[2] = tmp14;
        tmp12 = tmp14;
      } else {
        const tmpResult2 = QuestTaskUtils;
        if (tmpResult2.isInGameQuest(quest)) {
          if (cResult[3] === quest) {
            let tmp9;
            if (cResult[4] === sourceQuestContent) {
              tmp9 = cResult[5];
            }
            tmp6 = tmp9;
          }
          const obj3 = { quest, sourceQuestContent };
          const tmp11 = authStore(QuestBottomSheetProgressCard.QuestBottomSheetProgressCardInGameTask, obj3);
          cResult[3] = quest;
          cResult[4] = sourceQuestContent;
          cResult[5] = tmp11;
          tmp9 = tmp11;
        } else {
          if (cResult[6] === quest) {
            if (cResult[7] === sourceQuestContent) {
              tmp6 = cResult[8];
            }
          }
          const obj4 = { quest, sourceQuestContent };
          const tmp8 = authStore(QuestBottomSheetProgressCard.QuestBottomSheetProgressCardPlayStreamTask, obj4);
          cResult[6] = quest;
          cResult[7] = sourceQuestContent;
          cResult[8] = tmp8;
          tmp6 = tmp8;
        }
      }
      if (cResult[9] === handleTaskSelect) {
        let tmp15;
        if (cResult[10] === step) {
          tmp15 = cResult[11];
        }
        if (cResult[12] === quest) {
          if (cResult[13] === sourceQuestContent) {
            let tmp19;
            if (cResult[14] === step) {
              tmp19 = cResult[15];
            }
            let errorHints;
            const tmp24 = cResult[16];
            if (defibrillator != null) {
              errorHints = defibrillator.errorHints;
            }
            if (tmp24 === errorHints) {
              if (cResult[17] === quest) {
                if (cResult[18] === hasWatchVideoOnMobileTasks) {
                  if (cResult[19] === (undefined !== showMicrophone && showMicrophone)) {
                    if (cResult[20] === step) {
                      let tmp27;
                      if (cResult[21] === tmp6) {
                        tmp27 = cResult[22];
                      }
                      if (cResult[23] === tmp15) {
                        if (cResult[24] === tmp19) {
                          let tmp37;
                          if (cResult[25] === tmp27) {
                            tmp37 = cResult[26];
                          }
                          return tmp37;
                        }
                      }
                      const obj5 = { children: items };
                      items = [tmp15, tmp19, tmp27];
                      const tmp40 = unpackModuleId(closure_12, obj5);
                      cResult[23] = tmp15;
                      cResult[24] = tmp19;
                      cResult[25] = tmp27;
                      cResult[26] = tmp40;
                      tmp37 = tmp40;
                    }
                  }
                }
              }
            }
            let tmp30Result = step === obj.TASK_STATUS;
            if (tmp30Result) {
              const items1 = [tmp6];
              let tmp33Result = tmp4;
              if (undefined !== showMicrophone && showMicrophone) {
                tmp33Result = !hasWatchVideoOnMobileTasks;
              }
              if (tmp33Result) {
                const obj6 = { quest, errorHints: errorHints1 };
                errorHints1 = undefined;
                if (defibrillator != null) {
                  errorHints1 = defibrillator.errorHints;
                }
                tmp33Result = authStore(closure_20, obj6);
              }
              const obj7 = { children: items1 };
              items1[1] = tmp33Result;
              tmp30Result = unpackModuleId(View, obj7);
            }
            let errorHints2;
            if (defibrillator != null) {
              errorHints2 = defibrillator.errorHints;
            }
            cResult[16] = errorHints2;
            cResult[17] = quest;
            cResult[18] = hasWatchVideoOnMobileTasks;
            cResult[19] = undefined !== showMicrophone && showMicrophone;
            cResult[20] = step;
            cResult[21] = tmp6;
            cResult[22] = tmp30Result;
            tmp27 = tmp30Result;
          }
        }
        let tmp21 = step === obj.CONSOLE_CONNECT;
        if (tmp21) {
          const obj8 = { quest, step, sourceQuestContent };
          tmp21 = authStore(QuestBottomSheetConsoleConnectDefault, obj8);
        }
        cResult[12] = quest;
        cResult[13] = sourceQuestContent;
        cResult[14] = step;
        cResult[15] = tmp21;
        tmp19 = tmp21;
      }
      let tmp16 = step === obj.TASK_SELECT;
      if (tmp16) {
        const obj9 = { onTaskSelect: handleTaskSelect };
        tmp16 = authStore(QuestBottomSheetTaskSelectDefault, obj9);
      }
      cResult[9] = handleTaskSelect;
      cResult[10] = step;
      cResult[11] = tmp16;
      tmp15 = tmp16;
    }
  : (showMicrophone) => {
      let defibrillator;
      let errorHints;
      ({ defibrillator, quest } = showMicrophone);
      let flag = showMicrophone.showMicrophone;
      const handleTaskSelect = showMicrophone.handleTaskSelect;
      if (flag === undefined) {
        flag = false;
      }
      const sourceQuestContent = showMicrophone.sourceQuestContent;
      const step = showMicrophone.step;
      let hasWatchVideoOnMobileTasks;
      let obj = quest(hasWatchVideoOnMobileTasks[18]);
      hasWatchVideoOnMobileTasks = obj.useHasWatchVideoOnMobileTasks(quest.config);
      const items = [quest, hasWatchVideoOnMobileTasks, sourceQuestContent];
      let tmp7 = step === obj.TASK_SELECT;
      const memo = react.useMemo(() => {
        let tmp6Result;
        if (hasWatchVideoOnMobileTasks) {
          const obj2 = { quest, sourceQuestContent };
          tmp6Result = authStore(QuestBottomSheetProgressCard.QuestBottomSheetProgressCardWatchTask, obj2);
        } else {
          const obj = QuestTaskUtils;
          const isInGameQuestResult = obj.isInGameQuest(quest);
          const tmp9 = QuestBottomSheetProgressCard;
          if (isInGameQuestResult) {
            const obj3 = { quest, sourceQuestContent };
            tmp6Result = authStore(tmp9.QuestBottomSheetProgressCardInGameTask, obj3);
          } else {
            const obj4 = { quest, sourceQuestContent };
            tmp6Result = authStore(tmp9.QuestBottomSheetProgressCardPlayStreamTask, obj4);
          }
        }
        return tmp6Result;
      }, items);
      if (tmp7) {
        let tmp9 = sourceQuestContent;
        let obj2 = { onTaskSelect: handleTaskSelect };
        tmp7 = closure_10(sourceQuestContent(tmp[33]), obj2);
      }
      const children = [tmp7, ,];
      let tmp10 = step === tmp6.CONSOLE_CONNECT;
      if (tmp10) {
        let obj3 = { quest, step, sourceQuestContent };
        tmp10 = closure_10(sourceQuestContent(tmp[34]), obj3);
      }
      children[1] = tmp10;
      let tmp4Result = step === tmp6.TASK_STATUS;
      if (tmp4Result) {
        const items2 = [memo];
        if (flag) {
          flag = !hasWatchVideoOnMobileTasks;
        }
        if (flag) {
          let obj4 = { quest, errorHints };
          errorHints = undefined;
          if (defibrillator != null) {
            errorHints = defibrillator.errorHints;
          }
          flag = closure_10(closure_20, obj4);
        }
        const obj5 = { children: items2 };
        items2[1] = flag;
        tmp4Result = closure_11(View, obj5);
      }
      children[2] = tmp4Result;
      return closure_11(closure_12, { children });
    };
let closure_19 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let arr;
      let errorHints;
      let items;
      let items1;
      let stringResult;
      let obj = react3;
      const cResult = obj.c(22);
      ({ quest, errorHints } = arg0);
      const tmp5 = closure_14();
      const obj2 = hooks_QuestHooks;
      const message = obj2.useQuestHowToHelpArticle().message;
      let num;
      if (errorHints != null) {
        num = errorHints.length;
      }
      if (num == null) {
        num = 0;
      }
      if (cResult[0] === errorHints) {
        if (cResult[1] === num > 0) {
          if (cResult[2] === quest) {
            let tmp10;
            let formatToPlainStringResult;
            if (cResult[3] === message) {
              arr = cResult[4];
            }
            let str = "text-feedback-warning";
            const microphoneUnit = tmp5.microphoneUnit;
            if (num > 0) {
              str = "text-feedback-critical";
            }
            if (cResult[5] !== str) {
              const obj3 = { color: str };
              const tmp12 = authStore(WarningIcon2.WarningIcon, obj3);
              cResult[5] = str;
              cResult[6] = tmp12;
              tmp10 = tmp12;
            } else {
              tmp10 = cResult[6];
            }
            if (cResult[7] === num > 0) {
              let tmp13;
              let tmp15;
              if (cResult[8] === quest) {
                tmp13 = cResult[9];
              }
              if (cResult[10] !== tmp13) {
                const obj4 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: tmp13 };
                const tmp17 = authStore(Text_Text.Text, obj4);
                cResult[10] = tmp13;
                cResult[11] = tmp17;
                tmp15 = tmp17;
              } else {
                tmp15 = cResult[11];
              }
              if (cResult[12] === tmp5.microphoneUnitHeader) {
                if (cResult[13] === tmp10) {
                  let tmp18;
                  let tmp22;
                  if (cResult[14] === tmp15) {
                    tmp18 = cResult[15];
                  }
                  if (cResult[16] !== arr) {
                    const mapped = arr.map((children, index) => {
                      const obj = { variant: "text-sm/normal", children };
                      return closure_1_10(require("Text/Text").Text, obj, index);
                    });
                    cResult[16] = arr;
                    cResult[17] = mapped;
                    tmp22 = mapped;
                  } else {
                    tmp22 = cResult[17];
                  }
                  if (cResult[18] === tmp5.microphoneUnit) {
                    if (cResult[19] === tmp18) {
                      let tmp24;
                      if (cResult[20] === tmp22) {
                        tmp24 = cResult[21];
                      }
                      return tmp24;
                    }
                  }
                  const obj5 = { style: microphoneUnit, children: items };
                  items = [tmp18, tmp22];
                  const tmp27 = unpackModuleId(View, obj5);
                  cResult[18] = tmp5.microphoneUnit;
                  cResult[19] = tmp18;
                  cResult[20] = tmp22;
                  cResult[21] = tmp27;
                  tmp24 = tmp27;
                }
              }
              const obj6 = { style: tmp5.microphoneUnitHeader, children: items1 };
              items1 = [tmp10, tmp15];
              const tmp21 = unpackModuleId(View, obj6);
              cResult[12] = tmp5.microphoneUnitHeader;
              cResult[13] = tmp10;
              cResult[14] = tmp15;
              cResult[15] = tmp21;
              tmp18 = tmp21;
            }
            const intl2 = intl3.intl;
            if (num > 0) {
              const obj7 = { gameTitle: quest.config.messages.gameTitle };
              formatToPlainStringResult = intl2.formatToPlainString(intl3.t["28Ql27"], obj7);
            } else {
              formatToPlainStringResult = intl2.string(intl3.t.YstzGO);
            }
            cResult[7] = num > 0;
            cResult[8] = quest;
            cResult[9] = formatToPlainStringResult;
            tmp13 = formatToPlainStringResult;
          }
        }
      }
      if (num > 0) {
        let items3;
        if (null != errorHints) {
          const items2 = [];
          items2[
            HermesBuiltin.arraySpread(
              items2,
              errorHints.map((message) => message.message),
              0,
            )
          ] = message;
          items3 = items2;
        }
        cResult[0] = errorHints;
        cResult[1] = num > 0;
        cResult[2] = quest;
        cResult[3] = message;
        cResult[4] = items3;
        arr = items3;
      }
      const tmp2Result = utils_QuestUtils;
      const isSponsoredPlayQuestResult = tmp2Result.isSponsoredPlayQuest(quest);
      const intl = intl3.intl;
      if (isSponsoredPlayQuestResult) {
        stringResult = intl.string(intl3.t.bUyEZZ);
      } else {
        const obj8 = { gameTitle: quest.config.messages.gameTitle };
        stringResult = intl.formatToPlainString(intl3.t.GXqvC1, obj8);
      }
      items3 = [stringResult];
    }
  : (arg0) => {
      let errorHints;
      let items1;
      let items2;
      let stringResult;
      ({ quest, errorHints } = arg0);
      const tmp2 = closure_14();
      let obj = hooks_QuestHooks;
      let num;
      const message = obj.useQuestHowToHelpArticle().message;
      if (errorHints != null) {
        num = errorHints.length;
      }
      if (num == null) {
        num = 0;
      }
      if (num > 0) {
        let items3;
        let formatToPlainStringResult;
        if (null != errorHints) {
          const items = [];
          items[
            HermesBuiltin.arraySpread(
              items,
              errorHints.map((message) => message.message),
              0,
            )
          ] = message;
          items3 = items;
        }
        let str = "text-feedback-warning";
        const obj2 = { style: tmp2.microphoneUnit, children: items2 };
        const obj3 = { style: tmp2.microphoneUnitHeader, children: items1 };
        const WarningIcon = WarningIcon2.WarningIcon;
        if (num > 0) {
          str = "text-feedback-critical";
        }
        const obj4 = { color: str };
        items1 = [authStore(WarningIcon, obj4)];
        const Text = Text_Text.Text;
        const intl2 = intl3.intl;
        if (num > 0) {
          const obj5 = { gameTitle: quest.config.messages.gameTitle };
          formatToPlainStringResult = intl2.formatToPlainString(intl3.t["28Ql27"], obj5);
        } else {
          formatToPlainStringResult = intl2.string(intl3.t.YstzGO);
        }
        const obj6 = {
          variant: "text-md/medium",
          color: "mobile-text-heading-primary",
          children: formatToPlainStringResult,
        };
        items1[1] = authStore(Text, obj6);
        items2 = [
          unpackModuleId(View, obj3),
          items3.map((children, index) => {
            const obj = { variant: "text-sm/normal", children };
            return closure_1_10(require("Text/Text").Text, obj, index);
          }),
        ];
        return unpackModuleId(View, obj2);
      }
      const tmp3Result = utils_QuestUtils;
      const isSponsoredPlayQuestResult = tmp3Result.isSponsoredPlayQuest(quest);
      const intl = intl3.intl;
      if (isSponsoredPlayQuestResult) {
        stringResult = intl.string(intl3.t.bUyEZZ);
      } else {
        const obj7 = { gameTitle: quest.config.messages.gameTitle };
        stringResult = intl.formatToPlainString(intl3.t.GXqvC1, obj7);
      }
      items3 = [stringResult];
    };
const context = react.createContext({ isInQuestBottomSheet: false });
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheet.tsx");

export default tmp5;
export { QuestBottomSheetStep };
export const useEnrolledQuestContentProps = tmp6;
export const QuestBottomSheetContent = tmp7;
export const QuestBottomSheetContext = context;
