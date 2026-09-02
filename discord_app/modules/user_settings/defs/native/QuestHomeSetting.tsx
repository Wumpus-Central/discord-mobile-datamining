// === Module 14822: route ===

// Module 14822 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import getIsEligibleForQuests from "getIsEligibleForQuests" /* 11304 */;
import QuestsIcon from "QuestsIcon" /* 14823 */;
import createToggle from "createToggle" /* 11288 */;

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
      let obj = callback(7477);
      obj = { fromContent: callback(5400).QuestContent.USER_SETTINGS };
      const result = obj.setQuestHomeUtmContext(obj);
      return true;
    };
  }
};
obj = {
  route: ME.UserSettingsSections.QUESTS,
  getComponent() {
    return require(14825) /* QuestHomeSetting */.default;
  }
};
const route = createToggle.createRoute(obj);
let result = set.fileFinishedImporting("modules/user_settings/defs/native/QuestHomeSetting.tsx");

export default route;