// === Module 17411: ChangeLogSetting ===

// Module 17411 (ChangeLogSetting)
import Constants from "Constants" /* 1084 */;
import util from "util" /* 1125 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5724 */;
import ChangeLogModal from "ChangeLogModal" /* 17412 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
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