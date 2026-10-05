// === Module 17259: ConsoleVoiceUpsellStore ===

// Module 17259 (ConsoleVoiceUpsellStore)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_2 = Object.freeze({ voiceUpsellDismissed: false, showSparkles: false });
const useConsoleVoiceUpsellStore = module_570.create(() => closure_2);
const result = size.fileFinishedImporting("modules/game_console/ConsoleVoiceUpsellStore.tsx");

export { useConsoleVoiceUpsellStore };
export const setShowConsoleVoiceSparkles = function setShowConsoleVoiceSparkles(showSparkles) {
  _require = showSparkles;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { showSparkles };
    obj.setState(obj);
  });
};
export const setVoiceUpsellDismissed = function setVoiceUpsellDismissed(voiceUpsellDismissed) {
  _require = voiceUpsellDismissed;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { voiceUpsellDismissed };
    obj.setState(obj);
  });
};