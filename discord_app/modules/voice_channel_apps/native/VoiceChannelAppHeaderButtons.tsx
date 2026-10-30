// discord_app/modules/voice_channel_apps/native/VoiceChannelAppHeaderButtons.tsx
import _modDef3963 from "../VoiceChannelApps.messages.js";
import _modDef11846 from "../../../../_runtime/metro/11846__.js";
import VoiceChannelAppActionCreators from "../VoiceChannelAppActionCreators.tsx";
import VoicePanelIconButtonDefault from "../../voice_panel/native/shared/VoicePanelIconButton.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_apps/native/VoiceChannelAppHeaderButtons.tsx");

export default function VoiceChannelAppHeaderButtons(arg0) {
  ({ channel, inCall } = arg0);
  let id;
  const voiceChannelAppAvailable = id(19183).useVoiceChannelAppAvailable(channel, inCall);
  const obj = id(19183);
  const voiceChannelAppOpen = id(19183).useVoiceChannelAppOpen(channel, inCall);
  const obj2 = id(19183);
  const voiceChannelAppVisible = id(19183).useVoiceChannelAppVisible(channel);
  id = channel.id;
  let tmp7Result = null;
  if (voiceChannelAppAvailable) {
    const obj4 = {
      icon: importDefault(voiceChannelAppVisible ? 17733 : 8600),
      accessibilityLabel: null,
      onPress: null,
    };
    const intl = tmp(1114).intl;
    if (voiceChannelAppVisible) {
      let ZtYyOx = tmp(1114).t["3jrUBj"];
    } else {
      ZtYyOx = _modDef3963.ZtYyOx;
    }
    obj4.accessibilityLabel = intl.string(ZtYyOx);
    obj4.onPress = function onPress() {
      return VoiceChannelAppActionCreators.toggleVoiceChannelAppSurface(id);
    };
    const items = [closure_3(VoicePanelIconButtonDefault, obj4)];
    let tmp9Result = null;
    if (voiceChannelAppOpen) {
      const obj5 = { icon: _modDef11846, accessibilityLabel: null, onPress: null };
      const intl2 = tmp(1114).intl;
      obj5.accessibilityLabel = intl2.string(_modDef3963["D+wwh8"]);
      obj5.onPress = function onPress() {
        return VoiceChannelAppActionCreators.closeVoiceChannelApp(id);
      };
      tmp9Result = closure_3(VoicePanelIconButtonDefault, obj5);
      const tmp10Result = VoicePanelIconButtonDefault;
    }
    const obj6 = { children: null };
    items[1] = tmp9Result;
    obj6.children = items;
    tmp7Result = closure_5(closure_4, obj6);
  }
  return tmp7Result;
}
