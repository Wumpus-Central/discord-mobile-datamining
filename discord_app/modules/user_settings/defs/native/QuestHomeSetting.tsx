// === Module 14566: route ===

// Module 14566 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getIsEligibleForQuests from "getIsEligibleForQuests" /* 11047 */;
import QuestsIcon from "QuestsIcon" /* 14567 */;
import createToggle from "createToggle" /* 11031 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.JALI2K);
  },
  usePredicate() {
    return getIsEligibleForQuests.getIsEligibleForQuests();
  },
  parent: null,
  IconComponent: QuestsIcon.QuestsIcon,
  screen: obj,
  usePreNavigationAction() {
    return () => {
      let obj = callback(7435);
      obj = { fromContent: callback(5360).QuestContent.USER_SETTINGS };
      const result = obj.setQuestHomeUtmContext(obj);
      return true;
    };
  }
};
obj = {
  route: ME.UserSettingsSections.QUESTS,
  getComponent() {
    return require(14569) /* QuestHomeSetting */.default;
  }
};
const route = createToggle.createRoute(obj);
let result = set.fileFinishedImporting("modules/user_settings/defs/native/QuestHomeSetting.tsx");

export default route;