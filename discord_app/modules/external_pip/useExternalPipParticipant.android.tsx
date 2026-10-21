// === Module 18274: useExternalPipParticipant ===

// Module 18274 (useExternalPipParticipant)
import participantHasVideo from "participantHasVideo" /* 10853 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 18275 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6751 */;
import PIPSpeakerStore from "PIPSpeakerStore" /* 14943 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6621 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2014 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5696 */;

require = fn;
function getExternalPipSelectedParticipant(batchedStoreListener, selectedParticipantId1, speakerId) {
  if (null == batchedStoreListener) {
    return closure_10;
  } else {
    const obj2 = { channelId: batchedStoreListener, panelMode: VoicePanelModes.PIP, focusedParticipantId: selectedParticipantId1, lastParticipantId: selectedParticipantId1, speakingUserId: speakerId, blockList: null, showSecondaryPIP: false, canShowActivities: false };
    const obj3 = VoicePanelPIPUtils;
    obj2.blockList = VoicePanelPIPUtils.createPIPBlockList(VoicePanelModes.PIP, selectedParticipantId1);
    const pIPParticipantToShow = obj3.computePIPParticipantToShow(obj2);
    let participant;
    if (null != pIPParticipantToShow) {
      participant = ChannelRTCStore.getParticipant(batchedStoreListener, pIPParticipantToShow.id);
    }
    if (null != participant) {
      if (participant.type !== ParticipantTypes.ACTIVITY) {
        let obj = { participantType: null, selectedParticipantId: null, selectedParticipantSpeaking: null, selectedParticipantStreamId: null, selectedParticipantUserId: null };
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
    obj = closure_10;
  }
}
const ParticipantTypes = fn(5614).ParticipantTypes;
const VoicePanelModes = fn(10848).VoicePanelModes;
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSetHasActiveVideoOutputSink(selectedParticipantStreamId) {
  const cResult = selectedParticipantStreamId(576).c(3);
  selectedParticipantStreamId = selectedParticipantStreamId.selectedParticipantStreamId;
  if (cResult[0] !== selectedParticipantStreamId) {
    const fn = function c() {
      closure_0 = selectedParticipantStreamId;
      if (null != selectedParticipantStreamId) {
        mediaEngine = MediaEngineStore.getMediaEngine();
        mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, true, "useExternalPipParticipant"));
        return () => {
          mediaEngine = mediaEngine.getMediaEngine();
          mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_1_0, false, "useExternalPipParticipant"));
        };
      }
    };
    items = [selectedParticipantStreamId];
    cResult[0] = selectedParticipantStreamId;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = noop.useEffect(tmp2, tmp3);
}) : (function useSetHasActiveVideoOutputSink(selectedParticipantStreamId) {
  selectedParticipantStreamId = selectedParticipantStreamId.selectedParticipantStreamId;
  items = [selectedParticipantStreamId];
  const effect = noop.useEffect(() => {
    closure_0 = selectedParticipantStreamId;
    if (null != selectedParticipantStreamId) {
      const useExternalPipParticipant = "useExternalPipParticipant";
      mediaEngine = MediaEngineStore.getMediaEngine();
      mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, true, useExternalPipParticipant));
      return () => {
        mediaEngine = mediaEngine.getMediaEngine();
        mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_1_0, false, useExternalPipParticipant));
      };
    }
  }, items);
});
let closure_10 = { participantType: "Reflect", selectedParticipantId: "default", selectedParticipantSpeaking: null, selectedParticipantStreamId: null, selectedParticipantUserId: null };
let items = [ChannelRTCStore, ApplicationStreamingStore, AuthenticationStore, MediaEngineStore];
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipParticipant.android.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useExternalPipParticipant() {
  const cResult = stateFromStores(stateFromStores1[10]).c(14);
  const obj = stateFromStores(stateFromStores1[10]);
  items = [RTCConnectionStore];
  stateFromStores = stateFromStores(stateFromStores1[13]).useStateFromStores(items, () => channelId.getChannelId());
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelRTCStore];
    cResult[0] = items1;
    let first = items1;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== stateFromStores) {
    const fn = function o() {
      let tmp2;
      if (null != stateFromStores) {
        const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(tmp);
        tmp2 = selectedParticipantId;
      }
      return tmp2;
    };
    cResult[1] = stateFromStores;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj2 = stateFromStores(stateFromStores1[13]);
  stateFromStores1 = stateFromStores(stateFromStores1[13]).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PIPSpeakerStore];
    cResult[3] = items2;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    class P {
      constructor() {
        return closure_4.getSpeakerId(c0);
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = P;
  } else {
    class P {
      constructor() {
        return closure_4.getSpeakerId(c0);
      }
    }
  }
  const tmpResult = stateFromStores(stateFromStores1[13]);
  const stateFromStores2 = stateFromStores(stateFromStores1[13]).useStateFromStores(tmp9, P);
  if (cResult[6] === stateFromStores) {
    class P {
      constructor() {
        return closure_4.getSpeakerId(c0);
      }
    }
  }
  class E {
    constructor() {
      return getExternalPipSelectedParticipant(c0, closure_1, closure_2);
    }
  }
  const items3 = [stateFromStores, stateFromStores1, stateFromStores2];
  cResult[6] = stateFromStores;
  cResult[7] = stateFromStores1;
  cResult[8] = stateFromStores2;
  cResult[9] = E;
  cResult[10] = items3;
  const tmpResult2 = stateFromStores(stateFromStores1[13]);
}) : (function useExternalPipParticipant() {
  items = [RTCConnectionStore];
  stateFromStores = stateFromStores(stateFromStores1[13]).useStateFromStores(items, () => channelId.getChannelId());
  const obj = stateFromStores(stateFromStores1[13]);
  const items1 = [ChannelRTCStore];
  stateFromStores1 = stateFromStores(stateFromStores1[13]).useStateFromStores(items1, () => {
    let tmp2;
    if (null != stateFromStores) {
      const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(tmp);
      tmp2 = selectedParticipantId;
    }
    return tmp2;
  });
  const tmpResult = stateFromStores(stateFromStores1[13]);
  const items2 = [PIPSpeakerStore];
  const stateFromStores2 = stateFromStores(stateFromStores1[13]).useStateFromStores(items2, () => PIPSpeakerStore.getSpeakerId(stateFromStores));
  const tmpResult3 = stateFromStores(stateFromStores1[13]);
  const items3 = [stateFromStores, stateFromStores1, stateFromStores2];
  const stateFromStoresObject = stateFromStores(stateFromStores1[13]).useStateFromStoresObject(items, () => getExternalPipSelectedParticipant(stateFromStores, stateFromStores1, stateFromStores2), items3);
  closure_9(stateFromStoresObject);
  const merged = Object.assign(stateFromStoresObject);
  return { channelId: stateFromStores };
});
export const EXTERNAL_PIP_SELECTED_PARTICIPANT_STORES = items;
export { getExternalPipSelectedParticipant };