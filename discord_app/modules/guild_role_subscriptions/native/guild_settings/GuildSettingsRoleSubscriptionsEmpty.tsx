// === Module 17875: GuildSettingsRoleSubscriptionsEmpty ===

// Module 17875 (GuildSettingsRoleSubscriptionsEmpty)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ApplicationConstants from "ApplicationConstants" /* 1360 */;
import useNavigation from "useNavigation" /* 1490 */;
import useGuildApplicationDefault from "useGuildApplication" /* 17876 */;
import PlaceholderDefault from "Placeholder" /* 17877 */;
import GuildSettingsRoleSubscriptionWelcomeViewDefault from "GuildSettingsRoleSubscriptionWelcomeView" /* 17878 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guild, guildId;

let closure_4;
let hasOwnProperty;
({ GuildFeatures: closure_4, GuildSettingsSections: hasOwnProperty } = Constants);
const ApplicationTypes = ApplicationConstants.ApplicationTypes;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let tmp7;
  const obj = react2;
  const cResult = obj.c(3);
  guild = guild.guild;
  const obj2 = useNavigation;
  const str = obj2.useNavigation();
  const tmp4 = useGuildApplicationDefault(guild.id, ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS);
  if (tmp4.loading) {
    let first;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp18 = jsx(PlaceholderDefault, {});
      cResult[0] = tmp18;
      first = tmp18;
    } else {
      first = cResult[0];
    }
    tmp7 = first;
  } else {
    const features = guild.features;
    if (!features.has(constants.CREATOR_MONETIZABLE)) {
      const features2 = guild.features;
      if (!features2.has(constants.CREATOR_MONETIZABLE_PROVISIONAL)) {
        if (cResult[1] !== guild) {
          const tmp9 = jsx(GuildSettingsRoleSubscriptionWelcomeViewDefault, { guild });
          cResult[1] = guild;
          cResult[2] = tmp9;
          tmp7 = tmp9;
        } else {
          tmp7 = cResult[2];
        }
      }
    }
    if (null == tmp5) {
      const replaced = str.replace(hasOwnProperty.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION);
      tmp7 = null;
    } else {
      const replaced1 = str.replace(hasOwnProperty.ROLE_SUBSCRIPTIONS_TIERS);
      tmp7 = null;
    }
  }
  return tmp7;
}) : ((guild) => {
  let tmp7;
  guild = guild.guild;
  const obj = useNavigation;
  const str = obj.useNavigation();
  const tmp3 = useGuildApplicationDefault(guild.id, ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS);
  if (tmp3.loading) {
    tmp7 = jsx(PlaceholderDefault, {});
  } else {
    const features = guild.features;
    if (!features.has(constants.CREATOR_MONETIZABLE)) {
      const features2 = guild.features;
      if (!features2.has(constants.CREATOR_MONETIZABLE_PROVISIONAL)) {
        tmp7 = jsx(GuildSettingsRoleSubscriptionWelcomeViewDefault, { guild });
      }
    }
    if (null == tmp4) {
      const replaced = str.replace(hasOwnProperty.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION);
      tmp7 = null;
    } else {
      const replaced1 = str.replace(hasOwnProperty.ROLE_SUBSCRIPTIONS_TIERS);
      tmp7 = null;
    }
  }
  return tmp7;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let tmp6;
  let tmp8;
  const obj = guildId(576);
  const cResult = obj.c(6);
  const tmp = guildId;
  guildId = guildId.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function n() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (null == stateFromStores) {
    let tmp12;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp15 = jsx(PlaceholderDefault, {});
      cResult[3] = tmp15;
      tmp12 = tmp15;
    } else {
      tmp12 = cResult[3];
    }
    tmp8 = tmp12;
  } else if (cResult[4] !== stateFromStores) {
    const tmp11 = <closure_8 guild={stateFromStores} />;
    cResult[4] = stateFromStores;
    cResult[5] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[5];
  }
  return tmp8;
}) : ((guildId) => {
  let tmp5;
  guildId = guildId.guildId;
  const items = [GuildStore];
  const obj = guildId(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  if (null == stateFromStores) {
    tmp5 = jsx(PlaceholderDefault, {});
  } else {
    tmp5 = <closure_8 guild={stateFromStores} />;
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEmpty.tsx");

export default tmp4;