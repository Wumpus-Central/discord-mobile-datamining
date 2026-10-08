// discord_app/modules/conjure/model_settings/ConjureModelLabels.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3827 from "../intl/ConjureUntranslated.messages.js";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/model_settings/ConjureModelLabels.tsx");

export const modelTierMessage = function modelTierMessage(value) {
  if ("simple" === value) {
    return _modDef3827["/tlOR5"];
  } else if ("balanced" === value) {
    return _modDef3827.wNhuGQ;
  } else if ("complex" === value) {
    return _modDef3827.FxoUwB;
  } else {
    return null;
  }
};
export const tierTooltip = function tierTooltip(title, arg1) {
  if ("simple" === arg1) {
    let prop = _modDef3827["/tlOR5"];
  } else if ("balanced" === arg1) {
    prop = _modDef3827.wNhuGQ;
  } else {
    prop = null;
    if ("complex" === arg1) {
      prop = _modDef3827.FxoUwB;
    }
  }
  if (null != prop) {
    const obj2 = { title, body: null };
    const intl = util.intl;
    obj2.body = intl.string(prop);
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
