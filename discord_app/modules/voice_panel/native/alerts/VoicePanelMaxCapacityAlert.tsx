// === Module 17190: VoicePanelMaxCapacityAlert ===

// Module 17190 (VoicePanelMaxCapacityAlert)
import VoicePanelLockedIconDefault from "VoicePanelLockedIcon" /* 17188 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelMaxCapacityAlert.tsx");

export default function VoicePanelMaxCapacityAlert(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(563);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
  const obj2 = channelId(4910);
  obj = { header: jsx(VoicePanelLockedIconDefault, {}), title: null, content: null, actions: null };
  const intl = channelId(1114).intl;
  obj.title = intl.string(channelId(1114).t.hHbsQj);
  const intl2 = channelId(1114).intl;
  obj.content = intl2.formatToPlainString(channelId(1114).t["387SQH"], { count: stateFromStores });
  obj = { variant: "secondary", text: null, onPress: null };
  const intl3 = channelId(1114).intl;
  obj.text = intl3.string(channelId(1114).t["NX+WJN"]);
  obj.onPress = channelId(4910).useDismissModalCallback();
  obj.actions = jsx(channelId(4910).AlertActionButton, { variant: "secondary", text: null, onPress: null });
  return jsx(channelId(4910).AlertModal, { variant: "secondary", text: null, onPress: null });
};
export const VOICE_PANEL_MAX_CAPACITY_KEY = "voice-panel-max-capacity";