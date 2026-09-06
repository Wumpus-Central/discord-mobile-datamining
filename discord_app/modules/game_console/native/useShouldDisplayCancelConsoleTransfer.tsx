// === Module 17174: useShouldDisplayCancelConsoleTransfer ===

// Module 17174 (useShouldDisplayCancelConsoleTransfer)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/native/useShouldDisplayCancelConsoleTransfer.tsx");

export default function useShouldDisplayCancelConsoleTransfer(arg0) {
  closure_0 = arg0;
  const tmp = _slicedToArray(noop.useState(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const _Date = Date;
      tmp2 = Date.now() - tmp.startedAt > 6000;
    }
    return tmp2;
  }), 2);
  closure_1 = tmp[1];
  const items = [arg0];
  const effect = noop.useEffect(() => {
    let tmp2 = null != timeout;
    if (tmp2) {
      let _Date = Date;
      tmp2 = Date.now() - tmp.startedAt > 6000;
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
            tmp3 = Date.now() - tmp2.startedAt > 6000;
          }
          return closure_1_1(tmp3);
        }, 6000 - (Date.now() - tmp.startedAt));
        return () => {
          clearTimeout(closure_0);
        };
      }
    }
  }, items);
  return tmp[0];
};