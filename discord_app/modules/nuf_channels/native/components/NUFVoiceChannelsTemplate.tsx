// === Module 14788: NUFVoiceChannelsTemplate ===

// Module 14788 (NUFVoiceChannelsTemplate)
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 2020 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6437 */;
import NUFChannelsManagerDefault from "NUFChannelsManager" /* 14781 */;
import NUFTemplateDefault from "NUFTemplate" /* 14789 */;
import _modDef14790 from "module_14790" /* 14790 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx");

export default function NUFVoiceChannelsTemplate(channel) {
  channel = channel.channel;
  let obj = { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null };
  const intl = channel(1113).intl;
  obj.title = intl.string(channel(1113).t.w5HAll);
  const intl2 = channel(1113).intl;
  obj.description = intl2.string(channel(1113).t.Ww4hhq);
  obj.imageSrc = _modDef14790;
  const intl3 = channel(1113).intl;
  obj.CTALabel = intl3.string(channel(1113).t.eIi3Om);
  obj.onCTAPress = function onCTAPress() {
    const result = NUFChannelsManagerDefault.handleVoiceChannelsOnboard();
    const result1 = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id);
  };
  return jsx(NUFTemplateDefault, { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null });
};