// === Module 19144: useExternalPipSelectedTile ===

// Module 19144 (useExternalPipSelectedTile)
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6837 */;
import PIPSpeakerStore from "PIPSpeakerStore" /* 15586 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5759 */;

const require = fn;
const VoicePanelPIPModes = fn(19059).VoicePanelPIPModes;
let size = fn(2);
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipSelectedTile.android.tsx");

export default function useExternalPipSelectedTile(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  let str = "card";
  if (arg2 === VoicePanelPIPModes.IN_APP) {
    str = "pip";
  }
  let items = [arg0, arg1, str];
  const effect = noop.useEffect(() => {
    function update() {
      if (channelId.getChannelId() === batchedStoreListener) {
        const selectedParticipantId1 = selectedParticipantId.getSelectedParticipantId(batchedStoreListener);
        speakerId = speakerId.getSpeakerId(batchedStoreListener);
        const externalPipSelectedParticipant = batchedStoreListener(str[5]).getExternalPipSelectedParticipant(batchedStoreListener, selectedParticipantId1, speakerId);
        ({ selectedParticipantId, selectedParticipantStreamId } = externalPipSelectedParticipant);
        if (null != selectedParticipantId) {
          targetDimensions = targetDimensions.getTargetDimensions(selectedParticipantId1);
          ({ width, height } = targetDimensions);
          const obj4 = { id: selectedParticipantId, streamId: null, pipDimensions: null, surface: null };
          if (selectedParticipantStreamId == null) {
            selectedParticipantStreamId = null;
          }
          obj4.streamId = selectedParticipantStreamId;
          const size = { width, height };
          obj4.pipDimensions = size;
          obj4.surface = surface;
          targetDimensions(str[6]).setSelectedTile(obj4);
          const obj3 = targetDimensions(str[6]);
        } else {
          targetDimensions(str[6]).setSelectedTile(null);
          const obj2 = targetDimensions(str[6]);
        }
        const obj = batchedStoreListener(str[5]);
      }
    }
    const items = [channelId, speakerId];
    HermesBuiltin.arraySpread(batchedStoreListener(str[5]).EXTERNAL_PIP_SELECTED_PARTICIPANT_STORES, 2);
    batchedStoreListener = new batchedStoreListener(str[7]).BatchedStoreListener(items, update);
    batchedStoreListener.attach("useExternalPipSelectedTile");
    targetDimensions = targetDimensions.subscribeFromItem(update);
    update();
    return () => {
      batchedStoreListener.detach();
      targetDimensions();
    };
  }, items);
  const effect1 = noop.useEffect(() => () => closure_1_1(str[6]).setSelectedTile(null), []);
};