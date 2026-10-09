// === Module 17778: useShouldDisplayCancelConsoleTransfer ===

// Module 17778 (useShouldDisplayCancelConsoleTransfer)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let c4 = 6000;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/native/useShouldDisplayCancelConsoleTransfer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldDisplayCancelConsoleTransfer(arg0) {
  _require = arg0;
  const cResult = require("c").c(5);
  if (cResult[0] !== arg0) {
    const fn = function u() {
      let tmp2 = null != closure_0;
      if (tmp2) {
        const _Date = Date;
        tmp2 = Date.now() - tmp.startedAt > c4;
      }
      return tmp2;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const obj = require("c");
  [tmp4, dependencyMap] = noop.useState(tmp2);
  if (cResult[2] !== arg0) {
    const fn2 = function c() {
      let tmp2 = null != timeout;
      if (tmp2) {
        let _Date = Date;
        tmp2 = Date.now() - tmp.startedAt > closure_1_4;
      }
      closure_1(tmp2);
      if (null != timeout) {
        if (!tmp2) {
          const _setTimeout = setTimeout;
          const _Date2 = Date;
          timeout = setTimeout(() => {
            let tmp3 = null != closure_0;
            if (tmp3) {
              const _Date = Date;
              tmp3 = Date.now() - tmp2.startedAt > closure_2_4;
            }
            return closure_1_1(tmp3);
          }, closure_1_4 - (Date.now() - tmp.startedAt));
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
    };
    const items = [arg0];
    cResult[2] = arg0;
    cResult[3] = fn2;
    cResult[4] = items;
    let tmp6 = items;
    let tmp5 = fn2;
  } else {
    tmp5 = cResult[3];
    tmp6 = cResult[4];
  }
  const effect = noop.useEffect(tmp5, tmp6);
  return tmp4;
}) : (function useShouldDisplayCancelConsoleTransfer(arg0) {
  closure_0 = arg0;
  const tmp = _slicedToArray(noop.useState(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const _Date = Date;
      tmp2 = Date.now() - tmp.startedAt > c4;
    }
    return tmp2;
  }), 2);
  closure_1 = tmp[1];
  const items = [arg0];
  const effect = noop.useEffect(() => {
    let tmp2 = null != timeout;
    if (tmp2) {
      let _Date = Date;
      tmp2 = Date.now() - tmp.startedAt > closure_1_4;
    }
    closure_1(tmp2);
    if (null != timeout) {
      if (!tmp2) {
        const _setTimeout = setTimeout;
        const _Date2 = Date;
        timeout = setTimeout(() => {
          let tmp3 = null != closure_0;
          if (tmp3) {
            const _Date = Date;
            tmp3 = Date.now() - tmp2.startedAt > closure_2_4;
          }
          return closure_1_1(tmp3);
        }, closure_1_4 - (Date.now() - tmp.startedAt));
        return () => {
          clearTimeout(closure_0);
        };
      }
    }
  }, items);
  return tmp[0];
});