// === Module 16156: ChangeLogSetting ===

// Module 16156 (ChangeLogSetting)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5046 */;
import ChangeLogModal from "ChangeLogModal" /* 16157 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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