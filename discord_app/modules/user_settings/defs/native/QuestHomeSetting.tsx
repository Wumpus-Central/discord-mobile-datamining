// discord_app/modules/user_settings/defs/native/QuestHomeSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { getIsEligibleForQuests } from "../../../quests/lib/QuestsEligibility.tsx";
import { QuestHomeSetting } from "../../../quests/native/QuestHomeSetting.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.JALI2K);
  },
  usePredicate() {
    return getIsEligibleForQuests.getIsEligibleForQuests();
  },
  parent: null,
  IconComponent: require("QuestsIcon").QuestsIcon,
  screen: obj,
  usePreNavigationAction() {
    return () => {
      let obj = callback(7249);
      obj = { fromContent: callback(5228).QuestContent.USER_SETTINGS };
      const result = obj.setQuestHomeUtmContext(obj);
      return true;
    };
  }
};
obj = {
  route: require("ME").UserSettingsSections.QUESTS,
  getComponent() {
    return QuestHomeSetting.default;
  }
};
const route = createToggle.createRoute(obj);
let result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/QuestHomeSetting.tsx");

export default route;