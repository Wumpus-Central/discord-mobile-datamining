// discord_app/modules/user_settings/defs/native/AccountWebAuthnNameSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["cY/IOu"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT_WEB_AUTHN_VIEW,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.WEBAUTHN_NAME,
    getComponent() {
      return require("WebAuthnNameStep").default;
    },
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountWebAuthnNameSetting.tsx");

export default route;
