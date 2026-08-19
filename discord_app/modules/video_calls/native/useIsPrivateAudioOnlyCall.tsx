// discord_app/modules/video_calls/native/useIsPrivateAudioOnlyCall.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import participantFromServer from "../../activities/EmbeddedActivitiesStore.tsx";
import getParticipants from "../../calls/ChannelRTCStore.tsx";
import reset from "../../../stores/ApplicationStreamingStore.tsx";
import _detectH265HardwareDecode from "../../../stores/MediaEngineStore.tsx";
import updateVoiceState from "../../../stores/VoiceStateStore.tsx";
import { isActivityParticipant } from "../../calls/CallConstants.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = fn;
function areParticipantStatesEqual(arg0, arg1) {
  [, tmp] = arg0;
  [, tmp2] = arg1;
  return tmp === tmp2;
}
const result = require("obj132").fileFinishedImporting("modules/video_calls/native/useIsPrivateAudioOnlyCall.tsx");

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
  obj = initialize;
  const items2 = [closure_7, closure_6, closure_5];
  const items3 = [id, tmp3];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items2, () => {
    let isPrivateResult = _private.isPrivate();
    if (isPrivateResult) {
      isPrivateResult = !closure_1_7.hasVideo(_private.id);
    }
    if (isPrivateResult) {
      isPrivateResult = !closure_1;
    }
    if (isPrivateResult) {
      isPrivateResult = 0 === closure_1_5.getAllApplicationStreamsForChannel(_private.id).length;
    }
    if (isPrivateResult) {
      isPrivateResult = 0 === closure_1_5.getAllActiveStreamsForChannel(_private.id).length;
    }
    if (isPrivateResult) {
      isPrivateResult = !closure_1_6.isVideoEnabled();
    }
    return isPrivateResult;
  }, items3);
};