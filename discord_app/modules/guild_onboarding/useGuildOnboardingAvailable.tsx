// === Module 6838: useGuildOnboardingAvailable ===

// Module 6838 (useGuildOnboardingAvailable)
import ImpersonateStore from "ImpersonateStore" /* 2105 */;

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1085).GuildFeatures;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/useGuildOnboardingAvailable.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((features) => {
  _require = features;
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ImpersonateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== features) {
    const fn = function s() {
      let id;
      if (user != null) {
        id = user.id;
      }
      if (null == id) {
        return false;
      } else {
        return ImpersonateStore.isFullServerPreview(user.id) && ImpersonateStore.isOnboardingEnabled(user.id);
      }
    };
    cResult[1] = features;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  let features1;
  if (features != null) {
    features1 = features.features;
  }
  if (cResult[3] === features1) {
    if (cResult[4] === stateFromStores) {
      let tmp9 = cResult[5];
    }
    return tmp9;
  }
  let tmp10 = stateFromStores;
  if (!stateFromStores) {
    let hasItem;
    if (features != null) {
      features = features.features;
      hasItem = features.has(GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS);
    }
    tmp10 = hasItem;
  }
  let features2;
  if (features != null) {
    features2 = features.features;
  }
  cResult[3] = features2;
  cResult[4] = stateFromStores;
  cResult[5] = tmp10;
  tmp9 = tmp10;
  const tmpResult = require("initialize");
}) : ((features) => {
  _require = features;
  const items = [ImpersonateStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => {
    let id;
    if (user != null) {
      id = user.id;
    }
    if (null == id) {
      return false;
    } else {
      return ImpersonateStore.isFullServerPreview(user.id) && ImpersonateStore.isOnboardingEnabled(user.id);
    }
  });
  if (!stateFromStores) {
    let hasItem;
    if (features != null) {
      features = features.features;
      hasItem = features.has(GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS);
    }
    stateFromStores = hasItem;
  }
  return stateFromStores;
});
export const isGuildOnboardingAvailable = function isGuildOnboardingAvailable(guild) {
  if (null == guild) {
    return false;
  } else {
    let hasItem = ImpersonateStore.isFullServerPreview(guild.id) && ImpersonateStore.isOnboardingEnabled(guild.id);
    if (!hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS);
    }
    return hasItem;
  }
};