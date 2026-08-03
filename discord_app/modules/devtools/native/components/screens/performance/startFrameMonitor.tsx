let c0 = 16.666666666666668;
const result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/performance/startFrameMonitor.tsx");

export const FRAME_BUDGET_MS = 16.666666666666668;
export const startFrameMonitor = function startFrameMonitor() {
  let closure_0 = 0;
  let closure_1 = performance.now();
  let c2 = false;
  let c3 = 0;
  let c4 = 0;
  let c5 = 0;
  let c6 = 0;
  let c7 = false;
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