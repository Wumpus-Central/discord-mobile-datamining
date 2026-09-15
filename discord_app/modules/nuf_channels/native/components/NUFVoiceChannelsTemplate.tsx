// === Module 13871: NUFVoiceChannelsTemplate ===

// Module 13871 (NUFVoiceChannelsTemplate)
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1875 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5496 */;
import NUFChannelsManagerDefault from "NUFChannelsManager" /* 13861 */;
import NUFTemplateDefault from "NUFTemplate" /* 13872 */;
import _modDef13873 from "module_13873" /* 13873 */;
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
  obj.imageSrc = _modDef13873;
  const intl3 = channel(1115).intl;
  obj.CTALabel = intl3.string(channel(1115).t.eIi3Om);
  obj.onCTAPress = function onCTAPress() {
    const result = NUFChannelsManagerDefault.handleVoiceChannelsOnboard();
    const result1 = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id);
  };
  return jsx(NUFTemplateDefault, { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null });
};