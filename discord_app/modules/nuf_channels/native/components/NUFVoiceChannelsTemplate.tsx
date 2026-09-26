// === Module 13322: NUFVoiceChannelsTemplate ===

// Module 13322 (NUFVoiceChannelsTemplate)
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1876 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5723 */;
import NUFChannelsManagerDefault from "NUFChannelsManager" /* 13312 */;
import NUFTemplateDefault from "NUFTemplate" /* 13323 */;
import _modDef13324 from "module_13324" /* 13324 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx");

export default function NUFVoiceChannelsTemplate(channel) {
  channel = channel.channel;
  let obj = { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null };
  const intl = channel(1115).intl;
  obj.title = intl.string(channel(1115).t.w5HAll);
  const intl2 = channel(1115).intl;
  obj.description = intl2.string(channel(1115).t.Ww4hhq);
  obj.imageSrc = _modDef13324;
  const intl3 = channel(1115).intl;
  obj.CTALabel = intl3.string(channel(1115).t.eIi3Om);
  obj.onCTAPress = function onCTAPress() {
    const result = NUFChannelsManagerDefault.handleVoiceChannelsOnboard();
    const result1 = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id);
  };
  return jsx(NUFTemplateDefault, { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null });
};