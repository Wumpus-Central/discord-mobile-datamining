// discord_app/modules/voice_panel/native/utils/calculatePIPState.tsx
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import VoicePanelPIPUtils from "../pip/VoicePanelPIPUtils.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";

require = fn;
const VoicePanelModes = fn(12273).VoicePanelModes;
const ParticipantTypes = fn(4581).ParticipantTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/calculatePIPState.tsx");

export default function calculatePIPState(
  channelId,
  getTargetDimensions,
  lastParticipantId,
  speakingUserId,
  focusedId,
) {
  let tmp = null != focusedId.focusedId;
  if (tmp) {
    const participant = ChannelRTCStore.getParticipant(channelId, focusedId.focusedId);
    let type;
    if (participant != null) {
      type = participant.type;
    }
    tmp = type === ParticipantTypes.ACTIVITY;
  }
  const set = new Set();
  const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    set.add(StreamKeyUtils.encodeStreamKey(currentUserActiveStream));
  }
  let tmp10 = focusedId.mode === VoicePanelModes.PANEL;
  if (tmp11) {
    set.add(focusedId.focusedId);
  }
  let obj = {
    channelId,
    lastParticipantId,
    speakingUserId,
    focusedParticipantId: focusedId.focusedId,
    blockList: set,
    panelMode: focusedId.mode,
    showSecondaryPIP: focusedId.showSecondaryPIP,
  };
  const pIPParticipantToShow = VoicePanelPIPUtils.computePIPParticipantToShow(obj);
  let type1;
  if (pIPParticipantToShow != null) {
    type1 = pIPParticipantToShow.type;
  }
  let tmp18 = type1 !== ParticipantTypes.STREAM;
  if (tmp18) {
    let type2;
    if (pIPParticipantToShow != null) {
      type2 = pIPParticipantToShow.type;
    }
    tmp18 = type2 !== tmp17.ACTIVITY;
  }
  if (tmp18) {
    let tmp20 = null == focusedId.focusedId;
    if (!tmp20) {
      let id;
      if (pIPParticipantToShow != null) {
        id = pIPParticipantToShow.id;
      }
      tmp20 = id !== focusedId.focusedId;
    }
    tmp18 = tmp20;
  }
  tmp11 = null != focusedId.focusedId && tmp10;
  let id1;
  if (pIPParticipantToShow != null) {
    id1 = pIPParticipantToShow.id;
  }
  let SquarePIPReferenceDimensions = getTargetDimensions.getTargetDimensions(id1);
  if (SquarePIPReferenceDimensions == null) {
    SquarePIPReferenceDimensions = tmp13(17087).SquarePIPReferenceDimensions;
  }
  if (tmp10) {
    tmp10 = tmp;
  }
  obj = {
    participant: pIPParticipantToShow,
    dimensions: VoicePanelPIPUtils.computePIPSize(
      SquarePIPReferenceDimensions,
      tmp18,
      tmp10,
      focusedId.showSecondaryPIP,
    ),
  };
  return obj;
}
