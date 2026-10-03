// === Module 14798: defs/QuestHomeSetting ===

// Module 14798 (defs/QuestHomeSetting)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import QuestContent from "QuestContent" /* 5628 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7206 */;
import QuestsEligibility from "QuestsEligibility" /* 10912 */;
import QuestsIcon from "QuestsIcon" /* 14799 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

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
      const obj = utils_QuestUtils;
      const result = obj.setQuestHomeUtmContext({ fromContent: QuestContent.QuestContent.USER_SETTINGS });
      return true;
    };
  }
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/QuestHomeSetting.tsx");

export default route;