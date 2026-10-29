// discord_app/modules/video_calls/useLocalSelfMuteDeaf.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";

require = fn;
function getLocalSelfMuteDeaf() {
  const obj = {
    sessionId: AuthenticationStore.getSessionId(),
    selfMute: MediaEngineStore.isSelfMute() || MediaEngineStore.isSelfMutedTemporarily(),
    selfDeaf: MediaEngineStore.isSelfDeaf(),
  };
  return obj;
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/useLocalSelfMuteDeaf.tsx");

export { getLocalSelfMuteDeaf };
export function withLocalSelfMuteDeaf(voiceState, localSelfMuteDeaf) {
  const sessionId = localSelfMuteDeaf.sessionId;
  let mergeResult = voiceState;
  if (null != voiceState) {
    mergeResult = voiceState;
    if (null != sessionId) {
      mergeResult = voiceState;
      if (voiceState.sessionId === sessionId) {
        const obj = { selfMute: tmp, selfDeaf: tmp2 };
        mergeResult = voiceState.merge(obj);
      }
    }
  }
  return mergeResult;
}
export const useLocalSelfMuteDeaf = ReactCompilerGating.isReactCompilerEnabled()
  ? function useLocalSelfMuteDeaf() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore, MediaEngineStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      return initialize.useStateFromStoresObject(first, getLocalSelfMuteDeaf);
    }
  : function useLocalSelfMuteDeaf() {
      const items = [AuthenticationStore, MediaEngineStore];
      return initialize.useStateFromStoresObject(items, getLocalSelfMuteDeaf);
    };
