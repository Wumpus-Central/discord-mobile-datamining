// discord_app/modules/conjure/model_settings/ConjureEffortTiers.tsx
import intl2 from "../../../intl/index.native.tsx";
import _modDef3723 from "../intl/ConjureUntranslated.messages.js";
import ConjureModelLabels from "ConjureModelLabels.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2 = ["thinking"];
let closure_3 = ["fast"];
let obj = { simple: _modDef3723.Mqb8mc, balanced: _modDef3723.zCZfA6, complex: _modDef3723["8l2atm"] };
const result = size.fileFinishedImporting("modules/conjure/model_settings/ConjureEffortTiers.tsx");

export const conjureTierLabel = function conjureTierLabel(value) {
  let stringResult = value;
  obj = ConjureModelLabels;
  const modelTierMessageResult = obj.modelTierMessage(value);
  if (null != modelTierMessageResult) {
    const intl = intl2.intl;
    stringResult = intl.string(modelTierMessageResult);
  }
  return stringResult;
};
export const conjureTierDescription = function conjureTierDescription(tier) {
  const intl = intl2.intl;
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
    obj = { tier: tier2 };
    const merged = Object.assign(_objectWithoutProperties(tier, closure_2));
    tmp = obj;
  }
  return tmp;
};
export const conjurePickTierModel = function conjurePickTierModel(settings, tier, arg2) {
  let obj2;
  obj = { models: obj2 };
  const merged = Object.assign(settings);
  obj2 = {};
  const merged1 = Object.assign(settings.models);
  obj2[tier] = arg2;
  return obj;
};
export const conjureCeilingSupportsFast = function conjureCeilingSupportsFast(settings, tiers, main) {
  let models;
  let tier;
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
  let c0 = tmp;
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
  const fast = conjurePickTierModelResult.fast;
  const tmp = _objectWithoutProperties(conjurePickTierModelResult, closure_3);
  let tmp2 = tmp;
  if (true === fast) {
    obj = { fast: true };
    const merged = Object.assign(tmp);
    tmp2 = obj;
  }
  return tmp2;
};
