// === Module 14570: route ===

// Module 14570 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS_CANCEL,
  getComponent() {
    return require(14571) /* GuildRoleSubscriptionCancelSettingScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsCancelSetting.tsx");

export default route;