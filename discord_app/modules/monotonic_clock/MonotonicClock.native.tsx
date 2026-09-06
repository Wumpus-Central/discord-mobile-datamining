// discord_app/modules/monotonic_clock/MonotonicClock.native.tsx
import clock from "../../../discord_common/js/packages/libdiscore/mobile/js/clock.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/monotonic_clock/MonotonicClock.native.tsx");

export const monotonicNowMs = function monotonicNowMs() {
  let monotonicNowMsResult = clock.monotonicNowMs();
  if (monotonicNowMsResult == null) {
    const _performance = performance;
    monotonicNowMsResult = performance.now();
  }
  return monotonicNowMsResult;
};
