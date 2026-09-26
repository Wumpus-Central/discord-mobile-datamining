// discord_app/modules/vibegrations/lib/VibegrationsModelLabels.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3715 from "../intl/VibegrationsUntranslated.messages.js";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsModelLabels.tsx");

export const modelTierMessage = function modelTierMessage(value) {
  if ("simple" === value) {
    return _modDef3715["5DOL2g"];
  } else if ("balanced" === value) {
    return _modDef3715["5I6PKl"];
  } else if ("complex" === value) {
    return _modDef3715.OJIfkn;
  } else {
    return null;
  }
};
export const tierTooltip = function tierTooltip(title, arg1) {
  if ("simple" === arg1) {
    let v5DOL2g = _modDef3715["5DOL2g"];
  } else if ("balanced" === arg1) {
    v5DOL2g = _modDef3715["5I6PKl"];
  } else {
    v5DOL2g = null;
    if ("complex" === arg1) {
      v5DOL2g = _modDef3715.OJIfkn;
    }
  }
  if (null != v5DOL2g) {
    const obj2 = { title, body: null };
    const intl = util.intl;
    obj2.body = intl.string(v5DOL2g);
    let obj = obj2;
  } else {
    obj = { body: title };
  }
  return obj;
};
export const THINKING_LABELS = { low: "Low", medium: "Medium", high: "High", xhigh: "Extra high", max: "Max" };
export const PROVIDER_LABELS = {
  anthropic: "Anthropic",
  openai: "OpenAI",
  deepseek: "DeepSeek",
  xai: "xAI",
  moonshotai: "Moonshot AI",
};
