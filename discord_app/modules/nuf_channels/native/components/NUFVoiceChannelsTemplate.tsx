// discord_app/modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import SelectedChannelActionCreatorsDefault from "../../../../actions/SelectedChannelActionCreators.tsx";
import NUFChannelsManagerDefault from "../NUFChannelsManager.tsx";
import NUFTemplateDefault from "NUFTemplate.tsx";
import _modDef13520 from "../../../../../_runtime/metro/13520__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function NUFVoiceChannelsTemplate(channel) {
      const cResult = channel(576).c(5);
      channel = channel.channel;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.w5HAll);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t.Ww4hhq);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp4 = stringResult;
        tmp5 = stringResult1;
      } else {
        [tmp4, tmp5] = cResult;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult2 = intl3.string(tmp(1126).t.eIi3Om);
        cResult[2] = stringResult2;
        let tmp8 = stringResult2;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== channel.id) {
        let obj2 = {
          title: tmp4,
          description: tmp5,
          imageSrc: _modDef13520,
          CTALabel: tmp8,
          onCTAPress() {
            const result = NUFChannelsManagerDefault.handleVoiceChannelsOnboard();
            const result1 = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
            const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id);
          },
        };
        const tmp14 = jsx(NUFTemplateDefault, {
          title: tmp4,
          description: tmp5,
          imageSrc: _modDef13520,
          CTALabel: tmp8,
          onCTAPress() {
            const result = NUFChannelsManagerDefault.handleVoiceChannelsOnboard();
            const result1 = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
            const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id);
          },
        });
        cResult[3] = channel.id;
        cResult[4] = tmp14;
        let tmp10 = tmp14;
      } else {
        tmp10 = cResult[4];
      }
      return tmp10;
    }
  : function NUFVoiceChannelsTemplate(channel) {
      channel = channel.channel;
      let obj = { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null };
      const intl = channel(1126).intl;
      obj.title = intl.string(channel(1126).t.w5HAll);
      const intl2 = channel(1126).intl;
      obj.description = intl2.string(channel(1126).t.Ww4hhq);
      obj.imageSrc = _modDef13520;
      const intl3 = channel(1126).intl;
      obj.CTALabel = intl3.string(channel(1126).t.eIi3Om);
      obj.onCTAPress = function onCTAPress() {
        const result = NUFChannelsManagerDefault.handleVoiceChannelsOnboard();
        const result1 = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
        const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id);
      };
      return jsx(NUFTemplateDefault, {
        title: null,
        description: null,
        imageSrc: null,
        CTALabel: null,
        onCTAPress: null,
      });
    };
