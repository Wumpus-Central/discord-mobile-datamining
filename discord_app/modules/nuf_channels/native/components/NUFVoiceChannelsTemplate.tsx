// === Module 15426: NUFVoiceChannelsTemplate ===

// Module 15426 (NUFVoiceChannelsTemplate)
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 2017 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6786 */;
import NUFChannelsManagerDefault from "NUFChannelsManager" /* 15419 */;
import NUFTemplateDefault from "NUFTemplate" /* 15427 */;
import _modDef15428 from "module_15428" /* 15428 */;
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
  obj.imageSrc = _modDef15428;
  const intl3 = channel(1113).intl;
  obj.CTALabel = intl3.string(channel(1113).t.eIi3Om);
  obj.onCTAPress = function onCTAPress() {
    const result = NUFChannelsManagerDefault.handleVoiceChannelsOnboard();
    const result1 = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id);
  };
  return jsx(NUFTemplateDefault, { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null });
};