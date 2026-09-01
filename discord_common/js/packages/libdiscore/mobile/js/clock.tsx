// discord_common/js/packages/libdiscore/mobile/js/clock.tsx
import set from "../../../../../../_runtime/00002_set.js";
import typedGlobal from "global_types.tsx";

const result = set.fileFinishedImporting("../discord_common/js/packages/libdiscore/mobile/js/clock.tsx");

export const monotonicNowMs = function monotonicNowMs() {
  const LIBDISCORE_JSI = typedGlobal.typedGlobal.LIBDISCORE_JSI;
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
