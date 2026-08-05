import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { useQuests } from "../../../quests/hooks/QuestHooks.tsx";
import { SettingsQuestPreviewScreen } from "../../quests/native/SettingsQuestPreviewScreen.tsx";
// discord_app/modules/user_settings/defs/native/QuestPreviewToolSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.BDUDau);
  },
  usePredicate() {
    return useQuests /* useQuests */.useIsPreviewerOnAnyQuest();
  },
  parent: null,
  IconComponent: require("QuestsIcon").QuestsIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.QUEST_PREVIEW_TOOL_2,
  getComponent() {
    return SettingsQuestPreviewScreen /* SettingsQuestPreviewScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/QuestPreviewToolSetting.tsx");

export default route;