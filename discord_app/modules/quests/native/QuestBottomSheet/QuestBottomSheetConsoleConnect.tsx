// discord_app/modules/quests/native/QuestBottomSheet/QuestBottomSheetConsoleConnect.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import TableRow3 from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup2 from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import captureAdUserAction3 from "../../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../../ads/analytics/captureAdUserActionTypes.tsx";
import AdAnalyticsInterfaceExperiment from "../../experiments/AdAnalyticsInterfaceExperiment.tsx";
import XboxNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/XboxNeutralIcon.tsx";
import PlaystationNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/PlaystationNeutralIcon.tsx";
import authorizeConnectionDefault from "../../../connections/authorizeConnection.native.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import Constants from "../../../../Constants.tsx";
import Fragment_mod from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let importDefault;

let Fragment;
let jsxs;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let closure_3 = ["onPress"];
let react = react_mod;
const View = react_native.View;
({ PlatformTypes: metroRequire, UserSettingsSections: metroImportDefault } = Constants);
Fragment = Fragment_mod;
({ jsx: metroImportAll, jsxs, Fragment } = Fragment);
const PLATFORM_XBOX = nativeDefault.unsafe_rawColors.PLATFORM_XBOX;
const PLATFORM_PLAYSTATION = nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION;
let obj = {
  platformButtonsContainer: obj2,
  platformButton: { flex: 1, display: "flex", justifyContent: "center", alignItems: "center" },
};
obj2 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_16, justifyContent: "space-between" };
const styles = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let consoles;
      let onConsoleSelect;
      let tmp5;
      let obj = onConsoleSelect(576);
      const cResult = obj.c(7);
      ({ consoles, onConsoleSelect } = arg0);
      if (cResult[0] === consoles) {
        let tmp4;
        let tmp7;
        if (cResult[1] === onConsoleSelect) {
          tmp4 = cResult[2];
        }
        if (cResult[5] !== tmp4) {
          const obj2 = { hasIcons: true, children: tmp4 };
          const tmp9 = closure_8(onConsoleSelect(6081).TableRowGroup, obj2);
          cResult[5] = tmp4;
          cResult[6] = tmp9;
          tmp7 = tmp9;
        } else {
          tmp7 = cResult[6];
        }
        return tmp7;
      }
      if (cResult[3] !== onConsoleSelect) {
        const fn = function o(type) {
          const obj = { onPress: onConsoleSelect };
          const merged = Object.assign(type);
          return metroImportAll(closure_10, obj, type.type);
        };
        cResult[3] = onConsoleSelect;
        cResult[4] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[4];
      }
      const mapped = consoles.map(tmp5);
      cResult[0] = consoles;
      cResult[1] = onConsoleSelect;
      cResult[2] = mapped;
      tmp4 = mapped;
    }
  : (arg0) => {
      let consoles;
      let onPress;
      ({ consoles, onConsoleSelect: require } = arg0);
      let obj = {
        hasIcons: true,
        children: consoles.map((type) => {
          const obj = { onPress: require };
          const merged = Object.assign(type);
          return metroImportAll(closure_10, obj, type.type);
        }),
      };
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      return closure_8(TableRowGroup, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPress) => {
      const obj = react2;
      const cResult = obj.c(23);
      if (cResult[0] !== onPress) {
        onPress = onPress.onPress;
        importDefault = onPress;
        const tmp8 = _objectWithoutProperties(onPress, closure_3);
        let closure_0 = tmp8;
        cResult[0] = onPress;
        cResult[1] = tmp8;
        cResult[2] = onPress;
      } else {
        closure_0 = cResult[1];
        importDefault = cResult[2];
      }
      const type = tmp4.type;
      if (metroRequire.PLAYSTATION === type) {
        let tmp26;
        let tmp25;
        let tmp30;
        const _Symbol2 = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp28 = metroImportAll(PlaystationNeutralIcon.PlaystationNeutralIcon, {});
          const intl3 = intl5.intl;
          const stringResult = intl3.string(intl5.t.JafL6p);
          cResult[3] = tmp28;
          cResult[4] = stringResult;
          tmp26 = stringResult;
          tmp25 = tmp28;
        } else {
          tmp25 = cResult[3];
          tmp26 = cResult[4];
        }
        if (cResult[5] !== tmp4.account) {
          let stringResult1;
          if (null != tmp4.account) {
            const intl4 = intl5.intl;
            stringResult1 = intl4.string(intl5.t["u30/ut"]);
          }
          cResult[5] = tmp4.account;
          cResult[6] = stringResult1;
          tmp30 = stringResult1;
        } else {
          tmp30 = cResult[6];
        }
        if (cResult[7] === tmp4) {
          let tmp33;
          if (cResult[8] === tmp5) {
            tmp33 = cResult[9];
          }
          if (cResult[10] === tmp30) {
            let tmp34;
            if (cResult[11] === tmp33) {
              tmp34 = cResult[12];
            }
            return tmp34;
          }
          const obj2 = { arrow: true, icon: tmp25, label: tmp26, subLabel: tmp30, onPress: tmp33 };
          const tmp36 = metroImportAll(TableRow3.TableRow, obj2);
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
        let tmp13;
        let tmp12;
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp15 = metroImportAll(XboxNeutralIcon.XboxNeutralIcon, {});
          const intl = intl5.intl;
          const stringResult2 = intl.string(intl5.t.Nfvo72);
          cResult[13] = tmp15;
          class E {
            constructor() {
              return closure_1(closure_0);
            }
          }
          cResult[14] = stringResult2;
          tmp13 = stringResult2;
          tmp12 = tmp15;
        } else {
          tmp12 = cResult[13];
          tmp13 = cResult[14];
        }
        if (cResult[15] !== tmp4.account) {
          let stringResult3;
          if (null != tmp4.account) {
            const intl2 = intl5.intl;
            stringResult3 = intl2.string(intl5.t["u30/ut"]);
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
          let tmp20;
          if (cResult[18] === tmp5) {
            tmp20 = cResult[19];
          }
          if (cResult[20] === tmp17) {
            let tmp21;
            if (cResult[21] === tmp20) {
              tmp21 = cResult[22];
            }
            return tmp21;
          }
          const obj3 = { arrow: true, icon: tmp12, label: tmp13, subLabel: tmp17, onPress: null };
          class E {
            constructor() {
              return closure_1(closure_0);
            }
          }
          const tmp23 = metroImportAll(TableRow3.TableRow, obj3);
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
    }
  : (onPress) => {
      let intl;
      let intl3;
      let stringResult;
      let stringResult1;
      onPress = onPress.onPress;
      const merged = Object.assign(onPress, Object.assign({ onPress: 0 }));
      const type = merged.type;
      if (metroRequire.PLAYSTATION === type) {
        const obj2 = {
          arrow: true,
          icon: metroImportAll(PlaystationNeutralIcon.PlaystationNeutralIcon, {}),
          label: intl3.string(intl5.t.JafL6p),
          subLabel: stringResult,
          onPress() {
            return onPress(merged);
          },
        };
        const TableRow2 = TableRow3.TableRow;
        intl3 = intl5.intl;
        stringResult = undefined;
        if (null != merged.account) {
          const intl4 = intl5.intl;
          stringResult = intl4.string(intl5.t["u30/ut"]);
        }
        return metroImportAll(TableRow2, obj2);
      } else if (tmp2.XBOX === type) {
        const obj = {
          arrow: true,
          icon: metroImportAll(XboxNeutralIcon.XboxNeutralIcon, {}),
          label: intl.string(intl5.t.Nfvo72),
          subLabel: stringResult1,
          onPress() {
            return onPress(merged);
          },
        };
        const TableRow = TableRow3.TableRow;
        intl = intl5.intl;
        stringResult1 = undefined;
        if (null != merged.account) {
          const intl2 = intl5.intl;
          stringResult1 = intl2.string(intl5.t["u30/ut"]);
        }
        return metroImportAll(TableRow, obj);
      } else {
        return null;
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result2 = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetConsoleConnect.tsx");

export default function QuestBottomSheetConsoleConnect(quest) {
  let closure_5;
  let initialStep;
  let sourceQuestContent;
  quest = quest.quest;
  ({ step: importDefault, sourceQuestContent: dependencyMap } = quest);
  function openQuestBottomSheet() {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { questId: quest.id, initialStep: importDefault, sourceQuestContent: dependencyMap };
    obj.openLazy(asyncRequire(14938, dependencyMap.paths), "QuestBottomSheet", obj2);
  }
  let obj = quest(10924);
  const xboxAndPlaystationAccounts = obj.useConnectedAccounts().xboxAndPlaystationAccounts;
  let obj2 = quest(10967);
  let closure_4 = obj2.useTrackQuestContentClickedWithImpression();
  let obj3 = quest(10929);
  react = obj3.useGetQuestImpressionId();
  const items = [quest, xboxAndPlaystationAccounts];
  let obj4 = {
    consoles: react.useMemo(() => {
      let obj = QuestPlatformUtils;
      const supportedConsolesResult = obj.supportedConsoles(quest);
      return supportedConsolesResult.map((type) => {
        let closure_0 = type;
        const obj = { type, account: xboxAndPlaystationAccounts.find((type) => type.type === closure_0) };
        return obj;
      });
    }, items),
    onConsoleSelect(dependencyMap) {
      if (null != dependencyMap.account) {
        const obj4 = AdAnalyticsInterfaceExperiment;
        if (
          obj4.shouldMigrateToAdAnalyticsInterface(
            AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
            "quest_bottom_sheet_console_connect",
          )
        ) {
          const obj2 = {
            type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
            adCreativeType: AdCreativeType.AdCreativeType.QUEST,
            adCreativeId: quest.id,
            questContentCTA: AnalyticsTypes.QuestContentCTA.VIEW_CONSOLE_CONNECTIONS,
            surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET,
            sourceQuestContent: dependencyMap,
            impressionId: closure_5(),
          };
          const captureAdUserAction2 = captureAdUserAction3.captureAdUserAction;
          captureAdUserAction3;
          captureAdUserAction2(obj2);
        } else {
          const obj3 = {
            questId: quest.id,
            questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET,
            questContentCTA: AnalyticsTypes.QuestContentCTA.VIEW_CONSOLE_CONNECTIONS,
            sourceQuestContent: dependencyMap,
          };
          closure_4(obj3);
        }
        const obj7 = ActionSheetActionCreatorsDefault;
        obj7.hideActionSheet();
        const obj5 = { screen: metroImportDefault.CONNECTIONS };
        const obj8 = openUserSettings;
        obj8.openUserSettings(obj5);
      } else {
        const obj10 = AdAnalyticsInterfaceExperiment;
        if (
          obj10.shouldMigrateToAdAnalyticsInterface(
            AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
            "quest_bottom_sheet_console_connect",
          )
        ) {
          const obj6 = {
            type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
            adCreativeType: AdCreativeType.AdCreativeType.QUEST,
            adCreativeId: quest.id,
            questContentCTA: AnalyticsTypes.QuestContentCTA.CONNECT_CONSOLE,
            surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET,
            sourceQuestContent: dependencyMap,
            impressionId: closure_5(),
          };
          const captureAdUserAction = captureAdUserAction3.captureAdUserAction;
          captureAdUserAction3;
          captureAdUserAction(obj6);
        } else {
          const obj = {
            questId: quest.id,
            questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET,
            questContentCTA: AnalyticsTypes.QuestContentCTA.CONNECT_CONSOLE,
            sourceQuestContent: dependencyMap,
          };
          closure_4(obj);
        }
        const obj9 = { platformType: dependencyMap.type, location: "quests", onClose: openQuestBottomSheet };
        authorizeConnectionDefault(obj9);
      }
    },
  };
  return closure_8(closure_9, obj4);
}
