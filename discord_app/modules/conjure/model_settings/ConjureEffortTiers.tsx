// === Module 12347: ConjureEffortTiers ===

// Module 12347 (ConjureEffortTiers)
import util from "util" /* 1113 */;
import _modDef4028 from "module_4028" /* 4028 */;
import ConjureModelLabels from "ConjureModelLabels" /* 12348 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

require = fn;
let closure_3 = ["thinking"];
let closure_4 = ["fast"];
let obj = { simple: _modDef4028.Mqb8mc, balanced: _modDef4028.zCZfA6, complex: _modDef4028["8l2atm"] };
const CONJURE_MODEL_TIERS = fn(12349).CONJURE_MODEL_TIERS;
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
export function conjureWithTier(settings, tier2) {
  let tmp = settings;
  if (tier2 !== settings.tier) {
    const thinking = settings.thinking;
    obj = {};
    const merged = Object.assign(_objectWithoutProperties(settings, closure_3));
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
export function conjureTierAvailable(value) {
  return "complex" !== value;
}
export const CONJURE_UNAVAILABLE_TIER_STOPS = CONJURE_MODEL_TIERS.flatMap((item, index) => {
  if ("complex" !== item) {
    items = [];
  } else {
    items = [index];
  }
  return items;
});
export function conjureTierStopLabel(value) {
  const modelTierMessageResult = ConjureModelLabels.modelTierMessage(value);
  let stringResult = value;
  if (null != modelTierMessageResult) {
    const intl = util.intl;
    stringResult = intl.string(modelTierMessageResult);
  }
  let combined = stringResult;
  if ("complex" === value) {
    const intl2 = util.intl;
    const _HermesInternal = HermesInternal;
    combined = "" + stringResult + ", " + intl2.string(_modDef4028["17yEQw"]);
  }
  return combined;
}