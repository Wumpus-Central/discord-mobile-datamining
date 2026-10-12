// discord_app/modules/conjure/create/ConjureLandingModelChoices.tsx
import conjureLocalDev from "../connection/conjureLocalDev.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let items = [
  { id: "claude-fable-5-1", label: "Claude Fable 5.1", provider: "anthropic" },
  { id: "claude-opus-5-5", label: "Claude Opus 5.5", provider: "anthropic" },
  { id: "claude-sonnet-5-5", label: "Claude Sonnet 5.5", provider: "anthropic" },
  { id: "claude-haiku-5-5", label: "Claude Haiku 5.5", provider: "anthropic" },
  { id: "gpt-6-astra", label: "GPT-6 Astra", provider: "openai", supports_fast: true },
  { id: "gpt-6.1-sol", label: "GPT-6.1 Sol", provider: "openai", supports_fast: true },
  { id: "gpt-6-luna", label: "GPT-6 Luna", provider: "openai", supports_fast: true },
  { id: "xai/grok-4.7", label: "Grok 4.7", provider: "xai" },
];
const CONJURE_FALLBACK_MODEL_CHOICES = {
  main: items,
  subagent: items,
  thinking: ["low", "medium", "high", "xhigh", "max"],
};
let items1 = [
  { id: "deepseek/deepseek-flash", label: "DeepSeek V4.1 Flash", provider: "deepseek" },
  { id: "moonshotai/kimi-k3", label: "Kimi K3", provider: "moonshotai" },
];
let obj2 = { main: items1, subagent: items1, thinking: CONJURE_FALLBACK_MODEL_CHOICES.thinking };
const result = size.fileFinishedImporting("modules/conjure/create/ConjureLandingModelChoices.tsx");

export const landingModelChoices = function landingModelChoices() {
  const obj = conjureLocalDev;
  if (obj.isConjureLocalDev()) {
    obj2 = { main: null, subagent: null, thinking: null };
    const items = [];
    HermesBuiltin.arraySpread(obj2.main, HermesBuiltin.arraySpread(tmp.main, 0));
    obj2.main = items;
    const items1 = [];
    HermesBuiltin.arraySpread(obj2.subagent, HermesBuiltin.arraySpread(tmp.subagent, 0));
    obj2.subagent = items1;
    obj2.thinking = tmp.thinking;
    let tmp2 = obj2;
  } else {
    tmp2 = tmp;
  }
  return tmp2;
};
export { CONJURE_FALLBACK_MODEL_CHOICES };
export const CONJURE_DEV_FALLBACK_MODEL_CHOICES = obj2;
export const CONJURE_DEFAULT_TIER_SETTINGS = { tier: "balanced", provider: "openai" };
export const CONJURE_LANDING_TIER_SEATS = {
  simple: { model: "gpt-6-luna", thinking: "high" },
  balanced: { model: "claude-sonnet-5-5", thinking: "high" },
  complex: { model: "claude-opus-5-5", thinking: "high" },
};
