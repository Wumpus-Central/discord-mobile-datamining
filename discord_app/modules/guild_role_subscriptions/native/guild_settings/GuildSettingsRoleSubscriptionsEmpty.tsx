// === Module 18137: GuildSettingsRoleSubscriptionsEmpty ===

// Module 18137 (GuildSettingsRoleSubscriptionsEmpty)
import useNavigation from "useNavigation" /* 1484 */;
import PlaceholderDefault from "Placeholder" /* 18139 */;
import GuildSettingsRoleSubscriptionWelcomeViewDefault from "GuildSettingsRoleSubscriptionWelcomeView" /* 18140 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2063 */;

require = fn;
function GuildSettingsRoleSubscriptionsEmptyContent(guild) {
  guild = guild.guild;
  const str = useNavigation.useNavigation();
  if (tmp3.loading) {
    let tmp7 = jsx(PlaceholderDefault, {});
  } else {
    const features = guild.features;
    if (!features.has(constants.CREATOR_MONETIZABLE)) {
      const features2 = guild.features;
      if (!features2.has(constants.CREATOR_MONETIZABLE_PROVISIONAL)) {
        const obj2 = { guild };
        tmp7 = jsx(GuildSettingsRoleSubscriptionWelcomeViewDefault, { guild });
      }
    }
    if (null == tmp4) {
      const replaced = str.replace(constants2.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION);
      tmp7 = null;
    } else {
      const replaced1 = str.replace(constants2.ROLE_SUBSCRIPTIONS_TIERS);
      tmp7 = null;
    }
  }
  return tmp7;
}
const Constants = fn(1074);
({ GuildFeatures: closure_4, GuildSettingsSections: hasOwnProperty } = Constants);
const ApplicationTypes = fn(1349).ApplicationTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEmpty.tsx");

export default function GuildSettingsRoleSubscriptionsEmpty(guildId) {
  guildId = guildId.guildId;
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  if (null == stateFromStores) {
    let tmp5 = jsx(PlaceholderDefault, {});
  } else {
    const obj2 = { guild: stateFromStores };
    tmp5 = <GuildSettingsRoleSubscriptionsEmptyContent guild={stateFromStores} />;
  }
  return tmp5;
};