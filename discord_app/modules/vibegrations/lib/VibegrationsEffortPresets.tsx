// discord_app/modules/vibegrations/lib/VibegrationsEffortPresets.tsx
import set from "../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import messagesProxyDefault from "../intl/VibegrationsUntranslated.messages.js";

let obj = {
  model: "gpt-5.6-luna",
  thinking: "high",
  summary() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.Mo0a1m);
  },
};
const items = [
  obj,
  {
    model: "gpt-5.6-sol",
    thinking: "high",
    summary() {
      const intl = getSystemLocale.intl;
      return intl.string(messagesProxyDefault.dkt78K);
    },
  },
  {
    model: "claude-fable-5-1",
    thinking: "high",
    summary() {
      const intl = getSystemLocale.intl;
      return intl.string(messagesProxyDefault.Ly6zYL);
    },
  },
];
obj = items[1];
if (obj == null) {
  obj = { model: "gpt-5.6-sol", thinking: "high" };
}
obj = { model: obj.model, thinking: obj.thinking };
const obj1 = { main: null, subagent: null };
function vibegrationsSettingsForTier(arg0) {
  let obj = { main: null, subagent: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj[0] = obj;
  obj = {};
  const merged1 = Object.assign(arg0);
  obj[1] = obj;
  return obj;
}
let merged = Object.assign(obj);
obj1[0] = {};
let merged1 = Object.assign(obj);
obj1[1] = {};
const result = set.fileFinishedImporting("modules/vibegrations/lib/VibegrationsEffortPresets.tsx");

export const VIBEGRATIONS_EFFORT_PRESETS = items;
export const VIBEGRATIONS_DEFAULT_MODEL_SETTINGS = obj1;
export const matchVibegrationsEffortPreset = function matchVibegrationsEffortPreset(arg0) {
  closure_0 = arg0;
  return items.findIndex(
    (model) =>
      main.main.model === model.model &&
      main.main.thinking === model.thinking &&
      main.subagent.model === model.model &&
      main.subagent.thinking === model.thinking,
  );
};
export { vibegrationsSettingsForTier };
export const describeVibegrationsModelSettings = function describeVibegrationsModelSettings(main, arr) {
  main = main.main;
  const model = main.model;
  const thinking = main.thinking;
  const found = arr.find((id) => id.id === model);
  let label;
  if (found != null) {
    label = found.label;
  }
  if (label == null) {
    label = model;
  }
  let tmp3 = model(16600).THINKING_LABELS[thinking];
  if (tmp3 == null) {
    tmp3 = thinking;
  }
  return "" + label + " \u00B7 " + tmp3;
};
