// === Module 15330: FRAME_BUDGET_MS ===

// Module 15330 (FRAME_BUDGET_MS)
import set from "set" /* 2 */;

let c0 = 16.666666666666668;
const result = set.fileFinishedImporting("modules/devtools/native/components/screens/performance/startFrameMonitor.tsx");

export const FRAME_BUDGET_MS = 16.666666666666668;
export const startFrameMonitor = function startFrameMonitor() {
  closure_0 = 0;
  closure_1 = performance.now();
  c2 = false;
  c3 = 0;
  c4 = 0;
  c5 = 0;
  c6 = 0;
  c7 = false;
  function tick() {
    const nowResult = performance.now();
    if (c2) {
      const diff = nowResult - nowResult;
      closure_3 = closure_3 + 1;
      closure_6 = closure_6 + diff;
      if (diff > c5) {
        c5 = diff;
      }
      if (diff > closure_0) {
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
      const obj = { frames: c3, dropped: c4, meanMs: null, worstMs: null };
      let num = 0;
      if (c3 > 0) {
        num = c6 / tmp4;
      }
      obj[2] = num;
      obj[3] = c5;
      return obj;
    }
  };
};