// === Module 17113: ChangeLogSetting ===

// Module 17113 (ChangeLogSetting)
import Constants from "Constants" /* 1071 */;
import util from "util" /* 1112 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5716 */;
import ChangeLogModal from "ChangeLogModal" /* 17114 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
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