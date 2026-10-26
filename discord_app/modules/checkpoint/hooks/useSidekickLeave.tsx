// === Module 13020: useSidekickLeave ===

// Module 13020 (useSidekickLeave)
import CheckpointNavigation from "CheckpointNavigation" /* 6363 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useSidekickLeave.tsx");

export const useSidekickLeave = ReactCompilerGating.isReactCompilerEnabled() ? (function useSidekickLeave(arg0, arg1, arg2, arg3) {
  _require = arg0;
  dependencyMap = arg1;
  noop = arg2;
  closure_3 = arg3;
  const cResult = require("c").c(6);
  noop.useRef(true);
  if (cResult[0] === arg2) {
    if (cResult[1] === arg3) {
      if (cResult[2] === arg1) {
        if (cResult[3] === arg0) {
          let tmp2 = cResult[4];
          let tmp3 = cResult[5];
        }
        const effect = noop.useEffect(tmp2, tmp3);
      }
    }
  }
  const fn = function o() {
    if (timeout === CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE) {
      if (ref.current) {
        closure_3();
      } else if (closure_1) {
        closure_2();
      } else {
        const _setTimeout = setTimeout;
        timeout = setTimeout(closure_2, 1000);
        return () => clearTimeout(closure_0);
      }
    } else {
      ref.current = false;
    }
  };
  const items = [arg2, arg3, arg1, arg0];
  cResult[0] = arg2;
  cResult[1] = arg3;
  cResult[2] = arg1;
  cResult[3] = arg0;
  cResult[4] = fn;
  cResult[5] = items;
  tmp3 = items;
  tmp2 = fn;
}) : (function useSidekickLeave(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg1;
  noop = arg2;
  closure_3 = arg3;
  noop.useRef(true);
  const items = [arg2, arg3, arg1, arg0];
  const effect = noop.useEffect(() => {
    if (timeout === CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE) {
      if (ref.current) {
        closure_3();
      } else if (closure_1) {
        closure_2();
      } else {
        const _setTimeout = setTimeout;
        timeout = setTimeout(closure_2, 1000);
        return () => clearTimeout(closure_0);
      }
    } else {
      ref.current = false;
    }
  }, items);
});