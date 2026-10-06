// === Module 11092: useShowChannelOptInNotice ===

// Module 11092 (useShowChannelOptInNotice)
import Constants from "Constants" /* 1085 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const NULL_STRING_GUILD_ID = Constants.NULL_STRING_GUILD_ID;
const ChannelFlags = ChannelConstants.ChannelFlags;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((getGuildId) => {
  let first;
  let tmp9;
  _require = getGuildId;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(11);
  let guildId;
  const useOptInEnabledForGuild = require("isOptInEnabled").useOptInEnabledForGuild;
  require("isOptInEnabled");
  if (getGuildId != null) {
    guildId = getGuildId.getGuildId();
  }
  const optInEnabledForGuild = useOptInEnabledForGuild(null != guildId ? getGuildId.guild_id : NULL_STRING_GUILD_ID);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== getGuildId) {
    const fn = function s() {
      const result = null != getGuildId && UserGuildSettingsStore.isChannelRecordOrParentOptedIn(tmp);
      return result;
    };
    cResult[1] = getGuildId;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
  let guild_id;
  const useCanSeeOnboardingHome = tmp(6737).useCanSeeOnboardingHome;
  tmp(6737);
  if (getGuildId != null) {
    guild_id = getGuildId.guild_id;
  }
  if (guild_id == null) {
    guild_id = NULL_STRING_GUILD_ID;
  }
  const canSeeOnboardingHome = useCanSeeOnboardingHome(guild_id);
  if (null == getGuildId) {
    return false;
  } else {
    if (cResult[3] === getGuildId) {
      let tmp14;
      if (cResult[4] === canSeeOnboardingHome) {
        tmp14 = cResult[5];
      }
      if (cResult[6] === getGuildId) {
        if (cResult[7] === optInEnabledForGuild) {
          if (cResult[8] === stateFromStores) {
            let tmp17;
            if (cResult[9] === tmp14) {
              tmp17 = cResult[10];
            }
            return tmp17;
          }
        }
      }
      const tmp18 = optInEnabledForGuild && !tmp14 && !stateFromStores && !getGuildId.isThread();
      cResult[6] = getGuildId;
      cResult[7] = optInEnabledForGuild;
      cResult[8] = stateFromStores;
      cResult[9] = tmp14;
      cResult[10] = tmp18;
      tmp17 = tmp18;
    }
    const hasFlagResult = canSeeOnboardingHome && getGuildId.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL);
    cResult[3] = getGuildId;
    cResult[4] = canSeeOnboardingHome;
    cResult[5] = hasFlagResult;
    tmp14 = hasFlagResult;
  }
}) : ((getGuildId) => {
  _require = getGuildId;
  const tmp = _require;
  let guildId;
  const useOptInEnabledForGuild = require("isOptInEnabled").useOptInEnabledForGuild;
  require("isOptInEnabled");
  if (getGuildId != null) {
    guildId = getGuildId.getGuildId();
  }
  let optInEnabledForGuild = useOptInEnabledForGuild(null != guildId ? getGuildId.guild_id : NULL_STRING_GUILD_ID);
  const items = [UserGuildSettingsStore];
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(items, () => {
    const result = null != getGuildId && UserGuildSettingsStore.isChannelRecordOrParentOptedIn(tmp);
    return result;
  });
  let guild_id;
  const useCanSeeOnboardingHome = tmp(6737).useCanSeeOnboardingHome;
  tmp(6737);
  if (getGuildId != null) {
    guild_id = getGuildId.guild_id;
  }
  if (guild_id == null) {
    guild_id = NULL_STRING_GUILD_ID;
  }
  let canSeeOnboardingHome = useCanSeeOnboardingHome(guild_id);
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
});
let result = size.fileFinishedImporting("modules/opt_in_channels/useShowChannelOptInNotice.tsx");

export default tmp2;