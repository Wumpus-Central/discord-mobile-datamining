// === Module 14619: SensitiveContentFilterSetting ===

// Module 14619 (SensitiveContentFilterSetting)
import Constants from "Constants" /* 1085 */;
import intl7 from "intl" /* 1126 */;
import ImageWarningIcon from "ImageWarningIcon" /* 5865 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl7.intl;
    return intl.string(intl7.t["Hj/But"]);
  },
  IconComponent: ImageWarningIcon.ImageWarningIcon,
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: {
    route: UserSettingsSections.SENSITIVE_MEDIA_FILTERS,
    getComponent() {
      return require("SensitiveContentFiltersScreen").default;
    }
  },
  useSearchTerms() {
    const intl = intl7.intl;
    const items = [intl.string(intl7.t.uEz8JF), , , , , ];
    const intl2 = intl7.intl;
    items[1] = intl2.string(intl7.t["N/oRI+"]);
    const intl3 = intl7.intl;
    items[2] = intl3.string(intl7.t.QVdYsK);
    const intl4 = intl7.intl;
    items[3] = intl4.string(intl7.t["aWD+tu"]);
    const intl5 = intl7.intl;
    items[4] = intl5.string(intl7.t["5mnTa7"]);
    const intl6 = intl7.intl;
    items[5] = intl6.string(intl7.t["K0OWP+"]);
    return items;
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SensitiveContentFilterSetting.tsx");

export default route;