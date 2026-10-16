// === Module 16178: GuildRoleSubscriptionsSetting ===

// Module 16178 (GuildRoleSubscriptionsSetting)
import Constants from "Constants" /* 1087 */;
import util from "util" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8213 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 16179 */;
import useUserRoleSubscriptionRelationshipDefault from "useUserRoleSubscriptionRelationship" /* 16180 */;
import TicketIcon from "TicketIcon" /* 16181 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsSetting.tsx");

export default route;