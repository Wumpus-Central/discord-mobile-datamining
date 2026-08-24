// discord_app/modules/user_settings/defs/native/GuildRoleSubscriptionsCancelSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { GuildRoleSubscriptionCancelSettingScreen } from "../../billing/native/GuildRoleSubscriptionCancelSettingScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["7j5bMU"]);
  },
  parent: MobileUserSettings.MobileUserSettings.PREMIUM,
  unsearchable: true,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS_CANCEL,
  getComponent() {
    return GuildRoleSubscriptionCancelSettingScreen /* GuildRoleSubscriptionCancelSettingScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsCancelSetting.tsx");

export default route;