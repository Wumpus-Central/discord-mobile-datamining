// discord_app/modules/voice_panel/native/utils/useSelfHasVideo.tsx
import closure_2 from "../../../calls/ChannelRTCStore.tsx";
import closure_3 from "../../../../stores/AuthenticationStore.tsx";
import closure_4 from "../../../../stores/MediaEngineStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/useSelfHasVideo.tsx");

export default function useSelfHasVideo(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3, closure_4];
  return require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const participant = closure_1_2.getParticipant(callback, closure_1_3.getId());
    return callback(closure_1_1[4]).canRenderParticipantVideo(participant, closure_1_4);
  });
};