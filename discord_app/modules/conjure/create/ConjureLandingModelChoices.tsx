// discord_app/modules/conjure/create/ConjureLandingModelChoices.tsx
import ConjureTypes from "../ConjureTypes.tsx";
import conjureLocalDev from "../connection/conjureLocalDev.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/create/ConjureLandingModelChoices.tsx");

export const landingModelChoices = function landingModelChoices() {
  const CONJURE_FALLBACK_MODEL_CHOICES = ConjureTypes.CONJURE_FALLBACK_MODEL_CHOICES;
  if (isConjureLocalDevResult) {
    const obj2 = { main: null, subagent: null, thinking: null };
    const items = [];
    HermesBuiltin.arraySpread(
      ConjureTypes.CONJURE_DEV_FALLBACK_MODEL_CHOICES.main,
      HermesBuiltin.arraySpread(CONJURE_FALLBACK_MODEL_CHOICES.main, 0),
    );
    obj2.main = items;
    const items1 = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(CONJURE_FALLBACK_MODEL_CHOICES.main, 0);
    HermesBuiltin.arraySpread(
      ConjureTypes.CONJURE_DEV_FALLBACK_MODEL_CHOICES.subagent,
      HermesBuiltin.arraySpread(ConjureTypes.CONJURE_FALLBACK_MODEL_CHOICES.subagent, 0),
    );
    obj2.subagent = items1;
    obj2.thinking = ConjureTypes.CONJURE_FALLBACK_MODEL_CHOICES.thinking;
    let tmp4 = obj2;
    const arraySpreadResult5 = HermesBuiltin.arraySpread(ConjureTypes.CONJURE_FALLBACK_MODEL_CHOICES.subagent, 0);
  } else {
    tmp4 = CONJURE_FALLBACK_MODEL_CHOICES;
  }
  return tmp4;
};
