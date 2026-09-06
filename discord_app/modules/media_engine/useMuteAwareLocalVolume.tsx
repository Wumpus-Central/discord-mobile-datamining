// === Module 10017: useMuteAwareLocalVolume ===

// Module 10017 (useMuteAwareLocalVolume)
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9089 */;
import noop from "module_19" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_engine/useMuteAwareLocalVolume.tsx");

export default function useMuteAwareLocalVolume(ownerId, STREAM) {
  _require = ownerId;
  closure_1 = STREAM;
  let obj = { effectiveVolume: null, handleVolumeChange: null };
  const items = [MediaEngineStore];
  obj.effectiveVolume = require("initialize").useStateFromStores(items, () => {
    let num = 0;
    if (null != closure_0) {
      num = 0;
      if (!MediaEngineStore.isLocalMute(closure_0, closure_1)) {
        num = MediaEngineStore.getLocalVolume(closure_0, closure_1);
      }
    }
    return num;
  });
  const items1 = [ownerId, STREAM];
  obj.handleVolumeChange = noop.useCallback((arg0) => {
    if (null != closure_0) {
      let isLocalMuteResult = arg0 > 0;
      if (isLocalMuteResult) {
        isLocalMuteResult = MediaEngineStore.isLocalMute(closure_0, closure_1);
      }
      if (isLocalMuteResult) {
        AudioActionCreatorsDefault.toggleLocalMute(closure_0, closure_1);
      }
      AudioActionCreatorsDefault.setLocalVolume(closure_0, arg0, closure_1);
    }
  }, items1);
  return obj;
};