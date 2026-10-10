// === Module 17044: ConjureEffortTiers ===

// Module 17044 (ConjureEffortTiers)
import util from "util" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import ConjureModelLabels from "ConjureModelLabels" /* 17045 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

require = fn;
let closure_2 = ["thinking"];
let closure_3 = ["fast"];
let obj = { simple: _modDef3849.Mqb8mc, balanced: _modDef3849.zCZfA6, complex: _modDef3849["8l2atm"] };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/model_settings/ConjureEffortTiers.tsx");

export const conjureTierLabel = function conjureTierLabel(value) {
  let stringResult = value;
  const modelTierMessageResult = ConjureModelLabels.modelTierMessage(value);
  if (null != modelTierMessageResult) {
    const intl = util.intl;
    stringResult = intl.string(modelTierMessageResult);
  }
  return stringResult;
};
export const conjureTierDescription = function conjureTierDescription(tier) {
  const intl = util.intl;
  return intl.string(obj[tier]);
};
export const conjureTierModel = function conjureTierModel(settings, tiers, tier) {
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
export const conjureWithTier = function conjureWithTier(tier, tier2) {
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
export const conjurePickTierModel = function conjurePickTierModel(settings, tier, arg2) {
  obj = {};
  const merged = Object.assign(settings);
  const obj2 = {};
  const merged1 = Object.assign(settings.models);
  obj2[tier] = arg2;
  obj.models = obj2;
  return obj;
};
export const conjureCeilingSupportsFast = function conjureCeilingSupportsFast(settings, tiers, main) {
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
export const conjureNormalizeFast = function conjureNormalizeFast(conjurePickTierModelResult) {
  const tmp = _objectWithoutProperties(conjurePickTierModelResult, closure_3);
  let tmp2 = tmp;
  if (true === conjurePickTierModelResult.fast) {
    obj = {};
    const merged = Object.assign(tmp);
    obj.fast = true;
    tmp2 = obj;
  }
  return tmp2;
};