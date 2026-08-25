// === Module 14619: route ===

// Module 14619 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useQuests from "useQuests" /* 10531 */;
import QuestsIcon from "QuestsIcon" /* 14449 */;
import createToggle from "createToggle" /* 10516 */;

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
    return require(14620) /* SettingsQuestPreviewScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/QuestPreviewToolSetting.tsx");

export default route;