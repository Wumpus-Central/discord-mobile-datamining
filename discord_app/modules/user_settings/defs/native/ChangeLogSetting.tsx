// === Module 17817: ChangeLogSetting ===

// Module 17817 (ChangeLogSetting)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5872 */;
import ChangeLogModal from "ChangeLogModal" /* 17818 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
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