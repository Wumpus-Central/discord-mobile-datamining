// discord_app/modules/user_settings/defs/native/GuildRoleSubscriptionsSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import MAX_SUBSCRIPTION_TIERS from "../../../guild_role_subscriptions/GuildRoleSubscriptionsConstants.tsx";
import useUserRoleSubscriptionRelationshipDefault from "../../../guild_role_subscriptions/useUserRoleSubscriptionRelationship.tsx";
import TicketIcon from "../../../../design/components/Icon/native/redesign/generated/TicketIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { GuildRoleSubscriptionsSectionHeader } from "../../../guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptions.tsx";

let closure_3 = MAX_SUBSCRIPTION_TIERS.UserGuildRoleSubscriptionRelationship;
obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.trSpHX);
  },
  parent: MobileUserSettings.MobileUserSettings.PREMIUM,
  IconComponent: TicketIcon.TicketIcon,
  usePredicate: function useHasGuildRoleSubscriptionsSetting() {
    return useUserRoleSubscriptionRelationshipDefault() === constants.SUBSCRIBED;
  },
  screen: obj,
};
obj = {
  route: ME.UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS,
  getComponent() {
    return GuildRoleSubscriptionsSectionHeader /* GuildRoleSubscriptionsSectionHeader */.default;
  },
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsSetting.tsx");

export default route;
