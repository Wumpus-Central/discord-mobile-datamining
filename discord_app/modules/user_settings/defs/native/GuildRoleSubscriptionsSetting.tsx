// === Module 15018: GuildRoleSubscriptionsSetting ===

// Module 15018 (GuildRoleSubscriptionsSetting)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 15019 */;
import useUserRoleSubscriptionRelationshipDefault from "useUserRoleSubscriptionRelationship" /* 15020 */;
import TicketIcon from "TicketIcon" /* 15021 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const constants = GuildRoleSubscriptionsConstants.UserGuildRoleSubscriptionRelationship;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.trSpHX);
  },
  parent: SettingsConstants.MobileUserSettings.PREMIUM,
  IconComponent: TicketIcon.TicketIcon,
  usePredicate: () => useUserRoleSubscriptionRelationshipDefault() === constants.SUBSCRIBED,
  screen: {
    route: Constants.UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS,
    getComponent() {
      return require("UserSettingsGuildRoleSubscriptions").default;
    }
  }
});
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsSetting.tsx");

export default route;