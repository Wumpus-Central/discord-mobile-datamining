// discord_app/modules/user_settings/defs/native/SensitiveContentFilterSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import ImageWarningIcon from "../../../../design/components/Icon/native/redesign/generated/ImageWarningIcon.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["Hj/But"]);
  },
  IconComponent: ImageWarningIcon.ImageWarningIcon,
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: {
    route: Constants.UserSettingsSections.SENSITIVE_MEDIA_FILTERS,
    getComponent() {
      return require("SensitiveContentFiltersScreen").default;
    },
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.uEz8JF), , , , ,];
    const intl2 = util.intl;
    items[1] = intl2.string(util.t["N/oRI+"]);
    const intl3 = util.intl;
    items[2] = intl3.string(util.t.QVdYsK);
    const intl4 = util.intl;
    items[3] = intl4.string(util.t["aWD+tu"]);
    const intl5 = util.intl;
    items[4] = intl5.string(util.t["5mnTa7"]);
    const intl6 = util.intl;
    items[5] = intl6.string(util.t["K0OWP+"]);
    return items;
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SensitiveContentFilterSetting.tsx");

export default route;
