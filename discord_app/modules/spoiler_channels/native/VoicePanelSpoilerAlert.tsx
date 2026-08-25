// discord_app/modules/spoiler_channels/native/VoicePanelSpoilerAlert.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/spoiler_channels/native/VoicePanelSpoilerAlert.tsx");

export default function VoicePanelSpoilerAlert(channelId) {
  channelId = channelId.channelId;
  closure_1 = undefined;
  let obj = channelId(4750);
  closure_1 = obj.useDismissModalCallback();
  obj = { title: null, content: null, actions: null };
  const intl = channelId(1236).intl;
  obj[0] = intl.string(channelId(1236).t["q38/ae"]);
  const intl2 = channelId(1236).intl;
  obj[1] = intl2.string(channelId(1236).t["2fDWXK"]);
  obj = { children: null };
  obj1 = {
    variant: "primary",
    onPress() {
      callback(closure_1_2[5]).spoilerAgree(channelId);
      const obj = callback(closure_1_2[5]);
      const voiceChannel = callback(closure_1_2[6]).selectVoiceChannel(channelId);
      callback();
    },
    text: null
  };
  const intl3 = channelId(1236).intl;
  obj1[2] = intl3.string(channelId(1236).t.p89ACt);
  const items = [callback(channelId(4750).AlertActionButton, obj1, "confirm"), ];
  const obj2 = {
    variant: "secondary",
    onPress() {
      callback();
    },
    text: null
  };
  const intl4 = channelId(1236).intl;
  obj2[2] = intl4.string(channelId(1236).t["/g10LC"]);
  items[1] = callback(channelId(4750).AlertActionButton, obj2, "cancel");
  obj[0] = items;
  obj[2] = callback2(channelId(4750).AlertActions, obj);
  return callback(channelId(4750).AlertModal, obj);
};
export const VOICE_PANEL_SPOILER_KEY = "voice-panel-spoiler";