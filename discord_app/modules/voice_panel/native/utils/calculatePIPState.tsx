// discord_app/modules/voice_panel/native/utils/calculatePIPState.tsx
import VoicePanelPIPUtils from "../pip/VoicePanelPIPUtils.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";

require = fn;
const VoicePanelModes = fn(10704).VoicePanelModes;
const ParticipantTypes = fn(5593).ParticipantTypes;
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
  const pIPBlockList = VoicePanelPIPUtils.createPIPBlockList(focusedId.mode, focusedId.focusedId);
  const pIPParticipantToShow = VoicePanelPIPUtils.computePIPParticipantToShow({
    channelId,
    lastParticipantId,
    speakingUserId,
    focusedParticipantId: focusedId.focusedId,
    blockList: pIPBlockList,
    panelMode: focusedId.mode,
    showSecondaryPIP: focusedId.showSecondaryPIP,
    canShowActivities: true,
  });
  let type1;
  if (pIPParticipantToShow != null) {
    type1 = pIPParticipantToShow.type;
  }
  let tmp12 = type1 !== ParticipantTypes.STREAM;
  if (tmp12) {
    let type2;
    if (pIPParticipantToShow != null) {
      type2 = pIPParticipantToShow.type;
    }
    tmp12 = type2 !== tmp11.ACTIVITY;
  }
  if (tmp12) {
    let tmp14 = null == focusedId.focusedId;
    if (!tmp14) {
      let id;
      if (pIPParticipantToShow != null) {
        id = pIPParticipantToShow.id;
      }
      tmp14 = id !== focusedId.focusedId;
    }
    tmp12 = tmp14;
  }
  const obj3 = {
    channelId,
    lastParticipantId,
    speakingUserId,
    focusedParticipantId: focusedId.focusedId,
    blockList: pIPBlockList,
    panelMode: focusedId.mode,
    showSecondaryPIP: focusedId.showSecondaryPIP,
    canShowActivities: true,
  };
  let id1;
  if (pIPParticipantToShow != null) {
    id1 = pIPParticipantToShow.id;
  }
  let SquarePIPReferenceDimensions = getTargetDimensions.getTargetDimensions(id1);
  if (SquarePIPReferenceDimensions == null) {
    SquarePIPReferenceDimensions = VoicePanelPIPUtils.SquarePIPReferenceDimensions;
  }
  const tmp17 = focusedId.mode === VoicePanelModes.PANEL && tmp;
  const tmp6Result = VoicePanelPIPUtils;
  return {
    participant: pIPParticipantToShow,
    dimensions: VoicePanelPIPUtils.computePIPSize(
      SquarePIPReferenceDimensions,
      tmp12,
      focusedId.mode === VoicePanelModes.PANEL && tmp,
      focusedId.showSecondaryPIP,
    ),
  };
}
