// === Module 10953: useShowChannelOptInNotice ===

// Module 10953 (useShowChannelOptInNotice)
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5010 */;

const require = globalThis.__r;

const require = fn;
const NULL_STRING_GUILD_ID = fn(1074).NULL_STRING_GUILD_ID;
const ChannelFlags = fn(2051).ChannelFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/opt_in_channels/useShowChannelOptInNotice.tsx");

export default function useShowChannelOptInNotice(getGuildId) {
  _require = getGuildId;
  let guildId;
  if (getGuildId != null) {
    guildId = getGuildId.getGuildId();
  }
  let optInEnabledForGuild = require("isOptInEnabled").useOptInEnabledForGuild(null != guildId ? getGuildId.guild_id : NULL_STRING_GUILD_ID);
  const obj = require("isOptInEnabled");
  const items = [UserGuildSettingsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let result = null != closure_0;
    if (result) {
      result = UserGuildSettingsStore.isChannelRecordOrParentOptedIn(tmp);
    }
    return result;
  });
  const tmpResult = require("initialize");
  let guild_id;
  if (getGuildId != null) {
    guild_id = getGuildId.guild_id;
  }
  if (guild_id == null) {
    guild_id = NULL_STRING_GUILD_ID;
  }
  let canSeeOnboardingHome = require("OnboardingHomeUtils").useCanSeeOnboardingHome(guild_id);
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
  const tmpResult2 = require("OnboardingHomeUtils");
};