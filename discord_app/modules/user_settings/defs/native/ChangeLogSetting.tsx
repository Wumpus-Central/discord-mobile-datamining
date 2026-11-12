// === Module 18053: ChangeLogSetting ===

// Module 18053 (ChangeLogSetting)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5974 */;
import ChangeLogModal from "ChangeLogModal" /* 18054 */;
import SettingBuilders from "SettingBuilders" /* 12311 */;
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