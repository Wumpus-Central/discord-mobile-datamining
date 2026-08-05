// discord_app/modules/video_calls/useIsStreamFocused.tsx
import getParticipants from "getParticipants";
import { isStreamParticipant } from "ParticipantTypes";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/video_calls/useIsStreamFocused.tsx");

export const useIsStreamFocused = function useIsStreamFocused(id) {
  const _require = id;
  const items = [getParticipants];
  const stateFromStores = _require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let selectedParticipant = null;
    if (null != closure_0) {
      selectedParticipant = outer1_2.getSelectedParticipant(tmp);
    }
    return selectedParticipant;
  });
  let tmp2 = null != stateFromStores;
  if (tmp2) {
    tmp2 = isStreamParticipant(stateFromStores);
  }
  return tmp2;
};