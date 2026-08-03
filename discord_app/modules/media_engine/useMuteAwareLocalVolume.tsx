import noop from "noop";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/media_engine/useMuteAwareLocalVolume.tsx");

export default function useMuteAwareLocalVolume(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  let obj = { effectiveVolume: null, handleVolumeChange: null };
  const items = [_detectH265HardwareDecode];
  obj[0] = _require(589).useStateFromStores(items, () => {
    let num = 0;
    if (null != closure_0) {
      num = 0;
      if (!outer1_4.isLocalMute(tmp, closure_1)) {
        num = obj.getLocalVolume(tmp, tmp2);
      }
      obj = outer1_4;
      tmp2 = closure_1;
    }
    return num;
  });
  const items1 = [arg0, arg1];
  obj[1] = React.useCallback((arg0) => {
    if (null != closure_0) {
      let isLocalMuteResult = arg0 > 0;
      if (isLocalMuteResult) {
        isLocalMuteResult = outer1_4.isLocalMute(tmp, callback);
      }
      if (isLocalMuteResult) {
        callback(outer1_2[3]).toggleLocalMute(tmp, callback);
        const obj = callback(outer1_2[3]);
      }
      callback(outer1_2[3]).setLocalVolume(tmp, arg0, callback);
      const obj2 = callback(outer1_2[3]);
    }
  }, items1);
  return obj;
};