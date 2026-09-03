// === Module 9539: areParticipantStatesEqual ===

// Module 9539 (areParticipantStatesEqual)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "participantFromServer" /* 1385 */;
import closure_4 from "getParticipants" /* 4494 */;
import closure_5 from "reset" /* 4500 */;
import closure_6 from "_detectH265HardwareDecode" /* 4529 */;
import closure_7 from "updateVoiceState" /* 4497 */;
import { isActivityParticipant } from "ParticipantTypes" /* 4499 */;

const require = arg1;
function areParticipantStatesEqual(arg0, arg1) {
  [, tmp] = arg0;
  [, tmp2] = arg1;
  return tmp === tmp2;
}
const result = require("set").fileFinishedImporting("modules/video_calls/native/useIsPrivateAudioOnlyCall.tsx");

export default function useIsPrivateAudioOnlyCall(id) {
  const _require = id;
  let items = [closure_4];
  const items1 = [id];
  let tmp3 = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(id.id).length > 0;
  if (!tmp3) {
    tmp3 = isActivityParticipant(callback(obj.useStateFromStores(items, () => {
      const items = [closure_1_4.getSelectedParticipant(_private.id), closure_1_4.getParticipantsVersion(_private.id)];
      return items;
    }, items1, areParticipantStatesEqual), 1)[0]);
  }
  dependencyMap = tmp3;
  obj = _require(586);
  const tmp = _require;
  const items2 = [closure_7, closure_6, closure_5];
  const items3 = [id, tmp3];
  return _require(586).useStateFromStores(items2, () => {
    let isPrivateResult = _private.isPrivate();
    if (isPrivateResult) {
      isPrivateResult = !closure_1_7.hasVideo(tmp.id);
    }
    if (isPrivateResult) {
      isPrivateResult = !closure_1;
    }
    if (isPrivateResult) {
      isPrivateResult = 0 === closure_1_5.getAllApplicationStreamsForChannel(tmp.id).length;
    }
    if (isPrivateResult) {
      isPrivateResult = 0 === closure_1_5.getAllActiveStreamsForChannel(tmp.id).length;
    }
    if (isPrivateResult) {
      isPrivateResult = !closure_1_6.isVideoEnabled();
    }
    return isPrivateResult;
  }, items3);
};