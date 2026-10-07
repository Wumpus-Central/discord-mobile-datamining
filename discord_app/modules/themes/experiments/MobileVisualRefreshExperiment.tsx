// discord_app/modules/themes/experiments/MobileVisualRefreshExperiment.tsx
import c from "../../../../_runtime/00576_c.js";
import apex_ApexExperimentDefault from "../../experiments/apex/ApexExperiment.tsx";

require = fn;
let tmp2 = apex_ApexExperimentDefault({
  kind: "user",
  name: "2026-02-mobile-visual-refresh",
  defaultConfig: { enabled: false, chatInputFloating: false, chatInputLegacySendButton: false },
  variations: {
    0: { enabled: false, chatInputFloating: false, chatInputLegacySendButton: false },
    1: { enabled: true, chatInputFloating: false, chatInputLegacySendButton: false },
    2: { enabled: true, chatInputFloating: true, chatInputLegacySendButton: false },
    3: { enabled: true, chatInputFloating: true, chatInputLegacySendButton: false },
    4: { enabled: true, chatInputFloating: true, chatInputLegacySendButton: true },
  },
});
let closure_2 = tmp2;
fn(558);
const ReactCompilerGating = fn(558);
const obj = {
  kind: "user",
  name: "2026-02-mobile-visual-refresh",
  defaultConfig: { enabled: false, chatInputFloating: false, chatInputLegacySendButton: false },
  variations: {
    0: { enabled: false, chatInputFloating: false, chatInputLegacySendButton: false },
    1: { enabled: true, chatInputFloating: false, chatInputLegacySendButton: false },
    2: { enabled: true, chatInputFloating: true, chatInputLegacySendButton: false },
    3: { enabled: true, chatInputFloating: true, chatInputLegacySendButton: false },
    4: { enabled: true, chatInputFloating: true, chatInputLegacySendButton: true },
  },
};
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      const cResult = c.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return closure_2.useConfig(tmp2).enabled;
    }
  : (location) => closure_2.useConfig({ location }).enabled;
const size = fn(2);
const result = size.fileFinishedImporting("modules/themes/experiments/MobileVisualRefreshExperiment.tsx");

export default tmp3;
export const MobileVisualRefreshExperiment = tmp2;
export const useMobileVisualRefreshConfig = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
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
  : (location) => closure_2.useConfig({ location: location.location });
export const isMobileVisualRefreshEnabled = function isMobileVisualRefreshEnabled(location) {
  return closure_2.getConfig({ location }).enabled;
};
export const resolveRefreshToken = function resolveRefreshToken(MESSAGES_HEADER_PADDING_BOTTOM) {
  return MESSAGES_HEADER_PADDING_BOTTOM.resolve({ enabledExperiments: ["mobile-visual-refresh"] });
};
