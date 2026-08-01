// === Module 12443: VoicePanelSpoilerAlert ===

// Module 12443 (VoicePanelSpoilerAlert)
import "noop";
import jsxProd from "jsxProd";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/spoiler_channels/native/VoicePanelSpoilerAlert.tsx");

export default function VoicePanelSpoilerAlert(channelId) {
  channelId = channelId.channelId;
  let closure_1;
  let obj = channelId(4537);
  closure_1 = obj.useDismissModalCallback();
  obj = { title: null, content: null, actions: null };
  const intl = channelId(1236).intl;
  obj[0] = intl.string(channelId(1236).t["q38/ae"]);
  const intl2 = channelId(1236).intl;
  obj[1] = intl2.string(channelId(1236).t["2fDWXK"]);
  obj = { children: null };
  const obj1 = {
    variant: "primary",
    onPress() {
      callback(outer1_2[5]).spoilerAgree(channelId);
      const obj = callback(outer1_2[5]);
      const voiceChannel = callback(outer1_2[6]).selectVoiceChannel(channelId);
      callback();
    },
    text: null
  };
  const intl3 = channelId(1236).intl;
  obj1[2] = intl3.string(channelId(1236).t.p89ACt);
  const items = [callback(channelId(4537).AlertActionButton, obj1, "confirm"), ];
  const obj2 = {
    variant: "secondary",
    onPress() {
      callback();
    },
    text: null
  };
  const intl4 = channelId(1236).intl;
  obj2[2] = intl4.string(channelId(1236).t["/g10LC"]);
  items[1] = callback(channelId(4537).AlertActionButton, obj2, "cancel");
  obj[0] = items;
  obj[2] = callback2(channelId(4537).AlertActions, obj);
  return callback(channelId(4537).AlertModal, obj);
};
export const VOICE_PANEL_SPOILER_KEY = "voice-panel-spoiler";