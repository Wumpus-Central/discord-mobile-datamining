// === Module 8318: NUFVoiceChannelsTemplate ===

// Module 8318 (NUFVoiceChannelsTemplate)
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 2018 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6671 */;
import NUFChannelsManagerDefault from "NUFChannelsManager" /* 8311 */;
import NUFTemplateDefault from "NUFTemplate" /* 8319 */;
import _modDef8320 from "module_8320" /* 8320 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx");

export default function NUFVoiceChannelsTemplate(channel) {
  channel = channel.channel;
  let obj = { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null };
  const intl = channel(1112).intl;
  obj.title = intl.string(channel(1112).t.w5HAll);
  const intl2 = channel(1112).intl;
  obj.description = intl2.string(channel(1112).t.Ww4hhq);
  obj.imageSrc = _modDef8320;
  const intl3 = channel(1112).intl;
  obj.CTALabel = intl3.string(channel(1112).t.eIi3Om);
  obj.onCTAPress = function onCTAPress() {
    const result = NUFChannelsManagerDefault.handleVoiceChannelsOnboard();
    const result1 = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id);
  };
  return jsx(NUFTemplateDefault, { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null });
};