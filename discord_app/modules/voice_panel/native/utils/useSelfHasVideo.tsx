// discord_app/modules/voice_panel/native/utils/useSelfHasVideo.tsx
import participantHasVideo from "../../../video_calls/participantHasVideo.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp8;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelRTCStore, AuthenticationStore, MediaEngineStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          const canRenderParticipantVideo = participantHasVideo.canRenderParticipantVideo;
          participantHasVideo;
          const participant = ChannelRTCStore.getParticipant(closure_0, AuthenticationStore.getId());
          return canRenderParticipantVideo(participant, MediaEngineStore);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp8);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [ChannelRTCStore, AuthenticationStore, MediaEngineStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        const canRenderParticipantVideo = participantHasVideo.canRenderParticipantVideo;
        participantHasVideo;
        const participant = ChannelRTCStore.getParticipant(closure_0, AuthenticationStore.getId());
        return canRenderParticipantVideo(participant, MediaEngineStore);
      });
    };
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/useSelfHasVideo.tsx");

export default tmp2;
