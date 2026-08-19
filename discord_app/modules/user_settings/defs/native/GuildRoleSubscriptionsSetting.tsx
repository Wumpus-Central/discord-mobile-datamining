// === Module 14550: route ===

// Module 14550 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS" /* 14551 */;
import useUserRoleSubscriptionRelationshipDefault from "useUserRoleSubscriptionRelationship" /* 14552 */;
import TicketIcon from "TicketIcon" /* 14553 */;
import createToggle from "createToggle" /* 10669 */;

let closure_3 = MAX_SUBSCRIPTION_TIERS.UserGuildRoleSubscriptionRelationship;
const obj = {
  route: ME.UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS,
  getComponent() {
    return require(14555) /* GuildRoleSubscriptionsSectionHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsSetting.tsx");

export default route;