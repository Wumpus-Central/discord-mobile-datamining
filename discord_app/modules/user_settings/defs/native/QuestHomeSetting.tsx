// discord_app/modules/user_settings/defs/native/QuestHomeSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import getIsEligibleForQuests from "../../../quests/lib/QuestsEligibility.tsx";
import QuestsIcon from "../../../../design/components/Icon/native/redesign/generated/QuestsIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
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
  IconComponent: QuestsIcon.QuestsIcon,
  screen: obj,
  usePreNavigationAction() {
    return () => {
      let obj = callback(7722);
      obj = { fromContent: callback(5449).QuestContent.USER_SETTINGS };
      const result = obj.setQuestHomeUtmContext(obj);
      return true;
    };
  },
};
obj = {
  route: ME.UserSettingsSections.QUESTS,
  getComponent() {
    return QuestHomeSetting /* QuestHomeSetting */.default;
  },
};
const route = createToggle.createRoute(obj);
let result = set.fileFinishedImporting("modules/user_settings/defs/native/QuestHomeSetting.tsx");

export default route;
