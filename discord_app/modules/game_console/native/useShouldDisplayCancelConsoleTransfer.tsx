// === Module 16485: useShouldDisplayCancelConsoleTransfer ===

// Module 16485 (useShouldDisplayCancelConsoleTransfer)
import closure_0 from "_slicedToArray" /* 32 */;
import closure_1 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/game_console/native/useShouldDisplayCancelConsoleTransfer.tsx");

export default function useShouldDisplayCancelConsoleTransfer(arg0) {
  const callback = arg0;
  const tmp = callback(React.useState(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const _Date = Date;
      tmp2 = Date.now() - tmp.startedAt > 6000;
    }
    return tmp2;
  }), 2);
  React = tmp[1];
  const items = [arg0];
  const effect = React.useEffect(() => {
    let tmp2 = null != timeout;
    if (tmp2) {
      let _Date = Date;
      tmp2 = Date.now() - tmp.startedAt > 6000;
    }
    callback(tmp2);
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
          return closure_1(tmp3);
        }, 6000 - (Date.now() - tmp.startedAt));
        return () => {
          clearTimeout(closure_0);
        };
      }
    }
  }, items);
  return tmp[0];
};