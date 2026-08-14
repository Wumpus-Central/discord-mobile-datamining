// discord_app/modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx
import "noop";
import { jsx } from "jsxProd";
import { registerAsset } from "../../../../../_runtime/13124_registerAsset.js";
import { NUFActionSheetTemplate } from "NUFTemplate.tsx";

const require = arg1;
let result = require("NUFActionSheetTemplate").fileFinishedImporting("modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx");

export default function NUFVoiceChannelsTemplate(channel) {
  channel = channel.channel;
  let obj = { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null };
  const intl = channel(1236).intl;
  obj[0] = intl.string(channel(1236).t.w5HAll);
  const intl2 = channel(1236).intl;
  obj[1] = intl2.string(channel(1236).t.Ww4hhq);
  obj[2] = registerAsset;
  const intl3 = channel(1236).intl;
  obj[3] = intl3.string(channel(1236).t.eIi3Om);
  obj[4] = function onCTAPress() {
    const result = outer1_1(outer1_3[5]).handleVoiceChannelsOnboard();
    const obj = outer1_1(outer1_3[5]);
    const result1 = outer1_2(outer1_3[6]).dismissGlobalKeyboard();
    const obj2 = outer1_2(outer1_3[6]);
    const voiceChannel = outer1_1(outer1_3[7]).selectVoiceChannel(channel.id);
  };
  return jsx(NUFActionSheetTemplate, { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null });
};