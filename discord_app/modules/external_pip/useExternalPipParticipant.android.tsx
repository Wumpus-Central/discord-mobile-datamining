// discord_app/modules/external_pip/useExternalPipParticipant.android.tsx
import participantHasVideo from "../video_calls/participantHasVideo.tsx";
import VoicePanelPIPUtils from "../voice_panel/native/pip/VoicePanelPIPUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../calls/ChannelRTCStore.tsx";
import PIPSpeakerStore from "../voice_panel/native/pip/PIPSpeakerStore.tsx";
import ApplicationStreamingStore from "../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";

require = fn;
function getExternalPipSelectedParticipant(batchedStoreListener, selectedParticipantId1, speakerId) {
  if (null == batchedStoreListener) {
    return closure_9;
  } else {
    const obj2 = {
      channelId: batchedStoreListener,
      panelMode: VoicePanelModes.PIP,
      focusedParticipantId: selectedParticipantId1,
      lastParticipantId: selectedParticipantId1,
      speakingUserId: speakerId,
      blockList: null,
      showSecondaryPIP: false,
      canShowActivities: false,
    };
    const obj3 = VoicePanelPIPUtils;
    obj2.blockList = VoicePanelPIPUtils.createPIPBlockList(VoicePanelModes.PIP, selectedParticipantId1);
    const pIPParticipantToShow = obj3.computePIPParticipantToShow(obj2);
    let participant;
    if (null != pIPParticipantToShow) {
      participant = ChannelRTCStore.getParticipant(batchedStoreListener, pIPParticipantToShow.id);
    }
    if (null != participant) {
      if (participant.type !== ParticipantTypes.ACTIVITY) {
        let obj = {
          participantType: null,
          selectedParticipantId: null,
          selectedParticipantSpeaking: null,
          selectedParticipantStreamId: null,
          selectedParticipantUserId: null,
        };
        ({ type: obj.participantType, id: obj.selectedParticipantId } = participant);
        obj.selectedParticipantSpeaking = participant.type === tmp11.USER && participant.speaking;
        let tmp3;
        if (tmp7Result.canRenderParticipantVideo(participant)) {
          const streamId = participant.streamId;
          tmp3 = streamId;
        }
        obj.selectedParticipantStreamId = tmp3;
        obj.selectedParticipantUserId = participant.user.id;
        tmp7Result = participantHasVideo;
      }
      return obj;
    }
    obj = closure_9;
  }
}
const ParticipantTypes = fn(5681).ParticipantTypes;
const VoicePanelModes = fn(11223).VoicePanelModes;
let closure_9 = {
  participantType: "flexDirection",
  selectedParticipantId: "createStyles",
  selectedParticipantSpeaking: null,
  selectedParticipantStreamId: null,
  selectedParticipantUserId: null,
};
let items = [ChannelRTCStore, ApplicationStreamingStore, AuthenticationStore, MediaEngineStore];
const size = fn(2);
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipParticipant.android.tsx");

export default function useExternalPipParticipant() {
  items = [RTCConnectionStore];
  stateFromStores = stateFromStores(stateFromStores1[11]).useStateFromStores(items, () => channelId.getChannelId());
  const obj = stateFromStores(stateFromStores1[11]);
  const items1 = [ChannelRTCStore];
  stateFromStores1 = stateFromStores(stateFromStores1[11]).useStateFromStores(items1, () => {
    let tmp2;
    if (null != stateFromStores) {
      const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(tmp);
      tmp2 = selectedParticipantId;
    }
    return tmp2;
  });
  const tmpResult = stateFromStores(stateFromStores1[11]);
  const items2 = [PIPSpeakerStore];
  const stateFromStores2 = stateFromStores(stateFromStores1[11]).useStateFromStores(items2, () =>
    PIPSpeakerStore.getSpeakerId(stateFromStores),
  );
  const tmpResult3 = stateFromStores(stateFromStores1[11]);
  const items3 = [stateFromStores, stateFromStores1, stateFromStores2];
  const stateFromStoresObject = stateFromStores(stateFromStores1[11]).useStateFromStoresObject(
    items,
    () => getExternalPipSelectedParticipant(stateFromStores, stateFromStores1, stateFromStores2),
    items3,
  );
  const selectedParticipantStreamId = stateFromStoresObject.selectedParticipantStreamId;
  closure_129_0 = selectedParticipantStreamId;
  const items4 = [selectedParticipantStreamId];
  const effect = stateFromStores2.useEffect(() => {
    closure_0 = stateFromStores;
    if (null != stateFromStores) {
      const useExternalPipParticipant = "useExternalPipParticipant";
      mediaEngine = MediaEngineStore.getMediaEngine();
      mediaEngine.eachConnection((setHasActiveVideoOutputSink) =>
        setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, true, useExternalPipParticipant),
      );
      return () => {
        mediaEngine = mediaEngine.getMediaEngine();
        mediaEngine.eachConnection((setHasActiveVideoOutputSink) =>
          setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_1_0, false, useExternalPipParticipant),
        );
      };
    }
  }, items4);
  const merged = Object.assign(stateFromStoresObject);
  return { channelId: stateFromStores };
}
export const EXTERNAL_PIP_SELECTED_PARTICIPANT_STORES = items;
export { getExternalPipSelectedParticipant };
