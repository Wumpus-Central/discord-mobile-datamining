// === Module 12656: NUFVoiceChannelsTemplate ===

// Module 12656 (NUFVoiceChannelsTemplate)
import noopAll from "noop" /* 19 */;
import dismissGlobalKeyboardAll from "dismissGlobalKeyboard" /* 1892 */;
import _modDef4975 from "module_4975" /* 4975 */;
import _initializeDefault from "_initialize" /* 12646 */;
import NUFActionSheetTemplateDefault from "NUFActionSheetTemplate" /* 12657 */;
import registerAssetDefault from "registerAsset" /* 12658 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
noopAll;
let result = require("obj132").fileFinishedImporting("modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx");

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
    const result = _initializeDefault.handleVoiceChannelsOnboard();
    const result1 = dismissGlobalKeyboardAll.dismissGlobalKeyboard();
    const voiceChannel = _modDef4975.selectVoiceChannel(channel.id);
  };
  return jsx(NUFActionSheetTemplateDefault, { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null });
};