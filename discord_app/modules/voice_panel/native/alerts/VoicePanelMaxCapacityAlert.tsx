// === Module 17395: VoicePanelMaxCapacityAlert ===

// Module 17395 (VoicePanelMaxCapacityAlert)
import VoicePanelLockedIconDefault from "VoicePanelLockedIcon" /* 17393 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelMaxCapacityAlert.tsx");

export default function VoicePanelMaxCapacityAlert(channelId) {
  channelId = channelId.channelId;
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(563).useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId);
    let num;
    if (channel != null) {
      num = channel.userLimit;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }, items1);
  const obj = channelId(563);
  const obj2 = channelId(4988);
  const obj3 = { header: jsx(VoicePanelLockedIconDefault, {}), title: null, content: null, actions: null };
  const intl = channelId(1115).intl;
  obj3.title = intl.string(channelId(1115).t.hHbsQj);
  const intl2 = channelId(1115).intl;
  obj3.content = intl2.formatToPlainString(channelId(1115).t["387SQH"], { count: stateFromStores });
  const obj4 = { variant: "secondary", text: null, onPress: null };
  const intl3 = channelId(1115).intl;
  obj4.text = intl3.string(channelId(1115).t["NX+WJN"]);
  obj4.onPress = channelId(4988).useDismissModalCallback();
  obj3.actions = jsx(channelId(4988).AlertActionButton, { variant: "secondary", text: null, onPress: null });
  return jsx(channelId(4988).AlertModal, { header: jsx(VoicePanelLockedIconDefault, {}), title: null, content: null, actions: null });
};
export const VOICE_PANEL_MAX_CAPACITY_KEY = "voice-panel-max-capacity";