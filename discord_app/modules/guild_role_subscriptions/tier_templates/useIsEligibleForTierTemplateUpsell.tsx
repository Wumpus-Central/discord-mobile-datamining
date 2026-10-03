// === Module 16177: useIsEligibleForTierTemplateUpsell ===

// Module 16177 (useIsEligibleForTierTemplateUpsell)
import GuildStore from "GuildStore" /* 2074 */;

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1085).GuildFeatures;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/tier_templates/useIsEligibleForTierTemplateUpsell.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return GuildStore.getGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  const tmpResult = require("initialize");
  let features1;
  const guildEligibleForTierTemplates = require("GuildRoleSubscriptionsExperimentUtils").useGuildEligibleForTierTemplates(arg0);
  if (stateFromStores != null) {
    features1 = stateFromStores.features;
  }
  if (cResult[3] !== features1) {
    let hasItem;
    if (stateFromStores != null) {
      const features = stateFromStores.features;
      hasItem = features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
    }
    let tmp13 = true === hasItem;
    if (tmp13) {
      let hasItem1;
      if (stateFromStores != null) {
        const features2 = stateFromStores.features;
        hasItem1 = features2.has(GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
      }
      tmp13 = false === hasItem1;
    }
    let features3;
    if (stateFromStores != null) {
      features3 = stateFromStores.features;
    }
    cResult[3] = features3;
    cResult[4] = tmp13;
    let tmp10 = tmp13;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== stateFromStores) {
    const result = tmp(6763).canManageGuildRoleSubscriptions(stateFromStores);
    cResult[5] = stateFromStores;
    cResult[6] = result;
    let tmp17 = result;
    const tmpResult4 = tmp(6763);
  } else {
    tmp17 = cResult[6];
  }
  if (tmp10) {
    tmp10 = tmp17;
  }
  if (tmp10) {
    tmp10 = guildEligibleForTierTemplates;
  }
  return tmp10;
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  const obj = require("initialize");
  let hasItem;
  const guildEligibleForTierTemplates = require("GuildRoleSubscriptionsExperimentUtils").useGuildEligibleForTierTemplates(arg0);
  if (stateFromStores != null) {
    const features = stateFromStores.features;
    hasItem = features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
  }
  let result = true === hasItem;
  if (result) {
    let hasItem1;
    if (stateFromStores != null) {
      const features2 = stateFromStores.features;
      hasItem1 = features2.has(GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    }
    result = false === hasItem1;
  }
  const obj2 = require("GuildRoleSubscriptionsExperimentUtils");
  if (result) {
    result = tmpResult.canManageGuildRoleSubscriptions(stateFromStores);
  }
  if (result) {
    result = guildEligibleForTierTemplates;
  }
  return result;
});