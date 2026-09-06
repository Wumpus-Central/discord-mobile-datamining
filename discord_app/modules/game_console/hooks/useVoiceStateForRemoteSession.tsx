// discord_app/modules/game_console/hooks/useVoiceStateForRemoteSession.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";
import GameConsoleStore from "../GameConsoleStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/hooks/useVoiceStateForRemoteSession.tsx");

export default function useVoiceStateForRemoteSession() {
  const items = [AuthenticationStore, VoiceStateStore, GameConsoleStore];
  return initialize.useStateFromStores(items, () => {
    id = id.getId();
    voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, remoteSessionId.getRemoteSessionId());
    return voiceStateForSession;
  }, []);
}
