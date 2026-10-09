// === Module 10445: useShowChannelOptInNotice ===

// Module 10445 (useShowChannelOptInNotice)
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5973 */;

const require = globalThis.__r;

const require = fn;
const NULL_STRING_GUILD_ID = fn(1085).NULL_STRING_GUILD_ID;
const ChannelFlags = fn(2071).ChannelFlags;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/opt_in_channels/useShowChannelOptInNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useShowChannelOptInNotice(getGuildId) {
  _require = getGuildId;
  const cResult = require("c").c(11);
  const obj = require("c");
  let guildId;
  if (getGuildId != null) {
    guildId = getGuildId.getGuildId();
  }
  const optInEnabledForGuild = require("isOptInEnabled").useOptInEnabledForGuild(null != guildId ? getGuildId.guild_id : NULL_STRING_GUILD_ID);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildSettingsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== getGuildId) {
    const fn = function s() {
      let result = null != closure_0;
      if (result) {
        result = UserGuildSettingsStore.isChannelRecordOrParentOptedIn(tmp);
      }
      return result;
    };
    cResult[1] = getGuildId;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj2 = require("isOptInEnabled");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp8);
  const tmpResult = require("initialize");
  let guild_id;
  if (getGuildId != null) {
    guild_id = getGuildId.guild_id;
  }
  if (guild_id == null) {
    guild_id = NULL_STRING_GUILD_ID;
  }
  const canSeeOnboardingHome = require("OnboardingHomeUtils").useCanSeeOnboardingHome(guild_id);
  if (null == getGuildId) {
    return false;
  } else {
    if (cResult[3] === getGuildId) {
      if (cResult[4] === canSeeOnboardingHome) {
        let tmp12 = cResult[5];
      }
      if (cResult[6] === getGuildId) {
        if (cResult[7] === optInEnabledForGuild) {
          if (cResult[8] === stateFromStores) {
            if (cResult[9] === tmp12) {
              let tmp15 = cResult[10];
            }
            return tmp15;
          }
        }
      }
      let tmp16 = optInEnabledForGuild;
      if (optInEnabledForGuild) {
        tmp16 = !tmp12;
      }
      if (tmp16) {
        tmp16 = !stateFromStores;
      }
      if (tmp16) {
        tmp16 = !getGuildId.isThread();
      }
      cResult[6] = getGuildId;
      cResult[7] = optInEnabledForGuild;
      cResult[8] = stateFromStores;
      cResult[9] = tmp12;
      cResult[10] = tmp16;
      tmp15 = tmp16;
    }
    let hasFlagResult = canSeeOnboardingHome;
    if (canSeeOnboardingHome) {
      hasFlagResult = getGuildId.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL);
    }
    cResult[3] = getGuildId;
    cResult[4] = canSeeOnboardingHome;
    cResult[5] = hasFlagResult;
    tmp12 = hasFlagResult;
  }
  const tmpResult2 = require("OnboardingHomeUtils");
}) : (function useShowChannelOptInNotice(getGuildId) {
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
});