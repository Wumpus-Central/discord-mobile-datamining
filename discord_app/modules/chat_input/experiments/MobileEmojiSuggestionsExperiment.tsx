// === Module 13677: MobileEmojiSuggestionsExperiment ===

// Module 13677 (MobileEmojiSuggestionsExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-07-mobile-emoji-suggestions", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true, style: "large", searchDebounceMs: 500 }, 2: { enabled: true, style: "small" }, 3: { enabled: true, style: "button" } } });
const result = size.fileFinishedImporting("modules/chat_input/experiments/MobileEmojiSuggestionsExperiment.tsx");

export function useMobileEmojiSuggestionsConfig(location) {
  return closure_0.useConfig({ location: location.location });
}
export function trackMobileEmojiSuggestionsExposure(location) {
  const config = closure_0.getConfig({ location: location.location });
}