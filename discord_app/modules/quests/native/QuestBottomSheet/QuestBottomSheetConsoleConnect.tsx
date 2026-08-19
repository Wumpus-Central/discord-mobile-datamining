// discord_app/modules/quests/native/QuestBottomSheet/QuestBottomSheetConsoleConnect.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRowGroupTitle from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import authorizeConnectionDefault from "../../../connections/authorizeConnection.native.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function NonInlineConsoleConnection(arg0) {
  ({ consoles, onConsoleSelect: require } = arg0);
  return callback(TableRowGroupTitle.TableRowGroup, {
    hasIcons: true,
    children: consoles.map((item, index) => {
      const obj = {};
      const merged = Object.assign(item);
      obj.onPress = closure_0;
      return closure_1_6(ConsoleRow, obj, item.type);
    })
  });
}
function ConsoleRow(onPress) {
  onPress = onPress.onPress;
  const merged = Object.assign(onPress, Object.create(null));
  const type = merged.type;
  if (constants.PLAYSTATION === type) {
    let obj = { arrow: true, icon: null, label: null, subLabel: null, onPress: null };
    obj[1] = callback(onPress(12017).PlaystationNeutralIcon, {});
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
    return callback(onPress(6291).TableRow, obj);
  } else if (tmp2.XBOX === type) {
    obj = { arrow: true, icon: null, label: null, subLabel: null, onPress: null };
    obj[1] = callback(onPress(9123).XboxNeutralIcon, {});
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
    return callback(onPress(6291).TableRow, obj);
  } else {
    return null;
  }
}
({ PlatformTypes: c4, UserSettingsSections: c5 } = ME);
({ jsx: closure_6, jsxs, Fragment } = jsxProd);
const PLATFORM_XBOX = ThemesDefault.unsafe_rawColors.PLATFORM_XBOX;
const PLATFORM_PLAYSTATION = ThemesDefault.unsafe_rawColors.PLATFORM_PLAYSTATION;
let createCacheKey = { display: "flex", flexDirection: "row", gap: ThemesDefault.space.PX_16, justifyContent: "space-between" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, display: "flex", justifyContent: "center", alignItems: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetConsoleConnect.tsx");

export default function QuestBottomSheetConsoleConnect(quest) {
  quest = quest.quest;
  ({ step: importDefault, sourceQuestContent: dependencyMap } = quest);
  function openQuestBottomSheet(NonInlineConsoleConnection, arg1) {
    const obj = { questId: quest.id, initialStep: closure_1, sourceQuestContent: closure_2 };
    obj.openLazy(quest(dependencyMap[13])(dependencyMap[12], dependencyMap.paths), "QuestBottomSheet", obj);
  }
  let obj = quest(10684);
  const xboxAndPlaystationAccounts = obj.useConnectedAccounts().xboxAndPlaystationAccounts;
  closure_4 = quest(10953).useTrackQuestContentClickedWithImpression();
  let obj2 = quest(10953);
  closure_5 = quest(10687).useQuestImpressionId();
  const items = [quest, xboxAndPlaystationAccounts];
  obj = {
    consoles: xboxAndPlaystationAccounts.useMemo(() => {
      const obj = quest(dependencyMap[9]);
      return quest(dependencyMap[9]).supportedConsoles(quest).map((item, index) => {
        closure_0 = item;
        return { type: item, account: closure_3.find((item, index) => item.type === closure_0) };
      });
    }, items),
    onConsoleSelect(account) {
      if (null != account.account) {
        if (obj5.shouldMigrateToAdAnalyticsInterface(quest(dependencyMap[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_console_connect")) {
          let obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null };
          obj[0] = quest(dependencyMap[16]).AdUserActionType.CLICK_INTERNAL;
          obj[1] = quest(dependencyMap[17]).AdCreativeType.QUEST;
          obj[2] = quest.id;
          obj[3] = quest(dependencyMap[18]).QuestContentCTA.VIEW_CONSOLE_CONNECTIONS;
          obj[4] = quest(dependencyMap[19]).QuestContent.QUEST_BOTTOM_SHEET;
          obj[5] = closure_2;
          obj[6] = constants;
          quest(dependencyMap[15]).captureAdUserAction(obj);
          const obj7 = quest(dependencyMap[15]);
        } else {
          obj = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
          obj[0] = quest.id;
          obj[1] = quest(dependencyMap[19]).QuestContent.QUEST_BOTTOM_SHEET;
          obj[2] = quest(dependencyMap[18]).QuestContentCTA.VIEW_CONSOLE_CONNECTIONS;
          obj[3] = closure_2;
          callback(obj);
        }
        obj5 = quest(dependencyMap[14]);
        ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
        obj1 = { screen: null };
        obj1[0] = constants.CONNECTIONS;
        quest(dependencyMap[11]).openUserSettings(obj1);
        const obj10 = quest(dependencyMap[11]);
      } else {
        if (obj12.shouldMigrateToAdAnalyticsInterface(quest(dependencyMap[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_console_connect")) {
          obj1 = quest(dependencyMap[15]);
          const obj2 = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null };
          obj2[0] = quest(dependencyMap[16]).AdUserActionType.CLICK_INTERNAL;
          obj2[1] = quest(dependencyMap[17]).AdCreativeType.QUEST;
          obj2[2] = quest.id;
          obj2[3] = quest(dependencyMap[18]).QuestContentCTA.CONNECT_CONSOLE;
          obj2[4] = quest(dependencyMap[19]).QuestContent.QUEST_BOTTOM_SHEET;
          obj2[5] = closure_2;
          obj2[6] = constants;
          obj1.captureAdUserAction(obj2);
        } else {
          obj = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
          obj[0] = quest.id;
          obj[1] = quest(dependencyMap[19]).QuestContent.QUEST_BOTTOM_SHEET;
          obj[2] = quest(dependencyMap[18]).QuestContentCTA.CONNECT_CONSOLE;
          obj[3] = closure_2;
          callback(obj);
        }
        const obj3 = { platformType: null, location: "quests", onClose: null };
        obj3[0] = account.type;
        obj3[2] = openQuestBottomSheet;
        authorizeConnectionDefault(obj3);
        obj12 = quest(dependencyMap[14]);
      }
    }
  };
  return openQuestBottomSheet(NonInlineConsoleConnection, obj);
};