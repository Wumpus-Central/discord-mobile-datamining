// discord_app/modules/game_console/ConsoleVoiceUpsellStore.tsx
import 00560__ from "../../../_runtime/metro/00560__.js";
import size from "../../../_runtime/metro/00002__.js";

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