// discord_app/modules/game_console/ConsoleVoiceUpsellStore.tsx
import set from "../../../_runtime/00002_set.js";
import keys from "../../../_runtime/00644_keys.js";
import { batchUpdates } from "../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";

let closure_2 = Object.freeze({ voiceUpsellDismissed: false, showSparkles: false });
const obj = keys.create(() => closure_2);
const result = set.fileFinishedImporting("modules/game_console/ConsoleVoiceUpsellStore.tsx");

export const useConsoleVoiceUpsellStore = obj;
export const setShowConsoleVoiceSparkles = function setShowConsoleVoiceSparkles(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => {
    closure_1_3.setState({ showSparkles: closure_0 });
  });
};
export const setVoiceUpsellDismissed = function setVoiceUpsellDismissed(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => {
    closure_1_3.setState({ voiceUpsellDismissed: closure_0 });
  });
};