// === Module 12135: useMuteAwareLocalVolume ===

// Module 12135 (useMuteAwareLocalVolume)
import noop from "noop" /* 19 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/media_engine/useMuteAwareLocalVolume.tsx");

export default function useMuteAwareLocalVolume(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  let obj = {
    effectiveVolume: _require(589).useStateFromStores(items, () => {
      let num = 0;
      if (null != closure_0) {
        num = 0;
        if (!closure_1_4.isLocalMute(closure_0, closure_1)) {
          num = closure_1_4.getLocalVolume(closure_0, closure_1);
        }
      }
      return num;
    }),
    handleVolumeChange: React.useCallback((arg0) => {
      if (null != closure_0) {
        let isLocalMuteResult = arg0 > 0;
        if (isLocalMuteResult) {
          isLocalMuteResult = closure_1_4.isLocalMute(closure_0, callback);
        }
        if (isLocalMuteResult) {
          callback(dependencyMap[3]).toggleLocalMute(closure_0, callback);
          const obj = callback(dependencyMap[3]);
        }
        callback(dependencyMap[3]).setLocalVolume(closure_0, arg0, callback);
        const obj2 = callback(dependencyMap[3]);
      }
    }, items1)
  };
  items = [closure_4];
  items1 = [arg0, arg1];
  return obj;
};