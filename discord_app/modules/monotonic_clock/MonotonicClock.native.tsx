// discord_app/modules/monotonic_clock/MonotonicClock.native.tsx
import set from "../../../_runtime/00002_set.js";
import monotonicNowMs from "../../../discord_common/js/packages/libdiscore/mobile/js/clock.tsx";

const result = set.fileFinishedImporting("modules/monotonic_clock/MonotonicClock.native.tsx");

export const monotonicNowMs = function monotonicNowMs() {
  let monotonicNowMsResult = monotonicNowMs.monotonicNowMs();
  if (monotonicNowMsResult == null) {
    const _performance = performance;
    monotonicNowMsResult = performance.now();
  }
  return monotonicNowMsResult;
};
