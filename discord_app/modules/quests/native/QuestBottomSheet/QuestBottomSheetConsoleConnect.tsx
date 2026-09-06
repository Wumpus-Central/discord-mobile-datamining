// === Module 15163: QuestBottomSheetConsoleConnect ===

// Module 15163 (QuestBottomSheetConsoleConnect)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import QuestTypes from "QuestTypes" /* 5447 */;
import AdCreativeType from "AdCreativeType" /* 5451 */;
import TableRow from "TableRow" /* 5605 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import openUserSettings from "openUserSettings" /* 7382 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7728 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 8708 */;
import PlaystationNeutralIcon from "PlaystationNeutralIcon" /* 8881 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9252 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 11192 */;
import captureAdUserAction from "captureAdUserAction" /* 11193 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 11197 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11496 */;
import noop from "module_19" /* 19 */;

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
    })
  });
}
function ConsoleRow(onPress) {
  onPress = onPress.onPress;
  const merged = Object.assign(onPress, Object.assign({ onPress: 0 }));
  const type = merged.type;
  if (constants.PLAYSTATION === type) {
    let obj = { arrow: true, icon: timestampProducer(PlaystationNeutralIcon.PlaystationNeutralIcon, {}), label: null, subLabel: null, onPress: null };
    const intl3 = util.intl;
    obj.label = intl3.string(util.t.JafL6p);
    let stringResult;
    if (null != merged.account) {
      const intl4 = util.intl;
      stringResult = intl4.string(util.t["u30/ut"]);
    }
    obj.subLabel = stringResult;
    obj.onPress = function onPress() {
      return onPress(merged);
    };
    return timestampProducer(TableRow.TableRow, obj);
  } else if (tmp2.XBOX === type) {
    obj = { arrow: true, icon: timestampProducer(XboxNeutralIcon.XboxNeutralIcon, {}), label: null, subLabel: null, onPress: null };
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
fn(4560);
let createStyles = { platformButtonsContainer: null, platformButton: null };
createStyles = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_16, justifyContent: "space-between" };
createStyles.platformButtonsContainer = createStyles;
createStyles.platformButton = { flex: 1, display: "flex", justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetConsoleConnect.tsx");

export default function QuestBottomSheetConsoleConnect(quest) {
  quest = quest.quest;
  ({ step: importDefault, sourceQuestContent: dependencyMap } = quest);
  function openQuestBottomSheet() {
    const obj = { questId: quest.id, initialStep, sourceQuestContent };
    obj.openLazy(asyncRequireImpl(15120, dependencyMap.paths), "QuestBottomSheet", obj);
  }
  let obj = quest(11483);
  const xboxAndPlaystationAccounts = obj.useConnectedAccounts().xboxAndPlaystationAccounts;
  closure_4 = quest(11774).useTrackQuestContentClickedWithImpression();
  let obj2 = quest(11774);
  const impressionId = quest(11486).useQuestImpressionId();
  const items = [quest, xboxAndPlaystationAccounts];
  obj = {
    consoles: xboxAndPlaystationAccounts.useMemo(() => QuestPlatformUtils.supportedConsoles(quest).map((type) => {
      closure_0 = type;
      return { type, account: xboxAndPlaystationAccounts.find((type) => type.type === closure_0) };
    }), items),
    onConsoleSelect(account) {
      if (null != account.account) {
        if (obj5.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_console_connect")) {
          let obj = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.VIEW_CONSOLE_CONNECTIONS, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId };
          captureAdUserAction.captureAdUserAction(obj);
        } else {
          obj = { questId: quest.id, questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: AnalyticsTypes.QuestContentCTA.VIEW_CONSOLE_CONNECTIONS, sourceQuestContent };
          closure_4(obj);
        }
        obj5 = AdAnalyticsInterfaceExperiment;
        ActionSheetActionCreatorsDefault.hideActionSheet();
        let obj1 = { screen: constants2.CONNECTIONS };
        openUserSettings.openUserSettings(obj1);
      } else {
        if (obj12.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_console_connect")) {
          obj1 = captureAdUserAction;
          const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.CONNECT_CONSOLE, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId };
          obj1.captureAdUserAction(obj2);
        } else {
          obj = { questId: quest.id, questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: AnalyticsTypes.QuestContentCTA.CONNECT_CONSOLE, sourceQuestContent };
          closure_4(obj);
        }
        const obj3 = { platformType: account.type, location: "quests", onClose: openQuestBottomSheet };
        authorizeConnectionDefault(obj3);
        obj12 = AdAnalyticsInterfaceExperiment;
      }
    }
  };
  return openQuestBottomSheet(NonInlineConsoleConnection, obj);
};