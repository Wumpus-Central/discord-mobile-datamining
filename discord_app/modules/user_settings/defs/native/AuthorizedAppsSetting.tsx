// discord_app/modules/user_settings/defs/native/AuthorizedAppsSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import KeyIcon from "../../../../design/components/Icon/native/redesign/generated/KeyIcon.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["f6kk+r"]);
  },
  parent: SettingsConstants.MobileUserSettings.CONNECTIONS,
  IconComponent: KeyIcon.KeyIcon,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.AUTHORIZED_APPS,
    getComponent() {
      return require("ConnectedAppsScreen").default;
    },
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppsSetting.tsx");

export default route;
