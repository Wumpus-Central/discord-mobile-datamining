// discord_app/modules/user_settings/defs/native/GuildRoleSubscriptionsSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import GuildRoleSubscriptionsConstants from "../../../guild_role_subscriptions/GuildRoleSubscriptionsConstants.tsx";
import useUserRoleSubscriptionRelationshipDefault from "../../../guild_role_subscriptions/useUserRoleSubscriptionRelationship.tsx";
import TicketIcon from "../../../../design/components/Icon/native/redesign/generated/TicketIcon.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
    },
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsSetting.tsx");

export default route;
