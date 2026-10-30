// === Module 17067: QuestBottomSheetConsoleConnect ===

// Module 17067 (QuestBottomSheetConsoleConnect)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import QuestTypes from "QuestTypes" /* 6778 */;
import AdCreativeType from "AdCreativeType" /* 6782 */;
import TableRow from "TableRow" /* 6969 */;
import TableRowGroup from "TableRowGroup" /* 7054 */;
import openUserSettings from "openUserSettings" /* 7557 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7864 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 9342 */;
import PlaystationNeutralIcon from "PlaystationNeutralIcon" /* 9567 */;
import captureAdUserAction from "captureAdUserAction" /* 9664 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9667 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9699 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9700 */;
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
    const obj2 = { arrow: true, icon: timestampProducer(PlaystationNeutralIcon.PlaystationNeutralIcon, {}), label: null, subLabel: null, onPress: null };
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
    const obj = { arrow: true, icon: timestampProducer(XboxNeutralIcon.XboxNeutralIcon, {}), label: null, subLabel: null, onPress: null };
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
const Constants = fn(1072);
({ PlatformTypes: closure_4, UserSettingsSections: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs, Fragment } = jsxProd);
const PLATFORM_XBOX = nativeDefault.unsafe_rawColors.PLATFORM_XBOX;
const PLATFORM_PLAYSTATION = nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION;
const createStyles = fn(5009);
let obj2 = { platformButtonsContainer: { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_16, justifyContent: "space-between" }, platformButton: { flex: 1, display: "flex", justifyContent: "center", alignItems: "center" } };
const styles = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetConsoleConnect.tsx");

export default function QuestBottomSheetConsoleConnect(quest) {
  quest = quest.quest;
  ({ step: importDefault, sourceQuestContent: dependencyMap } = quest);
  function openQuestBottomSheet() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17027, dependencyMap.paths), "QuestBottomSheet", { questId: quest.id, initialStep, sourceQuestContent });
  }
  const xboxAndPlaystationAccounts = quest(9661).useConnectedAccounts().xboxAndPlaystationAccounts;
  let obj = quest(9661);
  closure_4 = quest(9697).useGetQuestImpressionId();
  const items = [quest, xboxAndPlaystationAccounts];
  let obj2 = quest(9697);
  return closure_6(NonInlineConsoleConnection, {
    consoles: xboxAndPlaystationAccounts.useMemo(() => QuestPlatformUtils.supportedConsoles(quest).map((type) => {
      closure_0 = type;
      return { type, account: xboxAndPlaystationAccounts.find((type) => type.type === closure_0) };
    }), items),
    onConsoleSelect: function handleConsoleSelect(account) {
      if (null != account.account) {
        const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.VIEW_CONSOLE_CONNECTIONS, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: closure_4() };
        captureAdUserAction.captureAdUserAction(obj2);
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const obj5 = { screen: constants2.CONNECTIONS };
        openUserSettings.openUserSettings(obj5);
      } else {
        const obj7 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.CONNECT_CONSOLE, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: closure_4() };
        captureAdUserAction.captureAdUserAction(obj7);
        const obj8 = { platformType: account.type, location: "quests", onClose: openQuestBottomSheet };
        authorizeConnectionDefault(obj8);
      }
    }
  });
};