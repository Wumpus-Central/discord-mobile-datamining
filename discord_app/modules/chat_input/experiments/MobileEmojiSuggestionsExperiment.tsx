// === Module 11764: useMobileEmojiSuggestionsConfig ===

// Module 11764 (useMobileEmojiSuggestionsConfig)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-07-mobile-emoji-suggestions", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true, style: "large" }, 2: { enabled: true, style: "small" } } });
const result = set.fileFinishedImporting("modules/chat_input/experiments/MobileEmojiSuggestionsExperiment.tsx");

export const useMobileEmojiSuggestionsConfig = function useMobileEmojiSuggestionsConfig(location) {
  return closure_0.useConfig({ location: location.location });
};
export const getIsMobileEmojiSuggestionsConfig = function getIsMobileEmojiSuggestionsConfig(location) {
  return closure_0.getConfig({ location: location.location });
};