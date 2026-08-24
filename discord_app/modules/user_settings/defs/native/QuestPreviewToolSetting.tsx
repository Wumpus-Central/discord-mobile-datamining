// discord_app/modules/user_settings/defs/native/QuestPreviewToolSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import useQuests from "../../../quests/hooks/QuestHooks.tsx";
import QuestsIcon from "../../../../design/components/Icon/native/redesign/generated/QuestsIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { SettingsQuestPreviewScreen } from "../../quests/native/SettingsQuestPreviewScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.BDUDau);
  },
  usePredicate() {
    return useQuests.useIsPreviewerOnAnyQuest();
  },
  parent: null,
  IconComponent: QuestsIcon.QuestsIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.QUEST_PREVIEW_TOOL_2,
  getComponent() {
    return SettingsQuestPreviewScreen /* SettingsQuestPreviewScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/QuestPreviewToolSetting.tsx");

export default route;