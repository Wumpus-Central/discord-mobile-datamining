// === Module 14521: route ===

// Module 14521 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useQuests from "useQuests" /* 10684 */;
import QuestsIcon from "QuestsIcon" /* 14351 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.QUEST_PREVIEW_TOOL_2,
  getComponent() {
    return require(14522) /* SettingsQuestPreviewScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/QuestPreviewToolSetting.tsx");

export default route;