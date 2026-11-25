// === Module 16449: defs/QuestHomeSetting ===

// Module 16449 (defs/QuestHomeSetting)
import Constants from "Constants" /* 1071 */;
import util from "util" /* 1112 */;
import QuestContent from "QuestContent" /* 6845 */;
import utils_QuestUtils from "utils/QuestUtils" /* 8345 */;
import QuestsEligibility from "QuestsEligibility" /* 9851 */;
import QuestsIcon from "QuestsIcon" /* 14244 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
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