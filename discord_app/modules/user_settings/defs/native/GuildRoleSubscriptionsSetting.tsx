// discord_app/modules/user_settings/defs/native/GuildRoleSubscriptionsSetting.tsx
import { UserGuildRoleSubscriptionRelationship as closure_3 } from "MAX_SUBSCRIPTION_TIERS";
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.trSpHX);
  },
  parent: require("MobileSetting").MobileSetting.PREMIUM,
  IconComponent: require("TicketIcon").TicketIcon,
  usePredicate: function useHasGuildRoleSubscriptionsSetting() {
    return require("../../../guild_role_subscriptions/useUserRoleSubscriptionRelationship.tsx")() === constants.SUBSCRIBED;
  },
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS,
  getComponent() {
    return require("../../../guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptions.tsx") /* GuildRoleSubscriptionsSectionHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("MAX_SUBSCRIPTION_TIERS").fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsSetting.tsx");

export default route;