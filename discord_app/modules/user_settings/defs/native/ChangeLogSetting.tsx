// === Module 16837: ChangeLogSetting ===

// Module 16837 (ChangeLogSetting)
import Constants from "Constants" /* 1071 */;
import util from "util" /* 1112 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5498 */;
import ChangeLogModal from "ChangeLogModal" /* 16838 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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