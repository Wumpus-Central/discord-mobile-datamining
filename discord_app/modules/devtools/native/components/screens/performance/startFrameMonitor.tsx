// discord_app/modules/devtools/native/components/screens/performance/startFrameMonitor.tsx
import size from "../../../../../../../_runtime/metro/00002__.js";

let closure_3, closure_4;

let c0 = 16.666666666666668;
const result = size.fileFinishedImporting(
  "modules/devtools/native/components/screens/performance/startFrameMonitor.tsx",
);

export const FRAME_BUDGET_MS = 16.666666666666668;
export const startFrameMonitor = function startFrameMonitor() {
  let nowResult;
  let worstMs;
  let closure_1 = performance.now();
  let c2 = false;
  const frames = 0;
  const dropped = 0;
  let c5 = 0;
  let closure_6 = 0;
  let c7 = false;
  function tick() {
    let closure_1 = performance.now();
    const tmp2 = c2;
    if (tmp2) {
      const diff = closure_1 - closure_1;
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
  let closure_0 = requestAnimationFrame(tick);
  let obj = {
    stop() {
      let num;
      const tmp = c7;
      if (!tmp) {
        const _cancelAnimationFrame = cancelAnimationFrame;
        cancelAnimationFrame(closure_0);
        c7 = true;
      }
      const obj = { frames, dropped, meanMs: num, worstMs };
      num = 0;
      if (frames > 0) {
        num = closure_6 / tmp5;
      }
      return obj;
    },
  };
  return obj;
};
