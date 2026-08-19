// discord_app/modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import dismissGlobalKeyboardAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import _modDef4975 from "../../../../actions/SelectedChannelActionCreators.tsx";
import _initializeDefault from "../NUFChannelsManager.tsx";
import NUFActionSheetTemplateDefault from "NUFTemplate.tsx";
import registerAssetDefault from "../../../../../_runtime/12658_registerAsset.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
noopAll;
let result = require("obj132").fileFinishedImporting("modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx");

export default function NUFVoiceChannelsTemplate(channel) {
  channel = channel.channel;
  let obj = { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null };
  const intl = channel(1236).intl;
  obj[0] = intl.string(channel(1236).t.w5HAll);
  const intl2 = channel(1236).intl;
  obj[1] = intl2.string(channel(1236).t.Ww4hhq);
  obj[2] = registerAssetDefault;
  const intl3 = channel(1236).intl;
  obj[3] = intl3.string(channel(1236).t.eIi3Om);
  obj[4] = function onCTAPress() {
    const result = _initializeDefault.handleVoiceChannelsOnboard();
    const result1 = dismissGlobalKeyboardAll.dismissGlobalKeyboard();
    const voiceChannel = _modDef4975.selectVoiceChannel(channel.id);
  };
  return jsx(NUFActionSheetTemplateDefault, { title: null, description: null, imageSrc: null, CTALabel: null, onCTAPress: null });
};