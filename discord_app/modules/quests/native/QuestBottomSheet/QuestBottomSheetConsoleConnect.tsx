// === Module 14990: NonInlineConsoleConnection ===

// Module 14990 (NonInlineConsoleConnection)
import ThemesDefault from "Themes" /* 709 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6000 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function NonInlineConsoleConnection(arg0) {
  ({ consoles, onConsoleSelect: require } = arg0);
  return callback(TableRowGroupTitle.TableRowGroup, {
    hasIcons: true,
    children: consoles.map((type) => {
      const obj = {};
      const merged = Object.assign(type);
      obj.onPress = closure_0;
      return closure_1_6(closure_1_8, obj, type.type);
    })
  });
}
function ConsoleRow(onPress) {
  onPress = onPress.onPress;
  const merged = Object.assign(onPress, Object.create(null));
  const type = merged.type;
  if (constants.PLAYSTATION === type) {
    let obj = { arrow: true, icon: null, label: null, subLabel: null, onPress: null };
    obj[1] = callback(onPress(12859).PlaystationNeutralIcon, {});
    const intl3 = onPress(1233).intl;
    obj[2] = intl3.string(onPress(1233).t.JafL6p);
    let stringResult;
    if (null != merged.account) {
      const intl4 = tmp8(1233).intl;
      stringResult = intl4.string(tmp8(1233).t["u30/ut"]);
    }
    obj[3] = stringResult;
    obj[4] = function onPress() {
      return onPress(merged);
    };
    return callback(onPress(5607).TableRow, obj);
  } else if (tmp2.XBOX === type) {
    obj = { arrow: true, icon: null, label: null, subLabel: null, onPress: null };
    obj[1] = callback(onPress(8849).XboxNeutralIcon, {});
    const intl = onPress(1233).intl;
    obj[2] = intl.string(onPress(1233).t.Nfvo72);
    let stringResult1;
    if (null != merged.account) {
      const intl2 = tmp4(1233).intl;
      stringResult1 = intl2.string(tmp4(1233).t["u30/ut"]);
    }
    obj[3] = stringResult1;
    obj[4] = function onPress() {
      return onPress(merged);
    };
    return callback(onPress(5607).TableRow, obj);
  } else {
    return null;
  }
}
({ PlatformTypes: c4, UserSettingsSections: c5 } = ME);
({ jsx: closure_6, jsxs, Fragment } = jsxProd);
const PLATFORM_XBOX = ThemesDefault.unsafe_rawColors.PLATFORM_XBOX;
const PLATFORM_PLAYSTATION = ThemesDefault.unsafe_rawColors.PLATFORM_PLAYSTATION;
createCacheKey = { platformButtonsContainer: null, platformButton: null };
createCacheKey = { display: "flex", flexDirection: "row", gap: ThemesDefault.space.PX_16, justifyContent: "space-between" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, display: "flex", justifyContent: "center", alignItems: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetConsoleConnect.tsx");

export default function QuestBottomSheetConsoleConnect(quest) {
  quest = quest.quest;
  ({ step: importDefault, sourceQuestContent: dependencyMap } = quest);
  let xboxAndPlaystationAccounts;
  closure_4 = undefined;
  closure_5 = undefined;
  function openQuestBottomSheet(NonInlineConsoleConnection, arg1) {
    let obj = closure_1_1(closure_1_2[10]);
    obj = { questId: quest.id, initialStep: closure_1, sourceQuestContent: closure_2 };
    obj.openLazy(quest(closure_1_2[13])(closure_1_2[12], closure_1_2.paths), "QuestBottomSheet", obj);
  }
  let obj = quest(11303);
  xboxAndPlaystationAccounts = obj.useConnectedAccounts().xboxAndPlaystationAccounts;
  closure_4 = quest(11564).useTrackQuestContentClickedWithImpression();
  let obj2 = quest(11564);
  closure_5 = quest(11306).useQuestImpressionId();
  const items = [quest, xboxAndPlaystationAccounts];
  obj = {
    consoles: xboxAndPlaystationAccounts.useMemo(() => {
      const obj = quest(closure_1_2[9]);
      return quest(closure_1_2[9]).supportedConsoles(quest).map((type) => {
        closure_0 = type;
        return { type, account: closure_3.find((type) => type.type === closure_0) };
      });
    }, items),
    onConsoleSelect(account) {
      if (null != account.account) {
        if (obj5.shouldMigrateToAdAnalyticsInterface(quest(closure_1_2[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_console_connect")) {
          let obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null };
          obj[0] = quest(closure_1_2[16]).AdUserActionType.CLICK_INTERNAL;
          obj[1] = quest(closure_1_2[17]).AdCreativeType.QUEST;
          obj[2] = quest.id;
          obj[3] = quest(closure_1_2[18]).QuestContentCTA.VIEW_CONSOLE_CONNECTIONS;
          obj[4] = quest(closure_1_2[19]).QuestContent.QUEST_BOTTOM_SHEET;
          obj[5] = closure_2;
          obj[6] = constants;
          quest(closure_1_2[15]).captureAdUserAction(obj);
          const obj7 = quest(closure_1_2[15]);
        } else {
          obj = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
          obj[0] = quest.id;
          obj[1] = quest(closure_1_2[19]).QuestContent.QUEST_BOTTOM_SHEET;
          obj[2] = quest(closure_1_2[18]).QuestContentCTA.VIEW_CONSOLE_CONNECTIONS;
          obj[3] = closure_2;
          callback(obj);
        }
        obj5 = quest(closure_1_2[14]);
        closure_1_1(closure_1_2[10]).hideActionSheet();
        const obj9 = closure_1_1(closure_1_2[10]);
        obj1 = { screen: null };
        obj1[0] = constants.CONNECTIONS;
        quest(closure_1_2[11]).openUserSettings(obj1);
      } else {
        if (obj12.shouldMigrateToAdAnalyticsInterface(quest(closure_1_2[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_console_connect")) {
          obj1 = quest(closure_1_2[15]);
          const obj2 = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null };
          obj2[0] = quest(closure_1_2[16]).AdUserActionType.CLICK_INTERNAL;
          obj2[1] = quest(closure_1_2[17]).AdCreativeType.QUEST;
          obj2[2] = quest.id;
          obj2[3] = quest(closure_1_2[18]).QuestContentCTA.CONNECT_CONSOLE;
          obj2[4] = quest(closure_1_2[19]).QuestContent.QUEST_BOTTOM_SHEET;
          obj2[5] = closure_2;
          obj2[6] = constants;
          obj1.captureAdUserAction(obj2);
        } else {
          obj = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
          obj[0] = quest.id;
          obj[1] = quest(closure_1_2[19]).QuestContent.QUEST_BOTTOM_SHEET;
          obj[2] = quest(closure_1_2[18]).QuestContentCTA.CONNECT_CONSOLE;
          obj[3] = closure_2;
          callback(obj);
        }
        const obj3 = { platformType: null, location: "quests", onClose: null };
        obj3[0] = account.type;
        obj3[2] = openQuestBottomSheet;
        closure_1_1(closure_1_2[20])(obj3);
      }
    }
  };
  return openQuestBottomSheet(NonInlineConsoleConnection, obj);
};