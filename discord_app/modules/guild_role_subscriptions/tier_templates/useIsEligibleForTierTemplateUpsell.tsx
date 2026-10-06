// === Module 16221: useIsEligibleForTierTemplateUpsell ===

// Module 16221 (useIsEligibleForTierTemplateUpsell)
import Constants from "Constants" /* 1085 */;
import GuildStore from "GuildStore" /* 2074 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp11;
  let tmp18;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return GuildStore.getGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let features1;
  const tmpResult3 = require("GuildRoleSubscriptionsExperimentUtils");
  const guildEligibleForTierTemplates = tmpResult3.useGuildEligibleForTierTemplates(arg0);
  const tmp9 = cResult[3];
  if (stateFromStores != null) {
    features1 = stateFromStores.features;
  }
  if (tmp9 !== features1) {
    let hasItem;
    if (stateFromStores != null) {
      const features = stateFromStores.features;
      hasItem = features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
    }
    let tmp14 = true === hasItem;
    if (tmp14) {
      let hasItem1;
      if (stateFromStores != null) {
        const features2 = stateFromStores.features;
        hasItem1 = features2.has(GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
      }
      tmp14 = false === hasItem1;
    }
    let features3;
    if (stateFromStores != null) {
      features3 = stateFromStores.features;
    }
    cResult[3] = features3;
    cResult[4] = tmp14;
    tmp11 = tmp14;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== stateFromStores) {
    const tmpResult4 = require("GuildRoleSubscriptionSettingUtils");
    const result = tmpResult4.canManageGuildRoleSubscriptions(stateFromStores);
    cResult[5] = stateFromStores;
    cResult[6] = result;
    tmp18 = result;
  } else {
    tmp18 = cResult[6];
  }
  if (tmp11) {
    tmp11 = tmp18;
  }
  if (tmp11) {
    tmp11 = guildEligibleForTierTemplates;
  }
  return tmp11;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [GuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  let hasItem;
  const obj2 = require("GuildRoleSubscriptionsExperimentUtils");
  const guildEligibleForTierTemplates = obj2.useGuildEligibleForTierTemplates(arg0);
  const tmp = _require;
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
  const tmpResult = tmp(6773);
  if (result) {
    result = tmpResult.canManageGuildRoleSubscriptions(stateFromStores);
  }
  if (result) {
    result = guildEligibleForTierTemplates;
  }
  return result;
});
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/tier_templates/useIsEligibleForTierTemplateUpsell.tsx");

export default tmp2;