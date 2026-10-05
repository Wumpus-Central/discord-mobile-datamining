// discord_app/modules/quests/native/QuestBottomSheet/QuestBottomSheet.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import WarningIcon from "../../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
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
import QuestBottomSheetTaskSelectDefault from "QuestBottomSheetTaskSelect.tsx";
import QuestBottomSheetConsoleConnectDefault from "QuestBottomSheetConsoleConnect.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import QuestStore from "../../QuestStore.tsx";

const require = globalThis.__r;

const QuestBottomSheetProgressCard = QuestBottomSheetProgressCardWatchTask(14962);
require = fn;
const useState = fn(19).useState;
const View = fn(17).View;
const QuestConstants = fn(5623);
({ QuestsExperimentLocations: closure_8, QuestTaskPlatform: closure_9 } = QuestConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const QuestBottomSheetStep = {
  TASK_SELECT: "TASK_SELECT",
  CONSOLE_CONNECT: "CONSOLE_CONNECT",
  TASK_STATUS: "TASK_STATUS",
};
const createStyles = fn(4890);
let obj2 = {
  contentContainer: { display: "flex", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 },
  microphoneUnit: null,
  microphoneUnitHeader: null,
};
let obj4 = { display: "flex", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
obj2.microphoneUnit = {
  display: "flex",
  gap: nativeDefault.space.PX_8,
  marginHorizontal: -nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  marginTop: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
let obj5 = {
  display: "flex",
  gap: nativeDefault.space.PX_8,
  marginHorizontal: -nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  marginTop: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.microphoneUnitHeader = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
let closure_14 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      _require = quest;
      const cResult = require("c").c(10);
      if (cResult[0] !== quest) {
        let obj2 = { quest, location: constants.QUEST_HOME_MOBILE };
        const questLogger = tmp(7193).getQuestLogger(obj2);
        cResult[0] = quest;
        cResult[1] = questLogger;
        let tmp4 = questLogger;
        const tmpResult = tmp(7193);
      } else {
        tmp4 = cResult[1];
      }
      closure_1 = tmp4;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        cResult[2] = items;
        let tmp7 = items;
      } else {
        tmp7 = cResult[2];
      }
      let obj = require("c");
      tmp = _require;
      [tmp9, dependencyMap] = useState(tmp7);
      const tmp8 = _slicedToArray(useState(tmp7), 2);
      [tmp11, _slicedToArray] = useState(false);
      if (cResult[3] === tmp4) {
        if (cResult[4] === quest) {
          let tmp12 = cResult[5];
        }
        if (cResult[6] === tmp9) {
          if (cResult[7] === tmp11) {
            if (cResult[8] === tmp12) {
              let tmp13 = cResult[9];
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
        closure_1_3(true);
        const result = QuestActionCreators.manuallyStartConsoleQuest(quest.id);
        const nextPromise = result.then((errorHints) => dependencyMap(errorHints.errorHints));
        result
          .then((errorHints) => dependencyMap(errorHints.errorHints))
          .catch((error) => {
            dependencyMap([]);
            logger.error("Failed to start console quest", error);
            const obj2 = { key: "START_DEFIBRILLATOR_ERROR", content: null, icon: null };
            const intl = closure_0(1126).intl;
            obj2.content = intl.string(closure_0(1126).t.CKsXk3);
            obj2.icon = logger(4807);
            logger(4568).open(obj2);
          })
          .finally(() => closure_1_3(false));
      };
      cResult[3] = tmp4;
      cResult[4] = quest;
      cResult[5] = fn;
      tmp12 = fn;
      const tmp10 = _slicedToArray(useState(false), 2);
    }
  : (quest) => {
      _require = quest;
      const questLogger = require("getQuestLogger").getQuestLogger({ quest, location: constants.QUEST_HOME_MOBILE });
      const tmp2 = quest(useState([]), 2);
      dependencyMap = tmp3;
      const tmp4 = quest(useState(false), 2);
      quest = tmp5;
      const obj3 = { errorHints: tmp2[0], isActive: tmp4[0], start: null };
      const items = [quest, questLogger, tmp4[1], tmp2[1]];
      obj3.start = noop.useCallback(() => {
        closure_3(true);
        const result = QuestActionCreators.manuallyStartConsoleQuest(quest.id);
        const nextPromise = result.then((errorHints) => dependencyMap(errorHints.errorHints));
        result
          .then((errorHints) => dependencyMap(errorHints.errorHints))
          .catch((error) => {
            dependencyMap([]);
            logger.error("Failed to start console quest", error);
            const obj2 = { key: "START_DEFIBRILLATOR_ERROR", content: null, icon: null };
            const intl = closure_0(1126).intl;
            obj2.content = intl.string(closure_0(1126).t.CKsXk3);
            obj2.icon = questLogger(4807);
            questLogger(4568).open(obj2);
          })
          .finally(() => closure_1_3(false));
      }, items);
      return obj3;
    };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      const obj = c;
      const cResult = obj.c(36);
      quest = quest.quest;
      const userStatus = quest.userStatus;
      let completedAt;
      if (userStatus != null) {
        completedAt = userStatus.completedAt;
      }
      const xboxAndPlaystationAccounts = hooks_QuestHooks.useConnectedAccounts().xboxAndPlaystationAccounts;
      if (cResult[0] === quest) {
        if (cResult[1] === xboxAndPlaystationAccounts) {
          const questTaskDetails = hooks_QuestHooks.useQuestTaskDetails(quest);
          const tmpResult5 = hooks_QuestHooks;
          const isQuestProgressing = hooks_QuestHooks.useIsQuestProgressing(quest);
          const tmpResult6 = hooks_QuestHooks;
          const tmpResult7 = hooks_QuestHooks;
          [tmp13, r10055, tmp14] = hooks_QuestHooks.useTaskPlatformScreen(quest, questTaskDetails);
          importDefault = tmp14;
          let tmp16 = 0 === arr.length;
          if (tmp16) {
            tmp16 = !tmp5;
          }
          if (tmp16) {
            tmp16 = tmp13 === QuestTypes.TaskPlatformScreen.CONSOLE;
          }
          if (!tmp16) {
            tmp16 = quest.initialStep === obj.CONSOLE_CONNECT;
          }
          const tmp12 = _slicedToArray(hooks_QuestHooks.useTaskPlatformScreen(quest, questTaskDetails), 3);
          [tmp19, tmp20] = noop.useState(tmp16);
          dependencyMap = tmp20;
          let tmp21 = isQuestProgressing;
          if (!isQuestProgressing) {
            tmp21 = questTaskDetails.progressSeconds > 0;
          }
          const tmp11Result = _slicedToArray(noop.useState(tmp16), 2);
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
          if (!tmp21) {
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
            tmp37[2] = tmp35;
            cResult[12] = tmp35;
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
              if (!tmp21) {
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
          tmp22 = 0 !== cResult[2].length || tmp5 || tmp13 !== QuestTypes.TaskPlatformScreen.CONSOLE || tmp19;
        }
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
      const tmpResult = hooks_QuestHooks;
      const tmpResult8 = QuestPlatformUtils;
      const found = QuestPlatformUtils.supportedConsoles(quest).filter(tmp7);
      cResult[0] = quest;
      cResult[1] = xboxAndPlaystationAccounts;
      cResult[2] = found;
      const supportedConsolesResult = QuestPlatformUtils.supportedConsoles(quest);
    }
  : (quest) => {
      let xboxAndPlaystationAccounts;
      let first;
      quest = undefined;
      noop = undefined;
      let first1;
      closure_6 = undefined;
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
      if (userStatus != null) {
        completedAt = userStatus.completedAt;
      }
      xboxAndPlaystationAccounts = quest(first[15]).useConnectedAccounts().xboxAndPlaystationAccounts;
      let items = [quest, xboxAndPlaystationAccounts];
      const memo = noop.useMemo(
        () =>
          QuestPlatformUtils.supportedConsoles(quest).filter((item) => {
            closure_0 = item;
            return null != xboxAndPlaystationAccounts.find((type) => type.type === closure_0);
          }),
        items,
      );
      let obj = quest(first[15]);
      const questTaskDetails = quest(first[15]).useQuestTaskDetails(quest);
      let obj3 = quest(first[15]);
      isQuestProgressing = quest(first[15]).useIsQuestProgressing(quest);
      const obj4 = quest(first[15]);
      const tmp8 = quest(quest(first[15]).useTaskPlatformScreen(quest, questTaskDetails), 3);
      first = tmp8[0];
      quest = tmp10;
      noop = tmp11;
      let tmp12 = 0 === memo.length;
      if (tmp12) {
        tmp12 = !tmp2;
      }
      if (tmp12) {
        tmp12 = first === tmp3(tmp4[17]).TaskPlatformScreen.CONSOLE;
      }
      if (!tmp12) {
        tmp12 = quest.initialStep === memo3.CONSOLE_CONNECT;
      }
      const tmp7Result = quest(noop.useState(tmp12), 2);
      first1 = tmp7Result[0];
      closure_6 = tmp16;
      if (!isQuestProgressing) {
        isQuestProgressing = questTaskDetails.progressSeconds > 0;
      }
      const obj5 = quest(first[15]);
      if (!tmp17) {
        tmp16(true);
      }
      const items1 = [tmp8[2]];
      onBack = obj2.useCallback(() => {
        closure_6(false);
        closure_4(null);
      }, items1);
      memo1 = obj2.useMemo(() => {
        const items = [{ type: memo3.TASK_STATUS, shouldShow: true }];
        return items;
      }, []);
      const items2 = [first1, isQuestProgressing];
      memo2 = obj2.useMemo(() => {
        obj = { type: obj.CONSOLE_CONNECT, shouldShow: first1, onNext: hideConsoleSelect };
        const items = [obj];
        const obj2 = { type: obj.TASK_STATUS, shouldShow: true, onBack: null };
        let tmp;
        if (!isQuestProgressing) {
          tmp = showConsoleSelect;
        }
        obj2.onBack = tmp;
        items[1] = obj2;
        return items;
      }, items2);
      const items3 = [first, first1, isQuestProgressing, onBack];
      memo3 = obj2.useMemo(() => {
        obj = { type: obj.TASK_SELECT, shouldShow: first === QuestTypes.TaskPlatformScreen.SELECT };
        const items = [obj, ,];
        const obj2 = {
          type: obj.CONSOLE_CONNECT,
          shouldShow: first === QuestTypes.TaskPlatformScreen.CONSOLE && first1,
          onBack,
          onNext: hideConsoleSelect,
        };
        let tmp6 = onBack;
        items[1] = obj2;
        const obj3 = { type: obj.TASK_STATUS, shouldShow: true, onBack: null };
        let tmp7;
        if (!isQuestProgressing) {
          if (first === QuestTypes.TaskPlatformScreen.CONSOLE) {
            tmp6 = showConsoleSelect;
          }
          tmp7 = tmp6;
        }
        obj3.onBack = tmp7;
        items[2] = obj3;
        return items;
      }, items3);
      tmp17 =
        0 !== memo.length || null != completedAt || first !== quest(first[17]).TaskPlatformScreen.CONSOLE || first1;
      hasWatchVideoOnMobileTasks = quest(first[18]).useHasWatchVideoOnMobileTasks(quest.config);
      const tmp3Result = quest(first[18]);
      isMobileActivityQuest = quest(first[18]).useMobileActivityQuest(quest).isMobileActivityQuest;
      const items4 = [tmp8[1], memo3, memo1, memo2, hasWatchVideoOnMobileTasks, isMobileActivityQuest];
      const memo4 = obj2.useMemo(() => {
        let hasItem = 1 === length.length;
        if (hasItem) {
          hasItem = length.includes(constants2.DESKTOP);
        }
        let hasItem1 = 1 === length.length;
        if (hasItem1) {
          hasItem1 = length.includes(constants2.CONSOLE);
        }
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
      const obj6 = { onBack, onNext: null };
      let onNext;
      if (memo4 != null) {
        onNext = memo4.onNext;
      }
      obj6.onNext = onNext;
      items5[1] = obj6;
      return items5;
    };
fn(558);
let obj6 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(39);
      ({ quest, initialStep, sourceQuestContent } = arg0);
      closure_14();
      if (cResult[0] === initialStep) {
        if (cResult[1] === quest) {
          if (cResult[2] === sourceQuestContent) {
            let tmp5 = cResult[3];
          }
          ({ step, defibrillator, stepActions, handleTaskSelect, showMicrophone } = closure_18(tmp5));
          const tmp7 = closure_18(tmp5);
          const hasWatchVideoOnMobileTasks = QuestHooks.useHasWatchVideoOnMobileTasks(quest.config);
          if (cResult[4] !== quest) {
            const hasWatchVideoTasksResult = QuestTaskUtils.hasWatchVideoTasks(quest);
            cResult[4] = quest;
            cResult[5] = hasWatchVideoTasksResult;
            let tmp9 = hasWatchVideoTasksResult;
            const tmpResult3 = QuestTaskUtils;
          } else {
            tmp9 = cResult[5];
          }
          if (cResult[6] !== quest) {
            const isInGameQuestResult = QuestTaskUtils.isInGameQuest(quest);
            cResult[6] = quest;
            cResult[7] = isInGameQuestResult;
            let tmp11 = isInGameQuestResult;
            const tmpResult4 = QuestTaskUtils;
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
          if (!tmp11) {
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
              tmp29 = v65535(QuestBottomSheetFooterDefault, obj2);
            }
            cResult[13] = defibrillator;
            cResult[14] = quest;
            cResult[15] = tmp19;
            cResult[16] = sourceQuestContent;
            cResult[17] = step;
            cResult[18] = stepActions;
            cResult[19] = tmp29;
          }
          const obj3 = { quest, step, location: constants.QUEST_HOME_MOBILE };
          const tmp27 = v65535(QuestBottomSheetHeaderDefault, obj3);
          cResult[10] = quest;
          cResult[11] = step;
          cResult[12] = tmp27;
          const tmpResult = QuestHooks;
        }
      }
      const obj4 = { quest, initialStep, location: constants.QUEST_HOME_MOBILE, sourceQuestContent };
      cResult[0] = initialStep;
      cResult[1] = quest;
      cResult[2] = sourceQuestContent;
      cResult[3] = obj4;
      tmp5 = obj4;
    }
  : (initialStep) => {
      ({ quest, sourceQuestContent } = initialStep);
      const obj = {
        quest,
        initialStep: initialStep.initialStep,
        location: constants.QUEST_HOME_MOBILE,
        sourceQuestContent,
      };
      const tmp3 = closure_18(obj);
      ({ step, defibrillator, stepActions } = tmp3);
      ({ handleTaskSelect, showMicrophone } = tmp3);
      const tmp = closure_14();
      const hasWatchVideoOnMobileTasks = QuestHooks.useHasWatchVideoOnMobileTasks(quest.config);
      const hasWatchVideoTasksResult = QuestTaskUtils.hasWatchVideoTasks(quest);
      const tmp8 = _slicedToArray(useState(0), 2);
      closure_0 = tmp8[1];
      const obj5 = { value: noop.useMemo(() => ({ isInQuestBottomSheet: true }), []), children: null };
      const obj6 = {
        header: v65535(QuestBottomSheetHeaderDefault, { quest, step, location: constants.QUEST_HOME_MOBILE }),
        footer: null,
        startExpanded: true,
        children: null,
      };
      let tmp9Result = null;
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
          tmp9Result = v65535(QuestBottomSheetFooterDefault, obj8);
        } else {
          tmp9Result = null;
        }
      }
      obj6.footer = tmp9Result;
      const items = [tmp.contentContainer];
      let num = 0;
      if (step !== obj.TASK_SELECT) {
        num = tmp8[0];
      }
      const obj9 = {
        style: items,
        children: v65535(closure_19, {
          defibrillator,
          quest,
          handleTaskSelect,
          location: constants.QUEST_HOME_MOBILE,
          showMicrophone,
          sourceQuestContent,
          step,
        }),
      };
      items[1] = { paddingBottom: num };
      obj6.children = v65535(View, obj9);
      obj5.children = v65535(Sheet_BottomSheet.BottomSheet, obj6);
      return v65535(context.Provider, obj5);
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      const cResult = quest(trackQuestContentClickedWithImpression[9]).c(17);
      quest = quest.quest;
      ({ initialStep, location: _location, sourceQuestContent } = quest);
      let obj = quest(trackQuestContentClickedWithImpression[9]);
      const tmp = quest;
      const tmp2 = trackQuestContentClickedWithImpression;
      trackQuestContentClickedWithImpression = quest(
        trackQuestContentClickedWithImpression[25],
      ).useTrackQuestContentClickedWithImpression();
      let obj2 = quest(trackQuestContentClickedWithImpression[25]);
      const getQuestImpressionId = quest(trackQuestContentClickedWithImpression[26]).useGetQuestImpressionId();
      const obj3 = quest(trackQuestContentClickedWithImpression[26]);
      const questTaskDetails = quest(trackQuestContentClickedWithImpression[15]).useQuestTaskDetails(quest);
      const obj4 = quest(trackQuestContentClickedWithImpression[15]);
      const isQuestProgressing = quest(trackQuestContentClickedWithImpression[15]).useIsQuestProgressing(quest);
      const obj5 = quest(trackQuestContentClickedWithImpression[15]);
      const tmp9 = getQuestImpressionId(
        quest(trackQuestContentClickedWithImpression[15]).useTaskPlatformScreen(quest, questTaskDetails),
        3,
      );
      closure_4 = tmp10;
      quest(trackQuestContentClickedWithImpression[18]);
      if (cResult[0] === initialStep) {
        if (cResult[1] === _location) {
          if (cResult[2] === quest) {
            let tmp13 = cResult[3];
          }
          [tmp16, tmp17] = tmp8(closure_16(tmp13), 2);
          const tmp19 = closure_15(quest);
          const userStatus = quest.userStatus;
          let completedAt;
          if (userStatus != null) {
            completedAt = userStatus.completedAt;
          }
          const tmp22 =
            null == completedAt &&
            !isQuestProgressing &&
            tmp9[0] === tmp(tmp2[17]).TaskPlatformScreen.CONSOLE &&
            !tmp12;
          if (cResult[4] === getQuestImpressionId) {
            if (cResult[5] === quest.id) {
              if (cResult[6] === tmp10) {
                if (cResult[7] === sourceQuestContent) {
                  if (cResult[8] === trackQuestContentClickedWithImpression) {
                    let tmp23 = cResult[9];
                  }
                  if (cResult[10] === tmp19) {
                    if (cResult[11] === tmp23) {
                      if (cResult[12] === quest) {
                        if (cResult[13] === tmp22) {
                          if (cResult[14] === tmp16) {
                            if (cResult[15] === tmp17) {
                              let tmp24 = cResult[16];
                            }
                            return tmp24;
                          }
                        }
                      }
                    }
                  }
                  const obj7 = {
                    quest,
                    defibrillator: tmp19,
                    step: tmp16,
                    stepActions: tmp17,
                    showMicrophone: tmp22,
                    handleTaskSelect: tmp23,
                  };
                  cResult[10] = tmp19;
                  cResult[11] = tmp23;
                  cResult[12] = quest;
                  cResult[13] = tmp22;
                  cResult[14] = tmp16;
                  cResult[15] = tmp17;
                  cResult[16] = obj7;
                  tmp24 = obj7;
                }
              }
            }
          }
          const fn = function v(arg0) {
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
            if (
              tmp4Result.shouldMigrateToAdAnalyticsInterface(
                tmp4(7224).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
                "quest_bottom_sheet",
              )
            ) {
              const obj = {
                type: tmp4(7223).AdUserActionType.CLICK_INTERNAL,
                adCreativeType: tmp4(5630).AdCreativeType.QUEST,
                adCreativeId: quest.id,
                questContentCTA: DESELECT_PLATFORM,
                surfaceId: tmp4(5626).QuestContent.QUEST_BOTTOM_SHEET,
                sourceQuestContent,
                impressionId: getQuestImpressionId(),
              };
              tmp4(7213).captureAdUserAction(obj);
              const tmp4Result2 = tmp4(7213);
            } else {
              const obj2 = {
                questId: quest.id,
                questContent: tmp4(5626).QuestContent.QUEST_BOTTOM_SHEET,
                questContentCTA: DESELECT_PLATFORM,
                sourceQuestContent,
              };
              trackQuestContentClickedWithImpression(obj2);
            }
            closure_4(arg0);
            tmp4Result = tmp4(7224);
          };
          cResult[4] = getQuestImpressionId;
          cResult[5] = quest.id;
          cResult[6] = tmp10;
          cResult[7] = sourceQuestContent;
          cResult[8] = trackQuestContentClickedWithImpression;
          cResult[9] = fn;
          tmp23 = fn;
          const tmp8Result = tmp8(closure_16(tmp13), 2);
        }
      }
      const obj8 = { quest, initialStep, location: _location };
      cResult[0] = initialStep;
      cResult[1] = _location;
      cResult[2] = quest;
      cResult[3] = obj8;
      tmp13 = obj8;
      const obj6 = quest(trackQuestContentClickedWithImpression[15]);
      tmp8 = getQuestImpressionId;
    }
  : (quest) => {
      quest = quest.quest;
      const sourceQuestContent = quest.sourceQuestContent;
      quest = undefined;
      ({ initialStep, location: _location } = quest);
      dependencyMap = quest(10954).useTrackQuestContentClickedWithImpression();
      let obj = quest(10954);
      const tmp = quest;
      quest = quest(10916).useGetQuestImpressionId();
      let obj2 = quest(10916);
      const questTaskDetails = quest(10911).useQuestTaskDetails(quest);
      const obj3 = quest(10911);
      const isQuestProgressing = quest(10911).useIsQuestProgressing(quest);
      const obj4 = quest(10911);
      const tmp5 = quest(quest(10911).useTaskPlatformScreen(quest, questTaskDetails), 3);
      closure_4 = tmp5[2];
      const obj5 = quest(10911);
      const hasWatchVideoOnMobileTasks = quest(14892).useHasWatchVideoOnMobileTasks(quest.config);
      const obj6 = quest(14892);
      [tmp8, tmp9] = quest(closure_16({ quest, initialStep, location: _location }), 2);
      const userStatus = quest.userStatus;
      let completedAt;
      const tmp7 = quest(closure_16({ quest, initialStep, location: _location }), 2);
      if (userStatus != null) {
        completedAt = userStatus.completedAt;
      }
      const tmp10 = closure_15(quest);
      const tmp12 =
        null == completedAt &&
        !isQuestProgressing &&
        tmp5[0] === tmp(5626).TaskPlatformScreen.CONSOLE &&
        !hasWatchVideoOnMobileTasks;
      return {
        quest,
        defibrillator: tmp10,
        step: tmp8,
        stepActions: tmp9,
        showMicrophone:
          null == completedAt &&
          !isQuestProgressing &&
          tmp5[0] === tmp(5626).TaskPlatformScreen.CONSOLE &&
          !hasWatchVideoOnMobileTasks,
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
          if (
            tmp4Result.shouldMigrateToAdAnalyticsInterface(
              tmp4(7224).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
              "quest_bottom_sheet",
            )
          ) {
            const obj = {
              type: tmp4(7223).AdUserActionType.CLICK_INTERNAL,
              adCreativeType: tmp4(5630).AdCreativeType.QUEST,
              adCreativeId: quest.id,
              questContentCTA: DESELECT_PLATFORM,
              surfaceId: tmp4(5626).QuestContent.QUEST_BOTTOM_SHEET,
              sourceQuestContent,
              impressionId: closure_3(),
            };
            tmp4(7213).captureAdUserAction(obj);
            const tmp4Result2 = tmp4(7213);
          } else {
            const obj2 = {
              questId: quest.id,
              questContent: tmp4(5626).QuestContent.QUEST_BOTTOM_SHEET,
              questContentCTA: DESELECT_PLATFORM,
              sourceQuestContent,
            };
            closure_2(obj2);
          }
          closure_4(arg0);
          tmp4Result = tmp4(7224);
        },
      };
    };
let closure_18 = tmp5;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let QuestBottomSheetProgressCardWatchTask = require;
      const obj = c;
      const cResult = obj.c(27);
      ({ defibrillator, quest, handleTaskSelect, showMicrophone, sourceQuestContent, step } = arg0);
      const result = QuestHooks;
      const hasWatchVideoOnMobileTasks = result.useHasWatchVideoOnMobileTasks(quest.config);
      if (hasWatchVideoOnMobileTasks) {
        if (cResult[0] === quest) {
        }
        QuestBottomSheetProgressCardWatchTask = QuestBottomSheetProgressCard.QuestBottomSheetProgressCardWatchTask;
        const obj2 = { quest, sourceQuestContent };
        const tmp13 = v65535(QuestBottomSheetProgressCardWatchTask, obj2);
        cResult[0] = quest;
        cResult[1] = sourceQuestContent;
        cResult[2] = tmp13;
      } else {
        const result1 = QuestTaskUtils;
        if (result1.isInGameQuest(quest)) {
          if (cResult[3] === quest) {
            if (cResult[4] === sourceQuestContent) {
              let tmp8 = cResult[5];
            }
            let tmp5 = tmp8;
          }
          const obj3 = { quest, sourceQuestContent };
          const tmp10 = v65535(QuestBottomSheetProgressCard.QuestBottomSheetProgressCardInGameTask, obj3);
          cResult[3] = quest;
          cResult[4] = sourceQuestContent;
          cResult[5] = tmp10;
          tmp8 = tmp10;
        } else {
          if (cResult[6] === quest) {
            if (cResult[7] === sourceQuestContent) {
              tmp5 = cResult[8];
            }
          }
          const obj4 = { quest, sourceQuestContent };
          const tmp7 = v65535(QuestBottomSheetProgressCard.QuestBottomSheetProgressCardPlayStreamTask, obj4);
          cResult[6] = quest;
          cResult[7] = sourceQuestContent;
          cResult[8] = tmp7;
          tmp5 = tmp7;
        }
        if (cResult[9] === handleTaskSelect) {
          if (cResult[10] === step) {
            let tmp15 = cResult[11];
          }
          if (cResult[12] === quest) {
            if (cResult[13] === sourceQuestContent) {
              if (cResult[14] === step) {
                let tmp20 = cResult[15];
              }
              let errorHints;
              if (defibrillator != null) {
                errorHints = defibrillator.errorHints;
              }
              if (cResult[16] === errorHints) {
                if (cResult[17] === quest) {
                  if (cResult[18] === hasWatchVideoOnMobileTasks) {
                    if (cResult[19] === tmp3) {
                      if (cResult[20] === step) {
                        if (cResult[21] === tmp5) {
                          let tmp27 = cResult[22];
                        }
                        if (cResult[23] === tmp15) {
                          if (cResult[24] === tmp20) {
                            if (cResult[25] === tmp27) {
                              let tmp37 = cResult[26];
                            }
                            return tmp37;
                          }
                        }
                        const obj5 = { children: null };
                        const items = [tmp15, tmp20, tmp27];
                        obj5.children = items;
                        const tmp40 = closure_1_11(__initData, obj5);
                        cResult[23] = tmp15;
                        cResult[24] = tmp20;
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
                const items1 = [tmp5];
                let tmp33Result = tmp3;
                if (tmp3) {
                  tmp33Result = !hasWatchVideoOnMobileTasks;
                }
                if (tmp33Result) {
                  const obj6 = { quest, errorHints: null };
                  let errorHints1;
                  if (defibrillator != null) {
                    errorHints1 = defibrillator.errorHints;
                  }
                  obj6.errorHints = errorHints1;
                  tmp33Result = v65535(closure_20, obj6);
                }
                const obj7 = { children: null };
                items1[1] = tmp33Result;
                obj7.children = items1;
                tmp30Result = closure_1_11(View, obj7);
              }
              let errorHints2;
              if (defibrillator != null) {
                errorHints2 = defibrillator.errorHints;
              }
              cResult[16] = errorHints2;
              cResult[17] = quest;
              cResult[18] = hasWatchVideoOnMobileTasks;
              cResult[19] = tmp3;
              cResult[20] = step;
              cResult[21] = tmp5;
              cResult[22] = tmp30Result;
              tmp27 = tmp30Result;
            }
          }
          let tmp22 = step === obj.CONSOLE_CONNECT;
          if (tmp22) {
            const obj8 = { quest, step, sourceQuestContent };
            tmp22 = v65535(QuestBottomSheetConsoleConnectDefault, obj8);
          }
          cResult[12] = quest;
          cResult[13] = sourceQuestContent;
          cResult[14] = step;
          cResult[15] = tmp22;
          tmp20 = tmp22;
        }
        let tmp17 = step === obj.TASK_SELECT;
        if (tmp17) {
          const obj9 = { onTaskSelect: handleTaskSelect };
          tmp17 = v65535(QuestBottomSheetTaskSelectDefault, obj9);
        }
        cResult[9] = handleTaskSelect;
        cResult[10] = step;
        cResult[11] = tmp17;
        tmp15 = tmp17;
      }
    }
  : (showMicrophone) => {
      ({ defibrillator, quest } = showMicrophone);
      let flag = showMicrophone.showMicrophone;
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
      const memo = noop.useMemo(() => {
        if (hasWatchVideoOnMobileTasks) {
          const obj2 = { quest, sourceQuestContent };
          let tmp5Result = v65535(QuestBottomSheetProgressCard.QuestBottomSheetProgressCardWatchTask, obj2);
        } else {
          const tmp8 = QuestBottomSheetProgressCard;
          if (isInGameQuestResult) {
            const obj3 = { quest, sourceQuestContent };
            tmp5Result = v65535(tmp8.QuestBottomSheetProgressCardInGameTask, obj3);
          } else {
            const obj4 = { quest, sourceQuestContent };
            tmp5Result = v65535(tmp8.QuestBottomSheetProgressCardPlayStreamTask, obj4);
          }
          isInGameQuestResult = QuestTaskUtils.isInGameQuest(quest);
        }
        return tmp5Result;
      }, items);
      if (tmp7) {
        let obj2 = { onTaskSelect: showMicrophone.handleTaskSelect };
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
          let obj4 = { quest, errorHints: null };
          let errorHints;
          if (defibrillator != null) {
            errorHints = defibrillator.errorHints;
          }
          obj4.errorHints = errorHints;
          flag = closure_10(closure_20, obj4);
        }
        const obj5 = { children: null };
        items2[1] = flag;
        obj5.children = items2;
        tmp4Result = closure_11(View, obj5);
      }
      children[2] = tmp4Result;
      return closure_11(closure_12, { children });
    };
let closure_19 = tmp6;
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(22);
      ({ quest, errorHints } = arg0);
      const tmp4 = closure_14();
      const message = hooks_QuestHooks.useQuestHowToHelpArticle().message;
      let num;
      if (errorHints != null) {
        num = errorHints.length;
      }
      if (num == null) {
        num = 0;
      }
      let num2 = 0;
      if (cResult[0] === errorHints) {
        if (cResult[1] === tmp5) {
          if (cResult[2] === quest) {
            if (cResult[3] === message) {
              let str = "text-feedback-warning";
              if (tmp5) {
                str = "text-feedback-critical";
              }
              if (cResult[5] !== str) {
                const obj3 = { color: str };
                const tmp11 = v65535(WarningIcon.WarningIcon, obj3);
                cResult[5] = str;
                cResult[6] = tmp11;
                let tmp9 = tmp11;
              } else {
                tmp9 = cResult[6];
              }
              if (cResult[7] === tmp5) {
                if (cResult[8] === quest) {
                  if (cResult[10] !== cResult[9]) {
                    const obj4 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: tmp12 };
                    const tmp17 = v65535(Text_Text.Text, obj4);
                    cResult[10] = tmp12;
                    cResult[11] = tmp17;
                    let tmp15 = tmp17;
                  } else {
                    tmp15 = cResult[11];
                  }
                  if (cResult[12] === tmp4.microphoneUnitHeader) {
                    if (cResult[13] === tmp9) {
                      if (cResult[14] === tmp15) {
                        let tmp18 = cResult[15];
                      }
                      if (cResult[16] !== arr) {
                        const mapped = arr.map((children, index) =>
                          closure_1_10(require("Text/Text").Text, { variant: "text-sm/normal", children }, index),
                        );
                        cResult[16] = arr;
                        cResult[17] = mapped;
                        let tmp22 = mapped;
                      } else {
                        tmp22 = cResult[17];
                      }
                      if (cResult[18] === tmp4.microphoneUnit) {
                        if (cResult[19] === tmp18) {
                          if (cResult[20] === tmp22) {
                            let tmp24 = cResult[21];
                          }
                          return tmp24;
                        }
                      }
                      const obj5 = { style: tmp4.microphoneUnit, children: null };
                      const items = [tmp18, tmp22];
                      obj5.children = items;
                      const tmp27 = closure_1_11(View, obj5);
                      cResult[18] = tmp4.microphoneUnit;
                      cResult[19] = tmp18;
                      cResult[20] = tmp22;
                      cResult[21] = tmp27;
                      tmp24 = tmp27;
                    }
                  }
                  const obj6 = { style: tmp4.microphoneUnitHeader, children: null };
                  const items1 = [tmp9, tmp15];
                  obj6.children = items1;
                  const tmp21 = closure_1_11(View, obj6);
                  cResult[12] = tmp4.microphoneUnitHeader;
                  cResult[13] = tmp9;
                  cResult[14] = tmp15;
                  cResult[15] = tmp21;
                  tmp18 = tmp21;
                }
              }
              const intl2 = util.intl;
              if (tmp5) {
                const obj7 = { gameTitle: quest.config.messages.gameTitle };
                let formatToPlainStringResult = intl2.formatToPlainString(util.t["28Ql27"], obj7);
              } else {
                formatToPlainStringResult = intl2.string(util.t.YstzGO);
              }
              cResult[7] = tmp5;
              cResult[8] = quest;
              cResult[9] = formatToPlainStringResult;
            }
          }
        }
      }
      if (num <= 0) {
        const tmpResult = utils_QuestUtils;
        const intl = util.intl;
        if (isSponsoredPlayQuestResult) {
          let stringResult = intl.string(util.t.bUyEZZ);
        } else {
          const obj8 = { gameTitle: quest.config.messages.gameTitle };
          stringResult = intl.formatToPlainString(util.t.GXqvC1, obj8);
        }
        let items2 = [stringResult];
        cResult[num2] = errorHints;
        cResult[1] = tmp5;
        cResult[2] = quest;
        cResult[3] = message;
        num2 = 4;
        cResult[4] = items2;
        isSponsoredPlayQuestResult = utils_QuestUtils.isSponsoredPlayQuest(quest);
      }
      const items3 = [];
      items3[
        HermesBuiltin.arraySpread(
          errorHints.map((message) => message.message),
          0,
        )
      ] = message;
      items2 = items3;
    }
  : (arg0) => {
      ({ quest, errorHints } = arg0);
      const tmp = closure_14();
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
          items[
            HermesBuiltin.arraySpread(
              errorHints.map((message) => message.message),
              0,
            )
          ] = obj.useQuestHowToHelpArticle().message;
          let items3 = items;
        }
        const obj2 = { style: tmp.microphoneUnit, children: null };
        const obj3 = { style: tmp.microphoneUnitHeader, children: null };
        let str = "text-feedback-warning";
        if (tmp4) {
          str = "text-feedback-critical";
        }
        const obj4 = { color: str };
        const items1 = [v65535(WarningIcon.WarningIcon, obj4)];
        const intl2 = util.intl;
        if (tmp4) {
          const obj5 = { gameTitle: quest.config.messages.gameTitle };
          let formatToPlainStringResult = intl2.formatToPlainString(util.t["28Ql27"], obj5);
        } else {
          formatToPlainStringResult = intl2.string(util.t.YstzGO);
        }
        const obj6 = {
          variant: "text-md/medium",
          color: "mobile-text-heading-primary",
          children: formatToPlainStringResult,
        };
        items1[1] = v65535(Text_Text.Text, obj6);
        obj3.children = items1;
        const items2 = [
          closure_1_11(View, obj3),
          items3.map((children, index) =>
            closure_1_10(require("Text/Text").Text, { variant: "text-sm/normal", children }, index),
          ),
        ];
        obj2.children = items2;
        return closure_1_11(View, obj2);
      }
      obj = hooks_QuestHooks;
      const tmp2Result = utils_QuestUtils;
      const intl = util.intl;
      if (isSponsoredPlayQuestResult) {
        let stringResult = intl.string(util.t.bUyEZZ);
      } else {
        const obj7 = { gameTitle: quest.config.messages.gameTitle };
        stringResult = intl.formatToPlainString(util.t.GXqvC1, obj7);
      }
      items3 = [stringResult];
      isSponsoredPlayQuestResult = utils_QuestUtils.isSponsoredPlayQuest(quest);
    };
const context = noop.createContext({ isInQuestBottomSheet: false });
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (questId) => {
      let QUEST_BOTTOM_SHEET = sourceQuestContent;
      const cResult = questId(sourceQuestContent[9]).c(12);
      questId = questId.questId;
      const initialStep = questId.initialStep;
      sourceQuestContent = questId.sourceQuestContent;
      const questContentPosition = questId.questContentPosition;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [QuestStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== questId) {
        const fn = function n() {
          return QuestStore.getQuest(questId);
        };
        cResult[1] = questId;
        cResult[2] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[2];
      }
      const obj = questId(sourceQuestContent[9]);
      const stateFromStores = questId(QUEST_BOTTOM_SHEET[19]).useStateFromStores(first, tmp5);
      if (null == stateFromStores) {
        return null;
      } else {
        if (cResult[3] === initialStep) {
          if (cResult[4] === stateFromStores) {
            if (cResult[5] === sourceQuestContent) {
              let tmp7 = cResult[6];
            }
            class T {
              constructor() {
                obj = { quest: closure_3, initialStep, sourceQuestContent };
                return jsx(f69012, obj);
              }
            }
            const obj2 = {
              overrideVisibility: true,
              questOrQuests: stateFromStores,
              questContent: null,
              questContentPosition: null,
              sourceQuestContent: null,
              children: null,
            };
            QUEST_BOTTOM_SHEET = tmp(QUEST_BOTTOM_SHEET[17]).QuestContent.QUEST_BOTTOM_SHEET;
            obj2.questContent = QUEST_BOTTOM_SHEET;
            obj2.questContentPosition = questContentPosition;
            obj2.sourceQuestContent = sourceQuestContent;
            obj2.children = tmp7;
            const tmp10 = closure_10(tmp(QUEST_BOTTOM_SHEET[20]).QuestContentImpressionTrackerNative, obj2);
            cResult[7] = stateFromStores;
            cResult[8] = questContentPosition;
            cResult[9] = sourceQuestContent;
            cResult[10] = tmp7;
            cResult[11] = tmp10;
          }
        }
        class T {
          constructor() {
            obj = { quest: closure_3, initialStep, sourceQuestContent };
            return jsx(f69012, obj);
          }
        }
        cResult[3] = initialStep;
        cResult[4] = stateFromStores;
        cResult[5] = sourceQuestContent;
        cResult[6] = T;
        tmp7 = T;
      }
      const tmpResult = questId(QUEST_BOTTOM_SHEET[19]);
    }
  : (questContentPosition) => {
      ({ questId: require, initialStep: importDefault, sourceQuestContent } = questContentPosition);
      const items = [QuestStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => QuestStore.getQuest(_require));
      let tmp4 = null;
      if (null != stateFromStores) {
        const obj2 = {
          overrideVisibility: true,
          questOrQuests: stateFromStores,
          questContent: require("QuestTypes").QuestContent.QUEST_BOTTOM_SHEET,
          questContentPosition: questContentPosition.questContentPosition,
          sourceQuestContent,
          children() {
            return v65535(closure_17, { quest: stateFromStores, initialStep, sourceQuestContent });
          },
        };
        tmp4 = closure_10(require("QuestContentImpressionTracker").QuestContentImpressionTrackerNative, obj2);
      }
      return tmp4;
    };
export { QuestBottomSheetStep };
export const useEnrolledQuestContentProps = tmp5;
export const QuestBottomSheetContent = tmp6;
export const QuestBottomSheetContext = context;
