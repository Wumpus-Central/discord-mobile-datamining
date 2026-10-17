// discord_app/modules/activities/utils/focusVoiceChannelActivity.tsx
import ChannelRTCActionCreatorsDefault from "../../../actions/ChannelRTCActionCreators.tsx";
import ChannelRTCStore from "../../calls/ChannelRTCStore.tsx";

const ChannelLayouts = fn(1087).ChannelLayouts;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/focusVoiceChannelActivity.tsx");

export default function focusVoiceChannelActivity(id, id2) {
  const participant = ChannelRTCActionCreatorsDefault.selectParticipant(id, id2);
  if (ChannelRTCStore.getLayout(id) !== ChannelLayouts.FULL_SCREEN) {
    ChannelRTCActionCreatorsDefault.updateLayout(id, tmp4.NO_CHAT);
    const tmpResult = ChannelRTCActionCreatorsDefault;
  }
}
