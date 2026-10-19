// === Module 16072: defs/QuestHomeSetting ===

// Module 16072 (defs/QuestHomeSetting)
import Constants from "Constants" /* 1087 */;
import util from "util" /* 1128 */;
import QuestContent from "QuestContent" /* 6663 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7739 */;
import QuestsEligibility from "QuestsEligibility" /* 9480 */;
import QuestsIcon from "QuestsIcon" /* 13968 */;
import SettingBuilders from "SettingBuilders" /* 11099 */;
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