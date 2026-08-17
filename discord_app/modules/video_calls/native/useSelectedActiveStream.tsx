// discord_app/modules/video_calls/native/useSelectedActiveStream.tsx
import closure_2 from "getParticipants" /* 4773 */;
import closure_3 from "reset" /* 4652 */;
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/video_calls/native/useSelectedActiveStream.tsx");

export default function useSelectedActiveStream(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3];
  return _initialize.useStateFromStores(items, () => {
    const selectedParticipantId = closure_1_2.getSelectedParticipantId(id.id);
    let activeStreamForStreamKey = null;
    if (null != selectedParticipantId) {
      activeStreamForStreamKey = closure_1_3.getActiveStreamForStreamKey(selectedParticipantId);
    }
    return activeStreamForStreamKey;
  });
};