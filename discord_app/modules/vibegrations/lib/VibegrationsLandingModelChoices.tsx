// === Module 16943: VibegrationsLandingModelChoices ===

// Module 16943 (VibegrationsLandingModelChoices)
import VibegrationsTypes from "VibegrationsTypes" /* 5275 */;
import vibegrationsLocalDev from "vibegrationsLocalDev" /* 13364 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsLandingModelChoices.tsx");

export const landingModelChoices = function landingModelChoices() {
  const result = vibegrationsLocalDev.isVibegrationsLocalDev();
  const VIBEGRATIONS_FALLBACK_MODEL_CHOICES = VibegrationsTypes.VIBEGRATIONS_FALLBACK_MODEL_CHOICES;
  if (result) {
    const obj2 = { main: null, subagent: null, thinking: null };
    const items = [];
    HermesBuiltin.arraySpread(VibegrationsTypes.VIBEGRATIONS_DEV_FALLBACK_MODEL_CHOICES.main, HermesBuiltin.arraySpread(VIBEGRATIONS_FALLBACK_MODEL_CHOICES.main, 0));
    obj2.main = items;
    const items1 = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(VIBEGRATIONS_FALLBACK_MODEL_CHOICES.main, 0);
    HermesBuiltin.arraySpread(VibegrationsTypes.VIBEGRATIONS_DEV_FALLBACK_MODEL_CHOICES.subagent, HermesBuiltin.arraySpread(VibegrationsTypes.VIBEGRATIONS_FALLBACK_MODEL_CHOICES.subagent, 0));
    obj2.subagent = items1;
    obj2.thinking = VibegrationsTypes.VIBEGRATIONS_FALLBACK_MODEL_CHOICES.thinking;
    let tmp4 = obj2;
    const arraySpreadResult5 = HermesBuiltin.arraySpread(VibegrationsTypes.VIBEGRATIONS_FALLBACK_MODEL_CHOICES.subagent, 0);
  } else {
    tmp4 = VIBEGRATIONS_FALLBACK_MODEL_CHOICES;
  }
  return tmp4;
};