// === Module 11280: useShowChannelOptInNotice ===

// Module 11280 (useShowChannelOptInNotice)
import closure_2 from "updateUserGuildSettingsInternal" /* 4702 */;
import { NULL_STRING_GUILD_ID } from "ME" /* 673 */;
import { ChannelFlags } from "set" /* 1393 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/opt_in_channels/useShowChannelOptInNotice.tsx");

export default function useShowChannelOptInNotice(getGuildId) {
  const _require = getGuildId;
  let guildId;
  if (getGuildId != null) {
    guildId = getGuildId.getGuildId();
  }
  let optInEnabledForGuild = _require(7290).useOptInEnabledForGuild(null != guildId ? getGuildId.guild_id : NULL_STRING_GUILD_ID);
  let tmpResult = tmp(586);
  const items = [closure_2];
  const stateFromStores = tmpResult.useStateFromStores(items, () => {
    let result = null != closure_0;
    if (result) {
      result = closure_1_2.isChannelRecordOrParentOptedIn(tmp);
    }
    return result;
  });
  tmpResult = tmp(6078);
  let guild_id;
  if (getGuildId != null) {
    guild_id = getGuildId.guild_id;
  }
  if (guild_id == null) {
    guild_id = NULL_STRING_GUILD_ID;
  }
  let canSeeOnboardingHome = tmpResult.useCanSeeOnboardingHome(guild_id);
  if (null == getGuildId) {
    return false;
  } else {
    if (canSeeOnboardingHome) {
      canSeeOnboardingHome = getGuildId.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL);
    }
    if (optInEnabledForGuild) {
      optInEnabledForGuild = !canSeeOnboardingHome;
    }
    if (optInEnabledForGuild) {
      optInEnabledForGuild = !stateFromStores;
    }
    if (optInEnabledForGuild) {
      optInEnabledForGuild = !getGuildId.isThread();
    }
    return optInEnabledForGuild;
  }
  const obj = _require(7290);
};