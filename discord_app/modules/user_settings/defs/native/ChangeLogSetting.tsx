// === Module 15368: ChangeLogSetting ===

// Module 15368 (ChangeLogSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4812 */;
import ChangeLogModal from "ChangeLogModal" /* 15369 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.LRmNAl);
  },
  parent: null,
  IconComponent: CircleInformationIcon.CircleInformationIcon,
  screen: {
    route: UserSettingsSections.CHANGE_LOG,
    getComponent() {
      return ChangeLogModal.ChangeLogScreen;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ChangeLogSetting.tsx");

export default route;