// === Module 1354: clock ===

// Module 1354 (clock)
import global_types from "global_types" /* 1353 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdiscore/mobile/js/clock.tsx");

export const monotonicNowMs = function monotonicNowMs() {
  const LIBDISCORE_JSI = global_types.typedGlobal.LIBDISCORE_JSI;
  let monotonicNowMs;
  if (LIBDISCORE_JSI != null) {
    monotonicNowMs = LIBDISCORE_JSI.monotonicNowMs;
  }
  let monotonicNowMsResult = null;
  if (null != monotonicNowMs) {
    monotonicNowMsResult = LIBDISCORE_JSI.monotonicNowMs();
  }
  return monotonicNowMsResult;
};