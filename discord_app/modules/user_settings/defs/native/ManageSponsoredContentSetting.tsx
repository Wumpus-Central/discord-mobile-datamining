// discord_app/modules/user_settings/defs/native/ManageSponsoredContentSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2070 from "../../../ads/SponsoredContentPreferences.messages.js";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2070.yyhs9L);
  },
  parent: SettingsConstants.MobileUserSettings.SPONSORED_CONTENT_PREFERENCES,
  screen: {
    route: Constants.UserSettingsSections.MANAGE_SPONSORED_CONTENT,
    getComponent() {
      return require("ManageSponsoredContentScreen").default;
    },
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ManageSponsoredContentSetting.tsx");

export default route;
