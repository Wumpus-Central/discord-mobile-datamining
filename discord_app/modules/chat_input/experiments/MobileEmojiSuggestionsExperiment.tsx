// === Module 11577: MobileEmojiSuggestionsExperiment ===

// Module 11577 (MobileEmojiSuggestionsExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1440 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-07-mobile-emoji-suggestions", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true, style: "large" }, 2: { enabled: true, style: "small" }, 3: { enabled: true, style: "button" } } };
let closure_2 = ApexExperiment.createApexExperiment(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2);
}) : ((location) => {
  const obj = { location: location.location };
  return closure_2.useConfig(obj);
});
const result = size.fileFinishedImporting("modules/chat_input/experiments/MobileEmojiSuggestionsExperiment.tsx");

export const useMobileEmojiSuggestionsConfig = tmp2;
export const getIsMobileEmojiSuggestionsConfig = function getIsMobileEmojiSuggestionsConfig(location) {
  const obj = { location: location.location };
  return closure_2.getConfig(obj);
};