// discord_app/modules/opt_in_channels/useShowChannelOptInNotice.tsx
import closure_2 from "../../stores/UserGuildSettingsStore.tsx";
import { NULL_STRING_GUILD_ID } from "../../Constants.tsx";
import { ChannelFlags } from "../channel/ChannelConstants.tsx";
import { useOptInEnabledForGuild } from "isOptInEnabled.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/opt_in_channels/useShowChannelOptInNotice.tsx");

export default function useShowChannelOptInNotice(getGuildId) {
  const _require = getGuildId;
  let guildId;
  if (getGuildId != null) {
    guildId = getGuildId.getGuildId();
  }
  let optInEnabledForGuild = require("isOptInEnabled.tsx").useOptInEnabledForGuild(null != guildId ? getGuildId.guild_id : NULL_STRING_GUILD_ID);
  let tmpResult = tmp(589);
  const items = [closure_2];
  const stateFromStores = tmpResult.useStateFromStores(items, () => {
    let result = null != closure_0;
    if (result) {
      result = closure_1_2.isChannelRecordOrParentOptedIn(tmp);
    }
    return result;
  });
  tmpResult = tmp(6021);
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
  const obj = useOptInEnabledForGuild;
};