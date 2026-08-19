// === Module 12558: getNoiseCancellationDeferredToSystem ===

// Module 12558 (getNoiseCancellationDeferredToSystem)
import initialize from "initialize" /* 589 */;
import setDefault from "set" /* 12559 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/noise_cancellation/NoiseCancellationUtils.tsx");

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