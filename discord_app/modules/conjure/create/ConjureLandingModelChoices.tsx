// === Module 16595: ConjureLandingModelChoices ===

// Module 16595 (ConjureLandingModelChoices)
import ConjureTypes from "ConjureTypes" /* 6757 */;
import conjureLocalDev from "conjureLocalDev" /* 12928 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/ConjureLandingModelChoices.tsx");

export const landingModelChoices = function landingModelChoices() {
  let items;
  let items1;
  let tmp5;
  const obj = conjureLocalDev;
  const isConjureLocalDevResult = obj.isConjureLocalDev();
  const CONJURE_FALLBACK_MODEL_CHOICES = ConjureTypes.CONJURE_FALLBACK_MODEL_CHOICES;
  if (isConjureLocalDevResult) {
    const obj2 = { main: items, subagent: items1, thinking: ConjureTypes.CONJURE_FALLBACK_MODEL_CHOICES.thinking };
    items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items, CONJURE_FALLBACK_MODEL_CHOICES.main, 0);
    HermesBuiltin.arraySpread(items, ConjureTypes.CONJURE_DEV_FALLBACK_MODEL_CHOICES.main, arraySpreadResult);
    items1 = [];
    const arraySpreadResult5 = HermesBuiltin.arraySpread(items1, ConjureTypes.CONJURE_FALLBACK_MODEL_CHOICES.subagent, 0);
    HermesBuiltin.arraySpread(items1, ConjureTypes.CONJURE_DEV_FALLBACK_MODEL_CHOICES.subagent, arraySpreadResult5);
    tmp5 = obj2;
  } else {
    tmp5 = CONJURE_FALLBACK_MODEL_CHOICES;
  }
  return tmp5;
};