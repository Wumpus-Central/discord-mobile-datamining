// discord_common/js/packages/libdiscore/mobile/js/clock.tsx
import global_types from "global_types.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

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
