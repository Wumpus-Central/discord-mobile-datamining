// === Module 12481: useIsStreamFocused ===

// Module 12481 (useIsStreamFocused)
import closure_2 from "getParticipants" /* 4773 */;
import { isStreamParticipant } from "ParticipantTypes" /* 4544 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/video_calls/useIsStreamFocused.tsx");

export const useIsStreamFocused = function useIsStreamFocused(id) {
  const _require = id;
  const items = [closure_2];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    let selectedParticipant = null;
    if (null != closure_0) {
      selectedParticipant = closure_1_2.getSelectedParticipant(tmp);
    }
    return selectedParticipant;
  });
  let tmp2 = null != stateFromStores;
  if (tmp2) {
    tmp2 = isStreamParticipant(stateFromStores);
  }
  return tmp2;
};