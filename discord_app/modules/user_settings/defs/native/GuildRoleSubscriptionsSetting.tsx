// === Module 17543: GuildRoleSubscriptionsSetting ===

// Module 17543 (GuildRoleSubscriptionsSetting)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8507 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17544 */;
import useUserRoleSubscriptionRelationshipDefault from "useUserRoleSubscriptionRelationship" /* 17545 */;
import TicketIcon from "TicketIcon" /* 17546 */;
import SettingBuilders from "SettingBuilders" /* 11694 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const constants = GuildRoleSubscriptionsConstants.UserGuildRoleSubscriptionRelationship;
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.trSpHX);
  },
  parent: SettingsConstants.MobileUserSettings.PREMIUM,
  IconComponent: TicketIcon.TicketIcon,
  usePredicate: function useHasGuildRoleSubscriptionsSetting() {
    return useUserRoleSubscriptionRelationshipDefault() === constants.SUBSCRIBED;
  },
  screen: {
    route: Constants.UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS,
    getComponent() {
      return require("UserSettingsGuildRoleSubscriptions").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsSetting.tsx");

export default route;