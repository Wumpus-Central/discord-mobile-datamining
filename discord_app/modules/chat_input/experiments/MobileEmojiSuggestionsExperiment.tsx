// === Module 11963: MobileEmojiSuggestionsExperiment ===

// Module 11963 (MobileEmojiSuggestionsExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-07-mobile-emoji-suggestions", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true, style: "large" }, 2: { enabled: true, style: "small" } } });
const result = size.fileFinishedImporting("modules/chat_input/experiments/MobileEmojiSuggestionsExperiment.tsx");

export const useMobileEmojiSuggestionsConfig = function useMobileEmojiSuggestionsConfig(location) {
  return closure_0.useConfig({ location: location.location });
};
export const getIsMobileEmojiSuggestionsConfig = function getIsMobileEmojiSuggestionsConfig(location) {
  return closure_0.getConfig({ location: location.location });
};