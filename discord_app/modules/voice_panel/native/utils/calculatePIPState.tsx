// === Module 16514: calculatePIPState ===

// Module 16514 (calculatePIPState)
import isStreamKey from "isStreamKey" /* 4510 */;
import PIPReferenceDimensions from "PIPReferenceDimensions" /* 16515 */;
import closure_2 from "getParticipants" /* 4460 */;
import closure_3 from "reset" /* 4466 */;
import { VoicePanelModes } from "VoicePanelModes" /* 11914 */;
import { ParticipantTypes } from "ParticipantTypes" /* 4465 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/calculatePIPState.tsx");

export default function calculatePIPState(channelId, getTargetDimensions, lastParticipantId, speakingUserId, focusedId) {
  let tmp = null != focusedId.focusedId;
  if (tmp) {
    participant = participant.getParticipant(channelId, focusedId.focusedId);
    let type;
    if (participant != null) {
      type = participant.type;
    }
    tmp = type === ParticipantTypes.ACTIVITY;
  }
  const set = new Set();
  currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    set.add(isStreamKey.encodeStreamKey(currentUserActiveStream));
    const obj2 = isStreamKey;
  }
  let tmp10 = focusedId.mode === VoicePanelModes.PANEL;
  if (tmp11) {
    set.add(focusedId.focusedId);
  }
  let obj = { channelId, lastParticipantId, speakingUserId, focusedParticipantId: focusedId.focusedId, blockList: set, panelMode: focusedId.mode, showSecondaryPIP: focusedId.showSecondaryPIP };
  const pIPParticipantToShow = PIPReferenceDimensions.computePIPParticipantToShow(obj);
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
  const obj3 = PIPReferenceDimensions;
  tmp11 = null != focusedId.focusedId && tmp10;
  let id1;
  if (pIPParticipantToShow != null) {
    id1 = pIPParticipantToShow.id;
  }
  let SquarePIPReferenceDimensions = getTargetDimensions.getTargetDimensions(id1);
  if (SquarePIPReferenceDimensions == null) {
    SquarePIPReferenceDimensions = tmp13(16515).SquarePIPReferenceDimensions;
  }
  if (tmp10) {
    tmp10 = tmp;
  }
  obj = { participant: pIPParticipantToShow, dimensions: PIPReferenceDimensions.computePIPSize(SquarePIPReferenceDimensions, tmp18, tmp10, focusedId.showSecondaryPIP) };
  return obj;
};