// === Module 6848: useGuildOnboardingAvailable ===

// Module 6848 (useGuildOnboardingAvailable)
import Constants from "Constants" /* 1085 */;
import ImpersonateStore from "ImpersonateStore" /* 2105 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((features) => {
  let first;
  let tmp6;
  _require = features;
  const obj = require("react");
  const cResult = obj.c(6);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ImpersonateStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== features) {
    const fn = function s() {
      let id;
      if (features != null) {
        id = features.id;
      }
      if (null == id) {
        return false;
      } else {
        const tmp4 = ImpersonateStore.isFullServerPreview(features.id) && ImpersonateStore.isOnboardingEnabled(features.id);
        return tmp4;
      }
    };
    cResult[1] = features;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let features1;
  const tmp8 = cResult[3];
  if (features != null) {
    features1 = features.features;
  }
  if (tmp8 === features1) {
    let tmp10;
    if (cResult[4] === stateFromStores) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  let tmp11 = stateFromStores;
  if (!tmp11) {
    let hasItem;
    if (features != null) {
      features = features.features;
      hasItem = features.has(GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS);
    }
    tmp11 = hasItem;
  }
  let features2;
  if (features != null) {
    features2 = features.features;
  }
  cResult[3] = features2;
  cResult[4] = stateFromStores;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((features) => {
  _require = features;
  const items = [ImpersonateStore];
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    if (features != null) {
      id = features.id;
    }
    if (null == id) {
      return false;
    } else {
      const tmp4 = ImpersonateStore.isFullServerPreview(features.id) && ImpersonateStore.isOnboardingEnabled(features.id);
      return tmp4;
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
const result = size.fileFinishedImporting("modules/guild_onboarding/useGuildOnboardingAvailable.tsx");

export default tmp2;
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