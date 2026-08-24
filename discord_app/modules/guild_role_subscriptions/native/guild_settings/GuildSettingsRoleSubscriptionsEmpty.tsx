// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEmpty.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import PlaceholderDefault from "../components/Placeholder.tsx";
import closure_3 from "../../../../stores/GuildStore.tsx";
import ME from "../../../../Constants.tsx";
import { ApplicationTypes } from "../../../applications/ApplicationConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
function GuildSettingsRoleSubscriptionsEmptyContent(guild) {
  guild = guild.guild;
  let obj = useNavigation;
  const str = obj.useNavigation();
  if (tmp3.loading) {
    let tmp7 = jsx(tmp2(16994), {});
  } else {
    const features = guild.features;
    if (!features.has(constants.CREATOR_MONETIZABLE)) {
      const features2 = guild.features;
      if (!features2.has(tmp5.CREATOR_MONETIZABLE_PROVISIONAL)) {
        obj = { guild: null };
        obj[0] = guild;
        tmp7 = jsx(tmp2(16995), { guild: null });
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
noopAll;
({ GuildFeatures: c4, GuildSettingsSections: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEmpty.tsx");

export default function GuildSettingsRoleSubscriptionsEmpty(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(589);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_3.getGuild(guildId));
  if (null == stateFromStores) {
    let tmp5 = jsx(PlaceholderDefault, {});
  } else {
    obj = { guild: null };
    obj[0] = stateFromStores;
    tmp5 = <GuildSettingsRoleSubscriptionsEmptyContent guild={null} />;
  }
  return tmp5;
};