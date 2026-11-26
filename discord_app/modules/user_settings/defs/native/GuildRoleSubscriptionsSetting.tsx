// === Module 16815: GuildRoleSubscriptionsSetting ===

// Module 16815 (GuildRoleSubscriptionsSetting)
import Constants from "Constants" /* 1071 */;
import util from "util" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 16816 */;
import useUserRoleSubscriptionRelationshipDefault from "useUserRoleSubscriptionRelationship" /* 16817 */;
import TicketIcon from "TicketIcon" /* 16818 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
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