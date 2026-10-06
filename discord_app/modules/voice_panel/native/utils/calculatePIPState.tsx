// === Module 17398: calculatePIPState ===

// Module 17398 (calculatePIPState)
import CallConstants from "CallConstants" /* 4917 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4948 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11916 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 17234 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4912 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4918 */;
import size from "module_2" /* 2 */;

let set;

const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const ParticipantTypes = CallConstants.ParticipantTypes;
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/calculatePIPState.tsx");

export default function calculatePIPState(channelId, getTargetDimensions, lastParticipantId, speakingUserId, focusedId) {
  let tmp = null != focusedId.focusedId;
  if (tmp) {
    const participant = ChannelRTCStore.getParticipant(channelId, focusedId.focusedId);
    let type;
    if (participant != null) {
      type = participant.type;
    }
    tmp = type === ParticipantTypes.ACTIVITY;
  }
  set = new Set();
  const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    const add = set.add;
    const obj2 = StreamKeyUtils;
    add(obj2.encodeStreamKey(currentUserActiveStream));
  }
  let tmp10 = focusedId.mode === VoicePanelModes.PANEL;
  const tmp11 = null != focusedId.focusedId && tmp10;
  if (tmp11) {
    set.add(focusedId.focusedId);
  }
  const obj = { channelId, lastParticipantId, speakingUserId, focusedParticipantId: focusedId.focusedId, blockList: set, panelMode: focusedId.mode, showSecondaryPIP: focusedId.showSecondaryPIP };
  const obj3 = VoicePanelPIPUtils;
  const pIPParticipantToShow = obj3.computePIPParticipantToShow(obj);
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
  let id1;
  const computePIPSize = VoicePanelPIPUtils.computePIPSize;
  getTargetDimensions = getTargetDimensions.getTargetDimensions;
  VoicePanelPIPUtils;
  if (pIPParticipantToShow != null) {
    id1 = pIPParticipantToShow.id;
  }
  let SquarePIPReferenceDimensions = getTargetDimensions(id1);
  if (SquarePIPReferenceDimensions == null) {
    SquarePIPReferenceDimensions = VoicePanelPIPUtils.SquarePIPReferenceDimensions;
  }
  if (tmp10) {
    tmp10 = tmp;
  }
  const obj4 = { participant: pIPParticipantToShow, dimensions: computePIPSize(SquarePIPReferenceDimensions, tmp18, tmp10, focusedId.showSecondaryPIP) };
  return obj4;
};