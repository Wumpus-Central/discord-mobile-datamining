// === Module 16249: VibegrationsEffortTiers ===

// Module 16249 (VibegrationsEffortTiers)
import util from "util" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import VibegrationsModelLabels from "VibegrationsModelLabels" /* 16250 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

require = fn;
let closure_2 = ["thinking"];
let closure_3 = ["fast"];
let obj = { simple: _modDef3715.Mo0a1m, balanced: _modDef3715.dkt78K, complex: _modDef3715.Ly6zYL };
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsEffortTiers.tsx");

export const vibegrationsTierLabel = function vibegrationsTierLabel(value) {
  let stringResult = value;
  const modelTierMessageResult = VibegrationsModelLabels.modelTierMessage(value);
  if (null != modelTierMessageResult) {
    const intl = util.intl;
    stringResult = intl.string(modelTierMessageResult);
  }
  return stringResult;
};
export const vibegrationsTierDescription = function vibegrationsTierDescription(tier) {
  const intl = util.intl;
  return intl.string(obj[tier]);
};
export const vibegrationsTierModel = function vibegrationsTierModel(settings, tiers, tier) {
  const models = settings.models;
  let tmp;
  if (models != null) {
    tmp = models[tier];
  }
  if (tmp == null) {
    let model;
    if (tiers != null) {
      if (tiers[tier] != null) {
        model = tmp4.model;
      }
    }
    tmp = model;
  }
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
export const vibegrationsWithTier = function vibegrationsWithTier(tier, tier2) {
  let tmp = tier;
  if (tier2 !== tier.tier) {
    const thinking = tier.thinking;
    obj = {};
    const merged = Object.assign(_objectWithoutProperties(tier, closure_2));
    obj.tier = tier2;
    tmp = obj;
  }
  return tmp;
};
export const vibegrationsPickTierModel = function vibegrationsPickTierModel(settings, tier, arg2) {
  obj = {};
  const merged = Object.assign(settings);
  const obj2 = {};
  const merged1 = Object.assign(settings.models);
  obj2[tier] = arg2;
  obj.models = obj2;
  return obj;
};
export const vibegrationsCeilingSupportsFast = function vibegrationsCeilingSupportsFast(settings, tiers, main) {
  ({ tier, models } = settings);
  let tmp;
  if (models != null) {
    tmp = models[tier];
  }
  if (tmp == null) {
    let model;
    if (tiers != null) {
      if (tiers[tier] != null) {
        model = tmp4.model;
      }
    }
    tmp = model;
  }
  if (tmp == null) {
    tmp = null;
  }
  c0 = tmp;
  let tmp5 = null != tmp;
  if (tmp5) {
    const found = main.find((id) => id.id === c0);
    let supports_fast;
    if (found != null) {
      supports_fast = found.supports_fast;
    }
    tmp5 = true === supports_fast;
  }
  return tmp5;
};
export const vibegrationsNormalizeFast = function vibegrationsNormalizeFast(vibegrationsWithTierResult, tiers, main) {
  const tmp = _objectWithoutProperties(vibegrationsWithTierResult, closure_3);
  let tmp2 = tmp;
  if (true === vibegrationsWithTierResult.fast) {
    ({ tier, models } = vibegrationsWithTierResult);
    let tmp3;
    if (models != null) {
      tmp3 = models[tier];
    }
    if (tmp3 == null) {
      let model;
      if (tiers != null) {
        if (tiers[tier] != null) {
          model = tmp6.model;
        }
      }
      tmp3 = model;
    }
    if (tmp3 == null) {
      tmp3 = null;
    }
    c0 = tmp3;
    let tmp7 = null != tmp3;
    if (tmp7) {
      const found = main.find((id) => id.id === c0);
      let supports_fast;
      if (found != null) {
        supports_fast = found.supports_fast;
      }
      tmp7 = true === supports_fast;
    }
    tmp2 = tmp;
    if (tmp7) {
      obj = {};
      const merged = Object.assign(tmp);
      obj.fast = true;
      tmp2 = obj;
    }
  }
  return tmp2;
};