import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { getIsEligibleForQuests } from "../../../quests/lib/QuestsEligibility.tsx";
import { QuestHomeSetting } from "../../../quests/native/QuestHomeSetting.tsx";
// discord_app/modules/user_settings/defs/native/QuestHomeSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.JALI2K);
  },
  usePredicate() {
    return getIsEligibleForQuests /* getIsEligibleForQuests */.getIsEligibleForQuests();
  },
  parent: null,
  IconComponent: require("QuestsIcon").QuestsIcon,
  screen: obj,
  usePreNavigationAction() {
    return () => {
      let obj = callback(7101);
      obj = { fromContent: callback(5133).QuestContent.USER_SETTINGS };
      const result = obj.setQuestHomeUtmContext(obj);
      return true;
    };
  }
};
obj = {
  route: require("ME").UserSettingsSections.QUESTS,
  getComponent() {
    return QuestHomeSetting /* QuestHomeSetting */.default;
  }
};
const route = createToggle.createRoute(obj);
let result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/QuestHomeSetting.tsx");

export default route;