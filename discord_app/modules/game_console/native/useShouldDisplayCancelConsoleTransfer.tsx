// === Module 17345: useShouldDisplayCancelConsoleTransfer ===

// Module 17345 (useShouldDisplayCancelConsoleTransfer)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c4 = 6000;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp2;
  let tmp4;
  let tmp5;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(5);
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
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  let tmp3 = _slicedToArray(react.useState(tmp2), 2);
  [tmp4, dependencyMap] = tmp3;
  if (cResult[2] !== arg0) {
    const fn2 = function c() {
      let timeout;
      let tmp2 = null != timeout;
      if (tmp2) {
        let tmp3 = globalThis;
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
    tmp6 = items;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[3];
    tmp6 = cResult[4];
  }
  const effect = react.useEffect(tmp5, tmp6);
  return tmp4;
}) : ((arg0) => {
  let closure_1;
  let first;
  let closure_0 = arg0;
  [first, closure_1] = react.useState(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const _Date = Date;
      tmp2 = Date.now() - tmp.startedAt > c4;
    }
    return tmp2;
  });
  const items = [arg0];
  const effect = react.useEffect(() => {
    let timeout;
    let tmp2 = null != timeout;
    if (tmp2) {
      let tmp3 = globalThis;
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
  return first;
});
const result = size.fileFinishedImporting("modules/game_console/native/useShouldDisplayCancelConsoleTransfer.tsx");

export default tmp2;