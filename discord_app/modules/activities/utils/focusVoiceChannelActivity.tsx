// === Module 12724: focusVoiceChannelActivity ===

// Module 12724 (focusVoiceChannelActivity)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5711 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6773 */;

const ChannelLayouts = fn(1084).ChannelLayouts;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/focusVoiceChannelActivity.tsx");

export default function focusVoiceChannelActivity(id, id2) {
  const participant = ChannelRTCActionCreatorsDefault.selectParticipant(id, id2);
  if (ChannelRTCStore.getLayout(id) !== ChannelLayouts.FULL_SCREEN) {
    ChannelRTCActionCreatorsDefault.updateLayout(id, tmp4.NO_CHAT);
    const tmpResult = ChannelRTCActionCreatorsDefault;
  }
};