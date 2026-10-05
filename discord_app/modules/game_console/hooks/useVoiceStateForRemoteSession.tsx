// discord_app/modules/game_console/hooks/useVoiceStateForRemoteSession.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../_runtime/00576_react.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";
import GameConsoleStore from "../GameConsoleStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let id, voiceStateForSession;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let remoteSessionId;
      let tmp4;
      let tmp5;
      let tmp6;
      const obj = react;
      const cResult = obj.c(3);
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
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStores(tmp4, tmp5, tmp6);
    }
  : () => {
      let remoteSessionId;
      const items = [AuthenticationStore, VoiceStateStore, GameConsoleStore];
      const obj = get_initialized;
      return obj.useStateFromStores(items, () => {
        id = id.getId();
        voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, remoteSessionId.getRemoteSessionId());
        return voiceStateForSession;
      }, []);
    };
const result = size.fileFinishedImporting("modules/game_console/hooks/useVoiceStateForRemoteSession.tsx");

export default tmp2;
