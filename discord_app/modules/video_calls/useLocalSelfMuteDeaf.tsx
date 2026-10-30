// discord_app/modules/video_calls/useLocalSelfMuteDeaf.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
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
export function useLocalSelfMuteDeaf() {
  const items = [AuthenticationStore, MediaEngineStore];
  return initialize.useStateFromStoresObject(items, getLocalSelfMuteDeaf);
}
