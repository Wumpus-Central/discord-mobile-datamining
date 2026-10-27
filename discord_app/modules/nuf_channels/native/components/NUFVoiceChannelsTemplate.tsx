// === Module 14648: NUFVoiceChannelsTemplate ===

// Module 14648 (NUFVoiceChannelsTemplate)
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1893 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6635 */;
import NUFChannelsManagerDefault from "NUFChannelsManager" /* 14641 */;
import NUFTemplateDefault from "NUFTemplate" /* 14649 */;
import _modDef14650 from "module_14650" /* 14650 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function NUFVoiceChannelsTemplate(channel) {
  const cResult = channel(576).c(5);
  channel = channel.channel;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(tmp(1125).t.w5HAll);
    const intl2 = tmp(1125).intl;
    const stringResult1 = intl2.string(tmp(1125).t.Ww4hhq);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1125).intl;
    const stringResult2 = intl3.string(tmp(1125).t.eIi3Om);
    cResult[2] = stringResult2;
    let tmp8 = stringResult2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== channel.id) {
    let obj2 = {
      title: tmp4,
      description: tmp5,
      imageSrc: _modDef14650,
      CTALabel: tmp8,
      onCTAPress() {
          const result = NUFChannelsManagerDefault.handleVoiceChannelsOnboard();
          const result1 = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
          const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id);
        }
    };
    const tmp14 = jsx(NUFTemplateDefault, {
      title: tmp4,
      description: tmp5,
      imageSrc: _modDef14650,
      CTALabel: tmp8,
      onCTAPress() {
          const result = NUFChannelsManagerDefault.handleVoiceChannelsOnboard();
          const result1 = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
          const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id);
        }
    });
    cResult[3] = channel.id;
    cResult[4] = tmp14;
    let tmp10 = tmp14;
  } else {
    tmp10 = cResult[4];
  }
  return tmp10;
}) : (function NUFVoiceChannelsTemplate(channel) {
  channel = channel.channel;
  let obj = { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null };
  const intl = channel(1125).intl;
  obj.title = intl.string(channel(1125).t.w5HAll);
  const intl2 = channel(1125).intl;
  obj.description = intl2.string(channel(1125).t.Ww4hhq);
  obj.imageSrc = _modDef14650;
  const intl3 = channel(1125).intl;
  obj.CTALabel = intl3.string(channel(1125).t.eIi3Om);
  obj.onCTAPress = function onCTAPress() {
    const result = NUFChannelsManagerDefault.handleVoiceChannelsOnboard();
    const result1 = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id);
  };
  return jsx(NUFTemplateDefault, { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null });
});