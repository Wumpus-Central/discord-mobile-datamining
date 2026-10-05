// === Module 13588: NUFVoiceChannelsTemplate ===

// Module 13588 (NUFVoiceChannelsTemplate)
import Fragment from "Fragment" /* 21 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1881 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5568 */;
import NUFChannelsManagerDefault from "NUFChannelsManager" /* 13578 */;
import NUFTemplateDefault from "NUFTemplate" /* 13589 */;
import AssetRegistryDefault from "AssetRegistry" /* 13590 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
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
    const tmp14 = <tmp13 title={tmp4} description={tmp5} imageSrc={AssetRegistryDefault} CTALabel={tmp8} onCTAPress={function onCTAPress() {
      const obj = NUFChannelsManagerDefault;
      const result = obj.handleVoiceChannelsOnboard();
      const obj2 = KeyboardManagerUtilsAll;
      const result1 = obj2.dismissGlobalKeyboard();
      const obj3 = SelectedChannelActionCreatorsDefault;
      const voiceChannel = obj3.selectVoiceChannel(channel.id);
    }} />;
    cResult[3] = channel.id;
    cResult[4] = tmp14;
    tmp10 = tmp14;
  } else {
    tmp10 = cResult[4];
  }
  return tmp10;
}) : ((channel) => {
  channel = channel.channel;
  NUFTemplateDefault;
  const intl = channel(1126).intl;
  const intl2 = channel(1126).intl;
  const intl3 = channel(1126).intl;
  return <tmp title={intl.string(channel(1126).t.w5HAll)} description={intl2.string(channel(1126).t.Ww4hhq)} imageSrc={AssetRegistryDefault} CTALabel={intl3.string(channel(1126).t.eIi3Om)} onCTAPress={function onCTAPress() {
    const obj = NUFChannelsManagerDefault;
    const result = obj.handleVoiceChannelsOnboard();
    const obj2 = KeyboardManagerUtilsAll;
    const result1 = obj2.dismissGlobalKeyboard();
    const obj3 = SelectedChannelActionCreatorsDefault;
    const voiceChannel = obj3.selectVoiceChannel(channel.id);
  }} />;
});
let result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx");

export default tmp3;