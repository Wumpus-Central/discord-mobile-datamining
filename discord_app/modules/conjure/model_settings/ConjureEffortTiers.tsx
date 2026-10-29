// discord_app/modules/conjure/model_settings/ConjureEffortTiers.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3864 from "../intl/ConjureUntranslated.messages.js";
import ConjureModelLabels from "ConjureModelLabels.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";

require = fn;
let closure_3 = ["thinking"];
let closure_4 = ["fast"];
let obj = { simple: _modDef3864.Mqb8mc, balanced: _modDef3864.zCZfA6, complex: _modDef3864["8l2atm"] };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/model_settings/ConjureEffortTiers.tsx");

export function conjureTierLabel(value) {
  let stringResult = value;
  const modelTierMessageResult = ConjureModelLabels.modelTierMessage(value);
  if (null != modelTierMessageResult) {
    const intl = util.intl;
    stringResult = intl.string(modelTierMessageResult);
  }
  return stringResult;
}
export function conjureTierDescription(tier) {
  const intl = util.intl;
  return intl.string(obj[tier]);
}
export function conjureTierModel(settings, tiers, tier) {
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
}
export function conjureWithTier(tier, tier2) {
  let tmp = tier;
  if (tier2 !== tier.tier) {
    const thinking = tier.thinking;
    obj = {};
    const merged = Object.assign(_objectWithoutProperties(tier, closure_3));
    obj.tier = tier2;
    tmp = obj;
  }
  return tmp;
}
export function conjurePickTierModel(settings, tier, arg2) {
  obj = {};
  const merged = Object.assign(settings);
  const obj2 = {};
  const merged1 = Object.assign(settings.models);
  obj2[tier] = arg2;
  obj.models = obj2;
  return obj;
}
export function conjureCeilingSupportsFast(settings, tiers, main) {
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
}
export function conjureNormalizeFast(conjurePickTierModelResult) {
  const tmp = _objectWithoutProperties(conjurePickTierModelResult, closure_4);
  let tmp2 = tmp;
  if (true === conjurePickTierModelResult.fast) {
    obj = {};
    const merged = Object.assign(tmp);
    obj.fast = true;
    tmp2 = obj;
  }
  return tmp2;
}
export function conjureCanPickModel(choices) {
  return choices.main.length > 0;
}
export function conjureCustomizeMessage(choices) {
  if (choices.main.length > 0) {
    let qSViP4 = _modDef3864.eGqPbV;
  } else {
    qSViP4 = _modDef3864.qSViP4;
  }
  return qSViP4;
}
