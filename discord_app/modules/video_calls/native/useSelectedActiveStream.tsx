// discord_app/modules/video_calls/native/useSelectedActiveStream.tsx
import getParticipants from "../../calls/ChannelRTCStore.tsx";
import reset from "../../../stores/ApplicationStreamingStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/video_calls/native/useSelectedActiveStream.tsx");

export default function useSelectedActiveStream(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const selectedParticipantId = closure_1_2.getSelectedParticipantId(id.id);
    let activeStreamForStreamKey = null;
    if (null != selectedParticipantId) {
      activeStreamForStreamKey = closure_1_3.getActiveStreamForStreamKey(selectedParticipantId);
    }
    return activeStreamForStreamKey;
  });
};