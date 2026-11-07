// === Module 17505: GuildRoleSubscriptionsSetting ===

// Module 17505 (GuildRoleSubscriptionsSetting)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17506 */;
import useUserRoleSubscriptionRelationshipDefault from "useUserRoleSubscriptionRelationship" /* 17507 */;
import TicketIcon from "TicketIcon" /* 17508 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
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