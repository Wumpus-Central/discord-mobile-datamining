// discord_app/modules/voice_panel/native/utils/useSelfHasVideo.tsx
import getParticipants from "../../../calls/ChannelRTCStore.tsx";
import fetchFingerprint from "../../../../stores/AuthenticationStore.tsx";
import _detectH265HardwareDecode from "../../../../stores/MediaEngineStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/utils/useSelfHasVideo.tsx");

export default function useSelfHasVideo(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3, closure_4];
  return require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const participant = closure_1_2.getParticipant(callback, closure_1_3.getId());
    return callback(dependencyMap[4]).canRenderParticipantVideo(participant, closure_1_4);
  });
};