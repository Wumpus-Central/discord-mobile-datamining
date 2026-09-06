// === Module 17678: GuildSettingsRoleSubscriptionsEmpty ===

// Module 17678 (GuildSettingsRoleSubscriptionsEmpty)
import useNavigation from "useNavigation" /* 1483 */;
import PlaceholderDefault from "Placeholder" /* 17680 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
function GuildSettingsRoleSubscriptionsEmptyContent(guild) {
  guild = guild.guild;
  let obj = useNavigation;
  const str = obj.useNavigation();
  if (tmp3.loading) {
    let tmp7 = jsx(tmp2(17680), {});
  } else {
    const features = guild.features;
    if (!features.has(constants.CREATOR_MONETIZABLE)) {
      const features2 = guild.features;
      if (!features2.has(tmp5.CREATOR_MONETIZABLE_PROVISIONAL)) {
        obj = { guild };
        tmp7 = jsx(tmp2(17681), { guild });
      }
    }
    if (null == tmp4) {
      const replaced = str.replace(constants2.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION);
      tmp7 = null;
    } else {
      const replaced1 = str.replace(constants2.ROLE_SUBSCRIPTIONS_TIERS);
      tmp7 = null;
    }
    tmp5 = constants;
  }
  return tmp7;
}
const Constants = fn(1074);
({ GuildFeatures: closure_4, GuildSettingsSections: hasOwnProperty } = Constants);
const ApplicationTypes = fn(1350).ApplicationTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEmpty.tsx");

export default function GuildSettingsRoleSubscriptionsEmpty(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  if (null == stateFromStores) {
    let tmp5 = jsx(PlaceholderDefault, {});
  } else {
    obj = { guild: stateFromStores };
    tmp5 = <GuildSettingsRoleSubscriptionsEmptyContent guild={stateFromStores} />;
  }
  return tmp5;
};