// === Module 9994: getNoiseCancellationDeferredToSystem ===

// Module 9994 (getNoiseCancellationDeferredToSystem)
import initialize from "initialize" /* 504 */;
import setDefault from "set" /* 9995 */;
import closure_3 from "_detectH265HardwareDecode" /* 1908 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/noise_cancellation/NoiseCancellationUtils.tsx");

export const getNoiseCancellationDeferredToSystem = function getNoiseCancellationDeferredToSystem(closure_3) {
  let obj = closure_3;
  if (closure_3 === undefined) {
    obj = closure_3;
  }
  const systemMicrophoneMode = obj.getSystemMicrophoneMode();
  return !setDefault(true, systemMicrophoneMode);
};
export const useNoiseCancellationDeferredToSystem = function useNoiseCancellationDeferredToSystem() {
  const items = [closure_3];
  return initialize.useStateFromStores(items, () => {
    systemMicrophoneMode = systemMicrophoneMode.getSystemMicrophoneMode();
    return !callback(table[1])(true, systemMicrophoneMode);
  });
};