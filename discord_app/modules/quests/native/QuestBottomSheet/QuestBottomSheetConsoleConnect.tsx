// === Module 14980: QuestBottomSheetConsoleConnect ===

// Module 14980 (QuestBottomSheetConsoleConnect)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import QuestTypes from "QuestTypes" /* 5633 */;
import AdCreativeType from "AdCreativeType" /* 5637 */;
import TableRow from "TableRow" /* 6000 */;
import TableRowGroup from "TableRowGroup" /* 6081 */;
import openUserSettings from "openUserSettings" /* 6895 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7225 */;
import captureAdUserAction from "captureAdUserAction" /* 7226 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7236 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7237 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 8385 */;
import PlaystationNeutralIcon from "PlaystationNeutralIcon" /* 8579 */;
import authorizeConnectionDefault from "authorizeConnection" /* 8764 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 10931 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["onPress"];
const View = fn(17).View;
const Constants = fn(1085);
({ PlatformTypes: metroRequire, UserSettingsSections: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs, Fragment } = jsxProd);
const PLATFORM_XBOX = nativeDefault.unsafe_rawColors.PLATFORM_XBOX;
const PLATFORM_PLAYSTATION = nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION;
const createStyles = fn(4896);
let obj2 = { platformButtonsContainer: { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_16, justifyContent: "space-between" }, platformButton: { flex: 1, display: "flex", justifyContent: "center", alignItems: "center" } };
const styles = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = onConsoleSelect(576).c(7);
  ({ consoles, onConsoleSelect } = arg0);
  if (cResult[0] === consoles) {
    if (cResult[1] === onConsoleSelect) {
      if (cResult[5] !== cResult[2]) {
        const obj2 = { hasIcons: true, children: tmp4 };
        const tmp9 = closure_8(onConsoleSelect(6081).TableRowGroup, obj2);
        cResult[5] = tmp4;
        cResult[6] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[6];
      }
      return tmp7;
    }
  }
  if (cResult[3] !== onConsoleSelect) {
    const fn = function o(type) {
      const obj = {};
      const merged = Object.assign(type);
      obj.onPress = onConsoleSelect;
      return closure_2_8(closure_10, obj, type.type);
    };
    cResult[3] = onConsoleSelect;
    cResult[4] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[4];
  }
  const mapped = consoles.map(tmp5);
  cResult[0] = consoles;
  cResult[1] = onConsoleSelect;
  cResult[2] = mapped;
  let obj = onConsoleSelect(576);
}) : ((arg0) => {
  ({ consoles, onConsoleSelect: require } = arg0);
  return closure_8(TableRowGroup.TableRowGroup, {
    hasIcons: true,
    children: consoles.map((type) => {
      const obj = {};
      const merged = Object.assign(type);
      obj.onPress = onPress;
      return closure_2_8(closure_10, obj, type.type);
    })
  });
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  const cResult = c.c(23);
  if (cResult[0] !== onPress) {
    onPress = onPress.onPress;
    importDefault = onPress;
    const tmp8 = _objectWithoutProperties(onPress, closure_3);
    closure_0 = tmp8;
    cResult[0] = onPress;
    cResult[1] = tmp8;
    cResult[2] = onPress;
  } else {
    closure_0 = cResult[1];
    importDefault = cResult[2];
  }
  const type = tmp4.type;
  if (constants.PLAYSTATION === type) {
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp28 = closure_1_8(PlaystationNeutralIcon.PlaystationNeutralIcon, {});
      const intl3 = util.intl;
      const stringResult = intl3.string(util.t.JafL6p);
      cResult[3] = tmp28;
      cResult[4] = stringResult;
      let tmp26 = stringResult;
      let tmp25 = tmp28;
    } else {
      tmp25 = cResult[3];
      tmp26 = cResult[4];
    }
    if (cResult[5] !== tmp4.account) {
      let stringResult1;
      if (null != tmp4.account) {
        const intl4 = util.intl;
        stringResult1 = intl4.string(util.t["u30/ut"]);
      }
      cResult[5] = tmp4.account;
      cResult[6] = stringResult1;
      let tmp30 = stringResult1;
    } else {
      tmp30 = cResult[6];
    }
    if (cResult[7] === tmp4) {
      if (cResult[8] === tmp5) {
        let tmp33 = cResult[9];
      }
      if (cResult[10] === tmp30) {
        if (cResult[11] === tmp33) {
          let tmp34 = cResult[12];
        }
        return tmp34;
      }
      const obj2 = { arrow: true, icon: tmp25, label: tmp26, subLabel: tmp30, onPress: tmp33 };
      const tmp36 = closure_1_8(TableRow.TableRow, obj2);
      cResult[10] = tmp30;
      cResult[11] = tmp33;
      cResult[12] = tmp36;
      tmp34 = tmp36;
    }
    const fn = function f() {
      return closure_1(closure_0);
    };
    cResult[7] = tmp4;
    cResult[8] = tmp5;
    cResult[9] = fn;
    tmp33 = fn;
  } else if (tmp9.XBOX === type) {
    const _Symbol = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp15 = closure_1_8(XboxNeutralIcon.XboxNeutralIcon, {});
      const intl = util.intl;
      const stringResult2 = intl.string(util.t.Nfvo72);
      cResult[13] = tmp15;
      class E {
        constructor() {
          return closure_1(closure_0);
        }
      }
      cResult[14] = stringResult2;
      let tmp13 = stringResult2;
      let tmp12 = tmp15;
    } else {
      tmp12 = cResult[13];
      tmp13 = cResult[14];
    }
    if (cResult[15] !== tmp4.account) {
      let stringResult3;
      if (null != tmp4.account) {
        const intl2 = util.intl;
        stringResult3 = intl2.string(util.t["u30/ut"]);
      }
      cResult[15] = tmp4.account;
      cResult[16] = stringResult3;
      class E {
        constructor() {
          return closure_1(closure_0);
        }
      }
    }
    if (cResult[17] === tmp4) {
      if (cResult[18] === tmp5) {
        let tmp20 = cResult[19];
      }
      if (cResult[20] === tmp17) {
        if (cResult[21] === tmp20) {
          let tmp21 = cResult[22];
        }
        return tmp21;
      }
      const obj3 = { arrow: true, icon: tmp12, label: tmp13, subLabel: tmp17, onPress: null };
      class E {
        constructor() {
          return closure_1(closure_0);
        }
      }
      const tmp23 = closure_1_8(TableRow.TableRow, obj3);
      cResult[20] = tmp17;
      cResult[21] = tmp20;
      cResult[22] = tmp23;
      tmp21 = tmp23;
    }
    class E {
      constructor() {
        return closure_1(closure_0);
      }
    }
    cResult[17] = tmp4;
    cResult[18] = tmp5;
    cResult[19] = E;
    tmp20 = E;
  } else {
    return null;
  }
}) : ((onPress) => {
  onPress = onPress.onPress;
  const merged = Object.assign(onPress, Object.assign({ onPress: 0 }));
  const type = merged.type;
  if (constants.PLAYSTATION === type) {
    const obj2 = { arrow: true, icon: closure_1_8(PlaystationNeutralIcon.PlaystationNeutralIcon, {}), label: null, subLabel: null, onPress: null };
    const intl3 = util.intl;
    obj2.label = intl3.string(util.t.JafL6p);
    let stringResult;
    if (null != merged.account) {
      const intl4 = util.intl;
      stringResult = intl4.string(util.t["u30/ut"]);
    }
    obj2.subLabel = stringResult;
    obj2.onPress = function onPress() {
      return onPress(merged);
    };
    return closure_1_8(TableRow.TableRow, obj2);
  } else if (tmp2.XBOX === type) {
    const obj = { arrow: true, icon: closure_1_8(XboxNeutralIcon.XboxNeutralIcon, {}), label: null, subLabel: null, onPress: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.Nfvo72);
    let stringResult1;
    if (null != merged.account) {
      const intl2 = util.intl;
      stringResult1 = intl2.string(util.t["u30/ut"]);
    }
    obj.subLabel = stringResult1;
    obj.onPress = function onPress() {
      return onPress(merged);
    };
    return closure_1_8(TableRow.TableRow, obj);
  } else {
    return null;
  }
});
ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result2 = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetConsoleConnect.tsx");

export default function QuestBottomSheetConsoleConnect(quest) {
  quest = quest.quest;
  ({ step: importDefault, sourceQuestContent: dependencyMap } = quest);
  function openQuestBottomSheet() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14938, dependencyMap.paths), "QuestBottomSheet", { questId: quest.id, initialStep, sourceQuestContent });
  }
  const xboxAndPlaystationAccounts = quest(10924).useConnectedAccounts().xboxAndPlaystationAccounts;
  let obj = quest(10924);
  closure_4 = quest(10967).useTrackQuestContentClickedWithImpression();
  let obj2 = quest(10967);
  noop = quest(10929).useGetQuestImpressionId();
  const items = [quest, xboxAndPlaystationAccounts];
  let obj3 = quest(10929);
  return closure_8(closure_9, {
    consoles: noop.useMemo(() => QuestPlatformUtils.supportedConsoles(quest).map((type) => {
      closure_0 = type;
      return { type, account: xboxAndPlaystationAccounts.find((type) => type.type === closure_0) };
    }), items),
    onConsoleSelect(dependencyMap) {
      if (null != dependencyMap.account) {
        if (obj5.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_console_connect")) {
          const obj3 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.VIEW_CONSOLE_CONNECTIONS, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: closure_5() };
          captureAdUserAction.captureAdUserAction(obj3);
        } else {
          const obj4 = { questId: quest.id, questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: AnalyticsTypes.QuestContentCTA.VIEW_CONSOLE_CONNECTIONS, sourceQuestContent };
          closure_4(obj4);
        }
        obj5 = AdAnalyticsInterfaceExperiment;
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const obj6 = { screen: constants2.CONNECTIONS };
        openUserSettings.openUserSettings(obj6);
      } else {
        if (obj12.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_console_connect")) {
          const obj8 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.CONNECT_CONSOLE, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: closure_5() };
          captureAdUserAction.captureAdUserAction(obj8);
        } else {
          const obj = { questId: quest.id, questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: AnalyticsTypes.QuestContentCTA.CONNECT_CONSOLE, sourceQuestContent };
          closure_4(obj);
        }
        const obj11 = { platformType: dependencyMap.type, location: "quests", onClose: openQuestBottomSheet };
        authorizeConnectionDefault(obj11);
        obj12 = AdAnalyticsInterfaceExperiment;
      }
    }
  });
};