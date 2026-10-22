// === Module 16797: ChangeLogSetting ===

// Module 16797 (ChangeLogSetting)
import Constants from "Constants" /* 1087 */;
import util from "util" /* 1128 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5672 */;
import ChangeLogModal from "ChangeLogModal" /* 16798 */;
import SettingBuilders from "SettingBuilders" /* 11172 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.LRmNAl);
  },
  parent: null,
  IconComponent: CircleInformationIcon.CircleInformationIcon,
  screen: {
    route: Constants.UserSettingsSections.CHANGE_LOG,
    getComponent() {
      return ChangeLogModal.ChangeLogScreen;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ChangeLogSetting.tsx");

export default route;