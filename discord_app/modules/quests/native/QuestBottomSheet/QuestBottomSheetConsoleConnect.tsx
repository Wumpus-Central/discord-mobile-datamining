// discord_app/modules/quests/native/QuestBottomSheet/QuestBottomSheetConsoleConnect.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import AdAnalyticsInterfaceExperiment from "../../experiments/AdAnalyticsInterfaceExperiment.tsx";
import captureAdUserAction from "../../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../../ads/analytics/captureAdUserActionTypes.tsx";
import XboxNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/XboxNeutralIcon.tsx";
import PlaystationNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/PlaystationNeutralIcon.tsx";
import authorizeConnectionDefault from "../../../connections/authorizeConnection.native.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function NonInlineConsoleConnection(arg0) {
  ({ consoles, onConsoleSelect: require } = arg0);
  return closure_6(TableRowGroup.TableRowGroup, {
    hasIcons: true,
    children: consoles.map((type) => {
      const obj = {};
      const merged = Object.assign(type);
      obj.onPress = onPress;
      return timestampProducer(ConsoleRow, obj, type.type);
    }),
  });
}
function ConsoleRow(onPress) {
  onPress = onPress.onPress;
  const merged = Object.assign(onPress, Object.assign({ onPress: 0 }));
  const type = merged.type;
  if (constants.PLAYSTATION === type) {
    const obj2 = {
      arrow: true,
      icon: timestampProducer(PlaystationNeutralIcon.PlaystationNeutralIcon, {}),
      label: null,
      subLabel: null,
      onPress: null,
    };
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
    return timestampProducer(TableRow.TableRow, obj2);
  } else if (tmp2.XBOX === type) {
    const obj = {
      arrow: true,
      icon: timestampProducer(XboxNeutralIcon.XboxNeutralIcon, {}),
      label: null,
      subLabel: null,
      onPress: null,
    };
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
    return timestampProducer(TableRow.TableRow, obj);
  } else {
    return null;
  }
}
const View = fn(17).View;
const Constants = fn(1074);
({ PlatformTypes: closure_4, UserSettingsSections: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs, Fragment } = jsxProd);
const PLATFORM_XBOX = nativeDefault.unsafe_rawColors.PLATFORM_XBOX;
const PLATFORM_PLAYSTATION = nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION;
const createStyles = fn(4756);
let obj2 = {
  platformButtonsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: nativeDefault.space.PX_16,
    justifyContent: "space-between",
  },
  platformButton: { flex: 1, display: "flex", justifyContent: "center", alignItems: "center" },
};
const styles = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetConsoleConnect.tsx");

export default function QuestBottomSheetConsoleConnect(quest) {
  quest = quest.quest;
  ({ step: importDefault, sourceQuestContent: dependencyMap } = quest);
  function openQuestBottomSheet() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15381, dependencyMap.paths), "QuestBottomSheet", {
      questId: quest.id,
      initialStep,
      sourceQuestContent,
    });
  }
  const xboxAndPlaystationAccounts = quest(11736).useConnectedAccounts().xboxAndPlaystationAccounts;
  let obj = quest(11736);
  closure_4 = quest(12025).useTrackQuestContentClickedWithImpression();
  let obj2 = quest(12025);
  const impressionId = quest(11739).useQuestImpressionId();
  const items = [quest, xboxAndPlaystationAccounts];
  let obj3 = quest(11739);
  return openQuestBottomSheet(NonInlineConsoleConnection, {
    consoles: xboxAndPlaystationAccounts.useMemo(
      () =>
        QuestPlatformUtils.supportedConsoles(quest).map((type) => {
          closure_0 = type;
          return { type, account: xboxAndPlaystationAccounts.find((type) => type.type === closure_0) };
        }),
      items,
    ),
    onConsoleSelect(account) {
      if (null != account.account) {
        if (
          obj5.shouldMigrateToAdAnalyticsInterface(
            AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
            "quest_bottom_sheet_console_connect",
          )
        ) {
          const obj3 = {
            type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
            adCreativeType: AdCreativeType.AdCreativeType.QUEST,
            adCreativeId: quest.id,
            questContentCTA: AnalyticsTypes.QuestContentCTA.VIEW_CONSOLE_CONNECTIONS,
            surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET,
            sourceQuestContent,
            impressionId,
          };
          captureAdUserAction.captureAdUserAction(obj3);
        } else {
          const obj4 = {
            questId: quest.id,
            questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET,
            questContentCTA: AnalyticsTypes.QuestContentCTA.VIEW_CONSOLE_CONNECTIONS,
            sourceQuestContent,
          };
          closure_4(obj4);
        }
        obj5 = AdAnalyticsInterfaceExperiment;
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const obj6 = { screen: constants2.CONNECTIONS };
        openUserSettings.openUserSettings(obj6);
      } else {
        if (
          obj12.shouldMigrateToAdAnalyticsInterface(
            AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
            "quest_bottom_sheet_console_connect",
          )
        ) {
          const obj8 = {
            type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
            adCreativeType: AdCreativeType.AdCreativeType.QUEST,
            adCreativeId: quest.id,
            questContentCTA: AnalyticsTypes.QuestContentCTA.CONNECT_CONSOLE,
            surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET,
            sourceQuestContent,
            impressionId,
          };
          captureAdUserAction.captureAdUserAction(obj8);
        } else {
          const obj = {
            questId: quest.id,
            questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET,
            questContentCTA: AnalyticsTypes.QuestContentCTA.CONNECT_CONSOLE,
            sourceQuestContent,
          };
          closure_4(obj);
        }
        const obj11 = { platformType: account.type, location: "quests", onClose: openQuestBottomSheet };
        authorizeConnectionDefault(obj11);
        obj12 = AdAnalyticsInterfaceExperiment;
      }
    },
  });
}
