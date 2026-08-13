// discord_app/modules/voice_panel/native/alerts/VoicePanelMaxCapacityAlert.tsx
import "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import { jsx } from "jsxProd";
import { VoicePanelLockedIcon } from "VoicePanelLockedIcon.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelMaxCapacityAlert.tsx");

export default function VoicePanelMaxCapacityAlert(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(647);
  const items = [ensureGuildLoaded];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channel = outer1_3.getChannel(channelId);
    let num;
    if (channel != null) {
      num = channel.userLimit;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }, items1);
  const obj2 = channelId(4688);
  obj = { header: null, title: null, content: null, actions: null };
  obj[0] = jsx(VoicePanelLockedIcon, {});
  const intl = channelId(1236).intl;
  obj[1] = intl.string(channelId(1236).t.hHbsQj);
  const intl2 = channelId(1236).intl;
  obj[2] = intl2.formatToPlainString(channelId(1236).t["387SQH"], { count: stateFromStores });
  obj = { variant: "secondary", text: null, onPress: null };
  const intl3 = channelId(1236).intl;
  obj[1] = intl3.string(channelId(1236).t["NX+WJN"]);
  obj[2] = channelId(4688).useDismissModalCallback();
  obj[3] = jsx(channelId(4688).AlertActionButton, { variant: "secondary", text: null, onPress: null });
  return jsx(channelId(4688).AlertModal, { variant: "secondary", text: null, onPress: null });
};
export const VOICE_PANEL_MAX_CAPACITY_KEY = "voice-panel-max-capacity";