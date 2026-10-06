// discord_app/modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import SelectedChannelActionCreatorsDefault from "../../../../actions/SelectedChannelActionCreators.tsx";
import NUFChannelsManagerDefault from "../NUFChannelsManager.tsx";
import NUFTemplateDefault from "NUFTemplate.tsx";
import AssetRegistryDefault from "../../../../../_runtime/13606_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let channel;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let tmp10;
      let tmp4;
      let tmp5;
      let tmp8;
      let obj = channel(576);
      const cResult = obj.c(5);
      channel = channel.channel;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(channel(1126).t.w5HAll);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(channel(1126).t.Ww4hhq);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp4 = stringResult;
        tmp5 = stringResult1;
      } else {
        [tmp4, tmp5] = cResult;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult2 = intl3.string(channel(1126).t.eIi3Om);
        cResult[2] = stringResult2;
        tmp8 = stringResult2;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== channel.id) {
        NUFTemplateDefault;
        const tmp14 = (
          <tmp13
            title={tmp4}
            description={tmp5}
            imageSrc={AssetRegistryDefault}
            CTALabel={tmp8}
            onCTAPress={function onCTAPress() {
              const obj = NUFChannelsManagerDefault;
              const result = obj.handleVoiceChannelsOnboard();
              const obj2 = KeyboardManagerUtilsAll;
              const result1 = obj2.dismissGlobalKeyboard();
              const obj3 = SelectedChannelActionCreatorsDefault;
              const voiceChannel = obj3.selectVoiceChannel(channel.id);
            }}
          />
        );
        cResult[3] = channel.id;
        cResult[4] = tmp14;
        tmp10 = tmp14;
      } else {
        tmp10 = cResult[4];
      }
      return tmp10;
    }
  : (channel) => {
      channel = channel.channel;
      NUFTemplateDefault;
      const intl = channel(1126).intl;
      const intl2 = channel(1126).intl;
      const intl3 = channel(1126).intl;
      return (
        <tmp
          title={intl.string(channel(1126).t.w5HAll)}
          description={intl2.string(channel(1126).t.Ww4hhq)}
          imageSrc={AssetRegistryDefault}
          CTALabel={intl3.string(channel(1126).t.eIi3Om)}
          onCTAPress={function onCTAPress() {
            const obj = NUFChannelsManagerDefault;
            const result = obj.handleVoiceChannelsOnboard();
            const obj2 = KeyboardManagerUtilsAll;
            const result1 = obj2.dismissGlobalKeyboard();
            const obj3 = SelectedChannelActionCreatorsDefault;
            const voiceChannel = obj3.selectVoiceChannel(channel.id);
          }}
        />
      );
    };
let result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx");

export default tmp3;
