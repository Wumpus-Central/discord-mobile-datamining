// discord_app/modules/video_calls/useDeafStates.tsx
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/useDeafStates.tsx");

export default function useDeafStates(arg0) {
  _require = arg0;
  const items = [VoiceStateStore, MediaEngineStore, AuthenticationStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresObject(
    items,
    () => {
      let obj = closure_0;
      if (VoiceStateStore !== undefined) {
        if (MediaEngineStore !== undefined) {
          if (AuthenticationStore !== undefined) {
            let voiceState = null;
            if (null != obj) {
              const guildId = obj.getGuildId();
              voiceState = VoiceStateStore.getVoiceState(guildId, AuthenticationStore.getId());
            }
            obj = { selfDeaf: MediaEngineStore.isSelfDeaf(), deaf: null };
            let flag;
            if (voiceState != null) {
              flag = voiceState.deaf;
            }
            if (flag == null) {
              flag = false;
            }
            obj.deaf = flag;
            return obj;
          }
        }
      }
    },
    items1,
  );
}
export const getDeafStates = function getDeafStates(channel) {
  let obj = VoiceStateStore;
  if (VoiceStateStore === undefined) {
    obj = VoiceStateStore;
  }
  let obj2 = MediaEngineStore;
  if (MediaEngineStore === undefined) {
    obj2 = MediaEngineStore;
  }
  let obj3 = AuthenticationStore;
  if (AuthenticationStore === undefined) {
    obj3 = AuthenticationStore;
  }
  let voiceState = null;
  if (null != channel) {
    const guildId = channel.getGuildId();
    voiceState = obj.getVoiceState(guildId, obj3.getId());
  }
  obj = { selfDeaf: obj2.isSelfDeaf(), deaf: null };
  let flag;
  if (voiceState != null) {
    flag = voiceState.deaf;
  }
  if (flag == null) {
    flag = false;
  }
  obj.deaf = flag;
  return obj;
};
