// === Module 16935: useConsoleVoiceUpsellStore ===

// Module 16935 (useConsoleVoiceUpsellStore)
import set from "set" /* 2 */;
import keys from "keys" /* 641 */;

let closure_2 = Object.freeze({ voiceUpsellDismissed: false, showSparkles: false });
const obj = keys.create(() => closure_2);
const result = set.fileFinishedImporting("modules/game_console/ConsoleVoiceUpsellStore.tsx");

export const useConsoleVoiceUpsellStore = obj;
export const setShowConsoleVoiceSparkles = function setShowConsoleVoiceSparkles(arg0) {
  const _require = arg0;
  _require(702).batchUpdates(() => {
    closure_1_3.setState({ showSparkles: closure_0 });
  });
};
export const setVoiceUpsellDismissed = function setVoiceUpsellDismissed(arg0) {
  const _require = arg0;
  _require(702).batchUpdates(() => {
    closure_1_3.setState({ voiceUpsellDismissed: closure_0 });
  });
};