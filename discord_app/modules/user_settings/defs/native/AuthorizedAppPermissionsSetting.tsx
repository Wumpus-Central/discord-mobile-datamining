// discord_app/modules/user_settings/defs/native/AuthorizedAppPermissionsSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.xrmhRX);
  },
  parent: SettingsConstants.MobileUserSettings.AUTHORIZED_APP,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.AUTHORIZED_APP_PERMISSIONS,
    getComponent() {
      return require("AuthorizedAppPermissionsScreen").default;
    },
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppPermissionsSetting.tsx");

export default route;
