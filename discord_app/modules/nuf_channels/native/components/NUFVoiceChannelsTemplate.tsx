// === Module 13865: NUFVoiceChannelsTemplate ===

// Module 13865 (NUFVoiceChannelsTemplate)
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1874 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5492 */;
import NUFChannelsManagerDefault from "NUFChannelsManager" /* 13855 */;
import NUFTemplateDefault from "NUFTemplate" /* 13866 */;
import _modDef13867 from "module_13867" /* 13867 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx");

export default function NUFVoiceChannelsTemplate(channel) {
  channel = channel.channel;
  let obj = { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null };
  const intl = channel(1114).intl;
  obj.title = intl.string(channel(1114).t.w5HAll);
  const intl2 = channel(1114).intl;
  obj.description = intl2.string(channel(1114).t.Ww4hhq);
  obj.imageSrc = _modDef13867;
  const intl3 = channel(1114).intl;
  obj.CTALabel = intl3.string(channel(1114).t.eIi3Om);
  obj.onCTAPress = function onCTAPress() {
    const result = NUFChannelsManagerDefault.handleVoiceChannelsOnboard();
    const result1 = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id);
  };
  return jsx(NUFTemplateDefault, { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null });
};