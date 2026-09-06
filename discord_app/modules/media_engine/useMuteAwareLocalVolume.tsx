// discord_app/modules/media_engine/useMuteAwareLocalVolume.tsx
import AudioActionCreatorsDefault from "../../actions/AudioActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_engine/useMuteAwareLocalVolume.tsx");

export default function useMuteAwareLocalVolume(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let obj = { effectiveVolume: null, handleVolumeChange: null };
  const items = [MediaEngineStore];
  obj.effectiveVolume = require("initialize").useStateFromStores(items, () => {
    let num = 0;
    if (null != closure_0) {
      num = 0;
      if (!MediaEngineStore.isLocalMute(tmp, closure_1)) {
        num = obj.getLocalVolume(tmp, tmp2);
      }
      obj = MediaEngineStore;
      tmp2 = closure_1;
    }
    return num;
  });
  const items1 = [arg0, arg1];
  obj.handleVolumeChange = noop.useCallback((arg0) => {
    if (null != closure_0) {
      let isLocalMuteResult = arg0 > 0;
      if (isLocalMuteResult) {
        isLocalMuteResult = MediaEngineStore.isLocalMute(tmp, closure_1);
      }
      if (isLocalMuteResult) {
        AudioActionCreatorsDefault.toggleLocalMute(tmp, closure_1);
      }
      AudioActionCreatorsDefault.setLocalVolume(tmp, arg0, closure_1);
    }
  }, items1);
  return obj;
}
