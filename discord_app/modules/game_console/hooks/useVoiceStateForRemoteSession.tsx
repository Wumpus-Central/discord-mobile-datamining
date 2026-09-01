// discord_app/modules/game_console/hooks/useVoiceStateForRemoteSession.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import closure_2 from "../../../stores/AuthenticationStore.tsx";
import closure_3 from "../../../stores/VoiceStateStore.tsx";
import closure_4 from "../GameConsoleStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/game_console/hooks/useVoiceStateForRemoteSession.tsx");

export default function useVoiceStateForRemoteSession() {
  const items = [closure_2, closure_3, closure_4];
  return initialize.useStateFromStores(items, () => {
    id = id.getId();
    voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, remoteSessionId.getRemoteSessionId());
    return voiceStateForSession;
  }, []);
}
