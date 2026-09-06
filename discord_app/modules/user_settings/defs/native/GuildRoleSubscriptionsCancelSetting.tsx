// discord_app/modules/user_settings/defs/native/GuildRoleSubscriptionsCancelSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["7j5bMU"]);
  },
  parent: SettingsConstants.MobileUserSettings.PREMIUM,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS_CANCEL,
    getComponent() {
      return require("GuildRoleSubscriptionCancelSettingScreen").default;
    },
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsCancelSetting.tsx");

export default route;
