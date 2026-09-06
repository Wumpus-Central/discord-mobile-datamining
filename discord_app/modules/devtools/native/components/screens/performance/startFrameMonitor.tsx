// discord_app/modules/devtools/native/components/screens/performance/startFrameMonitor.tsx
import size from "../../../../../../../_runtime/metro/00002__.js";

let c0 = 16.666666666666668;
const result = size.fileFinishedImporting(
  "modules/devtools/native/components/screens/performance/startFrameMonitor.tsx",
);

export const FRAME_BUDGET_MS = 16.666666666666668;
export const startFrameMonitor = function startFrameMonitor() {
  closure_1 = performance.now();
  c2 = false;
  const frames = 0;
  const dropped = 0;
  c5 = 0;
  closure_6 = 0;
  c7 = false;
  function tick() {
    nowResult = performance.now();
    if (c2) {
      const diff = nowResult - nowResult;
      closure_3 = closure_3 + 1;
      closure_6 = closure_6 + diff;
      if (diff > c5) {
        c5 = diff;
      }
      if (diff > c0) {
        closure_4 = closure_4 + 1;
      }
    } else {
      c2 = true;
    }
    closure_0 = requestAnimationFrame(tick);
  }
  closure_0 = requestAnimationFrame(tick);
  return {
    stop() {
      if (!c7) {
        const _cancelAnimationFrame = cancelAnimationFrame;
        cancelAnimationFrame(closure_0);
        c7 = true;
      }
      const obj = { frames, dropped, meanMs: null, worstMs: null };
      let num = 0;
      if (frames > 0) {
        num = closure_6 / tmp4;
      }
      obj.meanMs = num;
      obj.worstMs = worstMs;
      return obj;
    },
  };
};
