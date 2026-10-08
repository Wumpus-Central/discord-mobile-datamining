// discord_app/modules/chat_input/experiments/MobileEmojiSuggestionsExperiment.tsx
import c from "../../../../_runtime/00576_c.js";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2 = ApexExperiment.createApexExperiment({
  name: "2026-07-mobile-emoji-suggestions",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: {
    0: { enabled: false },
    1: { enabled: true, style: "large" },
    2: { enabled: true, style: "small" },
    3: { enabled: true, style: "button" },
  },
});
const result = size.fileFinishedImporting("modules/chat_input/experiments/MobileEmojiSuggestionsExperiment.tsx");

export const useMobileEmojiSuggestionsConfig = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMobileEmojiSuggestionsConfig(location) {
      const cResult = c.c(2);
      const _location = location.location;
      if (cResult[0] !== _location) {
        const obj2 = { location: _location };
        cResult[0] = _location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return closure_2.useConfig(tmp2);
    }
  : function useMobileEmojiSuggestionsConfig(location) {
      return closure_2.useConfig({ location: location.location });
    };
export const getIsMobileEmojiSuggestionsConfig = function getIsMobileEmojiSuggestionsConfig(location) {
  return closure_2.getConfig({ location: location.location });
};
