// === Module 15623: ChangeLogSetting ===

// Module 15623 (ChangeLogSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4560 */;
import ChangeLogModal from "ChangeLogModal" /* 15624 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
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