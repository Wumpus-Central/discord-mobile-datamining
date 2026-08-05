// discord_app/modules/video_calls/native/useIsPrivateAudioOnlyCall.tsx
import _slicedToArray from "_slicedToArray";
import participantFromServer from "participantFromServer";
import getParticipants from "getParticipants";
import reset from "reset";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import updateVoiceState from "updateVoiceState";
import { isActivityParticipant } from "ParticipantTypes";

const require = arg1;
function areParticipantStatesEqual(arg0, arg1) {
  let tmp;
  let tmp2;
  [, tmp] = arg0;
  [, tmp2] = arg1;
  return tmp === tmp2;
}
const result = require("getParticipants").fileFinishedImporting("modules/video_calls/native/useIsPrivateAudioOnlyCall.tsx");

export default function useIsPrivateAudioOnlyCall(id) {
  const _require = id;
  let items = [getParticipants];
  const items1 = [id];
  let tmp3 = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(id.id).length > 0;
  if (!tmp3) {
    tmp3 = isActivityParticipant(callback(obj.useStateFromStores(items, () => {
      const items = [outer1_4.getSelectedParticipant(_private.id), outer1_4.getParticipantsVersion(_private.id)];
      return items;
    }, items1, areParticipantStatesEqual), 1)[0]);
  }
  const dependencyMap = tmp3;
  obj = _require("../../../../discord_common/js/packages/flux/index.tsx");
  const tmp = _require;
  const items2 = [updateVoiceState, _detectH265HardwareDecode, reset];
  const items3 = [id, tmp3];
  return _require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items2, () => {
    let isPrivateResult = _private.isPrivate();
    if (isPrivateResult) {
      isPrivateResult = !outer1_7.hasVideo(tmp.id);
    }
    if (isPrivateResult) {
      isPrivateResult = !closure_1;
    }
    if (isPrivateResult) {
      isPrivateResult = 0 === outer1_5.getAllApplicationStreamsForChannel(tmp.id).length;
    }
    if (isPrivateResult) {
      isPrivateResult = 0 === outer1_5.getAllActiveStreamsForChannel(tmp.id).length;
    }
    if (isPrivateResult) {
      isPrivateResult = !outer1_6.isVideoEnabled();
    }
    return isPrivateResult;
  }, items3);
};