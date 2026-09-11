// === Module 15048: defs/QuestHomeSetting ===

// Module 15048 (defs/QuestHomeSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import QuestContent from "QuestContent" /* 5500 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7794 */;
import QuestsEligibility from "QuestsEligibility" /* 11578 */;
import QuestsIcon from "QuestsIcon" /* 15049 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.JALI2K);
  },
  usePredicate() {
    return QuestsEligibility.getIsEligibleForQuests();
  },
  parent: null,
  IconComponent: QuestsIcon.QuestsIcon,
  screen: {
    route: Constants.UserSettingsSections.QUESTS,
    getComponent() {
      return require("QuestHomeSetting").default;
    }
  },
  usePreNavigationAction() {
    return () => {
      const obj = { fromContent: QuestContent.QuestContent.USER_SETTINGS };
      const result = obj.setQuestHomeUtmContext(obj);
      return true;
    };
  }
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/QuestHomeSetting.tsx");

export default route;