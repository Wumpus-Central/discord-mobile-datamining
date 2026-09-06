// === Module 17119: ConsoleVoiceUpsellStore ===

// Module 17119 (ConsoleVoiceUpsellStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

let closure_2 = Object.freeze({ voiceUpsellDismissed: false, showSparkles: false });
const useConsoleVoiceUpsellStore = module_560.create(() => closure_2);
const result = size.fileFinishedImporting("modules/game_console/ConsoleVoiceUpsellStore.tsx");

export { useConsoleVoiceUpsellStore };
export const setShowConsoleVoiceSparkles = function setShowConsoleVoiceSparkles(showSparkles) {
  _require = showSparkles;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { showSparkles };
    obj.setState(obj);
  });
};
export const setVoiceUpsellDismissed = function setVoiceUpsellDismissed(voiceUpsellDismissed) {
  _require = voiceUpsellDismissed;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { voiceUpsellDismissed };
    obj.setState(obj);
  });
};