// === Module 13245: NUFVoiceChannelsTemplate ===

// Module 13245 (NUFVoiceChannelsTemplate)
import noopAll from "noop" /* 19 */;
import NUFActionSheetTemplateDefault from "NUFActionSheetTemplate" /* 13246 */;
import registerAssetDefault from "registerAsset" /* 13247 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
let result = require("set").fileFinishedImporting("modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx");

export default function NUFVoiceChannelsTemplate(channel) {
  channel = channel.channel;
  let obj = { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null };
  const intl = channel(1236).intl;
  obj[0] = intl.string(channel(1236).t.w5HAll);
  const intl2 = channel(1236).intl;
  obj[1] = intl2.string(channel(1236).t.Ww4hhq);
  obj[2] = registerAssetDefault;
  const intl3 = channel(1236).intl;
  obj[3] = intl3.string(channel(1236).t.eIi3Om);
  obj[4] = function onCTAPress() {
    const result = closure_1_1(closure_1_3[5]).handleVoiceChannelsOnboard();
    const obj = closure_1_1(closure_1_3[5]);
    const result1 = closure_1_2(closure_1_3[6]).dismissGlobalKeyboard();
    const obj2 = closure_1_2(closure_1_3[6]);
    const voiceChannel = closure_1_1(closure_1_3[7]).selectVoiceChannel(channel.id);
  };
  return jsx(NUFActionSheetTemplateDefault, { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null });
};