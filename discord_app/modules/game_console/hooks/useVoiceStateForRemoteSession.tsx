// discord_app/modules/game_console/hooks/useVoiceStateForRemoteSession.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";
import GameConsoleStore from "../GameConsoleStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/hooks/useVoiceStateForRemoteSession.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useVoiceStateForRemoteSession() {
      const cResult = c.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore, VoiceStateStore, GameConsoleStore];
        const fn = function u() {
          id = id.getId();
          voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, remoteSessionId.getRemoteSessionId());
          return voiceStateForSession;
        };
        const items1 = [];
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = items1;
        tmp4 = items;
        tmp5 = fn;
        tmp6 = items1;
      } else {
        [tmp4, tmp5, tmp6] = cResult;
      }
      return initialize.useStateFromStores(tmp4, tmp5, tmp6);
    }
  : function useVoiceStateForRemoteSession() {
      const items = [AuthenticationStore, VoiceStateStore, GameConsoleStore];
      return initialize.useStateFromStores(items, () => {
        id = id.getId();
        voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, remoteSessionId.getRemoteSessionId());
        return voiceStateForSession;
      }, []);
    };
