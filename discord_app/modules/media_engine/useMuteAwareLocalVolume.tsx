// === Module 10020: useMuteAwareLocalVolume ===

// Module 10020 (useMuteAwareLocalVolume)
import closure_3 from "noop" /* 19 */;
import closure_4 from "_detectH265HardwareDecode" /* 4496 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/media_engine/useMuteAwareLocalVolume.tsx");

export default function useMuteAwareLocalVolume(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  let obj = {
    effectiveVolume: _require(589).useStateFromStores(items, () => {
      let num = 0;
      if (null != closure_0) {
        num = 0;
        if (!closure_1_4.isLocalMute(tmp, closure_1)) {
          num = obj.getLocalVolume(tmp, tmp2);
        }
        obj = closure_1_4;
        tmp2 = closure_1;
      }
      return num;
    }),
    handleVolumeChange: React.useCallback((arg0) => {
      if (null != closure_0) {
        let isLocalMuteResult = arg0 > 0;
        if (isLocalMuteResult) {
          isLocalMuteResult = closure_1_4.isLocalMute(tmp, callback);
        }
        if (isLocalMuteResult) {
          callback(closure_1_2[3]).toggleLocalMute(tmp, callback);
          const obj = callback(closure_1_2[3]);
        }
        callback(closure_1_2[3]).setLocalVolume(tmp, arg0, callback);
        const obj2 = callback(closure_1_2[3]);
      }
    }, items1)
  };
  items = [closure_4];
  items1 = [arg0, arg1];
  return obj;
};