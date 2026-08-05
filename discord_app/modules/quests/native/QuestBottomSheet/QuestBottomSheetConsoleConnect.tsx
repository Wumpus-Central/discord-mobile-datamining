// discord_app/modules/quests/native/QuestBottomSheet/QuestBottomSheetConsoleConnect.tsx
import QuestsVisibleMessagesChangedSource from "QuestsVisibleMessagesChangedSource";
import { View } from "AdCreativeType";
import ME from "ME";
import jsxProd from "TableRowGroupTitle";
import createCacheKey from "createCacheKey";

let Fragment;
let c4;
let c5;
let closure_6;
let jsxs;
const require = arg1;
function NonInlineConsoleConnection(arg0) {
  let consoles;
  let require;
  ({ consoles, onConsoleSelect: require } = arg0);
  let obj = { hasIcons: true, children: null };
  obj[1] = consoles.map((type) => {
    const obj = {};
    const merged = Object.assign(type);
    obj.onPress = closure_0;
    return outer1_6(outer1_8, obj, type.type);
  });
  return callback(require("../../../../design/components/TableRow/native/TableRowGroup.native.tsx") /* TableRowGroupTitle */.TableRowGroup, obj);
}
function ConsoleRow(onPress) {
  onPress = onPress.onPress;
  const merged = Object.assign(onPress, Object.create(null));
  const type = merged.type;
  if (constants.PLAYSTATION === type) {
    let obj = { arrow: true, icon: null, label: null, subLabel: null, onPress: null };
    obj[1] = callback(onPress(12094).PlaystationNeutralIcon, {});
    const intl3 = onPress(1236).intl;
    obj[2] = intl3.string(onPress(1236).t.JafL6p);
    let stringResult;
    if (null != merged.account) {
      const intl4 = tmp8(1236).intl;
      stringResult = intl4.string(tmp8(1236).t["u30/ut"]);
    }
    obj[3] = stringResult;
    obj[4] = function onPress() {
      return onPress(merged);
    };
    return callback(onPress(5315).TableRow, obj);
  } else if (tmp2.XBOX === type) {
    obj = { arrow: true, icon: null, label: null, subLabel: null, onPress: null };
    obj[1] = callback(onPress(9223).XboxNeutralIcon, {});
    const intl = onPress(1236).intl;
    obj[2] = intl.string(onPress(1236).t.Nfvo72);
    let stringResult1;
    if (null != merged.account) {
      const intl2 = tmp4(1236).intl;
      stringResult1 = intl2.string(tmp4(1236).t["u30/ut"]);
    }
    obj[3] = stringResult1;
    obj[4] = function onPress() {
      return onPress(merged);
    };
    return callback(onPress(5315).TableRow, obj);
  } else {
    return null;
  }
}
({ PlatformTypes: c4, UserSettingsSections: c5 } = ME);
({ jsx: closure_6, jsxs, Fragment } = jsxProd);
const PLATFORM_XBOX = require("Themes").unsafe_rawColors.PLATFORM_XBOX;
const PLATFORM_PLAYSTATION = require("Themes").unsafe_rawColors.PLATFORM_PLAYSTATION;
createCacheKey = { platformButtonsContainer: null, platformButton: null };
createCacheKey = { display: "flex", flexDirection: "row", gap: require("Themes").space.PX_16, justifyContent: "space-between" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, display: "flex", justifyContent: "center", alignItems: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetConsoleConnect.tsx");

export default function QuestBottomSheetConsoleConnect(quest) {
  let dependencyMap;
  let importDefault;
  quest = quest.quest;
  ({ step: importDefault, sourceQuestContent: dependencyMap } = quest);
  let xboxAndPlaystationAccounts;
  let closure_4;
  let closure_5;
  function openQuestBottomSheet(NonInlineConsoleConnection, arg1) {
    let obj = outer1_1(outer1_2[10]);
    obj = { questId: quest.id, initialStep: closure_1, sourceQuestContent: closure_2 };
    obj.openLazy(quest(outer1_2[13])(outer1_2[12], outer1_2.paths), "QuestBottomSheet", obj);
  }
  let obj = quest(10374);
  xboxAndPlaystationAccounts = obj.useConnectedAccounts().xboxAndPlaystationAccounts;
  closure_4 = quest(11086).useTrackQuestContentClickedWithImpression();
  let obj2 = quest(11086);
  closure_5 = quest(10403).useQuestImpressionId();
  const items = [quest, xboxAndPlaystationAccounts];
  obj = {
    consoles: xboxAndPlaystationAccounts.useMemo(() => {
      const obj = quest(outer1_2[9]);
      return quest(outer1_2[9]).supportedConsoles(quest).map((type) => {
        let closure_0 = type;
        return { type, account: QuestsVisibleMessagesChangedSource.find((type) => type.type === closure_0) };
      });
    }, items),
    onConsoleSelect(account) {
      if (null != account.account) {
        if (obj5.shouldMigrateToAdAnalyticsInterface(quest(outer1_2[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_console_connect")) {
          let obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null };
          obj[0] = quest(outer1_2[16]).AdUserActionType.CLICK_INTERNAL;
          obj[1] = quest(outer1_2[17]).AdCreativeType.QUEST;
          obj[2] = quest.id;
          obj[3] = quest(outer1_2[18]).QuestContentCTA.VIEW_CONSOLE_CONNECTIONS;
          obj[4] = quest(outer1_2[19]).QuestContent.QUEST_BOTTOM_SHEET;
          obj[5] = closure_2;
          obj[6] = constants;
          quest(outer1_2[15]).captureAdUserAction(obj);
          const obj7 = quest(outer1_2[15]);
        } else {
          obj = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
          obj[0] = quest.id;
          obj[1] = quest(outer1_2[19]).QuestContent.QUEST_BOTTOM_SHEET;
          obj[2] = quest(outer1_2[18]).QuestContentCTA.VIEW_CONSOLE_CONNECTIONS;
          obj[3] = closure_2;
          callback(obj);
        }
        obj5 = quest(outer1_2[14]);
        outer1_1(outer1_2[10]).hideActionSheet();
        const obj9 = outer1_1(outer1_2[10]);
        let obj1 = { screen: null };
        obj1[0] = constants.CONNECTIONS;
        quest(outer1_2[11]).openUserSettings(obj1);
      } else {
        if (obj12.shouldMigrateToAdAnalyticsInterface(quest(outer1_2[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_console_connect")) {
          obj1 = quest(outer1_2[15]);
          const obj2 = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null };
          obj2[0] = quest(outer1_2[16]).AdUserActionType.CLICK_INTERNAL;
          obj2[1] = quest(outer1_2[17]).AdCreativeType.QUEST;
          obj2[2] = quest.id;
          obj2[3] = quest(outer1_2[18]).QuestContentCTA.CONNECT_CONSOLE;
          obj2[4] = quest(outer1_2[19]).QuestContent.QUEST_BOTTOM_SHEET;
          obj2[5] = closure_2;
          obj2[6] = constants;
          obj1.captureAdUserAction(obj2);
        } else {
          obj = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
          obj[0] = quest.id;
          obj[1] = quest(outer1_2[19]).QuestContent.QUEST_BOTTOM_SHEET;
          obj[2] = quest(outer1_2[18]).QuestContentCTA.CONNECT_CONSOLE;
          obj[3] = closure_2;
          callback(obj);
        }
        const obj3 = { platformType: null, location: "quests", onClose: null };
        obj3[0] = account.type;
        obj3[2] = openQuestBottomSheet;
        outer1_1(outer1_2[20])(obj3);
      }
    }
  };
  return openQuestBottomSheet(NonInlineConsoleConnection, obj);
};