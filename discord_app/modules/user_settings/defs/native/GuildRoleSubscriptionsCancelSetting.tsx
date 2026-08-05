import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { GuildRoleSubscriptionCancelSettingScreen } from "../../billing/native/GuildRoleSubscriptionCancelSettingScreen.tsx";
// discord_app/modules/user_settings/defs/native/GuildRoleSubscriptionsCancelSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["7j5bMU"]);
  },
  parent: require("MobileSetting").MobileSetting.PREMIUM,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS_CANCEL,
  getComponent() {
    return GuildRoleSubscriptionCancelSettingScreen /* GuildRoleSubscriptionCancelSettingScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsCancelSetting.tsx");

export default route;