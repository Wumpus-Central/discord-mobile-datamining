// === Module 15265: GuildRoleSubscriptionsSetting ===

// Module 15265 (GuildRoleSubscriptionsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8049 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 15266 */;
import useUserRoleSubscriptionRelationshipDefault from "useUserRoleSubscriptionRelationship" /* 15267 */;
import TicketIcon from "TicketIcon" /* 15268 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

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