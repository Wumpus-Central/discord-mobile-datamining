// === Module 11895: focusVoiceChannelActivity ===

// Module 11895 (focusVoiceChannelActivity)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5672 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6720 */;

const ChannelLayouts = fn(1087).ChannelLayouts;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/focusVoiceChannelActivity.tsx");

export default function focusVoiceChannelActivity(id, id2) {
  const participant = ChannelRTCActionCreatorsDefault.selectParticipant(id, id2);
  if (ChannelRTCStore.getLayout(id) !== ChannelLayouts.FULL_SCREEN) {
    ChannelRTCActionCreatorsDefault.updateLayout(id, tmp4.NO_CHAT);
    const tmpResult = ChannelRTCActionCreatorsDefault;
  }
};