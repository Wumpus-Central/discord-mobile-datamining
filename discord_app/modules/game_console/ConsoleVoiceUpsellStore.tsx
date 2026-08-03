// === Module 15967: useConsoleVoiceUpsellStore ===

// Module 15967 (useConsoleVoiceUpsellStore)
import keys from "keys";

let closure_2 = Object.freeze({ voiceUpsellDismissed: false, showSparkles: false });
const obj = keys.create(() => closure_2);
const result = require("set").fileFinishedImporting("modules/game_console/ConsoleVoiceUpsellStore.tsx");

export const useConsoleVoiceUpsellStore = obj;
export const setShowConsoleVoiceSparkles = function setShowConsoleVoiceSparkles(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => {
    outer1_3.setState({ showSparkles: closure_0 });
  });
};
export const setVoiceUpsellDismissed = function setVoiceUpsellDismissed(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => {
    outer1_3.setState({ voiceUpsellDismissed: closure_0 });
  });
};