// discord_app/modules/voice_panel/native/utils/useSelfHasVideo.tsx
import participantHasVideo from "../../../video_calls/participantHasVideo.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/useSelfHasVideo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useSelfHasVideo(arg0) {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelRTCStore, AuthenticationStore, MediaEngineStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          const participant = ChannelRTCStore.getParticipant(closure_0, AuthenticationStore.getId());
          return participantHasVideo.canRenderParticipantVideo(participant, MediaEngineStore);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, tmp8);
    }
  : function useSelfHasVideo(arg0) {
      _require = arg0;
      const items = [ChannelRTCStore, AuthenticationStore, MediaEngineStore];
      return require("initialize").useStateFromStores(items, () => {
        const participant = ChannelRTCStore.getParticipant(closure_0, AuthenticationStore.getId());
        return participantHasVideo.canRenderParticipantVideo(participant, MediaEngineStore);
      });
    };
