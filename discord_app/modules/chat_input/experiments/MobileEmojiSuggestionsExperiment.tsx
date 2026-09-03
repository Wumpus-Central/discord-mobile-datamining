// discord_app/modules/chat_input/experiments/MobileEmojiSuggestionsExperiment.tsx
import set from "../../../../_runtime/00002_set.js";
import ApexExperiment from "../../experiments/apex/index.tsx";

let closure_0 = ApexExperiment.createApexExperiment({
  name: "2026-07-mobile-emoji-suggestions",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true, style: "large" }, 2: { enabled: true, style: "small" } },
});
const result = set.fileFinishedImporting("modules/chat_input/experiments/MobileEmojiSuggestionsExperiment.tsx");

export const useMobileEmojiSuggestionsConfig = function useMobileEmojiSuggestionsConfig(location) {
  return closure_0.useConfig({ location: location.location });
};
export const getIsMobileEmojiSuggestionsConfig = function getIsMobileEmojiSuggestionsConfig(location) {
  return closure_0.getConfig({ location: location.location });
};
